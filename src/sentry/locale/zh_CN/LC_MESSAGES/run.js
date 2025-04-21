const fs = require('fs');

const origin = require('./origin');
const newOutput = require('./newOutput');

const originKeys = new Set(Object.keys(origin));
const translated = newOutput.translated || {};
const untranslated = newOutput.untranslated || {};

const translatedKeys = new Set(Object.keys(translated));
const untranslatedKeys = new Set(Object.keys(untranslated));

// origin 中存在但 newOutput 中不存在的键，包含 key-value
const originOnly = {};
[...originKeys].forEach(key => {
  if (!translatedKeys.has(key) && !untranslatedKeys.has(key)) {
    originOnly[key] = origin[key];
  }
});

// translated 中存在但 origin 中不存在的键，包含 key-value
const translatedOnly = {};
[...translatedKeys].forEach(key => {
  if (!originKeys.has(key)) {
    translatedOnly[key] = translated[key];
  }
});

// untranslated 中存在但 origin 中不存在的键，包含 key-value
const untranslatedKeysOnly = {};
[...untranslatedKeys].forEach(key => {
  if (!originKeys.has(key)) {
    untranslatedKeysOnly[key] = untranslated[key];
  }
});

const result = {
  originOnly,
  translatedOnly,
  untranslatedKeysOnly,
};

fs.writeFileSync(
  'diffResult.js',
  'module.exports = ' + JSON.stringify(result, null, 2) + ';'
);
console.log('差异已写入 diffResult.js');
