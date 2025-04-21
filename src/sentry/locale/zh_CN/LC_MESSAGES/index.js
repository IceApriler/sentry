const fs = require('fs');
const readline = require('readline');

const inputFile = 'django.po';
const outputFile = 'output.js';

const rl = readline.createInterface({
  input: fs.createReadStream(inputFile),
  crlfDelay: Infinity,
});

let msgid = '';
let msgstr = '';
let plural = false;
let insideMsgid = false;
let insideMsgstr = false;
let insidePlural = false;
let insideMsgstr0 = false;
let translatedEntries = [];
let untranslatedEntries = [];

let output = `{
  "translated": {\n`;

function flushEntry() {
  if (msgid) {
    const escMsgid = msgid.replace(/\n/g, '\\n'); // 保留换行符
    const escMsgstr = msgstr.replace(/\n/g, '\\n'); // 保留换行符

    if (plural) {
      if (msgstr) {
        output += `    "${escMsgid}": [\n      "${escMsgstr}",\n    ],\n`;
      } else {
        untranslatedEntries.push(`    "${escMsgid}": [""]`);
      }
    } else if (insideMsgstr0) {
      // 特别处理 msgstr[0]
      if (msgstr) {
        output += `    "${escMsgid}": [\n      "${escMsgstr}",\n    ],\n`;
      } else {
        untranslatedEntries.push(`    "${escMsgid}": [""]`);
      }
    } else {
      if (msgstr) {
        output += `    "${escMsgid}": ["${escMsgstr}"],\n`;
      } else {
        untranslatedEntries.push(`    "${escMsgid}": [""]`);
      }
    }
  }
  msgid = '';
  msgstr = '';
  insideMsgid = false;
  insideMsgstr = false;
  insidePlural = false;
  insideMsgstr0 = false;
  plural = false;
}

rl.on('line', line => {
  if (line.startsWith('msgid_plural')) {
    flushEntry(); // 清除上一个条目
    insideMsgid = true;
    insideMsgstr = false;
    insidePlural = true;
    plural = true;
    msgid = line
      .replace(/^msgid_plural\s+/, '')
      .replace(/^"/, '')
      .replace(/"$/, '');
  } else if (line.startsWith('msgid')) {
    flushEntry();
    insideMsgid = true;
    insideMsgstr = false;
    insidePlural = false;
    msgid = line
      .replace(/^msgid\s+/, '')
      .replace(/^"/, '')
      .replace(/"$/, '');
  } else if (insideMsgid && /^"/.test(line)) {
    const trimmed = line.replace(/^"/, '').replace(/"$/, '');
    msgid += trimmed;
  } else if (line.startsWith('msgstr[0]')) {
    insideMsgid = false;
    insideMsgstr = true;
    insideMsgstr0 = true;
    plural = false; // Reset plural flag on msgstr[0]
    msgstr = line
      .replace(/^msgstr\[0\]\s+/, '')
      .replace(/^"/, '')
      .replace(/"$/, '');
  } else if (line.startsWith('msgstr')) {
    insideMsgid = false;
    insideMsgstr = true;
    plural = false; // Reset plural flag on msgstr
    msgstr = line
      .replace(/^msgstr\s+/, '')
      .replace(/^"/, '')
      .replace(/"$/, '');
  } else if (insideMsgstr && /^"/.test(line)) {
    const trimmed = line.replace(/^"/, '').replace(/"$/, '');
    msgstr += trimmed;
  } else if (line.trim() === '') {
    flushEntry();
  }
});

rl.on('close', () => {
  flushEntry();

  // 删除最后一个逗号
  if (output.endsWith(',\n')) {
    output = output.slice(0, -2) + '\n';
  }

  output += '  },\n';
  output += '  "untranslated": {\n';
  output += untranslatedEntries.join(',\n') + '\n';
  output += '  }\n';
  output += '}\n';

  fs.writeFileSync(outputFile, output, 'utf8');
  console.log(`✅ 转换完成，输出文件为 ${outputFile}`);
});
