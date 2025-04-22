/*! For license information please see zh-cn.8edcfcdca94c78fabf41.js.LICENSE.txt */
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
  ['locale/zh-cn'],
  {
    '../node_modules/moment/locale/zh-cn.js': function (e, t, o) {
      !(function (e) {
        'use strict';
        e.defineLocale('zh-cn', {
          months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
            '_'
          ),
          monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
          weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
          weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
          weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日Ah点mm分',
            LLLL: 'YYYY年M月D日ddddAh点mm分',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm',
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function (e, t) {
            return (
              12 === e && (e = 0),
              '凌晨' === t || '早上' === t || '上午' === t
                ? e
                : '下午' === t || '晚上' === t
                  ? e + 12
                  : e >= 11
                    ? e
                    : e + 12
            );
          },
          meridiem: function (e, t, o) {
            var n = 100 * e + t;
            return n < 600
              ? '凌晨'
              : n < 900
                ? '早上'
                : n < 1130
                  ? '上午'
                  : n < 1230
                    ? '中午'
                    : n < 1800
                      ? '下午'
                      : '晚上';
          },
          calendar: {
            sameDay: '[今天]LT',
            nextDay: '[明天]LT',
            nextWeek: function (e) {
              return e.week() !== this.week() ? '[下]dddLT' : '[本]dddLT';
            },
            lastDay: '[昨天]LT',
            lastWeek: function (e) {
              return this.week() !== e.week() ? '[上]dddLT' : '[本]dddLT';
            },
            sameElse: 'L',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
          ordinal: function (e, t) {
            switch (t) {
              case 'd':
              case 'D':
              case 'DDD':
                return e + '日';
              case 'M':
                return e + '月';
              case 'w':
              case 'W':
                return e + '周';
              default:
                return e;
            }
          },
          relativeTime: {
            future: '%s后',
            past: '%s前',
            s: '几秒',
            ss: '%d 秒',
            m: '1 分钟',
            mm: '%d 分钟',
            h: '1 小时',
            hh: '%d 小时',
            d: '1 天',
            dd: '%d 天',
            w: '1 周',
            ww: '%d 周',
            M: '1 个月',
            MM: '%d 个月',
            y: '1 年',
            yy: '%d 年',
          },
          week: {
            dow: 1,
            doy: 4,
          },
        });
      })(o('../node_modules/moment/moment.js'));
    },
    '../src/sentry/locale/zh_CN/LC_MESSAGES/django.po': e => {
      var translatedOnly = {
        300: ['300'],
        '%s thinks Sentry can help monitor your mobile app': [
          '%s认为 Sentry 可以帮助监控你的移动端 App',
        ],
        Light: ['亮'],
        Dark: ['暗'],
        'Default to system': ['系统默认'],
        'Value must be valid JSON.': ['当前值必须是有效的JSON'],
        'Enter a valid email address.': ['请输入有效电子邮件地址'],
        Enroll: ['加入'],
        'Recovery Codes': ['恢复代码'],
        'Recovery codes are the only way to access your account if you lose your device and cannot receive two factor authentication codes.':
          ['`恢复代码` 用于您丢失了设备并无法使用二步验证时进行访问'],
        Activate: ['激活'],
        'View Codes': ['显示代码'],
        'Text Message': ['文本消息'],
        "This authenticator sends you text messages for verification.  It's useful as a backup method or when you do not have a phone that supports an authenticator application.":
          [
            '验证器已经给你发送了文本验证信息。当你没有支持验证器的手机时，这将是一个有用的后备方式。',
          ],
        'A confirmation code was sent to %(phone_mask)s. It is valid for %(ttl)d seconds.':
          ['确认码已发送至%(phone_mask)s。%(ttl)d秒内有效。'],
        'Error: we failed to send a text message to you. You can try again later or sign in with a different method.':
          ['错误：给你发送文本信息时失败了。你可以再次尝试或使用其它方法登录。'],
        '%(code)s is your Sentry two-factor enrollment code. You are about to set up text message based two-factor authentication.':
          [
            '%(code)s 是您的 Sentry 双因子认证注册码。您即将建立基于文本消息的双因素身份验证。',
          ],
        '%(code)s is your Sentry authentication code.': [
          '%(code)s 是你的 Sentry 授权码。',
        ],
        'Authenticator App': ['验证器应用'],
        'An authenticator application that supports TOTP (like Google Authenticator or 1Password) can be used to access your account securely using a token and secret key. A new token is generated every 30 seconds.':
          [
            '支持TOTP的认证器应用程序（如谷歌认证器或1Password）可用于使用令牌和 键 安全地访问您的账户。每30秒就会生成一个新的令牌。',
          ],
        'Your account is currently linked to an authenticator application. To link to a new device or application, or to update your secret key, click "Confirm" below. By clicking "Confirm", your existing secret key will be replaced and will no longer work to access your account.':
          [
            '你的帐号已经设置了多步认证。如需链接到新设备，或需更新密钥，请点击 "确认" 按钮。如果点击确认，您现有的密钥将被重置，且不能访问当前帐号。',
          ],
        'U2F (Universal 2nd Factor)': ['U2F (Universal 2nd Factor)'],
        "Authenticate with a U2F hardware device. This is a device like a Yubikey or something similar which supports FIDO's U2F specification. This also requires a browser which supports this system (like Google Chrome).":
          [
            '使用 U2F 硬件设备授权。这是一个类似 Yubikey 或其它支持 FIDO 的 U2F 本协议的设备。这还需要一个支持本系统的浏览器 (比如 Google Chrome)。',
          ],
        'You have successfully linked your account to your SSO provider.': [
          '您已成功将您的账户链接至 SSO 提供程序。',
        ],
        'SSO has been configured for your organization and any existing members have been sent an email to link their accounts.':
          ['您的组织已配置好SSO，我们已向所有成员发送邮件来链接他们的账户。'],
        'There was an error encountered during authentication.': ['身份验证出错。'],
        'You must be authenticated to link accounts.': [
          '如要链接账户，您必须先通过身份验证。',
        ],
        'The provider did not return a valid user identity.': [
          '身份验证提供程序未返回合法的用户信息。',
        ],
        'This password is too long. It must contain no more than %(max_length)d characters.':
          ['您的密码太长，最多只能包含%(max_length)d个字符。'],
        'Your password must contain no more than %(max_length)d characters.': [
          '您的密码只能包含%(max_length)d个字符。',
        ],
        'Register Auth0': ['注册 Auth0'],
        'The IdPs unique ID attribute key for the user. This is what Sentry will used to identify the users identity from the identity provider.':
          ['用户的 IdP 唯一 ID 属性键。 Sentry 将用它来从身份提供者识别用户身份。'],
        'The IdPs email address attribute key for the user. Upon initial linking this will be used to identify the user in Sentry.':
          [
            '用户的 IdP 电子邮件地址属性键。 在初始链接时，这将用于识别 Sentry 中的用户。',
          ],
        'Service Provider Metadata': ['服务提供商元数据'],
        'SAML2 Setup': ['配置 SAML2'],
        'Save Attributes': ['保存属性'],
        'Get metadata': ['获取元数据'],
        'Parse Metadata': ['解析元数据'],
        'Save Metadata': ['保存元数据'],
        'Register Okta': ['注册 Okta'],
        'Register OneLogin': ['注册 OneLogin'],
        'The organization does not exist or does not have SAML SSO enabled.': [
          '该组织不存在或没有启用单点登录"SAML SSO"',
        ],
        'SAML SSO failed, {reason}': ['单点登录SAML SSO失败，{reason}'],
        'Failed to map SAML attributes. Assertion returned the following attribute keys: {error_msg_keys}':
          ['映射 SAML 属性失败。请确保 SAML 服务返回了以下属性键：{error_msg_keys}'],
        'Register Rippling': ['注册 Rippling'],
        'Complete Setup': ['完成安装'],
        Afrikaans: ['南非荷兰语'],
        Arabic: ['阿拉伯语'],
        Azerbaijani: ['阿塞拜疆语'],
        Bulgarian: ['保加利亚语'],
        Belarusian: ['白俄罗斯语'],
        Bengali: ['孟加拉语'],
        Breton: ['布列塔尼语'],
        Bosnian: ['波斯尼亚语'],
        Catalan: ['加泰罗尼亚语'],
        Czech: ['捷克语'],
        Welsh: ['威尔士语'],
        Danish: ['丹麦语'],
        German: ['德语'],
        Greek: ['希腊语'],
        English: ['英语'],
        Esperanto: ['世界语'],
        Spanish: ['西班牙语'],
        Estonian: ['爱沙尼亚语'],
        Basque: ['巴斯克语'],
        Persian: ['波斯语'],
        Finnish: ['芬兰语'],
        French: ['法语'],
        Irish: ['爱尔兰语'],
        Galician: ['加利西亚语'],
        Hebrew: ['希伯来语'],
        Hindi: ['印地语'],
        Croatian: ['克罗地亚语'],
        Hungarian: ['匈牙利语'],
        Interlingua: ['国际语'],
        Indonesian: ['印尼语'],
        Icelandic: ['冰岛语'],
        Italian: ['意大利语'],
        Japanese: ['日语'],
        Georgian: ['格鲁吉亚语'],
        Kazakh: ['哈萨克语'],
        Khmer: ['高棉语'],
        Kannada: ['卡纳达语'],
        Korean: ['韩语'],
        Luxembourgish: ['卢森堡语'],
        Lithuanian: ['立陶宛语'],
        Latvian: ['拉脱维亚语'],
        Macedonian: ['马其顿语'],
        Malayalam: ['马拉雅拉姆语'],
        Mongolian: ['蒙古语'],
        Burmese: ['缅甸语'],
        'Norwegian Bokmal': ['巴克摩挪威语'],
        Nepali: ['尼泊尔语'],
        Dutch: ['荷兰语'],
        'Norwegian Nynorsk': ['耐诺斯克挪威语'],
        Ossetic: ['奥塞梯语'],
        Punjabi: ['旁遮普语'],
        Polish: ['波兰语'],
        Portuguese: ['葡萄牙语'],
        'Brazilian Portuguese': ['巴西葡萄牙语'],
        Romanian: ['罗马尼亚语'],
        Russian: ['俄语'],
        Slovak: ['斯洛伐克语'],
        Slovenian: ['斯洛文尼亚语'],
        Albanian: ['阿尔巴尼亚语'],
        Serbian: ['塞尔维亚语'],
        Swedish: ['瑞典语'],
        Swahili: ['斯瓦希里语'],
        Tamil: ['泰米尔语'],
        Telugu: ['泰卢固语'],
        Thai: ['泰语'],
        Turkish: ['土耳其语'],
        Tatar: ['鞑靼语'],
        Udmurt: ['乌德穆尔特语'],
        Ukrainian: ['乌克兰语'],
        Urdu: ['乌尔都语'],
        Vietnamese: ['越南语'],
        'Simplified Chinese': ['简体中文'],
        'Traditional Chinese': ['正体中文'],
        'The {name} integration has been enabled.': ['{name}集成已启用。'],
        'The {name} integration has been disabled.': ['{name}集成已禁用。'],
        'Configuration for the {name} integration has been saved.': [
          '对{name}集成的配置已保存。',
        ],
        'Big Integer': ['大整数'],
        "'%s' is not a valid JSON string.": ["'%s' 不是有效JSON字符串"],
        'Your {identity_provider} account has been associated with your Sentry account': [
          '你的 {identity_provider} 账户已关联至 Sentry 账户',
        ],
        'Path may not contain spaces or quotations': ['路径不能包含空格或引号'],
        Installation: ['安装'],
        'Please validate the Cloudformation stack was created successfully': [
          '请确认 Cloudformation 中 stack 已成功创建',
        ],
        'Unknown error': ['未知错误'],
        'Bitbucket URL': ['Bitbucket 地址'],
        'The base URL for your Bitbucket Server instance, including the host and protocol.':
          ['你的Bitbucket服务器的实例地址, 包括域名和协议.'],
        'Verify SSL': ['验证SSL'],
        'By default, we verify SSL certificates when making requests to your Bitbucket instance.':
          ['默认情况下，向 Bitbucket 实例发起请求时我们会验证 SSL 证书。'],
        'Bitbucket Consumer Key': ['Bitbucket用户密钥'],
        'Bitbucket Consumer Private Key': ['Bitbucket用户私钥'],
        'It seems that your GitHub account has been installed on another Sentry organization. Please uninstall and try again.':
          ['您的 GitHub 帐户似乎已安装在另一个Sentry组织上。请卸载并重试。'],
        'It seems that your Sentry organization has an installation pending deletion. Please wait ~15min for the uninstall to complete and try again.':
          ['看来您的 Sentry 组织有一个待删除的安装。请等待 ~15分钟，待卸载完成后再试。'],
        'The "base URL" for your GitHub enterprise instance, includes the host and protocol.':
          ['你的GitLab Enterprise实例地址，包括域名和协议。'],
        'The App ID of your Sentry app. This can be found on your apps configuration page.':
          ['您Sentry应用的ID，可以在您项目配置也找到。'],
        'The GitHub App name of your Sentry app. This can be found on the apps configuration page.':
          ['您Sentry应用的GitHub应用名称，可以在应用配置页面找到。'],
        'By default, we verify SSL certificates when delivering payloads to your GitHub Enterprise instance':
          ['默认情况下，向 Github Enterprise 实例发起请求时我们会验证 SSL 证书。'],
        'We require a webhook secret to be configured. This can be generated as any random string value of your choice and should match your GitHub app configuration.':
          [
            '我们需要配置一个 webhook 密码。 可以是您选择生成的任何随机字符串值，并且应该与您的 GitHub 应用程序配置相匹配。',
          ],
        'The Private Key generated for your Sentry GitHub App.': [
          '为您Sentry Github应该生成的私钥。',
        ],
        'GitLab URL': ['GitLab地址'],
        'GitLab Group Path': ['GitLab组路径'],
        'my-group/my-subgroup': ['我的组/我的子组'],
        'Include Subgroups': ['包含子组'],
        'By default, we verify SSL certificates when delivering payloads to your GitLab instance, and request GitLab to verify SSL when it delivers webhooks to Sentry.':
          [
            '默认情况下，我们在向您的 GitLab 实例发送数据时会验证其 SSL 证书，并要求GitLab在通过Webhook 请求Sentry时验证 SSL证书。',
          ],
        'GitLab Application ID': ['GitLab应用ID'],
        '5832fc6e14300a0d962240a8144466eef4ee93ef0d218477e55f11cf12fc3737': [
          '5832fc6e14300a0d962240a8144466eef4ee93ef0d218477e55f11cf12fc3737',
        ],
        'GitLab Application Secret': ['GitLab应用秘钥'],
        'Jira integration is a required field.': ['Jira 集成是必填字段。'],
        'Jira Marketplace': ['Jira Marketplace'],
        Instance: ['实例'],
        'Sync Sentry Status to Jira': ['同步Sentry状态到Jira'],
        'When a Sentry issue changes status, change the status of the linked ticket in Jira.':
          ['当一个 Sentry 事件 改变了状态，同时 Jira 相应票据 链接 中的状态'],
        'Add Jira Project': ['添加 Jira 项目'],
        'All projects configured': ['所有项目已配置'],
        'Could not find Jira project': ['没有找到 Jira 项目'],
        'Select a status': ['选择一个状态'],
        'When resolved': ['当被解决'],
        'When unresolved': ['当被标注未解决'],
        'Jira Project': ['Jira 项目'],
        'Sync Sentry Assignment to Jira': ['同步 Sentry 任务至 Jira'],
        'When an issue is assigned in Sentry, assign its linked Jira ticket to the same user.':
          ['当一个 事件 在Sentry中被分派。在 Jira相应票据 链接 中分派给同一个用户。'],
        'Sync Sentry Comments to Jira': ['同步Sentry评论到Jira'],
        'Post comments from Sentry issues to linked Jira tickets': [
          '从Sentry发布评论到关联的Jira条目',
        ],
        'Sync Jira Status to Sentry': ['同步Jira状态到Sentry'],
        'When a Jira ticket is marked done, resolve its linked issue in Sentry. When a Jira ticket is removed from being done, unresolve its linked Sentry issue.':
          [
            '当Jira中票据被标记完成，标记对应Sentry事件为解决。当Jira中票据移除已完成状态，标记对应Sentry事件为未解决。',
          ],
        'Sync Jira Assignment to Sentry': ['同步 Jira 任务至 Sentry'],
        'When a ticket is assigned in Jira, assign its linked Sentry issue to the same user.':
          ['当一个工单在 Jira 中被指派时，指派其在 Sentry 中关联的问题给同一用户。'],
        'Unable to communicate with the Jira instance. You may need to reinstall the addon.':
          ['无法与现有 Jira 实例通讯，你可能需要重装 Jira 插件。'],
        'Your organization does not have access to this feature': [
          '您的组织没有权限访问这个特性',
        ],
        'Jira URL': ['Jira地址'],
        'The base URL for your Jira Server instance, including the host and protocol.': [
          '您的Jira 服务实例地址，需要包含域名和协议。',
        ],
        'By default, we verify SSL certificates when making requests to your Jira instance.':
          ['默认情况下，在向Jira实例发起请求的时候我们会验证 SSL证书。'],
        'Jira Consumer Key': ['Jira Consumer Key'],
        'Jira Consumer Private Key': ['Jira用户私钥（Jira Consumer Private Key）'],
        'The channel or user "%(channel)s" could not be found in the %(team)s Team.': [
          '在 %(team)s 团队中找不到频道或用户“%(channel)s”。',
        ],
        'Teams Marketplace': ['团队市场'],
        'Invalid {field}': ['无效的 {field}'],
        'The service "%(service)s" has not been granted access in the %(account)s Pagerduty account.':
          ['服务%(service)s不存在，或在%(account)s Pageduty 账号中未被允许访问'],
        'The provided %(proper_name)s account is linked to a different Sentry user. To continue linking the current Sentry user, please use a different %(proper_name)s account.':
          [
            '提供的%(proper_name)s账户已关联了另一个 Sentry 用户。 要继续关联当前 Sentry 用户，请使用其他%(proper_name)s帐户。',
          ],
        Workspace: ['工作区'],
        '\nVercel is an all-in-one platform with Global CDN supporting static & JAMstack deployment and Serverless Functions.\n':
          [
            '\nVercel 是一个多合一平台，提供有依托于全球 CDN 的静态和 JAMstack 部署，以及 Serverless 函数服务。\n',
          ],
        "Visit the Vercel Marketplace to install this integration. After installing the Sentry integration, you'll be redirected back to Sentry to finish syncing Vercel and Sentry projects.":
          [
            '访问 Vercel 市场以安装此集成。安装 Sentry 集成后，您将被重定向回 Sentry 以完成 Vercel 和 Sentry 项目的同步。',
          ],
        'Vercel Marketplace': ['Vercel 市场'],
        'Connect Your Projects': ['连接你的项目'],
        'Install a [source code integration]({}) and configure your repositories.': [
          '安装 [代码集成]({}) 并配置您的存储库。',
        ],
        'Vercel project...': ['Vercel 项目...'],
        'Link your Sentry projects to complete your installation on Vercel': [
          '连接你的Sentry项目以完成Vercel的安装',
        ],
        'Complete on Vercel': ['Vercel完成'],
        'Sync Sentry Status to Azure DevOps': ['同步Sentry状态到Azure DevOps'],
        'When a Sentry issue changes status, change the status of the linked work item in Azure DevOps.':
          ['当Sentry的问题状态变化时同步到Azure Devops的工作项中。'],
        'Add Azure DevOps Project': ['添加 Azure DevOps 项目'],
        'Could not find Azure DevOps project': ['没有找到 Azure DevOps 项目'],
        'Azure DevOps Project': ['Azure DevOps 项目'],
        'Sync Sentry Assignment to Azure DevOps': ['同步 Sentry 任务至 Azure DevOps'],
        'When an issue is assigned in Sentry, assign its linked Azure DevOps work item to the same user.':
          ['在 Sentry中分配问题时，将其链接的 Azure DevOps 工作项分配给同一用户。'],
        'Sync Sentry Comments to Azure DevOps': ['同步Sentry评论到Azure DevOps'],
        'Post comments from Sentry issues to linked Azure DevOps work items': [
          '将 Sentry 问题的评论发布到关联的 Azure DevOps 工作项中',
        ],
        'Sync Azure DevOps Status to Sentry': ['同步 Azure DevOps 状态至 Sentry'],
        'When a Azure DevOps work item is marked done, resolve its linked issue in Sentry. When a Azure DevOps work item is removed from being done, unresolve its linked Sentry issue.':
          [
            '当 Azure DevOps 工作项被标记为完成时，将 Sentry 中关联的问题标记为已解决； 当 Azure DevOps 工作项被从已完成中删除时，将 Sentry 中关联的问题标记为未解决。',
          ],
        'Sync Azure DevOps Assignment to Sentry': ['同步 Azure DevOps 任务至 Sentry'],
        'When a work item is assigned in Azure DevOps, assign its linked Sentry issue to the same user.':
          ['在 Azure DevOps 中分配工作项时，将其关联的 Sentry 问题分配给同一用户。'],
        MyProject: ['我的项目'],
        'Work Item Type': ['工作项类型'],
        Bug: ['Bug'],
        Request: ['请求'],
        'Stacktrace (most recent call first):': ['Stacktrace (最近的调用最先显示)'],
        'Stacktrace (most recent call last):': ['Stacktrace (最近的调用最后显示)'],
        Inactive: ['无效的'],
        Forever: ['永远'],
        'grouped messages': ['已分组消息'],
        'grouped message': ['已分组消息'],
        'Locked (Migration in Progress)': ['锁定（Migration中）'],
        'Automatically Resolved': ['自动解决'],
        Unignored: ['忽略'],
        Regressed: ['回归'],
        Assigned: ['已分配'],
        Unassigned: ['未分配'],
        Deleted: ['删除'],
        'Deleted and Discarded': ['删除并丢弃'],
        Reviewed: ['已审核'],
        'Resolved in Release': ['在正式版中解决'],
        'Resolved in Commit': ['在提交中解决'],
        'Resolved in Pull Request': ['在拉取请求中解决'],
        Commit: ['提交'],
        'Pull Request': ['拉取请求'],
        'Tracker Issue': ['问题'],
        Resolves: ['解决'],
        Linked: ['链接'],
        Pending: ['待处理'],
        Approved: ['同意'],
        'Organization member requested to invite user': ['组织成员请求邀请用户'],
        'User requested to join organization': ['用户请求加入组织'],
        'Pending Deletion': ['等待删除'],
        'Deletion in Progress': ['删除进行中'],
        Open: ['打开'],
        Archived: ['归档'],
        'Date Added': ['被添加的日期'],
        Transaction: ['事务'],
        'Your settings were saved successfully.': ['您的设置已被成功保存'],
        'Callback URLs': ['回调 URL'],
        'Enter callback URLs to POST new events to (one per line).': [
          '输入新事件将要 POST 的回调 URL（每行一个）。',
        ],
        'CSRF Verification Failed': ['CSRF 验证失败'],
        'A required security token was not found or was invalid.': [
          '安全令牌不存在或无效',
        ],
        "If you're continually seeing this issue, try the following:": [
          '如果您不断看到此问题，可尝试以下步骤：',
        ],
        "Clear cookies (at least for Sentry's domain).": [
          '清除 cookies（至少是 Sentry 域名下的 cookies）。',
        ],
        "Reload the page you're trying to submit (don't re-submit data).": [
          '重新载入您试图提交的页面（不要重新提交数据）。',
        ],
        'Re-enter the information, and submit the form again.': [
          '重新输入信息，然后再次提交表格。',
        ],
        'Return to the dashboard': ['返回仪表盘'],
        'Internal Server Error': ['服务器内部错误'],
        'Recover Account': ['找回账户'],
        'You have confirmed your email, and may now update your password below.': [
          '您的邮件地址已经确认，现在可以修改您的密码了。',
        ],
        'Change Password': ['修改密码'],
        'Password Expired': ['密码已过期'],
        'The password on your account expired.': ['您的帐户的密码已过期'],
        'We have sent an email to the address registered with this account containing further instructions to reset your password.':
          ['已经向该账户的邮箱发送一封带有指引的密码重置邮件。'],
        'We were unable to confirm your identity. Either the link you followed is invalid, or it has expired. You can always <a href="%(link)s">try again</a>.':
          [
            '我们无法确认你的身份。你使用的邀请链接无效，或已过期。你可以<a href="%(link)s">再次尝试</a>。',
          ],
        'We will send a confirmation email to this address:': [
          '我们将向该地址发送确认电子邮件：',
        ],
        'Send Email': ['发送Email'],
        'Set Password': ['设置密码'],
        'Set your account password below.': ['在下方设置你的账户密码'],
        'This password link has expired. Request a new password recovery code to set\n\tyour account password':
          ['这个密码重置链接已经失效，请申请一个新的密码恢复码来重置你的账户密码'],
        'Confirm your Identity': ['确认你的身份'],
        'Your password was not valid.': ['您的密码是无效的。'],
        'Confirm Account': ['确认帐号'],
        'Confirm Identity': ['验证身份'],
        'Sign In': ['登陆'],
        'Link Identity': ['连接身份'],
        'Unlink Identity': ['取消身份连接'],
        'Fancy seeing you here. In your own inbox. In this email, we’ve addressed specifically to you.':
          ['很高兴认识你'],
        '\n  %(requester_name)s told us you’d be interested in Sentry App Monitoring for Mobile.\n  ':
          ['\n%(requester_name)s 请告诉我们您对Sentry的移动应用监控感兴趣'],
        "\n  Why? Well, because Sentry for Mobile shows a holistic overview of your application's health in real-time. So you can correlate errors with releases, tags, and devices to solve problems quickly, decrease churn, and improve user retention.\n  ":
          [
            '\n  为什么？好吧，因为移动端的 Sentry 实时显示你的应用程序运行状况的整体概览。所以你可以将错误与发行版本、标签和设备关联起来以快速解决问题，减少客户流失，并提高客户留存。\n  ',
          ],
        '\n    <strong>See</strong> session data, version adoption, and user impact by every release.\n    ':
          [
            '\n    <strong>查看</strong>每个版本的会话数据、版本使用情况和对用户的影响。\n    ',
          ],
        '\n    <strong>Solve</strong> issues quickly with full context: contextualized stack traces, events that lead to the error, client, hardware information and the very commit that introduced the error.\n    ':
          [
            '\n    带着完整的上下文快速的<strong>解决</strong> 问题：上下文化的堆栈跟踪信息，导致了错误的那些事件，客户端，硬件信息和引入错误的具体 commit。\n    ',
          ],
        '\n    <strong>Learn</strong> and analyze event data to reduce regressions and ultimately improve user adoption and engagement.\n    ':
          [
            '\n    <strong>学习</strong>并分析事件数据以减少问题的回归，并最终改善用户接受度和参与度。\n    ',
          ],
        '\n    And guess what? Set up takes less than five minutes.\n    ': [
          '\n    而且您猜怎么着？搭起来还不用五分钟。\n    ',
        ],
        '\n    Sorry, but you won’t be able to use “debugging” as an excuse to get out of your second cousin’s Zoom birthday dinner.\n    ':
          ['\n    抱歉，但你没法儿用 “在查bug” 作为早退你二表弟生日聚会的借口。\n    '],
        'Get Started': ['快速开始'],
        'Mobile up,': ['向上移动，'],
        'The Sentry Team': ['Sentry开发团队'],
        "These channels were found to be missing or unauthorized in your legacy Slack integration. If they were private channels, you'll have make sure to add the Sentry bot to these channels. Otherwise you may want update your alert rules accordingly.":
          [
            '在您的旧版 Slack 集成中发现这些渠道丢失或未经授权。 如果它们是您的私人频道，您必须确保将 Sentry 机器人添加到这些频道。 否则，您可能需要更新相应的报警规则。',
          ],
        'Crash reports powered by <a href=\\': ['崩溃报告生成由 <a href=\\'],
        'Bitbucket-Server Setup': ['Bitbucket 服务安装'],
        'Connect Sentry with your App': ['连接Sentry到您的应用'],
        'Add your Bitbucket Server App credentials to Sentry.': [
          '添加你的 Bitbucket 服务应用证书到 Sentry。',
        ],
        'Integration Setup Complete': ['集成安装完成'],
        'You can safely close this window now.': ['您现在可以安全的关闭这个窗口了。'],
        'GitHub Enterprise Setup': ['Github企业设置'],
        'GitHub Integration Setup Failed': ['GitHub 集成设置失败'],
        'GitLab Setup': ['GitLab安装'],
        'Step 2: Connect Sentry with your App': ['步骤2：连接Sentry到你的应用'],
        'Add your GitLab App credentials to Sentry.': [
          '添加你的GitLab应用证书到Sentry。',
        ],
        'Back to instructions': ['返回说明'],
        'Step 1: Create a Sentry App in GitLab': ['步骤1：在GitLab中创建一个Sentry应用'],
        'To configure GitLab with Sentry, you will need to create a Sentry app in your GitLab instance.':
          [
            '为了能够将Sentry配置到Gitlab , 您需要创建一个Sentry 应用到您的Gitlab 实例中.',
          ],
        "You'll also need to be a maintainer or owner in GitLab. Projects owned by users are not supported.":
          ['您还需要是 GitLab 的维护者或所有者。 不支持普通用户拥有的项目。'],
        'Navigate to the User Settings section of your GitLab instance.': [
          '导航至你的GitLab实例的用户设置区域。',
        ],
        'In the resulting form, enter the following information:': [
          '在结果表单中，输入以下信息：',
        ],
        'Click Save Application.': ['点击保存应用'],
        "In the resulting page, you'll see the Application ID and Secret. You'll need those for the next phase of setup.":
          [
            '在结果页面中，您将看到应用程序 ID 和密钥（Application ID & Secret）。 您将需要这些用于下一阶段的设置。',
          ],
        'You must complete the above steps in GitLab to connect GitLab with Sentry.': [
          '你必须在GitLab完成上述步骤，才能完成Sentry与GitLab的连接。',
        ],
        'This page has expired, please refresh to view the Sentry issue': [
          '此页面已过期，请刷新以查看Sentry问题',
        ],
        'This Sentry issue is not linked to a Jira issue': [
          '这个 Sentry 问题没有链接到一个 Jira 问题',
        ],
        'Date:': ['日期：'],
        'Release:': ['释放：'],
        'Jira-Server Setup': ['Jira-服务安装'],
        'Add your Jira Server App credentials to Sentry.': [
          '添加你的Jira Server应用证书到Sentry。',
        ],
        'Microsoft Teams Expired Link': ['微软团队过期链接'],
        'Microsoft Teams Linked': ['微软团队链接'],
        'Your Microsoft Teams identity has been associated with your Sentry account. You may now take actions through Microsoft Teams.':
          [
            '您的 Microsoft Teams 身份已经关联你的 Sentry 帐户。现在你可以通过 Microsoft Teams 进行操作。',
          ],
        'Microsoft Teams No Identities': ['微软团队 无身份'],
        'Your Microsoft Teams identity is not associated with this Sentry account.': [
          '您的 Microsoft 团队身份不与此Sentry帐户关联。',
        ],
        "Confirm that you'd like to unlink your Microsoft Teams identity from your Sentry account.":
          ['确认你想要取消你的 Microsoft 团队身份与你的Sentry帐户的链接。'],
        'Unlink with Microsoft Teams': ['取消与微软团队的链接'],
        'Microsoft Teams Unlinked': ['微软团队未链接'],
        'Your Microsoft Teams identity has been unassociated with your Sentry account.': [
          '您的 Microsoft 团队身份已与您的Sentry帐户取消关联。',
        ],
        'Slack Expired Link': ['Slack失效链接'],
        'Link Team': ['关联团队'],
        'Slack Linked': ['Slack已关联'],
        'Your Slack identity has been associated with your Sentry account. You may now take actions through Slack!':
          ['你的Slack身份已经关联至你的Sentry账户，现在你可以通过Slack进行操作'],
        'Slack Migration': ['Slack集成'],
        'Time For An Upgrade': ['是时候升级了'],
        'Well, look who has private channels with alert rules.': [
          '好吧，看看谁拥有带有警报规则的私有频道。',
        ],
        'Next Steps': ['下一步'],
        "\n                See, that wasn't so bad. Just click <strong>Upgrade</strong> to start the authentication flow for the new Slack app.\n                ":
          [
            '\n                看，这并没有那么糟糕，只需单击 <strong>升级</strong> 即可启动新 Slack 应用程序的身份验证流程。\n                ',
          ],
        '\n                Have questions? Emails us at <a href="mailto:partners@sentry.io?subject=Slack Upgrade"><strong>partners@sentry.io</strong></a>\n                ':
          [
            '\n                有疑问？通过邮箱 <a href="mailto:partners@sentry.io?subject=Slack Upgrade"><strong>partners@sentry.io</strong></a>联系我们\n                ',
          ],
        "Farewell to Slack's legacy workspace apps.": [
          '告别 Slack 的传统工作区应用程序。',
        ],
        "The time has come, Slack's deprecated its workspace apps. And with it, goes our legacy Slack integration.":
          [
            '时机已到，Slack 已弃用其工作区应用程序。 随之而来的是我们传统的 Slack 集成。',
          ],
        "But don't worry, we built you a whole new Sentry-Slack integration. Just authorize the app, and then you can get back to doing whatever it is you came here to do.":
          [
            '但别担心，我们为您打造了一个全新的 Sentry-Slack 集成。 只需授权该应用程序，然后您就可以重新开始做您来到这里要做的任何事情。',
          ],
        'Your existing alert rules may need some love.': [
          '您可能需要关注一下现有的警报规则。',
        ],
        "If you don't have private channels in your alert rules, just authorize our new Slack app and then you can get on with your life.":
          [
            '如果你的警报规则中没有私人频道，只需授权我们新的 Slack 应用，然后就可以继续你的生活。',
          ],
        "Once you've upgraded your integration, all other organizations with the same workspace will be upgraded as well.":
          ['升级集成后，具有相同工作区的所有其他组织也将升级。'],
        'Unlink Team': ['取消关联团队'],
        'Team Unlinked': ['团队 未关联'],
        'Slack Unlinked': ['Slack 未关联'],
        'Your Slack identity has been unassociated with your Sentry account.': [
          '您的Slack身份已与您的Sentry账户取消关联.',
        ],
        'Azure DevOps Setup': ['Azure DevOps安装'],
        'No accounts found. Please check that you are an Azure DevOps account owner.': [
          '没有找到帐户。 请检查您是否是 Azure DevOps 帐户的所有者。',
        ],
        'Configure Azure DevOps to use with Sentry.': ['配置Azure DevOps使用Sentry。'],
        'No Organization Access': ['没有组织权限'],
        'You do not have access to any organizations within Sentry.': [
          '您无权访问Sentry内的任何组织',
        ],
        'If you were expecting otherwise, this may be due to a configuration change in the organization. Please check your email inbox for an invite link to rejoin the organization.':
          [
            '如果您另有预期，这可能是由于组织中的配置更改。请检查您的 电子邮箱 收件箱以获取重新加入组织的邀请链接。',
          ],
        'Alternatively, reach out to an admin in your organization to re-invite you using ':
          ['或者，联系您单位中的管理员，使用'],
        'this guide': ['这份指引'],
        'If you need to make changes to your user account, ': [
          '如果您需要对您的用户账户作出变更，',
        ],
        'please click here.': ['请点击这里'],
        'Authorize Application': ['已授权应用'],
        'Authorization Error': ['授权出错'],
        'Test Configuration': ['测试配置'],
        'Please correct the errors below.': ['请改正以下错误：'],
        'IP Address:': ['IP 地址：'],
        'Email:': ['Email:'],
        'Setup Error': ['安装出错'],
        'Create New': ['新建'],
        'Link Existing': ['连接已有项'],
        'You still need to <a href="%(link)s">associate an identity</a> with %(title)s before you can\n        create issues with this service.':
          [
            '你需要把<a href="%(link)s”>身份</a>与%(title)s绑定起来，才能使用这项服务创建事件。',
          ],
        'Your server administrator will need to configure authentication with\n            <strong>%(auth_provider)s</strong> before you can use this plugin.':
          [
            '如需使用此插件，你的服务器管理员需要用<strong>%(auth_provider)s</strong>来配置验证服务。',
          ],
        'You still need to <a href="%(plugin_link)s">configure this plugin</a>\n                before you can use it.':
          ['您需要<a href="%(plugin_link)s">配置插件</a>来使用它'],
        'Changes to your configuration were saved successfully.': [
          '对配置的修改已保存成功。',
        ],
        'Reactivate Account': ['重新激活账户'],
        'Sentry - Setup Wizard': ['Sentry - 安装向导'],
        b: ['b'],
        k: ['k'],
        '0 minutes': ['0分钟'],
        'just now': ['刚刚'],
        yesterday: ['昨天'],
        '%s ago': ['%s ago'],
        'created at': ['创建于'],
        'last used at': ['最后使用于'],
        authenticator: ['验证器'],
        authenticators: ['验证器'],
        'email address': ['Email 地址'],
        username: ['用户名'],
        'staff status': ['员工状态'],
        'Designates whether the user can log into this admin site.': [
          '是否允许该用户登陆该管理界面。',
        ],
        active: ['激活'],
        'Designates whether this user should be treated as active. Unselect this instead of deleting accounts.':
          ['是否使该用户处于激活状态。您可以取消选择而不是删除帐户。'],
        'superuser status': ['超级用户状态'],
        'Designates that this user has all permissions without explicitly assigning them.':
          ['是否允许该用户拥有所有未特别分配给他的权限。'],
        managed: ['管理'],
        'Designates whether this user should be treated as managed. Select this to disallow the user from modifying their account (username, password, etc).':
          [
            '是否将这个用户指定为受管理账户。选择该项将防止用户修改其账户（用户名，密码等）。',
          ],
        'is sentry app': ['是Sentry应用'],
        'Designates whether this user is the entity used for Permissionson behalf of a Sentry App. Cannot login or use Sentry like anormal User would.':
          [
            '指定此用户是否为代表 Sentry 应用程序用于 权限 的实体。 无法像普通用户那样登录或使用 Sentry。',
          ],
        'password expired': ['密码已过期'],
        'If set to true then the user needs to change the password on next sign in.': [
          '如果设置为真，用户下次登录时必须修改密码。',
        ],
        'date of last password change': ['上一次密码修改时间'],
        'The date the password was changed last.': ['上一次密码修改时间'],
        'date joined': ['加入日期'],
        'last active': ['最后激活'],
        users: ['用户'],
        verified: ['已认证'],
        'Designates whether this user has confirmed their email.': [
          '指定该用户是否已确认 email。',
        ],
        'The link you followed is invalid or expired.': ['链接已失效或过期。'],
        'Please enter a correct %(username)s and password. Note that both fields may be case-sensitive.':
          ['请输入正确的%(username)s和密码。请注意，用户名和密码是大小写敏感的。'],
        'You have made too many failed authentication attempts. Please try again later.':
          ['验证失败太多次，请稍后再试。'],
        "Your Web browser doesn't appear to have cookies enabled. Cookies are required for logging in.":
          ['您的浏览器似乎没用启用cookies。登录需要Cookies。'],
        'This account is inactive.': ['此账号已经失效。'],
        'Email updates': ['邮件更新'],
        'An account is already registered with that email address.': [
          '该电子邮件地址已经注册过账户。',
        ],
        'The account you are trying to recover is managed and does not support password recovery.':
          ['你尝试找回的这个账户不支持密码找回功能。'],
        'New Email': ['新 Email'],
        'Current password': ['当前密码'],
        'You will need to enter your current account password to make changes.': [
          '需要输入当前密码来进行变更。',
        ],
        'The password you entered is not correct.': ['输入的密码不正确。'],
        'You must confirm your current password to make changes.': [
          '需要确认当前密码来进行变更。',
        ],
        'Authenticator code': ['认证码'],
        'Authenticator or recovery code': ['认证或恢复码'],
        'Invalid username': ['无效的用户名'],
        'Not set': ['未设置'],
        'There was an error confirming your email. Please try again or visit your Account Settings to resend the verification email.':
          ['确认电子邮件时发生错误。请进入你的账户设置重新发送验证邮件。'],
        'There was an error confirming your email.': ['确认邮件时发生错误。'],
        'A verification email has been sent to %s.': ['验证邮件已经发送给 %s。'],
        'Your email (%s) has already been verified.': ['你的电子邮件 (%s) 已确认。'],
        'Thanks for confirming your email': ['感谢您确认电子邮件'],
        'The organization does not exist or does not have Single Sign-On enabled.': [
          '该组织不存在或没有启用单点登录。',
        ],
        'An unknown error occurred while submitting your report. Please try again.': [
          '提交报告时发生错误，请重试。',
        ],
        'Some fields were invalid. Please correct the errors and try again.': [
          '某些字段填写无效。请更正错误并重试。',
        ],
        'Your feedback has been sent. Thank you!': ['您的反馈已发送。谢谢！'],
        "It looks like we're having issues.": ['看来，我们有些问题。'],
        'Our team has been notified.': ['已提醒我们的团队。'],
        "If you'd like to help, tell us what happened below.": [
          '如果您愿意帮忙，您可以在下方告诉我们发生了什么。',
        ],
        'What happened?': ['发生了什么？'],
        'Submit Crash Report': ['提交崩溃报告'],
        'jane@example.com': ['jane@example.com'],
        "I clicked on 'X' and then hit 'Confirm'": ["我点了 'X' 然后触发了 '提交'"],
        'The SSO feature is not enabled for this organization.': [
          '该组织未启用 SSO 登录功能。',
        ],
        'SSO authentication has been disabled.': ['SSO 登录已禁用。'],
        'A reminder email has been sent to members who have not yet linked their accounts.':
          ['已向所有尚未链接账户的成员发送提醒邮件。'],
        'Require SSO': ['需要 SSO'],
        'Require members use a valid linked SSO account to access this organization': [
          '成员需要使用已有效链接 SSO 的账户来访问该组织',
        ],
        'Enable SCIM': ['启用SCIM'],
        'Enable SCIM to manage Memberships and Teams via your Provider': [
          '使 SCIM 能够通过提供商管理成员资格和团队',
        ],
        'The default role new members will receive when logging in for the first time.': [
          '新成员第一次登录时将接到的默认角色。',
        ],
        'Invalid request.': ['非法请求。'],
        'Invalid confirmation code. Try again.': ['无效的确认码，请重试。'],
        'Unable to update dashboard': ['无法更新面板'],
        'Unable to delete dashboard': ['无法删除面板'],
        'Unable to fetch dashboards': ['无法提取仪表板'],
        'Unable to create dashboard': ['无法创建面板'],
        'Unable to load dashboard': ['无法加载面板'],
        'You are viewing a frontend deploy preview of [commitLink] ([branchLink])': [
          '您正在查看 [commitLink] ([branchLink]) 的前端部署视图',
        ],
        'You are developing against production Sentry API, please BE CAREFUL, as your changes will affect production data.':
          ['您正在使用生产Sentry API进行开发，请务必小心，因为您的改动将会影响线上数据'],
        'Changed [fieldName] from [oldValue] to [newValue]': [
          '修改[fieldName]：[oldValue] 至 [newValue]',
        ],
        'Unable to restore [fieldName] from [oldValue] to [newValue]': [
          '无法恢复 [fieldName]：[oldValue] 至 [newValue]',
        ],
        'Restored [fieldName] from [oldValue] to [newValue]': [
          '恢复 [fieldName]：[oldValue] 至 [newValue]',
        ],
        'Error fetching team key transactions': ['提取团队关键事务时出错'],
        'Saving changes…': ['正在保存更改...'],
        'Unable to update key transaction': ['无法更新键事务'],
        'Error transferring [project]. [message]': ['出现传输错误 [project]. [message]'],
        'Restoring Release…': ['正在恢复发布版本...'],
        'Release was successfully restored.': ['发布版本已成功恢复'],
        'Release could not be be restored.': ['发布版本无法恢复'],
        'Archiving Release…': ['正在归档发布版本...'],
        'Release was successfully archived.': ['发布版本已成功归档'],
        'Release could not be be archived.': ['发布版本无法归档'],
        'Copy to Clipboard': ['复制到剪贴板'],
        'Got it': ['明白了'],
        Archive: ['归档'],
        'one user…': ['一个用户...'],
        '%s users…': ['%s 个用户'],
        Unignore: ['取消忽略'],
        'Silences alerts for this issue and removes it from the issue stream by default.':
          ['默认情况下，将此问题的警报静音，并将其从问题流中删除。'],
        'one time…': ['一次...'],
        '%s times…': ['%s 次…'],
        'More resolve options': ['更多处理选项'],
        'You can delete this comment due to your superuser status': [
          '由于您的超级用户状态，您可以删除此评论',
        ],
        'Division by 0 is not allowed': ['不允许被0除'],
        'Maximum operators exceeded': ['最大操作超限'],
        'Based on [commit:commit data]': ['基于[提交: 提交数据]'],
        'Matching Issue Owners Rule': ['匹配问题所有者规则'],
        'You can auto-assign issues by adding [issueOwners:Issue Owner rules].': [
          '您可以通过添加 [问题所有者：问题所有者规则] 来自动分配问题。',
        ],
        'Suggestion: [name]': ['建议：[名字]'],
        ' + %s others': ['%s其他'],
        Suggested: ['建议'],
        'Project Thresholds': ['项目阈值'],
        'Gauge performance using different metrics for each project. Set response time thresholds, per project, for the Apdex and User Misery Scores in each project’s Performance settings.':
          [
            '为每个项目使用不同的指标来衡量绩效。在每个项目的性能设置中为每个项目的 Apdex 和用户痛苦分数设置响应时间阈值。',
          ],
        'Response Time Thresholds': ['响应时间阈值'],
        'Use this menu to adjust each transaction’s satisfactory response time threshold, which can vary across transactions. These thresholds are used to calculate Apdex and User Misery, metrics that indicate how satisfied and miserable users are, respectively.':
          [
            '使用此菜单可以调整每个事务的满意响应时间阈值，该阈值可能因事务而异。这些阈值用于计算Apdex和用户痛苦，这两个指标分别表示用户的满意度和痛苦程度。',
          ],
        'Create a project for any type of application you want to monitor.': [
          '为需要监控的任何类型应用创建项目',
        ],
        'Track the health of every release, see differences between releases from crash analytics to adoption rates.':
          ['跟踪每个版本的运行状况，查看版本之间从崩溃分析到采用率的差异。'],
        'Query and unlock insights into the health of your entire system and get answers to critical business questions all in one place.':
          ['查询并解锁对整个系统运行状况的见解，并在一个位置获得关键业务问题的答案。'],
        'Today only admins in your organization can create alert rules but we recommend [link:allowing members to create alerts], too.':
          [
            '目前，只有组织中的管理员才能创建警报规则，但我们也建议 [链接：允许成员创建警报]。',
          ],
        Allow: ['允许'],
        'Event Breakdown': ['事件细分'],
        'The event breakdown shows you the breakdown of event types within a trace.': [
          '事件细分显示跟踪中事件类型的细分。',
        ],
        'Filter by Span Operation': ['按跨度操作筛选'],
        'You can now filter these transaction events based on http, db, browser or resource operation.':
          ['您现在可以根据 http、db、浏览器或资源操作过滤这些事务事件。'],
        'Suspect Tags': ['可疑标签'],
        "See which tags often correspond to slower transactions. You'll want to investigate these more. [link:Learn more]":
          [
            '查看哪些标签通常对应于较慢的事务。您需要进一步调查这些内容。[友情链接：了解更多]',
          ],
        '[currentStepCount] of [totalStepCount]': ['[当前步数] 的 [总步数]'],
        'There was an error saving your preferences.': ['保存首选项时出错。'],
        'Use default avatar': ['使用默认头像'],
        'Please upload an image smaller than [size]px by [size]px.': [
          '请上传小于 [size]px x x [size]px 的图片。',
        ],
        '[upload:Upload an image] to get started.': ['[上传：上传图片] 以开始使用。'],
        'Open In Issues': ['打开方式问题'],
        'This feature is internal and available for QA purposes': [
          '此功能是内置的，可用于 QA 目的',
        ],
        'This feature is available for early adopters and may change': [
          '此功能适用于早期采用者，可能会更改',
        ],
        'This feature is new! Try it out and let us know what you think': [
          '此功能是新功能！尝试一下，让我们知道您的想法',
        ],
        alpha: ['阿尔法'],
        new: ['新增功能'],
        '%s has an invalid date range. Please try a more recent date range.': [
          '%s 的日期范围无效。请尝试最近的日期范围。',
        ],
        seconds: ['秒钟'],
        minutes: ['分钟'],
        hours: ['小时'],
        days: ['天'],
        'Error loading health data': ['加载运行状况数据时出错'],
        'Show %s hidden items': ['显示%s隐藏的项目'],
        'Loading...': ['加载中...'],
        'The email [actorEmail] is not a member of your organization. [inviteUser:Invite] them or link additional emails in [accountSettings:account settings].':
          [
            '电子邮箱 [actorEmail] 不是组织的成员。[邀请用户：邀请]他们或在[帐户设置：帐户设置]中链接其他电子邮箱。',
          ],
        'Select All': ['选择全部'],
        'Select a configuration to continue': ['选择要继续的配置'],
        'Select a Project to continue': ['选择一个项目以继续'],
        '[providerName] Configurations': ['[提供商名称]配置'],
        'Successfully updated organization settings': ['已成功更新组织设置'],
        'Unable to update organization settings': ['无法更新组织设置'],
        'Ask your organization owner or manager to [settingsLink:enable alerts access] for you.':
          ['请您的组织所有者或管理员为您 [设置链接：启用警报访问权限]。'],
        'Create Alert': ['创建警报'],
        "Sit tight. We'll shoot you an email when your data is ready for download.": [
          '耐心等待。当您的数据可供下载时，我们会向您发送一封电子邮箱。',
        ],
        "It looks like we're already working on it. Sit tight, we'll email you.": [
          '看起来我们已经在努力了。请坐，我们会给您发电子邮箱。',
        ],
        'Request a Demo': ['申请演示项目'],
        'Sign Up': ['登记'],
        'Requires discover feature.': ['需要发现功能。'],
        'User Misery': ['用户痛苦'],
        'Web Vitals': ['网页指标'],
        'Span Operations': ['跨度操作'],
        Apdex: ['顶点'],
        'Frontend Performance': ['前端性能'],
        'Backend Performance': ['后端性能'],
        'Mobile Performance': ['移动性能'],
        '[Unknown] Performance': ['[未知]性能'],
        'For more performance metrics, specify which platform this project is using in [link]':
          ['有关更多性能指标，请在 [link] 中指定此项目正在使用的平台'],
        'project settings.': ['项目设置。'],
        'All Releases': ['所有版本'],
        'This Release': ['此版本'],
        'No transactions found': ['未找到交易'],
        'operation duration': ['操作持续时间'],
        'Span durations are summed over the course of an entire transaction. Any overlapping spans are only counted once.':
          ['跨度持续时间是在整个事务过程中求和的。任何重叠跨度仅计数一次。'],
        'Searching…': ['搜索。。。'],
        'If all else fails, [link:contact us] with more details': [
          '如果所有其他方法都失败了，[链接：联系我们]提供更多细节',
        ],
        'in [location]': ['在 [位置]'],
        'This is an attachment containing a session replay. [replayLink:View the replay] or [jsonLink:view the raw JSON].':
          ['这是包含会话重播的附件。[重播链接：查看重播]或[json链接：查看原始JSON]。'],
        Send: ['发送'],
        Later: ['之后'],
        Generic: ['通用'],
        Relative: ['相对'],
        Absolute: ['绝对'],
        Session: ['会期'],
        Types: ['类型'],
        Levels: ['水平'],
        'App Build': ['应用构建'],
        'External Free Storage': ['外部免费存储'],
        Family: ['家庭'],
        'Model Id': ['型号编号'],
        'NPOT Support': ['非壶支持'],
        'Vendor ID': ['供应商编号'],
        Index: ['索引'],
        'Latest State': ['最新状态'],
        State: ['州'],
        'Trace ID': ['跟踪标识'],
        'Span ID': ['跨度标识'],
        'Parent Span ID': ['父跨度 ID'],
        'Operation Name': ['操作名称'],
        'before this event': ['在此事件之前'],
        Replay: ['重播'],
        Runtime: ['运行时'],
        'Trace Details': ['跟踪详细信息'],
        'Application State': ['应用程序状态'],
        'Insufficient permissions to preview attachments': ['预览附件的权限不足'],
        'This attachment cannot be previewed': ['无法预览此附件'],
        'File Name': ['文件名'],
        'Your limit of stored crash reports has been reached for this issue. [attachmentsLink: View crashes] or [settingsLink: configure limit].':
          [
            '已达到此问题的存储崩溃报告限制。[附件链接：视图崩溃]或[设置链接：配置限制]。',
          ],
        View: ['视图'],
        'Adjusted timestamps by %s': ['按 %s 调整时间戳'],
        Throughput: ['吞吐量'],
        Operation: ['操作'],
        'View Transaction': ['查看交易'],
        'View screenshot': ['查看屏幕截图'],
        Screenshot: ['截图'],
        'Date Created': ['创建日期'],
        'MIME Type': ['哑剧类型'],
        'Screenshots help identify what the user saw when the event happened': [
          '屏幕截图有助于识别事件发生时用户看到的内容',
        ],
        'Are you sure you wish to delete this screenshot?': [
          '您确定要删除此屏幕截图吗？',
        ],
        'Fails threshold at %s.': ['在 %s 处失败阈值。'],
        'These vitals were collected using an outdated SDK version and may not be accurate. To ensure accurate web vitals in new transaction events, please update your SDK to the latest version.':
          [
            '这些指标是使用过时的 SDK 版本收集的，可能不准确。为确保新交易事件中的 Web 指标准确无误，请将您的 SDK 更新到最新版本。',
          ],
        'Mobile Vitals': ['移动生命体征'],
        'Click here to experiment with other grouping configs': [
          '单击此处尝试其他分组配置',
        ],
        'Contributing variant': ['贡献变体'],
        'Non-contributing variant: %s': ['无贡献变体： %s'],
        'Non-contributing variant': ['无贡献变体'],
        Nothing: ['无'],
        'Contributing values': ['贡献价值'],
        'Fingerprint rule': ['指纹规则'],
        'The server-side fingerprinting rule that produced the fingerprint.': [
          '生成指纹的服务器端指纹规则。',
        ],
        'Client fingerprint values': ['客户端指纹值'],
        'The client sent a fingerprint that was overridden by a server-side fingerprinting rule.':
          ['客户端发送的指纹已被服务器端指纹规则覆盖。'],
        'hashing algorithm produced a hash that does not match the event': [
          '哈希算法生成与事件不匹配的哈希',
        ],
        'Uses a complex grouping algorithm taking event data into account': [
          '使用考虑事件数据的复杂分组算法',
        ],
        'Overrides the default grouping by a custom fingerprinting rule': [
          '通过自定义指纹规则覆盖默认分组',
        ],
        'Uses a complex grouping algorithm taking event data and a fingerprint into account':
          ['使用复杂的分组算法，考虑事件数据和指纹'],
        nothing: ['无'],
        generic: ['通用'],
        Fatal: ['致命'],
        Undefined: ['定义'],
        'Switch to absolute': ['切换到绝对值'],
        'Switch to relative': ['切换到相对'],
        'Sorry, no breadcrumbs match your search query': [
          '抱歉，没有与您的搜索查询匹配的痕迹导航',
        ],
        'Reset filter': ['重置过滤器'],
        'Clear search bar': ['清除搜索栏'],
        'There are no breadcrumbs to be displayed': ['没有要显示的面包屑'],
        'Search breadcrumbs': ['搜索痕迹导航'],
        'Some frames appear to be minified. Did you configure the [plugin]?': [
          '某些帧似乎已缩小。您是否配置了 [插件]？',
        ],
        'from [exceptionModule]': ['从 [异常模块]'],
        'No relevant stack trace has been found!': ['未找到相关的堆栈跟踪！'],
        'No app only stack trace has been found!': ['未找到仅限应用程序的堆栈跟踪！'],
        'The debug information file for this image could not be downloaded': [
          '无法下载此映像的调试信息文件',
        ],
        'The debug information file for this image failed to process': [
          '无法处理此映像的调试信息文件',
        ],
        'No debug information could be found in any of the specified sources': [
          '在任何指定的源中都找不到调试信息',
        ],
        'Debug information for this image was found and successfully processed': [
          '找到并成功处理此映像的调试信息',
        ],
        'The image was not required for processing the stack trace': [
          '处理堆栈跟踪不需要该映像',
        ],
        'An internal error occurred while handling this image': [
          '处理此图像时发生内部错误',
        ],
        Missing: ['失踪'],
        Ok: ['还行'],
        Unreferenced: ['未引用'],
        'You do not have permission to download debug files': [
          '您没有下载调试文件的权限',
        ],
        'You do not have permission to delete debug files': ['您没有删除调试文件的权限'],
        'Actions not available because this debug file was deleted': [
          '操作不可用，因为此调试文件已删除',
        ],
        'This debug file was uploaded [when] after this event.': [
          '此调试文件是[在]此事件之后上传的。',
        ],
        'Uploaded [timesince]': ['上传 [时间自]'],
        'This debug file was uploaded [when] before this event. It takes up to 1 hour for new files to propagate. To apply new debug information, reprocess this issue.':
          [
            '此调试文件是[在]此事件之前上传的。新文件最多需要 1 小时才能传播。若要应用新的调试信息，请重新处理此问题。',
          ],
        'This debug file was uploaded [when] before this event. It takes up to 1 hour for new files to propagate.':
          ['此调试文件是[在]此事件之前上传的。新文件最多需要 1 小时才能传播。'],
        'This debug file was uploaded [when] after this event. To apply new debug information, reprocess this issue.':
          ['此调试文件是[在]此事件之后上传的。若要应用新的调试信息，请重新处理此问题。'],
        Failed: ['失败'],
        'Not Found': ['未找到'],
        Unapplied: ['未应用'],
        debug: ['调试'],
        'Debug information provides function names and resolves inlined frames during symbolication':
          ['调试信息在符号化期间提供函数名称并解析内联帧'],
        sources: ['来源'],
        'Source code information allows Sentry to display source code context for stack frames':
          ['源代码信息允许Sentry显示堆栈帧的源代码上下文'],
        symtab: ['符号选项卡'],
        unwind: ['放松'],
        'Stack unwinding information improves the quality of stack traces extracted from minidumps':
          ['堆栈展开信息提高了从小型转储中提取的堆栈跟踪的质量'],
        "This debug information file is from Sentry's internal symbol server for this project":
          ['此调试信息文件来自此项目的 Sentry 内部符号服务器'],
        'This debug information file is from a built-in symbol server': [
          '此调试信息文件来自内置符号服务器',
        ],
        'This debug information file is from a custom symbol server': [
          '此调试信息文件来自自定义符号服务器',
        ],
        'Download Details': ['下载详情'],
        'Permission Error': ['权限错误'],
        'This file was deleted after the issue was processed.': [
          '处理问题后，此文件已删除。',
        ],
        'This issue was processed before this debug information file was available. To apply new debug information, reprocess this issue.':
          [
            '在此调试信息文件可用之前，已处理此问题。若要应用新的调试信息，请重新处理此问题。',
          ],
        'This issue was processed before this debug information file was available': [
          '在此调试信息文件可用之前，已处理此问题',
        ],
        'Sorry, no debug files match your search query': [
          '抱歉，没有与您的搜索查询匹配的调试文件',
        ],
        'There are no debug files to be displayed': ['没有要显示的调试文件'],
        'Debug File Candidates': ['调试文件候选项'],
        'These are the Debug Information Files (DIFs) corresponding to this image which have been looked up on [docLink:symbol servers] during the processing of the stacktrace.':
          [
            '这些是与此映像对应的调试信息文件 （DIF），在处理堆栈跟踪期间已在 [docLink：符号服务器] 上查找。',
          ],
        Source: ['源'],
        'Search debug file candidates': ['搜索调试文件候选项'],
        Information: ['信息'],
        'Address Range': ['地址范围'],
        'Debug File': ['调试文件'],
        'Code ID': ['代码编号'],
        'Code File': ['代码文件'],
        Processing: ['加工'],
        Sentry: ['Sentry'],
        'An error occurred while deleting the debug file.': ['删除调试文件时出错。'],
        Image: ['图像'],
        'Search for this debug file in all images for the %s project': [
          '在%s项目的所有图像中搜索此调试文件',
        ],
        'Open in Settings': ['在“设置”中打开'],
        'You’ve uploaded new debug files. Reprocess events in this issue to view a better stack trace':
          ['您已上传新的调试文件。重新处理此问题中的事件以查看更好的堆栈跟踪'],
        'This event cannot be reprocessed because the event has not been found': [
          '无法重新处理此事件，因为尚未找到该事件',
        ],
        'This event cannot be reprocessed because a required attachment is missing': [
          '无法重新处理此事件，因为缺少所需的附件',
        ],
        'This event cannot be reprocessed': ['无法重新处理此事件'],
        'Sorry, no images match your search query': [
          '抱歉，没有与您的搜索查询匹配的图片',
        ],
        'There are no images to be displayed': ['没有要显示的图像'],
        'Search images loaded': ['搜索已加载的图像'],
        'Stack Unwinding': ['烟囱放卷'],
        'Stack Trace': ['堆栈跟踪'],
        Culture: ['文化'],
        'This frame appears in all other events related to this issue': [
          '此帧出现在与此问题相关的所有其他事件中',
        ],
        'Frame repeated %s times': ['帧重复 %s 次'],
        'Go to Images Loaded': ['转到已加载的图像'],
        'Stack trace configuration saved.': ['堆栈跟踪配置已保存。'],
        'Expand function details': ['展开函数详细信息'],
        'Hide function details': ['隐藏功能详细信息'],
        'Inline frame, found by stack scanning': ['内联框架，通过堆栈扫描找到'],
        'Inline frame': ['内联框架'],
        'Crashed in non-app': ['在非应用中崩溃'],
        'The symbol was not found within the debug file.': ['在调试文件中找不到该符号。'],
        'No image is specified for the address of the frame.': [
          '没有为帧的地址指定图像。',
        ],
        'The debug file could not be retrieved from any of the sources.': [
          '无法从任何源检索调试文件。',
        ],
        'The retrieved debug file could not be processed.': [
          '无法处理检索到的调试文件。',
        ],
        'Called from': ['从 调用'],
        'No or unknown stacktrace': ['无堆栈跟踪或未知堆栈跟踪'],
        '%s Active Filters': ['%s 活动筛选器'],
        'Search for spans': ['搜索跨度'],
        'Requires Manual Instrumentation': ['需要手动检测'],
        'For in-depth instructions on setting up tracing, view [docLink:our documentation].':
          ['有关设置跟踪的深入说明，请查看 [docLink：我们的文档]。'],
        'To manually instrument certain regions of your code, view [docLink:our documentation].':
          ['要手动检测代码的某些区域，请查看 [docLink：我们的文档]。'],
        'Trace times are equal': ['跟踪时间相等'],
        'Invalid view window': ['无效的视图窗口'],
        'Equal start and end times': ['相等的开始和结束时间'],
        'Reversed start and end times': ['反转的开始和结束时间'],
        Regroup: ['重组'],
        'This span is showing a direct child. Remove transaction to hide': [
          '此跨度显示的是直接子级。删除要隐藏的交易',
        ],
        'This span has a direct child. Add transaction to view': [
          '此跨度具有直接子级。添加交易记录以查看',
        ],
        'Loading embedded transaction': ['加载嵌入式事务'],
        'Error loading embedded transaction': ['加载嵌入式事务时出错'],
        'View Children': ['查看儿童'],
        'View Summary': ['查看摘要'],
        'This is a span that has no parent span within this transaction. It has been attached to the transaction root span by default.':
          ['这是此事务中没有父跨度的跨度。默认情况下，它已附加到事务根跨度。'],
        'spans out of view': ['跨度超出视野'],
        '[numOfSpans] hidden span': ['[spansnumOfSpans] hidden span'],
        '[numOfSpans] hidden spans': ['[spansnumOfSpans] hidden spans'],
        'The next spans are unavailable. You may have exceeded the span limit or need to address missing instrumentation.':
          ['下一个跨度不可用。您可能已超出跨度限制或需要解决缺少的检测问题。'],
        'Autogrouped ': ['自动分组'],
        ' and more': ['等等'],
        'View Trace': ['查看跟踪'],
        'There is no trace for this transaction': ['此事务没有痕迹'],
        id: ['编号'],
        'was active': ['处于活动状态'],
        errored: ['已出错'],
        'Thread Errored': ['线程出错'],
        'Filter Threads': ['过滤线程'],
        'You have no threads': ['您没有线程'],
        'No threads found': ['未找到线程'],
        'Errored with [crashedInfo]': ['错误与 [崩溃信息]'],
        invalid: ['无效'],
        redacted: ['已编辑'],
        'Operation Breakdown': ['操作明细'],
        'Span durations are summed over the course of an entire transaction. Any overlapping spans are only counted once. Percentages are calculated by dividing the summed span durations by the total of all span durations.':
          [
            '跨度持续时间是在整个事务过程中求和的。任何重叠跨度仅计数一次。百分比的计算方法是将总的跨度持续时间除以所有跨度持续时间的总和。',
          ],
        Assemblies: ['组件'],
        'Unsymbolicated version not available': ['无符号化版本不可用'],
        'Minified version not available': ['缩小版本不可用'],
        'Only full version available': ['仅提供完整版'],
        'Most Relevant': ['最相关'],
        'Full Stack Trace': ['全栈跟踪'],
        'Download raw stack trace file': ['下载原始堆栈跟踪文件'],
        Options: ['选项'],
        'There was an error rendering the title': ['呈现标题时出错'],
        'This is your current [label].': ['这是您当前的 [标签]。'],
        'Issue Link Settings': ['问题链接设置'],
        'Read Docs': ['阅读文档'],
        'Terms of Use': ['使用条款'],
        'Event Processing for this project is currently degraded. Events may appear with larger delays than usual or get dropped. Please check the [link:Status] page for a potential outage.':
          [
            '此项目的事件处理当前已降级。事件可能会比平时出现更大的延迟或被丢弃。请查看 [链接：状态] 页面以了解潜在的中断。',
          ],
        'Event Processing for the [projectSlugs] projects is currently degraded. Events may appear with larger delays than usual or get dropped. Please check the [link:Status] page for a potential outage.':
          [
            '[projectSlugs] 项目的事件处理当前已降级。事件可能会比平时出现更大的延迟或被丢弃。请查看 [链接：状态] 页面以了解潜在的中断。',
          ],
        'Close Modal': ['关闭对话框'],
        'No results found for your query': ['未找到查询的结果'],
        '[integration] Issue': ['[集成]问题'],
        '%s Integration': ['%s集成'],
        'Issue Tracking': ['问题追踪'],
        New: ['新建'],
        Unhandled: ['未处理'],
        'An unhandled error was detected in this Issue.': [
          '此问题中检测到未处理的错误。',
        ],
        'Events in %s': ['%s 中的事件'],
        'Events in release %s': ['版本 %s 中的事件'],
        'When the most recent event in this issue was captured.': [
          '捕获本期中的最新事件的时间。',
        ],
        'When the first event in this issue was captured.': [
          '捕获本期中的第一个事件的时间。',
        ],
        'Any Environment': ['任何环境'],
        'N/A': ['不适用'],
        'in release ': ['发布中'],
        'No tags found in the selected environments': ['在所选环境中未找到标记'],
        'From %s': ['从 %s'],
        '%s results': ['%s 结果'],
        'No results from %s': ['%s 没有结果'],
        Graph: ['图'],
        'Value:': ['值:'],
        Deprecated: ['废弃'],
        Muted: ['静音中'],
        '+ Create New Dashboard': ['  创建新仪表板'],
        'Max widgets ([maxWidgets]) per dashboard reached.': [
          '达到每个仪表板的最大小组件（[maxWidgets]）。',
        ],
        'Multiple queries were used to create this widget visualization. Which query would you like to view in Discover?':
          ['多个查询用于创建此小组件可视化。您希望在“发现”中查看哪个查询？'],
        'Full URL to the symbol server': ['符号服务器的完整 URL'],
        'User for HTTP basic auth': ['HTTP 基本身份验证的用户'],
        'Password for HTTP basic auth': ['HTTP 基本身份验证的密码'],
        '(Password unchanged)': ['（密码不变）'],
        'Clear password': ['清除密码'],
        'Directory Layout': ['目录布局'],
        'The layout of the folder structure.': ['文件夹结构的布局。'],
        'Path Casing': ['路径大小写'],
        'The case of files and folders.': ['文件和文件夹的情况。'],
        'Save changes': ['保存更改'],
        'Update [name] Repository': ['更新 [名称] 存储库'],
        'Add [name] Repository': ['添加 [名称] 存储库'],
        '(Secret Access Key unchanged)': ['（秘密访问键不变）'],
        'Client Email': ['客户电子邮箱'],
        'Email address of the GCS service account.': ['GCS 服务帐户的电子邮件地址。'],
        '(Private Key unchanged)': ['（私有键不变）'],
        'The service account key. Credentials can be managed on the [link].': [
          '服务帐户密钥。可以在 [链接] 上管理凭据。',
        ],
        'The path at which files are located within this repository.': [
          '文件在此存储库中所在的路径。',
        ],
        'Name of the S3 bucket. Read permissions are required to download symbols.': [
          'S3 存储桶的名称。下载符号需要读取权限。',
        ],
        Region: ['地区'],
        'The AWS region and availability zone of the bucket.': [
          '存储桶的 AWS 区域和可用区。',
        ],
        'Edit Ownership Rules': ['编辑所有权规则'],
        'Action Required': ['所需操作'],
        'Please verify your email before [actionMessage], or [link].': [
          '请在 [操作消息] 或 [链接] 之前验证您的电子邮箱。',
        ],
        'go to your email settings': ['转到您的电子邮箱设置'],
        '%s of %s': ['%s 的 %s'],
        'Search for documentation, FAQs, blog posts...': [
          '搜索文档、常见问题解答、博客文章...',
        ],
        'Send invite': ['发送邀请'],
        'Send invite requests (%s)': ['发送邀请请求 （%s）'],
        'Send invite request': ['发送邀请请求'],
        'Invite new members by email to join your organization.': [
          '通过电子邮箱邀请新成员加入您的组织。',
        ],
        'Enter one or more emails': ['输入一封或多封电子邮箱'],
        '%s invites': ['%s 邀请'],
        '%s invite requests': ['%s 邀请请求'],
        '[inviteRequests] pending approval, [failed] failed to send.': [
          '[邀请请求] 等待批准，[失败] 发送失败。',
        ],
        '[inviteRequests] pending approval': ['[邀请请求] 待批准'],
        'Duplicate emails between invite rows.': ['邀请行之间的重复电子邮箱。'],
        Duplicate: ['复制'],
        'Reprocess Events': ['重新处理事件'],
        'Reprocessing applies new debug files and grouping enhancements to this Issue. Please consider these impacts:':
          ['重新处理会对此问题应用新的调试文件和分组增强功能。请考虑以下影响：'],
        "[strong:Quota applies.] Every event you choose to reprocess counts against your plan's quota. Rate limits and spike protection do not apply.":
          [
            '[强：配额适用。] 您选择重新处理的每个事件都会占用您的计划配额。速率限制和尖峰保护不适用。',
          ],
        '[strong:Attachment storage required.] If your events come from minidumps or unreal crash reports, you must have [link:attachment storage] enabled.':
          [
            '[强：需要附件存储。] 如果事件来自小型转储或虚幻崩溃报告，则必须启用 [链接：附件存储]。',
          ],
        'Please wait one hour after upload before attempting to reprocess missing debug files.':
          ['请在上传后等待一小时，然后再尝试重新处理丢失的调试文件。'],
        'For more information, please refer to [link:the documentation.]': [
          '有关详细信息，请参阅 [链接：文档。]',
        ],
        'Failed to reprocess. Please check your input.': [
          '无法重新处理。请检查您的输入。',
        ],
        'Number of events to be reprocessed': ['要重新处理的事件数'],
        'If you set a limit, we will reprocess your most recent events.': [
          '如果您设置了限制，我们将重新处理您最近的事件。',
        ],
        'Reprocess all events': ['重新处理所有事件'],
        'Remaining events': ['剩余事件'],
        'What to do with the events that are not reprocessed.': [
          '如何处理未重新处理的事件。',
        ],
        Keep: ['保持'],
        '[read] and [write] access to [resources] resources': [
          '对 [资源] 资源的 [读取] 和 [写入] 访问权限',
        ],
        '[admin] access to [resources] resources': ['[管理员] 对 [资源] 资源的访问权限'],
        'Authored By %s': ['作者 %s'],
        '[read] access to [resources] resources': ['[读取] 访问 [资源] 资源'],
        'Request to publish %s successful.': ['请求发布 %s 成功。'],
        'Request to publish [app] fails. [detail]': ['请求发布 [应用] 失败。[详细]'],
        'Publish Request Questionnaire': ['发布请求调查问卷'],
        'Request Publication': ['请求发布'],
        'Team request sent for approval': ['团队请求已发送以供审批'],
        'Edit Widget': ['编辑小部件'],
        'event id': ['事件 ID'],
        'You need at least one project to use this view': [
          '至少需要一个项目才能使用此视图',
        ],
        Skip: ['跳过'],
        Install: ['安装'],
        Tracing: ['追踪'],
        'Waiting for event': ['等待事件中'],
        'Some tasks should be completed before completing these tasks': [
          '有些任务应在完成这些任务之前完成',
        ],
        Completed: ['完成'],
        '[requisite] before completing this task': ['[必需] 在完成此任务之前'],
        Start: ['开始'],
        'No user was associated with completing this task': [
          '没有用户与完成此任务相关联',
        ],
        'Invite your team': ['邀请你的团队'],
        'Create another project': ['创建另一个项目'],
        'Upload source maps': ['上传源地图'],
        Reset: ['重置'],
        'There are no items to display': ['没有要显示的项目'],
        'My Teams': ['我的团队'],
        'Filter Platforms': ['过滤平台'],
        'This plugin is considered beta and may change in the future.': [
          '此插件被认为是测试版，将来可能会更改。',
        ],
        Samples: ['例子'],
        OS: ['操作系统'],
        'Project:': ['项目：'],
        'Errors:': ['错误：'],
        Errors: ['错误'],
        'Seen By': ['发现者：'],
        Explore: ['浏览'],
        weeks: ['星期'],
        Transactions: ['交易'],
        Theme: ['主题'],
        '%s minutes': ['%s 分钟'],
        '%s days': ['%s 天'],
        '%s hours': ['%s 小时'],
        'Team Slug': ['团队Slug'],
        Manual: ['手动'],
        'Debug Symbols': ['Debug 标识'],
        Examples: ['示例'],
        Java: ['Java'],
        'Manual Setup': ['手动设置'],
        'Source Maps': ['源代码映射'],
        'Events per minute': ['每分钟事件数'],
        Bar: ['柱状图'],
        Line: ['折线图'],
        Exclude: ['排除'],
        Include: ['包括'],
        'Request Time': ['请求时间'],
        'App Start Cold': ['App 冷启动'],
        'First Paint': ['首屏'],
        'App Start Warm': ['App 热启动'],
        'Error copying to clipboard': ['复制到剪贴板时出错'],
        'Copied to clipboard': ['复制到剪贴板'],
        'Verify Email Address': ['认证电子邮件地址'],
        'Send a test email to %s': ['发送一封测试邮件到 %s'],
        "%s's account has been deleted.": ['%s的账号已被删除。'],
        "%s's account has been deactivated.": ['%s的账号已被停用。'],
        'Editing user: %s': ['编辑用户: %s'],
        'The users primary email address': ['用户的主电子邮件地址'],
        'Permanently Delete User': ['永久删除用户'],
        'Remove user %s': ['移除用户 %s'],
        'There are no warnings at this time': ['目前没有警告'],
        'Use STARTTLS? (exclusive with SSL)': ['使用 STARTTLS？（与SSL互斥）'],
        'Use SSL? (exclusive with STARTTLS)': ['使用 SSL？（与STARTTLS互斥）'],
        'Edit Alert Rule': ['编辑告警规则'],
        'Search by name': ['搜索名称'],
        'Alert ID': ['告警 ID'],
        Triggered: ['触发'],
        'Triggered ': ['触发'],
        'Resolved ': ['解决'],
        'Error deleting rule': ['删除规则遇到错误'],
        'Delete Alert Rule?': ['删除警告规则？'],
        'All Teams': ['所有团队'],
        'View Docs': ['查看文档'],
        'Unable to fetch environments': ['环境变量同步失败'],
        'Deleted alert rule': ['删除告警规则'],
        Value: ['值'],
        'Last 6 hours': ['最近 6 小时'],
        'Last 3 days': ['最近 3 天'],
        When: ['时间'],
        'Events: ': ['事件:'],
        'Filter events': ['过滤事件'],
        'Looking for your slack channel (this can take a while)': [
          '正在查找您的Slack频道（这可能需要一段时间）',
        ],
        'Threshold Type': ['阈值类型'],
        'Total Users': ['总用户'],
        Notification: ['通知'],
        Owner: ['所有者'],
        Production: ['生产'],
        'Alert Creation Wizard': ['告警创建向导'],
        'Number of Errors': ['错误数'],
        'Add Widget': ['添加小部件'],
        Dataset: ['数据'],
        'Known Users': ['已知用户'],
        'Anonymous Users': ['匿名用户'],
        'Top 5 Events': ['Top 5 事件'],
        '1 Minute': ['1 分钟'],
        '5 Minutes': ['5 分钟'],
        '15 Minutes': ['15 分钟'],
        '30 Minutes': ['30 分钟'],
        '1 Hour': ['1 小时'],
        '1 Day': ['1 天'],
        'Sort By': ['排序方式'],
        'Legend Alias': ['图例别名'],
        'Remove query': ['删除查询'],
        'Add Query': ['添加查询'],
        'Remove this Y-Axis': ['移除此 Y 轴'],
        'Add Overlay': ['添加叠加'],
        'Add an Equation': ['添加公式'],
        'Update Widget': ['更新微件'],
        'Custom Widget': ['自定义小部件'],
        'Updated widget.': ['更新的小部件。'],
        'Added widget.': ['添加了小部件。'],
        'Widget Library': ['小部件库'],
        JSON: ['JSON'],
        'Save as': ['另存为'],
        'Field Parameter': ['参数字段'],
        'Parameter: ': ['参数'],
        Columns: ['列'],
        JavaScript: ['JavaScript'],
        Average: ['平均'],
        Queries: ['查询'],
        Forbidden: ['禁止访问'],
        'Total Time Spent': ['总共花费时间'],
        Any: ['任何'],
        'Install %s': ['安装 %s'],
        'Submitting…': ['提交。。。'],
        'Go to AWS': ['跳转到 AWS'],
        'Finish Setup': ['完成设置'],
        Unsubscribe: ['取消订阅'],
        Share: ['分享'],
        'Copy to clipboard': ['复制到剪贴板'],
        Latency: ['延迟'],
        More: ['更多'],
        'Merged Issues': ['合并问题'],
        '%s Participants': ['%s 参与者'],
        'View All Events': ['查看所有活动'],
        'Current Event': ['当前事件'],
        'Select an environment': ['选择一个环境'],
        Platforms: ['平台'],
        Welcome: ['欢迎'],
        'Sorry, but this organization is currently in progress of being deleted. No turning back.':
          ['抱歉，该组织正在删除，无法撤消。'],
        'Team: ': ['团队:'],
        'Environment:': ['环境变量:'],
        Today: ['今日'],
        'Date Range:': ['日期范围:'],
        'View Stats': ['查看统计'],
        'update your SDK version': ['更新你的 SDK 版本'],
        'Missing instrumentation': ['缺少检测'],
        'Issue Details': ['问题详情'],
        Percentile: ['百分比'],
        Parameter: ['参数'],
        'Span Operation Breakdown': ['跨度操作细分'],
        'Reset View': ['重置视图'],
        'Calculation Method': ['计算方法'],
        'Response Time Threshold (ms)': ['响应时间阈值 (毫秒)'],
        'Transaction Settings': ['事件设置'],
        'Reset All': ['重置全部'],
        'Error Count': ['错误总数'],
        sessions: ['会话'],
        "This action can't be undone.": ['这个操作不可撤销。'],
        'Rotate Secret Key': ['轮替密钥'],
        'Error disabling %s': ['禁用 %s 发生错误'],
        print: ['打印'],
        download: ['下载'],
        'Notification Settings': ['通知设置'],
        'PEM keys': ['PEM 秘钥'],
        'Remove API Key': ['删除 API 秘钥'],
        'Source Code Root': ['源码根目录'],
        'Sentry [type]': ['Sentry [类型]'],
        'External [type]': ['外部 [类型]'],
        'Set up External [type] Mappings.': ['设置外部 [类型] 映射。'],
        'Add [type] Mapping': ['添加 [类型] 映射'],
        'Type root path of your source code, e.g. `src/`.': [
          '输入你的源码根目录，例如: `src/`。',
        ],
        Repo: ['仓库'],
        'Choose repo': ['选择仓库'],
        Branch: ['分支'],
        'Type your branch': ['输入你的分支'],
        edit: ['编辑'],
        'Delete Key': ['删除秘钥'],
        'Copy Key': ['复制秘钥'],
        'Edit Key': ['编辑秘钥'],
        Refresh: ['刷新'],
        'Search teams': ['搜索团队'],
        'Team Settings': ['团队设置'],
        ProGuard: ['ProGuard'],
        'Browser Extension': ['浏览器插件'],
        'Discarded Issue': ['被丢弃的问题'],
        'Invalid CSP': ['无效的 CSP'],
        'Legacy Browser': ['旧版浏览器'],
        'Web Crawler': ['网络爬虫'],
        '%s errors ': ['%s 错误'],
        'Revoking key…': ['撤销秘钥中...'],
        'Hide deprecated DSN': ['隐藏废弃的 DSN'],
        'Show deprecated DSN': ['显示废弃的 DSN'],
        'Deprecated DSN includes a secret which is no longer required by newer SDK versions. If you are unsure which to use, follow installation instructions for your language.':
          [
            '废弃DSN包含新版本的SDK不再需要的秘钥。如果您不确定使用哪一个，参考您语言的安装说明。',
          ],
        'Add File': ['添加文件'],
        File: ['文件'],
        'See the [link:releases documentation] for more information.': [
          '更多信息请查看[link:版本API文档]。',
        ],
        'no events configured': ['未配置事件'],
        'Alerts Settings': ['告警设置'],
        'View Alert Rules': ['查看告警规则'],
        Forwarded: ['转发'],
        'Uploaded debug information files': ['上传的调试信息文件'],
        'There are no debug symbols that match your search.': [
          '没有搜索到匹配的调试符号。',
        ],
        'Successfully added built-in repository': ['已成功添加内置仓库'],
        'Successfully removed built-in repository': ['已成功移除内置仓库'],
        'Select built-in repository': ['选择内置仓库'],
        'Delete Repository': ['删除仓库'],
        'Successfully added custom repository': ['已成功添加自定义存储库'],
        'Successfully updated custom repository': ['已成功更新自定义存储库'],
        'An error occurred while updating the custom repository': [
          '更新自定义存储库时出错',
        ],
        Mapping: ['映射'],
        'File Size': ['文件大小'],
        empty: ['空'],
        'Report URI': ['报告 URI'],
        Artifact: ['工件'],
        'Are you sure you want to remove this tag?': ['您确定要删除这个标签吗？'],
        'Remove tag': ['删除标签'],
        'You are about to unsubscribe from project notifications for the following project:':
          ['你将取消订阅下列项目的通知：'],
        'You can subscribe to it again by going to your account settings.': [
          '在你的账户设置中，你可以重新订阅。',
        ],
        'See an example': ['例如'],
      };
      var trans0 = {
        Recommended: ['推荐'],
        Latest: ['最新'],
        'This password is too long. It must contain no more than %(max_length)d character.':
          ['此密码过长，最多只能包含 %(max_length)d 个字符。'],
        'Your password must contain no more than %(max_length)d character.': [
          '您的密码最多只能包含 %(max_length)d 个字符。',
        ],
        'Your session has expired.': ['您的会话已过期。'],
        Static: ['静态'],
        Percent: ['百分比'],
        Dynamic: ['动态'],
        Low: ['低'],
        Medium: ['中'],
        High: ['高'],
        Auto: ['自动'],
        Hourly: ['每小时'],
        Daily: ['每日'],
        Weekly: ['每周'],
        'Hourly & Daily': ['每小时和每日'],
        'Hourly & Weekly': ['每小时和每周'],
        'Hourly, Daily, & Weekly': ['每小时、每日和每周'],
        'Daily & Weekly': ['每日和每周'],
        'We could not verify the authenticity of the installation request. We recommend restarting the installation process.':
          ['我们无法验证安装请求的真实性，建议您重新启动安装过程。'],
        'The base URL for your GitLab instance, including the host and protocol. Do not include the group path.<br>If using gitlab.com, enter https://gitlab.com/':
          [
            '您的 GitLab 实例的基本 URL，包括主机和协议，请勿包含组路径。如果使用的是 gitlab.com，请输入 https://gitlab.com/。',
          ],
        "This can be found in the URL of your group's GitLab page.<br>For example, if your group URL is https://gitlab.com/my-group/my-subgroup, enter `my-group/my-subgroup`.<br>If you are trying to integrate an entire self-managed GitLab instance, leave this empty. Doing so will also allow you to select projects in all group and user namespaces (such as users' personal repositories and forks).":
          [
            '这可以在您的组的 GitLab 页面的 URL 中找到。例如，如果您的组 URL 是 https://gitlab.com/my-group/my-subgroup，请输入 `my-group/my-subgroup`。如果您尝试集成一个完整的自管理 GitLab 实例，请留空。这样做还将允许您选择所有组和用户命名空间中的项目（例如用户的个人仓库和分支）。',
          ],
        'Include projects in subgroups of the GitLab group.<br>Not applicable when integrating an entire GitLab instance. All groups are included for instance-level integrations.':
          [
            '包含 GitLab 组的子组中的项目。在集成整个 GitLab 实例时不适用。在实例级集成中，所有组都将被包含。',
          ],
        'Select what action to take on Sentry Issue when Jira ticket is marked Done.': [
          '选择在 Jira 工单被标记为已完成时对 Sentry 问题执行的操作。',
        ],
        'components, security, customfield_10006': ['组件、安全性、自定义字段_10006'],
        'Comma-separated Jira field IDs that you want to hide.': [
          '您想要隐藏的以逗号分隔的 Jira 字段 ID。',
        ],
        'Jira Server integration is a required field.': [
          'Jira Server 集成是一个必填字段。',
        ],
        'Sync Sentry Status to Jira Server': ['将 Sentry 状态同步到 Jira Server'],
        'When a Sentry issue changes status, change the status of the linked ticket in Jira Server.':
          ['当 Sentry 问题的状态发生更改时，更改 Jira Server 中关联工单的状态。'],
        'Add Jira Server Project': ['添加 Jira Server 项目'],
        'Could not find Jira Server project': ['找不到 Jira Server 项目'],
        'Jira Server Project': ['Jira Server 项目'],
        'Sync Sentry Assignment to Jira Server': ['将 Sentry 分配同步到 Jira Server'],
        'When an issue is assigned in Sentry, assign its linked Jira Server ticket to the same user.':
          ['当在 Sentry 中分配问题时，将关联的 Jira Server 工单分配给同一个用户。'],
        'Sync Sentry Comments to Jira Server': ['将 Sentry 评论同步到 Jira Server'],
        'Post comments from Sentry issues to linked Jira Server tickets': [
          '将 Sentry 问题中的评论发布到关联的 Jira Server 工单中。',
        ],
        'Sync Jira Server Status to Sentry': ['将 Jira Server 状态同步到 Sentry'],
        'When a Jira Server ticket is marked done, resolve its linked issue in Sentry. When a Jira Server ticket is removed from being done, unresolve its linked Sentry issue.':
          [
            '当 Jira Server 工单被标记为已完成时，在 Sentry 中解决其关联的问题。当 Jira Server 工单不再处于已完成状态时，取消解决其关联的 Sentry 问题。',
          ],
        'Sync Jira Server Assignment to Sentry': ['将 Jira Server 分配同步到 Sentry'],
        'When a ticket is assigned in Jira Server, assign its linked Sentry issue to the same user.':
          ['当在 Jira Server 中分配工单时，将关联的 Sentry 问题分配给同一个用户。'],
        '{metric_and_agg_text} {higher_or_lower} in the last {format_duration_idiomatic(time_window)} ':
          [''],
        '{metric_and_agg_text} in the last {format_duration_idiomatic(time_window)}': [
          '',
        ],
        'The Opsgenie integration does not exist.': ['Opsgenie 集成不存在。'],
        'The team "%(team)s" does not belong to the %(account)s Opsgenie account.': [
          '团队 "%(team)s" 不属于 %(account)s Opsgenie 账户。',
        ],
        'The provided API key is invalid. Please make sure that the Opsgenie API                   key is an integration key of type "Sentry" that has configuration access.':
          [
            '提供的 API 密钥无效。请确保 Opsgenie API 密钥是具有配置访问权限的 "Sentry" 类型集成密钥。',
          ],
        'Base URL': ['基础 URL'],
        'Account Name': ['账户名称'],
        "Example: 'acme' for https://acme.app.opsgenie.com/": [
          "示例：对于 https://acme.app.opsgenie.com/，输入 'acme'",
        ],
        'Optionally, add your first integration key for sending alerts. You can rename this key later.':
          ['可选地，添加您的第一个用于发送警报的集成密钥。您可以稍后重命名此密钥。'],
        'This integration has already been installed on another Sentry organization which resides in a different region. Installation could not be completed.':
          ['此集成已在另一个位于不同区域的 Sentry 组织上安装。无法完成安装。'],
        'Slack: {message}': ['Slack: {message}'],
        Yesterday: ['昨天'],
        'disabled:not-applicable': ['禁用:不适用'],
        'disabled:pre-rollout': ['禁用:预发布'],
        'disabled:manual': ['禁用:手动'],
        'disabled:spec-limit': ['禁用:规格限制'],
        'disabled:high-cardinality': ['禁用:高基数'],
        'enabled:enrolled': ['已启用:已注册'],
        'enabled:creation': ['已启用:创建'],
        'enabled:manual': ['已启用:手动'],
        'Until escalating': ['直到升级'],
        Ongoing: ['进行中'],
        Escalating: ['正在升级'],
        'Until condition met': ['直到条件满足'],
        'Only for me': ['仅限我'],
        'My Pinned Search': ['我的固定搜索'],
        missed: ['错过'],
        timeout: ['超时'],
        'An error check-in was detected': ['检测到错误签入'],
        'A missed check-in was detected': ['检测到错过签入'],
        'A timeout check-in was detected': ['检测到超时签入'],
        and: ['和'],
        '%(problem_checkins)s check-ins detected': [
          '检测到 %(problem_checkins)s 次签入问题',
        ],
        'Starting Span': ['开始跨度'],
        'Parallelizable Spans': ['可并行跨度'],
        'Enter a valid slug consisting of lowercase letters, numbers, underscores or hyphens. It cannot be entirely numeric.':
          ['请输入由小写字母、数字、下划线或连字符组成的有效slug。它不能完全为数字。'],
        'Enter a valid slug consisting of letters, numbers, or hyphens. It cannot be entirely numeric or start/end with a hyphen.':
          [
            '请输入由字母、数字或连字符组成的有效slug。它不能完全为数字或以连字符开头/结尾。',
          ],
        'Ensure the URL does not contain an extra \t&quot;/&quot; anywhere (eg: https://foo//saml -> https://foo/saml).':
          [
            '确保 URL 中任何地方都不存在多余的 \t&quot;/&quot;（例如：https://foo//saml -> https://foo/saml）。',
          ],
        'Claim Account': ['声明账户'],
        'You have been invited to join the following migrated Sentry organizations as': [
          '您已被邀请以以下身份加入以下迁移的 Sentry 组织：',
        ],
        'We were unable to locate this account.': ['我们无法找到此账户。'],
        'This link has expired. Request a new claim account email to set your account\n\t  password and claim your account.':
          ['此链接已过期。请求发送新的声明账户邮件以设置您的账户密码并声明您的账户。'],
        'Resend Email': ['重新发送邮件'],
        'We have sent an email to the address registered with this account containing further instructions to set your password and claim this account.':
          [
            '我们已向此账户注册的地址发送了一封邮件，其中包含进一步的说明，以设置您的密码并声明此账户。',
          ],
        '\n            Need help with your account?  Click <a class="help-center-link" href="https://sentry.zendesk.com/hc/en-us">here</a> to check out our help center.\n          ':
          [
            '\n            需要账户帮助？点击 <a class="help-center-link" href="https://sentry.zendesk.com/hc/en-us">这里</a> 查看我们的帮助中心。\n          ',
          ],
        'Transaction Name': ['事务名称'],
        'Parent Span': ['父跨度'],
        'Slow Resource Span': ['慢资源跨度'],
        'Preceding Span': ['前置跨度'],
        ' Repeating Spans (%(num_repeating_spans)s) ': [
          '重复跨度 (%(num_repeating_spans)s)',
        ],
        Parameters: ['参数'],
        'FCP Delay': ['FCP 延迟'],
        'Duration Impact': ['持续时间影响'],
        '\n        You must complete the <a href="https://docs.sentry.io/product/integrations/source-code-mgmt/bitbucket/#bitbucket-server">required steps</a>\n\n        in Bitbucket Server before attempting to connect with Sentry.\n        ':
          [
            '\n        在尝试与 Sentry 连接之前，您必须在 Bitbucket Server 中完成 <a href="https://docs.sentry.io/product/integrations/source-code-mgmt/bitbucket/#bitbucket-server">所需步骤</a>。\n        ',
          ],
        'Discord Expired Link': ['Discord 链接已过期'],
        'Your link is expired. Please try using the link command in Discord again.': [
          '您的链接已过期。请尝试再次在 Discord 中使用链接命令。',
        ],
        'Discord Linked': ['Discord 已链接'],
        'Your Discord account has been associated with your Sentry account. You may now take Sentry actions through Discord.':
          [
            '您的 Discord 账户已与您的 Sentry 账户关联。现在您可以通过 Discord 执行 Sentry 操作。',
          ],
        'Discord Unlinked': ['Discord 已解除关联'],
        'Your Discord account has been unlinked from your Sentry account.': [
          '您的 Discord 账户已从您的 Sentry 账户中解除关联。',
        ],
        "In the sidebar, select 'Applications'.<br /> Or go to the <code>/-/profile/applications</code> path in your GitLab instance.":
          [
            '在侧边栏中，选择“应用程序”。<br /> 或者在您的 GitLab 实例中转到 <code>/-/profile/applications</code> 路径。',
          ],
        "Ensure 'Confidential' is checked.": ['确保已勾选“机密”。'],
        'Last 24 hours:': ['过去 24 小时：'],
        'Last 14 days:': ['过去 14 天：'],
        '\n        You must complete the <a href="https://docs.sentry.io/product/integrations/issue-tracking/jira/#jira-server">required steps</a>\n\n        in Jira Server before attempting to connect with Sentry.\n        ':
          [
            '\n        在尝试与 Sentry 连接之前，您必须在 Jira Server 中完成 <a href="https://docs.sentry.io/product/integrations/issue-tracking/jira/#jira-server">所需步骤</a>。\n        ',
          ],
        'Opsgenie Setup': ['Opsgenie 配置'],
        'Connect Sentry with Opsgenie': ['将 Sentry 与 Opsgenie 连接'],
        'Your link is expired. Please try re-linking your identity again by interacting with a Sentry notification in Slack.':
          ['您的链接已过期。请尝试通过在 Slack 中与 Sentry 通知交互来重新链接您的身份。'],
        "\n                So what does this mean for you and the future of your channels? Not much.\n                You'll just need to add the Sentry bot to each channel after you authorize the new Slack app.\n                Otherwise, you might miss out on some important error alerts.\n                ":
          [
            '\n                这对您和您频道的未来意味着什么？不多。\n                您只需要在授权新的 Slack 应用后将 Sentry 机器人添加到每个频道。否则，您可能会错过一些重要的错误警报。\n                ',
          ],
        "\n                No need to waste time committing these to memory. After you authenticate the app,\n                we'll give you one last nudge via your private channels.\n                ":
          [
            '\n                不需要浪费时间将这些记在脑海里。在您验证应用后，我们会通过您的私人频道给您最后的提醒。\n                ',
          ],
        '\n            Click <strong>Upgrade</strong> to start the authentication flow for the new Slack app.\n            ':
          [
            '\n            点击 <strong>升级</strong> 以开始新的 Slack 应用的认证流程。\n            ',
          ],
        '\n        Want to know more about the move? We wrote you some <a href="https://docs.sentry.io/product/integrations/slack/#upgrading-slack">docs</a>.\n        ':
          [
            '\n        想了解更多关于迁移的信息？我们为您编写了一些 <a href="https://docs.sentry.io/product/integrations/slack/#upgrading-slack">文档</a>。\n        ',
          ],
        "\n        If you <strong>do</strong> have private channels being used in your alert rules, bear with us. You've got an extra step to go.\n        ":
          [
            '\n        如果您确实<strong>有</strong>在警报规则中使用私人频道，请耐心等待。您还有一个额外的步骤需要完成。\n        ',
          ],
        "\n        How do you know which channels are used in alert rules? We'll tell you. Our next step audits your configuration to identify\n        which channels need some post-authentication love. Bear in mind that if you've got a lot of Slack channels with alert rules,\n        this might take a hot minute.\n        ":
          [
            '\n        您如何知道哪些频道在警报规则中使用？我们会告诉您。我们的下一步将审核您的配置，以识别哪些频道需要一些认证后的关注。请注意，如果您有很多设置了警报规则的 Slack 频道，这可能需要一些时间。\n        ',
          ],
        '\n                    Your Slack workspace, <strong>%(workspace)s</strong>, is installed on additional organizations:\n                ':
          [
            '\n                    您的 Slack 工作区 <strong>%(workspace)s</strong> 已安装在其他组织中：\n                ',
          ],
        unclaimed: ['未认领'],
        'avatar url': ['头像 URL'],
        Serverless: ['无服务器'],
        Temporary: ['临时'],
        'I agree to the <a href={settings.TERMS_URL}>Terms of Service</a> and <a href={settings.PRIVACY_URL}>Privacy Policy</a>':
          [
            '我同意<a href={settings.TERMS_URL}>服务条款</a>和<a href={settings.PRIVACY_URL}>隐私政策</a>',
          ],
        'An account is already registered with that username.': ['该用户名已注册账户。'],
        'You must agree to the Terms of Service and Privacy Policy before proceeding.': [
          '在继续之前，您必须同意服务条款和隐私政策。',
        ],
        'The SAML certificate for your Identity Provider': ['您的身份提供者的 SAML 证书'],
        'An error occurred while deleting the attachment': ['删除附件时发生错误'],
        'Changed [fieldName]': ['已更改 [fieldName]'],
        'Unable to restore [fieldName]': ['无法恢复 [fieldName]'],
        'Restored [fieldName]': ['已恢复 [fieldName]'],
        "You've hit an issue, fortunately we use Sentry to monitor Sentry. So it's likely we're already looking into this!":
          [
            '您遇到了问题，幸运的是我们使用 Sentry 监控 Sentry。所以我们很可能已经在调查这个问题了！',
          ],
        'Unable to load organization members': ['无法加载组织成员'],
        'You do not have permission to dismiss these processing errors': [
          '您没有权限忽略这些处理错误',
        ],
        'Unable to dismiss the processing errors': ['无法忽略处理错误'],
        'Unable to remove monitor.': ['无法移除监控。'],
        'Deleting Environment...': ['正在删除环境...'],
        'Unable to remove environment from monitor.': ['无法从监控中删除环境。'],
        'Unable to update monitor.': ['无法更新监控。'],
        'Unable to mute environment.': ['无法静音环境。'],
        'Unable to unmute environment.': ['无法取消静音环境。'],
        'Deleting Monitor...': ['正在删除监控...'],
        'Unable to apply the changes to all monitors': ['无法将更改应用到所有监控'],
        'Unable to install %s': ['无法安装 %s'],
        '%s successfully uninstalled.': ['%s 已成功卸载。'],
        'Unable to load tags': ['无法加载标签'],
        'Enable this feature on your sentry installation by adding the\n              following configuration into your [configFile:sentry.conf.py].\n              See [configLink:the configuration documentation] for more\n              details.':
          [
            '通过将以下配置添加到您的 [configFile:sentry.conf.py] 来在您的 Sentry 安装上启用此功能。\n              有关详细信息，请参阅 [configLink:配置文档]。',
          ],
        Unarchive: ['取消存档'],
        'We’ll nag you with a notification if the issue gets worse. All archived issues can be found in the Archived tab. [docs:Read the docs]':
          [
            '如果问题变得更严重，我们会用通知提醒您。所有已存档的问题都可以在已存档标签中找到。[docs:阅读文档]',
          ],
        'Archive options': ['存档选项'],
        'When events exceed their weekly forecast': ['当事件超出其每周预测时'],
        'Ignore options': ['忽略选项'],
        'The upcoming release': ['即将发布的版本'],
        'The next release that is not yet released': ['尚未发布的下一个版本'],
        'The next release after the current one': ['当前版本之后的下一个版本'],
        'non-semver': ['非 semver'],
        semver: ['semver'],
        'Another existing release…': ['另一个已存在的版本...'],
        'A commit…': ['一次提交...'],
        "We'll nag you with a notification if another event is seen.": [
          '如果看到另一个事件，我们会用通知提醒您。',
        ],
        'Resolving is better with Releases': ['使用版本解决更好'],
        'Set up Releases so Sentry can bother you when this problem comes back in a future release.':
          ['设置版本，以便当这个问题在未来的版本中再次出现时，Sentry 可以提醒您。'],
        'Set up Releases Now': ['立即设置版本'],
        'Comment Actions': ['评论操作'],
        'Close Alert': ['关闭警报'],
        'Mute for me': ['为我静音'],
        'Mute for everyone': ['为所有人静音'],
        Unmute: ['取消静音'],
        'Mute alert options': ['静音警报选项'],
        'Alert muted': ['警报已静音'],
        'You do not have permission to mute this alert': ['您没有权限静音此警报'],
        'This alert has already been muted': ['此警报已被静音'],
        'Unable to mute this alert': ['无法静音此警报'],
        'Alert unmuted': ['警报已取消静音'],
        'You do not have permission to unmute this alert': ['您没有权限取消静音此警报'],
        'Unable to unmute this alert': ['无法取消静音此警报'],
        "%s isn't available for %s.": ['%s 不适用于 %s。'],
        "%s isn't available for the selected projects.": ['%s 不适用于所选项目。'],
        "This issue has been archived. It'll return to your inbox if it escalates. To learn more, %s":
          ['此问题已被存档。如果问题升级，它将返回到您的收件箱。要了解更多信息，%s'],
        'read the docs': ['阅读文档'],
        'This issue has been archived until %s.': ['此问题已被存档，直到 %s。'],
        'This issue has been archived until it occurs %s time(s) in %s.': [
          '此问题已被存档，直到它在 %s 中发生 %s 次。',
        ],
        'This issue has been archived until it occurs %s more time(s).': [
          '此问题已被存档，直到它再发生 %s 次。',
        ],
        'This issue has been archived until it affects %s user(s) in %s.': [
          '此问题已被存档，直到它影响 %s 中的 %s 个用户。',
        ],
        'This issue has been archived until it affects %s more user(s).': [
          '此问题已被存档，直到它再影响 %s 个用户。',
        ],
        'This issue has been archived forever.': ['此问题已被永久存档。'],
        'Matching Codeowners Rule': ['匹配的 Codeowners 规则'],
        'Assigned to ': ['分配给 '],
        ' + %s other': [' + %s 其他'],
        'Suspect Commit': ['可疑提交'],
        'Ownership Rule': ['所有权规则'],
        Codeowners: ['代码所有者'],
        'Metrics Selector': ['指标选择器'],
        'Your metrics are available here.': ['您的指标在这里。'],
        'Aggregate Metrics': ['聚合指标'],
        'See different facets of your metric through aggregations.': [
          '通过聚合查看指标的不同方面。',
        ],
        'Segment your data by the tags you’ve attached.': [
          '通过您附加的标签对数据进行分段。',
        ],
        Filtering: ['过滤'],
        'Filter your data by the tags you’ve attached.': ['通过您附加的标签过滤数据。'],
        'Grouping & Filtering': ['分组和过滤'],
        'Segment or filter your data by the tags you’ve attached.': [
          '通过您附加的标签对数据进行分段或过滤。',
        ],
        'Multiple Metrics': ['多个指标'],
        'Plot a second metric to see correlations.': ['绘制第二个指标以查看相关性。'],
        Visualization: ['可视化'],
        'View plotted metrics, dots on the chart represent associated sample spans.': [
          '查看绘制的指标，图表中的点表示相关的示例跨度。',
        ],
        'Span Samples': ['跨度示例'],
        'See sample spans summarized in a table format. [openInTraces]': [
          '以表格格式查看总结的示例跨度。[openInTraces]',
        ],
        'To filter by tags found only on spans, click "Open in Traces".': [
          '要仅按跨度上的标签过滤，请点击“在追踪中打开”。',
        ],
        'How bad is it?': ['有多糟糕？'],
        "Here's a list of what's broken and slow. Sentry automatically groups similar events together into an issue.":
          [
            '这是一个列表，显示了哪些地方出了问题以及哪些地方缓慢。Sentry 会自动将类似的事件分组为一个问题。',
          ],
        'Keep a pulse on crash rates, throughput, and latency issues across projects.': [
          '关注跨项目的崩溃率、吞吐量和延迟问题。',
        ],
        "You have Issues and that's fine.\n              Understand impact at a glance by viewing total issue frequency and affected users.":
          [
            '您有问题，这很正常。\n              通过查看问题的总频率和受影响的用户，快速了解影响。',
          ],
        'Sentry automatically groups similar events together into an issue. Similarity is\n            determined by stack trace and other factors. Click on an issue to learn more.':
          [
            'Sentry 会自动将类似的事件分组为一个问题。相似性由堆栈跟踪和其他因素确定。点击一个问题以了解更多。',
          ],
        'Metadata and metrics': ['元数据和指标'],
        'See tags like specific users affected by the event, device, OS, and browser type.\n            On the right side of the page you can view the number of affected users and exception frequency overtime.':
          [
            '查看事件影响的特定用户、设备、操作系统和浏览器类型的标签。\n            在页面的右侧，您可以查看受影响用户的数量以及随时间的异常频率。',
          ],
        'Find your broken code': ['找到您的有问题代码'],
        'View the stack trace to see the exact sequence of function calls leading to the error in question.':
          ['查看堆栈跟踪以查看导致问题错误的确切函数调用顺序。'],
        'Retrace your steps': ['回溯您的步骤'],
        'Sentry automatically captures breadcrumbs for events so you can see the sequence of events leading up to the error.':
          ['Sentry 会自动为事件捕获面包屑，以便您可以查看导致错误的事件序列。'],
        'Find problematic releases': ['查找有问题的版本'],
        'Compare releases': ['比较版本'],
        'Click here and select the "react-native" project to see how the release is trending compared to previous releases.':
          ['点击这里并选择"react-native"项目，以查看该版本与之前版本相比的趋势。'],
        'Release-specfic trends': ['版本特定趋势'],
        'Select the latest release to review new and regressed issues, and business critical metrics like crash rate, and user adoption.':
          ['选择最新版本以查看新问题和回归问题，以及崩溃率和用户采用率等关键业务指标。'],
        'New and regressed issues': ['新问题和回归问题'],
        'See which release introduced the issue and which release it last appeared in.': [
          '查看哪个版本引入了问题以及它最后一次出现在哪个版本中。',
        ],
        'Along with reviewing how your release is trending over time compared to previous releases, you can view new and regressed issues here.':
          [
            '除了查看您的版本与之前版本相比随时间的趋势外，您还可以在这里查看新问题和回归问题。',
          ],
        'See slow transactions': ['查看慢事务'],
        'Trace slow-loading pages back to their API calls, as well as, related errors and users impacted across projects. Select a transaction to see more details.':
          [
            '追踪加载缓慢的页面到其 API 调用，以及跨项目的相关错误和受影响的用户。选择一个事务以查看更多详细信息。',
          ],
        'Identify the root cause': ['确定根本原因'],
        'Dive into the details behind a slow transaction. See User Misery, Apdex, and more metrics, along with related events and suspect spans.':
          [
            '深入探究慢事务背后的详细信息。查看用户痛苦度、Apdex 和更多指标，以及相关事件和可疑跨度。',
          ],
        'Breakdown event spans': ['分解事件跨度'],
        'Not your typical stack trace': ['非典型的堆栈跟踪'],
        'Select an Event ID from a list of slow transactions to uncover slow spans.': [
          '从慢事务列表中选择一个事件 ID 以发现慢跨度。',
        ],
        'See slow fast': ['查看慢快'],
        'Expand the spans to see span details from start date, end date to the operation. Below you can view breadcrumbs for a play-by-play of what your users\n            did before encountering the performance issue.':
          [
            '展开跨度以查看从开始日期、结束日期到操作的跨度详细信息。在下面，您可以查看面包屑，了解用户在遇到性能问题之前的操作。',
          ],
        'Sentry can show your source code in the stack trace.\n              See the exact sequence of function calls leading to the error in question.':
          [
            'Sentry 可以在堆栈跟踪中显示您的源代码。\n              查看导致问题错误的确切函数调用顺序。',
          ],
        'Pinpoint hotspots': ['定位热点'],
        'Tags are key/value string pairs that are automatically indexed and searchable in Sentry.':
          ['标签是在 Sentry 中自动索引和可搜索的键/值字符串对。'],
        'Not sure how you got here? Sentry automatically captures breadcrumbs for\n              events your user and app took that led to the error.':
          [
            '不确定您是如何到达这里的？Sentry 会自动捕获导致错误的用户和应用事件的面包屑。',
          ],
        'Automatically assign issues to the person who introduced the commit,\n              notify them over notification tools like Slack,\n              and triage through issue management tools like Jira. ':
          [
            '自动将问题分配给引入提交的人，\n              通过 Slack 等通知工具通知他们，\n              并通过 Jira 等问题管理工具进行分类。',
          ],
        'Sentry automatically groups similar events together into an issue. Similarity is\n            determined by stack trace and other factors. [link:Learn more].':
          [
            'Sentry 会自动将类似的事件分组为一个问题。相似性由堆栈跟踪和其他因素确定。[link:了解更多]。',
          ],
        'You can quickly see errors and transactions in a trace alongside the project, transaction duration and any errors or performance issues related to the transaction.':
          [
            '您可以快速在追踪中查看错误和事务，以及项目、事务持续时间和与事务相关的任何错误或性能问题。',
          ],
        'Event Details': ['事件详细信息'],
        'Click on any transaction or error row to see more details.': [
          '点击任何事务或错误行以查看更多详细信息。',
        ],
        'People who have viewed this': ['查看过此内容的人员'],
        Critical: ['关键'],
        Ready: ['就绪'],
        Monitoring: ['监控中'],
        'This feature is experimental! Try it out and let us know what you think. No promises!':
          ['此功能是实验性的！试试看并告诉我们您的想法。不保证哦！'],
        'This feature is for internal use only': ['此功能仅限内部使用'],
        experimental: ['实验性'],
        internal: ['内部'],
        'How can we make priority better for you?': ['我们如何能让优先级对您更有用？'],
        'Give Feedback': ['提供反馈'],
        'Time to prioritize!': ['是时候进行优先级排序了！'],
        'Use priority to make your issue stream more actionable. Sentry will automatically assign a priority score to new issues and filter low priority issues from the default view.':
          [
            '使用优先级使您的问题流更易于操作。Sentry 将自动为新问题分配优先级分数，并从默认视图中过滤低优先级问题。',
          ],
        'Set Priority': ['设置优先级'],
        'Modify issue priority': ['修改问题优先级'],
        'Last edited by [name]': ['最后由 [name] 编辑'],
        Med: ['中'],
        'Scroll left': ['向左滚动'],
        'Scroll right': ['向右滚动'],
        'Matching Events': ['匹配的事件'],
        'Provide a time interval': ['提供时间间隔'],
        Second: ['秒'],
        '%s seconds': ['%s 秒'],
        Minute: ['分钟'],
        '%s minutes': ['%s 分钟'],
        Hour: ['小时'],
        '%s hours': ['%s 小时'],
        Day: ['天'],
        '%s days': ['%s 天'],
        'Error fetching estimated data': ['获取估算数据时出错'],
        'Unable to copy': ['无法复制'],
        Copied: ['已复制'],
        Copy: ['复制'],
        'Show [count] [buttonTitle]': ['显示 [count] [buttonTitle]'],
        'Show %s hidden item': ['显示 %s 隐藏项'],
        '[author] committed [commitLink] • [date]': [
          '[author] 提交了 [commitLink] • [date]',
        ],
        You: ['您'],
        'View Pull Request': ['查看拉取请求'],
        '(not a member)': ['（非成员）'],
        '[author] [unknownLabel] committed [commitLink] [date]': [
          '[author] [unknownLabel] 提交了 [commitLink] [date]',
        ],
        '[author] committed [commitLink] [date]': ['[author] 提交了 [commitLink] [date]'],
        'First deployed in release [release]': ['首次在版本 [release] 中部署'],
        'No options found': ['未找到选项'],
        'Use search to find more options…': ['使用搜索查找更多选项…'],
        Character: ['字符'],
        'Unselect All': ['取消选择所有'],
        'Unselect All in ': ['取消选择所有在 '],
        'Select All in ': ['全选在 '],
        'e.g. d86b832': ['例如 d86b832'],
        '(semver)': ['（semver）'],
        '(non-semver)': ['（非 semver）'],
        'You committed': ['您提交了'],
        "We tried our hardest, but we couldn't export your data. Give it another go.": [
          '我们尽力了，但我们无法导出您的数据。再试一次吧。',
        ],
        "You can get on with your life. We'll email you when your data's ready.": [
          '您可以继续您的生活。数据准备好后我们会通过电子邮件通知您。',
        ],
        "Put your data to work. Start your export and we'll email you when it's finished.":
          ['利用您的数据。开始导出后，完成后我们会通过电子邮件通知您。'],
        'Start Free Trial': ['开始免费试用'],
        '(You)': ['（您）'],
        'Everyone Else': ['其他人'],
        'View commit [commitLink] by [author]': ['查看 [author] 的提交 [commitLink]'],
        'View Sampled Events': ['查看采样事件'],
        'Add View': ['添加视图'],
        'Successfully created investigation rule': ['成功创建调查规则'],
        'You have reached the maximum number of concurrent investigation rules allowed': [
          '您已达到允许的最大并发调查规则数',
        ],
        'Unable to create investigation rule': ['无法创建调查规则'],
        'Unable to fetch investigation rule': ['无法获取调查规则'],
        'Collecting samples since [interval]  ago.': ['自 [interval] 前开始收集样本。'],
        'A user has temporarily adjusted retention priorities, increasing the odds of getting events matching your search query. [link:Learn more.]':
          [
            '用户临时调整了保留优先级，增加了获取匹配您搜索查询事件的可能性。[link:了解更多。]',
          ],
        'If you filter by [code:event.type:transaction] we can adjust your retention priorities, increasing the odds of getting matching events. [link:Learn more.]':
          [
            '如果您按 [code:event.type:transaction] 过滤，我们可以调整您的保留优先级，增加获取匹配事件的可能性。[link:了解更多。]',
          ],
        'We can find more events that match your search query by adjusting your retention priorities for an hour, increasing the odds of getting matching events. [link:Learn more.]':
          [
            '我们可以通过调整您的保留优先级一小时来找到更多匹配您搜索查询的事件，增加获取匹配事件的可能性。[link:了解更多。]',
          ],
        'Get Samples': ['获取样本'],
        'If you entered the address manually, double check the path. Did you\n           forget a trailing slash?':
          ['如果您是手动输入地址，请仔细检查路径。您是否\n           忘记了尾随斜杠？'],
        "If you followed a link here, try hitting back and reloading the\n           page. It's possible the resource was moved out from under you.":
          [
            '如果您是通过链接到达这里的，请尝试后退并重新加载\n           页面。资源可能已被移动。',
          ],
        'AI Solutions': ['AI 解决方案'],
        'This is an OpenAI generated solution that suggests a fix for this issue. Be aware that this may not be accurate. [learnMore:Learn more]':
          [
            '这是一个由 OpenAI 生成的解决方案，建议修复此问题。请注意，这可能不准确。[learnMore:了解更多]',
          ],
        'You might get lucky, but again, maybe not…': [
          '您可能会走运，但同样，也可能不会…',
        ],
        'View Suggestion': ['查看建议'],
        'PII Certification Required': ['需要 PII 认证'],
        'Before using this feature, please confirm that there is no personally identifiable information in this event.':
          ['在使用此功能之前，请确认此事件中不包含任何个人身份识别信息。'],
        'Certify No PII': ['认证无 PII'],
        'AI Solution': ['AI 解决方案'],
        'Hide Suggestion': ['隐藏建议'],
        'Was this helpful?': ['这有帮助吗？'],
        Nope: ['没帮助'],
        Kinda: ['有点帮助'],
        'Yes, Surprisingly…': ['是的，出乎意料…'],
        'OpenAI Subprocessor Acknowledgment': ['OpenAI 子处理器确认'],
        'In order to use this feature, your organization needs to accept the OpenAI Subprocessor Acknowledgment.':
          ['为了使用此功能，您的组织需要接受 OpenAI 子处理器确认。'],
        'Accept in Settings': ['在设置中接受'],
        'We need your consent': ['我们需要您的同意'],
        'By using this feature, you agree that OpenAI is a subprocessor and may process the data that you’ve chosen to submit. Sentry makes no guarantees as to the accuracy of the feature’s AI-generated recommendations.':
          [
            '使用此功能即表示您同意 OpenAI 是一个子处理器，可能会处理您选择提交的数据。Sentry 对该功能的 AI 生成建议的准确性不做任何保证。',
          ],
        "Superusers can't consent to policies": ['超级用户不能同意策略'],
        'Heating up them GPUs': ['加热 GPU'],
        'Engineering a prompt': ['设计提示'],
        'Demonstrating value': ['展示价值'],
        'Moving the needle': ['推动进展'],
        'Preventing prompt injection attacks': ['防止提示注入攻击'],
        'Remove traces of depression from answers': ['从答案中去除抑郁痕迹'],
        'Reticulating splines or whatever': ['无论什么，都在进行样条曲线的重新计算'],
        'Loading marketing material': ['加载营销材料'],
        'Wiping node_modules': ['清除 node_modules'],
        'Installing dependencies': ['安装依赖'],
        'Searching StackOverflow': ['搜索 StackOverflow'],
        'Googling for solutions': ['谷歌搜索解决方案'],
        'Running spell checker': ['运行拼写检查器'],
        'Searching for the perfect emoji': ['搜索完美的表情符号'],
        'Adding trace amounts of human touch': ['添加微量的人性化处理'],
        "Don't be like Sydney, don't be like Sydney": ['不要像悉尼一样，不要像悉尼一样'],
        'Initiating quantum leap': ['启动量子飞跃'],
        'Charging flux capacitors': ['充电通量电容器'],
        'Summoning a demon': ['召唤恶魔'],
        'Failed to load attachment.': ['加载附件失败。'],
        'Failed to download attachment.': ['下载附件失败。'],
        'Get root causes': ['获取根本原因'],
        'Provide context first': ['先提供上下文'],
        'Try Autofix': ['尝试自动修复'],
        'This feature is experimental. Try it out and let us know your feedback at [email:autofix@sentry.io].':
          ['此功能是实验性的。试用后请将您的反馈发送到 [email:autofix@sentry.io]。'],
        'Sit back and let Autofix find potential root causes and fixes': [
          '坐下来让自动修复查找潜在的根本原因和修复方法',
        ],
        'By clicking the button above, you confirm that there is no PII in this event.': [
          '点击上面的按钮，即表示您确认此事件中不含 PII。',
        ],
        'How can we make Autofix better for you?': ['我们如何能让自动修复对您更有用？'],
        Autofix: ['自动修复'],
        'Enable write access to create pull requests': ['启用写权限以创建拉取请求'],
        'Create a Pull Request': ['创建拉取请求'],
        'Something went wrong': ['出错了'],
        'Something went wrong.': ['出错了。'],
        'Could not find a fix.': ['找不到修复方法。'],
        'Failed to create a pull request': ['创建拉取请求失败'],
        'Toggle file diff': ['切换文件差异'],
        'Something went wrong when responding to autofix.': ['响应自动修复时出错了。'],
        "Doesn't look right? Tell Autofix what needs to be changed": [
          '看起来不对？告诉自动修复需要更改什么',
        ],
        'Rename the function foo_bar to fooBar': ['将函数 foo_bar 重命名为 fooBar'],
        'Provide context': ['提供上下文'],
        'Provide context to Autofix': ['向自动修复提供上下文'],
        'This error seems to be caused by ... go look at path/file to make sure it does …':
          ['此错误似乎是由...引起的，去看看 path/file 确保它在做……'],
        "Let's go!": ['开始吧！'],
        'Something went wrong when selecting the root cause.': ['选择根本原因时出错了。'],
        'Open this file in GitHub': ['在 GitHub 中打开此文件'],
        GitHub: ['GitHub'],
        'Find a Fix': ['查找修复方法'],
        'Select root cause': ['选择根本原因'],
        'Selected Cause: %s': ['已选择原因：%s'],
        'Provide your own': ['自行提供'],
        'Provide your own root cause': ['自行提供根本原因'],
        'Custom Response Provided': ['已提供自定义响应'],
        'Selected root cause not found.': ['未找到所选根本原因。'],
        'Show unselected causes': ['显示未选原因'],
        'Cause: %s': ['原因：%s'],
        'Fix This Instead': ['改修这个'],
        'Sentry has identified %s potential root cause. You may select the presented root cause or provide your own.':
          ['Sentry 已识别 %s 个潜在根本原因。您可以选择显示的根本原因或自行提供。'],
        'Sentry has identified %s potential root causes. You may select one of the presented root causes or provide your own.':
          [
            'Sentry 已识别 %s 个潜在根本原因。您可以选择其中一个显示的根本原因或自行提供。',
          ],
        'Autofix was not able to find a root cause. Maybe try again?': [
          '自动修复无法找到根本原因。也许可以再试一次？',
        ],
        'Relevant Code #%s: %s': ['相关代码 #%s：%s'],
        'The [link:Sentry Autofix GitHub App] has been installed on all required repositories:':
          ['[link:Sentry 自动修复 GitHub 应用] 已安装在所有必需的仓库中：'],
        "Let's Go!": ['开始吧！'],
        'Install and grant write access to the [link:Sentry Autofix Github App] for the following repositories:':
          ['为以下仓库安装并授予 [link:Sentry 自动修复 Github 应用] 写权限：'],
        'Without this, Autofix can still provide root analysis and suggested code changes.':
          ['没有此权限，自动修复仍然可以提供根本原因分析和建议的代码更改。'],
        'Skip & Enable Autofix': ['跳过并启用自动修复'],
        'Install and grant write access to the [link:Sentry Autofix Github App] for the relevant repositories.':
          ['为相关仓库安装并授予 [link:Sentry 自动修复 Github 应用] 写权限。'],
        'Install the GitHub Integration': ['安装 GitHub 集成'],
        'Allow Autofix to Make Pull Requests': ['允许自动修复创建拉取请求'],
        'Failed to fetch Autofix setup progress.': ['获取自动修复设置进度失败。'],
        'Configure Autofix': ['配置自动修复'],
        'The GitHub integration is already installed, [link: view in settings].': [
          'GitHub 集成已安装，[link: 在设置中查看]。',
        ],
        'The GitHub integration has been installed but is not active. Navigate to the [integration settings page] and enable it to continue.':
          ['GitHub 集成已安装但未激活。请前往 [集成设置页面] 并启用它以继续。'],
        'Once enabled, come back to this page. For more information related to installing the GitHub integration, read the [link:documentation].':
          ['启用后，请返回此页面。有关安装 GitHub 集成的更多信息，请阅读 [link:文档]。'],
        'You have an active GitHub installation, but no code mappings for this project. Add code mappings by visiting the [link:integration settings page] and editing your configuration.':
          [
            '您有一个活跃的 GitHub 安装，但此项目没有代码映射。请访问 [link:集成设置页面] 并编辑您的配置以添加代码映射。',
          ],
        'Once added, come back to this page. For more information related to installing the GitHub integration, read the [link:documentation].':
          ['添加后，请返回此页面。有关安装 GitHub 集成的更多信息，请阅读 [link:文档]。'],
        'Install the GitHub integration by navigating to the [link:integration settings page] and clicking the "Install" button. Follow the steps provided.':
          [
            '通过导航到 [link:集成设置页面] 并点击“安装”按钮来安装 GitHub 集成。按照提供的步骤操作。',
          ],
        'Once installed, come back to this page. For more information related to installing the GitHub integration, read the [link:documentation].':
          ['安装后，请返回此页面。有关安装 GitHub 集成的更多信息，请阅读 [link:文档]。'],
        "You've successfully configured write access!": ['您已成功配置写权限！'],
        "Let's go": ['开始吧'],
        'In order to create pull requests, install and grant write access to the [link:Sentry Autofix Github App] for the following repositories:':
          [
            '为了创建拉取请求，请为以下仓库安装并授予 [link:Sentry 自动修复 Github 应用] 写权限：',
          ],
        'In order to create pull requests, install and grant write access to the [link:Sentry Autofix Github App] for the relevant repositories.':
          [
            '为了创建拉取请求，请为相关仓库安装并授予 [link:Sentry 自动修复 Github 应用] 写权限。',
          ],
        'Install the Autofix GitHub App': ['安装自动修复 GitHub 应用'],
        'Toggle details': ['切换详细信息'],
        'Toggle step details': ['切换步骤详细信息'],
        'View All Breadcrumbs': ['查看所有面包屑'],
        'View All': ['查看全部'],
        'How can we make breadcrumbs more useful to you?': [
          '我们如何能让面包屑对您更有用？',
        ],
        'Open Breadcrumb Search': ['打开面包屑搜索'],
        'Open Search': ['打开搜索'],
        'Change Time Format for Breadcrumbs': ['更改面包屑的时间格式'],
        'Use [format] Timestamps': ['使用 [format] 时间戳'],
        'There was an error loading the event breadcrumbs': ['加载事件面包屑时出错'],
        'Filter All Breadcrumbs': ['过滤所有面包屑'],
        'Sort All Breadcrumbs': ['排序所有面包屑'],
        'Change Time Format for All Breadcrumbs': ['更改所有面包屑的时间格式'],
        'No breadcrumbs found.': ['未找到面包屑。'],
        'Clear Filters?': ['清除过滤器？'],
        'Search All Breadcrumbs': ['搜索所有面包屑'],
        'This event': ['此事件'],
        'UI Click': ['UI 点击'],
        'UI Input': ['UI 输入'],
        'HTTP Request': ['HTTP 请求'],
        Network: ['网络'],
        'In Foreground': ['在前台'],
        Contexts: ['上下文'],
        'The structured context items attached to this event. [link:Learn more]': [
          '附加到此事件的结构化上下文项。[link:了解更多]',
        ],
        'There was a problem loading event context.': ['加载事件上下文时出现问题。'],
        'Vendor Name': ['供应商名称'],
        'Allocated Bytes': ['已分配字节'],
        'Fragmented Bytes': ['碎片化字节'],
        'Heap Size Bytes': ['堆大小字节'],
        'High Memory Load Threshold Bytes': ['高内存负载阈值字节'],
        'Total Available Memory Bytes': ['总可用内存字节'],
        'Memory Load Bytes': ['内存负载字节'],
        'Total Committed Bytes': ['总已提交字节'],
        'Promoted Bytes': ['提升字节'],
        'Pinned Objects Count': ['固定对象计数'],
        'Pause Time Percentage': ['暂停时间百分比'],
        'Finalization Pending Count': ['待终结计数'],
        Compacted: ['已压缩'],
        Concurrent: ['并发'],
        'Pause Durations': ['暂停时长'],
        'Profile ID': ['配置文件 ID'],
        'Replay ID': ['重放 ID'],
        'Available Completion Port Threads': ['可用完成端口线程'],
        'Available Worker Threads': ['可用工作线程'],
        'Max Completion Port Threads': ['最大完成端口线程'],
        'Max Worker Threads': ['最大工作线程'],
        'Min Completion Port Threads': ['最小完成端口线程'],
        'Min Worker Threads': ['最小工作线程'],
        'Copy Texture Support': ['复制纹理支持'],
        'Editor Version': ['编辑器版本'],
        'Install Mode': ['安装模式'],
        'Rendering Threading Mode': ['渲染线程模式'],
        'Target Frame Rate': ['目标帧率'],
        Profile: ['配置文件'],
        Response: ['响应'],
        Feedback: ['反馈'],
        'Memory Info': ['内存信息'],
        'Thread Pool Info': ['线程池信息'],
        'Laravel Context': ['Laravel 上下文'],
        'Arch: ': ['架构： '],
        'Model: ': ['型号： '],
        'Vendor: ': ['供应商： '],
        'Version: ': ['版本： '],
        'Kernel: ': ['内核： '],
        'ID: ': ['ID： '],
        'Username: ': ['用户名： '],
        Build: ['构建'],
        'Level: [level]': ['级别：[level]'],
        'An error occurred while fetching attachments': ['获取附件时发生错误'],
        'Show events with this value': ['显示具有此值的事件'],
        'Hide events with this value': ['隐藏具有此值的事件'],
        'Show events with values greater than': ['显示值大于的事件'],
        'Show events with values less than': ['显示值小于的事件'],
        'Widget actions': ['小部件操作'],
        'Custom Performance Metrics': ['自定义性能指标'],
        'Hydration Error Diff': ['水合错误差异'],
        'Open Diff Viewer': ['打开差异查看器'],
        'No error message': ['无错误消息'],
        'Event Processing Errors': ['事件处理错误'],
        'The replay for this event has been deleted.': ['此事件的重放已被删除。'],
        'See All Replays': ['查看所有重放'],
        'There are %s for this issue.': ['此问题有 %s 个。'],
        '%s replay': ['%s 重放'],
        '%s replays': ['%s 个重放'],
        'Session Replay': ['会话重放'],
        'Set up your [platform] app with Session Replay': [
          '使用会话重放设置您的 [platform] 应用',
        ],
        'Watch the errors and latency issues your users face': [
          '查看用户遇到的错误和延迟问题',
        ],
        'Set Up Now': ['立即设置'],
        'Previous Clip': ['上一个片段'],
        'Next Clip': ['下一个片段'],
        'See Full Replay': ['查看完整重放'],
        'Open Replay': ['打开重放'],
        '(unnamed span)': ['（未命名跨度）'],
        'Potential Causes': ['潜在原因'],
        'Duration or Throughput': ['持续时间或吞吐量'],
        'Duration (P95)': ['持续时间（P95）'],
        'Average Duration': ['平均持续时间'],
        'Most Affected': ['受影响最大的'],
        'Unable to find a sample event': ['无法找到示例事件'],
        'Full Event Details': ['完整事件详细信息'],
        'Previous Event': ['上一个事件'],
        'Next Event': ['下一个事件'],
        'To better understand what happened before and after this regression, compare a baseline event with a regressed event. Look for any significant shape changes, operation percentage changes, and tag differences.':
          [
            '为了更好地理解此回归之前和之后发生的情况，请将基线事件与回归事件进行比较。查找任何显著的形状变化、操作百分比变化和标签差异。',
          ],
        'Compare Events': ['比较事件'],
        'Baseline Event ID': ['基线事件 ID'],
        'Regressed Event ID': ['回归事件 ID'],
        'Failed to load flamegraph for before and after regression time range.': [
          '加载回归时间范围前后的火焰图失败。',
        ],
        'Failed to load flamegraph for before regression time range.': [
          '加载回归前时间范围的火焰图失败。',
        ],
        'Failed to load flamegraph for after regression time range.': [
          '加载回归后时间范围的火焰图失败。',
        ],
        'Slower functions': ['较慢的函数'],
        'after regression': ['回归后'],
        'Faster functions': ['较快的函数'],
        'New functions': ['新函数'],
        'Removed functions': ['已移除的函数'],
        'Previous Transaction': ['上一个事务'],
        'Next Transaction': ['下一个事务'],
        samples: ['样本'],
        'Flamegraph is showing how stack frequency will change.': [
          '火焰图显示了堆栈频率将如何变化。',
        ],
        'Flamegraph is showing how stack frequency has changed.': [
          '火焰图显示了堆栈频率的变化。',
        ],
        'Example Profiles Before': ['之前的示例配置文件'],
        'Example Profiles After': ['之后的示例配置文件'],
        'The profile duration': ['配置文件持续时间'],
        'Endpoint Name': ['端点名称'],
        'Change in Duration': ['持续时间的变化'],
        'Approx. Start Time': ['大约开始时间'],
        'Function Name': ['函数名称'],
        'Package Name': ['软件包名称'],
        '%s to %s (%s%s)': ['%s 到 %s (%s%s)'],
        Baseline: ['基线'],
        'Change in Throughput': ['吞吐量变化'],
        'Up %s from %s': ['比 %s 上升 %s'],
        'Down %s from %s': ['比 %s 下降 %s'],
        'Unchanged from': ['与...相比不变'],
        'Debug better with custom tags': ['使用自定义标签更好地调试'],
        'Include relevant metadata for debugging on events you send to Sentry': [
          '在发送到 Sentry 的事件中包含相关元数据以进行调试',
        ],
        'There was a problem loading event tags.': ['加载事件标签时出现问题。'],
        'Tag Actions Menu': ['标签操作菜单'],
        'View other events with this tag value': ['查看具有此标签值的其他事件'],
        'View issues with this tag value': ['查看具有此标签值的问题'],
        'Copy tag value to clipboard': ['将标签值复制到剪贴板'],
        'Add to event highlights': ['添加到事件亮点'],
        'View this release': ['查看此版本'],
        'View this transaction': ['查看此事务'],
        'View this replay': ['查看此重放'],
        'Visit this external link': ['访问此外部链接'],
        'Previous Screenshot': ['上一个截图'],
        '[currentScreenshot] of [totalScreenshots]': [
          '[currentScreenshot] of [totalScreenshots]',
        ],
        'Next Screenshot': ['下一个截图'],
        'More screenshot actions': ['更多截图操作'],
        'Delete this image?': ['删除此图像？'],
        'This image was captured around the time that the event occurred. Are you sure you want to delete this image?':
          ['此图像是在事件发生时捕获的。您确定要删除此图像吗？'],
        '[currentScreenshotIndex] of [totalScreenshotCount]': [
          '[currentScreenshotIndex] of [totalScreenshotCount]',
        ],
        'This image was captured around the time that the event occurred.': [
          '此图像是在事件发生时捕获的。',
        ],
        'Filter tags': ['过滤标签'],
        'The searchable tags associated with this event. [link:Learn more]': [
          '与此事件相关的可搜索标签。[link:了解更多]',
        ],
        'View Hierarchy': ['查看层次结构'],
        'show [numberOfFrames] similar': ['显示 [numberOfFrames] 个类似的'],
        'collapse [numberOfFrames] similar': ['折叠 [numberOfFrames] 个类似的'],
        'Failed to load config options': ['加载配置选项失败'],
        'Uses the evidence from performance issue detection to generate a fingerprint.': [
          '使用性能问题检测的证据生成指纹。',
        ],
        'Filter by contribution': ['按贡献过滤'],
        'Overrides the default grouping by a Sentry defined fingerprinting rule': [
          '通过 Sentry 定义的指纹规则覆盖默认分组',
        ],
        'Failed to fetch grouping info.': ['获取分组信息失败'],
        'Too eager grouping': ['过于急切的分组'],
        'Too specific grouping': ['过于具体的分组'],
        'Other grouping issue': ['其他分组问题'],
        'performance problem': ['性能问题'],
        'Grouped by:': ['按...分组：'],
        'Already highlighted': ['已高亮显示'],
        'Search Tags': ['搜索标签'],
        'No matching event tags found.': ['未找到匹配的事件标签。'],
        Context: ['上下文'],
        'Search Context': ['搜索上下文'],
        'No matching event context found.': ['未找到匹配的事件上下文。'],
        'Edit Event Highlights': ['编辑事件亮点'],
        'Changes are applied to all issues for this project': [
          '更改将应用于此项目的全部问题',
        ],
        'Use Defaults': ['使用默认值'],
        'Apply to Project': ['应用于项目'],
        'Promote tags or context keys to highlights for quicker debugging!': [
          '将标签或上下文键提升为亮点，以便更快地调试！',
        ],
        "There's nothing here...": ['这里什么都没有...'],
        'Add Highlights': ['添加亮点'],
        'Promoted tags and context items saved for this project. [link:Learn more]': [
          '已为此项目保存提升的标签和上下文项。[link:了解更多]',
        ],
        Highlights: ['亮点'],
        'Event Highlights': ['事件亮点'],
        'How can we make tags, context or highlights more useful to you?': [
          '我们如何能让标签、上下文或亮点对您更有用？',
        ],
        'There was an error loading event highlights': ['加载事件亮点时出错'],
        'Only Project Admins can edit highlights.': ['只有项目管理员可以编辑亮点。'],
        'Setup Highlights to promote your event data to the top of the issue page for quicker debugging.':
          ['设置亮点，将您的事件数据提升到问题页面的顶部，以便更快地调试。'],
        'environment, release, my-tag': ['环境，版本，my-tag'],
        'Highlighted Tags': ['高亮标签'],
        'Separate tag keys with a newline.': ['用换行分隔标签键。'],
        '{"browser": ["name"], "my-ctx": ["my-key"]}': [
          '{"browser": ["name"], "my-ctx": ["my-key"]}',
        ],
        'Highlighted Context': ['高亮上下文'],
        'Enter a valid JSON entry for mapping [Structured Context] types, to their keys. E.g. [example]':
          ['输入一个有效的 JSON 条目，用于将 [结构化上下文] 类型映射到其键。例如 [示例]'],
        'The main thread is blocked/waiting, trying to acquire lock [address] ([obj]) [heldByThread]':
          ['主线程被阻塞/等待，尝试获取锁 [地址] ([对象]) [由线程持有]'],
        'File I/O operations, such as reading from or writing to files on disk, can be time-consuming, especially if the file size is large or the storage medium is slow. Move File I/O off the main thread to avoid this ANR.':
          [
            '文件 I/O 操作（如从磁盘读取或写入文件）可能会很耗时，特别是如果文件大小很大或存储介质较慢。将文件 I/O 操作移出主线程以避免此 ANR。',
          ],
        'Database operations, such as querying, inserting, updating, or deleting data, can involve disk I/O, processing, and potentially long-running operations. Move database operations off the main thread to avoid this ANR.':
          [
            '数据库操作（如查询、插入、更新或删除数据）可能涉及磁盘 I/O、处理以及可能的长时间运行操作。将数据库操作移出主线程以避免此 ANR。',
          ],
        "If you have a particularly large or complex SharedPreferences file or if you're performing multiple simultaneous commits in quick succession, this can lead to ANR. Switch to SharedPreferences.apply or move commit to a background thread to avoid this ANR.":
          [
            '如果您有一个特别大或复杂的 SharedPreferences 文件，或者您正在进行多个连续的快速提交，这可能导致 ANR。切换到 SharedPreferences.apply 或将提交移至后台线程以避免此 ANR。',
          ],
        'SharedPreferences.apply will save data on background thread only if it happens before the activity/service finishes. Switch to SharedPreferences.commit and move commit to a background thread.':
          [
            'SharedPreferences.apply 仅在活动/服务完成之前在后台线程上保存数据。切换到 SharedPreferences.commit 并将提交移至后台线程。',
          ],
        'The app is initializing too many things on the main thread during app launch. To avoid this ANR, optimize cold/warm app starts by offloading operations off the main thread and [link:lazily initializing] components.':
          [
            '应用程序在启动时在主线程上初始化了太多内容。为了避免此 ANR，请通过将操作移出主线程并 [link:惰性初始化] 组件来优化冷/热启动。',
          ],
        'If the AssetManager operation involves reading or loading a large asset file on the main thread, this can lead to ANR. Move loading heavy assets off the main thread to avoid this ANR.':
          [
            '如果 AssetManager 操作涉及在主线程上读取或加载大型资产文件，这可能导致 ANR。将加载重型资产的操作移出主线程以避免此 ANR。',
          ],
        "If you're reading a particularly large raw file (example, a video file) on the main thread, this can lead to ANR. Look for heavy resources in the '/res' or '/res/raw; folders to avoid this ANR.":
          [
            "如果您在主线程上读取特别大的原始文件（例如视频文件），这可能导致 ANR。查找 '/res' 或 '/res/raw;' 文件夹中的重型资源以避免此 ANR。",
          ],
        'The app is potentially inflating a heavy, deeply-nested layout. [link:Optimize view hierarchy], use view stubs, use include/merge tags for reusing inflated views to avoid this ANR.':
          [
            '应用程序可能正在膨胀一个沉重的、深层嵌套的布局。[link:优化视图层次结构]，使用视图存根，使用 include/merge 标签重用已膨胀的视图以避免此 ANR。',
          ],
        'Cannot fetch resource due to restricted IP address': [
          '由于 IP 地址受限，无法获取资源',
        ],
        'Cannot fetch resource due to security violation': ['由于安全违规，无法获取资源'],
        'Invalid timestamp (in future)': ['无效的时间戳（在未来）'],
        'Clock drift detected in SDK': ['SDK 中检测到时钟漂移'],
        'Invalid timestamp (too old)': ['无效的时间戳（太旧）'],
        'Discarded value due to exceeding maximum length': ['由于超出最大长度而丢弃值'],
        'Discarded invalid value': ['丢弃无效值'],
        'Environment cannot contain "/" or newlines': ['环境不能包含 "\\/" 或换行符'],
        'Discarded unknown attribute': ['丢弃未知属性'],
        'Sentry has identified the following problems for you to fix': [
          'Sentry 已识别以下需要您修复的问题',
        ],
        'Sentry has identified the following problems for you to monitor': [
          'Sentry 已识别以下需要您监控的问题',
        ],
        'A proguard mapping file does not contain line info': [
          'Proguard 映射文件不包含行信息',
        ],
        'A proguard mapping file was missing': ['缺少 Proguard 映射文件'],
        'An optional debug information file was missing': ['缺少可选的调试信息文件'],
        'A required debug information file was missing': ['缺少必需的调试信息文件'],
        'The debug information file used was broken': ['使用的调试信息文件已损坏'],
        'Missing Sources Context': ['缺少源代码上下文'],
        'Unable to fetch HTTP resource': ['无法获取 HTTP 资源'],
        'Connect with Git Providers': ['连接到 Git 提供商'],
        'Install Git providers (GitHub, GitLab…) to enable features like code mapping and stack trace linking.':
          ['安装 Git 提供商（GitHub、GitLab…）以启用代码映射和堆栈跟踪链接等功能。'],
        'Show %s related exceptions': ['显示 %s 个相关异常'],
        'Hide %s related exceptions': ['隐藏 %s 个相关异常'],
        'Event Created': ['事件已创建'],
        'View in Monitor Details': ['在监控详情中查看'],
        'Check-ins': ['签入'],
        'A timeline of check-ins that happened before and after this event': [
          '此事件前后发生的签入时间线',
        ],
        'The <code>connect-src</code> directive defines valid sources for fetch,\n  <code>XMLHttpRequest</code>, <code>WebSocket</code>, and\n  <code>EventSource</code> connections.':
          [
            '<code>connect-src</code> 指令定义了 fetch、\n  <code>XMLHttpRequest</code>、<code>WebSocket</code> 和\n  <code>EventSource</code> 连接的有效来源。',
          ],
        'The <code>font-src</code> directive specifies valid sources for fonts\n  loaded using <code>@font-face</code>.':
          [
            '<code>font-src</code> 指令指定使用 <code>@font-face</code> 加载的字体的有效来源。',
          ],
        'The <code>form-action</code> directive specifies valid endpoints for\n  <code>&lt;form&gt;</code> submissions.':
          [
            '<code>form-action</code> 指令指定 <code>&lt;form&gt;</code> 提交的有效端点。',
          ],
        'The <code>frame-ancestors</code> directive specifies valid parents that\n  may embed a page using the <code>&lt;frame&gt;</code> and\n  <code>&lt;iframe&gt;</code> elements.':
          [
            '<code>frame-ancestors</code> 指令指定可以使用 <code>&lt;frame&gt;</code> 和\n  <code>&lt;iframe&gt;</code> 元素嵌入页面的有效父元素。',
          ],
        'The <code>img-src</code> directive specifies valid sources of images and\n  favicons.':
          ['<code>img-src</code> 指令指定图像和网站图标的有效来源。'],
        'The <code>prefetch-src</code> directive restricts the URLs\n      from which resources may be prefetched or prerendered.':
          ['<code>prefetch-src</code> 指令限制可以预取或预渲染资源的 URL。'],
        'The <code>manifest-src</code> directive specifies which manifest can be\n  applied to the resource.':
          ['<code>manifest-src</code> 指令指定可以应用于资源的清单。'],
        'The <code>media-src</code> directive specifies valid sources for loading\n  media using the <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code>\n  elements.':
          [
            '<code>media-src</code> 指令指定使用 <code>&lt;audio&gt;</code> 和 <code>&lt;video&gt;</code>\n  元素加载媒体的有效来源。',
          ],
        'The <code>object-src</code> directive specifies valid sources for the\n  <code>&lt;object&gt;</code>, <code>&lt;embed&gt;</code>, and\n  <code>&lt;applet&gt;</code> elements.':
          [
            '<code>object-src</code> 指令指定 <code>&lt;object&gt;</code>、<code>&lt;embed&gt;</code> 和\n  <code>&lt;applet&gt;</code> 元素的有效来源。',
          ],
        'The <code>base-uri</code> directive defines the URIs that a user agent\n  may use as the document base URL. If this value is absent, then any URI\n  is allowed. If this directive is absent, the user agent will use the\n  value in the <code>&lt;base&gt;</code> element.':
          [
            '<code>base-uri</code> 指令定义了用户代理可以使用的文档基础 URL 的 URI。如果此值不存在，则允许任何 URI。如果此指令不存在，用户代理将使用 <code>&lt;base&gt;</code> 元素中的值。',
          ],
        'The <code>plugin-types</code> directive specifies the valid plugins that\n  the user agent may invoke.':
          ['<code>plugin-types</code> 指令指定用户代理可以调用的有效插件。'],
        'The <code>referrer</code> directive specifies information in the\n  <code>Referer</code> header for links away from a page.':
          [
            '<code>referrer</code> 指令指定离开页面的链接的 <code>Referer</code> 标头中的信息。',
          ],
        "The <code>script-src</code> directive specifies valid sources\n  for JavaScript. When either the <code>script-src</code> or the\n  <code>default-src</code> directive is included, inline script and\n  <code>eval()</code> are disabled unless you specify 'unsafe-inline'\n  and 'unsafe-eval', respectively.":
          [
            "<code>script-src</code> 指令指定 JavaScript 的有效来源。当包含 <code>script-src</code> 或 <code>default-src</code> 指令时，内联脚本和 <code>eval()</code> 将被禁用，除非您分别指定 'unsafe-inline' 和 'unsafe-eval'。",
          ],
        'The <code>script-src-elem</code> directive applies to all script requests\n      and element contents. It does not apply to scripts defined in attributes.':
          [
            '<code>script-src-elem</code> 指令适用于所有脚本请求和元素内容。它不适用于在属性中定义的脚本。',
          ],
        'The <code>script-src-attr</code> directive applies to event handlers and, if present,\n      it will override the <code>script-src</code> directive for relevant checks.':
          [
            '<code>script-src-attr</code> 指令适用于事件处理程序，并且如果存在，它将为相关检查覆盖 <code>script-src</code> 指令。',
          ],
        "The <code>style-src</code> directive specifies valid sources for\n  stylesheets. This includes both externally-loaded stylesheets and inline\n  use of the <code>&lt;style&gt;</code> element and HTML style attributes.\n  Stylesheets from sources that aren't included in the source list are not\n  requested or loaded. When either the <code>style-src</code> or the\n  <code>default-src</code> directive is included, inline use of the\n  <code>&lt;style&gt;</code> element and HTML style attributes are disabled\n  unless you specify 'unsafe-inline'.":
          [
            "<code>style-src</code> 指令指定样式表的有效来源。这包括外部加载的样式表以及内联使用的 <code>&lt;style&gt;</code> 元素和 HTML 样式属性。\n  未包含在来源列表中的样式表不会被请求或加载。当包含 <code>style-src</code> 或 <code>default-src</code> 指令时，内联使用的 <code>&lt;style&gt;</code> 元素和 HTML 样式属性将被禁用，除非您指定 'unsafe-inline'。",
          ],
        'The <code>style-src-elem</code> directive applies to all styles except\n      those defined in inline attributes.':
          [
            '<code>style-src-elem</code> 指令适用于所有样式，除了在内联属性中定义的样式。',
          ],
        'The <code>style-src-attr</code> directive applies to inline style attributes and, if present,\n      it will override the <code>style-src</code> directive for relevant checks.':
          [
            '<code>style-src-attr</code> 指令适用于内联样式属性，并且如果存在，它将为相关检查覆盖 <code>style-src</code> 指令。',
          ],
        'The <code>frame-src</code> directive specifies valid sources for nested\n  browsing contexts loading using elements such as\n  <code>&lt;frame&gt;</code> and <code>&lt;iframe&gt;</code>.':
          [
            '<code>frame-src</code> 指令指定使用类似于 <code>&lt;frame&gt;</code> 和 <code>&lt;iframe&gt;</code> 的元素加载的嵌套浏览上下文的有效来源。',
          ],
        'The <code>worker-src</code> directive specifies valid sources for\n  <code>Worker<code>, <code>SharedWorker</code>, or\n  <code>ServiceWorker</code> scripts.':
          [
            '<code>worker-src</code> 指令指定 <code>Worker<code>、<code>SharedWorker</code> 或\n  <code>ServiceWorker</code> 脚本的有效来源。',
          ],
        'The <code>child-src</code> directive defines the valid sources for\n  web workers and nested browsing contexts loaded using elements such as\n  <code>&lt;frame&gt;</code> and <code>&lt;iframe&gt;</code>.':
          [
            '<code>child-src</code> 指令定义了使用类似于 <code>&lt;frame&gt;</code> 和 <code>&lt;iframe&gt;</code> 的元素加载的 Web 工作者和嵌套浏览上下文的有效来源。',
          ],
        'A list of dynamic libraries or shared objects loaded into process memory at the time of the crash. Images contribute application code that is referenced in stack traces.':
          [
            '崩溃时加载到进程内存中的一组动态库或共享对象。图像贡献了堆栈跟踪中引用的应用程序代码。',
          ],
        Uncovered: ['未覆盖'],
        Covered: ['已覆盖'],
        'Partially Covered': ['部分覆盖'],
        'Show %s more frame': ['显示 %s 个更多帧'],
        'Show %s more frames': ['显示 %s 个更多帧'],
        'Hide %s more frame': ['隐藏 %s 个更多帧'],
        'Hide %s more frames': ['隐藏 %s 个更多帧'],
        'Suspect Frame': ['可疑帧'],
        'Click to learn how to show the original source code for this stack frame.': [
          '点击以了解如何显示此堆栈帧的原始源代码。',
        ],
        'Unminify Code': ['取消最小化代码'],
        'In App': ['在应用内'],
        Registers: ['寄存器'],
        'Toggle register value format': ['切换寄存器值格式'],
        'Frame repeated %s time': ['帧重复 %s 次'],
        'Open this line in GitHub': ['在 GitHub 中打开此行'],
        'Open this line in %s': ['在 %s 中打开此行'],
        'Set up Code Mapping': ['设置代码映射'],
        'Code Coverage not found': ['未找到代码覆盖'],
        'Open in Codecov': ['在 Codecov 中打开'],
        'Unable to save configuration': ['无法保存配置'],
        'We don’t have access to that [provider] repo. To fix this, [link:add your repo.]':
          ['我们无法访问该 [provider] 仓库。要修复此问题，[link:添加您的仓库。]'],
        'URL is required.': ['URL 是必需的。'],
        'We can’t find the file path for [filename] in your [provider] repo. Add the correct link below to enable git blame and suspect commits for this project.':
          [
            '我们在您的 [provider] 仓库中找不到 [filename] 的文件路径。请在下方添加正确的链接以启用 git blame 和此项目的可疑提交。',
          ],
        'Go to [link]': ['转到 [link]'],
        'Go to your source code provider': ['转到您的源代码提供者'],
        'Find the correct repo and path for the file': ['找到文件的正确仓库和路径'],
        'Select from one of these suggestions or paste your URL below': [
          '从这些建议中选择一个，或在下方粘贴您的 URL',
        ],
        'Copy the URL and paste it below': ['复制 URL 并在下方粘贴'],
        'Repository URL': ['仓库 URL'],
        'source code': ['源代码'],
        'Occurred in non-app': ['发生在非应用中'],
        'View in LLM Monitoring': ['在 LLM 监控中查看'],
        'LLM monitoring': ['LLM 监控'],
        'Charts showing how many tokens are being used': ['显示使用了多少个令牌的图表'],
        'This frame has missing debug files and could not be symbolicated': [
          '此帧缺少调试文件，无法进行符号化',
        ],
        'This frame has an unknown problem and could not be symbolicated': [
          '此帧存在未知问题，无法进行符号化',
        ],
        'Go to images loaded': ['转到已加载的图像'],
        'This frame is repeated in every event of this issue': [
          '此帧在此问题的每个事件中都会重复',
        ],
        'Suspect Root Cause identifies common patterns that may be contributing to this ANR':
          ['可疑根本原因识别可能促成此 ANR 的常见模式'],
        'Suspect Root Cause identifies potential Performance Issues that may be contributing to this ANR.':
          ['可疑根本原因识别可能促成此 ANR 的潜在性能问题。'],
        'Suspect Root Cause': ['可疑根本原因'],
        'Span Evidence': ['跨度证据'],
        'Span Evidence identifies the root cause of this issue, found in other similar events within the same issue.':
          ['跨度证据识别此问题的根本原因，在同一问题中的其他类似事件中找到。'],
        'Threshold Settings': ['阈值设置'],
        'Repeating Spans (%s)': ['重复跨度 (%s)'],
        'Slow DB Query': ['慢数据库查询'],
        'Asset Size': ['资产大小'],
        'Offending Span': ['违规跨度'],
        'View Full Event': ['查看完整事件'],
        '(no value)': ['（无值）'],
        'There was %s GraphQL error raised during this request.': [
          '在此请求期间引发了 %s 个 GraphQL 错误。',
        ],
        'There were %s errors raised during this request.': [
          '在此请求期间引发了 %s 个错误。',
        ],
        '%s Active Filter': ['%s 活动过滤器'],
        'Make Your Stack Traces Readable': ['使您的堆栈跟踪可读'],
        "It looks like the original source code for this stack frame couldn't be determined when this error was captured. To get the original code for this stack frame, Sentry needs source maps to be configured.":
          [
            '看起来在捕获此错误时无法确定此堆栈帧的原始源代码。要获取此堆栈帧的原始代码，Sentry 需要配置源映射。',
          ],
        'The easiest way to get started with source maps is by running the Sentry Source Map Wizard in the terminal inside your project:':
          ['开始使用源映射的最简单方法是在项目内的终端中运行 Sentry 源映射向导：'],
        'There are multiple ways to configure source maps. The checklists below will help you set them up correctly. Choose one of the following processes:':
          [
            '配置源映射有多种方法。下面的清单将帮助您正确设置它们。选择以下其中一个过程：',
          ],
        'Debug IDs': ['调试 ID'],
        '(recommended)': ['（推荐）'],
        'Hosting Publicly': ['公开托管'],
        '[link:Debug IDs] are a way of matching your source files to source maps. Follow all of the steps below to get a readable stack trace:':
          [
            '[link:调试 ID] 是一种将您的源文件与源映射匹配的方法。按照以下所有步骤操作以获取可读的堆栈跟踪：',
          ],
        'You can match your stack trace to your source code based on [link:Releases] and artifact names. Follow all of the steps below to get a readable stack trace:':
          [
            '您可以基于 [link:版本] 和构件名称将堆栈跟踪与源代码匹配。按照以下所有步骤操作以获取可读的堆栈跟踪：',
          ],
        'Sentry will fetch your source files and source maps if you [link:host them publicly].':
          ['如果您 [link:公开托管它们]，Sentry 将获取您的源文件和源映射。'],
        'The source map could not be found at its defined location.': [
          '源映射在其定义的位置无法找到。',
        ],
        'This was helpful': ['这有帮助'],
        'This was not helpful': ['这没有帮助'],
        'Was this helpful? Give us feedback!': ['这有帮助吗？给我们反馈！'],
        'JavaScript source fetching is disabled in your project settings.': [
          '您的项目设置中禁用了 JavaScript 源获取。',
        ],
        'Installed SDK supports Debug IDs': ['已安装的 SDK 支持调试 ID'],
        'Installed SDK does not support Debug IDs': ['已安装的 SDK 不支持调试 ID'],
        "Installed SDK potentially doesn't support Debug IDs": [
          '已安装的 SDK 可能不支持调试 ID',
        ],
        'Outdated SDK': ['已过时的 SDK'],
        'You are using version [currentVersion] of the Sentry SDK which does not support debug IDs.':
          ['您正在使用的 Sentry SDK 版本 [currentVersion] 不支持调试 ID。'],
        'You are using an outdated version of the Sentry SDK which does not support debug IDs.':
          ['您正在使用的 Sentry SDK 版本已过时，不支持调试 ID。'],
        'You should upgrade to version [targetVersion] or higher.': [
          '您应该升级到版本 [targetVersion] 或更高版本。',
        ],
        'You should upgrade to the latest version.': ['您应该升级到最新版本。'],
        'If upgrading the SDK is not an option for you, you can use the [link:Release] process instead.':
          ['如果升级 SDK 对您来说不是一个选项，您可以改用 [link:版本] 过程。'],
        'Invalid Host': ['无效的主机'],
        "SDK Doesn't Support Debug IDs": ['SDK 不支持调试 ID'],
        'The SDK you are using does not support debug IDs yet. We recommend using the [link:Release] process instead.':
          ['您正在使用的 SDK 尚不支持调试 ID。我们建议改用 [link:版本] 过程。'],
        'The source map location was not in the list of allowed domains in your project settings, or the URL was malformed.':
          ['源映射位置不在您的项目设置中允许的域列表中，或者 URL 格式不正确。'],
        'Unofficial SDK': ['非官方 SDK'],
        "You are using an unofficial Sentry SDK. Please check whether this SDK already supports Debug IDs. It's possible that this SDK supports debug IDs but you may be better off using the [link:Release Name] method of uploading source maps.":
          [
            '您正在使用非官方的 Sentry SDK。请检查此 SDK 是否已经支持调试 ID。可能此 SDK 支持调试 ID，但您可能更适合使用 [link:版本名称] 方法上传源映射。',
          ],
        'If this SDK depends on an official Sentry SDK, the earliest version that supports Debug IDs is version 7.56.0':
          ['如果此 SDK 依赖于官方 Sentry SDK，则支持调试 ID 的最早版本是 7.56.0 版本'],
        'Stack frame has Debug IDs': ['堆栈帧有调试 ID'],
        "Stack frame doesn't have Debug IDs": ['堆栈帧没有调试 ID'],
        'Source Is Missing Injection': ['源缺少注入'],
        'The event already has debug IDs for some stack frames but not for this one. Please configure the tool you are using to upload source maps to inject debug IDs into [bold:all] of your build artifacts.':
          [
            '事件已经为某些堆栈帧提供了调试 ID，但此堆栈帧没有。请配置您用于上传源映射的工具，将调试 ID 注入到 [bold:所有] 构建构件中。',
          ],
        'Permission to access the source map was denied by the server hosting the source map. This means that the server hosting the source map returned a 401 Unauthorized or a 403 Forbidden response code.':
          [
            '源映射服务器拒绝访问源映射的权限。这意味着托管源映射的服务器返回了 401 未授权或 403 禁止访问的响应代码。',
          ],
        "It seems you already uploaded artifacts with Debug IDs, however, this event doesn't contain any Debug IDs yet. Generally this means that you didn't deploy the same files you injected the Debug IDs into. For Sentry to be able to show your original source code, it is required that you deploy the exact same files that you uploaded to Sentry.":
          [
            '似乎您已经上传了带有调试 ID 的构件，但此事件尚未包含任何调试 ID。通常这意味着您部署的文件与注入调试 ID 的文件不同。为了让 Sentry 能够显示您的原始源代码，您需要部署与上传到 Sentry 的完全相同的文件。',
          ],
        'If you are using a [bundlerPluginRepoLink:Sentry Plugin for your Bundler], the plugin needs to be active when building your production app. You cannot do two separate builds, for example, one for uploading to Sentry with the plugin being active and one for deploying without the plugin. The plugin needs to be active for every build.':
          [
            '如果您正在使用 [bundlerPluginRepoLink:Sentry Bundler 插件]，则在构建生产应用时需要激活该插件。例如，您不能进行两次单独的构建，一次用于上传到 Sentry（插件激活）和一次用于部署（插件未激活）。每次构建都需要激活插件。',
          ],
        'If you are utilizing [sentryCliLink:Sentry CLI], ensure that you deploy the exact files that the [injectCommand] command has modified!':
          [
            '如果您正在使用 [sentryCliLink:Sentry CLI]，请确保您部署的文件正是 [injectCommand] 命令修改过的！',
          ],
        'Read the [link:Sentry Source Maps Documentation] to learn how to inject Debug IDs into your build artifacts and how to upload them to Sentry.':
          [
            '阅读 [link:Sentry 源映射文档] 以了解如何将调试 ID 注入到您的构建构件中以及如何将它们上传到 Sentry。',
          ],
        Timeout: ['超时'],
        'No Debug ID Tooling Used': ['未使用调试 ID 工具'],
        "This event doesn't contain any Debug IDs. Read the [link:Sentry Source Maps Documentation] to learn how to inject Debug IDs into your build artifacts and how to upload them to Sentry.":
          [
            '此事件不包含任何调试 ID。阅读 [link:Sentry 源映射文档] 以了解如何将调试 ID 注入到您的构建构件中以及如何将它们上传到 Sentry。',
          ],
        'The request to download the source map timed out.': ['下载源映射的请求超时。'],
        'Source file with a matching Debug ID was uploaded': [
          '已上传具有匹配调试 ID 的源文件',
        ],
        'Missing source file with a matching Debug ID': ['缺少具有匹配调试 ID 的源文件'],
        'No Source File With Matching Debug ID': ['没有与调试 ID 匹配的源文件'],
        "You already uploaded artifacts with Debug IDs but none of the uploaded source files had a Debug ID matching this stack frame's Debug ID: [debugId]":
          [
            '您已经上传了带有调试 ID 的构件，但上传的源文件中没有任何一个的调试 ID 与该堆栈帧的调试 ID 匹配：[debugId]',
          ],
        'Make sure to inject Debug IDs into all of your source files and to upload all of them to Sentry.':
          ['确保将调试 ID 注入到您的所有源文件中，并将它们全部上传到 Sentry。'],
        'Download Error': ['下载错误'],
        'No Artifacts With Debug IDs Uploaded': ['未上传带有调试 ID 的构件'],
        "You didn't upload any artifacts with debug IDs yet. Read the [link:Sentry Source Maps Documentation] to learn how to inject Debug IDs into your build artifacts and how to upload them to Sentry.":
          [
            '您尚未上传任何带有调试 ID 的构件。阅读 [link:Sentry 源映射文档] 以了解如何将调试 ID 注入到您的构建构件中以及如何将它们上传到 Sentry。',
          ],
        'There was an error while downloading the source map.': ['下载源映射时出错。'],
        'Uploaded source map with a matching Debug ID': [
          '已上传具有匹配调试 ID 的源映射',
        ],
        'Missing source map with a matching Debug ID': ['缺少具有匹配调试 ID 的源映射'],
        'No Source Map With Matching Debug ID': ['没有与调试 ID 匹配的源映射'],
        "You already uploaded artifacts with Debug IDs but none of the uploaded source maps had a Debug ID matching this stack frame's Debug ID: [debugId]":
          [
            '您已经上传了带有调试 ID 的构件，但上传的源映射中没有任何一个的调试 ID 与该堆栈帧的调试 ID 匹配：[debugId]',
          ],
        'No Artifacts Uploaded': ['未上传构件'],
        'Fetching the source map failed for an unknown reason.': [
          '获取源映射因未知原因失败。',
        ],
        'Event has release value': ['事件具有版本值'],
        "Event doesn't have a release value": ['事件没有版本值'],
        'No Release Value': ['无版本值'],
        'The captured event does not have a [release] value. Configure a [release] value in the SDK:':
          ['捕获的事件没有 [release] 值。在 SDK 中配置 [release] 值：'],
        'Alternatively, you can configure one of our build tools to automatically inject a release value into your code: [link:Sentry Bundler Support]':
          [
            '或者，您可以配置我们的其中一个构建工具以自动将版本值注入您的代码：[link:Sentry Bundler 支持]',
          ],
        'Release has uploaded artifacts': ['版本已上传构件'],
        "Release doesn't have uploaded artifacts": ['版本未上传构件'],
        'No Uploaded Artifacts': ['无上传的构件'],
        "The release this event belongs to doesn't have any uploaded artifacts. Upload your build artifacts to Sentry using the release:":
          ['此事件所属的版本没有任何上传的构件。使用版本将您的构建构件上传到 Sentry：'],
        'The source file could not be found at its defined location.': [
          '源文件在其定义的位置无法找到。',
        ],
        'Read the [link:Sentry Source Maps Documentation] to learn how to to upload your build artifacts to Sentry.':
          ['阅读 [link:Sentry 源映射文档] 以了解如何将您的构建构件上传到 Sentry。'],
        'Stack frame path matches a source file artifact name': [
          '堆栈帧路径与源文件构件名称匹配',
        ],
        "Stack frame path doesn't match a source file artifact name": [
          '堆栈帧路径与源文件构件名称不匹配',
        ],
        'Dist Value Not Matching': ['dist 值不匹配'],
        'You uploaded a source file artifact with the right name, however the dist value on this event does not match the dist value on the artifact.':
          [
            '您上传了一个名称正确的源文件构件，但此事件的 dist 值与构件的 dist 值不匹配。',
          ],
        'Upload your build artifacts to Sentry using the dist [dist] or adjust the dist value in your SDK options.':
          [
            '使用 dist [dist] 将您的构建构件上传到 Sentry，或在您的 SDK 选项中调整 dist 值。',
          ],
        'Upload your build artifacts to Sentry using a matching [dist] value or adjust the [dist] value in your SDK options.':
          [
            '使用匹配的 [dist] 值将您的构建构件上传到 Sentry，或在您的 SDK 选项中调整 [dist] 值。',
          ],
        'Stack Frame Without Path': ['无路径的堆栈帧'],
        "This stack frame doesn't have a path. Check your SDK configuration to send a stack frame path!":
          ['此堆栈帧没有路径。检查您的 SDK 配置以发送堆栈帧路径！'],
        'Stack Frame Not Matching Artifact Name': ['堆栈帧与构件名称不匹配'],
        'The path for this stack frame is [stackFramePath] and the release value for this event is [release].':
          ['此堆栈帧的路径是 [stackFramePath]，此事件的版本值是 [release]。'],
        "Sentry was not able to find a file in the release's artifacts that matches one of the following paths:":
          ['Sentry 无法在版本的构件中找到与以下路径之一匹配的文件：'],
        'This event has a dist value [dist]. Please check that you uploaded your artifacts with dist [dist].':
          ['此事件具有 dist 值 [dist]。请检查您是否上传了带有 dist [dist] 的构件。'],
        "This event doesn't have a dist value. Please check that you uploaded your artifacts without dist value.":
          ['此事件没有 dist 值。请检查您是否上传了没有 dist 值的构件。'],
      };
      var trans1 = {
        'The source file location was not in the list of allowed domains in your project settings, or the URL was malformed.':
          ['源文件位置不在您的项目设置中允许的域列表中，或者 URL 格式不正确。'],
        'If the stack frame path is changing based on runtime parameters, you can use the [link:RewriteFrames integration] to dynamically change the stack frame path.':
          [
            '如果堆栈帧路径根据运行时参数变化，您可以使用 [link:RewriteFrames 集成] 动态更改堆栈帧路径。',
          ],
        'Source map reference matches a source map artifact name': [
          '源映射引用匹配源映射构件名称',
        ],
        "Source map reference doesn't match a source map artifact name": [
          '源映射引用不匹配源映射构件名称',
        ],
        'Missing Source Map Reference': ['缺少源映射引用'],
        'The source file for this stack frame is missing a source map reference. A source map reference is usually represented by a [sourceMappingUrl] comment at the bottom of your source file.':
          [
            '此堆栈帧的源文件缺少源映射引用。源映射引用通常在您的源文件底部以 [sourceMappingUrl] 注释形式表示。',
          ],
        'You can fix this by configuring your build tool to emit a [sourceMappingUrl] comment.':
          ['您可以通过配置构建工具以发出 [sourceMappingUrl] 注释来修复此问题。'],
        'Permission to access the source file was denied by the server hosting it. This means that the server hosting the source file returned a 401 Unauthorized or a 403 Forbidden response code.':
          [
            '托管源文件的服务器拒绝访问源文件的权限。这意味着托管源文件的服务器返回了 401 未授权或 403 禁止访问的响应代码。',
          ],
        'You uploaded a source map artifact with the right name, however the dist value on this event does not match the dist value on the artifact.':
          [
            '您上传了一个名称正确的源映射构件，但此事件的 dist 值与构件的 dist 值不匹配。',
          ],
        'The source file had a source map reference [sourceMapReference], but there was no source map artifact uploaded at that location. Make sure to generate and upload a source map named [matchingSourceMap] to symbolicate this stack frame!':
          [
            '源文件有一个源映射引用 [sourceMapReference]，但在该位置没有上传源映射构件。请确保生成并上传一个名为 [matchingSourceMap] 的源映射以符号化此堆栈帧！',
          ],
        'This event has a dist value [dist]. Please check that you uploaded your sourcemaps with dist [dist].':
          ['此事件具有 dist 值 [dist]。请检查您是否上传了带有 dist [dist] 的源映射。'],
        "This event doesn't have a dist value. Please check that you uploaded your sourcemaps without dist value.":
          ['此事件没有 dist 值。请检查您是否上传了没有 dist 值的源映射。'],
        'The request to download the source file timed out.': ['下载源文件的请求超时。'],
        'Source file was not fetched': ['源文件未获取'],
        'Missing Information': ['缺少信息'],
        'This stack frame is missing information to attempt fetching the source file.': [
          '此堆栈帧缺少尝试获取源文件的信息。',
        ],
        'Source file available to Sentry': ['源文件可供 Sentry 使用'],
        'Fetching Was Not Attempted': ['未尝试获取'],
        'The source file was already located via Debug IDs or Releases. Sentry will only attempt to fetch the source file from your servers as a fallback mechanism.':
          [
            '源文件已通过调试 ID 或版本找到。Sentry 只会尝试从您的服务器获取源文件作为后备机制。',
          ],
        'Source file is not available to Sentry': ['源文件不可供 Sentry 使用'],
        'Error While Fetching The Source File:': ['获取源文件时出错：'],
        'There was an error while downloading the source file.': ['下载源文件时出错。'],
        'Sentry looked for the source file at this location:': [
          'Sentry 在此位置查找源文件：',
        ],
        'Sentry symbolification error message:': ['Sentry 符号化错误信息：'],
        'Source map available to Sentry': ['源映射可供 Sentry 使用'],
        'Source map was not fetched': ['源映射未获取'],
        'No Source Map Reference': ['无源映射引用'],
        'There was no source map reference on the source file.': [
          '源文件上没有源映射引用。',
        ],
        'The source map was already located via Debug IDs or Releases. Sentry will only attempt to fetch the source map from your servers as a fallback mechanism.':
          [
            '源映射已通过调试 ID 或版本找到。Sentry 只会尝试从您的服务器获取源映射作为后备机制。',
          ],
        'Fetching the source file failed for an unknown reason.': [
          '获取源文件因未知原因失败。',
        ],
        'Source map is not available to Sentry': ['源映射不可供 Sentry 使用'],
        'Error While Fetching The Source Map:': ['获取源映射时出错：'],
        'Sentry looked for the source map at this location:': [
          'Sentry 在此位置查找源映射：',
        ],
        'Once you changed your configuration, redeploy your app and capture a new event to verify your changes!':
          ['更改配置后，请重新部署您的应用并捕获新事件以验证更改！'],
        'You completed all of the steps above. Capture a new event to verify your setup!':
          ['您已完成上述所有步骤。捕获新事件以验证您的设置！'],
        'Avg Duration': ['平均持续时间'],
        'This is an aggregate view across [x] events. You can see how frequently each span appears in the aggregate and identify any outliers.':
          [
            '这是跨越 [x] 个事件的聚合视图。您可以查看每个跨度在聚合中的出现频率，并识别异常值。',
          ],
        'Filter by operation': ['按操作过滤'],
        'With Profiling, we could paint a better picture': [
          '借助分析，我们可以更全面地了解',
        ],
        'Profiles can give you additional context on which functions are sampled at the same time of these spans.':
          ['分析配置文件可以为您提供在这些跨度的相同时间采样的函数的额外上下文。'],
        'Set Up Profiling': ['设置分析'],
        'You can also [docLink:manually instrument] certain regions of your code to see span details for future transactions.':
          [
            '您还可以 [docLink:手动instrument] 您代码的某些区域，以查看未来事务的跨度详细信息。',
          ],
        'Related Profile': ['相关配置文件'],
        'This profile was collected concurrently with the transaction. It displays the relevant stacks and functions for the duration of this span.':
          ['此配置文件与事务同时收集。它显示了此跨度期间的相关堆栈和函数。'],
        'View Profile': ['查看配置文件'],
        'Application Function': ['应用程序函数'],
        'System Function': ['系统函数'],
        'There is an issue associated with this transaction event.': [
          '此事务事件存在一个关联的问题。',
        ],
        'There are %s issues associated with this transaction event.': [
          '此事务事件存在 %s 个关联的问题。',
        ],
        'server side': ['服务器端'],
        'client side': ['客户端'],
        'All child span timestamps have been adjusted to account for mismatched client and server clocks.':
          ['所有子跨度时间戳都已调整，以补偿客户端和服务器时钟的不匹配。'],
        'Child Transaction': ['子事务'],
        'View Similar Spans': ['查看相似的跨度'],
        'View Span Summary': ['查看跨度摘要'],
        'Average total time for this span group across the project associated with its parent transaction, over the last 24 hours':
          ['在过去 24 小时内，与此跨度组的父事务相关的项目中该跨度组的平均总时间'],
        'The time spent exclusively in this span, excluding the total duration of its children':
          ['仅在此跨度中花费的时间，不包括其子跨度的总持续时间'],
        'Self Time': ['自身时间'],
        'Average self time for this span group across the project associated with its parent transaction, over the last 24 hours':
          ['在过去 24 小时内，与此跨度组的父事务相关的项目中该跨度组的平均自身时间'],
        'Database Query': ['数据库查询'],
        'Date Range': ['日期范围'],
        Origin: ['来源'],
        'Same Process as Parent': ['与父过程相同'],
        'Span Group': ['跨度组'],
        'HTTP Method': ['HTTP 方法'],
        'Profile Measurements Chart Type': ['分析测量图表类型'],
        'CPU Usage': ['CPU 使用率'],
        '%s error event or performance issue is associated with this span.': [
          '此跨度关联一个错误事件或性能问题。',
        ],
        '%s error events or performance issues are associated with this span.': [
          '此跨度关联 %s 个错误事件或性能问题。',
        ],
        'This frequency of this span is unknown': ['此跨度的频率未知'],
        'This span occurred in [x] out of [total] events aggregated': [
          '此跨度在聚合的 [total] 个事件中出现了 [x] 次',
        ],
        'Most Frequent Stacks in this Span': ['此跨度中最频繁的堆栈'],
        'Showing stacks [index] of [total] ([percentage])': [
          '显示 [total] 个堆栈中的第 [index] 个（[percentage]）',
        ],
        '%s out of %s (%s) of the call stacks collected during this span': [
          '在此跨度收集的调用堆栈中的 %s 个（%s）',
        ],
        Autogrouped: ['自动分组'],
        siblings: ['同级'],
        'View Query Summary': ['查看查询摘要'],
        'View [dataType] Summary': ['查看 [dataType] 摘要'],
        'Missing span instrumentation': ['缺少跨度检测'],
        '[errors] [link]': ['[错误] [链接]'],
        '%s %s error in ': ['%s %s 错误在 '],
        '%s %s errors in ': ['%s %s 个错误在 '],
        '%s performance issue in ': ['%s 性能问题在 '],
        '%s performance issues in ': ['%s %s 个性能问题在 '],
        state: ['状态'],
        'lock reason': ['锁定原因'],
        Threads: ['线程'],
        'Thread State': ['线程状态'],
        'Thread Tags': ['线程标签'],
        'Thread Stack Trace': ['线程堆栈跟踪'],
        'A thread executing in the Java virtual machine is in this state.': [
          '处于 Java 虚拟机中执行的线程的状态。',
        ],
        'A thread that is waiting indefinitely for another thread to perform a particular action is in this state.':
          ['处于无限期等待另一个线程执行特定操作的线程的状态。'],
        'A thread that is waiting for another thread to perform an action for up to a specified waiting time is in this state.':
          ['处于等待另一个线程在指定的等待时间内执行操作的线程的状态。'],
        'A thread that is blocked waiting for a monitor lock is in this state.': [
          '处于被阻塞等待监视器锁的线程的状态。',
        ],
        'A thread that has not yet started is in this state.': [
          '处于尚未启动的线程的状态。',
        ],
        'A thread that has exited is in this state.': ['处于已退出的线程的状态。'],
        'From:': ['从：'],
        'To:': ['到：'],
        Now: ['现在'],
        'Downtime Information': ['停机信息'],
        'Information about the detected downtime': ['检测到的停机信息'],
        'Domain was down for [duration]': ['域名停机时长 [duration]'],
        'Domain has been down for [duration]': ['域名已停机 [duration]'],
        '[method] because of [ruleDescription]': ['[method] 是因为 [ruleDescription]'],
        "[method] because of the a data scrubbing rule in your organization's settings.":
          ['[method] 是因为您组织设置中的一个数据清洗规则。'],
        "[method] because of the data scrubbing rule [ruleDescription] in your [orgSettingsLink:organization's settings]":
          [
            '[method] 是因为您 [orgSettingsLink:组织设置] 中的数据清洗规则 [ruleDescription]。',
          ],
        "[method] because of a data scrubbing rule in your [orgSettingsLink:organization's settings]":
          ['[method] 是因为您 [orgSettingsLink:组织设置] 中的一个数据清洗规则。'],
        "[method] because of a data scrubbing rule in your project's settings": [
          '[method] 是因为您项目设置中的一个数据清洗规则',
        ],
        '[method] because of the data scrubbing rule [ruleDescription] in the settings of the project [projectSlug]':
          [
            '[method] 是因为项目 [projectSlug] 的设置中的数据清洗规则 [ruleDescription]。',
          ],
        '[method] because of a data scrubbing rule in the settings of the project [projectSlug]':
          ['[method] 是因为项目 [projectSlug] 的设置中的一个数据清洗规则。'],
        Dependencies: ['依赖项'],
        'Close Suspect Commit Banner': ['关闭可疑提交横幅'],
        'Absolute addresses not available': ['绝对地址不可用'],
        'Not available on raw stack trace': ['在原始堆栈跟踪中不可用'],
        'Absolute file paths not available': ['绝对文件路径不可用'],
        'Verbose function names not available': ['冗长的函数名称不可用'],
        'Absolute addresses': ['绝对地址'],
        'Absolute file paths': ['绝对文件路径'],
        'Raw stack trace': ['原始堆栈跟踪'],
        'Not available on stack trace with single frame': ['在单帧堆栈跟踪中不可用'],
        'Verbose function names': ['冗长的函数名称'],
        'Filter frames': ['过滤帧'],
        'There is no view hierarchy data to visualize': [
          '没有视图层次结构数据可供可视化',
        ],
        'Rendering System: %s': ['渲染系统： %s'],
        'Zoom In on wireframe': ['在线框图上放大'],
        'Zoom Out on wireframe': ['在线框图上缩小'],
        'Thanks for taking the time to provide us feedback!': [
          '感谢您抽出时间给我们提供反馈！',
        ],
        'Required fields must be filled out': ['必须填写必填字段'],
        'Submit Feedback': ['提交反馈'],
        "You agree that any feedback you submit is subject to Sentry's [privacyPolicy:Privacy Policy] and Sentry may use such feedback without restriction or obligation.":
          [
            '您同意您提交的任何反馈都将遵守 Sentry 的 [privacyPolicy:隐私政策]，并且 Sentry 可以在不受限制或义务的情况下使用此类反馈。',
          ],
        'Type of feedback': ['反馈类型'],
        'Select type of feedback': ['选择反馈类型'],
        'Additional feedback': ['其他反馈'],
        'What did you expect?': ['您期望的是什么？'],
        "I don't like this feature": ['我不喜欢这个功能'],
        'I like this feature': ['我喜欢这个功能'],
        'Other reason': ['其他原因'],
        'No feedback selected': ['未选择任何反馈'],
        'Unable to find error [id]': ['无法找到错误 [id]'],
        'Action Menu': ['操作菜单'],
        'Mark as Spam': ['标记为垃圾信息'],
        'Move to Inbox': ['移动到收件箱'],
        'Mark Read': ['标记为已读'],
        'Mark Unread': ['标记为未读'],
        'An error occurred while removing the comment.': ['删除评论时出错。'],
        'Comment removed': ['评论已删除'],
        'An error occurred while posting the comment.': ['发布评论时出错。'],
        'Comment posted': ['评论已发布'],
        'An error occurred while updating the comment.': ['更新评论时出错。'],
        'Comment updated': ['评论已更新'],
        'Add details or updates to this feedback, visible only to your organization. \nTag users with @, or teams with #':
          [
            '为此反馈添加仅对您的组织可见的详细信息或更新。\n使用 @ 标记用户，或使用 # 标记团队。',
          ],
        'Assigned dropdown': ['分配下拉菜单'],
        'URL not found': ['未找到 URL'],
        'Linked Error': ['关联的错误'],
        'Internal Activity': ['内部活动'],
        'Use this section to post comments that are visible only to your organization. It will also automatically update when someone resolves or assigns the feedback.':
          [
            '使用此部分发布仅对您的组织可见的评论。当有人解决或分配反馈时，它也会自动更新。',
          ],
        'Unable to load feedback': ['无法加载反馈'],
        'Anonymous User': ['匿名用户'],
        'Click to copy': ['点击复制'],
        'No Name': ['无名称'],
        'No Email': ['无电子邮件'],
        'Email %s': ['电子邮件 %s'],
        'Linked Replay': ['关联的重放'],
        'No preview found': ['未找到预览'],
        'Click to download': ['点击下载'],
        'Copied Feedback URL to clipboard': ['已将反馈 URL 复制到剪贴板'],
        'Copied Short-ID to clipboard': ['已将短 ID 复制到剪贴板'],
        'Short-ID copy actions': ['短 ID 复制操作'],
        'Copy Feedback URL': ['复制反馈 URL'],
        'Copy Short-ID': ['复制短 ID'],
        'Track this issue in Jira, GitHub, etc.': ['在 Jira、GitHub 等中跟踪此问题'],
        'Seen by': ['被查看'],
        "Don't fully understand the feedback message? Install Session Replay to see what the user was doing leading up to the feedback submission.":
          ['不完全理解反馈信息吗？安装会话重放以查看用户在提交反馈之前的操作。'],
        'Set Up Session Replay': ['设置会话重放'],
        'Delete screenshot?': ['删除截图？'],
        'Delete screenshot': ['删除截图'],
        'Collapse tags': ['折叠标签'],
        'See all tags': ['查看所有标签'],
        'An error occurred while updating the feedback.': ['更新反馈时出错。'],
        'Updated feedback': ['已更新反馈'],
        'Updating feedback...': ['正在更新反馈...'],
        'Name Required': ['需要名称'],
        'Email Required': ['需要电子邮件'],
        'Enable Screenshots': ['启用截图'],
        'Want to receive user feedback at any time, not just when an error happens? Learn how to set up our customizable user feedback widget.':
          [
            '希望在任何时候都能收到用户反馈，而不仅仅是在发生错误时吗？了解如何设置我们可定制的用户反馈小部件。',
          ],
        'Introducing the User Feedback Widget': ['介绍用户反馈小部件'],
        'I use [platformSelect]': ['我使用 [platformSelect]'],
        'with [optionSelect]': ['使用 [optionSelect]'],
        'Coming soon!': ['即将推出！'],
        'I use HTML templates': ['我使用 HTML 模板'],
        'I use NPM or Yarn': ['我使用 NPM 或 Yarn'],
        "I'm using [platformSelect]": ['我正在使用 [platformSelect]'],
        'Fiddlesticks. This checklist isn’t available for your [project] project yet, but for now, go to Sentry docs for installation details.':
          [
            '抱歉，此清单尚不适用于您的 [project] 项目。目前，请前往 Sentry 文档获取安装详情。',
          ],
        Supported: ['支持'],
        'Getting Started with User Feedback': ['开始使用用户反馈'],
        'Search Feedback': ['搜索反馈'],
        'Introducing the New User Feedback': ['介绍新的用户反馈'],
        'Allow your users to create bug reports so they can let you know about these sneaky issues right away. Every report will automatically include related replays, tags, and errors, making fixing the issue dead simple.':
          [
            '允许用户创建错误报告，以便他们能立即告知您这些隐藏的问题。每个报告将自动包含相关的重放、标签和错误，使解决问题变得非常简单。',
          ],
        'Users can submit feedback anytime they’re having a problem with your app via our feedback widget.':
          ['用户可以通过我们的反馈小部件在使用您的应用程序出现问题时随时提交反馈。'],
        'What’s new': ['新内容'],
        'Inbox Zero': ['清空收件箱'],
        'You have two options: take a nap or be productive.': [
          '您有两个选择：小憩一下或提高工作效率。',
        ],
        'Loading more feedback...': ['正在加载更多反馈...'],
        '[countSelected] Selected': ['[countSelected] 已选择'],
        'Move to inbox': ['移动到收件箱'],
        'Read Menu': ['阅读菜单'],
        'Load new feedback': ['加载新反馈'],
        'Has Activity': ['有活动'],
        'Has Screenshot': ['有截图'],
        'Linked Tickets: %d': ['关联工单：%d'],
        'Linked %s Issue': ['关联的 %s 问题'],
        Inbox: ['收件箱'],
        Spam: ['垃圾信息'],
        'Filter feedbacks': ['过滤反馈'],
        '1 unassigned item': ['1 个未分配的项目'],
        '%s unassigned items': ['%s 个未分配的项目'],
        'Updated feedbacks': ['已更新的反馈'],
        'Are you sure you want to mark these feedbacks as unread?': [
          '您确定要将这些反馈标记为未读吗？',
        ],
        'Updating feedbacks...': ['正在更新反馈...'],
        'An error occurred while updating the feedbacks.': ['更新反馈时发生错误。'],
        'Are you sure you want to move these feedbacks to the inbox?': [
          '您确定要将这些反馈移动到收件箱吗？',
        ],
        'Are you sure you want to mark these feedbacks as [status]?': [
          '您确定要将这些反馈标记为 [status] 吗？',
        ],
        'Are you sure you want to mark these feedbacks as read?': [
          '您确定要将这些反馈标记为已读吗？',
        ],
        'Send Feedback': ['发送反馈'],
        'Clear choices': ['清除选择'],
        'Remove item': ['删除项目'],
        'No file selected': ['未选择文件'],
        'Create a Project': ['创建项目'],
        'Sentry project…': ['Sentry 项目...'],
        'Add project': ['添加项目'],
        'None selected': ['未选择'],
        'Continue with these changes?': ['继续进行这些更改吗？'],
        'Choose Teams and Members': ['选择团队和成员'],
        'Choose a role': ['选择角色'],
        'Choose Sentry project': ['选择 Sentry 项目'],
        'Are you sure you want to delete this item?': ['您确定要删除此项目吗？'],
        'Required fields must be filled out and inputs must be valid': [
          '必须填写必填字段，并且输入必须有效',
        ],
        'Fields must contain valid inputs': ['字段必须包含有效的输入'],
        'Close Drawer': ['关闭抽屉'],
        'There was a problem rendering the drawer.': ['渲染抽屉时出现问题。'],
        'No one': ['无'],
        'Assigned To': ['分配给'],
        'Suspect commit author': ['可疑提交作者'],
        'Modify issue assignee': ['更改问题分配给的人'],
        'Unable to connect to %s': ['无法连接到 %s'],
        'Unlink issue': ['解除问题链接'],
        'This feature is experimental and may produce inaccurate results. Please share feedback to help us improve the experience.':
          ['此功能是实验性的，可能会产生不准确的结果。请分享反馈以帮助我们改进体验。'],
        'Issue Summary': ['问题摘要'],
        'Error loading summary': ['加载摘要时出错'],
        'Potential Impact': ['潜在影响'],
        'How can we make this issue summary more useful?': [
          '我们如何能让此问题摘要更有用？',
        ],
        'Archived forever': ['永久存档'],
        'Archived until escalating': ['存档直至升级'],
        'Archived until condition met': ['存档直至条件满足'],
        'This issue has 50+ replays available to view': ['此问题有 50 + 个可查看的重放'],
        'This issue has %s replay available to view': ['此问题有 %s 个可查看的重放'],
        'This issue has %s replays available to view': ['此问题有 %s 个可查看的重放'],
        'replay-count': ['重放计数'],
        'See which release caused this issue ': ['查看哪个版本导致了此问题 '],
        'N/A for %s': ['对 %s 不适用'],
        '%s Issue': ['%s 问题'],
        '%s Issues': ['%s 个问题'],
        'Unable to connect to [provider].': ['无法连接到 [provider]。'],
        'Sentry Feedback: [%s](%s)\n\n%s \n\n%s%s%s%s': [
          'Sentry 反馈：[%s](%s)\n\n%s \n\n%s%s%s%s',
        ],
        'Teams (%s)': ['团队 (%s)'],
        '%s member': ['%s 成员'],
        '%s members': ['%s 个成员'],
        'Individuals (%s)': ['个人 (%s)'],
        'There was an error loading tags for this issue.': ['加载此问题的标签时出错。'],
        'All Tags': ['所有标签'],
        'The tags associated with all events in this issue': [
          '此问题中所有事件关联的标签',
        ],
        'Other %s tag values, %s of all events. View other tags.': [
          '其他 %s 标签值，所有事件的 %s 。查看其他标签。',
        ],
        '%s, %s, %s of all events. View events with this tag value.': [
          '%s、%s、%s 的所有事件。查看具有此标签值的事件。',
        ],
        '%s %s tag distribution': ['%s %s 标签分布'],
        'Other segment': ['其他段'],
        segment: ['段'],
        'Failed to load preview': ['加载预览失败'],
        'There is no evidence available for this issue.': ['此问题没有可用的证据。'],
        'There is no span evidence available for this issue.': [
          '此问题没有可用的跨度证据。',
        ],
        'Failed to load stack trace.': ['加载堆栈跟踪失败。'],
        'There is no stack trace available for this issue.': [
          '此问题没有可用的堆栈跟踪。',
        ],
        '%s result': ['%s 结果'],
        'You do not have permission to set up an integration.': ['您没有权限设置集成。'],
        'Last Triggered': ['最后触发'],
        'Show more...': ['显示更多...'],
        'No data available': ['没有可用的数据'],
        zoom: ['缩放'],
        remove: ['删除'],
        'Span %s': ['跨度 %s'],
        'Metric Alerts': ['指标警报'],
        'You do not have permission to create alerts': ['您没有权限创建警报'],
        'View Metric': ['查看指标'],
        'Custom Metrics': ['自定义指标'],
        'Count: %s': ['计数：%s'],
        '(none)': ['（无）'],
        "Span's start time -/+ 30 min": ['跨度的开始时间 -/+ 30 分钟'],
        'Tags:': ['标签： '],
        'Tags: %s': ['标签： %s'],
        'Unknown query "%s"': ['未知查询 "%s"'],
        'Equations must contain at least one metric': ['方程式必须至少包含一个指标'],
        'All Spans': ['所有跨度'],
        "This query is exeeding the cardinality limit. Remove tags or add more filters in the metric's settings to receive accurate data.":
          [
            '此查询超过了基数限制。请删除标签或在指标的设置中添加更多筛选条件以获取准确的数据。',
          ],
        'Exceeding the cardinality limit warning': ['超出基数限制警告'],
        'Add Filter': ['添加筛选条件'],
        'Ideally, you can visualize span data by any property you want. However, our infrastructure has limits as well, so pretty please define in advance what you want to see.':
          [
            '理想情况下，您可以按任何属性可视化跨度数据。但是，我们的基础设施也有限制，所以麻烦您提前定义好想要查看的内容。',
          ],
        'What are filters?': ['筛选条件是什么？'],
        'Built-in': ['内置'],
        'You need to set up tracing to collect samples.': ['您需要设置追踪以收集样本。'],
        'Choose a metric to display samples': ['选择一个指标以显示样本'],
        'Self Time: ': ['自身时间： '],
        'Duration: ': ['持续时间： '],
        'Open Profile': ['打开分析配置文件'],
        'Filter by span tags': ['按跨度标签过滤'],
        'Search not available for this metric': ['此指标不可搜索'],
        'Filter by tags': ['按标签过滤'],
        'Deleted Metric': ['已删除的指标'],
        Metric: ['指标'],
        'Select a metric': ['选择指标'],
        'Create Metric': ['创建指标'],
        'Don’t see your span attribute? Create Metric.': [
          '看不到您的跨度属性？创建指标。',
        ],
        'Loading metrics...': ['加载指标中...'],
        'Metrics with the same name and different units were detected. Unwanted metrics can be disabled in settings.':
          ['检测到具有相同名称但不同单位的指标。不需要的指标可以在设置中禁用。'],
        'Prone to client-side sampling': ['容易受到客户端采样影响'],
        'Open metric settings': ['打开指标设置'],
        '+%d more': ['+%d 更多'],
        Unit: ['单位'],
        '(None)': ['（无）'],
        Visualize: ['可视化'],
        'Agg by': ['按...聚合'],
        'Group by': ['按...分组'],
        'You can not group by a tag that has not been seen in the selected time range': [
          '不能按在所选时间范围内未出现的标签进行分组',
        ],
        Where: ['在...地方'],
        And: ['和'],
        Agg: ['聚合'],
        'This tag appears in filter conditions, some groups may be omitted.': [
          '此标签出现在筛选条件中，可能会遗漏一些组。',
        ],
        Mute: ['静音'],
        'Manage Monitors': ['管理监控'],
        'Please select monitors to [actionText]': ['请选择要 [actionText] 的监控'],
        '%s monitor': ['%s 监控'],
        '%s monitors': ['%s 个监控'],
        'Search Monitors': ['搜索监控'],
        'No monitors found': ['未找到监控'],
        Monitor: ['监控'],
        'Search for projects, teams, settings, etc…': ['搜索项目、团队、设置等...'],
        'Add to Dashboard': ['添加到仪表盘'],
        'Unable to load dashboards': ['无法加载仪表盘'],
        'Select Dashboard': ['选择仪表盘'],
        'Name your dashboard': ['命名您的仪表盘'],
        'Add + Stay on this Page': ['添加并留在当前页面'],
        'Open in Dashboards': ['在仪表盘中打开'],
        'You need to name your dashboard': ['您需要命名您的仪表盘'],
        'Successfully created dashboard': ['成功创建仪表盘'],
        'Successfully added widgets to dashboard': ['成功将小组件添加到仪表盘'],
        'Internal Integration': ['内部集成'],
        'Internal integrations are meant for custom integrations unique to your organization. See more info on [docsLink].':
          ['内部集成为了适用于您组织的独特自定义集成。更多信息请参见 [docsLink]。'],
        'Public Integration': ['公共集成'],
        'A public integration will be available for all Sentry users for installation. See more info on [docsLink].':
          ['公共集成为所有 Sentry 用户提供安装。更多信息请参见 [docsLink]。'],
        'Choose Integration Type': ['选择集成类型'],
        'Name of new integration.': ['新集成的名称。'],
        'Create a Release Integration': ['创建版本集成'],
        'Created Release Integration': ['已创建版本集成'],
        'Something went wrong!': ['出错了！'],
        'Custom Symbol Sources': ['自定义符号源'],
        'Sign up for Sentry': ['注册 Sentry'],
        'More Tours': ['更多导览'],
        'Restart Tour': ['重新开始导览'],
        'Issues Tour': ['问题导览'],
        'Thank you for completing the Issues tour. Learn about other Sentry features by starting another tour.':
          ['感谢您完成问题导览。通过开始其他导览了解 Sentry 的其他功能。'],
        'Performance Tour': ['性能导览'],
        'Thank you for completing the Performance tour. Learn about other Sentry features by starting another tour.':
          ['感谢您完成性能导览。通过开始其他导览了解 Sentry 的其他功能。'],
        'Releases Tour': ['版本导览'],
        'Thank you for completing the Releases tour. Learn about other Sentry features by starting another tour.':
          ['感谢您完成版本导览。通过开始其他导览了解 Sentry 的其他功能。'],
        'Check out the different tabs': ['查看不同的标签页'],
        'Thank you for checking out the different tabs. Learn about other Sentry features by starting another tour.':
          ['感谢您查看不同的标签页。通过开始其他导览了解 Sentry 的其他功能。'],
        'Tour Complete': ['导览完成'],
        'Hey, like what you see?': ['嘿，喜欢您看到的吗？'],
        "Start your free trial, and create your first project to see what's broken in your code and how to fix it.":
          [
            '开始您的免费试用，创建您的第一个项目，查看代码中的问题以及如何修复这些问题。',
          ],
        'Start free trial': ['开始免费试用'],
        'Request a demo': ['请求演示'],
        'Close tour': ['关闭导览'],
        'Complete tour': ['完成导览'],
        'Import Dashboard from JSON File': ['从 JSON 文件导入仪表盘'],
        Import: ['导入'],
        'Failed to load members': ['无法加载成员'],
        'You can’t invite users directly, but we’ll forward your request to an org owner or manager for approval.':
          ['您不能直接邀请用户，但我们会将您的请求转发给组织所有者或管理员以获得批准。'],
        'Add to Team': ['添加到团队'],
        'Role cannot join teams': ['角色不能加入团队'],
        'Sending invite requests…': ['正在发送邀请请求...'],
        'Sending organization invitations…': ['正在发送组织邀请...'],
        '%s invite': ['%s 邀请'],
        '%s invite request': ['%s 邀请请求'],
        'Invite [prefix][memberCount] missing member[isPlural]': [
          '邀请 [prefix][memberCount] 缺少的成员[isPlural]',
        ],
        'Invite Your Dev Team': ['邀请您的开发团队'],
        'Deselect All': ['取消全选'],
        'User Information': ['用户信息'],
        'Recent Commits': ['最近的提交'],
        'Based on the last 30 days of commit data': ['基于过去 30 天的提交数据'],
        'Select %s': ['选择 %s'],
        'Send Invites': ['发送邀请'],
        'You have unsaved changes, are you sure you want to close?': [
          '您有未保存的更改，确定要关闭吗？',
        ],
        'Open in Metrics': ['在指标中打开'],
        'Edit Title': ['编辑标题'],
        'Big Number widgets support only one visible metric': [
          '大数据组件仅支持一个可见指标',
        ],
        'Add metric': ['添加指标'],
        'Add equation': ['添加方程'],
        'Remove Metric': ['移除指标'],
        'Add Alias': ['添加别名'],
        'Configure Metric': ['配置指标'],
        'Query actions': ['查询操作'],
        'Remove Equation': ['移除方程'],
        'Equation actions': ['方程操作'],
        'Hide equation': ['隐藏方程'],
        'Show equation': ['显示方程'],
        'Hide metric': ['隐藏指标'],
        'Show metric': ['显示指标'],
        'At least one query must be visible': ['至少必须有一个查询是可见的'],
        'Add alias': ['添加别名'],
        'Clear Alias': ['清除别名'],
        'Clear alias': ['清除别名'],
        'Error while fetching metrics data': ['获取指标数据时出错'],
        'Heads up': ['注意'],
        "You're leaving Sentry and will be redirected to the following external website:":
          ['您即将离开 Sentry 并将被重定向到以下外部网站：'],
        'Set your alert frequency': ['设置您的警报频率'],
        'Name your project and assign it a team': ['命名您的项目并为其分配一个团队'],
        'project-name': ['项目名称'],
        'Next Step': ['下一步'],
        'Creating project...': ['正在创建项目...'],
        'There was an error loading authenticators.': ['加载身份验证器时出错。'],
        'Create a Saved Search': ['创建保存的搜索'],
        'Edit Saved Search': ['编辑保存的搜索'],
        'Only me': ['仅我自己'],
        'Users in my organization': ['组织中的用户'],
        'Add a name': ['添加名称'],
        'Filter issues': ['筛选问题'],
        'Sort issues': ['排序问题'],
        'Only organization admins can create global saved searches.': [
          '只有组织管理员可以创建全局保存的搜索。',
        ],
        'Choose who can view this saved search': ['选择谁可以查看此保存的搜索'],
        'Please fill out this questionnaire in order to get your integration evaluated for publication.\n              Once your integration has been approved, users outside of your organization will be able to install it.':
          [
            '请填写此问卷，以便您的集成可以被评估以供发布。\n              一旦您的集成为获得批准，您组织外部的用户将能够安装它。',
          ],
        'You will need to reauthenticate to continue': ['您需要重新认证才能继续'],
        'Re-authenticate': ['重新认证'],
        'COPS/CSM': ['COPS/CSM'],
        'Successfully added widget to dashboard': ['成功将小组件添加到仪表盘'],
        'Any conflicting filters from this query will be overridden by Dashboard filters. This is a preview of how the widget will appear in your dashboard.':
          [
            '此查询中的任何冲突筛选条件都将被仪表盘筛选条件覆盖。这是小组件在您的仪表盘中的预览效果。',
          ],
        'Add + Open Dashboard': ['添加并打开仪表盘'],
        'Open in Widget Builder': ['在小组件构建器中打开'],
        'Select a dashboard': ['选择仪表盘'],
        "You've already started building this widget and will lose unsaved changes. Are you sure you want to overwrite this widget with the template values?":
          [
            '您已经开始构建这个小组件，未保存的更改将丢失。您确定要用模板值覆盖此小组件吗？',
          ],
        'Overwrite Widget': ['覆盖小组件'],
        'We don’t routinely collect metrics from this property. As such, historical data may be limited.':
          ['我们不常规地从这个属性收集指标。因此，历史数据可能有限。'],
        'This widget was built with multiple queries. Table data can only be displayed for one query at a time. To edit any of the queries, edit the widget.':
          [
            '这个小组件是使用多个查询构建的。表格数据一次只能显示一个查询。要编辑任何查询，请编辑小组件。',
          ],
        'To edit this query, you must edit the widget.': [
          '要编辑此查询，您必须编辑小组件。',
        ],
        'Open in Releases': ['在版本中打开'],
        'We are splitting datasets to make them easier to digest. Please confirm the dataset for this widget by clicking Edit Widget.':
          ['我们正在拆分数据集以便于理解。请点击编辑小组件以确认此小组件的数据集。'],
        '[description:Total Issues:] [total]': ['[description:总问题数:] [total]'],
        '[description:Sampled Events:] [total]': ['[description:采样事件:] [total]'],
        'View Event': ['查看事件'],
        'Remain Calm': ['保持冷静'],
        'Do you use a framework?': ['您使用框架吗？'],
        'Select a framework to configure': ['选择要配置的框架'],
        'Configure SDK': ['配置 SDK'],
        'Our JavaScript framework SDKs include all the features of our Browser Javascript SDK with additional features specific to that framework':
          [
            '我们的 JavaScript 框架 SDK 包含了浏览器 JavaScript SDK 的所有功能，并添加了特定于该框架的额外功能',
          ],
        'Our Node framework SDKs include all the features of our Node SDK with instructions specific to that framework':
          ['我们的 Node 框架 SDK 包含了 Node SDK 的所有功能，并提供该框架的特定说明'],
        'Our Python framework SDKs include all the features of our Python SDK with instructions specific to that framework':
          ['我们的 Python 框架 SDK 包含了 Python SDK 的所有功能，并提供该框架的特定说明'],
        'Our .NET integrations include all the features of our core .NET SDK with instructions specific to that framework':
          ['我们的 .NET 集成包含核心 .NET SDK 的所有功能，并提供该框架的特定说明'],
        'Our Java framework SDKs include all the features of our Java SDK with instructions specific to that framework':
          ['我们的 Java 框架 SDK 包含 Java SDK 的所有功能，并提供该框架的特定说明'],
        'Our Go framework SDKs include all the features of our Go SDK with instructions specific to that framework':
          ['我们的 Go 框架 SDK 包含 Go SDK 的所有功能，并提供该框架的特定说明'],
        'Failed to create a new auth token.': ['创建新认证令牌失败。'],
        'Generating token...': ['正在生成令牌...'],
        'Click to generate token': ['点击生成令牌'],
        'Want to add an embeddable, JavaScript-based, crash-report modal to your website instead? [link:Read the docs] to learn how.':
          [
            '想要为您的网站添加一个可嵌入的、基于 JavaScript 的崩溃报告模态框吗？[link:阅读文档] 了解如何操作。',
          ],
        'Interested in receiving feedback only when an error happens? [link:Read the docs] to learn how to set up our crash-report modal.':
          [
            '仅在发生错误时接收反馈感兴趣吗？[link:阅读文档] 了解如何设置我们的崩溃报告模态框。',
          ],
        'Want to receive user feedback at any time, not just when an error happens? [link:Read the docs] to learn how to set up our customizable widget.':
          [
            '希望在任何时候都能收到用户反馈，而不仅仅是在发生错误时吗？[link:阅读文档] 了解如何设置我们的可定制小部件。',
          ],
        'To see replays for backend errors, ensure that you have set up trace propagation. To learn more, [link:read the docs].':
          [
            '要查看后端错误的重放，请确保已设置跟踪传播。如需了解更多，请 [link:阅读文档]。',
          ],
        'We encountered an issue while loading the getting started documentation for this platform.':
          ['在加载此平台的入门文档时，我们遇到了问题。'],
        'The getting started documentation for this platform is currently unavailable.': [
          '此平台的入门文档目前无法使用。',
        ],
        'We encountered an issue while loading the DSN for this getting started documentation.':
          ['在加载此入门文档的 DSN 时，我们遇到了问题。'],
        Verify: ['验证'],
        'Toggle optional configuration': ['切换可选配置'],
        ' (Optional)': ['（可选）'],
        'Make sure you have the JavaScript SDK available:': [
          '确保您有可用的 JavaScript SDK：',
        ],
        'To set up the integration, add the following to your Sentry initialization. There are many options you can pass to the [code:integrations] constructor to customize your form. [break] [break] You can even [linkButton:link the widget to a custom button] if you don’t want to use our auto-injected floating button. Learn more about configuring User Feedback by reading the [linkConfig:configuration docs].':
          [
            '要设置集成，请将以下内容添加到您的 Sentry 初始化中。您可以向 [code:integrations] 构造函数传递许多选项来自定义您的表单。[break] [break] 如果您不想使用我们自动注入的浮动按钮，您甚至可以 [linkButton:将小部件链接到自定义按钮]。通过阅读 [linkConfig:配置文档] 了解更多关于配置用户反馈的信息。',
          ],
        'You will then need to call [codeShow:showReportDialog] and pass in the generated event ID. This event ID is returned from all calls to [codeEvent:CaptureEvent] and [codeException:CaptureException]. There is also a function called [codeLast:LastEventId] that returns the ID of the most recently sent event.':
          [
            '然后您需要调用 [codeShow:showReportDialog] 并传入生成的事件 ID。此事件 ID 是从所有对 [codeEvent:CaptureEvent] 和 [codeException:CaptureException] 的调用返回的。还有一个名为 [codeLast:LastEventId] 的函数，它返回最近发送事件的 ID。',
          ],
        'You will then need to call [codeShow:showReportDialog] and pass in the generated event ID. This event ID is returned from all calls to [codeEvent:capture_event] and [codeException:capture_exception]. There is also a function called [codeLast:last_event_id] that returns the ID of the most recently sent event.':
          [
            '然后您需要调用 [codeShow:showReportDialog] 并传入生成的事件 ID。此事件 ID 是从所有对 [codeEvent:capture_event] 和 [codeException:capture_exception] 的调用返回的。还有一个名为 [codeLast:last_event_id] 的函数，它返回最近发送事件的 ID。',
          ],
        'This function php returns the last [code:eventId]:': [
          '此函数 php 返回最后一个 [code:eventId]：',
        ],
        'Depending on how you render your templates, the example would be in a simple php file:':
          ['根据您渲染模板的方式，示例将在一个简单的 php 文件中：'],
        'When a user experiences an error, Sentry provides the ability to collect additional feedback from the user via a form. The user feedback API allows you to collect user feedback while utilizing your own UI for the form. You can use the same programming language you have in your app to send user feedback.':
          [
            '当用户遇到错误时，Sentry 提供了通过表单从用户那里收集额外反馈的能力。用户反馈 API 允许您在使用自己的表单 UI 的同时收集用户反馈。您可以使用应用程序中的同一种编程语言来发送用户反馈。',
          ],
        'Sentry needs the error [codeEvent:eventId] to be able to associate the user feedback to the corresponding event. To get the [codeEvent:eventId], you can use [codeBefore:beforeSend] or the return value of the method capturing an event.':
          [
            'Sentry 需要错误 [codeEvent:eventId] 才能将用户反馈关联到相应的事件。要获取 [codeEvent:eventId]，您可以使用 [codeBefore:beforeSend] 或捕获事件方法的返回值。',
          ],
        'When a user experiences an error, Sentry provides the ability to collect additional feedback. You can use an endpoint in Sentry to submit it. [link:Read our docs] to learn more.':
          [
            '当用户遇到错误时，Sentry 提供收集额外反馈的能力。您可以使用 Sentry 中的一个端点来提交它。[link:阅读我们的文档] 了解更多。',
          ],
        'Collect feedback on your errors by installing our crash-report modal. This allows users to submit feedback after they experience an error via an automatic modal that pops up after an error occurs. The default modal will prompt the user for their name, email address, and description of what occurred.':
          [
            '通过安装我们的崩溃报告模态框来收集错误反馈。这允许用户在遇到错误后通过自动弹出的模态框提交反馈。默认的模态框将提示用户输入他们的姓名、电子邮件地址和事件描述。',
          ],
        'You can collect feedback at the time the event is sent, using [code:beforeSend].':
          ['您可以在事件发送时使用 [code:beforeSend] 收集反馈。'],
        'There are many options you can pass to the [code:Sentry.showReportDialog] call to customize your form. Learn more about configuring the modal by reading the [link:configuration docs].':
          [
            '您可以向 [code:Sentry.showReportDialog] 调用传递许多选项来自定义您的表单。通过阅读 [link:配置文档] 了解更多关于配置模态框的信息。',
          ],
        'Upload Source Maps': ['上传源映射'],
        'Automatically upload your source maps to enable readable stack traces for Errors. If you prefer to manually set up source maps, please follow [guideLink:this guide].':
          [
            '自动上传您的源映射，以便为错误启用可读的堆栈跟踪。如果您更喜欢手动设置源映射，请按照 [guideLink:此指南] 操作。',
          ],
        'Currently, Mobile Replay is in beta. You can [link:read our docs] to learn how to set it up for your project.':
          [
            '目前，移动重放处于测试阶段。您可以 [link:阅读我们的文档] 了解如何为您的项目设置它。',
          ],
        'It can take up to 3 minutes for the data to appear in the Sentry UI.': [
          '数据可能需要最多 3 分钟才能出现在 Sentry UI 中。',
        ],
        'Learn more about metrics and how to configure them, by reading the [docsLink:docs].':
          ['通过阅读 [docsLink:文档] 了解更多关于指标及其配置的信息。'],
        'You need a minimum version [codeVersion:7.103.0] of [codeNode:@sentry/node], [codeDeno:@sentry/deno] or [codeBun:@sentry/bun].':
          [
            '您需要 [codeNode:@sentry/node]、[codeDeno:@sentry/deno] 或 [codeBun:@sentry/bun] 的最低版本 [codeVersion:7.103.0]。',
          ],
        'With the default snippet in place, there is no need for any further configuration.':
          ['使用默认片段后，无需任何进一步配置。'],
        "Then you'll be able to add metrics as [codeCounters:counters], [codeSets:sets], [codeDistribution:distributions], and [codeGauge:gauges]. These are available under the [codeNamespace:Sentry.metrics] namespace. This API is available in both renderer and main processes.":
          [
            '然后您将能够添加指标，如 [codeCounters:计数器]、[codeSets:集合]、[codeDistribution:分布] 和 [codeGauge:测量仪]。这些在 [codeNamespace:Sentry.metrics] 命名空间下可用。此 API 在渲染器和主进程中均可使用。',
          ],
        'Try out these examples:': ['尝试这些示例：'],
        'You can also enrich your metrics with [codeTags:tags] (key/value pairs like [codePlatform:platform:ios], [codeRegion:region:EU]) to provide added context. Filter and group metrics in the product by these tags to refine your analysis.':
          [
            '您还可以通过 [codeTags:标签]（如 [codePlatform:platform:ios]、[codeRegion:region:EU] 的键/值对）丰富您的指标，以提供额外的上下文。通过这些标签在产品中筛选和分组指标以细化分析。',
          ],
        'You need [package:sentry-java] version [codeVersion:7.6.0] or higher. Follow our [docsLink:setup wizard] to learn more about setting up the Android SDK.':
          [
            '您需要 [package:sentry-java] 版本 [codeVersion:7.6.0] 或更高。请按照我们的 [docsLink:设置向导] 了解更多关于设置 Android SDK 的信息。',
          ],
        "Then you'll be able to add metrics as [codeCounters:counters], [codeSets:sets], [codeDistribution:distributions], and [codeGauge:gauges]. These are available under the [codeNamespace:Sentry.metrics()] namespace.":
          [
            '然后您将能够添加指标，如 [codeCounters:计数器]、[codeSets:集合]、[codeDistribution:分布] 和 [codeGauge:测量仪]。这些在 [codeNamespace:Sentry.metrics()] 命名空间下可用。',
          ],
        'You need [package:sentry-java] version [codeVersion:7.6.0] or higher. Follow our [docsLink:setup wizard] to learn more about setting up the Java SDK.':
          [
            '您需要 [package:sentry-java] 版本 [codeVersion:7.6.0] 或更高。请按照我们的 [docsLink:设置向导] 了解更多关于设置 Java SDK 的信息。',
          ],
        "You need a minimum version [codeVersion:1.40.6] of the [codePackage:sentry-python] SDK and add that as your dependency. You don't need to install any additional packages":
          [
            '您需要 [codePackage:sentry-python] SDK 的最低版本 [codeVersion:1.40.6] 并将其作为您的依赖项。您不需要安装任何其他软件包',
          ],
        "Once the SDK is installed you are ready to go. With the default snippet in place, there's no need for any further configuration.":
          ['SDK 安装完成后即可使用。使用默认片段后，无需任何进一步配置。'],
        "Then you'll be able to add metrics as [codeCounters:counters], [codeSets:sets], [codeDistribution:distributions], and [codeGauge:gauges].":
          [
            '然后您将能够添加指标，如 [codeCounters:计数器]、[codeSets:集合]、[codeDistribution:分布] 和 [codeGauge:测量仪]。',
          ],
        'You need a minimum version [codeVersion:7.103.0] of the Sentry browser SDK package, or an equivalent framework SDK (e.g. [codePackage:@sentry/react]) installed.':
          [
            '您需要安装 Sentry 浏览器 SDK 包的最低版本 [codeVersion:7.103.0]，或等效的框架 SDK（例如 [codePackage:@sentry/react]）。',
          ],
        'You need a minimum version [codeVersion:4.0.0] of the .NET SDK installed.': [
          '您需要安装 .NET SDK 的最低版本 [codeVersion:4.0.0]。',
        ],
        'Once the SDK is installed or updated, you can enable the experimental metrics feature and code locations being emitted in your SDK init.':
          ['安装或更新 SDK 后，您可以在 SDK 初始化中启用实验性指标功能和代码位置。'],
        "Then you'll be able to add metrics as [codeCounters:counters], [codeSets:sets], [codeDistribution:distributions], [codeGauge:gauges], and [codeTimings:timings].":
          [
            '然后您将能够添加指标，如 [codeCounters:计数器]、[codeSets:集合]、[codeDistribution:分布]、[codeGauge:测量仪] 和 [codeTimings:计时]。',
          ],
        'You need a minimum version [codeVersion:5.17.0] of the [codePackage:sentry-ruby] gem and add that as your dependency in your [codeGemfile:Gemfile].':
          [
            '您需要 [codePackage:sentry-ruby] gem 的最低版本 [codeVersion:5.17.0] 并将其作为您的依赖项添加到 [codeGemfile:Gemfile] 中。',
          ],
        'Once the SDK is installed or updated you have to enable metrics in your SDK initializer:':
          ['安装或更新 SDK 后，您必须在 SDK 初始化程序中启用指标：'],
        'You need a minimum version [codeVersion:5.19.0] of the Sentry React Native SDK installed.':
          ['您需要安装 Sentry React Native SDK 的最低版本 [codeVersion:5.19.0]。'],
        "Then you'll be able to add metrics as [codeCounters:counters], [codeSets:sets], [codeDistribution:distributions], and [codeGauge:gauges]. These are available under the [codeNamespace:Sentry.metrics] namespace.":
          [
            '然后您将能够添加指标，如 [codeCounters:计数器]、[codeSets:集合]、[codeDistribution:分布] 和 [codeGauge:测量仪]。这些在 [codeNamespace:Sentry.metrics] 命名空间下可用。',
          ],
        "For the JavaScript browser profiler to start, the document response header needs\n          to include a Document-Policy header key with the js-profiling value. How you do\n          this will depend on how your assets are served.\n\n          If you're using a server like Express, you'll be able to use the response.set function to set the header value.\n          ":
          [
            '要启动 JavaScript 浏览器分析器，文档响应标头需要包含值为 js-profiling 的文档策略标头键。具体操作方法取决于您的资产提供方式。\n\n          如果您使用的是 Express 等服务器，您可以使用 response.set 函数来设置标头值。',
          ],
        'Browser profiling is currently in Beta as we wait for the JS Self Profiling spec to gain wider support. You can read the detailed explanation [explainer].':
          [
            '浏览器分析目前处于测试阶段，因为我们正在等待 JS 自分析规范获得更广泛的支持。您可以阅读详细解释 [explainer]。',
          ],
        'Add the following to your SDK config. There are several privacy and sampling options available, all of which can be set using the [code:integrations] constructor. Learn more about configuring Session Replay by reading the [link:configuration docs].':
          [
            '将以下内容添加到您的 SDK 配置中。有许多隐私和采样选项可供选择，所有这些都可以通过 [code:integrations] 构造函数设置。通过阅读 [link:配置文档] 了解更多关于配置会话重放的信息。',
          ],
        'In this quick guide you’ll use our [loaderScript] to set up:': [
          '在这个快速指南中，您将使用我们的 [loaderScript] 来设置：',
        ],
        'In this quick guide you’ll use [npm] or [yarn] to set up:': [
          '在这个快速指南中，您将使用 [npm] 或 [yarn] 来设置：',
        ],
        "In this quick guide you'll use the [astrocli:astro] CLI to set up:": [
          '在这个快速指南中，您将使用 [astrocli:astro] CLI 来设置：',
        ],
        'Error Monitoring': ['错误监控'],
        "Let's admit it, we all have errors.": ['让我们承认，我们都有错误。'],
        'Automatic performance issue detection across services and context on who is impacted, outliers, regressions, and the root cause of your slowdown.':
          [
            '自动检测跨服务的性能问题，并提供受影响对象、异常值、回归以及导致减速的根本原因的上下文。',
          ],
        'Video-like reproductions of user sessions with debugging context to help you confirm issue impact and troubleshoot faster.':
          [
            '带有调试上下文的类似视频的用户会话重现，帮助您确认问题影响并更快地进行故障排除。',
          ],
        '[strong:Requires Tracing]\nSee the exact lines of code causing your performance bottlenecks, for faster troubleshooting and resource optimization.':
          ['[strong:需要跟踪]\n查看导致性能瓶颈的确切代码行，以加快故障排除和资源优化。'],
        Profiling: ['分析'],
        'Prefer to set up Sentry using [npm:npm] or [yarn:yarn]? [goHere]': [
          '更喜欢使用 [npm:npm] 或 [yarn:yarn] 设置 Sentry 吗？[goHere]',
        ],
        'View npm instructions': ['查看 npm 说明'],
        'This feature is disabled for errors only self-hosted': [
          '此功能仅对自托管的错误禁用',
        ],
        'Project to Setup': ['要设置的项目'],
        'Guided Tours': ['引导式导览'],
        'Take a guided tour to see what Sentry can do for you': [
          '参加引导式导览，了解 Sentry 能为您做什么',
        ],
        'Quick Start': ['快速入门'],
        'Walk through this guide to get the most out of Sentry right away.': [
          '通过本指南立即充分利用 Sentry。',
        ],
        'Sentry Basics': ['Sentry 基础知识'],
        'The Basics': ['基础知识'],
        'Level Up': ['提升技能'],
        'Here’s a list of errors and performance problems. And everything you need to know to fix it.':
          ['这是一个错误和性能问题的列表。以及修复它们所需的一切知识。'],
        'See slow fast. Trace slow-loading pages back to their API calls as well as all related errors':
          ['查看加载缓慢的页面。追踪到它们的 API 调用以及所有相关错误。'],
        'Track the health of every release. See differences between releases from crash analytics to adoption rates.':
          ['追踪每个版本的健康状况。查看从崩溃分析到采用率的版本差异。'],
        'Press the start button for a guided tour through each tab.': [
          '按下开始按钮，开始每个标签页的引导式导览。',
        ],
        "Monitor in seconds by adding a simple lines of code to your project. It's as easy as microwaving leftover pizza.":
          [
            '通过向项目添加几行代码，在几秒钟内完成监控设置。就像用微波炉加热剩披萨一样简单。',
          ],
        'Capture your first error': ['捕获您的第一个错误'],
        "Time to test it out. Now that you've created a project, capture your first error. We've got an example you can fiddle with.":
          [
            '现在是时候测试一下了。既然您已经创建了一个项目，就捕获您的第一个错误吧。我们有一个您可以调试的示例。',
          ],
        'Assign issues and comment on shared errors with coworkers so you always know who to blame when sh*t hits the fan.':
          ['分配问题并与同事评论共享错误，以便在出现问题时您总是知道该责怪谁。'],
        'Install any of our 40+ integrations': ['安装我们的 40 多个集成中的任何一个'],
        'Get alerted in Slack. Two-way sync issues between Sentry and Jira. Notify Sentry of releases from GitHub, Vercel, or Netlify.':
          [
            '在 Slack 中接收警报。Sentry 和 Jira 之间的问题双向同步。从 GitHub、Vercel 或 Netlify 通知 Sentry 版本发布。',
          ],
        'Easy, right? Don’t stop at one. Set up another project and send it events to keep things running smoothly in both the frontend and backend.':
          [
            '很简单，对吧？不要止步于一个。设置另一个项目并向其发送事件，以保持前后端的顺畅运行。',
          ],
        'Boost performance': ['提升性能'],
        "Don't keep users waiting. Trace transactions, investigate spans and cross-reference related issues for those mission-critical endpoints.":
          ['不要让用户等待。追踪事务、调查跨度并交叉引用那些关键任务端点的相关问题。'],
        'Get more user context': ['获取更多用户上下文'],
        'Enable us to pinpoint which users are suffering from that bad code, so you can debug the problem more swiftly and maybe even apologize for it.':
          [
            '让我们能够精准定位哪些用户受到了糟糕代码的影响，以便您更快地调试问题，甚至为此道歉。',
          ],
        'See a video-like reproduction': ['观看类似视频的重现'],
        'Get to the root cause of error or latency issues faster by seeing all the technical details related to those issues in video-like reproductions of your user sessions.':
          ['通过观看用户会话的类似视频的重现，快速找到错误或延迟问题的根本原因。'],
        'Waiting for user session': ['等待用户会话'],
        'Track releases': ['追踪版本'],
        'Take an in-depth look at the health of each and every release with crash analytics, errors, related issues and suspect commits.':
          ['通过崩溃分析、错误、相关问题和可疑提交，深入了解每个版本的健康状况。'],
        'Deminify Javascript source code to debug with context. Seeing code in its original form will help you debunk the ghosts of errors past.':
          [
            '展开 JavaScript 源代码以便上下文调试。查看原始形式的代码将帮助您驱散过去的错误幽灵。',
          ],
        'Configure an Issue Alert': ['配置问题警报'],
        'We all have issues. Get real-time error notifications by setting up alerts for issues that match your set criteria.':
          ['我们都有问题。通过为符合您设定标准的问题设置警报，获取实时错误通知。'],
        'Create a Performance Alert': ['创建性能警报'],
        'See slow fast with performance alerts. Set up alerts for notifications about slow page load times, API latency, or when throughput significantly deviates from normal.':
          [
            '通过性能警报查看缓慢的快速问题。设置警报，以接收有关页面加载时间慢、API 延迟或吞吐量显著偏离正常的通知。',
          ],
        'Projects to Setup': ['要设置的项目'],
        'Filter Time Range': ['筛选时间范围'],
        'Use search to find more environments…': ['使用搜索查找更多环境...'],
        'Filter Environments': ['筛选环境'],
        'All Envs': ['所有环境'],
        'Command-click to select multiple': ['命令点击以选择多个'],
        'Ctrl-click to select multiple': ['Ctrl 点击以选择多个'],
        'Filters Updated': ['筛选条件已更新'],
        'Looks like you opened Sentry through a shared link. Your filters have been updated with new values encoded in the link.':
          [
            '看起来您是通过共享链接打开 Sentry 的。您的筛选条件已根据链接中的新值进行更新。',
          ],
        'Restore Previous Values': ['恢复之前的值'],
        "Projects I Don't Belong To": ['我不属于的项目'],
        'Only up to [limit] projects can be selected at a time. You can still press “Clear” to see all projects.':
          ['一次最多只能选择 [limit] 个项目。您仍然可以按下“清除”来查看所有项目。'],
        'Use search to find more projects…': ['使用搜索查找更多项目...'],
        'Filter Projects': ['筛选项目'],
        'Search Transactions': ['搜索事务'],
        'Search for spans, users, tags, and more': ['搜索跨度、用户、标签等'],
        'Max %s': ['最大 %s'],
        'Search for events, users, tags, and more': ['搜索事件、用户、标签等'],
        'Boost Performance': ['提升性能'],
      };
      var trans2 = {
        'Fiddlesticks. Performance isn’t available for your [platform] project yet but we’re definitely still working on it. Stay tuned.':
          [
            '抱歉，性能监控功能尚未对您的 [platform] 项目开放，但我们正在积极开发中，请耐心等待。',
          ],
        'Go to Sentry Documentation': ['前往 Sentry 文档'],
        'Go to documentation': ['查看文档'],
        "Adding Performance to your [platform] project is simple. Make sure you've got these basics down.":
          ['为您的 [platform] 项目添加性能监控很简单，请先掌握以下基础知识。'],
        "Waiting for this project's first transaction event": [
          '正在等待该项目的第一个事务事件',
        ],
        "We've received this project's first transaction event!": [
          '已收到该项目的第一个事务事件！',
        ],
        '%s other platform': ['%s 其他平台'],
        '%s other platforms': ['%s 其他平台'],
        "Sure you haven't misspelled? If you're using a lesser-known platform, consider choosing a more generic SDK like Browser JavaScript, Python, Node, .NET & Java or create a generic project, by selecting [linkOther:“Other”].":
          [
            '确认平台名称拼写正确吗？如果您使用的是较为小众的平台，可以考虑选择更通用的 SDK（如浏览器 JavaScript、Python、Node、.NET 和 Java）或创建一个通用项目，选择 [linkOther:“其他”] 即可。',
          ],
        "Select 'Other'": ['选择“其他”'],
        '[collapse]': ['折叠'],
        '[+%s more]': ['[+%s 更多]'],
        'Function level insights': ['函数级洞察'],
        'Discover slow-to-execute or resource intensive functions within your application':
          ['发现应用程序中执行缓慢或资源密集型的函数'],
        'Export Profile': ['导出性能分析报告'],
        'Bottom Up': ['自底向上'],
        'Top Down': ['自顶向下'],
        'How often this frame appeared in stack samples.': [
          '该帧在堆栈样本中出现的频率。',
        ],
        'Aggregated duration of this frame across different samples': [
          '该帧在不同样本中的聚合持续时间',
        ],
        Frame: ['帧'],
        'Upgrade to version 1.2.0 of @sentry/profiling-node to enable CPU usage collection':
          ['请升级到 @sentry/profiling-node 的 1.2.0 版本以启用 CPU 使用情况的收集'],
        'Upgrade to version 8.9.6 of sentry-cocoa SDK to enable CPU usage collection': [
          '请升级到 sentry-cocoa SDK 的 8.9.6 版本以启用 CPU 使用情况的收集',
        ],
        'Upgrade to version 1.2.0 of @sentry/profiling-node to enable memory usage collection':
          ['请升级到 @sentry/profiling-node 的 1.2.0 版本以启用内存使用情况的收集'],
        'Upgrade to version 8.9.6 of sentry-cocoa SDK to enable memory usage collection':
          ['请升级到 sentry-cocoa SDK 的 8.9.6 版本以启用内存使用情况的收集'],
        'Upgrade to version 8.9.6 of sentry-cocoa SDK to enable battery usage collection':
          ['请升级到 sentry-cocoa SDK 的 8.9.6 版本以启用电池使用情况的收集'],
        'Differential Flamegraph': ['差异火焰图'],
        'Profile duration was too short to collect enough metrics': [
          '分析时间过短，无法收集足够的指标数据',
        ],
        'Profile failed to collect a sufficient amount of measurements to render a chart':
          ['性能分析未能收集足够的测量数据，无法渲染图表'],
        'Profile has no measurements': ['性能分析没有测量数据'],
        'Profile has empty measurements': ['性能分析的测量数据为空'],
        at: ['在'],
        'Copy function name': ['复制函数名称'],
        'Copy source location': ['复制源码位置'],
        'Open in GitHub is not supported for this platform': [
          '此平台不支持在 GitHub 中打开',
        ],
        'Could not find source code location in GitHub': ['在 GitHub 中找不到源码位置'],
        'Open in GitHub': ['在 GitHub 中打开'],
        'Color Coding': ['颜色编码'],
        Sorting: ['排序'],
        Functions: ['函数'],
        'All frames': ['所有帧'],
        'Application frames': ['应用程序帧'],
        'System frames': ['系统帧'],
        'Highlight all occurrences': ['高亮所有出现位置'],
        'Appears in %s profiles': ['出现在 %s 个分析报告中'],
        Profiles: ['分析报告'],
        'All Frames': ['所有帧'],
        'Application Frames': ['应用程序帧'],
        'System Frames': ['系统帧'],
        'Collapse recursion': ['折叠递归'],
        'Table left': ['表格左侧'],
        'Table bottom': ['表格底部'],
        'Table right': ['表格右侧'],
        'Show on flamegraph': ['在火焰图中显示'],
        'Self time is the amount of time spent by this function excluding the time spent by other functions called within it.':
          ['独占时间是指该函数自身执行所花费的时间，不包括调用其他函数所花费的时间。'],
        'Total Time': ['总时间'],
        'Total time is the total amount of time spent by this function.': [
          '总时间是指该函数执行所花费的总时间。',
        ],
        Classification: ['分类'],
        'OS Version': ['操作系统版本'],
        Locale: ['语言环境'],
        Timestamp: ['时间戳'],
        transaction: ['事务'],
        'received at': ['接收时间'],
        organization: ['组织'],
        project: ['项目'],
        platform: ['平台'],
        release: ['版本'],
        environment: ['环境'],
        threads: ['线程'],
        model: ['型号'],
        manufacturer: ['制造商'],
        classification: ['分类'],
        os: ['操作系统'],
        'os version': ['操作系统版本'],
        locale: ['语言环境'],
        ø: ['ø'],
        'UI Frames': ['UI 帧'],
        Battery: ['电池'],
        CPU: ['CPU'],
        'Failed to load profile': ['加载性能分析报告失败'],
        'This profile either has no samples or the total duration of frames in the profile is 0.':
          ['该性能分析报告没有样本数据，或报告中所有帧的总持续时间为 0。'],
        'Export Raw Profile': ['导出原始性能分析报告'],
        'Failed to import profile with error': ['导入性能分析报告时出错：%s'],
        'Drop profile here': ['将性能分析报告拖放到此处'],
        'No associated transaction found': ['未找到关联的事务'],
        'Transaction has no spans': ['事务没有跨度'],
        op: ['操作'],
        status: ['状态'],
        'Differential Flamegraph Settings': ['差异火焰图设置'],
        'Reset Zoom': ['重置缩放'],
        'By System vs Application Frame': ['按系统帧与应用帧'],
        'By Symbol Name': ['按符号名称'],
        'By Package': ['按包'],
        'By System Frame': ['按系统帧'],
        'By Application Frame': ['按应用帧'],
        'By Recursion': ['按递归'],
        'By Frequency': ['按频率'],
        'Find Frames': ['查找帧'],
        'Also supports regular expressions, e.g. /^functionName/i': [
          '还支持正则表达式，例如 /^functionName/i',
        ],
        'Empty Profiles': ['空分析报告'],
        '%s sample': ['%s 个样本'],
        '%s samples': ['%s 个样本'],
        'Call Order': ['调用顺序'],
        Alphabetical: ['按字母顺序'],
        'Left Heavy': ['左侧优先'],
        source: ['来源'],
        'application frame': ['应用帧'],
        'system frame': ['系统帧'],
        'inline frame': ['内联帧'],
        'no change': ['无变化'],
        'removed function': ['已移除的函数'],
        'new function': ['新函数'],
        'samples, ': ['样本，'],
        'Profile has no dropped or slow frames': ['性能分析报告中没有丢帧或慢帧'],
        'frozen frame': ['卡顿帧'],
        'slow frame': ['慢帧'],
        'Function name copied to clipboard': ['函数名称已复制到剪贴板'],
        'Failed to copy function name to clipboard': ['复制函数名称到剪贴板失败'],
        'Failed to resolve path for this function frame.': ['无法解析该函数帧的路径。'],
        'Function source copied to clipboard': ['函数源码已复制到剪贴板'],
        'Failed to copy function source to clipboard': ['复制函数源码到剪贴板失败'],
        'Slowest app functions': ['最慢的应用函数'],
        'Total Self Time': ['总独占时间'],
        'No functions data': ['无函数数据'],
        'Profiler ID': ['分析器 ID'],
        'Thread ID': ['线程 ID'],
        'Transaction ID': ['事务 ID'],
        'Precise Start Timestamp': ['精确开始时间戳'],
        'Precise Finish Timestamp': ['精确结束时间戳'],
        'Device Architecture': ['设备架构'],
        'Device Classification': ['设备分类'],
        'Device Locale': ['设备语言环境'],
        'Device Manufacturer': ['设备制造商'],
        'Device Model': ['设备型号'],
        'OS Build': ['操作系统版本'],
        'OS Name': ['操作系统名称'],
        'P50()': ['P50()'],
        'P75()': ['P75()'],
        'P95()': ['P95()'],
        'P99()': ['P99()'],
        'Count()': ['计数()'],
        'Unknown Transaction': ['未知事务'],
        'Go to Transaction': ['查看事务'],
        'Profile Summary': ['性能分析摘要'],
        Unsupported: ['不支持'],
        'Profile Code': ['分析代码'],
        'Latest profile': ['最新分析'],
        'Slowest profile': ['最慢分析'],
        'View Profiles': ['查看分析报告'],
        Package: ['包'],
        'P75 Self Time': ['P75 独占时间'],
        'Example Profiles': ['示例分析报告'],
        'Slowest Functions': ['最慢函数'],
        Application: ['应用'],
        'Bookmark Project': ['收藏项目'],
        'Pending Requests': ['待处理请求'],
        "You'll need to join a team with access before you can view this data.": [
          '您需要加入一个有访问权限的团队才能查看此数据。',
        ],
        'Request to join team sent.': ['已发送加入团队的请求。'],
        'There was an error while trying to request access.': ['尝试请求访问时出错。'],
        '%s Child': ['%s 子项'],
        '%s Children': ['%s 个子项'],
        '%s Descendant': ['%s 后代'],
        '%s Descendants': ['%s 个后代'],
        'View the error for this Transaction': ['查看此事务的错误'],
        'View [eventPrefix] [eventType]': ['查看 [eventPrefix] [eventType]'],
        'Related Issue': ['相关问题'],
        'View all events': ['查看所有事件'],
        'No services connected': ['未连接任何服务'],
        'Connect to a service': ['连接到服务'],
        'This Event': ['此事件'],
        Root: ['根'],
        '%s Ancestor': ['%s 祖先'],
        '%s Ancestors': ['%s 个祖先'],
        Parent: ['父项'],
        'The replay is still processing.': ['回放仍在处理中。'],
        'The replay was rate-limited and could not be accepted. [link:View the stats page] for more information.':
          ['回放因速率限制而无法接受。[link:查看统计页面] 以获取更多信息。'],
        'The replay has been deleted by a member in your organization.': [
          '回放已被组织中的成员删除。',
        ],
        'There were network errors and the replay was not saved.': [
          '出现网络错误，回放未保存。',
        ],
        "An ad-blocker was turned on for the user's session. [link:Read our docs] for a workaround.":
          ['用户的会话中启用了广告拦截器。[link:阅读我们的文档] 以获取解决方法。'],
        'Other reasons may include:': ['其他原因可能包括：'],
        "The replay associated with this event cannot be found. In most cases, the replay wasn't accepted because your replay quota was exceeded at the time. To learn more, [link:read our docs].":
          [
            '无法找到与此事件关联的回放。在大多数情况下，回放未被接受是因为您的回放配额已用完。[link:阅读我们的文档] 以获取更多信息。',
          ],
        "Session Replay isn't available for %s.": ['会话回放不适用于 %s。'],
        '[docsLink: See our docs] to find out which platforms are supported.': [
          '[docsLink: 查看我们的文档] 以了解支持哪些平台。',
        ],
        'Open Hydration Diff': ['打开水合差异'],
        'This modal helps with debugging hydration errors by diffing the dom before and after the app hydrated. [boldBefore:Before Hydration] refers to the html rendered on the server. [boldAfter:After Hydration] refers to the html rendered on the client. This feature is actively being developed; please share any questions or feedback to the discussion linked above.':
          [
            '此模态框通过比较应用水合前后 DOM 的差异来帮助调试水合错误。[boldBefore:水合前] 指服务器端渲染的 HTML，[boldAfter:水合后] 指客户端渲染的 HTML。此功能正在积极开发中；请在上面链接的讨论中分享任何问题或反馈。',
          ],
        'Search by this component': ['按此组件搜索'],
        'App is suspended': ['应用已暂停'],
        'Dismiss banner': ['关闭横幅'],
        'This replay contains a [code:canvas] element. Please update your SDK to 7.98.0 or higher to enable [code:canvas] recording. [link:Learn more in our docs].':
          [
            '此回放包含 [code:canvas] 元素。请将您的 SDK 更新到 7.98.0 或更高版本以启用 [code:canvas] 录制。[link:在我们的文档中了解更多]。',
          ],
        'This replay contains a [code:canvas] element. Learn how to enable [code:canvas] recording [link:in our docs].':
          [
            '此回放包含 [code:canvas] 元素。[link:在我们的文档中] 了解如何启用 [code:canvas] 录制。',
          ],
        'Configure sampling rates and recording thresholds': ['配置采样率和录制阈值'],
        'Element Masking/Blocking': ['元素遮罩/阻断'],
        'Unmask text (****) and unblock media (img, svg, video, etc.)': [
          '取消遮罩文本 (****) 并取消阻断媒体 (img、svg、video 等)',
        ],
        'Network Details': ['网络详情'],
        'Capture request and response headers or bodies': ['捕获请求和响应的标头或正文'],
        'Canvas Support': ['Canvas 支持'],
        'Opt-in to record HTML [code:canvas] elements, added in SDK version 7.98.0': [
          '选择加入以录制 HTML [code:canvas] 元素，此功能在 SDK 版本 7.98.0 中添加',
        ],
        'replay configure resources': ['回放缓冲区配置资源'],
        'Configure Replay': ['配置回放'],
        "Sentry wasn't able to identify the correct event to display a diff for this hydration error.":
          ['Sentry 无法识别正确的事件以显示此水合错误的差异。'],
        'Slider Diff': ['滑块差异'],
        'Side By Side Diff': ['并排差异'],
        'Html Diff': ['HTML 差异'],
        'Before Hydration': ['水合前'],
        'After Hydration': ['水合后'],
        'How the initial server-rendered page looked.': ['初始服务器渲染页面的外观。'],
        Before: ['之前'],
        'How React re-rendered the page on your browser, after detecting a hydration error.':
          ['React 在检测到水合错误后，在您的浏览器中重新渲染页面的方式。'],
        After: ['之后'],
        'Copy Before': ['复制之前内容'],
        'Copy After': ['复制之后内容'],
        'Session Replay for mobile apps is currently in beta. Beta features are still in progress and may have bugs.':
          ['移动应用的会话回放目前处于测试阶段。测试功能仍在开发中，可能会有错误。'],
        'number of errors': ['错误数量'],
        '1 error': ['1 个错误'],
        '%s errors': ['%s 个错误'],
        'hidden projects': ['隐藏项目'],
        'total errors': ['总错误数'],
        'Dead Clicks': ['无效点击'],
        'Rage Clicks': ['愤怒点击'],
        'Jump Up': ['向上跳转'],
        '↑ Jump to current timestamp': ['↑ 跳转到当前时间戳'],
        'Jump Down': ['向下跳转'],
        '↓ Jump to current timestamp': ['↓ 跳转到当前时间戳'],
        'Name:': ['名称：'],
        'Buffering...': ['缓冲中...'],
        'Fast forwarding at %sx': ['以 %sx 倍速快进'],
        'Fast forwarding through inactivity': ['在不活动时快进'],
        'Seek slider': ['进度滑块'],
        'Right click & inspect your app’s DOM with your browser': [
          '右键单击并使用浏览器检查应用的 DOM',
        ],
        'Playback Speed': ['播放速度'],
        'Fast-Forward Inactivity': ['在不活动时快进'],
        'Rewind 10s': ['倒回 10 秒'],
        'Rewind 10 seconds': ['倒回 10 秒'],
        'Next breadcrumb': ['下一个面包屑'],
        'Fast-forward to next breadcrumb': ['快进到下一个面包屑'],
        'Current Screen Name': ['当前屏幕名称'],
        'Current URL': ['当前 URL'],
        "Funny looking URL? It contains content scrubbed by our [filters] and may no longer be valid. This is to protect your users' privacy. If necessary, you can turn this off in your [settings].":
          [
            'URL 看起来奇怪吗？它包含被我们的 [过滤器] 清理的内容，可能已不再有效。这是为了保护用户的隐私。如有必要，您可以在 [设置] 中关闭此功能。',
          ],
        'Exit full screen': ['退出全屏'],
        'Enter full screen': ['进入全屏'],
        'Restart Replay': ['重新开始回放'],
        Play: ['播放'],
        'Replay Not Found': ['未找到回放'],
        'The replay you are looking for was not found.': ['未找到您要查找的回放。'],
        'The replay might be missing events or metadata.': ['回放可能缺少事件或元数据。'],
        'Or there may be an issue loading the actions from the server, click to try loading the Replay again.':
          ['或者服务器加载动作时可能出现问题，点击此处重试加载回放。'],
        'Read Changelog': ['阅读更新日志'],
        "Understand what your users do when your user experience doesn't meet their expectations":
          ['了解用户在您的用户体验未达到预期时的行为'],
        'Introducing Rage and Dead Clicks': ['介绍愤怒点击和无效点击'],
        "What's new in [version]": ['[版本] 中的新功能'],
        'version [version_number]': ['版本 [版本号]'],
        'Collapse Sidebar': ['折叠侧边栏'],
        'Open Sidebar': ['打开侧边栏'],
        'Zoom out': ['缩小'],
        'Zoom in': ['放大'],
        'Hide details': ['隐藏详情'],
        'Mask All Text': ['遮罩所有文本'],
        'Block All Media': ['阻断所有媒体'],
        'Session Replay isn’t available for your [platform] project. It supports all browser JavaScript applications. It is built to work with @sentry/browser and our browser framework SDKs.':
          [
            '会话回放不适用于您的 [platform] 项目。它支持所有浏览器 JavaScript 应用。它与 @sentry/browser 和我们的浏览器框架 SDK 兼容。',
          ],
        'Getting Started with Session Replay': ['开始使用会话回放'],
        'All events in this issue were moved during reprocessing. [link]': [
          '此问题中的所有事件在重新处理期间已移动。[链接]',
        ],
        'See %s new event': ['查看 %s 个新事件'],
        'See %s new events': ['查看 %s 个新事件'],
        'Events in this issue were successfully reprocessed. [link]': [
          '此问题中的事件已成功重新处理。[链接]',
        ],
        'See %s reprocessed event': ['查看 %s 个重新处理的事件'],
        'See %s reprocessed events': ['查看 %s 个重新处理的事件'],
        '[actor] marked this issue as resolved in versions greater than [version].': [
          '[actor] 将此问题标记为在 [version] 之后的版本中已解决。',
        ],
        'This issue has been marked as resolved in versions greater than [version].': [
          '此问题已被标记为在 [version] 之后的版本中已解决。',
        ],
        '%s Alerts': ['%s 个警报'],
        'List of project alert rules': ['项目警报规则列表'],
        'Open Sudo Modal': ['打开 Sudo 模态框'],
        'Open Sudo Modal to re-identify yourself.': ['打开 Sudo 模态框重新验证身份。'],
        'Open Superuser Modal': ['打开超级用户模态框'],
        'Open Superuser Modal to re-identify yourself.': [
          '打开超级用户模态框重新验证身份。',
        ],
        'Toggle dark mode': ['切换深色模式'],
        'Toggle dark mode (superuser only atm)': ['切换深色模式（目前仅限超级用户）'],
        'Toggle Translation Markers': ['切换翻译标记'],
        'Toggles translation markers on or off in the application': [
          '在应用中切换翻译标记的开关',
        ],
        'Search Documentation and FAQ': ['搜索文档和常见问题'],
        'Open the Documentation and FAQ search modal.': [
          '打开文档和常见问题搜索模态框。',
        ],
        'Open in Production': ['在生产环境中打开'],
        'Open the current page in sentry.io': ['在 sentry.io 中打开当前页面'],
        'Clear search query': ['清除搜索查询'],
        'Create a search query': ['创建搜索查询'],
        Space: ['空格'],
        'Delete %s': ['删除 %s'],
        'Edit parameters for filter: %s': ['编辑过滤器 %s 的参数'],
        'Edit value for filter: %s': ['编辑过滤器 %s 的值'],
        'Remove filter: %s': ['删除过滤器： %s'],
        'Edit operator for filter: %s': ['编辑过滤器 %s 的操作符'],
        'Edit function parameters': ['编辑函数参数'],
        'Include time': ['包含时间'],
        UTC: ['协调世界时 (UTC)'],
        '%s': ['%s'],
        'Toggle %s': ['切换 %s'],
        'Edit filter value': ['编辑过滤器值'],
        '%s second ago': ['%s 秒前'],
        '%s seconds ago': ['%s 秒前'],
        '%s minute ago': ['%s 分钟前'],
        '%s minutes ago': ['%s 分钟前'],
        '%s hour ago': ['%s 小时前'],
        '%s hours ago': ['%s 小时前'],
        '%s day ago': ['%s 天前'],
        '%s days ago': ['%s 天前'],
        '%s week ago': ['%s 周前'],
        '%s weeks ago': ['%s 周前'],
        'How can we make search better for you?': ['我们如何能让搜索更好地为您服务？'],
        'A tag sent with one or more events': ['随一个或多个事件发送的标签'],
        Recent: ['最近'],
        'Add a search term': ['添加搜索词'],
        'This token is invalid': ['此令牌无效'],
        'Free text is not supported in this search': ['此搜索不支持自由文本'],
        'Wildcards not supported in search': ['搜索中不支持通配符'],
        'The OR operator is not allowed in this search': ['此搜索中不允许使用 OR 操作符'],
        'The AND operator is not allowed in this search': [
          '此搜索中不允许使用 AND 操作符',
        ],
        'Quotes must enclose text or be escaped': ['引号必须包围文本或进行转义'],
        'Negation is not allowed in this search.': ['此搜索中不允许使用否定。'],
        'Filter must have a value': ['过滤器必须有值'],
        'Invalid boolean. Expected true, 1, false, or 0.': [
          '无效的布尔值。应为 true、1、false 或 0。',
        ],
        'Invalid file size. Expected number followed by file size unit suffix': [
          '无效的文件大小。应为数字后跟文件大小单位后缀',
        ],
        'Invalid number. Expected number then optional k, m, or b suffix (e.g. 500k)': [
          '无效的数字。应为数字然后是可选的 k、m 或 b 后缀（例如 500k）',
        ],
        'Function parameters should not have empty values': ['函数参数不应有空值'],
        'Lists should not have empty values': ['列表不应有空值'],
        'Parentheses are not supported in this search': ['此搜索中不支持括号'],
        'Invalid key. "%s" is not a supported search key.': [
          '无效的键。"%s" 不是支持的搜索键。',
        ],
        'Invalid duration. Expected number followed by duration unit suffix': [
          '无效的持续时间。应为数字后跟持续时间单位后缀',
        ],
        'Invalid date format. Expected +/-duration (e.g. +1h) or ISO 8601-like (e.g. %s or %s)':
          [
            '无效的日期格式。应为 +/-持续时间（例如 +1h）或类似 ISO 8601（例如 %s 或 %s）',
          ],
        'From [start] until [end] we experienced problems with the following services': [
          '从 [开始] 到 [结束]，我们在以下服务中遇到了问题',
        ],
        "This incident started [timeAgo]. We're experiencing problems with the following services":
          ['此事件始于 [timeAgo]。我们在以下服务中遇到了问题'],
        'Full Incident Details': ['事件完整详情'],
        '([time])': ['（[时间]）'],
        'Search Support, Docs and More': ['搜索支持、文档等'],
        'Visit Help Center': ['访问帮助中心'],
        'Join our Discord': ['加入我们的 Discord'],
        Traces: ['追踪'],
        Crons: ['定时任务'],
        Replays: ['回放'],
        Metrics: ['指标'],
        Insights: ['洞察'],
        'Primary Navigation': ['主要导航'],
        '[numberRemaining] Remaining [task]': ['[剩余数量] 个剩余 [任务]'],
        'Recent service updates': ['最近的服务更新'],
        'User auth tokens': ['用户认证令牌'],
        '%s project': ['%s 项目'],
        '%s projects': ['%s 项目'],
        'Stack Trace Frames': ['堆栈跟踪帧'],
        'In-App Frames': ['应用内帧'],
        'Unable to fetch releases': ['无法获取版本发布'],
        'No items found': ['未找到项目'],
        'For more information, please see the documentation': [
          '有关详细信息，请参阅文档',
        ],
        "Wildcards aren't supported here.": ['此处不支持通配符。'],
        "The field [field] isn't supported here.": ['字段 [field] 在此处不受支持。'],
        'See all searchable properties in the docs.': ['在文档中查看所有可搜索的属性。'],
        '[value]': ['[值]'],
        '>=[value]': ['>=[值]'],
        '<=[value]': ['<=[值]'],
        '>[value]': ['>[值]'],
        '<[value]': ['<[值]'],
        '=[value]': ['=[值]'],
        Values: ['值'],
        'Common Search Terms': ['常用搜索词'],
        'Operator Helpers': ['操作符帮助'],
        Properties: ['属性'],
        Keys: ['键'],
        'After a custom datetime': ['在自定义日期时间之后'],
        'Before a custom datetime': ['在自定义日期时间之前'],
        'At a custom datetime': ['在自定义日期时间'],
        'Switch to Light Mode': ['切换到浅色模式'],
        'Switch to Dark Mode': ['切换到深色模式'],
        'Error Events': ['错误事件'],
        'Transaction Events': ['事务事件'],
        'Cron Events': ['定时任务事件'],
        'Replay Events': ['回放事件'],
        'Uptime Events': ['正常运行时间事件'],
        'Matching filters': ['匹配的过滤器'],
        'Total in %s': ['总计在 %s 中'],
        'Since issue began': ['自问题开始以来'],
        '%s item': ['%s 个项目'],
        '%s items': ['%s 个项目'],
        'Open link': ['打开链接'],
        'More tabs': ['更多标签页'],
        'This tag is in the current filter conditions': ['此标签在当前过滤条件中'],
        'Team Roles': ['团队角色'],
        'Members of a team have access to specific areas, such as a new release or a new application feature.':
          ['团队成员可以访问特定区域，例如新版本或新应用功能。'],
        'Create team': ['创建团队'],
        'Search…': ['搜索...'],
        'Custom range: 2h, 4d, 8w…': ['自定义范围：2h、4d、8w...'],
        'Invalid Period': ['无效的周期'],
        'Last minute': ['最近 1 分钟'],
        'Last %s minutes': ['最近 %s 分钟'],
        'Last day': ['最近 1 天'],
        'Last %s days': ['最近 %s 天'],
        'Last week': ['最近 1 周'],
        'Last %s weeks': ['最近 %s 周'],
        '\n             Unfortunately your browser does not support U2F. You need to use\n             a different two-factor method or switch to a browser that supports\n             it (Google Chrome or Microsoft Edge).':
          [
            '不幸的是，您的浏览器不支持 U2F。您需要使用其他双因素认证方法，或切换到支持 U2F 的浏览器（如 Google Chrome 或 Microsoft Edge）。',
          ],
        'Enroll with WebAuthn': ['使用 WebAuthn 注册'],
        'Sign in with WebAuthn': ['使用 WebAuthn 登录'],
        'This device is already registered with Sentry.': ['此设备已在 Sentry 中注册。'],
        '[p1:The Sentry server administrator modified the device\n                 registrations.] [p2:You need to remove and re-add the device to continue using\n                 your U2F device. Use a different sign-in method or contact [support] for\n                 assistance.]':
          [
            '[p1:Sentry 服务器管理员修改了设备注册信息。] [p2:您需要移除并重新添加设备才能继续使用您的 U2F 设备。请使用其他登录方法或联系 [support] 获取帮助。]',
          ],
        'Your code sleuth eagerly awaits its first mission.': [
          '您的代码侦探正急切地等待着第一个任务。',
        ],
        'Set up the Sentry SDK': ['设置 Sentry SDK'],
        'Install Sentry': ['安装 Sentry'],
        'Configure Sentry': ['配置 Sentry'],
        'Preview a Sentry Issue': ['预览 Sentry 问题'],
        'Get Started with Sentry Issues': ['开始使用 Sentry 问题'],
        '[miserableUsers] out of [totalUsers] unique users waited more than [duration]ms (4x the response time threshold)':
          [
            '[miserableUsers] 个用户（共 [totalUsers] 个独立用户）等待时间超过 [duration] 毫秒（响应时间阈值的 4 倍）',
          ],
        'User Misery score is [userMisery], representing users who waited more than [duration]ms (4x the response time threshold)':
          [
            '用户痛苦指数为 [userMisery]，代表等待时间超过 [duration] 毫秒（响应时间阈值的 4 倍）的用户',
          ],
        'User Misery score is [userMisery], meaning [miserableUsers] out of [totalUsers] unique users had a miserable experience.':
          [
            '用户痛苦指数为 [userMisery]，意味着 [miserableUsers] 个用户（共 [totalUsers] 个独立用户）经历了痛苦的体验。',
          ],
        'User Misery score is [userMisery].': ['用户痛苦指数为 [userMisery]。'],
        'Releases are better with commit data!': ['有提交数据的版本发布更好！'],
        'Connect a repository to see commit info, files changed, and authors involved in future releases.':
          ['连接仓库以查看未来的版本发布的提交信息、更改的文件和参与的作者。'],
        'Connect a repository': ['连接仓库'],
        '1H': ['1 小时'],
        '24H': ['24 小时'],
        '7D': ['7 天'],
        '14D': ['14 天'],
        '30D': ['30 天'],
        'Session Replays': ['会话回放'],
        'Indexed Transactions': ['索引事务'],
        'Monitor Check-Ins': ['监控签入'],
        Spans: ['跨度'],
        'Cron Monitors': ['定时任务监控'],
        'Profile Hours': ['性能分析小时数'],
        'Metrics Hours': ['指标小时数'],
        'This view is only available with Performance Monitoring.': [
          '此视图仅在性能监控中可用。',
        ],
        'This view is only available with Discover.': ['此视图仅在 Discover 中可用。'],
        'This view is only available with Release Health.': [
          '此视图仅在版本健康中可用。',
        ],
        'Additional Email': ['附加邮箱'],
        'e.g. secondary@example.com': ['例如 secondary@example.com'],
        'Designate an alternative email for this account': ['为该账户指定一个备用邮箱'],
        'Add this new email address to your account?': [
          '将此新邮箱地址添加到您的账户中？',
        ],
        'Add Secondary Emails': ['添加备用邮箱'],
        'Current Password': ['当前密码'],
        'Your current password': ['您的当前密码'],
        'New Password': ['新密码'],
        'Verify New Password': ['确认新密码'],
        'Verify your new password': ['确认您的新密码'],
        'Passwords do not match': ['密码不匹配'],
        "Select your theme preference. It can be synced to your system's theme, always light mode, or always dark mode.":
          [
            '选择您的主题偏好。它可以与您的系统主题同步，始终使用浅色模式或始终使用深色模式。',
          ],
        'Stack Trace Order': ['堆栈跟踪顺序'],
        'Choose the default ordering of frames in stack traces': [
          '选择堆栈跟踪中帧的默认排序方式',
        ],
        'Default Issue Event': ['默认问题事件'],
        'Choose what event gets displayed by default': ['选择默认显示的事件'],
        'Attachments Access': ['附件访问权限'],
        'Role required to download event attachments, such as native crash reports or log files.':
          ['下载事件附件（如原生崩溃报告或日志文件）所需的权限。'],
        'Debug Files Access': ['调试文件访问权限'],
        'Role required to download debug information files, proguard mappings and source maps.':
          ['下载调试信息文件、proguard 映射和源码映射所需的权限。'],
        'Organization Slug': ['组织标识符'],
        'A human-friendly name for the organization': ['组织的人性化名称'],
        "Opt-in to [link:new features] before they're released to the public": [
          '在向公众发布之前选择加入 [link:new features]',
        ],
        'AI Suggested Solution': ['AI 建议解决方案'],
        'Opt-in to [link:ai suggested solution] to get AI help on how to solve an issue.':
          ['选择加入 [link:ai suggested solution] 以获取 AI 帮助解决问題。'],
        'Automatically Configure Uptime Alerts': ['自动配置正常运行时间警报'],
        'Detect most-used URLs for uptime monitoring.': [
          '检测用于正常运行时间监控的常用 URL。',
        ],
        'Allow organization members to freely join any team': [
          '允许组织成员自由加入任何团队',
        ],
        'Let Members Create Projects': ['允许成员创建项目'],
        'Allow organization members to create and configure new projects.': [
          '允许组织成员创建和配置新项目。',
        ],
        'You must be on a business plan to toggle this feature.': [
          '您必须使用商业计划才能切换此功能。',
        ],
        'Let Members Delete Events': ['允许成员删除事件'],
        'Let Members Create and Edit Alerts': ['允许成员创建和编辑警报'],
        'Allow members to create, edit, and delete alert rules by granting them the `alerts:write` scope.':
          ['通过授予成员 `alerts:write` 权限，允许他们创建、编辑和删除警报规则。'],
        'Enter additional field names to match against when scrubbing data for all projects. Separate multiple entries with a newline.':
          ['输入在清理所有项目数据时要匹配的其他字段名称。多个条目请换行分隔。'],
        'Global Safe Fields': ['全局安全字段'],
        'Enter field names which data scrubbers should ignore. Separate multiple entries with a newline.':
          ['输入数据清理程序应忽略的字段名称。多个条目请换行分隔。'],
        'Enable to prevent IP addresses from being stored for new events': [
          '启用后，新事件的 IP 地址将不会被存储',
        ],
        'Require and enforce two-factor authentication for all members': [
          '要求并强制所有成员使用双因素认证',
        ],
        'Enable to require and enforce two-factor authentication for all members': [
          '启用后，将要求并强制所有成员使用双因素认证',
        ],
        'Require Email Verification': ['要求电子邮件验证'],
        'Require and enforce email address verification for all members': [
          '要求并强制所有成员验证电子邮件地址',
        ],
        'This will remove all members whose email addresses are not verified from your organization. It will also send them an email to verify their address and reinstate their access and settings. Do you want to continue?':
          [
            '这将从您的组织中移除所有未验证电子邮件地址的成员。还将向他们发送一封电子邮件以验证其地址并恢复其访问权限和设置。您要继续吗？',
          ],
        'Are you sure you want to allow users to access your organization without verifying their email address?':
          ['您确定要允许用户在未验证电子邮件地址的情况下访问您的组织吗？'],
        "Are you sure you want to disable sourcecode fetching for JavaScript events? This will affect Sentry's ability to aggregate issues if you're not already uploading sourcemaps as artifacts.":
          [
            '您确定要禁用 JavaScript 事件的源码获取吗？如果您尚未将源码地图作为构件上传，这将影响 Sentry 聚合问题的能力。',
          ],
        'Allow JavaScript Source Fetching': ['允许获取 JavaScript 源码'],
        'Store native crash reports such as Minidumps for improved processing and download in issue details':
          ['存储原生崩溃报告（如 Minidumps），以改进处理并在问题详情中下载'],
        'Allow users to request to join your organization': ['允许用户申请加入您的组织'],
        'Enable to allow users to request to join your organization': [
          '启用后，允许用户申请加入您的组织',
        ],
        'Are you sure you want to allow users to request to join your organization?': [
          '您确定要允许用户申请加入您的组织吗？',
        ],
        'Data Scrubbing': ['数据清理'],
        'Enable to apply default scrubbers to prevent things like passwords and credit cards from being stored':
          ['启用后，应用默认的数据清理程序以防止存储密码和信用卡等信息'],
        'The email subject to use (excluding the prefix) for individual alerts. Usable variables include: $title, $shortID, $projectID, $orgID, and ${tag:key}, such as ${tag:environment} or ${tag:release}.':
          [
            '用于单个警报的电子邮件主题（不包括前缀）。可用变量包括：$title、$shortID、$projectID、$orgID 和 ${tag:key}，例如 ${tag:environment} 或 ${tag:release}。',
          ],
        '%s minute': ['%s 分钟'],
        '%s day': ['%s 天'],
        '%s hour': ['%s 小时'],
        '[strong:Caution]: Enabling auto resolve will immediately resolve anything that has not been seen within this period of time. There is no undo!':
          [
            '[strong:注意]：启用自动解决将立即解决在此时间段内未再次出现的所有问题。此操作无法撤销！',
          ],
        'Examples: https://example.com, *, *.example.com, *:80. Separate multiple entries with a newline':
          ['示例：https://example.com、*、*.example.com、*:80。多个条目请换行分隔'],
        'my-awesome-project': ['我的超赞项目'],
        'A name for this project': ['项目的名称'],
        "Changing a project's name will also change the project slug. This can break your build scripts! Please proceed carefully.":
          ['更改项目名称也将更改项目标识符。这可能会破坏您的构建脚本！请谨慎操作。'],
        'The primary platform for this project': ['该项目的主要平台'],
        'Fingerprint Rules': ['指纹规则'],
        'error.type:MyException -> fingerprint-value\nstack.function:some_panic_function -> fingerprint-value':
          [
            'error.type:MyException -> 指纹值\nstack.function:some_panic_function -> 指纹值',
          ],
        'Changing fingerprint rules will apply to future events only (can take up to a minute).':
          ['更改指纹规则仅适用于未来的事件（可能需要 1 分钟才能生效）。'],
        'This can be used to modify the fingerprint rules on the server with custom rules.\n        Rules follow the pattern [pattern]. To learn more about fingerprint rules, [docs:read the docs].':
          [
            '这可以用于使用自定义规则修改服务器上的指纹规则。\n规则遵循 [pattern] 模式。要了解有关指纹规则的更多信息，请 [docs:阅读文档]。',
          ],
        'Stack Trace Rules': ['堆栈跟踪规则'],
        'stack.function:raise_an_exception ^-group\nstack.function:namespace::* +app': [
          'stack.function:raise_an_exception ^-group\nstack.function:namespace::* +app',
        ],
        'Changing stack trace rules will apply to future events only (can take up to a minute).':
          ['更改堆栈跟踪规则仅适用于未来的事件（可能需要 1 分钟才能生效）。'],
        'This can be used to enhance the grouping algorithm with custom rules.\n        Rules follow the pattern [pattern]. To learn more about stack trace rules, [docs:read the docs].':
          [
            '这可以用于使用自定义规则增强分组算法。\n规则遵循 [pattern] 模式。要了解有关堆栈跟踪规则的更多信息，请 [docs:阅读文档]。',
          ],
        'Enter additional field names to match against when scrubbing data. Separate multiple entries with a newline':
          ['输入在清理数据时要匹配的其他字段名称。多个条目请换行分隔'],
        'Enter field names which data scrubbers should ignore. Separate multiple entries with a newline':
          ['输入数据清理程序应忽略的字段名称。多个条目请换行分隔'],
        'Store native crash reports such as Minidumps for improved processing and download in issue details. Overrides [organizationSettingsLink: organization settings].':
          [
            '存储原生崩溃报告（如 Minidumps），以改进处理并在问题详情中下载。覆盖 [organizationSettingsLink: 组织设置]。',
          ],
        'Inherit organization settings ([organizationValue])': [
          '继承组织设置 ([organizationValue])',
        ],
        'All webhook requests for your integration will be sent to this URL. Visit the [webhook_docs:documentation] to see the different types and payloads.':
          [
            '您集成的所有 Webhook 请求将发送到此 URL。请访问 [webhook_docs: 文档] 查看不同类型和负载。',
          ],
        'If enabled, this integration will be available in Issue Alert rules and Metric Alert rules in Sentry. The notification destination is the Webhook URL specified above. More on actions [learn_more:here].':
          [
            '如果启用，此集成将在 Sentry 的问题警报规则和指标警报规则中提供。通知目的地是上面指定的 Webhook URL。更多关于操作的信息 [learn_more: 在这里]。',
          ],
        'Schema for your UI components. Click [schema_docs:here] for documentation.': [
          'UI 组件的模式。点击 [schema_docs: 这里] 查看文档。',
        ],
        'Show Sentry Branding in Crash Report Modal': [
          '在崩溃报告模态框中显示 Sentry 标识',
        ],
        'Show "powered by Sentry" within the Crash Report Modal. We appreciate you helping get the word out about Sentry! <3':
          ['在崩溃报告模态框中显示“由 Sentry 提供支持”。感谢您帮助宣传 Sentry！<3'],
        'Enable Crash Report Notifications': ['启用崩溃报告通知'],
        'Get notified on feedback submissions from the [crashReportModalDocsLink: Crash Report Modal], [webApiEndpointLink: web endpoint], and JS SDK (pre-v8). [feedbackWidgetDocsLink: Feedback widget] notifications are not affected by this setting and are on by default.':
          [
            '通过 [crashReportModalDocsLink: 崩溃报告模态框]、[webApiEndpointLink: web 端点] 和 JS SDK（pre-v8）接收反馈提交的通知。[feedbackWidgetDocsLink: 反馈小部件] 通知不受此设置影响，默认为开启状态。',
          ],
        'Add the [sagpLink:Sentry Android Gradle plugin] to your [app:app] module:': [
          '将 [sagpLink:Sentry Android Gradle 插件] 添加到您的 [app:app] 模块中：',
        ],
        'Configuration is done via the application [manifest: AndroidManifest.xml]. Under the hood Sentry uses a [provider:ContentProvider] to initialize the SDK based on the values provided below. This way the SDK can capture important crashes and metrics right from the app start.':
          [
            '配置通过应用程序的 [manifest: AndroidManifest.xml] 完成。在内部，Sentry 使用 [provider:ContentProvider] 根据下面提供的值初始化 SDK。这样 SDK 就可以从应用启动时捕获重要的崩溃和指标。',
          ],
        "Here's an example config which should get you started:": [
          '以下是一个示例配置，可以帮助您入门：',
        ],
        "This snippet contains an intentional error and can be used as a test to make sure that everything's working as expected. You can add it to your app's [mainActivity: MainActivity].":
          [
            '此代码片段包含一个故意的错误，可以用作测试以确保一切正常工作。您可以将其添加到应用的 [mainActivity: MainActivity] 中。',
          ],
        'Advanced Configuration': ['高级配置'],
        'Customize the SDK initialization behavior.': ['自定义 SDK 初始化行为。'],
        'Jetpack Compose': ['Jetpack Compose'],
        'Learn about our first class integration with Jetpack Compose.': [
          '了解我们与 Jetpack Compose 的一流集成。',
        ],
        'ProGuard/R8': ['ProGuard/R8'],
        'Deobfuscate and get readable stacktraces in your Sentry errors.': [
          '对混淆代码进行反混淆，并在 Sentry 错误中获取可读的堆栈跟踪。',
        ],
        'Source Context': ['源码上下文'],
        'See your source code as part of your stacktraces in Sentry.': [
          '在 Sentry 的堆栈跟踪中查看您的源码上下文。',
        ],
        'Installation Mode': ['安装模式'],
        'Add Sentry automatically to your app with the [wizardLink:Sentry wizard] (call this inside your project directory).':
          [
            '使用 [wizardLink:Sentry 向导] 自动将 Sentry 添加到您的应用中（在您的项目目录中调用此命令）。',
          ],
        'The Sentry wizard will automatically patch your application:': [
          'Sentry 向导将自动修改您的应用程序：',
        ],
        "Update your app's [buildGradle:build.gradle] file with the Sentry Gradle plugin and configure it.":
          [
            '使用 Sentry Gradle 插件更新您的应用的 [buildGradle:build.gradle] 文件并进行配置。',
          ],
        'Update your [manifest: AndroidManifest.xml] with the default Sentry configuration':
          ['使用默认的 Sentry 配置更新您的 [manifest: AndroidManifest.xml]'],
        'Create [sentryProperties: sentry.properties] with an auth token to upload proguard mappings (this file is automatically added to [gitignore: .gitignore])':
          [
            '创建 [sentryProperties: sentry.properties] 并添加认证令牌以上传 proguard 映射（此文件将自动添加到 [gitignore: .gitignore] 中）',
          ],
        "Add an example error to your app's Main Activity to verify your Sentry setup": [
          '在应用的 MainActivity 中添加一个示例错误以验证您的 Sentry 设置',
        ],
        'Alternatively, you can also [manualSetupLink:set up the SDK manually].': [
          '或者，您也可以 [manualSetupLink: 手动设置 SDK]。',
        ],
        'We recommend installing the SDK with Swift Package Manager (SPM), but we also support [alternateMethods: alternate installation methods]. To integrate Sentry into your Xcode project using SPM, open your App in Xcode and open [addPackage: File > Add Packages]. Then add the SDK by entering the Git repo url in the top right search field:':
          [
            '我们建议使用 Swift Package Manager (SPM) 安装 SDK，但也支持 [alternateMethods: 其他安装方法]。要通过 SPM 将 Sentry 集成到您的 Xcode 项目中，请在 Xcode 中打开您的应用并选择 [addPackage: File > Add Packages]。然后，在右上角的搜索框中输入 Git 仓库 URL 来添加 SDK：',
          ],
        'Alternatively, when your project uses a [packageSwift: Package.swift] file to manage dependencies, you can specify the target with:':
          [
            '或者，如果您的项目使用 [packageSwift: Package.swift] 文件来管理依赖项，可以通过以下方式指定目标：',
          ],
        'Install the Sentry SDK via Swift Package Manager or Cocoapods': [
          '通过 Swift Package Manager 或 Cocoapods 安装 Sentry SDK',
        ],
        'Update your [appDelegate: AppDelegate] or SwiftUI App Initializer with the default Sentry configuration and an example error':
          [
            '使用默认的 Sentry 配置和示例错误更新您的 [appDelegate: AppDelegate] 或 SwiftUI App 初始化器',
          ],
        'Add a new [phase: Upload Debug Symbols] phase to your [xcodebuild: xcodebuild] build script':
          [
            '为您的 [xcodebuild: xcodebuild] 构建脚本添加一个新的 [phase: 上传调试符号] 阶段',
          ],
        'Create [sentryclirc: .sentryclirc] with an auth token to upload debug symbols (this file is automatically added to [gitignore: .gitignore])':
          [
            '创建 [sentryclirc: .sentryclirc] 并添加认证令牌以上传调试符号（此文件将自动添加到 [gitignore: .gitignore] 中）',
          ],
        "When you're using Fastlane, it will add a Sentry lane for uploading debug symbols":
          ['当您使用 Fastlane 时，它会添加一个用于上传调试符号的 Sentry 轨道'],
        'Make sure you initialize the SDK as soon as possible in your application lifecycle e.g. in your [appDelegate:] method:':
          ['请确保在应用生命周期中尽早初始化 SDK，例如在您的 [appDelegate:] 方法中：'],
        "When using SwiftUI and your app doesn't implement an app delegate, initialize the SDK within the [initializer: App conformer's initializer]:":
          [
            '当使用 SwiftUI 且您的应用未实现应用委托时，在 [initializer: App 协议的初始化方法] 中初始化 SDK：',
          ],
        'The Sentry wizard automatically adds a code snippet that captures a message to your project. Simply run your app and you should see this message in your Sentry project.':
          [
            'Sentry 向导会自动向您的项目中添加一个捕获消息的代码片段。只需运行您的应用，您就应该在 Sentry 项目中看到此消息。',
          ],
        'Experimental Features': ['实验性功能'],
        'Want to play with some new features? Try out our experimental features for [vh: View Hierarchy], [ttfd: Time to Full Display (TTFD)], [metricKit: MetricKit], [prewarmedAppStart: Prewarmed App Start Tracing], and [asyncStacktraces: Swift Async Stacktraces]. Experimental features are still a work-in-progress and may have bugs. We recognize the irony. [break] Let us know if you have feedback through [gh: GitHub issues].':
          [
            '想试试新功能吗？体验我们针对 [vh: 视图层次结构]、[ttfd: 完全显示时间 (TTFD)]、[metricKit: MetricKit]、[prewarmedAppStart: 预热应用启动跟踪] 和 [asyncStacktraces: Swift 异步堆栈跟踪] 的实验性功能。实验性功能仍在开发中，可能会有错误。我们明白其中的讽刺意味。[换行] 如果您有任何反馈，请通过 [gh: GitHub 问题] 告知我们。',
          ],
        'This snippet contains an intentional error you can use to test that errors are uploaded to Sentry correctly. You can add it to your main [viewController: ViewController].':
          [
            '此代码片段包含一个故意的错误，可用于测试错误是否正确上传到 Sentry。您可以将其添加到您的主 [viewController: ViewController] 中。',
          ],
        'CocoaPods/Carthage': ['CocoaPods/Carthage'],
        'Learn about integrating Sentry into your project using CocoaPods or Carthage.': [
          '了解如何使用 CocoaPods 或 Carthage 将 Sentry 集成到您的项目中。',
        ],
        'Symbolicate and get readable stacktraces in your Sentry errors.': [
          '对符号进行解析，并在您的 Sentry 错误中获取可读的堆栈跟踪。',
        ],
        SwiftUI: ['SwiftUI'],
        'Learn about our first class integration with SwiftUI.': [
          '了解我们与 SwiftUI 的一流集成。',
        ],
        'Collect and analyze performance profiles from real user devices in production.':
          ['收集并分析生产环境中真实用户设备的性能分析报告。'],
        'You need Sentry Cocoa SDK version [codeVersion:8.23.0] or higher. Learn more about installation methods in our [docsLink:full documentation].':
          [
            '您需要 Sentry Cocoa SDK [codeVersion:8.23.0] 或更高版本。在我们的 [docsLink:完整文档] 中了解安装方法。',
          ],
        'To enable capturing metrics, you need to enable the metrics feature.': [
          '要启用指标捕获，您需要启用指标功能。',
        ],
        "Then you'll be able to add metrics as [codeCounters:counters], [codeSets:sets], [codeDistribution:distributions], and [codeGauge:gauges]. These are available under the [codeNamespace:SentrySDK.metrics()] namespace.":
          [
            '然后您可以添加指标，如 [codeCounters:计数器]、[codeSets:集合]、[codeDistribution:分布] 和 [codeGauge:测量仪]。这些位于 [codeNamespace:SentrySDK.metrics()] 命名空间下。',
          ],
        'To capture user feedback regarding a crash, use the [code:SentryOptions.onCrashedLastRun] callback. This callback gets called shortly after the initialization of the SDK when the last program execution terminated with a crash. It is not guaranteed that this is called on the main thread.':
          [
            '要捕获有关崩溃的用户反馈，请使用 [code:SentryOptions.onCrashedLastRun] 回调。当上次程序执行以崩溃结束时，此回调将在 SDK 初始化后不久被调用。不保证此回调在主线程上被调用。',
          ],
        "Sentry captures data by using an SDK within your application's runtime.": [
          'Sentry 通过在应用运行时使用 SDK 来捕获数据。',
        ],
        "Initialize Sentry as early as possible in your application's lifecycle.": [
          '在应用生命周期中尽早初始化 Sentry。',
        ],
        "This snippet contains an intentional error and can be used as a test to make sure that everything's working as expected.":
          ['此代码片段包含一个故意的错误，可以用作测试以确保一切正常工作。'],
        'Track down transactions to connect the dots between 10-second page loads and poor-performing API calls or slow database queries.':
          [
            '通过追踪事务，将 10 秒的页面加载与性能不佳的 API 调用或慢数据库查询联系起来。',
          ],
        'You need a minimum version [codeVersion:7.91.0] of [codePackage:@sentry/bun].': [
          '您需要 [codePackage:@sentry/bun] 的最低版本 [codeVersion:7.91.0]。',
        ],
        'Install the Sentry Capacitor SDK as a dependency using [codeNpm:npm] or [codeYarn:yarn], alongside the Sentry [siblingName:] SDK:':
          [
            '使用 [codeNpm:npm] 或 [codeYarn:yarn] 安装 Sentry Capacitor SDK 作为依赖项，并与 Sentry [siblingName:] SDK 一起使用：',
          ],
        'The version of the Sentry [siblingName:] SDK must match with the version referred by Sentry Capacitor. To check which version of the Sentry [siblingName:] SDK is installed, use the following command: [code:npm info @sentry/capacitor peerDependencies]':
          [
            'Sentry [siblingName:] SDK 的版本必须与 Sentry Capacitor 所引用的版本匹配。要检查已安装的 Sentry [siblingName:] SDK 的版本，请使用以下命令：[code:npm info @sentry/capacitor peerDependencies]',
          ],
        'Capacitor 2 Setup': ['Capacitor 2 设置'],
        'If you are using Capacitor 2 or older, follow this step to add required changes in order to initialize the Capacitor SDK on Android.':
          [
            '如果您使用的是 Capacitor 2 或更早版本，请按照此步骤添加所需更改以在 Android 上初始化 Capacitor SDK。',
          ],
        'Get to the root cause of an error or latency issue faster by seeing all the technical details related to that issue in one visual replay on your web application.':
          [
            '通过在您的 Web 应用程序的一个视觉回放中查看与该问题相关的所有技术细节，更快地找到错误或延迟问题的根本原因。',
          ],
        'Sibling Package': ['配套软件包'],
        'You should init the Sentry capacitor SDK in your [code:main.ts] file as soon as possible during application load up, before initializing Sentry [siblingName:]:':
          [
            '您应该在应用加载期间尽早初始化 Sentry capacitor SDK，在初始化 Sentry [siblingName:] 之前：',
          ],
        'Angular 12+': ['Angular 12+'],
        "The Sentry Angular SDK exports a function to instantiate ErrorHandler provider that will automatically send JavaScript errors captured by the Angular's error handler.":
          [
            'Sentry Angular SDK 导出一个函数，用于实例化 ErrorHandler 提供程序，该提供程序将自动发送由 Angular 错误处理程序捕获的 JavaScript 错误。',
          ],
        'Angular 10 & 11': ['Angular 10 和 11'],
        React: ['React'],
        'Vue 3': ['Vue 3'],
        'Vue 2': ['Vue 2'],
        'Install our SDK using the cordova command:': [
          '使用 cordova 命令安装我们的 SDK：',
        ],
        'You should [initCode:init] the SDK in the [deviceReadyCode:deviceReady] function, to make sure the native integrations runs. For more details about Cordova [link:click here]':
          [
            '您应该在 [deviceReadyCode:deviceReady] 函数中 [initCode:init] SDK，以确保原生集成运行。有关 Cordova 的更多详细信息，请 [link:点击这里]',
          ],
        'One way to verify your setup is by intentionally causing an error that breaks your application.':
          ['验证设置的一种方法是故意引发一个导致应用崩溃的错误。'],
        'Calling an undefined function will throw an exception:': [
          '调用未定义的函数将引发异常：',
        ],
        'Sentry captures data by using an SDK within your application’s runtime. Add the following to your [pubspec: pubspec.yaml]':
          [
            'Sentry 通过在应用运行时使用 SDK 来捕获数据。将以下内容添加到您的 [pubspec: pubspec.yaml] 中：',
          ],
        'Import [sentry: sentry] and initialize it': ['导入 [sentry: sentry] 并初始化它'],
        'You can configure the [sentryDsn: SENTRY_DSN], [sentryRelease: SENTRY_RELEASE], [sentryDist: SENTRY_DIST], and [sentryEnv: SENTRY_ENVIRONMENT] via the Dart environment variables passing the [dartDefine: --dart-define] flag to the compiler, as noted in the code sample.':
          [
            '可以通过向编译器传递 [dartDefine: --dart-define] 标志来使用 Dart 环境变量配置 [sentryDsn: SENTRY_DSN]、[sentryRelease: SENTRY_RELEASE]、[sentryDist: SENTRY_DIST] 和 [sentryEnv: SENTRY_ENVIRONMENT]，如代码示例中所示。',
          ],
        'Create an intentional error, so you can test that everything is working:': [
          '创建一个故意的错误，以便测试一切是否正常工作：',
        ],
        "If you're new to Sentry, use the email alert to access your account and complete a product tour.[break] If you're an existing user and have disabled alerts, you won't receive this email.":
          [
            '如果您是 Sentry 新用户，请使用电子邮件警报访问您的账户并完成产品导览。[换行]如果您是现有用户且已禁用警报，则不会收到此邮件。',
          ],
        "You'll be able to monitor the performance of your app using the SDK. For example:":
          ['您将能够使用 SDK 监控应用的性能。例如：'],
        'To learn more about the API and automatic instrumentations, check out the [perfDocs: performance documentation].':
          [
            '要了解更多有关 API 和自动instrumentation的信息，请查看 [perfDocs: 性能文档]。',
          ],
        'You need Sentry Dart SDK version [codeVersion:7.19.0] or higher. Learn more about installation methods in our [docsLink:full documentation].':
          [
            '您需要 Sentry Dart SDK [codeVersion:7.19.0] 或更高版本。在我们的 [docsLink:完整文档] 中了解安装方法。',
          ],
        'You need a minimum version [codeVersion:7.91.0] of [codePackage:@sentry/deno].':
          ['您需要 [codePackage:@sentry/deno] 的最低版本 [codeVersion:7.91.0]。'],
        "Then you'll be able to add metrics as [codeCounters:counters], [codeSets:sets], [codeDistribution:distributions], and [codeGauge:gauges]. These are available under the [codeNamespace:Sentry.metrics] namespace. This API is available in both renderer and main processes. Try out this example:":
          [
            '然后您可以添加指标，如 [codeCounters:计数器]、[codeSets:集合]、[codeDistribution:分布] 和 [codeGauge:测量仪]。这些位于 [codeNamespace:Sentry.metrics] 命名空间下。此 API 在渲染进程和主线程中均可用。试试这个示例：',
          ],
        "Once you've verified the package is initialized properly and sent a test event, consider visiting our [link:complete ASP.NET docs].":
          [
            '一旦您验证了软件包已正确初始化并发送了测试事件，可以考虑访问我们的 [link:完整的 ASP.NET 文档]。',
          ],
        'See the following examples that demonstrate how to integrate Sentry with various frameworks.':
          ['查看以下示例，了解如何将 Sentry 与各种框架集成。'],
        '[link:Multiple samples in the [code:dotnet] SDK repository] [strong:(C#)]': [
          '[link:[code:dotnet] SDK 仓库中的多个示例] [strong:(C#)]',
        ],
        '[link:Basic F# sample] [strong:(F#)]': ['[link:基本 F# 示例] [strong:(F#)]'],
        'If you are rendering the page from the server, for example on ASP.NET MVC, the [code:Error.cshtml] razor page can be:':
          [
            '例如，如果您从服务器端呈现页面（如在 ASP.NET MVC 中），[code:Error.cshtml] Razor 页面可以是：',
          ],
        'Install the [strong:NuGet] package:': ['安装 [strong:NuGet] 软件包：'],
        'Package Manager:': ['包管理器：'],
        'Using Entity Framework 6?': ['使用 Entity Framework 6 吗？'],
        'You should [initCode:init] the Sentry SDK as soon as possible during your application load by adding Sentry to [globalCode:Global.asax.cs]:':
          [
            '您应该在应用加载期间尽早通过将 Sentry 添加到 [globalCode:Global.asax.cs] 来 [initCode:init] Sentry SDK：',
          ],
        'Add Sentry to [programCode:Program.cs] through the [webHostCode:WebHostBuilder]:':
          [
            '通过 [webHostCode:WebHostBuilder] 将 Sentry 添加到 [programCode:Program.cs]：',
          ],
        'To verify your set up, you can capture a message with the SDK:': [
          '要验证您的设置，可以使用 SDK 捕获一条消息：',
        ],
        "If you don't want to depend on the static class, the SDK registers a client in the DI container. In this case, you can [link:take [code:IHub] as a dependency].":
          [
            '如果您不想依赖静态类，SDK 在 DI 容器中注册了一个客户端。在这种情况下，您可以 [link:将 [code:IHub] 作为依赖项]。',
          ],
        'You can measure the performance of your endpoints by adding a middleware to [code:Startup.cs]:':
          ['您可以通过向 [code:Startup.cs] 添加中间件来测量端点的性能：'],
        "You'll be able to monitor the performance of your actions automatically. To add additional spans to it, you can use the API:":
          ['您将能够自动监控操作的性能。要添加更多的跨度，您可以使用 API：'],
        '[link:Giraffe F# sample] [strong:(F#)]': [
          '[link:Giraffe F# 示例] [strong:(F#)]',
        ],
        'Sentry provides an integration with AWS Lambda ASP.NET Core Server through the Sentry.AspNetCore NuGet package.':
          [
            'Sentry 通过 Sentry.AspNetCore NuGet 软件包提供与 AWS Lambda ASP.NET Core Server 的集成。',
          ],
        'Add the Sentry dependency:': ['添加 Sentry 依赖项：'],
        'You can combine this integration with a logging library like [strong:log4net, NLog, or Serilog] to include both request data as well as your logs as breadcrumbs. The logging integrations also capture events when an error is logged.':
          [
            '您可以将此集成与 [strong:log4net、NLog 或 Serilog] 等日志库结合使用，将请求数据和日志作为面包屑包含进来。日志集成还会在记录错误时捕获事件。',
          ],
        'All [code:ASP.NET Core] configurations are valid here. But one configuration in particular is relevant.':
          ['所有 [code:ASP.NET Core] 配置在这里都有效。但其中一项配置特别相关。'],
        '[code:FlushOnCompletedRequest] ensures all events are flushed out. This is because the general ASP.NET Core hooks for when the process is exiting are not guaranteed to run in a serverless environment. This setting ensures that no event is lost if AWS recycles the process.':
          [
            '[code:FlushOnCompletedRequest] 确保所有事件都被清除。这是因为 ASP.NET Core 中处理进程退出的一般钩子在无服务器环境中不一定执行。此设置确保如果 AWS 回收进程，不会丢失任何事件。',
          ],
        'You can verify your setup by throwing an exception from a function:': [
          '您可以通过从函数中抛出异常来验证设置：',
        ],
        'And make a request to that lambda:': ['并向该 lambda 发出请求：'],
        'Check out the [link:Sentry ASP.NET Core] documentation for the complete set of options.':
          ['查看 [link:Sentry ASP.NET Core] 文档以获取完整的选项集。'],
        'Additionally, for all platforms except iOS/Mac Catalyst, you need to add a dependency on the [sentryProfilingPackage:Sentry.Profiling] NuGet package.':
          [
            '此外，对于 iOS/Mac Catalyst 以外的所有平台，您需要添加对 [sentryProfilingPackage:Sentry.Profiling] NuGet 软件包的依赖。',
          ],
        'Profiling for .NET Framework and .NET on Android are not supported.': [
          '不支持对 .NET Framework 和 Android 上的 .NET 进行性能分析。',
        ],
        'Initialize the SDK as early as possible. For example, call [sentrySdkCode:SentrySdk.Init] in your [programCode:Program.cs] file:':
          [
            '尽早初始化 SDK。例如，在 [programCode:Program.cs] 文件中调用 [sentrySdkCode:SentrySdk.Init]：',
          ],
        'Verify Sentry is correctly configured by sending a message': [
          '通过发送一条消息验证 Sentry 是否配置正确',
        ],
        'You can measure the performance of your code by capturing transactions and spans.':
          ['您可以通过捕获事务和跨度来测量代码的性能。'],
        'Check out [link:the documentation] to learn more about the API and automatic instrumentations.':
          ['查看 [link:文档] 以了解更多关于 API 和自动instrumentation的信息。'],
        'You can find an example ASP.NET MVC 5 app with Sentry integrated [link:on this GitHub repository].':
          [
            '您可以在 [link:此 GitHub 仓库] 上找到一个集成了 Sentry 的 ASP.NET MVC 5 应用示例。',
          ],
        'In addition, these examples demonstrate how to integrate Sentry with various frameworks:':
          ['此外，这些示例展示了如何将 Sentry 与各种框架集成：'],
        'Sentry for .NET is a collection of NuGet packages provided by Sentry; it supports .NET Framework 4.6.1 and .NET Core 2.0 and above. At its core, Sentry for .NET provides a raw client for sending events to Sentry. If you use a framework such as [strong:ASP.NET, WinForms, WPF, MAUI, Xamarin, Serilog], or similar, we recommend visiting our [link:Sentry .NET] documentation for installation instructions.':
          [
            'Sentry for .NET 是由 Sentry 提供的一系列 NuGet 软件包；它支持 .NET Framework 4.6.1 和 .NET Core 2.0 及更高版本。在核心层面，Sentry for .NET 提供了一个原始客户端，用于向 Sentry 发送事件。如果您使用的是 [strong:ASP.NET、WinForms、WPF、MAUI、Xamarin、Serilog] 等框架，我们建议访问我们的 [link:Sentry .NET] 文档以获取安装说明。',
          ],
        'To verify your setup, you can capture a message with the SDK:': [
          '要验证您的设置，可以使用 SDK 捕获一条消息：',
        ],
        '[link:Google Cloud Functions sample]': ['[link:Google Cloud Functions 示例]'],
        'Install the [strong:NuGet] package with Package Manager or .NET Core CLI:': [
          '使用包管理器或 .NET Core CLI 安装 [strong:NuGet] 软件包：',
        ],
        'Or, manually add the Sentry dependency into your csproj file:': [
          '或者，手动将 Sentry 依赖项添加到您的 csproj 文件中：',
        ],
        'Then, add Sentry to the [functionCode:Function] class through [functionStartupCode:FunctionsStartup]:':
          [
            '然后，通过 [functionStartupCode:FunctionsStartup] 将 Sentry 添加到 [functionCode:Function] 类中：',
          ],
        "Additionally, you'll need to set up your [sentryCode:Sentry] settings on [appsettingsCode:appsettings.json]:":
          [
            '此外，您需要在 [appsettingsCode:appsettings.json] 中设置 [sentryCode:Sentry] 配置：',
          ],
        'Then add Sentry to [mauiProgram:MauiProgram.cs] through the [mauiAppBuilderCode:MauiAppBuilder]:':
          [
            '然后通过 [mauiAppBuilderCode:MauiAppBuilder] 将 Sentry 添加到 [mauiProgram:MauiProgram.cs]：',
          ],
        'To verify your set up, you can capture a message with the SDK, anywhere in your code after the application is built, such as in a page constructor or button click event handler:':
          [
            '要验证您的设置，可以在应用构建后的任何位置（例如页面构造函数或按钮点击事件处理程序中）使用 SDK 捕获一条消息：',
          ],
        'We do not yet have automatic performance instrumentation for .NET MAUI. We will be adding that in a future release. However, if desired you can still manually instrument parts of your application.':
          [
            '我们目前还没有为 .NET MAUI 提供自动性能instrumentation。我们将在未来的版本中添加此功能。但是，如果需要，您仍然可以手动instrument应用的部分内容。',
          ],
        'For some parts of your code, [automaticInstrumentationLink:automatic instrumentation] is available across all of our .NET SDKs, and can be used with MAUI as well:':
          [
            '对于代码的某些部分，[automaticInstrumentationLink:自动instrumentation] 在我们所有的 .NET SDK 中都可用，并且也可以与 MAUI 一起使用：',
          ],
        'If your app uses [code:HttpClient], you can instrument your HTTP calls by passing our HTTP message handler:':
          [
            '如果您的应用使用 [code:HttpClient]，您可以通过传递我们的 HTTP 消息处理程序来instrument HTTP 调用：',
          ],
        'If your app uses Entity Framework Core or SQL Client, we will automatically instrument that for you without any additional code.':
          [
            '如果您的应用使用 Entity Framework Core 或 SQL Client，我们将自动为您instrument，无需额外代码。',
          ],
        'For other parts of your code, you can use [customInstrumentationLink:custom instrumentation], such as in the following example:':
          [
            '对于代码的其他部分，您可以使用 [customInstrumentationLink:自定义instrumentation]，例如以下示例：',
          ],
        'Sample Application': ['示例应用'],
        'See the [mauiSampleLink:MAUI Sample in the [code:sentry-dotnet] repository].': [
          '查看 [mauiSampleLink:MAUI 示例，在 [code:sentry-dotnet] 仓库中]。',
        ],
        "Once you've verified the package is initialized properly and sent a test event, consider visiting our [link:complete UWP docs].":
          [
            '一旦您验证了软件包已正确初始化并发送了测试事件，可以考虑访问我们的 [link:完整 UWP 文档]。',
          ],
        'You can find an example UWP app with Sentry integrated [link:on this GitHub repository].':
          ['您可以在 [link:此 GitHub 仓库] 上找到一个集成了 Sentry 的 UWP 应用示例。'],
        'Initialize the SDK as early as possible, like in the constructor of the [code:App]:':
          ['尽早初始化 SDK，例如在 [code:App] 的构造函数中：'],
        'Additionally, you need to add a dependency on the [sentryProfilingPackage:Sentry.Profiling] NuGet package.':
          [
            '此外，您需要添加对 [sentryProfilingPackage:Sentry.Profiling] NuGet 软件包的依赖。',
          ],
        'Profiling for .NET Framework is not supported.': [
          '不支持对 .NET Framework 进行性能分析。',
        ],
        "Once you've verified the package is initialized properly and sent a test event, consider visiting our [link:complete WinForms docs].":
          [
            '一旦您验证了软件包已正确初始化并发送了测试事件，可以考虑访问我们的 [link:完整 WinForms 文档]。',
          ],
        "Once you've verified the package is initialized properly and sent a test event, consider visiting our [link:complete WPF docs].":
          [
            '一旦您验证了软件包已正确初始化并发送了测试事件，可以考虑访问我们的 [link:完整 WPF 文档]。',
          ],
        'Initialize the SDK as early as possible, like in the constructor of the [appCode:App], and Add [sentryXamarinFormsIntegrationCode:SentryXamarinFormsIntegration] as a new Integration to [sentryXamarinOptionsCode:SentryXamarinOptions] if you are going to run your app with Xamarin Forms:':
          [
            '尽早初始化 SDK，例如在 [appCode:App] 的构造函数中，并在 [sentryXamarinOptionsCode:SentryXamarinOptions] 中添加 [sentryXamarinFormsIntegrationCode:SentryXamarinFormsIntegration] 作为新集成，如果您将使用 Xamarin Forms 运行应用的话：',
          ],
        Android: ['Android'],
        'Initialize the SDK on your [code:MainActivity].': [
          '在 [code:MainActivity] 中初始化 SDK。',
        ],
        iOS: ['iOS'],
        'Initialize the SDK on your [code:AppDelegate.cs].': [
          '在 [code:AppDelegate.cs] 中初始化 SDK。',
        ],
        UWP: ['UWP'],
        'Initialize the SDK on [code:App.xaml.cs].': [
          '在 [code:App.xaml.cs] 中初始化 SDK。',
        ],
        "NOTE: It's recommended to not setup the CacheDirectory for UWP.": [
          '注意：建议不要为 UWP 设置缓存目录。',
        ],
        'You might need to open the app again for the crash report to be sent to the server.':
          ['可能需要重新打开应用才能将崩溃报告发送到服务器。'],
        "Once you've verified the package is initialized properly and sent a test event, consider visiting our [link:complete Xamarin Forms docs].":
          [
            '一旦您验证了软件包已正确初始化并发送了测试事件，可以考虑访问我们的 [link:完整 Xamarin Forms 文档]。',
          ],
        Limitations: ['限制'],
        'There are no line numbers on stack traces for UWP and in release builds for Android and iOS.':
          ['UWP 的堆栈跟踪以及 Android 和 iOS 的发布构建中没有行号。'],
        'You can find an example of a Xamarin Forms app with Sentry integrated [link:on this GitHub repository].':
          [
            '您可以在 [link:此 GitHub 仓库] 上找到一个集成了 Sentry 的 Xamarin Forms 应用示例。',
          ],
        'You need a minimum version [codeVersion:4.17.0] of [codePackage:@sentry/electron].':
          ['您需要 [codePackage:@sentry/electron] 的最低版本 [codeVersion:4.17.0]。'],
        'For the User Feedback integration to work, you must have the Sentry browser SDK package, or an equivalent framework SDK (e.g. [code:@sentry/electron]) installed, minimum version 7.85.0.':
          [
            '要使用户反馈集成正常工作，您必须安装 Sentry 浏览器 SDK 软件包或等效的框架 SDK（例如 [code:@sentry/electron]），最低版本为 7.85.0。',
          ],
        'Add the Sentry Electron SDK package as a dependency:': [
          '将 Sentry Electron SDK 软件包添加为依赖项：',
        ],
        'You need to call [codeInit:Sentry.init] in the [codeMain:main] process and in every [codeRenderer:renderer] process you spawn.\n           For more details about configuring the Electron SDK [docsLink:click here].':
          [
            '您需要在 [codeMain:main] 进程和您创建的每个 [codeRenderer:renderer] 进程中调用 [codeInit:Sentry.init]。\n有关配置 Electron SDK 的更多详细信息，请 [docsLink:点击这里]。',
          ],
        'Calling an undefined function will throw a JavaScript exception:': [
          '调用未定义的函数将引发 JavaScript 异常：',
        ],
        'With Electron you can test native crash reporting by triggering a crash:': [
          '使用 Electron，您可以通过触发崩溃来测试原生崩溃报告：',
        ],
        'You may want to try inserting these code snippets into both your main and any renderer processes to verify Sentry is operational in both.':
          [
            '您可能需要将这些代码片段插入到主进程和任何渲染进程中，以验证 Sentry 在两者中都能正常工作。',
          ],
        'For the Session Replay to work, you must have the framework SDK (e.g. [code:@sentry/electron]) installed, minimum version 4.2.0.':
          [
            '要使会话回放正常工作，您必须安装框架 SDK（例如 [code:@sentry/electron]），最低版本为 4.2.0。',
          ],
        'Capture Crashed Process Exceptions': ['捕获崩溃进程异常'],
        'This library comes with an extension to capture all error messages that the Plug handler might not. This is based on adding an erlang logger handler when your application starts:':
          [
            '此库带有一个扩展，可以捕获 Plug 处理程序可能无法捕获的所有错误消息。这是基于在应用程序启动时添加一个 erlang 日志记录处理程序：',
          ],
        'You can then report errors or messages to Sentry:': [
          '然后您可以向 Sentry 报告错误或消息：',
        ],
        'Edit your [mixCode:mix.exs] file to add it as a dependency and add the [sentryCode::sentry] package to your applications:':
          [
            '编辑您的 [mixCode:mix.exs] 文件以将其添加为依赖项，并将 [sentryCode::sentry] 软件包添加到您的应用中：',
          ],
      };
      var trans3 = {
        'Install [code:sentry-sdk]:': ['安装 [code:sentry-sdk]：'],
        'Setup the application production environment in your [code:config/prod.exs]': [
          '在 [code:config/prod.exs] 中配置应用的生产环境：',
        ],
        'Package Source Code': ['打包源代码'],
        'Add a call to [code:mix sentry.package_source_code] in your release script to make sure the stacktraces you receive are complete.':
          [
            '在您的发布脚本中添加对 [code:mix sentry.package_source_code] 的调用，以确保您收到的堆栈跟踪是完整的。',
          ],
        'Setup for Plug and Phoenix Applications': ['Plug 和 Phoenix 应用的设置：'],
        'You can capture errors in Plug (and Phoenix) applications with [plugContext:Sentry.PlugContext] and [plugCapture:Sentry.PlugCapture]:':
          [
            '您可以使用 [plugContext:Sentry.PlugContext] 和 [plugCapture:Sentry.PlugCapture] 在 Plug（和 Phoenix）应用中捕获错误：',
          ],
        '[sentryPlugContextCode:Sentry.PlugContext] gathers the contextual information for errors, and [sentryPlugCaptureCode:Sentry.PlugCapture] captures and sends any errors that occur in the Plug stack.':
          [
            '[sentryPlugContextCode:Sentry.PlugContext] 收集错误的上下文信息，[sentryPlugCaptureCode:Sentry.PlugCapture] 捕获并发送在 Plug 堆栈中发生的任何错误。',
          ],
        'Import [sentryFlutter: sentry_flutter] and initialize it': [
          '导入 [sentryFlutter: sentry_flutter] 并初始化：',
        ],
        'Flutter Profiling alpha is available for iOS and macOS since SDK version 7.12.0.':
          ['自 SDK 版本 7.12.0 起，Flutter 概要分析 alpha 版支持 iOS 和 macOS。'],
        'We offer a range of methods to provide Sentry with debug symbols so that you can see symbolicated stack traces and triage issues faster.':
          [
            '我们提供了多种方法，将调试符号提供给 Sentry，以便您可以查看符号化的堆栈跟踪并更快地对问题进行分类。',
          ],
        "If Sentry has access to your application's source code, it can show snippets of code source context around the location of stack frames, which helps to quickly pinpoint problematic code.":
          [
            '如果 Sentry 能够访问您的应用程序的源代码，它可以在堆栈帧的位置显示代码源上下文的片段，这有助于快速定位问题代码。',
          ],
        'You need Sentry Flutter SDK version [codeVersion:7.19.0] or higher. Learn more about installation methods in our [docsLink:full documentation].':
          [
            '您需要 Sentry Flutter SDK [codeVersion:7.19.0] 或更高版本。在我们的 [docsLink:完整文档] 中了解安装方法。',
          ],
        'Install our Go Echo SDK using [code:go get]:': [
          '使用 [code:go get] 安装我们的 Go Echo SDK：',
        ],
        "Import and initialize the Sentry SDK early in your application's setup:": [
          '在应用设置的早期导入并初始化 Sentry SDK：',
        ],
        '[sentryEchoCode:sentryecho] accepts a struct of [optionsCode:Options] that allows you to configure how the handler will behave.':
          [
            '[sentryEchoCode:sentryecho] 接受一个 [optionsCode:Options] 结构体，允许您配置处理程序的行为。',
          ],
        'Currently it respects 3 options:': ['目前它支持 3 个选项：'],
        Usage: ['使用方法：'],
        "[sentryEchoCode:sentryecho] attaches an instance of [sentryHubLink:*sentry.Hub] to the [echoContextCode:echo.Context], which makes it available throughout the rest of the request's lifetime. You can access it by using the [getHubFromContextCode:sentryecho.GetHubFromContext()] method on the context itself in any of your proceeding middleware and routes. And it should be used instead of the global [captureMessageCode:sentry.CaptureMessage], [captureExceptionCode:sentry.CaptureException] or any other calls, as it keeps the separation of data between the requests.":
          [
            '[sentryEchoCode:sentryecho] 将 [sentryHubLink:*sentry.Hub] 的一个实例附加到 [echoContextCode:echo.Context]，使其在整个请求生命周期的其余部分可用。您可以通过在后续的中间件和路由中的上下文本身上使用 [getHubFromContextCode:sentryecho.GetHubFromContext()] 方法来访问它。应使用它代替全局的 [captureMessageCode:sentry.CaptureMessage]、[captureExceptionCode:sentry.CaptureException] 或其他调用，因为它保持了请求之间的数据分离。',
          ],
        "Keep in mind that [sentryHubCode:*sentry.Hub] won't be available in middleware attached before [sentryEchoCode:sentryecho]!":
          [
            '请注意，在 [sentryEchoCode:sentryecho] 之前附加的中间件中无法使用 [sentryHubCode:*sentry.Hub]！',
          ],
        'Accessing Request in [beforeSendCode:BeforeSend] callback': [
          '在 [beforeSendCode:BeforeSend] 回调中访问请求：',
        ],
        'Install our Go FastHTTP SDK using [code:go get]:': [
          '使用 [code:go get] 安装我们的 Go FastHTTP SDK：',
        ],
        '[sentryfasthttpCode:sentryfasthttp] accepts a struct of [optionsCode:Options] that allows you to configure how the handler will behave.':
          [
            '[sentryfasthttpCode:sentryfasthttp] 接受一个 [optionsCode:Options] 结构体，允许您配置处理程序的行为。',
          ],
        "[sentryfasthttpCode:sentryfasthttp] attaches an instance of [sentryHubLink:*sentry.Hub] to the request's context, which makes it available throughout the rest of the request's lifetime. You can access it by using the [getHubFromContextCode:sentryfasthttp.GetHubFromContext()] method on the request itself in any of your proceeding middleware and routes. And it should be used instead of the global [captureMessageCode:sentry.CaptureMessage], [captureExceptionCode:sentry.CaptureException], or any other calls, as it keeps the separation of data between the requests.":
          [
            '[sentryfasthttpCode:sentryfasthttp] 将 [sentryHubLink:*sentry.Hub] 的一个实例附加到请求的上下文中，使其在整个请求生命周期的其余部分可用。您可以通过在后续的中间件和路由中的请求本身上使用 [getHubFromContextCode:sentryfasthttp.GetHubFromContext()] 方法来访问它。应使用它代替全局的 [captureMessageCode:sentry.CaptureMessage]、[captureExceptionCode:sentry.CaptureException] 或其他调用，因为它保持了请求之间的数据分离。',
          ],
        "Keep in mind that [sentryHubCode:*sentry.Hub] won't be available in middleware attached before [sentryfasthttpCode:sentryfasthttp]!":
          [
            '请注意，在 [sentryfasthttpCode:sentryfasthttp] 之前附加的中间件中无法使用 [sentryHubCode:*sentry.Hub]！',
          ],
        'Install our Go Fiber SDK using [code:go get]:': [
          '使用 [code:go get] 安装我们的 Go Fiber SDK：',
        ],
        '[sentryFiberCode:sentryfiber] accepts a struct of [optionsCode:Options] that allows you to configure how the handler will behave.':
          [
            '[sentryFiberCode:sentryfiber] 接受一个 [optionsCode:Options] 结构体，允许您配置处理程序的行为。',
          ],
        "[sentryFiberCode:sentryfiber] attaches an instance of [sentryHubLink:*sentry.Hub] to the [fiberContextCode:*fiber.Ctx], which makes it available throughout the rest of the request's lifetime. You can access it by using the [getHubFromContextCode:sentryfiber.GetHubFromContext()] method on the context itself in any of your proceeding middleware and routes. And it should be used instead of the global [captureMessageCode:sentry.CaptureMessage], [captureExceptionCode:sentry.CaptureException] or any other calls, as it keeps the separation of data between the requests.":
          [
            '[sentryFiberCode:sentryfiber] 将 [sentryHubLink:*sentry.Hub] 的一个实例附加到 [fiberContextCode:*fiber.Ctx]，使其在整个请求生命周期的其余部分可用。您可以通过在后续的中间件和路由中的上下文本身上使用 [getHubFromContextCode:sentryfiber.GetHubFromContext()] 方法来访问它。应使用它代替全局的 [captureMessageCode:sentry.CaptureMessage]、[captureExceptionCode:sentry.CaptureException] 或其他调用，因为它保持了请求之间的数据分离。',
          ],
        "Keep in mind that [sentryHubCode:*sentry.Hub] won't be available in middleware attached before [sentryFiberCode:sentryfiber]!":
          [
            '请注意，在 [sentryFiberCode:sentryfiber] 之前附加的中间件中无法使用 [sentryHubCode:*sentry.Hub]！',
          ],
        'Install our Go Gin SDK using [code:go get]:': [
          '使用 [code:go get] 安装我们的 Go Gin SDK：',
        ],
        '[sentryGinCode:sentrygin] accepts a struct of [optionsCode:Options] that allows you to configure how the handler will behave.':
          [
            '[sentryGinCode:sentrygin] 接受一个 [optionsCode:Options] 结构体，允许您配置处理程序的行为。',
          ],
        "[sentryGinCode:sentrygin] attaches an instance of [sentryHubLink:*sentry.Hub] to the [ginContextCode:*gin.Context], which makes it available throughout the rest of the request's lifetime. You can access it by using the [getHubFromContextCode:sentrygin.GetHubFromContext()] method on the context itself in any of your proceeding middleware and routes. And it should be used instead of the global [captureMessageCode:sentry.CaptureMessage], [captureExceptionCode:sentry.CaptureException], or any other calls, as it keeps the separation of data between the requests.":
          [
            '[sentryGinCode:sentrygin] 将 [sentryHubLink:*sentry.Hub] 的一个实例附加到 [ginContextCode:*gin.Context]，使其在整个请求生命周期的其余部分可用。您可以通过在后续的中间件和路由中的上下文本身上使用 [getHubFromContextCode:sentrygin.GetHubFromContext()] 方法来访问它。应使用它代替全局的 [captureMessageCode:sentry.CaptureMessage]、[captureExceptionCode:sentry.CaptureException] 或其他调用，因为它保持了请求之间的数据分离。',
          ],
        "Keep in mind that [sentryHubCode:*sentry.Hub] won't be available in middleware attached before [sentryGinCode:sentrygin]!":
          [
            '请注意，在 [sentryGinCode:sentrygin] 之前附加的中间件中无法使用 [sentryHubCode:*sentry.Hub]！',
          ],
        'Install our Go SDK using [code:go get]:': [
          '使用 [code:go get] 安装我们的 Go SDK：',
        ],
        'The quickest way to verify Sentry in your Go program is to capture a message:': [
          '验证 Go 程序中的 Sentry 的最快速方法是捕获一条消息：',
        ],
        'Install our Go HTTP SDK using [code:go get]:': [
          '使用 [code:go get] 安装我们的 Go HTTP SDK：',
        ],
        '[sentryHttpCode:sentryhttp] accepts a struct of [optionsCode:Options] that allows you to configure how the handler will behave.':
          [
            '[sentryHttpCode:sentryhttp] 接受一个 [optionsCode:Options] 结构体，允许您配置处理程序的行为。',
          ],
        "[sentryHttpCode:sentryhttp] attaches an instance of [sentryHubLink:*sentry.Hub] to the request's context, which makes it available throughout the rest of the request's lifetime. You can access it by using the [getHubFromContextCode:sentry.GetHubFromContext()] method on the request itself in any of your proceeding middleware and routes. And it should be used instead of the global [captureMessageCode:sentry.CaptureMessage], [captureExceptionCode:sentry.CaptureException], or any other calls, as it keeps the separation of data between the requests.":
          [
            '[sentryHttpCode:sentryhttp] 将 [sentryHubLink:*sentry.Hub] 的一个实例附加到请求的上下文中，使其在整个请求生命周期的其余部分可用。您可以通过在后续的中间件和路由中的请求本身上使用 [getHubFromContextCode:sentry.GetHubFromContext()] 方法来访问它。应使用它代替全局的 [captureMessageCode:sentry.CaptureMessage]、[captureExceptionCode:sentry.CaptureException] 或其他调用，因为它保持了请求之间的数据分离。',
          ],
        "Keep in mind that [sentryHubCode:*sentry.Hub] won't be available in middleware attached before [sentryHttpCode:sentryhttp]!":
          [
            '请注意，在 [sentryHttpCode:sentryhttp] 之前附加的中间件中无法使用 [sentryHubCode:*sentry.Hub]！',
          ],
        'Install our Go Iris SDK using [code:go get]:': [
          '使用 [code:go get] 安装我们的 Go Iris SDK：',
        ],
        '[sentryirisCode:sentryiris] accepts a struct of [optionsCode:Options] that allows you to configure how the handler will behave.':
          [
            '[sentryirisCode:sentryiris] 接受一个 [optionsCode:Options] 结构体，允许您配置处理程序的行为。',
          ],
        "[sentryirisCode:sentryiris] attaches an instance of [sentryHubLink:*sentry.Hub] to the [irisContextCode:iris.Context], which makes it available throughout the rest of the request's lifetime. You can access it by using the [getHubFromContextCode:sentryiris.GetHubFromContext()] method on the context itself in any of your proceeding middleware and routes. And it should be used instead of the global [captureMessageCode:sentry.CaptureMessage], [captureExceptionCode:sentry.CaptureException], or any other calls, as it keeps the separation of data between the requests.":
          [
            '[sentryirisCode:sentryiris] 将 [sentryHubLink:*sentry.Hub] 的一个实例附加到 [irisContextCode:iris.Context]，使其在整个请求生命周期的其余部分可用。您可以通过在后续的中间件和路由中的上下文本身上使用 [getHubFromContextCode:sentryiris.GetHubFromContext()] 方法来访问它。应使用它代替全局的 [captureMessageCode:sentry.CaptureMessage]、[captureExceptionCode:sentry.CaptureException] 或其他调用，因为它保持了请求之间的数据分离。',
          ],
        "Keep in mind that [sentryHubCode:*sentry.Hub] won't be available in middleware attached before [sentryirisCode:sentryiris]!":
          [
            '请注意，在 [sentryirisCode:sentryiris] 之前附加的中间件中无法使用 [sentryHubCode:*sentry.Hub]！',
          ],
        '[sentryMartiniCode:sentrymartini] accepts a struct of [optionsCode:Options] that allows you to configure how the handler will behave.':
          [
            '[sentryMartiniCode:sentrymartini] 接受一个 [optionsCode:Options] 结构体，允许您配置处理程序的行为。',
          ],
        "[sentryMartiniCode:sentrymartini] maps an instance of [sentryHubLink:*sentry.Hub] as one of the services available throughout the rest of the request's lifetime. You can access it by providing a hub [sentryHubCode:*sentry.Hub] parameter in any of your proceeding middleware and routes. And it should be used instead of the global [captureMessageCode:sentry.CaptureMessage], [captureExceptionCode:sentry.CaptureException], or any other calls, as it keeps the separation of data between the requests.":
          [
            '[sentryMartiniCode:sentrymartini] 将 [sentryHubLink:*sentry.Hub] 的一个实例映射为在请求生命周期其余部分可用的服务之一。您可以通过在后续的中间件和路由中提供 hub [sentryHubCode:*sentry.Hub] 参数来访问它。应使用它代替全局的 [captureMessageCode:sentry.CaptureMessage]、[captureExceptionCode:sentry.CaptureException] 或其他调用，因为它保持了请求之间的数据分离。',
          ],
        "Keep in mind that [sentryHubCode:*sentry.Hub] won't be available in middleware attached before [sentryMartiniCode:sentrymartini]!":
          [
            '请注意，在 [sentryMartiniCode:sentrymartini] 之前附加的中间件中无法使用 [sentryHubCode:*sentry.Hub]！',
          ],
        'Install our Go Martini SDK using [code:go get]:': [
          '使用 [code:go get] 安装我们的 Go Martini SDK：',
        ],
        'Install our Go Negroni SDK using [code:go get]:': [
          '使用 [code:go get] 安装我们的 Go Negroni SDK：',
        ],
        '[sentryNegroniCode:sentrynegroni] accepts a struct of [optionsCode:Options] that allows you to configure how the handler will behave.':
          [
            '[sentryNegroniCode:sentrynegroni] 接受一个 [optionsCode:Options] 结构体，允许您配置处理程序的行为。',
          ],
        "[sentryNegroniCode:sentrynegroni] attaches an instance of [sentryHubLink:*sentry.Hub] to the request's context, which makes it available throughout the rest of the request's lifetime. You can access it by using the [getHubFromContextCode:sentry.GetHubFromContext()] method on the request itself in any of your proceeding middleware and routes. And it should be used instead of the global [captureMessageCode:sentry.CaptureMessage], [captureExceptionCode:sentry.CaptureException], or any other calls, as it keeps the separation of data between the requests.":
          [
            '[sentryNegroniCode:sentrynegroni] 将 [sentryHubLink:*sentry.Hub] 的一个实例附加到请求的上下文中，使其在整个请求生命周期的其余部分可用。您可以通过在后续的中间件和路由中的请求本身上使用 [getHubFromContextCode:sentry.GetHubFromContext()] 方法来访问它。应使用它代替全局的 [captureMessageCode:sentry.CaptureMessage]、[captureExceptionCode:sentry.CaptureException] 或其他调用，因为它保持了请求之间的数据分离。',
          ],
        "Keep in mind that [sentryHubCode:*sentry.Hub] won't be available in middleware attached before [sentryNegroniCode:sentrynegroni]!":
          [
            '请注意，在 [sentryNegroniCode:sentrynegroni] 之前附加的中间件中无法使用 [sentryHubCode:*sentry.Hub]！',
          ],
        "Using Negroni's 'panicHandlerFuncCode' Option": [
          "使用 Negroni 的 'panicHandlerFuncCode' 选项：",
        ],
        "Negroni provides an option called [panicHandlerFuncCode:PanicHandlerFunc], which lets you 'plug-in' to its default [recoveryCode:Recovery] middleware.":
          [
            'Negroni 提供了一个名为 [panicHandlerFuncCode:PanicHandlerFunc] 的选项，允许您将其默认的 [recoveryCode:Recovery] 中间件进行扩展。',
          ],
        "[sentrynegroniCode:sentrynegroni] exports a very barebones implementation, which utilizes it, so if you don't need anything else than just reporting panics to Sentry, you can use it instead, as it's just one line of code!":
          [
            '[sentrynegroniCode:sentrynegroni] 导出了一个非常基础的实现，可以利用它进行扩展，因此如果您只需要将恐慌报告给 Sentry 而不需要其他功能，您可以改用它，因为它只有一行代码！',
          ],
        'You can still use [beforeSendCode:BeforeSend] and event processors to modify data before delivering it to Sentry, using this method as well.':
          [
            '您仍然可以使用 [beforeSendCode:BeforeSend] 和事件处理器来修改数据，然后再将其发送到 Sentry，此方法同样适用。',
          ],
        'Sentry for Java is a collection of modules provided by Sentry; it supports Java 1.8 and above. At its core, Sentry for Java provides a raw client for sending events to Sentry. If you use [strong:Spring Boot, Spring, Logback, or Log4j2], we recommend visiting our Sentry Java documentation for installation instructions.':
          [
            'Sentry for Java 是由 Sentry 提供的一系列模块；它支持 Java 1.8 及更高版本。在核心层面，Sentry for Java 提供了一个原始客户端，用于向 Sentry 发送事件。如果您使用的是 [strong:Spring Boot、Spring、Logback 或 Log4j2]，我们建议访问我们的 Sentry Java 文档以获取安装说明。',
          ],
        'Install the SDK via %s:': ['通过 %s 安装 SDK：'],
        'To see source context in Sentry, you have to generate an auth token by visiting the [link:Organization Auth Tokens] settings. You can then set the token as an environment variable that is used by the build plugins.':
          [
            '要在 Sentry 中查看源上下文，您需要通过访问 [link:Organization Auth Tokens] 设置生成一个认证令牌。然后，您可以将该令牌设置为环境变量，由构建插件使用。',
          ],
        'The [link:Sentry Gradle Plugin] automatically installs the Sentry SDK as well as available integrations for your dependencies. Add the following to your [code:build.gradle] file:':
          [
            '[link:Sentry Gradle 插件] 会自动安装 Sentry SDK 以及适用于您的依赖项的集成。将以下内容添加到 [code:build.gradle] 文件中：',
          ],
        'The [link:Sentry Maven Plugin] automatically installs the Sentry SDK as well as available integrations for your dependencies. Add the following to your [code:pom.xml] file:':
          [
            '[link:Sentry Maven 插件] 会自动安装 Sentry SDK 以及适用于您的依赖项的集成。将以下内容添加到 [code:pom.xml] 文件中：',
          ],
        'Add the sentry SDK to your [code:libraryDependencies]:': [
          '将 sentry SDK 添加到您的 [code:libraryDependencies] 中：',
        ],
        'If you prefer to manually upload your source code to Sentry, please refer to [link:Manually Uploading Source Context].':
          [
            '如果您更愿意手动将源代码上传到 Sentry，请参阅 [link:Manually Uploading Source Context]。',
          ],
        "Configure Sentry as soon as possible in your application's lifecycle:": [
          '在应用生命周期中尽早配置 Sentry：',
        ],
        'Trigger your first event from your development environment by intentionally creating an error with the [code:Sentry#captureException] method, to test that everything is working:':
          [
            '通过故意使用 [code:Sentry#captureException] 方法在开发环境中创建错误来触发您的第一个事件，以测试一切是否正常工作：',
          ],
        "If you're new to Sentry, use the email alert to access your account and complete a product tour.":
          ['如果您是 Sentry 新用户，请使用电子邮件警报访问您的账户并完成产品导览。'],
        "If you're an existing user and have disabled alerts, you won't receive this email.":
          ['如果您是现有用户且已禁用警报，则不会收到此邮件。'],
        'Check out our sample applications.': ['查看我们的示例应用。'],
        'Stay ahead of latency issues and trace every slow transaction to a poor-performing API call or database query.':
          [
            '先发制人地解决延迟问题，并追踪每一个缓慢的事务到性能不佳的 API 调用或数据库查询。',
          ],
        'Package Manager': ['包管理器'],
        'The [code:sentry-log4j2] library provides [log4jLink:Log4j 2.x] support for Sentry via an [appenderLink:Appender] that sends logged exceptions to Sentry.':
          [
            '[code:sentry-log4j2] 库通过一个将记录的异常发送到 Sentry 的 [appenderLink:Appender] 为 Sentry 提供 [log4jLink:Log4j 2.x] 支持。',
          ],
        "Install Sentry's integration with Log4j 2.x using %s:": [
          '使用 %s 安装 Sentry 与 Log4j 2.x 的集成：',
        ],
        'The following example using the [log4j2Code:log4j2.xml] format to configure a [sentryConsoleAppenderCode:ConsoleAppender] that logs to standard out at the INFO level, and a [sentryAppenderCode:SentryAppender] that logs to the Sentry server at the ERROR level.':
          [
            '以下示例使用 [log4j2Code:log4j2.xml] 格式配置一个在 INFO 级别记录到标准输出的 [sentryConsoleAppenderCode:ConsoleAppender]，以及一个在 ERROR 级别记录到 Sentry 服务器的 [sentryAppenderCode:SentryAppender]。',
          ],
        "You'll also need to configure your DSN (client key) if it's not already in the [code:log4j2.xml] configuration. Learn more in [link:our documentation for DSN configuration].":
          [
            '如果 DSN（客户端密钥）尚未在 [code:log4j2.xml] 配置中，您还需要配置它。了解更多，请参阅 [link:我们的 DSN 配置文档]。',
          ],
        Gradle: ['Gradle'],
        "Next, you'll need to set your log levels, as illustrated here. You can learn more about [link:configuring log levels] in our documentation.":
          [
            '接下来，您需要设置日志级别，如下例所示。您可以在我们的文档中了解更多关于 [link:配置日志级别] 的信息。',
          ],
        'Last, create an intentional error, so you can test that everything is working:':
          ['最后，故意创建一个错误，以便测试一切是否正常工作：'],
        Maven: ['Maven'],
        'The sentry-logback library provides Logback support for Sentry using an [link:Appender] that sends logged exceptions to Sentry.':
          [
            'sentry-logback 库使用一个 [link:Appender] 将记录的异常发送到 Sentry，从而为 Sentry 提供 Logback 支持。',
          ],
        "Install Sentry's integration with Logback using %s:": [
          '使用 %s 安装 Sentry 与 Logback 的集成：',
        ],
        'The following example configures a ConsoleAppender that logs to standard out at the INFO level, and a SentryAppender that logs to the Sentry server at the ERROR level. This only an example of a non-Sentry appender set to a different logging threshold, similar to what you may already have in your project.':
          [
            '以下示例配置了一个在 INFO 级别记录到标准输出的 ConsoleAppender，以及一个在 ERROR 级别记录到 Sentry 服务器的 SentryAppender。这只是将非 Sentry appender 设置为不同日志阈值的一个示例，类似于您项目中可能已有的配置。',
          ],
        "You'll also need to configure your DSN (client key) if it's not already in the [code:logback.xml] configuration. Learn more in [link:our documentation for DSN configuration].":
          [
            '如果 DSN（客户端密钥）尚未在 [code:logback.xml] 配置中，您还需要配置它。了解更多，请参阅 [link:我们的 DSN 配置文档]。',
          ],
        'Other build tools': ['其他构建工具'],
        'For other dependency managers see the [link:central Maven repository].': [
          '对于其他依赖管理器，请参阅 [link:central Maven 仓库]。',
        ],
        "Sentry's integration with [springBootLink:Spring Boot] supports Spring Boot 2.1.0 and above. If you're on an older version, use [legacyIntegrationLink:our legacy integration].":
          [
            'Sentry 与 [springBootLink:Spring Boot] 的集成为 Spring Boot 2.1.0 及更高版本提供支持。如果您使用的是旧版本，请使用 [legacyIntegrationLink:我们的旧版集成]。',
          ],
        'Open up [applicationPropertiesCode:src/main/application.properties] (or [applicationYmlCode:src/main/application.yml]) and configure the DSN, and any other settings you need:':
          [
            '打开 [applicationPropertiesCode:src/main/application.properties]（或 [applicationYmlCode:src/main/application.yml]）并配置 DSN 以及您需要的任何其他设置：',
          ],
        'Then create an intentional error, so you can test that everything is working using either Java or Kotlin:':
          ['然后故意创建一个错误，以便使用 Java 或 Kotlin 测试一切是否正常工作：'],
        "Sentry's integration with Spring supports Spring Framework 5.1.2 and above. If you're on an older version, use [legacyIntegrationLink:our legacy integration].":
          [
            'Sentry 与 Spring 的集成为 Spring Framework 5.1.2 及更高版本提供支持。如果您使用的是旧版本，请使用 [legacyIntegrationLink:我们的旧版集成]。',
          ],
        "Install Sentry's integration with Spring using %s:": [
          '使用 %s 安装 Sentry 与 Spring 的集成：',
        ],
        'The [libraryName] library provides an [codeEnableSentry:@EnableSentry] annotation that registers all required Spring beans. [codeEnableSentry:@EnableSentry] can be placed on any class annotated with [configurationLink:@Configuration] including the main entry class in Spring Boot applications annotated with [springBootApplicationLink:@SpringBootApplication].':
          [
            '[libraryName] 库提供了一个 [codeEnableSentry:@EnableSentry] 注解，用于注册所有必需的 Spring Bean。[codeEnableSentry:@EnableSentry] 可以放在任何带有 [configurationLink:@Configuration] 注解的类上，包括带有 [springBootApplicationLink:@SpringBootApplication] 注解的 Spring Boot 应用的主要入口类。',
          ],
        'Spring Version': ['Spring 版本'],
        'Spring 6': ['Spring 6'],
        'Spring 5': ['Spring 5'],
        '…loading': ['…正在加载'],
        'Angular Features': ['Angular 功能'],
        'Learn about our first class integration with the Angular framework.': [
          '了解我们与 Angular 框架的一流集成。',
        ],
        'Initialize the Sentry Angular SDK in your [code:main.ts] file as early as possible, before initializing Angular:':
          [
            '在 [code:main.ts] 文件中尽早初始化 Sentry Angular SDK，最好是在初始化 Angular 之前：',
          ],
        'In order to use Session Replay, you will need version 7.27.0 of [codeAngular:@sentry/angular] at minimum. You do not need to install any additional packages.':
          [
            '为了使用会话回放，您至少需要 [codeAngular:@sentry/angular] 的 7.27.0 版本。您不需要安装任何其他软件包。',
          ],
        'For the User Feedback integration to work, you must have the Sentry browser SDK package, or an equivalent framework SDK (e.g. [codeAngular:@sentry/angular]) installed, minimum version 7.85.0.':
          [
            '为了使用户反馈集成正常工作，您必须安装 Sentry 浏览器 SDK 软件包或等效的框架 SDK（例如 [codeAngular:@sentry/angular]），最低版本为 7.85.0。',
          ],
        'Add the Sentry SDK as a dependency using [codeNpm:npm], [codeYarn:yarn] or [codePnpm:pnpm]:':
          [
            '使用 [codeNpm:npm]、[codeYarn:yarn] 或 [codePnpm:pnpm] 将 Sentry SDK 添加为依赖项：',
          ],
        "Register the Sentry Angular SDK's ErrorHandler and Tracing providers in your [codeModule:app.module.ts] file:":
          [
            '在您的 [codeModule:app.module.ts] 文件中注册 Sentry Angular SDK 的 ErrorHandler 和 Tracing 提供程序：',
          ],
        'Customize your SDK Setup': ['自定义 SDK 设置'],
        'Learn how to further configure and customize your Sentry Astro SDK setup.': [
          '了解如何进一步配置和自定义您的 Sentry Astro SDK 设置。',
        ],
        'There are several privacy and sampling options available. Learn more about configuring Session Replay by reading the [link:configuration docs].':
          [
            '有多种隐私和采样选项可供选择。通过阅读 [link:配置文档] 了解更多关于配置会话回放的信息。',
          ],
        'You can set sample rates directly in your [code:astro.config.js] file:': [
          '您可以在 [code:astro.config.js] 文件中直接设置采样率：',
        ],
        'Further Replay options, like privacy settings, can be set in a [code:sentry.client.config.js] file:':
          [
            '其他回放选项（如隐私设置）可以在 [code:sentry.client.config.js] 文件中设置：',
          ],
        'Note that creating your own [code:sentry.client.config.js] file will override the default settings in your [code2:astro.config.js] file. Learn more about this [link:here].':
          [
            '请注意，创建您自己的 [code:sentry.client.config.js] 文件将覆盖 [code2:astro.config.js] 文件中的默认设置。有关此内容的更多信息，请参阅 [link:here]。',
          ],
        'For the User Feedback integration to work, you must have the Sentry browser SDK package, or an equivalent framework SDK (e.g. [code:@sentry/astro]) installed, minimum version 7.85.0.':
          [
            '为了使用户反馈集成正常工作，您必须安装 Sentry 浏览器 SDK 软件包或等效的框架 SDK（例如 [code:@sentry/astro]），最低版本为 7.85.0。',
          ],
        'Install the [sentryAstroPkg:@sentry/astro] package with the [astroCli:astro] CLI:':
          ['使用 [astroCli:astro] CLI 安装 [sentryAstroPkg:@sentry/astro] 软件包：'],
        "Sentry's integration with [astroLink:Astro] supports Astro 3.0.0 and above.": [
          'Sentry 与 [astroLink:Astro] 的集成为 Astro 3.0.0 及更高版本提供支持。',
        ],
        'Open up your [astroConfig:astro.config.mjs] file and configure the DSN, and any other settings you need:':
          [
            '打开您的 [astroConfig:astro.config.mjs] 文件并配置 DSN 以及您需要的任何其他设置：',
          ],
        'Add your Sentry auth token to the [authTokenEnvVar:SENTRY_AUTH_TOKEN] environment variable:':
          [
            '将您的 Sentry 认证令牌添加到 [authTokenEnvVar:SENTRY_AUTH_TOKEN] 环境变量中：',
          ],
        'You can further customize your SDK by [manualSetupLink:manually inializing the SDK].':
          ['您可以通过 [manualSetupLink:手动初始化 SDK] 进一步自定义您的 SDK。'],
        'Then throw a test error anywhere in your app, so you can test that everything is working:':
          ['然后在应用中的任意位置抛出一个测试错误，以确保一切正常工作：'],
        'You need a minimum version 7.27.0 of [code:@sentry/ember] in order to use Session Replay. You do not need to install any additional packages.':
          [
            '为了使用会话回放，您需要 [code:@sentry/ember] 的最低版本 7.27.0。您不需要安装任何其他软件包。',
          ],
        'For the User Feedback integration to work, you must have the Sentry browser SDK package, or an equivalent framework SDK (e.g. [code:@sentry/ember]) installed, minimum version 7.85.0.':
          [
            '为了使用户反馈集成正常工作，您必须安装 Sentry 浏览器 SDK 软件包或等效的框架 SDK（例如 [code:@sentry/ember]），最低版本为 7.85.0。',
          ],
        'Sentry captures data by using an SDK within your application’s runtime.': [
          'Sentry 通过在应用运行时使用 SDK 来捕获数据。',
        ],
        'You should [initCode:init] the Sentry SDK as soon as possible during your application load up in [appCode:app.js], before initializing Ember:':
          [
            '您应该在初始化 Ember 之前，在 [appCode:app.js] 中尽早 [initCode:init] Sentry SDK，最好是在应用加载期间：',
          ],
        'You need a minimum version 7.27.0 of [code:@sentry/gatsby] in order to use Session Replay. You do not need to install any additional packages.':
          [
            '为了使用会话回放，您需要 [code:@sentry/gatsby] 的最低版本 7.27.0。您不需要安装任何其他软件包。',
          ],
        'Note: If [codeGatsby:gatsby-config.js] has any settings for the [codeSentry:@sentry/gatsby] plugin, they need to be moved into [codeConfig:sentry.config.js]. The [codeGatsby:gatsby-config.js] file does not support non-serializable options, like [codeNew:new Replay()].':
          [
            '注意：如果 [codeGatsby:gatsby-config.js] 为 [codeSentry:@sentry/gatsby] 插件有任何设置，则需要将其移到 [codeConfig:sentry.config.js] 中。[codeGatsby:gatsby-config.js] 文件不支持不可序列化的选项，例如 [codeNew:new Replay()]。',
          ],
        'For the User Feedback integration to work, you must have the Sentry browser SDK package, or an equivalent framework SDK (e.g. [code:@sentry/gatsby]) installed, minimum version 7.85.0.':
          [
            '为了使用户反馈集成正常工作，您必须安装 Sentry 浏览器 SDK 软件包或等效的框架 SDK（例如 [code:@sentry/gatsby]），最低版本为 7.85.0。',
          ],
        'Register the [codeSentry@sentry/gatsby] plugin in your Gatsby configuration file (typically [codeGatsby:gatsby-config.js]).':
          [
            '在您的 Gatsby 配置文件（通常是 [codeGatsby:gatsby-config.js]）中注册 [codeSentry@sentry/gatsby] 插件。',
          ],
        'Then, configure your [codeSentry:Sentry.init:]': [
          '然后，配置您的 [codeSentry:Sentry.init:]：',
        ],
        'Add the Sentry SDK as a dependency using [codeNpm:npm] or [codeYarn:yarn]:': [
          '使用 [codeNpm:npm] 或 [codeYarn:yarn] 将 Sentry SDK 添加为依赖项：',
        ],
        'For the Session Replay to work, you must have the Sentry browser SDK package, or an equivalent framework SDK (e.g. [code:@sentry/react]) installed, minimum version 7.27.0.':
          [
            '为了使会话回放正常工作，您必须安装 Sentry 浏览器 SDK 软件包或等效的框架 SDK（例如 [code:@sentry/react]），最低版本为 7.27.0。',
          ],
        'For the User Feedback integration to work, you must have the Sentry browser SDK package, or an equivalent framework SDK (e.g. [code:@sentry/react]) installed, minimum version 7.85.0.':
          [
            '为了使用户反馈集成正常工作，您必须安装 Sentry 浏览器 SDK 软件包或等效的框架 SDK（例如 [code:@sentry/react]），最低版本为 7.85.0。',
          ],
        'Add this script tag to the top of the page:': ['将此脚本标签添加到页面顶部：'],
        'Make sure that Session Replay is enabled in your [link:project settings].': [
          '确保在您的 [link:项目设置] 中启用了会话回放。',
        ],
        'Alert: The Replay integration must be added to your [sentryClient:sentry.client.config.js] file. Adding it to any server-side configuration files (like [instrumentation:instrumentation.ts]) will break your build because the Replay integration depends on Browser APIs.':
          [
            '警告：回放集成必须添加到您的 [sentryClient:sentry.client.config.js] 文件中。将其添加到任何服务器端配置文件（如 [instrumentation:instrumentation.ts]）中会破坏您的构建，因为回放集依赖于浏览器 API。',
          ],
        'For the User Feedback integration to work, you must have the Sentry browser SDK package, or an equivalent framework SDK (e.g. [code:@sentry/nextjs]) installed, minimum version 7.85.0.':
          [
            '为了使用户反馈集成正常工作，您必须安装 Sentry 浏览器 SDK 软件包或等效的框架 SDK（例如 [code:@sentry/nextjs]），最低版本为 7.85.0。',
          ],
        'Alert: The User Feedback integration must be added to your [sentryClient:sentry.client.config.js] file. Adding it to any server-side configuration files (like [instrumentation:instrumentation.ts]) will break your build because the Replay integration depends on Browser APIs.':
          [
            '警告：用户反馈集成必须添加到您的 [sentryClient:sentry.client.config.js] 文件中。将其添加到任何服务器端配置文件（如 [instrumentation:instrumentation.ts]）中会破坏您的构建，因为回放集依赖于浏览器 API。',
          ],
        'Configure your app automatically with the [wizardLink:Sentry wizard].': [
          '使用 [wizardLink:Sentry 向导] 自动配置您的应用。',
        ],
        'The Sentry wizard will automatically patch your application to configure the Sentry SDK:':
          ['Sentry 向导将自动修改您的应用以配置 Sentry SDK：'],
        'Create [serverCode:sentry.server.config.js], [clientCode:sentry.client.config.js] and [edgeCode:sentry.edge.config.js] with the default [sentryInitCode:Sentry.init].':
          [
            '使用默认的 [sentryInitCode:Sentry.init] 创建 [serverCode:sentry.server.config.js]、[clientCode:sentry.client.config.js] 和 [edgeCode:sentry.edge.config.js]。',
          ],
        'Create or update the Next.js instrumentation file [instrumentationCode:instrumentation.ts] to initialize the SDK with the configuration files added in the previous step.':
          [
            '创建或更新 Next.js 仪器文件 [instrumentationCode:instrumentation.ts] 以使用上一步添加的配置文件初始化 SDK。',
          ],
        'Create or update your Next.js config [nextConfig:next.config.js] with the default Sentry configuration.':
          [
            '使用默认的 Sentry 配置创建或更新您的 Next.js 配置 [nextConfig:next.config.js]。',
          ],
        'Create a [bundlerPluginsEnv:.env.sentry-build-plugin] with an auth token (which is used to upload source maps when building the application).':
          [
            '创建一个 [bundlerPluginsEnv:.env.sentry-build-plugin] 文件，其中包含认证令牌（用于在构建应用时上传源映射）。',
          ],
        'Add an example page to your app to verify your Sentry setup.': [
          '添加一个示例页面到您的应用中以验证 Sentry 设置。',
        ],
        "If you already have the configuration for Sentry in your application, and just need this project's ([projectSlug]) DSN, you can find it below:":
          [
            '如果您已经在应用中配置了 Sentry，只需要此项目（[projectSlug]）的 DSN，可以在下方找到：',
          ],
        'React Features': ['React 功能'],
        'Learn about our first class integration with the React framework.': [
          '了解我们与 React 框架的一流集成。',
        ],
        'React Router': ['React 路由器'],
        'Configure routing, so Sentry can generate parameterized transaction names for a better overview on the Performance page.':
          [
            '配置路由，以便 Sentry 可以为性能页面生成参数化的事务名称，从而获得更好的概览。',
          ],
        'Add the Sentry SDK as a dependency using [codeNpm:npm] or [codeYarn:yarn]. You need a minimum version 7.27.0 of [code:@sentry/react] in order to use Session Replay. You do not need to install any additional packages.':
          [
            '使用 [codeNpm:npm] 或 [codeYarn:yarn] 将 Sentry SDK 添加为依赖项。为了使用会话回放，您需要 [code:@sentry/react] 的最低版本 7.27.0。您不需要安装任何其他软件包。',
          ],
        'For the User Feedback integration to work, you must have the Sentry browser SDK package, or an equivalent framework SDK (e.g. [code:@sentry/remix]) installed, minimum version 7.85.0.':
          [
            '为了使用户反馈集成正常工作，您必须安装 Sentry 浏览器 SDK 软件包或等效的框架 SDK（例如 [code:@sentry/remix]），最低版本为 7.85.0。',
          ],
        "Sentry's integration with [remixLink:Remix] supports Remix 1.0.0 and above.": [
          'Sentry 与 [remixLink:Remix] 的集成为 Remix 1.0.0 及更高版本提供支持。',
        ],
        'The Sentry wizard will automatically add code to your project to inialize and configure the Sentry SDK:':
          ['Sentry 向导会自动向您的项目中添加代码以初始化和配置 Sentry SDK：'],
        "Create two files in the root directory of your project, [clientEntry:entry.client.tsx] and [serverEntry:entry.server.tsx] (if they don't already exist).":
          [
            '在您的项目根目录中创建两个文件，[clientEntry:entry.client.tsx] 和 [serverEntry:entry.server.tsx]（如果它们尚不存在）。',
          ],
        'Add the default [sentryInitCode:Sentry.init] call to both, client and server entry files.':
          ['在客户端和服务器入口文件中都添加默认的 [sentryInitCode:Sentry.init] 调用。'],
        'Create a [cliRc:.sentryclirc] with an auth token to upload source maps (this file is automatically added to your [gitignore:.gitignore]).':
          [
            '创建一个 [cliRc:.sentryclirc] 文件，其中包含用于上传源映射的认证令牌（此文件将自动添加到您的 [gitignore:.gitignore] 中）。',
          ],
        'Adjust your [buildscript:build] script in your [pkgJson:package.json] to automatically upload source maps to Sentry when you build your application.':
          [
            '调整您的 [pkgJson:package.json] 中的 [buildscript:build] 脚本，以便在构建应用时自动将源映射上传到 Sentry。',
          ],
        'You can also further [manualConfigure:configure your SDK] or [manualSetupLink:set it up manually], without the wizard.':
          [
            '您还可以进一步 [manualConfigure:配置您的 SDK] 或 [manualSetupLink:手动设置]，无需使用向导。',
          ],
        'Note: The Replay integration only needs to be added to your [entryClient:entry.client.tsx] file. It will not run if it is added into [sentryServer:sentry.server.config.js].':
          [
            '注意：回放集成只需添加到您的 [entryClient:entry.client.tsx] 文件中。如果将其添加到 [sentryServer:sentry.server.config.js] 中，它将不会运行。',
          ],
        'Solid Features': ['Solid 功能'],
        'Learn about our first class integration with the Solid framework.': [
          '了解我们与 Solid 框架的一流集成。',
        ],
        'You need a minimum version 8.9.1 of [code:@sentry/solid] in order to use Session Replay. You do not need to install any additional packages.':
          [
            '为了使用会话回放，您需要 [code:@sentry/solid] 的最低版本 8.9.1。您不需要安装任何其他软件包。',
          ],
        'For the User Feedback integration to work, you must have the Sentry browser SDK package, or an equivalent framework SDK (e.g. [code:@sentry/solid]) installed, minimum version 7.85.0.':
          [
            '为了使用户反馈集成正常工作，您必须安装 Sentry 浏览器 SDK 软件包或等效的框架 SDK（例如 [code:@sentry/solid]），最低版本为 7.85.0。',
          ],
        "Initialize Sentry as early as possible in your application's lifecycle, usually your solid app's entry point ([code:main.ts/js]):":
          [
            '在应用生命周期中尽早初始化 Sentry，通常是您的 Solid 应用的入口点（[code:main.ts/js]）：',
          ],
        'Svelte Features': ['Svelte 功能'],
        'Learn about our first class integration with the Svelte framework.': [
          '了解我们与 Svelte 框架的一流集成。',
        ],
        'You need a minimum version 7.27.0 of [code:@sentry/svelte] in order to use Session Replay. You do not need to install any additional packages.':
          [
            '为了使用会话回放，您需要 [code:@sentry/svelte] 的最低版本 7.27.0。您不需要安装任何其他软件包。',
          ],
        'For the User Feedback integration to work, you must have the Sentry browser SDK package, or an equivalent framework SDK (e.g. [code:@sentry/svelte]) installed, minimum version 7.85.0.':
          [
            '为了使用户反馈集成正常工作，您必须安装 Sentry 浏览器 SDK 软件包或等效的框架 SDK（例如 [code:@sentry/svelte]），最低版本为 7.85.0。',
          ],
        "Initialize Sentry as early as possible in your application's lifecycle, usually your Svelte app's entry point ([code:main.ts/js]):":
          [
            '在应用生命周期中尽早初始化 Sentry，通常是您的 Svelte 应用的入口点（[code:main.ts/js]）：',
          ],
        'Create or update [hookClientCode:src/hooks.client.js] and [hookServerCode:src/hooks.server.js] with the default [sentryInitCode:Sentry.init] call and SvelteKit hooks handlers.':
          [
            '使用默认的 [sentryInitCode:Sentry.init] 调用和 SvelteKit 钩子处理程序创建或更新 [hookClientCode:src/hooks.client.js] 和 [hookServerCode:src/hooks.server.js]。',
          ],
        'Update [code:vite.config.js] to add source maps upload and auto-instrumentation via Vite plugins.':
          [
            '更新 [code:vite.config.js] 以通过 Vite 插件添加源映射上传和自动 instrumentation。',
          ],
        'Create [sentryClircCode:.sentryclirc] and [sentryPropertiesCode:sentry.properties] files with configuration for sentry-cli (which is used when automatically uploading source maps).':
          [
            '创建 [sentryClircCode:.sentryclirc] 和 [sentryPropertiesCode:sentry.properties] 文件，其中包含 sentry-cli 的配置（在自动上传源映射时使用）。',
          ],
        'For the User Feedback integration to work, you must have the Sentry browser SDK package, or an equivalent framework SDK (e.g. [code:@sentry/sveltekit]) installed, minimum version 7.85.0.':
          [
            '为了使用户反馈集成正常工作，您必须安装 Sentry 浏览器 SDK 软件包或等效的框架 SDK（例如 [code:@sentry/sveltekit]），最低版本为 7.85.0。',
          ],
        'Vue Features': ['Vue 功能'],
        'Learn about our first class integration with the Vue framework.': [
          '了解我们与 Vue 框架的一流集成。',
        ],
        'You need a minimum version 7.27.0 of [code:@sentry/vue] in order to use Session Replay. You do not need to install any additional packages.':
          [
            '为了使用会话回放，您需要 [code:@sentry/vue] 的最低版本 7.27.0。您不需要安装任何其他软件包。',
          ],
        'Vue Version': ['Vue 版本'],
        'For the User Feedback integration to work, you must have the Sentry browser SDK package, or an equivalent framework SDK (e.g. [code:@sentry/vue]) installed, minimum version 7.85.0.':
          [
            '为了使用户反馈集成正常工作，您必须安装 Sentry 浏览器 SDK 软件包或等效的框架 SDK（例如 [code:@sentry/vue]），最低版本为 7.85.0。',
          ],
        'Install the Sentry Vue SDK as a dependency using [codeNpm:npm] or [codeYarn:yarn], alongside the Sentry Vue SDK:':
          [
            '使用 [codeNpm:npm] 或 [codeYarn:yarn] 将 Sentry Vue SDK 安装为依赖项，并附带 Sentry Vue SDK：',
          ],
        "Sentry supports Kotlin for both JVM and Android. This wizard guides you through set up in the JVM scenario. If you're interested in [strong:Android], head over to the [gettingStartedWithAndroidLink:Getting Started] for that SDK instead. At its core, Sentry for Java provides a raw client for sending events to Sentry. If you use [strong2:Spring Boot, Spring, Logback, JUL, or Log4j2], head over to our [gettingStartedWithJavaLink:Getting Started for Sentry Java].":
          [
            'Sentry 支持 JVM 和 Android 上的 Kotlin。此向导将指导您完成 JVM 场景的设置。如果您对 [strong:Android] 感兴趣，请转到该 SDK 的 [gettingStartedWithAndroidLink:Getting Started]。在核心层面，Sentry for Java 提供了一个原始客户端，用于向 Sentry 发送事件。如果您使用的是 [strong2:Spring Boot、Spring、Logback、JUL 或 Log4j2]，请转到我们的 [gettingStartedWithJavaLink:Sentry Java 入门]。',
          ],
        'Creating and Uploading Minidumps': ['创建和上传 Minidumps'],
        'Depending on your operating system and programming language, there are various alternatives to create minidumps and upload them to Sentry. See the following resources for libraries that support generating minidump crash reports:':
          [
            '根据您的操作系统和编程语言，有多种方法可以创建 minidumps 并将其上传到 Sentry。请参阅以下资源，了解支持生成 minidump 崩溃报告的库：',
          ],
        'If you have already integrated a library that generates minidumps and would just like to upload them to Sentry, you need to configure the [minidumpEndpointUrlItalic:Minidump Endpoint URL], which can be found at [projectSettingsItalic:Project Settings > Client Keys (DSN)]. This endpoint expects a [postCode:POST] request with the minidump in the [uploadFileMinidumpCode:upload_file_minidump] field:':
          [
            '如果您已经集成了一个生成 minidumps 的库，并且只想将它们上传到 Sentry，则需要配置 [minidumpEndpointUrlItalic:Minidump 终结点 URL]，您可以在 [projectSettingsItalic:项目设置 > 客户端密钥（DSN）] 中找到。此终结点期望一个 [postCode:POST] 请求，其中包含 [uploadFileMinidumpCode:upload_file_minidump] 字段中的 minidump：',
          ],
        'To send additional information, add more form fields to this request. For a full description of fields accepted by Sentry, see [passingAdditionalDataLink:Passing Additional Data].':
          [
            '要发送额外的信息，请为此请求添加更多表单字段。有关 Sentry 接受的字段的完整描述，请参阅 [passingAdditionalDataLink:传递额外数据]。',
          ],
        'Install the SDK by downloading the [releasesLink:latest release]. Next, follow the instructions in the [nativeSDKDocumentationLink:Native SDK Documentation] to build and link the SDK library.':
          [
            '通过下载 [releasesLink:最新版本] 安装 SDK。接下来，按照 [nativeSDKDocumentationLink:原生 SDK 文档] 中的说明构建并链接 SDK 库。',
          ],
        'Import and initialize the Sentry SDK early in your application setup:': [
          '在应用设置的早期导入并初始化 Sentry SDK：',
        ],
        'Alternatively, the DSN can be passed as [code:SENTRY_DSN] environment variable during runtime. This can be especially useful for server applications.':
          [
            '或者，可以在运行时将 DSN 作为 [code:SENTRY_DSN] 环境变量传递。这对于服务器应用程序尤其有用。',
          ],
        'The quickest way to verify Sentry in your Native application is by capturing a message:':
          ['验证原生应用中的 Sentry 的最快速方法是捕获一条消息：'],
        'Install the SDK by downloading the [releasesLink:latest release]. Next, follow the instructions in the [nativeQTSDKDocumentationLink:Native SDK Documentation] to build the SDK library.':
          [
            '通过下载 [releasesLink:最新版本] 安装 SDK。接下来，按照 [nativeQTSDKDocumentationLink:原生 SDK 文档] 中的说明构建 SDK 库。',
          ],
        'The quickest way to verify Sentry in your Qt application is by capturing a message:':
          ['验证 Qt 应用中的 Sentry 的最快速方法是捕获一条消息：'],
        'Download the SDK and follow the instructions that are provided in the [nintendoDoc:Nintendo Developer documentation].':
          ['下载 SDK 并按照 [nintendoDoc:Nintendo 开发者文档] 中提供的说明进行操作。'],
        'Add the Sentry AWS Serverless SDK as a dependency:': [
          '将 Sentry AWS Serverless SDK 添加为依赖项：',
        ],
        "Ensure that Sentry is imported and initialized at the beginning of your file, prior to any other [require:require] or [import:import] statements. Then, wrap your lambda handler with Sentry's [code:wraphandler] function:":
          [
            '确保在文件开头导入并初始化 Sentry，优先于任何其他 [require:require] 或 [import:import] 语句。然后，使用 Sentry 的 [code:wraphandler] 函数包装您的 lambda 处理程序：',
          ],
        'You need a minimum version [codeVersion:8.0.0] of [codePackage:@sentry/aws-serverless]:':
          [
            '您需要 [codePackage:@sentry/aws-serverless] 的最低版本 [codeVersion:8.0.0]：',
          ],
        'Add the Sentry Node SDK as a dependency:': ['将 Sentry Node SDK 添加为依赖项：'],
        'Ensure that Sentry is imported and initialized at the beginning of your file, prior to any other [require:require] or [import:import] statements.':
          [
            '确保在文件开头导入并初始化 Sentry，优先于任何其他 [require:require] 或 [import:import] 语句。',
          ],
        'Note: You need to call both [captureExceptionCode:captureException] and [flushCode:flush] for captured events to be successfully delivered to Sentry.':
          [
            '注意：您需要同时调用 [captureExceptionCode:captureException] 和 [flushCode:flush]，才能将捕获的事件成功发送到 Sentry。',
          ],
        "Initialize Sentry as early as possible in your application's lifecycle. Otherwise, auto-instrumentation will not work.":
          ['在应用生命周期中尽早初始化 Sentry。否则，自动 instrumentation 将无法工作。'],
        'To initialize the SDK before everything else, create an external file called [code:instrument.js/mjs].':
          [
            '为了在其他所有操作之前初始化 SDK，请创建一个名为 [code:instrument.js/mjs] 的外部文件。',
          ],
        "Make sure to import [code1:instrument.js/mjs] at the top of your file. Set up the error handler after all controllers and before any other error middleware. This setup is typically done in your application's entry point file, which is usually [code2:index.(js|ts)]. If you're running your application in ESM mode, or looking for alternative ways to set up Sentry, read about [docs:installation methods in our docs].":
          [
            '确保在文件顶部导入 [code1:instrument.js/mjs]。在所有控制器之后和任何其他错误中间件之前设置错误处理程序。此设置通常在应用的入口文件中进行，通常是 [code2:index.(js|ts)]。如果您以 ESM 模式运行应用，或寻找设置 Sentry 的其他方法，请阅读 [docs:我们的文档中的安装方法]。',
          ],
        "Make sure to import [code1:instrument.js/mjs] at the top of your file. Set up the error handler. This setup is typically done in your application's entry point file, which is usually [code2:index.(js|ts)]. If you're running your application in ESM mode, or looking for alternative ways to set up Sentry, read about [docs:installation methods in our docs].":
          [
            '确保在文件顶部导入 [code1:instrument.js/mjs]。设置错误处理程序。此设置通常在应用的入口文件中进行，通常是 [code2:index.(js|ts)]。如果您以 ESM 模式运行应用，或寻找设置 Sentry 的其他方法，请阅读 [docs:我们的文档中的安装方法]。',
          ],
        'Add the Sentry Serverless SDK as a dependency to your [code:package.json]:': [
          '将 Sentry Serverless SDK 添加为 [code:package.json] 中的依赖项：',
        ],
        'Ensure that Sentry is imported and initialized at the beginning of your file, prior to any other [require:require] or [import:import] statements. Then, use the Sentry SDK to wrap your functions:':
          [
            '确保在文件开头导入并初始化 Sentry，优先于任何其他 [require:require] 或 [import:import] 语句。然后，使用 Sentry SDK 包装您的函数：',
          ],
        'You need a minimum version [codeVersion:8.0.0] of [codePackage:@sentry/google-cloud-serverless]:':
          [
            '您需要 [codePackage:@sentry/google-cloud-serverless] 的最低版本 [codeVersion:8.0.0]：',
          ],
        'Add the Sentry NestJS SDK as a dependency:': [
          '将 Sentry NestJS SDK 添加为依赖项：',
        ],
        'Import [code1:instrument.js/mjs] in your [code2:main.ts/js] file:': [
          '在 [code2:main.ts/js] 文件中导入 [code1:instrument.js/mjs]：',
        ],
        'Then you can add the [code1:SentryModule] as a root module. The [code2:SentryModule] needs to be registered before any other module that should be instrumented by Sentry.':
          [
            '然后您可以将 [code1:SentryModule] 添加为根模块。[code2:SentryModule] 需要在任何其他应由 Sentry 进行 instrumentation 的模块之前注册。',
          ],
        'Once the SDK is installed or updated, you can enable code locations being emitted with your metrics in your [code:config/sentry.php] file:':
          [
            '安装或更新 SDK 后，您可以在 [code:config/sentry.php] 文件中启用代码位置随指标一起发出：',
          ],
        'Next, create [code:resources/views/errors/500.blade.php], and embed the feedback code:':
          ['接下来，创建 [code:resources/views/errors/500.blade.php]，并嵌入反馈代码：'],
        'For Laravel 5 up to 5.4 there is some extra work needed. You need to open up [codeApp:App/Exceptions/Handler.php] and extend the [codeRender:render] method to make sure the 500 error is rendered as a view correctly, in 5.5+ this step is not required anymore.':
          [
            '对于 Laravel 5 到 5.4，需要做一些额外的工作。您需要打开 [codeApp:App/Exceptions/Handler.php] 并扩展 [codeRender:render] 方法，以确保正确将 500 错误渲染为视图，在 5.5+ 中不再需要此步骤。',
          ],
        'This guide is for Laravel 11.0 an up. We also provide instructions for [otherVersionsLink:other versions] as well as [lumenSpecificLink:Lumen-specific instructions].':
          [
            '本指南适用于 Laravel 11.0 及更高版本。我们还为 [otherVersionsLink:其他版本] 以及 [lumenSpecificLink:Lumen 特定说明] 提供了相关说明。',
          ],
        'Install the [code:sentry/sentry-laravel] package:': [
          '安装 [code:sentry/sentry-laravel] 软件包：',
        ],
        'Install the Excimer extension via PECL:': ['通过 PECL 安装 Excimer 扩展：'],
        "The Excimer PHP extension supports PHP 7.2 and up. Excimer requires Linux or macOS and doesn't support Windows. For additional ways to install Excimer, see [sentryPhpDocumentationLink: Sentry documentation].":
          [
            'Excimer PHP 扩展支持 PHP 7.2 及更高版本。Excimer 需要 Linux 或 macOS，不支持 Windows。有关安装 Excimer 的其他方法，请参阅 [sentryPhpDocumentationLink:Sentry 文档]。',
          ],
        'Enable capturing unhandled exception to report to Sentry by making the following change to your [code:bootstrap/app.php]:':
          [
            '通过以下更改启用捕获未处理的异常并报告给 Sentry：修改您的 [code:bootstrap/app.php]。',
          ],
        'Configure the Sentry DSN with this command:': ['使用此命令配置 Sentry DSN：'],
        'It creates the config file ([sentryPHPCode:config/sentry.php]) and adds the [dsnCode:DSN] to your [envCode:.env] file where you can add further configuration options:':
          [
            '它创建配置文件 ([sentryPHPCode:config/sentry.php]) 并将 [dsnCode:DSN] 添加到您的 [envCode:.env] 文件中，您可以在其中添加更多配置选项：',
          ],
        'You can test your configuration using the provided [code:sentry:test] artisan command:':
          ['您可以使用提供的 [code:sentry:test] artisan 命令测试您的配置：'],
        'You need a minimum version [codeVersionLaravel:4.2.0] of the Laravel SDK and a minimum version [codeVersion:4.3.0] of the PHP SDK installed':
          [
            '您需要安装 Laravel SDK 的最低版本 [codeVersionLaravel:4.2.0] 和 PHP SDK 的最低版本 [codeVersion:4.3.0]',
          ],
        'To install the PHP SDK, you need to be using Composer in your project. For more details about Composer, see the [composerDocumentationLink:Composer documentation].':
          [
            '要安装 PHP SDK，您需要在项目中使用 Composer。有关 Composer 的更多详细信息，请参阅 [composerDocumentationLink:Composer 文档]。',
          ],
        'To capture all errors, even the one during the startup of your application, you should initialize the Sentry PHP SDK as soon as possible.':
          ['为了捕获所有错误，包括应用启动期间的错误，您应尽早初始化 Sentry PHP SDK。'],
        'To instrument certain regions of your code, you can [instrumentationLink:create transactions to capture them].':
          [
            '为了 instrumentation 某些代码区域，您可以 [instrumentationLink:创建事务来捕获它们]。',
          ],
        'In PHP you can either capture a caught exception or capture the last error with captureLastError.':
          [
            '在 PHP 中，您可以捕获已捕获的异常，也可以使用 captureLastError 捕获上次错误。',
          ],
        'You need a minimum version [codeVersion:4.3.0] of the Sentry PHP SDK installed.':
          ['您需要安装 Sentry PHP SDK 的最低版本 [codeVersion:4.3.0]。'],
        'Once the SDK is installed or updated, you can enable code locations being emitted with your metrics:':
          ['安装或更新 SDK 后，您可以启用代码位置随指标一起发出：'],
        'Install the [code:sentry/sentry-symfony] bundle:': [
          '安装 [code:sentry/sentry-symfony] 捆绑包：',
        ],
        'Add your DSN to your [code:.env] file:': [
          '将您的 DSN 添加到 [code:.env] 文件中：',
        ],
        'Add further configuration options to your [code:config/packages/sentry.yaml] file:':
          ['将更多配置选项添加到 [code:config/packages/sentry.yaml] 文件中：'],
        'Symfony is supported via the [code:sentry-symfony] package as a native bundle.':
          ['Symfony 通过 [code:sentry-symfony] 捆绑包作为原生捆绑包得到支持。'],
        "After you visit the [code:/_sentry-test page], you can view and resolve the recorded error by logging into [sentryLink:sentry.io] and opening your project. Clicking on the error's title will open a page where you can see detailed information and mark it as resolved.":
          [
            '访问 [code:/_sentry-test 页面] 后，您可以通过登录 [sentryLink:sentry.io] 并打开您的项目来查看和解决记录的错误。点击错误标题将打开一个页面，您可以在其中查看详细信息并将其标记为已解决。',
          ],
        '[link:Many more samples in the [code:dotnet] SDK repository] [strong:(C#)]': [
          '[link:[code:dotnet] SDK 仓库中有更多示例] [strong:(C#)]',
        ],
        'Sentry for PowerShell module supports PowerShell 7.2+ on Windows, macOS, and Linux as well as Windows PowerShell 5.1+.':
          [
            'Sentry for PowerShell 模块支持 Windows、macOS 和 Linux 上的 PowerShell 7.2+ 以及 Windows PowerShell 5.1+。',
          ],
        'Install the module:': ['安装模块：'],
        'Initialize the SDK as early as possible.': ['尽早初始化 SDK。'],
        'Check out [link:the documentation] to learn more about the API and instrumentations.':
          ['查看 [link:文档] 以了解更多关于 API 和 instrumentation 的信息。'],
        'You can find sample usage of the SDK:': ['您可以找到 SDK 的示例用法：'],
        '[link:Samples in the [code:powershell] SDK repository]': [
          '[link:[code:powershell] SDK 仓库中的示例]',
        ],
        'The AIOHTTP integration adds support for the [link:AIOHTTP-Server Web Framework].':
          ['AIOHTTP 集成为 [link:AIOHTTP-Server Web Framework] 添加了支持。'],
        'Install [code:sentry-sdk] from PyPI:': ['从 PyPI 安装 [code:sentry-sdk]：'],
        'You need a minimum version [codeVersion:1.18.0] of the [codePackage:sentry-python] SDK for the profiling feature.':
          [
            '对于概要分析功能，您需要 [codePackage:sentry-python] SDK 的最低版本 [codeVersion:1.18.0]。',
          ],
        "If you're on Python 3.6, you also need the [code:aiocontextvars] package:": [
          '如果您使用的是 Python 3.6，还需要 [code:aiocontextvars] 包：',
        ],
        'If you have the [code:aiohttp] package in your dependencies, the AIOHTTO integration will be enabled automatically. There is nothing to do for you except initializing the Sentry SDK before initializing your application:':
          [
            '如果您在依赖项中有 [code:aiohttp] 包，AIOHTTP 集成将自动启用。除了在初始化应用之前初始化 Sentry SDK 外，您无需执行任何操作：',
          ],
        'You can easily verify your Sentry installation by creating a route that triggers an error:':
          ['您可以通过创建一个触发错误的路由轻松验证 Sentry 安装：'],
        'When you point your browser to [localhostLInk:http://localhost:8080/] a transaction in the Performance section of Sentry will be created.':
          [
            '当您在浏览器中访问 [localhostLInk:http://localhost:8080/] 时，将在 Sentry 的性能部分创建一个事务。',
          ],
        'Additionally, an error event will be sent to Sentry and will be connected to the transaction.':
          ['此外，错误事件将被发送到 Sentry 并与事务关联。'],
        'It takes a couple of moments for the data to appear in Sentry.': [
          '数据出现在 Sentry 中需要几秒钟。',
        ],
        'The ASGI middleware can be used to instrument any bare bones ASGI application. If you have a ASGI based web framework (like FastAPI, Starlette, or others), please use the specific integration for the framework.':
          [
            'ASGI 中间件可用于 instrumentation 任何基础的 ASGI 应用。如果您使用的是基于 ASGI 的 Web 框架（如 FastAPI、Starlette 或其他），请使用该框架的特定集成。',
          ],
        'Wrap your ASGI application with [code: SentryAsgiMiddleware]:': [
          '使用 [code:SentryAsgiMiddleware] 包装您的 ASGI 应用：',
        ],
        'The middleware supports both ASGI 2 and ASGI 3 transparently.': [
          '中间件透明地支持 ASGI 2 和 ASGI 3。',
        ],
        'To verify that everything is working trigger an error on purpose:': [
          '为了验证一切正常工作，请故意触发一个错误：',
        ],
        'Run your ASGI app with uvicorn ([code:uvicorn main:app --port 8000]) and point your browser to [link:http://localhost:8000]. A transaction in the Performance section of Sentry will be created.':
          [
            '使用 uvicorn 运行您的 ASGI 应用 ([code:uvicorn main:app --port 8000]) 并在浏览器中访问 [link:http://localhost:8000]。将在 Sentry 的性能部分创建一个事务。',
          ],
        'Create a deployment package on your local machine and install the required dependencies in the deployment package. For more information, see [link:AWS Lambda deployment package in Python].':
          [
            '在本地机器上创建部署包，并在部署包中安装所需的依赖项。有关详细信息，请参阅 [link:Python 中的 AWS Lambda 部署包]。',
          ],
        'Install our Python SDK using [code:pip]:': [
          '使用 [code:pip] 安装我们的 Python SDK：',
        ],
        'You can use the AWS Lambda integration for the Python SDK like this:': [
          '您可以这样使用 Python SDK 的 AWS Lambda 集成：',
        ],
        "Check out Sentry's [link:AWS sample apps] for detailed examples.": [
          '查看 Sentry 的 [link:AWS 示例应用] 以获取详细示例。',
        ],
        'Timeout Warning': ['超时警告'],
        'The timeout warning reports an issue when the function execution time is near the [link:configured timeout].':
          ['当函数执行时间接近 [link:配置的超时时间] 时，超时警告会报告问题。'],
        'To enable the warning, update the SDK initialization to set [codeTimeout:timeout_warning] to [codeStatus:true]:':
          [
            '要启用警告，请更新 SDK 初始化以将 [codeTimeout:timeout_warning] 设置为 [codeStatus:true]：',
          ],
        'The timeout warning is sent only if the timeout in the Lambda Function configuration is set to a value greater than one second.':
          ['只有当 Lambda 函数配置中的超时时间设置为大于一秒的值时，才会发送超时警告。'],
        'If you are using another web framework inside of AWS Lambda, the framework might catch those exceptions before we get to see them. Make sure to enable the framework specific integration as well, if one exists. See [link:Integrations] for more information.':
          [
            '如果您在 AWS Lambda 内部使用另一个 Web 框架，该框架可能会在我们看到这些异常之前捕获它们。如果存在特定于框架的集成，请确保也启用它。有关详细信息，请参阅 [link:Integrations]。',
          ],
        'The Bottle integration adds support for the [link:Bottle Web Framework].': [
          'Bottle 集成为 [link:Bottle Web Framework] 添加了支持。',
        ],
        'Install [sentrySdkCode:sentry-sdk] from PyPI with the [sentryBotteCode:bottle] extra:':
          [
            '使用带有 [sentryBotteCode:bottle] 额外组件的 PyPI 安装 [sentrySdkCode:sentry-sdk]：',
          ],
        'If you have the [code:bottle] package in your dependencies, the Bottle integration will be enabled automatically when you initialize the Sentry SDK. Initialize the Sentry SDK before your app has been initialized:':
          [
            '如果您在依赖项中有 [code:bottle] 包，初始化 Sentry SDK 时将自动启用 Bottle 集成。在初始化应用之前初始化 Sentry SDK：',
          ],
        'To verify that everything is working, trigger an error on purpose:': [
          '为了验证一切正常工作，请故意触发一个错误：',
        ],
        'When you point your browser to [link:http://localhost:8000/] a transaction in the Performance section of Sentry will be created.':
          [
            '当您在浏览器中访问 [link:http://localhost:8000/] 时，将在 Sentry 的性能部分创建一个事务。',
          ],
        "To verify if your SDK is initialized on worker start, you can pass `debug=True` to `sentry_sdk.init()` to see extra output when the SDK is initialized. If the output appears during worker startup and not only after a task has started, then it's working properly.":
          [
            '为了验证 SDK 是否在工作进程启动时初始化，您可以在 `sentry_sdk.init()` 中传递 `debug=True`，以便在 SDK 初始化时看到额外的输出。如果输出出现在工作进程启动期间而不仅是在任务启动后，则说明它工作正常。',
          ],
        'Sentry uses custom message headers for distributed tracing. For Celery versions 4.x, with [celeryDocLink: message protocol of version 1], this functionality is broken, and Celery fails to propagate custom headers to the worker. Protocol version 2, which is the default since Celery version 4.0, is not affected.\n\n              The fix for the custom headers propagation issue was introduced to Celery project ([celeryPRLink: PR]) starting with version 5.0.1. However, the fix was not backported to versions 4.x.\n              ':
          [
            'Sentry 为分布式跟踪使用自定义消息标题。对于 Celery 4.x 版本，使用 [celeryDocLink: 版本 1 的消息协议] 时，此功能会中断，Celery 无法将自定义标题传播到工作进程。自 Celery 4.0 版本以来，默认的协议版本 2 不受影响。\n\n              自版本 5.0.1 起，Celery 项目 ([celeryPRLink: PR]) 引入了修复自定义标题传播问题的补丁。但是，该修复未被反向移植到 4.x 版本。\n              ',
          ],
        'The celery integration adds support for the [link:Celery Task Queue System].': [
          'Celery 集成为 [link:Celery 任务队列系统] 添加了支持。',
        ],
        'Install [code:sentry-sdk] from PyPI with the [code:celery] extra:': [
          '使用带有 [code:celery] 额外组件的 PyPI 安装 [code:sentry-sdk]：',
        ],
        'If you have the [code:celery] package in your dependencies, the Celery integration will be enabled automatically when you initialize the Sentry SDK.':
          [
            '如果您在依赖项中有 [code:celery] 包，初始化 Sentry SDK 时将自动启用 Celery 集成。',
          ],
        'Make sure that the call to [code:init] is loaded on worker startup, and not only in the module where your tasks are defined. Otherwise, the initialization happens too late and events might end up not being reported.':
          [
            '确保在工作进程启动时加载对 [code:init] 的调用，而不仅仅是在定义任务的模块中。否则，初始化发生得太晚，事件可能不会被报告。',
          ],
        'Standalone Setup': ['独立设置'],
        "If you're using Celery standalone, there are two ways to set this up:": [
          '如果您独立使用 Celery，有两种设置方法：',
        ],
        "Initializing the SDK in the configuration file loaded with Celery's [code:--config] parameter":
          ['在使用 Celery 的 [code:--config] 参数加载的配置文件中初始化 SDK'],
        'Initializing the SDK by hooking it to either the [celerydInit: celeryd_init] or [workerInit: worker_init] signals:':
          [
            '通过将 SDK 钩接到 [celerydInit: celeryd_init] 或 [workerInit: worker_init] 信号来初始化 SDK',
          ],
        'Setup With Django': ['与 Django 的集成设置'],
        "If you're using Celery with Django in a conventional setup, have already initialized the SDK in [settingsLink:your settings.py], and have Celery using the same settings with [celeryDocsLinks:config_from_object], you don't need to initialize the SDK separately for Celery.":
          [
            '如果您在传统设置中使用 Celery 和 Django，已经在 [settingsLink:your settings.py] 中初始化了 SDK，并且 Celery 使用 [celeryDocsLinks:config_from_object] 使用相同的设置，则无需为 Celery 单独初始化 SDK。',
          ],
        'Install [sentrySdkCode:sentry-sdk] from PyPI with the [sentryBotteCode:chalice] extra:':
          [
            '使用带有 [sentryBotteCode:chalice] 额外组件的 PyPI 安装 [sentrySdkCode:sentry-sdk]：',
          ],
        'To configure the SDK, initialize it with the integration before or after your app has been initialized:':
          ['要配置 SDK，请在初始化应用之前或之后使用集成进行初始化：'],
        'When you enter the [code:"/"] route or the scheduled task is run, an error event will be sent to Sentry.':
          ['当您进入 [code:"/"] 路由或计划任务运行时，错误事件将被发送到 Sentry。'],
        'Initialize the Sentry SDK in your Django [codeSettings:settings.py] file:': [
          '在您的 Django [codeSettings:settings.py] 文件中初始化 Sentry SDK：',
        ],
        'When you point your browser to [link:http://localhost:8000/sentry-debug/] an error with a trace will be created. So you can explore errors and tracing portions of Sentry.':
          [
            '当您在浏览器中访问 [link:http://localhost:8000/sentry-debug/] 时，将创建一个带有跟踪的错误。这样您就可以探索 Sentry 的错误和跟踪部分。',
          ],
        'It can take a couple of moments for the data to appear in Sentry. Bear with us, the internet is huge.':
          ['数据出现在 Sentry 中可能需要几秒钟。请耐心等待，互联网很大。'],
        'The Falcon integration adds support for the [link:Falcon Web Framework].': [
          'Falcon 集成为 [link:Falcon Web Framework] 添加了支持。',
        ],
        'Install [sentrySdkCode:sentry-sdk] from PyPI with the [sentryFalconCode:falcon] extra:':
          [
            '使用带有 [sentryFalconCode:falcon] 额外组件的 PyPI 安装 [sentrySdkCode:sentry-sdk]：',
          ],
        'If you have the [codeFalcon:falcon] package in your dependencies, the Falcon integration will be enabled automatically when you initialize the Sentry SDK. Initialize the Sentry SDK before your app has been initialized:':
          [
            '如果您在依赖项中有 [codeFalcon:falcon] 包，初始化 Sentry SDK 时将自动启用 Falcon 集成。在初始化应用之前初始化 Sentry SDK：',
          ],
        'The FastAPI integration adds support for the [link:FastAPI Framework].': [
          'FastAPI 集成为 [link:FastAPI 框架] 添加了支持。',
        ],
        'Install [sentrySdkCode:sentry-sdk] from PyPI with the [sentryFastApiCode:fastapi] extra:':
          [
            '使用带有 [sentryFastApiCode:fastapi] 额外组件的 PyPI 安装 [sentrySdkCode:sentry-sdk]：',
          ],
        'If you have the [codeFastAPI:fastapi] package in your dependencies, the FastAPI integration will be enabled automatically when you initialize the Sentry SDK. Initialize the Sentry SDK before your app has been initialized:':
          [
            '如果您在依赖项中有 [codeFastAPI:fastapi] 包，初始化 Sentry SDK 时将自动启用 FastAPI 集成。在初始化应用之前初始化 Sentry SDK：',
          ],
        'The above configuration captures both error and performance data. To reduce the volume of performance data captured, change [code:traces_sample_rate] to a value between 0 and 1.':
          [
            '上述配置会捕获错误和性能数据。若要减少捕获的性能数据量，请将 [code:traces_sample_rate] 设置为介于 0 到 1 之间的值。',
          ],
        'When you point your browser to [link:http://localhost:8000/sentry-debug/] a transaction in the Performance section of Sentry will be created.':
          [
            '当您在浏览器中访问 [link:http://localhost:8000/sentry-debug/] 时，将在 Sentry 的性能部分创建一个事务。',
          ],
        'The Flask integration adds support for the [link:Flask Framework].': [
          'Flask 集成为 [link:Flask 框架] 提供了支持。',
        ],
        'Install [sentrySdkCode:sentry-sdk] from PyPI with the [sentryFlaskCode:flask] extra:':
          [
            '通过 PyPI 安装带有 [sentryFlaskCode:flask] 额外组件的 [sentrySdkCode:sentry-sdk]：',
          ],
        'If you have the [codeFlask:flask] package in your dependencies, the Flask integration will be enabled automatically when you initialize the Sentry SDK. Initialize the Sentry SDK before your app has been initialized:':
          [
            '如果您在依赖项中有 [codeFlask:flask] 包，初始化 Sentry SDK 时将自动启用 Flask 集成。在初始化应用之前初始化 Sentry SDK：',
          ],
        'When you point your browser to [link:http://localhost:5000/] a transaction in the Performance section of Sentry will be created.':
          [
            '当您在浏览器中访问 [link:http://localhost:5000/] 时，将在 Sentry 的性能部分创建一个事务。',
          ],
        'You can use the Google Cloud Functions integration for the Python SDK like this:':
          ['您可以这样使用 Python SDK 的 Google Cloud Functions 集成：'],
        "Check out Sentry's [link:GCP sample apps] for detailed examples.": [
          '查看 Sentry 的 [link:GCP 示例应用] 以获取详细示例。',
        ],
        'The timeout warning is sent only if the timeout in the Cloud Function configuration is set to a value greater than one second.':
          [
            '只有当 Cloud Function 配置中的超时时间设置为大于一秒的值时，才会发送超时警告。',
          ],
        'If you are using a web framework in your Cloud Function, the framework might catch those exceptions before we get to see them. Make sure to enable the framework specific integration as well, if one exists. See [link:Integrations] for more information.':
          [
            '如果您在 Cloud Function 中使用了 Web 框架，该框架可能会在我们捕获到这些异常之前将其拦截。如果存在特定于框架的集成，请确保也启用它。有关详细信息，请参阅 [link:Integrations]。',
          ],
        'The PyMongo integration adds support for [link:PyMongo], the official MongoDB driver. It adds breadcrumbs and performance traces for all queries.':
          [
            'PyMongo 集成为官方 MongoDB 驱动程序 [link:PyMongo] 提供了支持。它为所有查询添加了面包屑和性能跟踪。',
          ],
        'Install [sentrySdkCode:sentry-sdk] from PyPI with the [pymongoCode:pymongo] extra:':
          [
            '通过 PyPI 安装带有 [pymongoCode:pymongo] 额外组件的 [sentrySdkCode:sentry-sdk]：',
          ],
        "To configure the SDK, initialize it before creating any of PyMongo's MongoClient instances:":
          ['要配置 SDK，请在创建任何 PyMongo 的 MongoClient 实例之前进行初始化：'],
        'The above configuration captures both breadcrumbs and performance data. To reduce the volume of performance data captured, change [code:traces_sample_rate] to a value between 0 and 1.':
          [
            '上述配置会捕获面包屑和性能数据。若要减少捕获的性能数据量，请将 [code:traces_sample_rate] 设置为介于 0 到 1 之间的值。',
          ],
        'If you haven’t already, start by downloading Raven. The easiest way is with [code:pip]:':
          ['如果您尚未安装，可以从下载 Raven 开始。最简单的方法是使用 [code:pip]：'],
        'A Pylons-specific middleware exists to enable easy configuration from settings:':
          ['存在一个特定于 Pylons 的中间件，以便从设置中轻松进行配置：'],
        'Configuration is handled via the sentry namespace:': [
          '配置通过 sentry 命名空间进行管理：',
        ],
        'Logger setup': ['日志记录器设置'],
        'Add the following lines to your project’s [initCode:.ini] file to setup [sentryHandlerCode:SentryHandler]:':
          [
            '要设置 [sentryHandlerCode:SentryHandler]，请将以下行添加到项目的 [initCode:.ini] 文件中：',
          ],
        'You may want to set up other loggers as well.': [
          '您可能还需要设置其他日志记录器。',
        ],
        'The Pyramid integration adds support for the [link:Pyramid Web Framework].': [
          'Pyramid 集成为 [link:Pyramid Web Framework] 提供了支持。',
        ],
        'If you have the [codePyramid:pyramid] package in your dependencies, the Pyramid integration will be enabled automatically when you initialize the Sentry SDK. Initialize the Sentry SDK before your app has been initialized:':
          [
            '如果您在依赖项中有 [codePyramid:pyramid] 包，初始化 Sentry SDK 时将自动启用 Pyramid 集成。在初始化应用之前初始化 Sentry SDK：',
          ],
        'When you point your browser to [link:http://localhost:6543/] an error event will be sent to Sentry.':
          [
            '当您在浏览器中访问 [link:http://localhost:6543/] 时，将向 Sentry 发送一个错误事件。',
          ],
        'Raise an unhandled Python exception by inserting a divide by zero expression into your application:':
          ['通过在应用中插入一个除以零的表达式来引发一个未处理的 Python 异常：'],
        'The Quart integration adds support for the [link:Quart Web Framework].': [
          'Quart 集成为 [link:Quart Web Framework] 提供了支持。',
        ],
        'Install [sentrySdkCode:sentry-sdk] from PyPI with the [sentryQuartCode:quart] extra:':
          [
            '通过 PyPI 安装带有 [sentryQuartCode:quart] 额外组件的 [sentrySdkCode:sentry-sdk]：',
          ],
        'Job definition': ['作业定义'],
        'Settings for worker': ['工作进程设置'],
        'Main Python Script': ['主 Python 脚本'],
        'When you run [codeMain:python main.py] a transaction named [codeTrxName:testing_sentry] in the Performance section of Sentry will be created.':
          [
            '运行 [codeMain:python main.py] 时，将在 Sentry 的性能部分创建一个名为 [codeTrxName:testing_sentry] 的事务。',
          ],
        'If you run the RQ worker with [codeWorker:rq worker -c mysettings] a transaction for the execution of [codeFunction:hello()] will be created. Additionally, an error event will be sent to Sentry and will be connected to the transaction.':
          [
            '如果您使用 [codeWorker:rq worker -c mysettings] 运行 RQ 工作进程，将创建一个用于执行 [codeFunction:hello()] 的事务。此外，将向 Sentry 发送一个错误事件并与该事务关联。',
          ],
        'The RQ integration adds support for the [link:RQ Job Queue System].': [
          'RQ 集成为 [link:RQ 作业队列系统] 提供了支持。',
        ],
        'Install [code:sentry-sdk] from PyPI with the [sentryRQCode:rq] extra:': [
          '通过 PyPI 安装带有 [sentryRQCode:rq] 额外组件的 [code:sentry-sdk]：',
        ],
        'If you have the [codeRq:rq] package in your dependencies, the RQ integration will be enabled automatically when you initialize the Sentry SDK.':
          ['如果您在依赖项中有 [codeRq:rq] 包，初始化 Sentry SDK 时将自动启用 RQ 集成。'],
        'Create a file called [code:mysettings.py] with the following content:': [
          '创建一个名为 [code:mysettings.py] 的文件，内容如下：',
        ],
        'Start your worker with:': ['使用以下命令启动工作进程：'],
        'Generally, make sure that the call to [code:init] is loaded on worker startup, and not only in the module where your jobs are defined. Otherwise, the initialization happens too late and events might end up not being reported.':
          [
            '通常，请确保在工作进程启动时加载对 [code:init] 的调用，而不仅仅是在定义作业的模块中。否则，初始化可能太晚，导致事件未被报告。',
          ],
        'To verify, create a simple job and a [code:main.py] script that enqueues the job in RQ, then start an RQ worker to run the job:':
          [
            '为了验证，请创建一个简单的作业和一个 [code:main.py] 脚本，将作业加入 RQ 队列，然后启动一个 RQ 工作进程来运行该作业：',
          ],
        'The Sanic integration adds support for the [link:Sanic Web Framework].': [
          'Sanic 集成为 [link:Sanic Web Framework] 提供了支持。',
        ],
        'Install [sentrySdkCode:sentry-sdk] from PyPI with the [sentrySanicCode:sanic] extra:':
          [
            '通过 PyPI 安装带有 [sentrySanicCode:sanic] 额外组件的 [sentrySdkCode:sentry-sdk]：',
          ],
        "f you're on Python 3.6, you also need the [code:aiocontextvars] package:": [
          '如果您使用的是 Python 3.6，还需要 [code:aiocontextvars] 包：',
        ],
        'If you have the [codeSanic:sanic] package in your dependencies, the Sanic integration will be enabled automatically when you initialize the Sentry SDK. Initialize the Sentry SDK before your app has been initialized:':
          [
            '如果您在依赖项中有 [codeSanic:sanic] 包，初始化 Sentry SDK 时将自动启用 Sanic 集成。在初始化应用之前初始化 Sentry SDK：',
          ],
        'When you point your browser to [link:http://localhost:8000/] an error will be sent to Sentry.':
          [
            '当您在浏览器中访问 [link:http://localhost:8000/] 时，将向 Sentry 发送一个错误。',
          ],
        'It is recommended to use an [link:integration for your particular serverless environment if available], as those are easier to use and capture more useful information.':
          [
            '建议使用适用于您特定无服务器环境的 [link:集成]（如果可用），因为这些集成更容易使用且能捕获更有用的信息。',
          ],
        'If you use a serverless provider not directly supported by the SDK, you can use this generic integration.':
          ['如果您使用的无服务器提供商不受 SDK 直接支持，可以使用此通用集成。'],
        'Apply the [code:serverless_function] decorator to each function that might throw errors:':
          ['将 [code:serverless_function] 装饰器应用于每个可能引发错误的函数：'],
        'Wrap a functions with the [code:serverless_function] that triggers an error:': [
          '使用会引发错误的 [code:serverless_function] 包装函数：',
        ],
        'Now deploy your function. When you now run your function an error event will be sent to Sentry.':
          ['现在部署您的函数。运行函数时，将向 Sentry 发送一个错误事件。'],
        'The Starlette integration adds support for the Starlette Framework.': [
          'Starlette 集成为 Starlette 框架提供了支持。',
        ],
        'Install [sentrySdkCode:sentry-sdk] from PyPI with the [sentryStarletteCode:starlette] extra:':
          [
            '通过 PyPI 安装带有 [sentryStarletteCode:starlette] 额外组件的 [sentrySdkCode:sentry-sdk]：',
          ],
        'If you have the [codeStarlette:starlette] package in your dependencies, the Starlette integration will be enabled automatically when you initialize the Sentry SDK. Initialize the Sentry SDK before your app has been initialized:':
          [
            '如果您在依赖项中有 [codeStarlette:starlette] 包，初始化 Sentry SDK 时将自动启用 Starlette 集成。在初始化应用之前初始化 Sentry SDK：',
          ],
        'The Tornado integration adds support for the [link:Tornado Web Framework].': [
          'Tornado 集成为 [link:Tornado Web Framework] 提供了支持。',
        ],
        'Install [sentrySdkCode:sentry-sdk] from PyPI with the [sentryTornadoCode:tornado] extra:':
          [
            '通过 PyPI 安装带有 [sentryTornadoCode:tornado] 额外组件的 [sentrySdkCode:sentry-sdk]：',
          ],
        'If you have the [codeTornado:tornado] package in your dependencies, the Tornado integration will be enabled automatically when you initialize the Sentry SDK. Initialize the Sentry SDK before your app has been initialized:':
          [
            '如果您在依赖项中有 [codeTornado:tornado] 包，初始化 Sentry SDK 时将自动启用 Tornado 集成。在初始化应用之前初始化 Sentry SDK：',
          ],
        'When you point your browser to [link:http://localhost:8888/] a transaction in the Performance section of Sentry will be created.':
          [
            '当您在浏览器中访问 [link:http://localhost:8888/] 时，将在 Sentry 的性能部分创建一个事务。',
          ],
        'The Tryton integration adds support for the [link:Tryton Framework Server].': [
          'Tryton 集成为 [link:Tryton 框架服务器] 提供了支持。',
        ],
        'To configure the SDK, initialize it with the integration in a custom [code:wsgi.py] script:':
          ['要配置 SDK，请在自定义 [code:wsgi.py] 脚本中使用集成进行初始化：'],
        'In Tryton>=5.4 an error handler can be registered to respond the client with a custom error message including the Sentry event id instead of a traceback.':
          [
            '在 Tryton>=5.4 中，可以注册一个错误处理程序，以便用包含 Sentry 事件 ID 的自定义错误消息（而不是回溯）响应客户端。',
          ],
        'It is recommended to use an [link:integration for your particular WSGI framework if available], as those are easier to use and capture more useful information.':
          [
            '建议使用适用于您特定 WSGI 框架的 [link:集成]（如果可用），因为这些集成更容易使用且能捕获更有用的信息。',
          ],
        'If you use a WSGI framework not directly supported by the SDK, or wrote a raw WSGI app, you can use this generic WSGI middleware. It captures errors and attaches a basic amount of information for incoming requests.':
          [
            '如果您使用的 WSGI 框架不受 SDK 直接支持，或者您编写了一个原始的 WSGI 应用，可以使用此通用 WSGI 中间件。它会捕获错误并为传入的请求附加基本信息。',
          ],
        'Then you can use this generic WSGI middleware. It captures errors and attaches a basic amount of information for incoming requests.':
          ['然后您可以使用此通用 WSGI 中间件。它会捕获错误并为传入的请求附加基本信息。'],
        'Wrap your app with Sentry to automatically instrument it with [touchEventTrakingLink:touch event tracking] and [automaticPerformanceMonitoringLink:automatic tracing]:':
          [
            '使用 Sentry 包装您的应用，以自动使用 [touchEventTrakingLink:触摸事件跟踪] 和 [automaticPerformanceMonitoringLink:自动跟踪] 进行 instrumentation：',
          ],
        'You do not need to do this for Sentry to work or if your app does not have a single parent "App" component.':
          [
            '如果您的应用没有单一的父 "App" 组件，或者您不需要此功能来使 Sentry 工作，则无需执行此操作。',
          ],
        'Then create an intentional error, so you can test that everything is working:': [
          '然后创建一个故意的错误，以测试一切是否正常工作：',
        ],
        'Or, try a native crash with:': ['或者，尝试使用以下方法触发原生崩溃：'],
        'Sentry can measure the performance of your app automatically when instrumented with the following routers:':
          ['当使用以下路由器进行 instrumentation 时，Sentry 可以自动测量应用的性能：'],
        'React Navigation': ['React 导航'],
        'React Navigation V4 and prior': ['React 导航 V4 及更早版本'],
        'React Native Navigation': ['React Native 导航'],
        'Expo Router': ['Expo 路由器'],
        'Additionally, you can create transactions and spans programatically:': [
          '此外，您还可以通过编程方式创建事务和跨度：',
        ],
        'For example:': ['例如：'],
        'For more information, please refer to the [docLink: Sentry React Native documentation].':
          ['有关详细信息，请参阅 [docLink:Sentry React Native 文档]。'],
        "Complete stack traces will be shown for React Native Javascript errors by default using Sentry's [automaticSourceMapsUploadLink:automatic source maps upload]. To set up manual source maps upload follow [guideLink:this guide].":
          [
            '默认情况下，Sentry 将使用 [automaticSourceMapsUploadLink:自动源映射上传] 显示 React Native JavaScript 错误的完整堆栈跟踪。若要设置手动上传源映射，请按照 [guideLink:此指南] 操作。',
          ],
        "You'll also need to upload [debugSymbolsLink:Debug Symbols] generated by the native iOS and Android tooling for native crashes.":
          [
            '您还需要上传由原生 iOS 和 Android 工具生成的 [debugSymbolsLink:调试符号]，用于处理原生崩溃。',
          ],
        "If Sentry has access to your application's source code, it can show snippets of code [italic:(source context)] around the location of stack frames, which helps to quickly pinpoint problematic code.":
          [
            '如果 Sentry 能够访问您的应用源代码，则可以在堆栈帧位置显示代码片段 [italic:(源代码上下文)]，这有助于快速定位问题代码。',
          ],
        'Source Context will be shown for React Native Javascript error by default if source maps are uploaded. To set up source maps upload, follow the [sourceMapsGuideLink:Source Maps guide].':
          [
            '如果上传了源映射，则默认情况下，React Native JavaScript 错误将显示源代码上下文。若要设置源映射上传，请按照 [sourceMapsGuideLink:源映射指南] 操作。',
          ],
        "To enable source context for native errors, you'll need to upload native debug symbols to Sentry by following the instructions at [uploadWithGradleLink:Uploading Source Code Context With Sentry Gradle Plugin] and Uploading Source Context With Xcode.":
          [
            '若要为原生错误启用源代码上下文，您需要按照 [uploadWithGradleLink:使用 Sentry Gradle 插件上传源代码上下文] 中的说明以及使用 Xcode 上传源代码上下文的说明，将原生调试符号上传到 Sentry。',
          ],
        'Sentry captures data by using an SDK within your application’s runtime. If you are using Expo, see [expoLink:How to Add Sentry to Your Expo Project]. This SDK works for both managed and bare projects.':
          [
            'Sentry 通过在应用运行时使用 SDK 来捕获数据。如果您使用的是 Expo，请参阅 [expoLink:如何将 Sentry 添加到您的 Expo 项目]。此 SDK 适用于托管项目和裸项目。',
          ],
        'Run [code:@sentry/wizard]:': ['运行 [code:@sentry/wizard]：'],
        '[wizardLink:Sentry Wizard] will patch your project accordingly, though you can [setupManuallyLink:setup manually] if you prefer.':
          [
            '[wizardLink:Sentry 向导] 将相应地修改您的项目，但如果您愿意，可以选择 [setupManuallyLink:手动设置]。',
          ],
        'iOS Specifics: When you use Xcode, you can hook directly into the build process to upload debug symbols and source maps.':
          ['iOS 特定：使用 Xcode 时，您可以直接连接到构建过程以上传调试符号和源映射。'],
        "Android Specifics: We hook into Gradle for the source map build process. When you run [gradLewCode:./gradlew] assembleRelease, source maps are automatically built and uploaded to Sentry. If you have enabled Gradle's [orgGradleCode:org.gradle.configureondemand] feature, you'll need a clean build, or you'll need to disable this feature to upload the source map on every build by setting [orgGradleCodeConfigureCode:org.gradle.configureondemand=false] or remove it.":
          [
            'Android 特定：我们会连接到 Gradle 的源映射构建过程。当您运行 [gradLewCode:./gradlew] assembleRelease 时，源映射会自动构建并上传到 Sentry。如果您启用了 Gradle 的 [orgGradleCode:org.gradle.configureondemand] 功能，则需要进行一次干净的构建，或者您需要通过设置 [orgGradleCodeConfigureCode:org.gradle.configureondemand=false] 或移除该功能来禁用它，以便在每次构建时上传源映射。',
          ],
        'React Native Profiling beta is available since SDK version 5.8.0.': [
          '自 SDK 版本 5.8.0 起，React Native 概要分析 beta 版可用。',
        ],
        'The "sentry-wizard" will try to add it to your [code:App.tsx]': [
          '“sentry-wizard” 将尝试将其添加到您的 [code:App.tsx] 中。',
        ],
        'The Sentry SDK for Ruby comes as a gem that should be added to your [gemfileCode:Gemfile]:':
          ['Sentry Ruby SDK 以 gem 的形式提供，应添加到您的 [gemfileCode:Gemfile] 中：'],
        'Ruby Profiling beta is available since SDK version 5.9.0. We use the [stackprofLink:stackprof gem] to collect profiles for Ruby. Make sure [stackprofCode:stackprof] is loaded before [sentryRubyCode:sentry-ruby].':
          [
            '自 SDK 版本 5.9.0 起，Ruby 概要分析 beta 版可用。我们使用 [stackprofLink:stackprof gem] 为 Ruby 收集概要分析数据。确保在加载 [sentryRubyCode:sentry-ruby] 之前已加载 [stackprofCode:stackprof]。',
          ],
        'After adding the gems, run the following to install the SDK:': [
          '添加 gem 后，运行以下命令安装 SDK：',
        ],
        'Add [sentryRackCode:use Sentry::Rack::CaptureExceptions] to your [sentryConfigCode:config.ru] or other rackup file (this is automatically inserted in Rails):':
          [
            '将 [sentryRackCode:use Sentry::Rack::CaptureExceptions] 添加到您的 [sentryConfigCode:config.ru] 或其他 rackup 文件中（在 Rails 中会自动插入此内容）：',
          ],
        "This snippet contains a deliberate error and message sent to Sentry and can be used as a test to make sure that everything's working as expected.":
          [
            '此代码片段包含一个故意的错误和发送到 Sentry 的消息，可用作测试以确保一切正常工作。',
          ],
        'In Rails, all uncaught exceptions will be automatically reported. We support Rails 5 and newer.':
          ['在 Rails 中，所有未捕获的异常都会自动报告。我们支持 Rails 5 及更高版本。'],
        'The Sentry SDK for Rails comes as two gems that should be added to your [gemfileCode:Gemfile]:':
          ['Sentry Rails SDK 包含两个 gem，应添加到您的 [gemfileCode:Gemfile] 中：'],
        'Run the following Rails generator to create the initializer file [code:config/initializers/sentry.rb].':
          [
            '运行以下 Rails 生成器以创建初始化文件 [code:config/initializers/sentry.rb]：',
          ],
        'You can then change the Sentry configuration as follows:': [
          '然后，您可以如下更改 Sentry 配置：',
        ],
        "In Rails, being able to serve dynamic pages in response to errors is required to pass the needed [codeEvent:event_id] to the JavaScript SDK. [link:Read our docs] to learn more. Once you're able to serve dynamic exception pages, you can support user feedback.":
          [
            '在 Rails 中，为了将所需的 [codeEvent:event_id] 传递给 JavaScript SDK，必须能够响应错误提供动态页面。[link:阅读我们的文档] 以了解更多信息。一旦能够提供动态异常页面，就可以支持用户反馈。',
          ],
        'Additionally, you need the template that brings up the dialog:': [
          '此外，您还需要用于显示对话框的模板：',
        ],
        'To use Sentry Ruby all you need is your DSN. Like most Sentry libraries it will honor the [sentryDSN:SENTRY_DSN] environment variable. You can find it on the project settings page under API Keys. You can either export it as environment variable or manually configure it with [sentryInit:Sentry.init]:':
          [
            '要使用 Sentry Ruby，您只需要 DSN。像大多数 Sentry 库一样，它会识别 [sentryDSN:SENTRY_DSN] 环境变量。您可以在项目设置页面的 API 密钥部分找到它。您可以将其导出为环境变量，也可以使用 [sentryInit:Sentry.init] 手动配置它：',
          ],
        'To add Sentry to your Rust project you just need to add a new dependency to your [code:Cargo.toml]:':
          [
            '要将 Sentry 添加到您的 Rust 项目中，只需在 [code:Cargo.toml] 中添加一个新依赖项：',
          ],
        '[code:Sentry.init()] will return you a guard that when freed, will prevent process exit until all events have been sent (within a timeout).':
          [
            '[code:Sentry.init()] 会返回一个守护程序，当它被释放时，在所有事件发送完成（或超时）之前，会阻止进程退出。',
          ],
        'The quickest way to verify Sentry in your Rust application is to cause a panic:':
          ['验证 Rust 应用中的 Sentry 的最快速方法是触发一个恐慌：'],
        'You need at least version 0.32.1 of the [codeSentry:sentry] or  [codeSentryCore:sentry-core] crates installed. Enable the [codeFeature:UNSTABLE_metrics] feature.':
          [
            '您需要安装 [codeSentry:sentry] 或 [codeSentryCore:sentry-core] 的 0.32.1 或更高版本的 crate。启用 [codeFeature:UNSTABLE_metrics] 功能。',
          ],
        "Then you'll be able to add metrics as [codeCounters:counters], [codeSets:sets], [codeDistribution:distributions], and [codeGauge:gauges]. These are available under the [codeNamespace:Sentry.metrics] namespace. Try out this example:":
          [
            '这样您就可以将指标添加为 [codeCounters:计数器]、[codeSets:集合]、[codeDistribution:分布] 和 [codeGauge:测量仪]。这些位于 [codeNamespace:Sentry.metrics] 命名空间下。试试这个示例：',
          ],
        'You need a minimum version [codeVersion:2.0.0] of the Unity SDK installed.': [
          '您需要安装 Unity SDK 的最低版本为 [codeVersion:2.0.0]。',
        ],
        'Once the SDK is installed or updated, you can enable the experimental metrics feature and code locations being emitted in your RuntimeConfiguration.':
          [
            '安装或更新 SDK 后，您可以在 RuntimeConfiguration 中启用实验性指标功能和代码位置的输出。',
          ],
        "Install the package via the [link:Unity Package Manager] using a Git URL to Sentry's SDK repository:":
          [
            '通过 [link:Unity 包管理器] 使用指向 Sentry SDK 仓库的 Git URL 安装该软件包：',
          ],
        'The Unity SDK now supports line numbers for IL2CPP. The feature is currently in beta, but you can enable it at [code:Tools -> Sentry -> Advanced -> IL2CPP] line numbers. To learn more check out our [link:docs].':
          [
            'Unity SDK 现在支持 IL2CPP 的行号。此功能目前处于测试阶段，但您可以在 [code:Tools -> Sentry -> Advanced -> IL2CPP] 行号中启用它。欲了解更多，请查看我们的 [link:文档]。',
          ],
        "Access the Sentry configuration window by going to Unity's top menu: [toolsCode:Tools] > [sentryCode:Sentry] and enter the following DSN:":
          [
            '要访问 Sentry 配置窗口，请转到 Unity 的顶部菜单：[toolsCode:Tools] > [sentryCode:Sentry]，然后输入以下 DSN：',
          ],
        "And that's it! Now Sentry can capture errors automatically.": [
          '就这样！现在 Sentry 可以自动捕获错误了。',
        ],
        'If you like additional contexts you could enable [link:Screenshots].': [
          '如果您喜欢其他上下文，可以启用 [link:截图]。',
        ],
        'Once it is configured with the DSN you can call the SDK from anywhere:': [
          '一旦配置了 DSN，就可以从任何地方调用 SDK：',
        ],
        Troubleshooting: ['故障排除'],
        "Confirm the URL doesn't have a trailing whitespace at the end. The Unity Package Manager will fail to find the package if a trailing whitespace is appended.":
          [
            '请确认 URL 末尾没有多余的空格。如果附带了尾随空格，Unity 包管理器将无法找到该包。',
          ],
        "If you're running into any kind of issue please check out our [troubleshootingLink:troubleshooting page] or [raiseAnIssueLink:raise an issue].":
          [
            '如果您遇到任何问题，请查看我们的 [troubleshootingLink:故障排除页面] 或 [raiseAnIssueLink:提交问题]。',
          ],
        'Add the configuration section:': ['添加配置部分：'],
        'If a [crashReportCode:CrashReportClient] section already exists, simply changing the value of [dataRouterUrlCode:DataRouterUrl] is enough.':
          [
            '如果已存在 [crashReportCode:CrashReportClient] 部分，则只需更改 [dataRouterUrlCode:DataRouterUrl] 的值即可。',
          ],
        'Upload Debug Symbols': ['上传调试符号'],
        'To allow Sentry to fully process native crashes and provide you with symbolicated stack traces, you need to upload [debugInformationItalic:调试信息文件] (sometimes also referred to as [debugSymbolsItalic:调试符号] or just [symbolsItalic:符号]). We recommend uploading debug information during your build or release process.':
          [
            '为了让 Sentry 完整处理原生崩溃并为您提供符号化的堆栈跟踪，您需要上传调试信息文件（有时也称为调试符号或符号）。我们建议在构建或发布过程中上传调试信息。',
          ],
        "For all libraries where you'd like to receive symbolication, [strong:you need to provide debug information]. This includes dependencies and operating system libraries.":
          [
            '对于所有您希望接收符号化的库，[strong:您需要提供调试信息]。这包括依赖项和操作系统库。',
          ],
        'In addition to debug information files, Sentry needs [italic:call frame information] (CFI) to extract accurate stack traces from minidumps of optimized release builds. CFI is usually part of the executables and not copied to debug symbols. Unless you are uploading Breakpad symbols, be sure to also include the binaries when uploading files to Sentry':
          [
            '除了调试信息文件外，Sentry 还需要 [italic:调用帧信息]（CFI），以便从优化的发布构建的 minidump 中提取准确的堆栈跟踪。CFI 通常是可执行文件的一部分，不会复制到调试符号中。除非您上传的是 Breakpad 符号，否则在向 Sentry 上传文件时，请确保包含二进制文件。',
          ],
        'For more information on uploading debug information and their supported formats, check out our [link:Debug Information Files documentation].':
          [
            '有关上传调试信息及其支持格式的详细信息，请参阅我们的 [link:调试信息文件文档]。',
          ],
        "Download the latest plugin sources from the [link:Releases] page and place it in the project's 'Plugins' directory. On the next project launch, UE will prompt to build Sentry module.":
          [
            '从 [link:发布页面] 下载最新的插件源代码，并将其放置在项目的 “插件” 目录中。下次启动项目时，UE 将提示构建 Sentry 模块。',
          ],
        'After the successful build, in the editor navigate to the [strong:Project Settings > Plugins > Code Plugins] menu and check whether the Sentry plugin is enabled.':
          [
            '构建成功后，在编辑器中转到 [strong:项目设置 > 插件 > 代码插件] 菜单并检查是否已启用 Sentry 插件。',
          ],
        "To access the plugin API from within C++, add Sentry support to the build script (MyProject.build.cs):'":
          [
            '要从 C++ 内部访问插件 API，请在构建脚本 (MyProject.build.cs) 中添加对 Sentry 的支持：',
          ],
        "Access the Sentry configuration window by going to editor's menu: [strong:Project Settings > Plugins > Sentry] and enter the following DSN:":
          [
            '要访问 Sentry 配置窗口，请转到编辑器菜单：[strong:项目设置 > 插件 > Sentry] 并输入以下 DSN：',
          ],
        'Once everything is configured you can call the plugin API from both C++ and blueprints:':
          ['配置完成后，您可以从 C++ 和蓝图中调用插件 API：'],
      };
      var trans4 = {
        'Crash Reporter Client': ['崩溃报告客户端'],
        'For Windows and Mac, [link:Crash Reporter Client] provided along with Unreal Engine has to be configured in order to capture errors automatically.':
          [
            '对于 Windows 和 Mac，需要配置随 Unreal Engine 提供的 [link:崩溃报告客户端] 以自动捕获错误。',
          ],
        'Include the UE Crash Reporter': ['包含 UE 崩溃报告'],
        'You can add the crash reporter client to your game in [strong:Project Settings].':
          ['您可以在 [strong:项目设置] 中将崩溃报告客户端添加到您的游戏中。'],
        'The option is located under [strong:Project > Packaging]; select "show advanced" followed by checking the box for "Include Crash Reporter".':
          [
            '该选项位于 [strong:项目 > 打包] 下；选择“显示高级”选项，然后勾选“包含崩溃报告”复选框。',
          ],
        'Debug Information': ['调试信息'],
        'To get the most out of Sentry, crash reports must include debug information. In order for Sentry to be able to process the crash report and translate memory addresses to meaningful information like function names, module names, and line numbers, the crash itself must include debug information. In addition, symbols need to be uploaded to Sentry.':
          [
            '为了充分利用 Sentry，崩溃报告必须包含调试信息。为了让 Sentry 能够处理崩溃报告并将内存地址转换为有意义的信息（如函数名、模块名和行号），崩溃本身必须包含调试信息。此外，还需要将符号上传到 Sentry。',
          ],
        "The option is also located under [strong:Project > Packaging]; select 'show advanced' followed by checking the box for 'Include Debug Files'.":
          [
            '该选项同样位于 [strong:项目 > 打包] 下；选择“显示高级”选项，然后勾选“包含调试文件”复选框。',
          ],
        'Configure the Crash Reporter Endpoint': ['配置崩溃报告端点'],
        "Now that the crash reporter and debug files are included, UE needs to know where to send the crash. For that, add the Sentry 'Unreal Engine Endpoint' from the 'Client Keys' settings page to the game's configuration file. This will include which project in Sentry you want to see crashes displayed in. That's accomplished by configuring the [code:CrashReportClient] in the [italic:DefaultEngine.ini] file. Changing the engine is necessary for this to work. Edit the file:":
          [
            '现在崩溃报告和调试文件已经包含在内，UE 需要知道将崩溃发送到哪里。为此，请将 Sentry 的“Unreal Engine 端点”从“客户端密钥”设置页面添加到游戏的配置文件中。这将确定您希望在 Sentry 的哪个项目中显示崩溃。这是通过在 [italic:DefaultEngine.ini] 文件中配置 [code:CrashReportClient] 来实现的。为了使此功能正常工作，需要更改引擎。编辑文件：',
          ],
        'Fine Tune Alerts': ['精细调整警报'],
        'User Auth Tokens': ['用户认证令牌'],
        'Edit User Auth Token': ['编辑用户认证令牌'],
        'Tags & Context': ['标签与上下文'],
        'Metrics Details': ['指标详情'],
        'Artifact Bundles': ['工件包'],
        'Artifact Bundle': ['工件包'],
        'Release Bundles': ['发布包'],
        'Release Bundle': ['发布包'],
        'Issue Grouping': ['问题分组'],
        'Loader Script': ['加载器脚本'],
        HPKP: ['HTTP 公钥固定'],
        'Integration Details': ['集成详情'],
        'Auth Providers': ['认证提供者'],
        Relay: ['中继'],
        'Configure Integration': ['配置集成'],
        'Custom Integrations': ['自定义集成'],
        'Create Integration': ['创建集成'],
        'Edit Integration': ['编辑集成'],
        'Create New Auth Token': ['创建新的认证令牌'],
        'Edit Auth Token': ['编辑认证令牌'],
        'Early Features': ['早期功能'],
        'Cannot assign to non-team member': ['无法分配给非团队成员'],
        'Deleted %d Issues': ['已删除 %d 个问题'],
        'Deleted %s': ['已删除 %s'],
        'Merged %d Issues': ['已合并 %d 个问题'],
        '[value] per issue': ['每个问题的 [value]'],
        'Unable to fetch custom performance measurements': ['无法获取自定义性能测量'],
        'Matching search filters': ['匹配搜索过滤器'],
        '%shr': ['% 缩写形式'],
        '%smin': ['%s 最小值'],
        '%ss': ['%s 秒'],
        '%sms': ['%sms 毫秒'],
        '%swk': ['%swk 周'],
        '%sd': ['%sd 天'],
        'Add a function that groups events to use this view.': [
          '添加一个分组事件的函数以使用此视图。',
        ],
        'Change the date rage to at least 1 day to use this view.': [
          '将日期范围更改为至少 1 天以使用此视图。',
        ],
        true: ['true'],
        false: ['false'],
        '(empty string)': ['（空字符串）'],
        'Toggle star for team': ['为团队切换星标'],
        'Total Period': ['总计周期'],
        'Previous Period': ['上一个周期'],
        'Top 5 Period': ['前五周期'],
        'Total Daily': ['总计每日'],
        'Top 5 Daily': ['每日前五'],
        'Bar Chart': ['条形图'],
        'This replay may have been rate limited or deleted.': [
          '此回放可能已被限速或删除。',
        ],
        '(missing)': ['（缺失）'],
        'View Replay': ['查看回放'],
        minute: ['分钟'],
        second: ['秒'],
        millisecond: ['毫秒'],
        mo: ['月'],
        w: ['周'],
        week: ['周'],
        day: ['天'],
        h: ['小时'],
        hour: ['小时'],
        sec: ['秒'],
        secs: ['秒'],
        month: ['月'],
        months: ['月'],
        yr: ['年'],
        'The issues bookmarked by a user ID': ['由用户 ID 收藏的问题'],
        'Name of the browser': ['浏览器名称'],
        'CPU architecture': ['CPU 架构'],
        'Indicates remaining battery life': ['指示剩余电池寿命'],
        'Brand of device': ['设备品牌'],
        'Charging at the time of the event': ['事件发生时正在充电'],
        'The estimated performance level of the device, graded low, medium, or high': [
          '设备的估计性能等级，分为低、中或高',
        ],
        'Model name across generations': ['跨代的型号名称'],
        "The locale of the user's device": ['用户设备的区域设置'],
        'Internal hardware revision': ['内部硬件修订版'],
        'Descriptor details': ['描述符详细信息'],
        'Online at the time of the event': ['事件发生时处于在线状态'],
        'Portrait or landscape view ': ['纵向或横向视图 '],
        'Pixel density of the device screen': ['设备屏幕的像素密度'],
        'Dots per inch of the device screen': ['设备屏幕的每英寸点数'],
        'Height of the device screen in pixels': ['设备屏幕的像素高度'],
        'Width of the device screen in pixels': ['设备屏幕的像素宽度'],
        'Indicates if it occured on a simulator': ['指示是否发生在模拟器上'],
        'Unique device identifier': ['唯一设备标识符'],
        'Distinguishes between build or deployment variants of the same release of an application.':
          ['区分同一应用程序发布的构建或部署变体。'],
        'The environment the event was seen in': ['事件发生的环境'],
        'Determines handling status of the error': ['确定错误的处理状态'],
        'The mechanism that created the error': ['创建错误的机制'],
        'The type of exception': ['异常类型'],
        'Determines unhandling status of the error': ['确定错误的未处理状态'],
        'Original value that exhibits error': ['显示错误的原始值'],
        'The datetime that the error was received': ['收到错误的日期时间'],
        'Indicates if the error occurred on the main thread': [
          '指示错误是否发生在主线程',
        ],
        'Date and time of the event': ['事件的日期和时间'],
        'Type of event (Errors, transactions, csp and default)': [
          '事件类型（错误、事务、csp 和默认）',
        ],
        'Full name of the city': ['城市的全名'],
        'Country code based on ISO 3166-1': ['基于 ISO 3166-1 的国家代码'],
        'Full name of the country': ['国家的全名'],
        'Full name of the subdivision': ['行政区划的全名'],
        'Method of the request that created the event': ['创建事件的请求方法'],
        'The web page the resource was requested from': ['请求资源的网页'],
        'Type of response (i.e., 200, 404)': ['响应类型（例如，200, 404）'],
        'Full URL of the request without parameters': ['不含参数的请求完整 URL'],
        'The event identification number': ['事件识别号码'],
        'The properties of an issue (i.e. Resolved, unresolved)': [
          '问题的属性（例如，已解决、未解决）',
        ],
        'The issue identification short code': ['问题识别简码'],
        'Category of issue (error or performance)': ['问题类别（错误或性能）'],
        'The priority of the issue': ['问题的优先级'],
        'Type of problem the issue represents (i.e. N+1 Query)': [
          '问题代表的问题类型（例如，N+1 查询）',
        ],
        'Issues last seen at a given time': ['问题最后出现在给定时间'],
        'Severity of the event (i.e., fatal, error, warning)': [
          '事件的严重性（例如，致命、错误、警告）',
        ],
        'Location of error': ['错误位置'],
        'Error message or transaction name': ['错误消息或事务名称'],
        'Build and kernel version': ['构建和内核版本'],
        'Name of the build': ['构建名称'],
        'Version number': ['版本号'],
        'Name of the platform': ['平台名称'],
        'The ID of an associated profile': ['相关配置文件的 ID'],
        'Issues first seen in a given release': ['问题首次出现在给定发布版本'],
        'Issues first seen at a given time': ['问题首次出现在给定时间'],
        'Determines if a tag or field exists in an event': [
          '确定事件中是否存在标签或字段',
        ],
        'Name of the Operating System': ['操作系统的名称'],
        'The version of your code deployed to an environment': ['部署到环境中的代码版本'],
        'The full version number that identifies the iteration': ['标识迭代的完整版本号'],
        'The identifier unique to the project or application': [
          '项目或应用程序的唯一标识符',
        ],
        'Stage of usage (i.e., adopted, replaced, low)': [
          '使用阶段（例如，采用、替换、低）',
        ],
        'An abbreviated version number of the build': ['构建的简写版本号'],
        'The ID of an associated Session Replay': ['相关会话回放的 ID'],
        'Name of the platform that sent the event': ['发送事件的平台名称'],
        'Version of the platform that sent the event': ['发送事件的平台版本'],
        'Absolute path to the source file': ['源文件的绝对路径'],
        'Column number of the call starting at 1': ['调用的列号，从 1 开始'],
        'Relative path to the source file from the root directory': [
          '从根目录到源文件的相对路径',
        ],
        'Name of function being called': ['正在调用的函数名称'],
        'Indicates if frame is related to relevant code in stack trace': [
          '指示帧是否与堆栈跟踪中的相关代码有关',
        ],
        'Line number of the call starting at 1': ['调用的行号，从 1 开始'],
        'Platform specific module path': ['平台特定的模块路径'],
        'The package the frame is from': ['帧来自的包'],
        'Number of frames per stacktrace': ['每个堆栈跟踪的帧数'],
        'Total number of events': ['事件的总数'],
        'The time an event finishes': ['事件结束的时间'],
        'Rounded down to the nearest hour': ['四舍五入到最近的小时'],
        'Rounded down to the nearest day': ['四舍五入到最近的一天'],
        'Error or transaction name identifier': ['错误或事务名称标识符'],
        'The trace identification number': ['跟踪识别号码'],
        'The total number of events for the current query': ['当前查询的事件总数'],
        'Span identification number of the parent to the event': [
          '事件的父级的跨度识别号码',
        ],
        'Span identification number of the root span': ['根跨度的识别号码'],
        'Sample rate of the trace in the SDK between 0 and 1': [
          'SDK 中跟踪的采样率，介于 0 和 1 之间',
        ],
        'Short code identifying the type of operation the span is measuring': [
          '简短代码，标识跨度正在测量的操作类型',
        ],
        'Duration of the transaction': ['事务的持续时间'],
        'Describes the status of the span/transaction': ['描述跨度/事务的状态'],
        'Crash type of an Unreal event': ['虚幻事件的崩溃类型'],
        'User identification value': ['用户识别值'],
        'The first user field available of email, username, ID, and IP': [
          '可用的用户字段中的第一个，包括电子邮件、用户名、ID 和 IP',
        ],
        'Email address of the user': ['用户的电子邮件地址'],
        'Application specific internal identifier of the user': [
          '用户的应用特定内部标识符',
        ],
        'IP Address of the user': ['用户的 IP 地址'],
        'Username of the user': ['用户的用户名'],
        'Segment of the user': ['用户的细分'],
        'Indicates if the app is in the foreground or background': [
          '指示应用是在前台还是后台',
        ],
        'Duration of the function': ['函数的持续时间'],
        'Amount of activity in the replay from 0 to 10': ['回放中的活动量，从 0 到 10'],
        'Version number of the browser': ['浏览器的版本号'],
        'Number of dead clicks in the replay': ['回放中的无效点击次数'],
        'Number of rage clicks in the replay': ['回放中的愤怒点击次数'],
        'Number of errors in the replay': ['回放中的错误次数'],
        'Number of segments in the replay': ['回放中的段落数'],
        'Number of urls visited within the replay': ['回放中访问的 URL 数'],
        'Duration of the replay, in seconds': ['回放的持续时间，以秒为单位'],
        'Error instance': ['错误实例'],
        'Version number of the Operating System': ['操作系统的版本号'],
        'Whether you have seen this replay before (true/false)': [
          '您是否以前见过此回放（true/false）',
        ],
        'List of urls that were visited within the replay': ['回放中访问的 URL 列表'],
        '`alt` of an element that was clicked': ['被点击元素的 `alt` 属性'],
        '`class` of an element that was clicked': ['被点击元素的 `class` 属性'],
        '`id` of an element that was clicked': ['被点击元素的 `id` 属性'],
        '`aria-label` of an element that was clicked': ['被点击元素的 `aria-label` 属性'],
        '`role` of an element that was clicked': ['被点击元素的 `role` 属性'],
        'query using CSS selector-like syntax, supports class, id, and attribute selectors':
          ['使用类似于 CSS 选择器的语法进行查询，支持类、ID 和属性选择器'],
        '`tag` of an element that was clicked': ['被点击元素的 `tag` 属性'],
        '`data-testid` or `data-test-id` of an element that was clicked': [
          '被点击元素的 `data-testid` 或 `data-test-id` 属性',
        ],
        'textContent of an element that was clicked': ['被点击元素的 textContent'],
        '`title` of an element that was clicked': ['被点击元素的 `title` 属性'],
        'the name of the frontend component that was clicked': ['被点击的前端组件的名称'],
        'Contact email of the user writing the feedback': [
          '提供反馈的用户的联系电子邮件',
        ],
        'Language preference of the user': ['用户的语言偏好'],
        'Timezone the feedback was submitted from': ['提交反馈的时区'],
        'Message written by the user providing feedback': ['提供反馈的用户写的消息'],
        'Name of the user writing feedback': ['提供反馈的用户的名称'],
        'Name of the operating system': ['操作系统的名称'],
        'Version number of the operating system': ['操作系统的版本号'],
        'URL of the page that the feedback is triggered on': ['触发反馈的页面的 URL'],
        'count of events': ['事件计数'],
        'Unique count of the field values': ['字段值的唯一计数'],
        'Count of unique miserable users': ['唯一痛苦用户的计数'],
        'Count of events matching the parameter conditions': ['匹配参数条件的事件计数'],
        'Count of web vitals with a specific status': ['具有特定状态的网络核心指标计数'],
        'Events per second': ['每秒事件数'],
        'Failed event percentage based on transaction.status': [
          '基于 transaction.status 的失败事件百分比',
        ],
        'Failed event count based on transaction.status': [
          '基于 transaction.status 的失败事件计数',
        ],
        'Returns the minimum value of the selected field': ['返回所选字段的最小值'],
        'Returns maximum value of the selected field': ['返回所选字段的最大值'],
        'Returns the total value for the selected field': ['返回所选字段的总值'],
        'Not Recommended, a random field value': ['不推荐，随机字段值'],
        'Returns the 50th percentile of the selected field': [
          '返回所选字段的第 50 个百分位数',
        ],
        'Returns the 75th percentile of the selected field': [
          '返回所选字段的第 75 个百分位数',
        ],
        'Returns the 90th percentile of the selected field': [
          '返回所选字段的第 90 个百分位数',
        ],
        'Returns the 95th percentile of the selected field': [
          '返回所选字段的第 95 个百分位数',
        ],
        'Returns the 99th percentile of the selected field': [
          '返回所选字段的第 99 个百分位数',
        ],
        'Returns the 100th percentile of the selected field': [
          '返回所选字段的第 100 个百分位数',
        ],
        'Returns the percentile of the selected field': ['返回所选字段的百分位数'],
        'Returns averages for a selected field': ['返回所选字段的平均值'],
        'Performance score based on a duration threshold': ['基于持续时间阈值的性能分数'],
        'User-weighted performance metric that counts the number of unique users who were frustrated':
          ['基于用户的性能指标，统计感到沮丧的唯一用户数量'],
        'Issues last seen at a date and time': ['问题最后出现在日期和时间'],
        'Web Vital First Paint': ['网络核心指标首次绘制'],
        'Web Vital First Contentful Paint': ['网络核心指标首次内容绘制'],
        'Web Vital Largest Contentful Paint': ['网络核心指标最大内容绘制'],
        'Web Vital First Input Delay': ['网络核心指标首次输入延迟'],
        'Web Vital Cumulative Layout Shift': ['网络核心指标累积布局偏移'],
        'Web Vital Time To First Byte': ['网络核心指标首次字节时间'],
        'Time between start of request to start of response': [
          '从请求开始到响应开始的时间',
        ],
        'First launch (not in memory and no process exists)': [
          '首次启动（不在内存中且没有进程存在）',
        ],
        'Already launched (partial memory and process may exist)': [
          '已启动（部分内存和进程可能存在）',
        ],
        'Total number of frames': ['帧的总数'],
        'Number of slow frames': ['慢帧的数量'],
        'Number of frozen frames': ['冻结帧的数量'],
        'Number of slow frames out of the total': ['总慢帧的数量'],
        'Number of frozen frames out of the total': ['总冻结帧的数量'],
        'Count of slow Javascript event loops (React Native)': [
          '慢 JavaScript 事件循环的计数（React Native）',
        ],
        'Total stall duration (React Native)': ['总停滞时间（React Native）'],
        'Duration of slowest Javascript event loop (React Native)': [
          '最慢 JavaScript 事件循环的持续时间（React Native）',
        ],
        'Total stall duration out of the total transaction duration (React Native)': [
          '总停滞时间占总事务持续时间的比例（React Native）',
        ],
        'The time between application launch and complete display of all resources and views':
          ['从应用启动到所有资源和视图完全显示的时间'],
        'The time it takes for an application to produce its first frame': [
          '应用生成第一帧所需的时间',
        ],
        'Web Vital Interaction to Next Paint': ['网络核心指标交互到下次绘制'],
        'Cumulative time based on the browser operation': ['基于浏览器操作的累积时间'],
        'Cumulative time based on the database operation': ['基于数据库操作的累积时间'],
        'Cumulative time based on the http operation': ['基于 HTTP 操作的累积时间'],
        'Cumulative time based on the resource operation': ['基于资源操作的累积时间'],
        'Cumulative time based on the ui operation': ['基于 UI 操作的累积时间'],
        'The type of span action, e.g `SELECT` for a SQL span or `POST` for an HTTP span':
          ['跨度操作的类型，例如 SQL 跨度的 `SELECT` 或 HTTP 跨度的 `POST`'],
        'Parameterized and scrubbed description of the span': [
          '参数化和清理后的跨度描述',
        ],
        'General scope of the span’s action, i.e. the tables involved in a `db` span or the host name in an `http` span':
          ['跨度操作的一般范围，例如 `db` 跨度中涉及的表或 `http` 跨度中的主机名'],
        'The total time taken by the span': ['跨度所花费的总时间'],
        'Unique hash of the span’s description': ['跨度描述的唯一哈希值'],
        'The Insights module that the span is associated with, e.g `cache`, `db`, `http`, etc.':
          ['跨度关联的洞察模块，例如 `cache`、`db`、`http` 等'],
        'The operation of the span, e.g `http.client`, `middleware`': [
          '跨度的操作，例如 `http.client`、`middleware`',
        ],
        'The duration of the span excluding the duration of its child spans': [
          '跨度的持续时间，不包括其子跨度的持续时间',
        ],
        'Status of the operation the span represents': ['跨度所代表的操作的状态'],
        'The HTTP response status code': ['HTTP 响应状态码'],
        'The age of the issue in relative time': ['问题的相对时间年龄'],
        'Assignee of the issue as a user ID': ['作为用户 ID 的问题负责人'],
        'Assignee or suggestee of the issue as a user ID': [
          '作为用户 ID 的问题负责人或建议负责人',
        ],
        'URL request': ['URL 请求'],
        'cache query': ['缓存查询'],
        'database query': ['数据库查询'],
        'application task': ['应用任务'],
        serializer: ['序列化器'],
        middleware: ['中间件'],
        resource: ['资源'],
        'JavaScript file': ['JavaScript 文件'],
        stylesheet: ['样式表'],
        image: ['图像'],
        span: ['跨度'],
        request: ['请求'],
        query: ['查询'],
        task: ['任务'],
        'loading…': ['加载中…'],
        'Update to the latest version of our Slack app to get access to personal and team notifications.':
          ['更新到我们 Slack 应用的最新版本以获取个人和团队通知。'],
        'Not yet supported for cron issues': ['尚未支持用于定时任务问题'],
        'How to fix ChunkLoadErrors': ['如何修复 ChunkLoadErrors'],
        '[errorTypes] occur when the global objects `window` or `document` are not defined. This typically happens in server-side rendering (SSR) or other non-browser environments. To learn more about how to fix these errors, check out these resources:':
          [
            '[错误类型] 发生在全球对象 `window` 或 `document` 未定义时。这通常发生在服务器端渲染（SSR）或其他非浏览器环境中。要了解更多关于如何修复这些错误的信息，请查看以下资源：',
          ],
        'How to fix Document/Window Object Error': ['如何修复 Document/Window 对象错误'],
        '[errorTypes] occur in Next.js applications when trying to redirect to the same page. To learn more about how to fix these errors, check out these resources:':
          [
            '[错误类型] 发生在 Next.js 应用程序中尝试重定向到同一页面时。要了解更多关于如何修复这些错误的信息，请查看以下资源：',
          ],
        'Fixing handleHardNavigation errors in Next.js': [
          '在 Next.js 中修复 handleHardNavigation 错误',
        ],
        '[errorTypes] occur in Next.js applications when an imported module cannot be accessed. To learn more about how to fix these errors, check out these resources:':
          [
            '[错误类型] 发生在 Next.js 应用程序中当导入的模块无法访问时。要了解更多关于如何修复这些错误的信息，请查看以下资源：',
          ],
        'Fixing "module not found" errors in Next.js': [
          '在 Next.js 中修复“模块未找到”错误',
        ],
        '[errorTypes] occur in Next.js applications when a route is statically generated, but uses dynamic server values at runtime. To learn more about how to fix these errors, check out these resources:':
          [
            '[错误类型] 发生在 Next.js 应用程序中当路由是静态生成的，但在运行时使用动态服务器值时。要了解更多关于如何修复这些错误的信息，请查看以下资源：',
          ],
        'Resolving "app/ Static to Dynamic Error" in Next.js': [
          '在 Next.js 中解决“app/ 静态到动态错误”',
        ],
        '[errorTypes] occur in React based applications when the server-rendered HTML does not match what is expected on the client. To learn more about how to fix these errors, check out these resources:':
          [
            '[错误类型] 发生在基于 React 的应用程序中当服务器渲染的 HTML 与客户端预期不符时。要了解更多关于如何修复这些错误的信息，请查看以下资源：',
          ],
        'Resolving Hydration Errors': ['解决水合错误'],
        '[errorTypes] occur on Apple devices when there is an error with Fetch API. To learn more about how to fix these errors, check out these resources:':
          [
            '[错误类型] 发生在 Apple 设备上当 Fetch API 出现错误时。要了解更多关于如何修复这些错误的信息，请查看以下资源：',
          ],
        'Fixing Load Failed errors in JavaScript': [
          '在 JavaScript 中修复 Load Failed 错误',
        ],
        '[errorTypes] occur when there is an error with Fetch API. To learn more about how to fix these errors, check out these resources:':
          [
            '[错误类型] 发生在 Fetch API 出现错误时。要了解更多关于如何修复这些错误的信息，请查看以下资源：',
          ],
        'Fixing Failed to Fetch errors in JavaScript': [
          '在 JavaScript 中修复 Failed to Fetch 错误',
        ],
        '[errorTypes] occur when there is an error in a Fetch API call. To learn more about how to fix these errors, check out these resources:':
          [
            '[错误类型] 发生在 Fetch API 调用出现错误时。要了解更多关于如何修复这些错误的信息，请查看以下资源：',
          ],
        'Fixing Socket Hang Up errors': ['修复 Socket Hang Up 错误'],
        '[errorTypes] occur in Next.js applications when the useRouter hook is used incorrectly. To learn more about how to fix these errors, check out these resources:':
          [
            '[错误类型] 发生在 Next.js 应用程序中当 useRouter 钩子使用不当时。要了解更多关于如何修复这些错误的信息，请查看以下资源：',
          ],
        'Fixing "NextRouter was not mounted" errors in Next.js': [
          '在 Next.js 中修复“NextRouter 未挂载”错误',
        ],
        '[errorTypes] occur in Python applications when a variable is defined in both global and local contexts. To learn more about how to fix these errors, check out these resources:':
          [
            '[错误类型] 发生在 Python 应用程序中当变量在全局和局部上下文中都被定义时。要了解更多关于如何修复这些错误的信息，请查看以下资源：',
          ],
        'Fixing "UnboundLocalError" errors in Python': [
          '在 Python 中修复“UnboundLocalError”错误',
        ],
        '[errorTypes] occur in Node.js applications when an imported module cannot be found. To learn more about how to fix these errors, check out these resources:':
          [
            '[错误类型] 发生在 Node.js 应用程序中当导入的模块找不到时。要了解更多关于如何修复这些错误的信息，请查看以下资源：',
          ],
        'Fixing "Cannot find module" errors in Node.js': [
          '在 Node.js 中修复“Cannot find module”错误',
        ],
        '[errorTypes] occur in Python applications when a module that does not exist is imported. To learn more about how to fix these errors, check out these resources:':
          [
            '[错误类型] 发生在 Python 应用程序中当导入一个不存在的模块时。要了解更多关于如何修复这些错误的信息，请查看以下资源：',
          ],
        'Fixing "ImportError: No module named" errors in Python': [
          '在 Python 中修复“ImportError: No module named”错误',
        ],
        '[errorTypes] occur in Python applications when a string is modified in place. To learn more about how to fix these errors, check out these resources:':
          [
            '[错误类型] 发生在 Python 应用程序中当字符串被就地修改时。要了解更多关于如何修复这些错误的信息，请查看以下资源：',
          ],
        'Fixing "\'str\' object does not support item assignment" errors in Python': [
          "在 Python 中修复“'str' 对象不支持项目分配”错误",
        ],
        '[errorTypes] occur in React when modules are imported incorrectly. To learn more about how to fix these errors, check out these resources:':
          [
            '[错误类型] 发生在 React 中当模块导入不正确时。要了解更多关于如何修复这些错误的信息，请查看以下资源：',
          ],
        'Fixing "Invariant Violation: Element type is invalid" errors in React': [
          '在 React 中修复“Invariant Violation: Element type is invalid”错误',
        ],
        Evidence: ['证据'],
        "N+1 queries are extraneous queries (N) caused by a single, initial query (+1). In the Span Evidence above, we've identified the parent span where the extraneous spans are located and the extraneous spans themselves. To learn more about how to fix N+1 problems, check out these resources:":
          [
            'N+1 查询是由单个初始查询（+1）引起的额外查询（N）。在上面的跨度证据中，我们已经确定了额外跨度所在的父跨度以及这些额外跨度本身。要了解更多关于如何修复 N+1 问题的信息，请查看以下资源：',
          ],
        'Sentry Docs: N+1 Queries': ['Sentry 文档：N+1 查询'],
        'Finding and Fixing Django N+1 Problems': ['查找和修复 Django N+1 问题'],
        'Not yet supported for performance issues': ['尚未支持用于性能问题'],
        "HTTP/1.1 can cause overhead, with long request queue times in the browser due to max connection limits. In the Span Evidence above, we've identified the extent of the wait time and spans affected by request queueing. To learn more about how to fix HTTP Overhead, check out these resources:":
          [
            'HTTP/1.1 可能会导致开销，由于最大连接限制，浏览器中的请求排队时间会变长。在上面的跨度证据中，我们已经确定了等待时间的范围以及受请求排队影响的跨度。要了解更多关于如何修复 HTTP 开销的信息，请查看以下资源：',
          ],
        'Sentry Docs: HTTP/1.1 Overhead': ['Sentry 文档：HTTP/1.1 开销'],
        'Large render blocking assets are a type of resource span delaying First Contentful Paint (FCP). Delaying FCP means it takes more time to initially load the page for the user. Spans that end after FCP are not as critical as those that end before it. The resource span may take form of a script, stylesheet, image, or other asset that requires optimization. To learn more about how to fix large render blocking assets, check out these resources:':
          [
            '大型渲染阻塞资源是一种延迟首次内容绘制（FCP）的资源跨度。延迟 FCP 意味着用户初始加载页面所需的时间会变长。在 FCP 之后结束的跨度不像在 FCP 之前结束的跨度那么关键。资源跨度可能以脚本、样式表、图像或其他需要优化的资源形式出现。要了解更多关于如何修复大型渲染阻塞资源的信息，请查看以下资源：',
          ],
        'Web Vital: First Contentful Paint': ['网络核心指标：首次内容绘制'],
        'Slow DB Queries are SELECT query spans that are consistently taking longer than 500ms. A quick method to understand why this may be the case is running an EXPLAIN command on the query itself. To learn more about how to fix slow DB queries, check out these resources:':
          [
            '慢数据库查询是指持续时间超过 500 毫秒的 SELECT 查询跨度。一个快速了解这可能的原因的方法是对查询本身运行 EXPLAIN 命令。要了解更多关于如何修复慢数据库查询的信息，请查看以下资源：',
          ],
        'Sentry Docs: Slow DB Queries': ['Sentry 文档：慢数据库查询'],
        'A Large HTTP Payload issue occurs when an http payload size consistently exceeds a threshold of 300KB':
          ['当 HTTP 负载大小持续超过 300KB 的阈值时，就会出现大型 HTTP 负载问题'],
        'Sentry Docs: Large HTTP Payload': ['Sentry 文档：大型 HTTP 负载'],
        'Uncompressed assets are asset spans that take over 300ms and are larger than 512kB which can usually be made faster with compression. Check that your server or CDN serving your assets is accepting the content encoding header from the browser and is returning them compressed.':
          [
            '未压缩的资源是那些持续时间超过 300 毫秒且大小超过 512kB 的资源跨度，通常可以通过压缩来加快速度。请检查您的服务器或提供资源的 CDN 是否接受来自浏览器的内容编码标头，并返回压缩后的资源。',
          ],
        'Not yet supported for regression issues': ['尚未支持用于回归问题'],
        'File I/O can be a long running operation that blocks the main thread. This may result in app hangs and poor UI performance. To learn more, read our documentation:':
          [
            '文件 I/O 可能是一个长时间运行的操作，会阻塞主线程。这可能导致应用卡住和 UI 性能不佳。要了解更多，请阅读我们的文档：',
          ],
        'File I/O on Main Thread': ['主线程上的文件 I/O'],
        'Decoding a JSON blob can be a long running operation that blocks the main thread. This may result in app hangs and poor UI performance. To learn more, read our documentation:':
          [
            '解码 JSON 数据块可能是一个长时间运行的操作，会阻塞主线程。这可能导致应用卡住和 UI 性能不佳。要了解更多，请阅读我们的文档：',
          ],
        'JSON Decode on Main Thread': ['主线程上的 JSON 解码'],
        'Decoding a compressed image (e.g. JPEG, PNG) into a bitmap can be a long running operation that blocks the main thread. This may result in app hangs and poor UI performance. To learn more, read our documentation:':
          [
            '将压缩的图像（例如 JPEG、PNG）解码为位图可能是一个长时间运行的操作，会阻塞主线程。这可能导致应用卡住和 UI 性能不佳。要了解更多，请阅读我们的文档：',
          ],
        'Image Decode on Main Thread': ['主线程上的图像解码'],
        'Evaluating matches between strings and regular expressions (regex) can be long-running operations that may impact app responsiveness. This may result in app hangs and poor UI performance. To learn more, read our documentation:':
          [
            '评估字符串和正则表达式（regex）之间的匹配可能是一个长时间运行的操作，可能会影响应用的响应性。这可能导致应用卡住和 UI 性能不佳。要了解更多，请阅读我们的文档：',
          ],
        'Regex on Main Thread': ['主线程上的正则表达式'],
        'The main (or UI) thread in a mobile app is responsible for handling all user interaction and needs to be able to respond to gestures and taps in real time. If a long-running operation blocks the main thread, the app becomes unresponsive, impacting the quality of the user experience. To learn more, read our documentation:':
          [
            '移动应用中的主线程（或 UI 线程）负责处理所有用户交互，需要能够实时响应手势和点击。如果一个长时间运行的操作阻塞了主线程，应用将变得无响应，影响用户体验的质量。要了解更多，请阅读我们的文档：',
          ],
        'Frame Drop': ['帧丢弃'],
        'Consecutive DB Queries are a sequence of database spans where one or more have been identified as parallelizable, or in other words, spans that may be shifted to the start of the sequence. This often occurs when a db query performs no filtering on the data, for example a query without a WHERE clause. To learn more about how to fix consecutive DB queries, check out these resources:':
          [
            '连续的数据库查询是一系列数据库跨度，其中一个或多个已被识别为可并行化，换句话说，这些跨度可以移到序列的开头。这通常发生在数据库查询不对数据进行过滤时，例如没有 WHERE 子句的查询。要了解更多关于如何修复连续的数据库查询的信息，请查看以下资源：',
          ],
        'Sentry Docs: Consecutive DB Queries': ['Sentry 文档：连续的数据库查询'],
        'A Consecutive HTTP issue occurs when at least 2000ms of time can be saved by parallelizing at least 3 consecutive HTTP calls occur sequentially.':
          [
            '当至少 3 个连续的 HTTP 调用顺序发生时，如果通过并行化至少可以节省 2000 毫秒的时间，则会发生连续的 HTTP 问题。',
          ],
        'Sentry Docs: Consecutive HTTP': ['Sentry 文档：连续的 HTTP'],
        'File IO operations on your main thread may lead to app hangs.': [
          '主线程上的文件 I/O 操作可能导致应用卡住。',
        ],
        'Sentry Docs: File IO on the Main Thread': ['Sentry 文档：主线程上的文件 I/O'],
        'Database operations on your main thread may lead to app hangs.': [
          '主线程上的数据库操作可能导致应用卡住。',
        ],
        'Sentry Docs: Database on the Main Thread': ['Sentry 文档：主线程上的数据库'],
        'N+1 API Calls are repeated concurrent calls to fetch a resource. These spans will always begin at the same time and may potentially be combined to fetch everything at once to reduce server load. Alternatively, you may be able to lazily load the resources. To learn more about how and when to fix N+1 API Calls, check out these resources:':
          [
            'N+1 API 调用是重复的并发调用以获取资源。这些跨度总是同时开始，可能可以合并以一次性获取所有内容，从而减少服务器负载。或者，您可能可以懒加载资源。要了解更多关于如何以及何时修复 N+1 API 调用的信息，请查看以下资源：',
          ],
        'Sentry Docs: N+1 API Calls': ['Sentry 文档：N+1 API 调用'],
        Area: ['区域'],
        gauge: ['仪表盘'],
        distribution: ['分布'],
        set: ['集合'],
        derived: ['派生'],
        counter: ['计数器'],
        'Select a metric to get started': ['选择一个指标开始'],
        'Metric updated': ['指标已更新'],
        'An error occurred while updating the metric': ['更新指标时发生错误'],
        'not extracted': ['未提取'],
        extracted: ['已提取'],
        'On-demand metrics': ['按需指标'],
        'Render time of the first pixel loaded in the viewport (may overlap with FCP).': [
          '视口中加载的第一个像素的渲染时间（可能与 FCP 重叠）。',
        ],
        'Slow Frames Rate': ['慢帧率'],
        'Slow Frames Rate is the percentage of frames recorded within a transaction that is considered slow.':
          ['慢帧率是事务中记录的帧中被认为是慢的帧的百分比。'],
        'Frozen Frames Rate': ['冻结帧率'],
        'Frozen Frames Rate is the percentage of frames recorded within a transaction that is considered frozen.':
          ['冻结帧率是事务中记录的帧中被认为是冻结的帧的百分比。'],
        Stalls: ['停滞'],
        'Stalls is the number of times the application stalled within a transaction.': [
          '停滞是应用在事务中停滞的次数。',
        ],
        'Total Stall Time': ['总停滞时间'],
        'Stall Total Time is the total amount of time the application is stalled within a transaction.':
          ['总停滞时间是应用在事务中停滞的总时间。'],
        'Longest Stall Time': ['最长停滞时间'],
        'Stall Longest Time is the longest amount of time the application is stalled within a transaction.':
          ['最长停滞时间是应用在事务中停滞的最长时间。'],
        'Stall Percentage': ['停滞百分比'],
        'Stall Percentage is the percentage of the transaction duration the application was stalled.':
          ['停滞百分比是事务持续时间中应用停滞的百分比。'],
        'Time To Full Display': ['完全显示时间'],
        'The time between application launch and complete display of all resources and views.':
          ['从应用启动到所有资源和视图完全显示的时间。'],
        'Time To Initial Display': ['初始显示时间'],
        'The time it takes for an application to produce its first frame.': [
          '应用生成第一帧所需的时间。',
        ],
        'First Contentful Paint': ['首次内容绘制'],
        'Render time of the first image, text or other DOM node in the viewport.': [
          '视口中第一个图像、文本或其他 DOM 节点的渲染时间。',
        ],
        'Largest Contentful Paint': ['最大内容绘制'],
        'Render time of the largest image, text or other DOM node in the viewport.': [
          '视口中最大图像、文本或其他 DOM 节点的渲染时间。',
        ],
        'First Input Delay': ['首次输入延迟'],
        'Response time of the browser to a user interaction (clicking, tapping, etc).': [
          '浏览器对用户交互（点击、轻触等）的响应时间。',
        ],
        'Interaction to Next Paint': ['交互到下次绘制'],
        'The duration of the longest interaction observed, ignoring outliers.': [
          '观察到的最长交互的持续时间，忽略异常值。',
        ],
        'Cumulative Layout Shift': ['累积布局偏移'],
        'Sum of layout shift scores that measure the visual stability of the page.': [
          '衡量页面视觉稳定性的布局偏移分数之和。',
        ],
        'Time to First Byte': ['首次字节时间'],
        "The time that it takes for a user's browser to receive the first byte of page content.":
          ['用户浏览器接收页面内容的首个字节所需的时间。'],
        'Captures the time spent making the request and receiving the first byte of the response.':
          ['捕获发送请求和接收响应的首个字节所花费的时间。'],
        'Cold start is a measure of the application start up time from scratch.': [
          '冷启动是从零开始的应用启动时间的度量。',
        ],
        'Warm start is a measure of the application start up time while still in memory.':
          ['热启动是应用仍在内存中时的启动时间的度量。'],
        'Total Frames': ['总帧数'],
        'Total frames is a count of the number of frames recorded within a transaction.':
          ['总帧数是事务中记录的帧数。'],
        'Slow Frames': ['慢帧'],
        'Slow frames is a count of the number of slow frames recorded within a transaction.':
          ['慢帧是事务中记录的慢帧数。'],
        'Frozen Frames': ['冻结帧'],
        'Frozen frames is a count of the number of frozen frames recorded within a transaction.':
          ['冻结帧是事务中记录的冻结帧数。'],
        Layout: ['布局'],
        Paint: ['绘制'],
        Script: ['脚本'],
        'Garbage Collection': ['垃圾回收'],
        Style: ['样式'],
        '<anonymous>': ['匿名'],
        '[native code]': ['[原生代码]'],
        'United States of America (US)': ['美国（US）'],
        'European Union (EU)': ['欧盟（EU）'],
        'Significant mutations detected [count]. Replay is now stopped to prevent poor performance for your customer. [link]':
          ['检测到显著的突变 [count]。回放已停止，以防止客户性能不佳。[链接]'],
        'Learn more.': ['了解更多。'],
        'Significant mutations detected [count]. This can slow down the Replay SDK, impacting your customers. [link]':
          ['检测到显著的突变 [count]。这可能会减慢回放 SDK 的速度，影响您的客户。[链接]'],
        'There was a conflict between the server rendered html and the first client render.':
          ['服务器渲染的 HTML 和首次客户端渲染之间存在冲突。'],
        'The user is preoccupied with another browser, tab, or window': [
          '用户正在使用另一个浏览器、标签页或窗口',
        ],
        'The user is currently focused on your application,': [
          '用户当前正在关注您的应用，',
        ],
        'The user is currently focused on your application': ['用户当前正在关注您的应用'],
        'The user is preoccupied with another app or activity': [
          '用户正在使用另一个应用或活动',
        ],
        'Device connected to wifi': ['设备已连接到 wifi'],
        'Good [value]ms': ['良好 [value]ms'],
        'Internet connection was lost': ['互联网连接已丢失'],
        'Meh [value]ms': ['一般 [value]ms'],
        'Device connected to cellular network': ['设备已连接到蜂窝网络'],
        'Poor [value]ms': ['差 [value]ms'],
        'Device connected to ethernet': ['设备已连接到以太网'],
        'Device was at [percent]% battery and [charging]': [
          '设备的电池电量为 [percent]%，并且 [charging]',
        ],
        'Device orientation was changed to [orientation]': [
          '设备方向已更改为 [orientation]',
        ],
        'Click on [selector] did not cause a visible effect within [timeout] ms': [
          '点击 [selector] 在 [timeout] 毫秒内未产生可见效果',
        ],
        'Click on [selector] took [duration] ms to have a visible effect': [
          '点击 [selector] 在 [duration] 毫秒后才产生可见效果',
        ],
        'Rage clicked [clickCount] times on [selector]': [
          '对 [selector] 愤怒点击了 [clickCount] 次',
        ],
        '[clickCount] clicks on [selector]': ['对 [selector] 点击了 [clickCount] 次'],
        'Failed to delete replay': ['删除回放失败'],
        'Are you sure you want to delete this replay?': ['您确定要删除此回放吗？'],
        'Deeplink to current timestamp': ['当前时间戳的深度链接'],
        'Share at': ['分享在'],
        'Encountered an error while hydrating': ['在水合过程中遇到错误'],
        "Successfully updated '[projectName]' project": [
          "成功更新了 '[projectName]' 项目",
        ],
        "Failed to update '[projectName]' project": ["更新 '[projectName]' 项目失败"],
        '%s is not a member of the selected projects': ['%s 不是所选项目的成员'],
        'Disabled Teams': ['已禁用的团队'],
        'Suggested Values': ['建议的值'],
        'All Values': ['所有值'],
        'Your account ([email]) is already a member of this organization. [switchLink:Switch accounts]?':
          ['您的账户 ([email]) 已经是此组织的成员。[switchLink:切换账户]？'],
        'To continue, you must either create a new account, or login to an\n              existing Sentry account.':
          [
            '要继续，您必须创建一个新账户，或者登录到一个\n              现有的 Sentry 账户。',
          ],
        "Note that [orgSlug] has required Single Sign-On (SSO) using\n               [authProvider]. You may create an account by authenticating with\n               the organization's SSO provider.":
          [
            '请注意，[orgSlug] 要求使用\n               [authProvider] 进行单点登录（SSO）。您可以通过使用组织的 SSO 提供者进行身份验证来创建账户。',
          ],
        "Note that [orgSlug] has enabled Single Sign-On (SSO) using\n               [authProvider]. You may create an account by authenticating with\n               the organization's SSO provider.":
          [
            '请注意，[orgSlug] 已启用使用\n               [authProvider] 的单点登录（SSO）。您可以通过使用组织的 SSO 提供者进行身份验证来创建账户。',
          ],
        'Join with %s': ['使用 %s 加入'],
        'To continue, [orgSlug] requires all members to configure two-factor authentication.':
          ['要继续，[orgSlug] 要求所有成员配置双因素身份验证。'],
        'Configure Two-Factor Auth': ['配置双因素身份验证'],
        'To continue, [orgSlug] requires all members to verify their email address.': [
          '要继续，[orgSlug] 要求所有成员验证其电子邮件地址。',
        ],
        "Note that [orgSlug] has enabled Single Sign-On (SSO) using\n               [authProvider]. You may join the organization by authenticating with\n               the organization's SSO provider or via your standard account authentication.":
          [
            '请注意，[orgSlug] 已启用使用\n               [authProvider] 的单点登录（SSO）。您可以通过使用组织的 SSO 提供者进行身份验证或通过您的标准账户身份验证来加入该组织。',
          ],
        'Join the %s organization': ['加入 %s 组织'],
        'This organization invite link is no longer valid.': [
          '此组织邀请链接已不再有效。',
        ],
        'Failed to join this organization. Please try again': ['加入此组织失败。请重试'],
        '[orgSlug] is using Sentry to track and debug errors.': [
          '[orgSlug] 使用 Sentry 来跟踪和调试错误。',
        ],
        'Projects must be transferred to a specific [organization]. You can grant specific teams access to the project later under the [projectSettings]. (Note that granting access to at least one team is necessary for the project to appear in all parts of the UI.)':
          [
            '项目必须转移到特定的 [组织]。您可以在 [项目设置] 下稍后授予特定团队对项目的访问权限。（请注意，至少授予一个团队访问权限是必要的，以便项目出现在 UI 的所有部分中。）',
          ],
        'Upgrade to Sentry %s': ['升级到 Sentry %s'],
        '[now] (since [start])': ['[现在]（自 [开始] 起）'],
        'Configuration [configPath]': ['配置 [configPath]'],
        'Sentry Admin': ['Sentry 管理员'],
        'A test email has been sent to %s': ['已向 %s 发送了一封测试邮件'],
        'Unable to send test email. Check your server logs': [
          '无法发送测试邮件。请检查您的服务器日志',
        ],
        'STARTTLS?': ['STARTTLS？'],
        'SSL?': ['SSL？'],
        'Admin Overview': ['管理员概览'],
        'Jobs Started': ['已启动的作业'],
        'Jobs Finished': ['已完成的作业'],
        'Global Throughput': ['全局吞吐量'],
        'Dropped Events': ['已丢弃的事件'],
        'Performance Issues - Compressed Assets Detector': ['性能问题 - 压缩资源检测器'],
        'Performance Issues - File IO on Main Thread': ['性能问题 - 主线程上的文件 I/O'],
        'Performance Issues - Slow DB Span Detector': ['性能问题 - 慢数据库跨度检测器'],
        'Performance Issues - Large Render Blocking Asset Detector': [
          '性能问题 - 大型渲染阻塞资源检测器',
        ],
        'Performance Issues - MN+1 DB Detector': ['性能问题 - MN+1 数据库检测器'],
        'Performance Issues - Consecutive HTTP Span Detector': [
          '性能问题 - 连续 HTTP 跨度检测器',
        ],
        'Performance Issues - Large HTTP Payload Detector': [
          '性能问题 - 大型 HTTP 负载检测器',
        ],
        'Profiling Issues - Block Main Thread Detector Ingest': [
          '性能分析问题 - 阻塞主线程检测器摄取',
        ],
        'Profiling Issues - Block Main Thread Detector Post Process Group': [
          '性能分析问题 - 阻塞主线程检测器后期处理组',
        ],
        'Security & Abuse': ['安全与滥用'],
        'Performance Issues - All': ['性能问题 - 全部'],
        'Performance Issues - Detectors': ['性能问题 - 检测器'],
        'Performance Issues - Consecutive DB Detector': ['性能问题 - 连续数据库检测器'],
        'Performance Issues - N+1 API Calls Detector': ['性能问题 - N+1 API 调用检测器'],
        'User account updated.': ['用户账户已更新。'],
        Miscellaneous: ['其他'],
        'N+1 (DB) creation rate': ['N+1（数据库）创建速率'],
        'Controls the rate at which performance issues are created specifically for N+1 detection. Value of 0 will disable creation, a value of 1.0 fully enables it.':
          [
            '控制专门为 N+1 检测创建性能问题的速率。值为 0 将禁用创建，值为 1.0 将完全启用。',
          ],
        'N+1 (DB) (Extended) creation rate': ['N+1（数据库）（扩展）创建速率'],
        'Controls the rate at which performance issues are created specifically for N+1 detection (extended). Value of 0 will disable creation, a value of 1.0 fully enables it.':
          [
            '控制专门为 N+1 检测（扩展）创建性能问题的速率。值为 0 将禁用创建，值为 1.0 将完全启用。',
          ],
        'N+1 (DB) count threshold': ['N+1（数据库）计数阈值'],
        'Detector threshold. Controls the number of spans required to trigger performance issues. This affects all organizations system-wide.':
          ['检测器阈值。控制触发性能问题所需的跨度数。这会影响系统范围内的所有组织。'],
        'N+1 (DB) duration threshold': ['N+1（数据库）持续时间阈值'],
        'Detector threshold. Controls the threshold for the cumulative duration of involved spans required to trigger performance issues. This affects all organizations system-wide.':
          [
            '检测器阈值。控制触发性能问题所需的涉及跨度的累计持续时间的阈值。这会影响系统范围内的所有组织。',
          ],
        'Problem Creation Rate': ['问题创建速率'],
        'Controls the overall rate at which performance problems are detected by the Consecutive DB detector.':
          ['控制连续数据库检测器检测到性能问题的总体速率。'],
        'Limited Availability Detection Rate': ['有限可用性检测速率'],
        'Controls the rate at which performance problems are detected by the Consecutive DB detector for LA organizations.':
          ['控制连续数据库检测器为 LA 组织检测性能问题的速率。'],
        'Early Adopter Detection Rate': ['早期采用者检测速率'],
        'Controls the rate at which performance problems are detected by the Consecutive DB detector for EA organizations.':
          ['控制连续数据库检测器为 EA 组织检测性能问题的速率。'],
        'General Availability Detection Rate': ['通用可用性检测速率'],
        'Controls the rate at which performance problems are detected by the Consecutive DB detector for GA organizations.':
          ['控制连续数据库检测器为 GA 组织检测性能问题的速率。'],
        'Controls the overall rate at which performance problems are detected by the N+1 API Calls detector.':
          ['控制 N+1 API 调用检测器检测性能问题的总体速率。'],
        'Controls the rate at which performance problems are detected by the N+1 API Calls detector for LA organizations.':
          ['控制 N+1 API 调用检测器为 LA 组织检测性能问题的速率。'],
        'Controls the rate at which performance problems are detected by the N+1 API Calls detector for EA organizations.':
          ['控制 N+1 API 调用检测器为 EA 组织检测性能问题的速率。'],
        'Controls the rate at which performance problems are detected by the for N+1 API Calls detector for GA organizations.':
          ['控制 N+1 API 调用检测器为 GA 组织检测性能问题的速率。'],
        'Controls the overall rate at which performance problems are detected by the compressed assets detector.':
          ['控制压缩资源检测器检测性能问题的总体速率。'],
        'Controls the rate at which performance problems are detected by the compressed assets detector for LA organizations.':
          ['控制压缩资源检测器为 LA 组织检测性能问题的速率。'],
        'Controls the rate at which performance problems are detected by the compressed assets detector for EA organizations.':
          ['控制压缩资源检测器为 EA 组织检测性能问题的速率。'],
        'Controls the rate at which performance problems are detected by the compressed assets detector for GA organizations.':
          ['控制压缩资源检测器为 GA 组织检测性能问题的速率。'],
      };
      var trans5 = {
        'File IO Problem Creation Rate': ['文件 I/O 问题创建速率'],
        'Controls the overall rate at which performance problems are detected by the File IO Detector':
          ['控制文件 I/O 检测器检测性能问题的总体速率'],
        'Controls the overall rate at which performance problems are detected by the slow DB span detector.':
          ['控制慢数据库跨度检测器检测性能问题的总体速率。'],
        'Controls the rate at which performance problems are detected by the slow DB span detector for LA organizations.':
          ['控制慢数据库跨度检测器为 LA 组织检测性能问题的速率。'],
        'Controls the rate at which performance problems are detected by the slow DB span detector for EA organizations.':
          ['控制慢数据库跨度检测器为 EA 组织检测性能问题的速率。'],
        'Controls the rate at which performance problems are detected by the slow DB span detector for GA organizations.':
          ['控制慢数据库跨度检测器为 GA 组织检测性能问题的速率。'],
        'Controls the overall rate at which performance problems are detected by the MN+1 DB detector.':
          ['控制 MN+1 数据库检测器检测性能问题的总体速率。'],
        'Controls the % of orgs in which performance problems are detected by the MN+1 DB detector for LA organizations.':
          ['控制 MN+1 数据库检测器为 LA 组织检测性能问题的组织百分比。'],
        'Controls the % of orgs in which performance problems are detected by the MN+1 DB detector for EA organizations.':
          ['控制 MN+1 数据库检测器为 EA 组织检测性能问题的组织百分比。'],
        'Controls the % of orgs in which performance problems are detected by the MN+1 DB detector for GA organizations.':
          ['控制 MN+1 数据库检测器为 GA 组织检测性能问题的组织百分比。'],
        'Controls the overall rate at which performance problems are detected by the large render blocking asset detector.':
          ['控制大型渲染阻塞资源检测器检测性能问题的总体速率。'],
        'Controls the rate at which performance problems are detected by the large render blocking asset detector for LA organizations.':
          ['控制大型渲染阻塞资源检测器为 LA 组织检测性能问题的速率。'],
        'Controls the rate at which performance problems are detected by the large render blocking asset detector for EA organizations.':
          ['控制大型渲染阻塞资源检测器为 EA 组织检测性能问题的速率。'],
        'Controls the rate at which performance problems are detected by the large render blocking asset detector for GA organizations.':
          ['控制大型渲染阻塞资源检测器为 GA 组织检测性能问题的速率。'],
        'Time Between Spans': ['跨度时间间隔'],
        'Maximum time, in ms, between consecutive HTTP spans to be considered part of the same problem.':
          ['连续 HTTP 跨度之间被视为同一问题的最大时间间隔，以毫秒为单位。'],
        'Consecutive Count Threshold': ['连续计数阈值'],
        'The minimum number of offending spans that must occur consecutively.': [
          '必须连续发生的违规跨度的最小数量。',
        ],
        'Span Duration Threshold': ['跨度持续时间阈值'],
        'The duration, in ms, that a span must exceed for it to be considered an offending span.':
          ['一个跨度要被视为违规跨度必须超过的持续时间，以毫秒为单位。'],
        'Payload Size Threshold': ['负载大小阈值'],
        'The threshold at which the payload size of an HTTP span is considered to be too large, in bytes.':
          ['HTTP 跨度的负载大小被视为过大的阈值，以字节为单位。'],
        'Controls the rate at which performance problems are detected by the blocked main thread profiling detector for LA organizations.':
          ['控制阻塞主线程分析检测器为 LA 组织检测性能问题的速率。'],
        'Controls the rate at which performance problems are detected by the blocked main thread profiling detector for EA organizations.':
          ['控制阻塞主线程分析检测器为 EA 组织检测性能问题的速率。'],
        'Controls the rate at which performance problems are detected by the blocked main thread profiling detector for GA organizations.':
          ['控制阻塞主线程分析检测器为 GA 组织检测性能问题的速率。'],
        'Controls the rate at which profile blocked main thread performance problems are sent to post process group for LA organizations.':
          ['控制为 LA 组织将分析阻塞主线程性能问题发送到后期处理组的速率。'],
        'Controls the rate at which profile blocked main thread performance problems are sent to post process group for EA organizations.':
          ['控制为 EA 组织将分析阻塞主线程性能问题发送到后期处理组的速率。'],
        'Controls the rate at which profile blocked main thread performance problems are sent to post process group for GA organizations.':
          ['控制为 GA 组织将分析阻塞主线程性能问题发送到后期处理组的速率。'],
        'Organization Creation Rate Limit': ['组织创建速率限制'],
        'Send my contact information along with usage statistics': [
          '将我的联系信息与使用统计信息一起发送',
        ],
        'Please keep my usage information anonymous': ['请将我的使用信息匿名化'],
        'If enabled, any stats reported to sentry.io will exclude identifying information (such as your administrative email address). By anonymizing your installation the Sentry team will be unable to contact you about security updates. For more information on what data is sent to Sentry, see the [link:documentation]. Note: This is separate from error-reporting for the self-hosted installer. The data reported to the beacon only includes usage stats from your running self-hosted instance.':
          [
            '如果启用，向 sentry.io 报告的任何统计信息都将排除身份识别信息（例如您的管理员电子邮件地址）。通过匿名化您的安装，Sentry 团队将无法就安全更新与您联系。有关发送到 Sentry 的数据的详细信息，请参阅 [link:文档]。注意：这与自托管安装程序的错误报告是分开的。报告到信标的数据显示您正在运行的自托管实例的使用统计信息。',
          ],
        'No, I would prefer to keep CPU/RAM usage private': [
          '不，我更希望将 CPU/内存使用情况保持私密',
        ],
        'Yes, I would love to help Sentry developers improve the experience of self-hosted by sending CPU/RAM usage':
          ['是的，我愿意通过发送 CPU/内存使用情况来帮助 Sentry 开发者改进自托管的体验'],
        'Recording CPU/RAM usage will greatly help our development team understand how self-hosted sentry\n      is being typically used, and to keep track of improvements that we hope to bring you in the future.':
          [
            '记录 CPU/内存使用情况将大大帮助我们的开发团队了解自托管 sentry 的典型使用方式，并跟踪我们希望将来为您带来的改进。',
          ],
        'Performance problem detection rate': ['性能问题检测速率'],
        'Controls the rate at which performance problems are detected across the entire system. A value of 0 will disable performance issue detection, and a value of 1.0 turns on detection for every ingested transaction.':
          [
            '控制整个系统检测性能问题的速率。值为 0 将禁用性能问题检测，值为 1.0 则对每个摄取的事务启用检测。',
          ],
        'Performance problem creation rate': ['性能问题创建速率'],
        'Controls the rate at which performance issues are created across the entire system. A value of 0 will disable performance issue detection, and a value of 1.0 turns on creation for every detected performance problem.':
          [
            '控制整个系统创建性能问题的速率。值为 0 将禁用性能问题检测，值为 1.0 则为每个检测到的性能问题创建问题。',
          ],
        'Performance issues creation EA Rollout': ['性能问题创建 EA 推广'],
        'Controls the rate at which performance issues are created for EA organizations.':
          ['控制为 EA 组织创建性能问题的速率。'],
        'Performance issues creation GA Rollout': ['性能问题创建 GA 推广'],
        'Controls the rate at which performance issues are created for all organizations.':
          ['控制为所有组织创建性能问题的速率。'],
        'Performance issues post process group EA Rollout': [
          '性能问题后期处理组 EA 推广',
        ],
        'Controls the rate at which performance issues sent through post process group for EA organizations.':
          ['控制为 EA 组织将性能问题通过后期处理组发送的速率。'],
        'Performance issues post process group GA Rollout': [
          '性能问题后期处理组 GA 推广',
        ],
        'Controls the rate at which performance issues sent through post process group for all organizations.':
          ['控制为所有组织将性能问题通过后期处理组发送的速率。'],
        'N+1 detection rate': ['N+1 检测速率'],
        'Controls the rate at which performance problems are detected specifically for N+1 detection. Value of 0 will disable detection, a value of 1.0 fully enables it.':
          [
            '控制专门针对 N+1 检测的性能问题检测速率。值为 0 将禁用检测，值为 1.0 则完全启用。',
          ],
        'N+1 creation rate': ['N+1 创建速率'],
        'N+1 (DB) detection rate': ['N+1（数据库）检测速率'],
        'Set Conditions': ['设置条件'],
        'Select Alert': ['选择警报'],
        'Set Conditions for': ['为...设置条件'],
        'Review Thresholds': ['审查阈值'],
        'Real-time visibility into problems with your code and the impact on your users, along with a view of your existing alert rules, their status, project, team, and creation date.':
          [
            '实时了解代码中的问题及其对用户的影响，并查看现有的警报规则、其状态、项目、团队和创建日期。',
          ],
        'View Features': ['查看功能'],
        'No incidents exist for the current query.': ['当前查询没有事件。'],
        'Learn more about [link:Metric Alerts]': ['了解更多关于 [link:指标警报] 的信息'],
        'This page only shows metric alerts.': ['此页面仅显示指标警报。'],
        'Still Active': ['仍然活跃'],
        'More signal, less noise': ['更多信号，更少噪音'],
        'Not every error is worth an email. Set your own rules for alerts you need, with information that helps.':
          [
            '并非每个错误都值得发送邮件。为您需要的警报设置自己的规则，并提供有帮助的信息。',
          ],
        'Actively monitoring every [interval]': ['每 [interval] 积极监控一次'],
        'Alert not triggered yet': ['警报尚未触发'],
        'Alert has not been activated yet': ['警报尚未激活'],
        'Last activated ': ['最后激活时间'],
        'Deleted rule': ['已删除的规则'],
        'No alert rules found for the current query.': ['未找到当前查询的警报规则。'],
        'There was an error loading alerts.': ['加载警报时出错。'],
        Up: ['正常'],
        Down: ['宕机'],
        'Uptime Alert Status: [statusText]': ['正常运行时间警报状态：[statusText]'],
        'Metric Alert Status: [status]': ['指标警报状态：[status]'],
        'Issue Alert': ['问题警报'],
        'Are you sure you want to delete "%s"? You won\'t be able to view the history of this alert once it\'s deleted.':
          ['您确定要删除 "%s" 吗？一旦删除，您将无法查看此警报的历史记录。'],
        'This Uptime Monitoring alert was auto-detected. [learnMore: Learn more].': [
          '此正常运行时间监控警报是自动检测到的。[learnMore: 了解更多]。',
        ],
        'Auto Detected': ['自动检测'],
        'Filter teams': ['筛选团队'],
        'Alerts Triggered': ['触发的警报'],
        'Total Alerts': ['总警报数'],
        'default message': ['默认消息'],
        'No issues exist for the current query.': ['当前查询没有问题。'],
        'Successfully updated': ['更新成功'],
        'Unable to update alert rule': ['无法更新警报规则'],
        'Successfully re-enabled': ['重新启用成功'],
        'The alert rule you were looking for was not found.': [
          '未找到您查找的警报规则。',
        ],
        'The conditions in this alert rule conflict and might not be working properly. [link:Edit alert rule]':
          ['此警报规则中的条件存在冲突，可能无法正常工作。[link:编辑警报规则]'],
        'This alert was disabled due to lack of activity. Please [keepAlive] to enable this alert.':
          ['由于缺乏活动，此警报已被禁用。请 [keepAlive] 以启用此警报。'],
        'click here': ['点击这里'],
        'This alert is disabled due to missing actions. Please edit the alert rule to enable this alert.':
          ['由于缺少操作，此警报已被禁用。请编辑警报规则以启用此警报。'],
        'This alert is disabled due to its configuration and needs to be edited to be enabled.':
          ['由于配置问题，此警报已被禁用，需要编辑才能启用。'],
        'This alert is scheduled to be disabled [date] due to lack of activity. Please [keepAlive] to keep this alert active. [docs:Learn more]':
          [
            '由于缺乏活动，此警报计划在 [date] 禁用。请 [keepAlive] 以保持此警报活动。[docs:了解更多]',
          ],
        'Edit to enable': ['编辑以启用'],
        "[creator] muted this alert so these notifications won't be sent in the future.":
          ['[creator] 已将此警报静音，因此将来不会发送这些通知。'],
        "[creator] muted this alert[forEveryone]so you won't get these notifications in the future.":
          ['[creator] 已将此警报静音 [forEveryone]，因此将来您不会收到这些通知。'],
        'No alerts triggered': ['未触发警报'],
        'Alert Conditions': ['警报条件'],
        'Alert Rule Details': ['警报规则详情'],
        'Date created': ['创建日期'],
        'Created by': ['创建者'],
        '[when:When] an event is captured [selector]': ['[when:当] 捕获事件 [selector]'],
        'and %s...': ['和 %s...'],
        '[if:If] [selector] of these filters match': [
          '[if:如果] 这些过滤器中的 [selector] 匹配',
        ],
        '[then:Then] perform these actions': ['[then:然后] 执行这些操作'],
        'Do nothing': ['不采取行动'],
        'The issue changes state from archived to escalating': [
          '问题状态从已归档变为升级',
        ],
        'Send a notification to %s': ['向 %s 发送通知'],
        'Send a notification to #%s': ['向 #%s 发送通知'],
        'Select an environment and project': ['选择环境和项目'],
        'Set conditions': ['设置条件'],
        '[when:When] an event is captured by Sentry and [selector] of the following happens':
          ['[when:当] Sentry 捕获事件并且以下情况 [selector] 发生'],
        'Add optional trigger...': ['添加可选触发器...'],
        '[if:If][selector] of these filters match': [
          '[if:如果] 这些过滤器中的 [selector] 匹配',
        ],
        'Add optional filter...': ['添加可选过滤器...'],
        'Add action...': ['添加操作...'],
        'Send Test Notification': ['发送测试通知'],
        'Set action interval': ['设置操作间隔'],
        'Perform the actions above once this often for an issue': [
          '对于一个问题，每如此频繁地执行上述操作',
        ],
        'Add a name and owner': ['添加名称和所有者'],
        'This name will show up in notifications and the owner will give permissions to your whole team to edit and view this alert.':
          ['此名称将显示在通知中，所有者将授予您的整个团队编辑和查看此警报的权限。'],
        'Alert - %s': ['警报 - %s'],
        'Looking for that channel took too long :(': ['查找该频道耗时太长 :('],
        'Sending a test notification...': ['正在发送测试通知...'],
        'Sending test notifications...': ['正在发送测试通知...'],
        'Notification sent!': ['通知已发送！'],
        'Notifications sent!': ['通知已发送！'],
        'Notification failed': ['通知失败'],
        'Notifications failed': ['通知失败'],
        Required: ['必需'],
        'Looking through all your channels...': ['正在查看您的所有频道...'],
        'There was a problem deleting the alert': ['删除警报时出现问题'],
        'Field Required': ['字段必需'],
        'Unable to access this alert rule -- check to make sure you have the correct permissions':
          ['无法访问此警报规则，请确保您具有正确的权限'],
        'Enter Alert Name': ['输入警报名称'],
        'This rule fully duplicates "[alertName]" in the project [projectName] and cannot be saved.':
          ['此规则与项目 [projectName] 中的 “[alertName]” 完全重复，无法保存。'],
        'Alerts without conditions can fire too frequently. Are you sure you want to save this alert rule?':
          ['没有条件的警报可能触发过于频繁。您确定要保存此警报规则吗？'],
        'Yes, I don’t mind if this alert gets noisy': ['是的，我不介意此警报变得吵闹'],
        'Failed to load integration data': ['加载集成数据失败'],
        'Preview is not supported for these conditions': ['不支持这些条件的预览'],
        'Select a condition to generate a preview': ['选择一个条件以生成预览'],
        "Select a condition above to see which issues would've triggered this alert": [
          '选择上面的一个条件以查看哪些问题会触发此警报',
        ],
        "[issueCount] issues would have triggered this rule in the past 14 days [approximately:approximately]. If you're looking to reduce noise then make sure to [link:read the docs].":
          [
            '在过去 14 天内，[issueCount] 个问题会触发此规则 [approximately:大约]。如果您希望减少干扰，请务必 [link:阅读文档]。',
          ],
        'Previews that include issue frequency conditions are approximated': [
          '包含问题频率条件的预览是近似的',
        ],
        'No preview available': ['没有预览可用'],
        "We couldn't find any issues that would've triggered your rule": [
          '我们没有找到会触发您的规则的问题',
        ],
        'Showing [pageIssues] of [issueCount] issues': [
          '显示 [pageIssues] 个问题，共 [issueCount] 个',
        ],
        "This project doesn't support sessions. [link:View supported platforms]": [
          '此项目不支持会话。[link:查看支持的平台]',
        ],
        'Percent of sessions affected is approximated by the ratio of the issue frequency to the number of sessions in the project. [link:Learn more.]':
          [
            '受影响的会话百分比是通过问题频率与项目中会话数量的比率近似估算的。[link:了解更多。]',
          ],
        'Having rate limiting problems? Enter a channel or user ID.': [
          '遇到速率限制问题吗？请输入频道或用户 ID。',
        ],
        'Note that you must enter a Discord channel ID, not a channel name.': [
          '请注意，您必须输入 Discord 频道 ID，而不是频道名称。',
        ],
        'The conditions highlighted in red are in conflict. They may prevent the alert from ever being triggered.':
          ['用红色突出显示的条件存在冲突。它们可能会阻止警报被触发。'],
        'No One': ['无'],
        'Suggested Assignees, Team, or Member': ['建议的负责人、团队或成员'],
        'Send notification to…': ['发送通知到…'],
        'Notify integration…': ['通知集成…'],
        'Create new…': ['创建新…'],
        'Issue state change': ['问题状态更改'],
        'Issue frequency': ['问题频率'],
        '[name] Settings': ['[name] 设置'],
        'Send Alerts to Slack. Install the integration now.': [
          '将警报发送到 Slack。立即安装集成。',
        ],
        'Set Up Slack Now': ['立即设置 Slack'],
        'Send alerts to your messaging service. Install the integration now.': [
          '将警报发送到您的消息服务。立即安装集成。',
        ],
        'Connect with a messaging tool': ['连接到消息工具'],
        'Receive alerts and digests right where you work.': [
          '在您工作的地方接收警报和摘要。',
        ],
        'Connect to messaging': ['连接到消息服务'],
        'Changes applied.': ['更改已应用。'],
        'When this alert is triggered [ticketType] will be created with the following fields. It will also [linkToDocs:stay in sync] with the new Sentry Issue.':
          [
            '当此警报被触发时，将创建具有以下字段的 [ticketType]。它还将与新的 Sentry 问题 [linkToDocs:保持同步]。',
          ],
        'When this alert is triggered [ticketType] will be created with the following fields.':
          ['当此警报被触发时，将创建具有以下字段的 [ticketType]。'],
        'same time 5 minutes ago': ['5 分钟前的同一时间'],
        'same time 15 minutes ago': ['15 分钟前的同一时间'],
        'same time one hour ago': ['1 小时前的同一时间'],
        'same time one day ago': ['1 天前的同一时间'],
        'same time one week ago': ['1 周前的同一时间'],
        'same time one month ago': ['1 个月前的同一时间'],
        'Alert Rule settings have been updated since this alert was triggered.': [
          '自触发此警报以来，警报规则设置已更新。',
        ],
        'Exclude archived issues': ['排除已归档的问题'],
        'Dismiss Alert': ['忽略警报'],
        "Alert rules can now exclude errors associated with archived issues. Please make sure to review the rule's alert thresholds after editing.":
          [
            '警报规则现在可以排除与已归档问题相关的错误。编辑后请务必审查规则的警报阈值。',
          ],
        'Custom time': ['自定义时间'],
        'An error occurred while fetching the alert rule.': ['获取警报规则时发生错误。'],
        'This alert rule could not be found.': ['找不到此警报规则。'],
        'Status: %s': ['状态：%s'],
        ' %s in %s compared to the ': ['%s 中的 %s 与'],
        higher: ['更高'],
        lower: ['更低'],
        Summary: ['摘要'],
        'The time spent waiting for metrics matching the filters used.': [
          '等待与使用的过滤器匹配的指标所花费的时间。',
        ],
        ' over ': ['在'],
        'Alert Rule Modified': ['警报规则已修改'],
        'This alert lacks historical data due to filters for which we don’t routinely extract metrics.':
          ['由于使用了我们不常规提取指标的过滤器，此警报缺乏历史数据。'],
        'Hidden Alert': ['隐藏的警报'],
        'Hidden Alerts': ['隐藏的警报'],
        Reason: ['原因'],
        'Date Triggered': ['触发日期'],
        'No alerts triggered during this time.': ['在此期间未触发警报。'],
        'No issues for this alert rule': ['此警报规则没有问题'],
        'New Deploy': ['新部署'],
        'New Release': ['新版本'],
        'Alert Status': ['警报状态'],
        'Filters Used': ['使用的过滤器'],
        'Activated by': ['激活者'],
        'Last modified': ['最后修改'],
        'Change alert status to %s': ['将警报状态更改为 %s'],
        '[metric] is [threshold]% [comparisonType] in [timeWindow] compared to the [comparisonDelta]':
          [
            '[metric] 在 [timeWindow] 内比 [comparisonDelta] [threshold]% [comparisonType]',
          ],
        '[metric] is [condition] in [timeWindow]': [
          '[metric] 在 [timeWindow] 内 [condition]',
        ],
        '%s Conditions': ['%s 条件'],
        Then: ['然后'],
        'The following problems occurred while creating your alert:': [
          '创建您的警报时出现以下问题：',
        ],
        'No project was selected': ['未选择项目'],
        'Too many environments were selected': ['选择的环境太多'],
        "An event type wasn't selected. [defaultSetting] has been set as the default": [
          '未选择事件类型。已将 [defaultSetting] 设置为默认值',
        ],
        'An alert can’t use the metric [yAxis] just yet.': [
          '警报暂时无法使用 [yAxis] 指标。',
        ],
        'No metrics in this project': ['此项目中没有指标'],
        'No options': ['没有选项'],
        'Select an operation': ['选择操作'],
        '[timeWindow] interval': ['[timeWindow] 区间'],
        'Filter events by level, message, and other properties…': [
          '按级别、消息和其他属性筛选事件…',
        ],
        'Filter sessions by release version…': ['按版本筛选会话…'],
        'Filter transactions by URL, tags, and other properties…': [
          '按 URL、标签和其他属性筛选事务…',
        ],
        'Define your metric': ['定义您的指标'],
        'Select Monitor Type': ['选择监控类型'],
        Continuous: ['持续'],
        'Continuously monitor trends for the metrics outlined below': [
          '持续监控下面列出的指标趋势',
        ],
        for: ['对于'],
        'Temporarily monitor specified query given activation condition': [
          '在激活条件下临时监控指定查询',
        ],
        'The chart data above is an estimate based on the stored transactions that match the filters specified.':
          ['上面的图表数据是基于与指定过滤器匹配的存储事务的估计值。'],
        'The wildcard operator is not supported here.': ['此处不支持通配符操作符。'],
        'Free text search is not allowed. If you want to partially match transaction names, use glob patterns like "transaction:*transaction-name*"':
          [
            '不允许自由文本搜索。如果您想部分匹配事务名称，请使用如 "transaction:*transaction-name*" 的 glob 模式',
          ],
        "The field [field] isn't supported for performance alerts.": [
          '字段 [field] 不支持用于性能警报。',
        ],
        'We don’t routinely collect metrics from [fields]. However, we’ll do so [strong:once this alert has been saved.]':
          [
            '我们不常规从 [fields] 收集指标。但是，我们将在 [strong:保存此警报后] 进行收集。',
          ],
        'Looks good to me!': ['看起来不错！'],
        'Set thresholds': ['设置阈值'],
        "We've added [code:is:unresolved] to your events filter; please make sure the current thresholds are still valid as this alert is now filtering out resolved and archived errors.":
          [
            '我们已将 [code:is:unresolved] 添加到您的事件筛选器中；请确保当前阈值仍然有效，因为此警报现在将筛选掉已解决和已归档的错误。',
          ],
        'Resolution threshold must be greater than alert': ['解决阈值必须大于警报'],
        'Resolution threshold must be less than alert': ['解决阈值必须小于警报'],
        'Alert threshold must be less than resolution': ['警报阈值必须小于解决'],
        'Alert threshold must be greater than resolution': ['警报阈值必须大于解决'],
        'Warning threshold must be less than critical threshold': [
          '警告阈值必须小于严重阈值',
        ],
        'Warning threshold must be greater than critical threshold': [
          '警告阈值必须大于严重阈值',
        ],
        'You need to select a metric before you can save the alert': [
          '在保存警报之前，您需要选择一个指标',
        ],
        'critical threshold': ['严重阈值'],
        'Alert not valid: missing %s': ['警报无效：缺少 %s'],
        '%s is not supported for on-demand metric alerts': ['%s 不支持按需指标警报'],
        'Activation condition and monitor window must be set for activated alerts': [
          '对于已激活的警报，必须设置激活条件和监控窗口',
        ],
        'Saving your alert rule, hold on...': ['正在保存您的警报规则，请稍候...'],
        'Unable to save alert%s': ['无法保存警报'],
        'Establish ownership': ['建立所有权'],
        'No span metrics in this project': ['此项目中没有跨度指标'],
        'Select a filter': ['选择筛选器'],
        'Select an aggregate': ['选择聚合'],
        'All spans': ['所有跨度'],
        'Percent Change: {x%} higher or lower compared to previous period': [
          '百分比变化：与上一时期相比 {x%} 更高或更低',
        ],
        'Percent Change: {x%} higher or lower compared to': [
          '百分比变化：与 [comparison] 相比 {x%} 更高或更低',
        ],
        'optional: channel ID or user ID': ['可选：频道 ID 或用户 ID'],
        'Remove action': ['删除操作'],
        'There was a problem adding an action': ['添加操作时出现问题'],
        'There was a problem changing an action': ['更改操作时出现问题'],
        'Set actions': ['设置操作'],
        'Select a status level': ['选择状态级别'],
        'Select Level': ['选择级别'],
        'Select an Action': ['选择操作'],
        'Select Action': ['选择操作'],
        'Add Action': ['添加操作'],
        'Estimated Transactions': ['估计的事务数'],
        'Your filter conditions contain an unsupported field - please review.': [
          '您的筛选条件包含不支持的字段 - 请审查。',
        ],
        'An error occurred while fetching data': ['获取数据时发生错误'],
        Automatic: ['自动'],
        'When below Critical or Warning': ['当低于严重或警告'],
        'When lower than Critical or Warning': ['当低于严重或警告'],
        'Lower than': ['低于'],
        'When above Critical or Warning': ['当高于严重或警告'],
        'When higher than Critical or Warning': ['当高于严重或警告'],
        'Higher than': ['高于'],
        'Drag to adjust threshold[break]You can hold shift to fine tune': [
          '拖动以调整阈值 [换行] 您可以按住 Shift 进行微调',
        ],
        'For %s minute': ['在 %s 分钟内'],
        'For %s minutes': ['在 %s 分钟内'],
        'Emai​l': ['电子邮件'],
        Pagerduty: ['Pagerduty'],
        'MS Teams': ['微软团队'],
        Opsgenie: ['Opsgenie'],
        Discord: ['Discord'],
        'Deleted metric': ['已删除的指标'],
        'Select a metrics to continue': ['选择指标以继续'],
        ERRORS: ['错误'],
        SESSIONS: ['会话'],
        PERFORMANCE: ['性能'],
        METRICS: ['指标'],
        CUSTOM: ['自定义'],
        'Uptime Alert Details': ['正常运行时间警报详情'],
        'The uptime alert rule you were looking for was not found.': [
          '未找到您查找的正常运行时间警报规则。',
        ],
        'Set a URL to monitor': ['设置要监控的 URL'],
        'The URL to monitor': ['要监控的 URL'],
        'Uptime rule name': ['正常运行时间规则名称'],
        'Are you sure you want to delete "%s"? Once deleted, this alert cannot be recreated automatically.':
          ['您确定要删除 "%s" 吗？一旦删除，此警报将无法自动重新创建。'],
        'Delete Uptime Rule?': ['删除正常运行时间规则？'],
        'Uptime Monitoring is currently in Early Access. Additional configuration options will be available soon.':
          ['正常运行时间监控目前处于早期访问阶段。更多配置选项即将推出。'],
        'No issues relating to this uptime alert have been found.': [
          '未找到与此正常运行时间警报相关的问题。',
        ],
        deprecated: ['已弃用'],
        'Users Experiencing Errors': ['遇到错误的用户'],
        'Transaction Duration': ['事务持续时间'],
        'Failure Rate': ['失败率'],
        'Custom Metric': ['自定义指标'],
        'Span Metric': ['跨度指标'],
        'Custom Measurement': ['自定义测量'],
        'Crash Free Session Rate': ['无崩溃会话率'],
        'Crash Free User Rate': ['无崩溃用户率'],
        'LLM cost': ['大型语言模型成本'],
        'LLM token usage': ['大型语言模型令牌使用量'],
        'When there are more than 100,000 tokens used within an hour': [
          '当一小时内使用超过 10 万个令牌时',
        ],
        'Receive an alert when the total cost of tokens used by your LLMs reaches a limit.':
          ['当您的大型语言模型使用的令牌总成本达到限制时接收警报。'],
        'When there are more than $100 used by LLM  within an hour': [
          '当大型语言模型一小时内使用超过 100 美元时',
        ],
        'A session begins when a user starts the application and ends when it’s closed or sent to the background. A crash is when a session ends due to an error and this type of alert lets you monitor when those crashed sessions exceed a threshold. This lets you get a better picture of the health of your app.':
          [
            '当用户启动应用程序时会话开始，并在关闭或置于后台时结束。崩溃是指会话因错误而结束，此类警报可让您监控这些崩溃会话何时超过阈值。这可以让您更好地了解应用的健康状况。',
          ],
        'When the Crash Free Rate is below 98%, send a Slack notification to the team.': [
          '当无崩溃率低于 98% 时，向团队发送 Slack 通知。',
        ],
        'Crash Free Users is the percentage of distinct users that haven’t experienced a crash and so this type of alert tells you when the overall user experience dips below a certain unacceptable threshold.':
          [
            '无崩溃用户是指未经历过崩溃的独特用户百分比，因此此类警报会告知您整体用户体验何时低于某个不可接受的阈值。',
          ],
        'When the Crash Free Rate is below 97%, send an email notification to yourself.':
          ['当无崩溃率低于 97% 时，向自己发送电子邮件通知。'],
        'Issues are groups of errors that have a similar stacktrace. Set an alert for new issues, when an issue changes state, frequency of errors, or users affected by an issue.':
          [
            '问题是具有相似堆栈跟踪的错误组。可以为新问题、问题状态更改、错误频率或受问题影响的用户设置警报。',
          ],
        "When the triggering event's level is fatal.": ['当触发事件的级别为致命时。'],
        'When an issue was seen 100 times in the last 2 days.': [
          '当问题在过去两天内出现 100 次。',
        ],
        'Create a JIRA ticket when an issue changes state from resolved to unresolved and is unassigned.':
          ['当问题从已解决变为未解决且未分配时创建 JIRA 工单。'],
        'Alert when the number of errors in a project matching your filters crosses a threshold. This is useful for monitoring the overall level or errors in your project or errors occurring in specific parts of your app.':
          [
            '当与您的筛选器匹配的项目中的错误数量超过阈值时发出警报。这有助于监控项目的整体错误级别或特定部分发生的错误。',
          ],
        'When the signup page has more than 10k errors in 5 minutes.': [
          '当注册页面在 5 分钟内出现超过 1 万个错误时。',
        ],
        'When there are more than 500k errors in 10 minutes from a specific file.': [
          '当特定文件在 10 分钟内出现超过 50 万个错误时。',
        ],
        'Alert when the number of users affected by errors in your project crosses a threshold.':
          ['当受项目错误影响的用户数量超过阈值时发出警报。'],
        'When 100k users experience an error in 1 hour.': [
          '当 10 万用户在一小时内遇到错误时。',
        ],
        'When 100 users experience a problem on the Checkout page.': [
          '当 100 个用户在结账页面遇到问题时。',
        ],
        'Throughput is the total number of transactions in a project and you can alert when it reaches a threshold within a period of time.':
          ['吞吐量是项目中的事务总数，当它在一段时间内达到阈值时可以发出警报。'],
        'When number of transactions on a key page exceeds 100k per minute.': [
          '当关键页面的事务数每分钟超过 10 万次时。',
        ],
        'When number of transactions drops below a threshold.': ['当事务数低于阈值时。'],
        'Monitor how long it takes for transactions to complete. Use flexible aggregates like percentiles, averages, and min/max.':
          [
            '监控事务完成所需的时间。使用灵活的聚合方式，如百分位数、平均值和最小值/最大值。',
          ],
        'When any transaction is slower than 3 seconds.': ['当任何事务慢于 3 秒时。'],
        'When the 75th percentile response time is higher than 250 milliseconds.': [
          '当第 75 百分位的响应时间高于 250 毫秒时。',
        ],
        'Apdex is a metric used to track and measure user satisfaction based on your application response times. The Apdex score provides the ratio of satisfactory, tolerable, and frustrated requests in a specific transaction or endpoint.':
          [
            'Apdex 是一种用于跟踪和衡量基于应用响应时间的用户满意度的指标。Apdex 分数提供了特定事务或端点中满意、可容忍和沮丧请求的比例。',
          ],
        'When apdex is below 300.': ['当 apdex 低于 300 时。'],
        'Failure rate is the percentage of unsuccessful transactions. Sentry treats transactions with a status other than “ok,” “canceled,” and “unknown” as failures.':
          [
            '失败率是不成功事务的百分比。Sentry 将状态不是“ok”、“canceled”和“unknown”的事务视为失败。',
          ],
        'When the failure rate for an important endpoint reaches 10%.': [
          '当重要端点的失败率达到 10% 时。',
        ],
        'Largest Contentful Paint (LCP) measures loading performance. It marks the point when the largest image or text block is visible within the viewport. A fast LCP helps reassure the user that the page is useful, and so we recommend an LCP of less than 2.5 seconds.':
          [
            'Largest Contentful Paint (LCP) 测量加载性能。它标记了视口中最大的图像或文本块可见的时刻。快速的 LCP 有助于让用户确信页面是有用的，因此我们建议 LCP 不超过 2.5 秒。',
          ],
        'When the 75th percentile LCP of your homepage is longer than 2.5 seconds.': [
          '当您主页的第 75 百分位 LCP 超过 2.5 秒时。',
        ],
        'First Input Delay (FID) measures interactivity as the response time when the user tries to interact with the viewport. A low FID helps ensure that a page is useful, and we recommend a FID of less than 100 milliseconds.':
          [
            'First Input Delay (FID) 测量交互性，即用户尝试与视口交互时的响应时间。低 FID 有助于确保页面是有用的，我们建议 FID 不超过 100 毫秒。',
          ],
        'When the average FID of a page is longer than 4 seconds.': [
          '当页面的平均 FID 超过 4 秒时。',
        ],
        'Cumulative Layout Shift (CLS) measures visual stability by quantifying unexpected layout shifts that occur during the entire lifespan of the page. A CLS of less than 0.1 is a good user experience, while anything greater than 0.25 is poor.':
          [
            'Cumulative Layout Shift (CLS) 通过量化页面整个生命周期内发生的意外布局偏移来衡量视觉稳定性。CLS 小于 0.1 是良好的用户体验，而大于 0.25 则为不良体验。',
          ],
        'When the CLS of a page is more than 0.5.': ['当页面的 CLS 超过 0.5 时。'],
        'Alert on performance metrics which are not listed above, such as first paint (FP), first contentful paint (FCP), and time to first byte (TTFB).':
          [
            '对上述未列出的性能指标发出警报，例如首次绘制 (FP)、首次内容绘制 (FCP) 和首次字节时间 (TTFB)。',
          ],
        'When the 95th percentile FP of a page is longer than 250 milliseconds.': [
          '当页面的第 95 百分位 FP 超过 250 毫秒时。',
        ],
        'When the average TTFB of a page is longer than 600 milliseconds.': [
          '当页面的平均 TTFB 超过 600 毫秒时。',
        ],
        'Alert on custom metrics that you have configured and are not related to errors, transactions or sessions.':
          ['对您配置的与错误、事务或会话无关的自定义指标发出警报。'],
        'When the 75th percentile of your login flow is taking longer than 500 milliseconds.':
          ['当您的登录流程的第 75 百分位耗时超过 500 毫秒时。'],
        'When the number of sign-ups dropped by 10% compared to the previous week.': [
          '当注册数量比前一周下降 10% 时。',
        ],
        'Alert on custom [link:span metrics] that you have configured, such as number of sign-ups or duration of your login.':
          ['对您配置的自定义 [link:跨度指标] 发出警报，例如注册数量或登录持续时间。'],
        'Receive an alert when the total number of tokens used by your LLMs reaches a limit.':
          ['当您的大型语言模型使用的令牌总数达到限制时接收警报。'],
        'Unable to load authentication configuration': ['无法加载身份验证配置'],
        "Experimental SPA mode does not currently support SSO style login. To develop against the [org] you'll need to copy your production session cookie.":
          [
            '实验性单页面应用模式目前不支持 SSO 登录方式。要针对 [org] 进行开发，您需要复制您的生产会话 cookie。',
          ],
        'something super secret': ['超级机密的东西'],
        "We'd love to keep you updated via email with product and feature\n           announcements, promotions, educational materials, and events. Our\n           updates focus on relevant information, and we'll never sell your data\n           to third parties. See our [link] for more details.":
          [
            '我们希望通过电子邮件向您发送产品和功能公告、促销、教育资料和活动的更新。我们的更新专注于相关信息，我们绝不会将您的数据出售给第三方。请参阅我们的 [link] 了解详细信息。',
          ],
        'Yes, I would like to receive updates via email': [
          '是的，我希望通过电子邮件接收更新',
        ],
        "No, I'd prefer not to receive these updates": ['不，我不希望接收这些更新'],
        'Your ID is the slug after the hostname. e.g. [example] is [slug].': [
          '您的 ID 是主机名后的 slug。例如，[example] 是 [slug]。',
        ],
        'We have made some updates to our self-hosted beacon broadcast system, and just need to get a quick answer from you.':
          ['我们对自托管信标广播系统进行了一些更新，只需要您的快速答复。'],
        "No, I'd prefer to keep CPU/RAM usage private": [
          '不，我更希望将 CPU/内存使用情况保持私密',
        ],
        'CPU/RAM Usage': ['CPU/内存使用情况'],
        'Recording CPU/RAM usage will greatly help our development team understand how self-hosted sentry\n            is typically being used, and to keep track of improvements that we hope to bring you in the future.':
          [
            '记录 CPU/内存使用情况将大大帮助我们的开发团队了解自托管 sentry 的典型使用方式，并跟踪我们希望将来为您带来的改进。',
          ],
        'Errors and Transactions': ['错误和事务'],
        'States, Assignment, Time, etc.': ['状态、分配、时间等'],
        'Sessions, Crash rates, etc.': ['会话、崩溃率等'],
        'Add widget': ['添加小部件'],
        'Export Dashboard': ['导出仪表盘'],
        'Edit Dashboard': ['编辑仪表盘'],
        'Dashboard Editing': ['仪表盘编辑'],
        'Are you sure you want to delete this dashboard?': ['您确定要删除此仪表盘吗？'],
        'Save and Finish': ['保存并完成'],
        'Go Back': ['返回'],
        'Add Dashboard': ['添加仪表盘'],
        'Resize Widget': ['调整小部件大小'],
        'Unique Issues Causing Crashes': ['导致崩溃的唯一问题'],
        'Overall Number of Errors': ['错误总数'],
        'Issues Causing Crashes': ['导致崩溃的问题'],
        'Crashes Over Time': ['随时间的崩溃情况'],
        'Crashes by OS': ['按操作系统划分的崩溃情况'],
        'Overall Warm Startup Time': ['整体热启动时间'],
        'Overall Cold Startup Time': ['整体冷启动时间'],
        'Warm Startup Times': ['热启动时间'],
        'Cold Startup Times': ['冷启动时间'],
        'Handled vs. Unhandled': ['已处理与未处理'],
        'Overall Frozen Frames': ['整体冻结帧'],
        'Max Warm Startup Time': ['最大热启动时间'],
        'Max Cold Startup Time': ['最大冷启动时间'],
        'Area Chart': ['面积图'],
        'Line Chart': ['折线图'],
        'Big Number': ['大数字'],
        Handled: ['已处理'],
        'Untitled dashboard': ['未命名的仪表盘'],
        'Errors by Country': ['按国家划分的错误'],
        'High Throughput Transactions': ['高吞吐量事务'],
        'Errors by Browser': ['按浏览器划分的错误'],
        'Overall User Misery': ['整体用户痛苦'],
        'Overall Apdex': ['整体 Apdex'],
        'General Template': ['通用模板'],
        'Various Frontend and Backend Widgets': ['各种前端和后端小部件'],
        'Issues Assigned to Me or My Teams': ['分配给我或我的团队的问题'],
        'Transactions Ordered by Misery': ['按痛苦排序的事务'],
        'Errors by Browser Over Time': ['随时间的浏览器错误'],
        'Frontend Template': ['前端模板'],
        'Erroring URLs and Web Vitals': ['错误 URL 和网络核心指标'],
        'Top 5 Issues by Unique Users Over Time': ['随时间的前 5 个问题（按唯一用户数）'],
        'Errors by Browser as Percentage': ['按浏览器划分的错误百分比'],
        'Top 5 Issues by Unique Users': ['前 5 个问题（按唯一用户数）'],
        'URLs grouped by Issue': ['按问题分组的 URL'],
        'Transactions 404ing': ['返回 404 的事务'],
        'Layout Shift Over Time': ['随时间的布局偏移'],
        'LCP by Country': ['按国家划分的 LCP'],
        'Number of Issues': ['问题数量'],
        'Page Load Over Time': ['随时间的页面加载情况'],
        'Slowest Pageloads': ['最慢的页面加载'],
        'Overall LCP': ['整体 LCP'],
        'Slow Page Navigations': ['慢页面导航'],
        'Overall FCP': ['整体 FCP'],
        'Overall CLS': ['整体 CLS'],
        'Overall FID': ['整体 FID'],
        'Backend Template': ['后端模板'],
        'Issues and Performance': ['问题和性能'],
        'Transactions Erroring Over Time': ['随时间的错误事务'],
        'Erroring Transactions by Percentage': ['按百分比划分的错误事务'],
        'Transactions Erroring': ['错误事务'],
        'p75 Over Time': ['随时间的第 75 百分位'],
        'Throughput (Errors Per Minute)': ['吞吐量（每分钟错误数）'],
        'Tasks Transactions with Poor Apdex': ['Apdex 较差的任务事务'],
        'HTTP Transactions with Poor Apdex': ['Apdex 较差的 HTTP 事务'],
        'Overall Duration': ['整体持续时间'],
        'Overall HTTP Spans': ['整体 HTTP 跨度'],
        'Overall DB Spans': ['整体数据库跨度'],
        'Mobile Template': ['移动设备模板'],
        'Crash Details and Performance Vitals': ['崩溃详情和性能指标'],
        'Total Crashes': ['总崩溃次数'],
        'Unique Users Who Crashed': ['崩溃的独特用户数'],
        'Issues dataset does not yet support descending order': [
          '问题数据集尚不支持降序',
        ],
        'no results': ['无结果'],
        'Releases data is only available from Jul 12. Please retry your query with a more recent date range.':
          ['版本数据仅从 7 月 12 日开始可用。请使用更近的日期范围重试您的查询。'],
        'Sorting currently not supported with session.status': [
          '当前 session.status 不支持排序',
        ],
        'Widget not found': ['未找到小部件'],
        'Dashboard deleted': ['仪表盘已删除'],
        'Dashboard updated': ['仪表盘已更新'],
        'You have unsaved changes, are you sure you want to leave?': [
          '您有未保存的更改，确定要离开吗？',
        ],
        'You have unsaved dashboard filters. You can save or discard them.': [
          '您有未保存的仪表盘筛选器。您可以保存或舍弃。',
        ],
        'Dashboard created': ['仪表盘已创建'],
        'Create Dashboard': ['创建仪表盘'],
        'Preview Dashboard': ['预览仪表盘'],
        'Dashboard filters updated': ['仪表盘筛选器已更新'],
        'Import Dashboard': ['导入仪表盘'],
        '%s widget': ['%s 小部件'],
        '%s widgets': ['%s 小部件'],
      };
      var trans6 = {
        'Sorry, no Dashboards match your filters.': [
          '抱歉，没有与您的筛选条件匹配的仪表盘。',
        ],
        'Error deleting Dashboard': ['删除仪表盘时出错'],
        'Dashboard duplicated': ['仪表盘已复制'],
        'Error duplicating Dashboard': ['复制仪表盘时出错'],
        'Dashboard actions': ['仪表盘操作'],
        'Search Dashboards': ['搜索仪表盘'],
        'A broad overview of your application’s health where you can navigate through error and performance data across multiple projects.':
          [
            '一个全面了解您的应用程序健康状况的概览，您可以在多个项目中浏览错误和性能数据。',
          ],
        'Show Templates': ['显示模板'],
        'Import Dashboard from JSON': ['从 JSON 导入仪表盘'],
        'My Dashboards': ['我的仪表盘'],
        'Dashboard Name (A-Z)': ['仪表盘名称（A-Z）'],
        'Date Created (Newest)': ['创建日期（最新）'],
        'Date Created (Oldest)': ['创建日期（最早）'],
        'Most Popular': ['最受欢迎'],
        'Latest Release(s)': ['最新版本'],
        'Filter Releases': ['筛选版本'],
        'Sorted by date created': ['按创建日期排序'],
        'Please set a title for this dashboard': ['请为此仪表盘设置一个标题'],
        'Choose your columns': ['选择您的列'],
        '[fieldTagLink: Field and tag] columns will help you view more details about the issues (e.g., title).':
          [
            '[fieldTagLink: 字段和标签] 列将帮助您查看有关问题的更多详细信息（例如，标题）。',
          ],
        'To stack sessions, add [functionLink: functions] f(x) that may take in additional parameters. [fieldTagLink: Field and tag] columns will help you view more details about the sessions (e.g., releases).':
          [
            '要堆叠会话，请添加可能需要额外参数的 [functionLink: 函数] f(x)。[fieldTagLink: 字段和标签] 列将帮助您查看有关会话的更多详细信息（例如，版本）。',
          ],
        'To stack events, add [functionLink: functions] f(x) that may take in additional parameters. [fieldTagLink: Field and tag] columns will help you view more details about the events (e.g., title).':
          [
            '要堆叠事件，请添加可能需要额外参数的 [functionLink: 函数] f(x)。[fieldTagLink: 字段和标签] 列将帮助您查看有关事件的更多详细信息（例如，标题）。',
          ],
        "We're splitting our datasets up to make it a bit easier to digest. We defaulted this widget to [splitDecision]. Edit as you see fit.":
          [
            '我们正在拆分数据集以使其更易于理解。我们已将此小部件默认设置为 [splitDecision]。您可以根据需要进行编辑。',
          ],
        'This dataset is restricted to tabular visualization.': [
          '此数据集仅限于表格可视化。',
        ],
        'Errors (TypeError, InvalidSearchQuery, etc)': [
          '错误（TypeError、InvalidSearchQuery 等）',
        ],
        'Issues (States, Assignment, Time, etc.)': ['问题（状态、分配、时间等）'],
        'Releases (Sessions, Crash rates)': ['版本（会话、崩溃率）'],
        'Choose your dataset': ['选择您的数据集'],
        'This reflects the type of information you want to use. To learn more, [link: read the docs].':
          ['这反映了您想要使用的信息类型。要了解更多，请 [link: 阅读文档]。'],
        'Filter down your search here. You can add multiple queries to compare data for each overlay:':
          ['在这里筛选您的搜索。您可以添加多个查询以比较每个覆盖层的数据：'],
        'Filter down your search here:': ['在这里筛选您的搜索：'],
        'We don’t routinely collect metrics for this property and you’ve exceeded the maximum number of extracted metrics for your organization. [strong:Please review your other widgets and remove any unused or less valuable queries marked with a (!) sign.]':
          [
            '我们不常规收集此属性的指标，您已超出组织的最大提取指标数量。[strong: 请审查您的其他小部件并删除标记有 (!) 符号的任何未使用或价值较低的查询。]',
          ],
        'We don’t routinely collect metrics from this property. However, we’ll do so [strong:once this widget has been saved.]':
          [
            '我们不常规从这个属性收集指标。但是，我们将在 [strong:保存此小部件后] 进行收集。',
          ],
        'Filter your results': ['筛选您的结果'],
        'Projects, environments, date range and releases have been preselected in the dashboard that this widget belongs to. You can filter the results by these fields further using the search bar. For example, typing [releaseQuery] narrows down the results specific to that release.':
          [
            '项目、环境、日期范围和版本已在该小部件所属的仪表盘中预先选定。您可以使用搜索栏通过这些字段进一步筛选结果。例如，输入 [releaseQuery] 将缩小特定于该版本的结果。',
          ],
        'Search for issues, status, assigned, and more': ['搜索问题、状态、分配对象等'],
        'Search for release version, session status, and more': ['搜索版本、会话状态等'],
        "Release queries don't support wildcards.": ['版本查询不支持通配符。'],
        'Add Group': ['添加组'],
        'This group has too many unique values to collect metrics for it.': [
          '该组具有太多唯一值，无法为其收集指标。',
        ],
        'Group your results': ['对结果进行分组'],
        'This is how you can group your data result by field or tag.': [
          '这是如何通过字段或标签对数据结果进行分组。',
        ],
        'Select group': ['选择组'],
        'Remove group': ['删除组'],
        'Sort by a column': ['按列排序'],
        'Sort by a y-axis': ['按 Y 轴排序'],
        "Choose one of the columns you've created to sort by.": [
          '选择一个您创建的列进行排序。',
        ],
        "Choose one of the y-axis you've created to sort by.": [
          '选择一个您创建的 Y 轴进行排序。',
        ],
        'Limit to %s result': ['限制为 %s 结果'],
        'Limit to %s results': ['限制为 %s 结果'],
        'Enter Equation': ['输入方程式'],
        'Sort direction': ['排序方向'],
        'Select a column': ['选择列'],
        'Thresholds in %s': ['阈值为 %s'],
        Thresholds: ['阈值'],
        'No max': ['无最大值'],
        'Set thresholds to identify problematic widgets. For example: setting the max values, [thresholdValues] will display a green indicator for results in the range [greenRange], a yellow indicator for results in the range [yellowRange] and a red indicator for results above [redValue].':
          [
            '设置阈值以识别有问题的小部件。例如：设置最大值，[thresholdValues] 将为范围 [greenRange] 内的结果显示绿色指示器，为范围 [yellowRange] 内的结果显示黄色指示器，为超过 [redValue] 的结果显示红色指示器。',
          ],
        'Choose your visualization': ['选择您的可视化方式'],
        'This is a preview of how your widget will appear in the dashboard.': [
          '这是您的小部件在仪表盘中的预览。',
        ],
        'Choose what to plot': ['选择要绘制的内容'],
        'Choose what to plot in the y-axis': ['选择在 Y 轴上绘制的内容'],
        "This is the data you'd be visualizing in the display. If the overlay units conflict, the charts will always base it off of the first line.":
          ['这是您将在显示中可视化的数据。如果覆盖单元冲突，图表将始终基于第一行。'],
        "This is the data you'd be visualizing in the display.": [
          '这是您将在显示中可视化的数据。',
        ],
        'Are you sure you want to delete this widget?': ['您确定要删除这个小部件吗？'],
        'Required fields must be filled out and contain valid inputs': [
          '必填字段必须填写并包含有效的输入',
        ],
        'Widget Builder': ['小部件构建器'],
        'High to low': ['从高到低'],
        'Low to high': ['从低到高'],
        'Unable to save widget': ['无法保存小部件'],
        'The widget you want to edit was not found.': ['找不到您要编辑的小部件。'],
        'Name your widget': ['命名您的小部件'],
        'Widget title': ['小部件标题'],
        'Enter title': ['输入标题'],
        'Widget Description': ['小部件描述'],
        'Enter description (Optional)': ['输入描述（可选）'],
        'This display type is not supported by the selected dataset.': [
          '所选数据集不支持此显示类型。',
        ],
        'Error loading widget data': ['加载小部件数据时出错'],
        "Your selection is only applicable to [indexedData: indexed event data]. We've automatically adjusted your results.":
          ['您的选择仅适用于 [indexedData: 索引事件数据]。我们已自动调整您的结果。'],
        'This widget is using indexed data because it has a column with too many unique values.':
          ['此小部件使用索引数据，因为它有一个列包含太多唯一值。'],
        "This widget is using indexed data because you've reached your organization limit for dynamically extracted metrics.":
          ['此小部件使用索引数据，因为您已达到组织对动态提取指标的限制。'],
        'session.duration is no longer being recorded as of %s. Data in this widget may be incomplete.':
          ['自 %s 起不再记录 session.duration。此小部件中的数据可能不完整。'],
        'Error sorting by releases': ['按版本排序时出错'],
        'Drag Widget': ['拖动小部件'],
        'Duplicate Widget': ['复制小部件'],
        'Delete Widget': ['删除小部件'],
        'This widget is only applicable to indexed events.': [
          '此小部件仅适用于索引事件。',
        ],
        Indexed: ['已索引'],
        'Open Widget Viewer': ['打开小部件查看器'],
        'This is a preview only. To edit, you must add this dashboard.': [
          '这只是预览。要进行编辑，您必须添加此仪表盘。',
        ],
        'Slow vs. Fast Transactions': ['慢事务与快事务'],
        'Percentage breakdown of transaction durations over and under 300ms.': [
          '事务持续时间超过和低于 300 毫秒的百分比分布。',
        ],
        'Issues For Review': ['待审核问题'],
        'Most recently seen unresolved issues for review.': [
          '最近出现的未解决待审核问题。',
        ],
        'Top Unhandled Error Types': ['最频繁的未处理错误类型'],
        'Most frequently encountered unhandled errors.': ['最常遇到的未处理错误。'],
        'Duration Distribution': ['持续时间分布'],
        'Users Affected by Errors': ['受错误影响的用户'],
        'Footprint of unique users affected by errors.': ['受错误影响的独特用户的足迹。'],
        'Compare transaction durations across different percentiles.': [
          '比较不同百分位数的事务持续时间。',
        ],
        'Top 5 transactions with the largest volume.': ['事务量最大的前五个事务。'],
        'Crash Rates for Recent Releases': ['最新版本的崩溃率'],
        'Percentage of crashed sessions for latest releases.': [
          '最新版本崩溃会话的百分比。',
        ],
        'Session Health': ['会话健康状况'],
        'Number of abnormal, crashed, errored and healthy sessions.': [
          '异常、崩溃、出错和健康会话的数量。',
        ],
        'Table showing page load times by country.': ['按国家显示页面加载时间的表格。'],
        'Miserable Users': ['痛苦的用户'],
        'Unique users who have experienced slow load times.': [
          '经历过加载缓慢的独特用户。',
        ],
        ' you ': ['你'],
        'doing here?': ['在这里做什么？'],
        "Not that its any of our business, but were you invited to this page? It's just that we don't exactly remember emailing you about it.":
          ['这不关我们的事，但您是被邀请到这个页面的吗？只是我们不太记得给您发过邮件。'],
        "Close this window and we'll email you when your download is ready.": [
          '关闭此窗口，下载准备好时我们会给您发邮件。',
        ],
        'This is awkward.': ['这很尴尬。'],
        "That link expired, so your download doesn't live here anymore. Just picked up one day and left town.":
          ['那个链接已过期，所以您的下载不再在这里。有一天它就这样离开了。'],
        'Make a new one with your latest data. Your old download will never see it coming.':
          ['用您的最新数据制作一个新的下载。您的旧下载永远也想不到它会来。'],
        'Start a New Download': ['开始新下载'],
        'Need to make changes?': ['需要进行更改吗？'],
        'All done.': ['全部完成。'],
        "See, that wasn't so bad. Your data is all ready for download.": [
          '看，这并不糟糕。您的数据已准备好下载。',
        ],
        "That link won't last forever — it expires:": [
          '那个链接不会永远有效 — 它将在以下时间过期：',
        ],
        'Need help verifying? [link].': ['需要帮助验证吗？[链接]。'],
        'Check out our docs': ['查看我们的文档'],
        'What are': ['什么是'],
        'Explore Data over Time': ['随时间探索数据'],
        'Analyze and visualize all of your data over time to find answers to your most complex problems.':
          ['分析和可视化所有数据随时间的变化，以找到最复杂问题的答案。'],
        'Filter on Event Attributes.': ['按事件属性筛选。'],
        'Drill down on data by any custom tag or field to reduce noise and hone in on specific areas.':
          ['通过任何自定义标签或字段深入数据，以减少干扰并专注于特定领域。'],
        'Group Data by Tags': ['按标签分组数据'],
        'Go beyond Issues and create custom groupings to investigate events from a different lens.':
          ['超越问题，创建自定义分组以从不同角度调查事件。'],
        'Save, Share and Alert': ['保存、共享和警报'],
        'Send insights to your team and set alerts to monitor any future spikes.': [
          '将见解发送给您的团队，并设置警报以监控未来的任何激增。',
        ],
        'Customize and save queries by search conditions, event fields, and tags': [
          '通过搜索条件、事件字段和标签自定义并保存查询',
        ],
        'Build a new query': ['构建新查询'],
        'View all Events': ['查看所有事件'],
        'Get a Tour': ['获取导览'],
        'Saved Queries': ['已保存的查询'],
        'Sample Count': ['样本数'],
        'Select up to 3 options': ['最多选择 3 个选项'],
        'Y-axis': ['Y 轴'],
        'All Transactions': ['所有事务'],
        'All Errors': ['所有错误'],
        'Transactions by Volume': ['按事务量划分'],
        'Errors by Title': ['按标题划分的错误'],
        'Errors by URL': ['按 URL 划分的错误'],
        'Go to Summary': ['转到摘要'],
        'The linked issue cannot be found. It may have been deleted, or merged.': [
          '找不到链接的问题。可能已被删除或合并。',
        ],
        'Event Issue': ['事件问题'],
        'Untitled query': ['未命名的查询'],
        'New Query': ['新查询'],
        'Search saved queries': ['搜索已保存的查询'],
        'Recently Edited': ['最近编辑'],
        'Most Outdated': ['最过时'],
        Edited: ['已编辑'],
        'No saved queries match that filter': ['没有已保存的查询匹配该筛选条件'],
        'Last ': ['最后'],
        'Set as Default': ['设为默认'],
        'Duplicate Query': ['复制查询'],
        "You've navigated to this page from a performance metric widget generated from processed events. The results here only show indexed events.":
          [
            '您是从处理后的事件生成的性能指标小部件导航到此页面的。此处的结果仅显示索引事件。',
          ],
        'These are unparameterized transactions. To better organize your transactions, [link:set transaction names manually].':
          ['这些是未参数化的事务。要更好地组织您的事务，请 [link:手动设置事务名称]。'],
        "We're splitting our datasets up to make it a bit easier to digest. We defaulted this query to [splitDecision]. Edit as you see fit.":
          [
            '我们正在拆分数据集以使其更易于理解。我们已将此查询默认设置为 [splitDecision]。您可以根据需要进行编辑。',
          ],
        'May lead to thumb twiddling': ['可能导致无所事事'],
        'Do it': ['执行'],
        Nevermind: ['作罢'],
        "You've created a query that will search for events made\n                      [dayLimit:over more than 30 days] for [projectLimit:more than 10 projects].\n                      A lot has happened during that time, so this might take awhile.\n                      Are you sure you want to do this?":
          [
            '您创建了一个查询，将搜索 [dayLimit:超过 30 天] 的事件，涉及 [projectLimit:超过 10 个项目]。\n                      在这段时间里发生了许多事情，因此这可能需要一些时间。\n                      您确定要这样做吗？',
          ],
        'Change the Y-Axis dropdown to display only 1 function to use this view.': [
          '将 Y 轴下拉菜单更改为仅显示 1 个函数以使用此视图。',
        ],
        'No Y-Axis selected.': ['未选择 Y 轴。'],
        'Created by:': ['创建者：'],
        'Last edited:': ['最后编辑：'],
        'Create queries to get insights into the health of your system.': [
          '创建查询以获取系统健康的见解。',
        ],
        'Based on your search criteria and sample rate, the events available may be limited because Discover uses sampled data only.':
          [
            '根据您的搜索标准和采样率，可用的事件可能有限，因为 Discover 仅使用采样数据。',
          ],
        'Remove Default': ['移除默认'],
        'Discover queries are disabled': ['发现查询已禁用'],
        'Discover queries': ['发现查询'],
        'Delete Saved Query': ['删除已保存的查询'],
        'Discover Context Menu': ['发现上下文菜单'],
        'Save for Org': ['保存到组织'],
        'Saved as Discover default': ['已保存为发现默认'],
        'Unable to set query as Discover default': ['无法将查询设置为发现默认'],
        'Successfully removed Discover default': ['已成功移除发现默认'],
        'Unable to remove Discover default': ['无法移除发现默认'],
        'Add to filter': ['添加到筛选器'],
        'Exclude from filter': ['从筛选器中排除'],
        'Show values greater than': ['显示大于的值'],
        'Show values less than': ['显示小于的值'],
        'Go to release': ['转到版本'],
        'View Stacks': ['查看堆栈'],
        'Edit threshold ([threshold]ms)': ['编辑阈值（[threshold] 毫秒）'],
        'Edit threshold': ['编辑阈值'],
        Alias: ['别名'],
        "Sorry, you've reached the maximum number of columns (%d). Delete columns to add more.":
          ['抱歉，您已达到最大列数（%d）。删除列以添加更多。'],
        'Tag / Field / Function': ['标签/字段/函数'],
        "This is using indexed data because we don't routinely collect metrics for equations.":
          ['这是因为我们不常规收集方程的指标，所以使用索引数据。'],
        'To group events, add [functionLink: functions] f(x) that may take in additional parameters. [fieldTagLink: Tag and field] columns will help you view more details about the events (i.e. title).':
          [
            '要对事件进行分组，请添加可能需要额外参数的 [functionLink: 函数] f(x)。[fieldTagLink: 标签和字段] 列将帮助您查看有关事件的更多详细信息（例如，标题）。',
          ],
        'Select value': ['选择值'],
        'Function: ': ['函数：'],
        Equation: ['方程'],
        'Quick Context Action Menu': ['快速上下文操作菜单'],
        'Add as column': ['添加为列'],
        Title: ['标题'],
        'There is no stack trace available for this event.': [
          '此事件没有可用的堆栈跟踪。',
        ],
        'Issue Status': ['问题状态'],
        'There is no context available.': ['没有可用的上下文。'],
        'Failed to load context for column.': ['加载列的上下文失败。'],
        '[commitCount] commits by you and [authorsCount] others': [
          '[commitCount] 次提交，由您和 [authorsCount] 位其他作者完成',
        ],
        '[commitCount] commits by you and 1 other': [
          '[commitCount] 次提交，由您和 1 位其他作者完成',
        ],
        '1 commit by you and [authorsCount] others': [
          '1 次提交，由您和 [authorsCount] 位其他作者完成',
        ],
        '1 commit by you and 1 other': ['1 次提交，由您和 1 位其他作者完成'],
        '[commitCount] commits by [authorsCount] authors': [
          '[commitCount] 次提交，由 [authorsCount] 位作者完成',
        ],
        '[commitCount] commits by 1 author': ['[commitCount] 次提交，由 1 位作者完成'],
        '1 commit by [authorsCount] authors': ['1 次提交，由 [authorsCount] 位作者完成'],
        '1 commit by 1 author': ['1 次提交，由 1 位作者完成'],
        'Last Commit': ['最后的提交'],
        'Requires discover query feature.': ['需要发现查询功能。'],
        "There aren't that many results, start your export and it'll download immediately.":
          ['结果并不多，开始导出并会立即下载。'],
        'Open Group': ['打开组'],
        'Tag Summary': ['标签摘要'],
        'Remove Column': ['删除列'],
        'Trace Samples': ['跟踪样本'],
        'Indexed Spans': ['已索引的跨度'],
        'EAP Spans': ['EAP 跨度'],
        'Group By': ['按...分组'],
        'Limit To': ['限制为'],
        'Result Mode': ['结果模式'],
        Aggregate: ['聚合'],
        'The User Feedback Widget allows users to submit feedback quickly and easily any time they encounter something that isn’t working as expected.':
          ['用户反馈小部件允许用户在遇到不符合预期的情况时快速轻松地提交反馈。'],
        Requests: ['请求'],
        'Average [dataType] Size': ['平均 [dataType] 大小'],
        Blocking: ['阻塞'],
        'On average, this resource is [bytes] when encoded (for example when gzipped).': [
          '平均而言，此资源在编码时（例如 gzip 压缩时）为 [bytes]。',
        ],
        'On average, this resource is [bytes] when decoded.': [
          '平均而言，此资源在解码时为 [bytes]。',
        ],
        'On average, the total bytes transferred over the network (body + headers) for this resource is [bytes].':
          ['平均而言，此资源在网络上传输的总字节数（正文 + 标头）为 [bytes]。'],
        "We couldn't find any size information for this resource, this is likely because the `timing-allow-origin` header is not set.":
          [
            '我们找不到此资源的任何大小信息，这可能是因为未设置 `timing-allow-origin` 标头。',
          ],
        Stylesheet: ['样式表'],
        Font: ['字体'],
        'No images detected': ['未检测到图像'],
        'Images not shown': ['未显示图像'],
        'You know, you can see the actual images that are on your site if you opt into this feature.':
          ['您知道，如果您启用此功能，您可以看到网站上的实际图像。'],
        ' Enable in Settings': ['在设置中启用'],
        'Largest Images': ['最大的图像'],
        Example: ['示例'],
        'Render Blocking': ['渲染阻塞'],
        "If you're noticing unusually large resource sizes, try updating to SDK version 7.82.0 or higher.":
          ['如果您注意到不寻常的资源大小，请尝试更新到 7.82.0 或更高版本的 SDK。'],
        Assets: ['资源'],
        Asset: ['资源'],
        'Find large and slow-to-load resources used by your application and understand their impact on page performance.':
          ['找出应用程序使用的大型且加载缓慢的资源，并了解其对页面性能的影响。'],
        '[dataType] Summary': ['[dataType] 摘要'],
        'Browser Type': ['浏览器类型'],
        'Score Breakdown': ['得分分解'],
        'Performance Score': ['性能得分'],
        'The overall performance rating of this page.': ['此页面的整体性能评分。'],
        'How is this calculated?': ['这是如何计算的？'],
        'No Web Vitals found': ['未找到网络核心指标'],
        'View Full Waterfall': ['查看完整瀑布图'],
        'Page Loads': ['页面加载'],
        'The total number of times that users have loaded this page. This number does not include any page navigations beyond initial page loads.':
          ['用户加载此页面的总次数。此数字不包括初始页面加载之外的任何页面导航。'],
        Interactions: ['交互'],
        'The total number of times that users performed an INP on this page.': [
          '用户在此页面上执行 INP 的总次数。',
        ],
        'No Change': ['无变化'],
        'Web Vital': ['网络核心指标'],
        'Interaction Target': ['交互目标'],
        Inp: ['INP'],
        Opportunity: ['优化机会'],
        'Perf Score': ['性能得分'],
        "A number rating how impactful a performance improvement on this page would be to your application's overall Performance Score.":
          ['一个数字，用于评估此页面的性能改进对您的应用程序整体性能得分的影响程度。'],
        'Search for more Pages': ['搜索更多页面'],
        Pages: ['页面'],
        'Data Type': ['数据类型'],
        Pageloads: ['页面加载'],
        'At the moment, there is support for [webVital] in the following browsers:': [
          '目前，以下浏览器支持 [webVital]：',
        ],
        'First Contentful Paint (FCP) measures the amount of time the first content takes to render in the viewport. Like FP, this could also show up in any form from the document object model (DOM), such as images, SVGs, or text blocks.':
          [
            '首次内容绘制 (FCP) 测量第一个内容在视口中渲染所需的时间。与 FP 一样，这也可以以文档对象模型 (DOM) 中的任何形式出现，例如图像、SVG 或文本块。',
          ],
        'Cumulative Layout Shift (CLS) is the sum of individual layout shift scores for every unexpected element shift during the rendering process. Imagine navigating to an article and trying to click a link before the page finishes loading. Before your cursor even gets there, the link may have shifted down due to an image rendering. Rather than using duration for this Web Vital, the CLS score represents the degree of disruptive and visually unstable shifts.':
          [
            '累积布局偏移 (CLS) 是在渲染过程中每个意外元素偏移的个体布局偏移得分之和。想象一下，在页面加载完成之前导航到一篇文章并尝试点击链接。在您的光标到达之前，链接可能因为图像渲染而向下移动。对于这个网络核心指标，CLS 得分代表了破坏性和视觉不稳定偏移的程度。',
          ],
        'Largest Contentful Paint (LCP) measures the render time for the largest content to appear in the viewport. This may be in any form from the document object model (DOM), such as images, SVGs, or text blocks. It’s the largest pixel area in the viewport, thus most visually defining. LCP helps developers understand how long it takes to see the main content on the page.':
          [
            '最大内容绘制 (LCP) 测量最大的内容在视口中出现的渲染时间。这可以是来自文档对象模型 (DOM) 的任何形式，例如图像、SVG 或文本块。它是视口中的最大像素区域，因此在视觉上最具定义性。LCP 帮助开发人员了解看到页面主内容需要多长时间。',
          ],
        'Time to First Byte (TTFB) is a foundational metric for measuring connection setup time and web server responsiveness in both the lab and the field. It helps identify when a web server is too slow to respond to requests. In the case of navigation requests—that is, requests for an HTML document—it precedes every other meaningful loading performance metric.':
          [
            '首次字节时间 (TTFB) 是测量连接建立时间和网络服务器响应性的基础指标，无论是在实验室环境中还是在实际使用中。它有助于识别网络服务器响应请求是否过慢。在导航请求的情况下（即，对 HTML 文档的请求），它先于所有其他有意义的加载性能指标。',
          ],
        "Interaction to Next Paint (INP) is a metric that assesses a page's overall responsiveness to user interactions by observing the latency of all click, tap, and keyboard interactions that occur throughout the lifespan of a user's visit to a page. The final INP value is the longest interaction observed, ignoring outliers.":
          [
            '交互到下次绘制 (INP) 是一个指标，通过观察用户访问页面期间发生的所有点击、轻触和键盘交互的延迟来评估页面对用户交互的整体响应能力。最终的 INP 值是观察到的最长交互时间，忽略异常值。',
          ],
        'No Data': ['无数据'],
        'Time To First Byte': ['首次字节时间'],
        'The p75 [webVital] value and aggregate [webVital] score of your selected project(s).\n                          Scores and values may share some (but not perfect) correlation.':
          [
            '所选项目（s）的 p75 [webVital] 值和聚合 [webVital] 得分。\n                          得分和值可能有一些（但并非完全）相关性。',
          ],
        'Find out how performance scores are calculated here.': [
          '在这里了解性能得分是如何计算的。',
        ],
        'No [webVital] data found in this project.': [
          '在此项目中未找到 [webVital] 数据。',
        ],
        "A number rating how impactful a performance improvement on this page would be to your application's [webVital] Performance Score.":
          [
            '一个数字，用于评估此页面的性能改进对您的应用程序 [webVital] 性能得分的影响程度。',
          ],
        'Measure the quality of real user experience in your web applications using industry standard quality signals.':
          ['使用行业标准的质量信号来衡量您的 Web 应用程序中真实用户体验的质量。'],
        Good: ['良好'],
        Meh: ['一般'],
        Poor: ['差'],
        'View Transaction Summary': ['查看事务摘要'],
        'Aggregate Spans': ['聚合跨度'],
        'If pages you expect to see are missing, your framework is most likely not supported by the SDK, or your traffic is coming from unsupported browsers. Find supported browsers and frameworks [link:here].':
          [
            '如果您期望看到的页面缺失，很可能您的框架不受 SDK 支持，或者您的流量来自不受支持的浏览器。找到受支持的浏览器和框架 [link:这里]。',
          ],
        'Keep your JavaScript SDK updated to the latest version for the best Web Vitals support.':
          ['将您的 JavaScript SDK 更新到最新版本，以获得最佳的 Web Vitals 支持。'],
        'Why are my pages not showing up?': ['为什么我的页面没有显示？'],
        'Average Transaction Duration': ['平均事务持续时间'],
        'Search for span attributes': ['搜索跨度属性'],
        'Try Different Samples': ['尝试不同的样本'],
        Hit: ['命中'],
        Miss: ['未命中'],
        HIT: ['命中'],
        MISS: ['未命中'],
        'Span Description': ['跨度描述'],
        'Value Size': ['值大小'],
        'Discover whether your application is utilizing caching effectively and understand the latency associated with cache misses.':
          ['了解您的应用程序是否有效地利用了缓存，并了解缓存未命中相关的延迟。'],
        Caches: ['缓存'],
        Cache: ['缓存'],
        "If you're noticing missing cache data, try updating to the latest SDK or ensure spans are manually instrumented with the right attributes. To learn more, ":
          [
            '如果您注意到缓存数据缺失，请尝试更新到最新 SDK 或确保手动为跨度添加正确的属性。要了解更多，请：',
          ],
        'Expand Insight Chart': ['展开洞察图表'],
        'Dock to the bottom': ['停靠到底部'],
        'Dock to the right': ['停靠到右侧'],
        'Close Details': ['关闭详情'],
        '[count] [text]': ['[count] [text]'],
        'Make sure you have the correct project selected.': ['确保您选择了正确的项目。'],
        'Supported Today: ': ['今天支持：'],
        "Don't lose your user's attention before your app loads": [
          '在您的应用加载之前不要失去用户的注意力',
        ],
        'Monitor cold and warm [dataTypePlural] and track down the operations and releases contributing to regressions.':
          ['监控冷启动和热启动 [dataTypePlural]，并追踪导致回归的操作和版本。'],
        'Mobile [dataType] insights give you visibility into:': [
          '移动 [dataType] 洞察使您能够了解：',
        ],
        'Application start duration broken down by release.': [
          '按版本划分的应用启动持续时间。',
        ],
        'Performance by device class.': ['按设备类别划分的性能。'],
        'Real user performance metrics.': ['真实用户的性能指标。'],
        'Find out what your LLM model is actually saying': [
          '了解您的 LLM 模型实际在说什么',
        ],
        'Get insights into critical [dataType] metrics, like token usage, to monitor and fix issues with AI pipelines.':
          [
            '获取有关关键 [dataType] 指标的洞察，如令牌使用情况，以监控和修复 AI 管道中的问题。',
          ],
        'See what your [dataTypePlural] are doing in production by monitoring:': [
          '通过监控以下内容，了解您的 [dataTypePlural] 在生产环境中的表现：',
        ],
        'Token cost and usage per-provider and per-pipeline.': [
          '按提供商和管道划分的令牌成本和使用情况。',
        ],
        'The inputs and outputs of [dataType] calls.': ['[dataType] 调用的输入和输出。'],
        'Performance and timing information about [dataTypePlural] in production.': [
          '生产环境中 [dataTypePlural] 的性能和时间信息。',
        ],
        TODO: ['待办事项'],
        'Mobile UI load insights include:': ['移动 UI 加载洞察包括：'],
        'Mobile Screens': ['移动屏幕'],
        'Explore mobile app metrics.': ['探索移动应用指标。'],
        'Bringing you one less hard problem in computer science': [
          '为您减少一个计算机科学中的难题',
        ],
        'We’ll tell you if the parts of your application that interact with caches are hitting cache as often as intended, and whether caching is providing the performance improvements expected.':
          [
            '我们会告诉您，与缓存交互的应用程序部分是否按预期频率命中缓存，以及缓存是否提供了预期的性能改进。',
          ],
        '[dataType] insights include:': ['[dataType] 洞察包括：'],
        'Throughput of your cached endpoints.': ['缓存端点的吞吐量。'],
        'Average [dataType] hit and miss duration.': [
          '平均 [dataType] 命中和未命中持续时间。',
        ],
        'Hit / miss ratio of keys accessed by your application.': [
          '应用访问的键的命中/未命中比率。',
        ],
        'Fix the slow [dataTypePlural] you honestly intended to get back to later': [
          '修复您确实打算稍后处理的慢速 [dataTypePlural]',
        ],
        'Investigate the performance of database [dataTypePlural] and get the information necessary to improve them.':
          ['调查数据库 [dataTypePlural] 的性能并获取改进它们所需的信息。'],
        '[dataType] insights give you visibility into:': [
          '[dataType] 洞察使您能够了解：',
        ],
        'Slow [dataTypePlural].': ['慢速 [dataTypePlural]。'],
        'High volume [dataTypePlural].': ['高容量 [dataTypePlural]。'],
        'One off slow queries, vs. trends': ['一次性慢查询与趋势'],
        'Are your API dependencies working as well as their landing page promised? ': [
          '您的 API 依赖是否如其着陆页所承诺的那样运作良好？',
        ],
        'See the outbound HTTP requests being made to internal and external APIs, allowing you to understand trends in status codes, latency, and throughput.':
          [
            '查看发送到内部和外部 API 的出站 HTTP 请求，使您能够了解状态码、延迟和吞吐量的趋势。',
          ],
        'Anomalies in status codes by domain.': ['按域名划分的状态码异常。'],
        'Request throughput by domain.': ['按域名划分的请求吞吐量。'],
        'Average duration of requests.': ['请求的平均持续时间。'],
        'Is your favourite animated gif worth the time it takes to load?': [
          '您最喜欢的动画 GIF 的加载时间是否值得？',
        ],
        'Find large and slow-to-load [dataTypePlurl] used by your application and understand their impact on page performance.':
          [
            '找出应用程序使用的大型且加载缓慢的 [dataTypePlurl]，并了解其对页面性能的影响。',
          ],
        '[dataType] performance broken down by category and domain.': [
          '按类别和域名划分的 [dataType] 性能。',
        ],
        'Whether [dataTypePlural] are blocking page rendering.': [
          '[dataTypePlural] 是否阻塞页面渲染。',
        ],
        '[dataType] size and whether it’s growing over time.': [
          '[dataType] 大小以及它是否随时间增长。',
        ],
        'Finally answer, is this page slow for everyone or just me?': [
          '终于能够回答：这个页面是对我慢还是对所有人慢？',
        ],
        'Get industry standard metrics telling you the quality of user experience on a web page and see what needs improving.':
          ['获取行业标准指标，了解网页上的用户体验质量，并查看需要改进的地方。'],
        'Performance scores broken down by page.': ['按页面划分的性能得分。'],
        'Performance metrics for individual operations that affect page performance.': [
          '影响页面性能的各个操作的性能指标。',
        ],
        'Drill down to real user sessions.': ['深入到真实用户会话。'],
        'Ensure your background jobs aren’t being sent to /dev/null': [
          '确保您的后台作业不会被发送到 /dev/null',
        ],
        'Understand the health and performance impact that [dataTypePlural] have on your application and diagnose errors tied to jobs.':
          ['了解 [dataTypePlural] 对应用程序的健康和性能影响，并诊断与作业相关的错误。'],
        'Metrics for how long jobs spend processing and waiting in queue.': [
          '作业在队列中处理和等待的时间指标。',
        ],
        'Job error rates and retry counts.': ['作业错误率和重试次数。'],
        'Published vs., processed job volume.': ['已发布与已处理的作业量。'],
        "Don’t lose your user's attention once your app loads": [
          '一旦您的应用加载，不要失去用户的注意力',
        ],
        'View the most active [dataTypePlural] in your mobile application and monitor your releases for screen load performance.':
          ['查看移动应用中最活跃的 [dataTypePlural]，并监控版本的屏幕加载性能。'],
        'Compare metrics across releases, root causing performance degradations.': [
          '跨版本比较指标，找出性能退化的根源。',
        ],
        'See performance by device class.': ['按设备类别查看性能。'],
        'Release 1': ['版本 1'],
        'Release 2': ['版本 2'],
        'Filter Release': ['筛选版本'],
        'No screens': ['无屏幕'],
        '%s event': ['%s 事件'],
        '%s events': ['%s 事件'],
        'Near Average': ['接近平均'],
        'Status Code [code] “[explanation]”': ['状态码 [code] “[explanation]”'],
        'The application spent [percentage] of its total time on this [span]. Read more about Time Spent in our [documentation:documentation].':
          [
            '应用程序在其总时间的 [percentage] 上花费在这个 [span] 上。在我们的 [documentation: 文档] 中阅读更多关于花费时间的内容。',
          ],
        custom: ['自定义'],
        '(No Detected %s)': ['（未检测到 %s）'],
        'SQL Command': ['SQL 命令'],
        Resource: ['资源'],
        Domain: ['域名'],
        '(No %s)': ['（无 %s）'],
        'Geo region': ['地理区域'],
        'Filter region': ['筛选区域'],
        Page: ['页面'],
        '5XX Responses': ['5XX 响应'],
        'Slow Frames %': ['慢帧 %'],
        'Bundle size': ['包大小'],
        'Avg Encoded Size': ['平均编码大小'],
        'Avg Decoded Size': ['平均解码大小'],
        'Avg Transfer Size': ['平均传输大小'],
        'Avg Transaction Duration': ['平均事务持续时间'],
        'Avg Value Size': ['平均值大小'],
        'Response Codes (3XX, 4XX, 5XX)': ['响应码（3XX, 4XX, 5XX）'],
        'Response Code Breakdown': ['响应码分解'],
        'Miss Rate': ['未命中率'],
        'Time Spent': ['花费时间'],
        'Duration (P50, P95)': ['持续时间（P50, P95）'],
        'Duration (P50)': ['持续时间（P50）'],
        'An error has occurred while loading chart data': ['加载图表数据时发生错误'],
        'Last period': ['上一周期'],
        'Last %s': ['最近 %s'],
        Span: ['跨度'],
        Sample: ['样本'],
        'Encoded Size': ['编码大小'],
        'An error has occurred while loading the samples table': ['加载样本表时发生错误'],
        'Spans per second': ['每秒跨度数'],
        'Spans per minute': ['每分钟跨度数'],
        'Span time spent percentage': ['跨度时间花费百分比'],
        'Count of 5XX http errors': ['5XX HTTP 错误计数'],
        'Percentage of HTTP responses by code': ['按代码划分的 HTTP 响应百分比'],
        'Percentage of cache hits': ['缓存命中百分比'],
        'Percentage of cache misses': ['缓存未命中百分比'],
        'Count of spans with matching operation': ['匹配操作的跨度计数'],
        'Percentage of spans with matching trace status': ['匹配跟踪状态的跨度百分比'],
        'No queries found. Try updating your filters, or learn more about performance monitoring for queries in our [documentation:documentation].':
          [
            '未找到查询。请更新您的筛选条件，或在我们的 [documentation: 文档] 中了解更多关于查询的性能监控。',
          ],
        'You may be missing data due to outdated SDKs: [projectList].': [
          '由于 SDK 过时，您可能缺失数据：[projectList]。',
        ],
        'Some of your projects have been omitted from query performance analysis. Please [supportLink]. Omitted projects: [projectList].':
          [
            '您的某些项目已被排除在查询性能分析之外。请 [supportLink]。被排除的项目：[projectList]。',
          ],
        ' and [count] more.': ['还有 [count] 个更多。'],
        'Could not find query source in the selected date range. Learn more in our [documentation:documentation].':
          ['在所选日期范围内找不到查询来源。在我们的 [documentation: 文档] 中了解更多。'],
        'Query Description': ['查询描述'],
        'Found In': ['发现于'],
        'Investigate the performance of database queries and get the information necessary to improve them.':
          ['调查数据库查询的性能并获取改进它们所需的信息。'],
        'Search for more Queries': ['搜索更多查询'],
        'Query Summary': ['查询摘要'],
        'Top 5 Response Codes': ['前五个响应码'],
        '3XXs': ['3XXs'],
        '4XXs': ['4XXs'],
        '5XXs': ['5XXs'],
        'Choose breakdown type': ['选择分解类型'],
        'By Duration': ['按持续时间'],
        'By Response Code': ['按响应码'],
        'Response Code': ['响应码'],
        '2XXs': ['2XXs'],
        Domains: ['域名'],
        'Non-Authoritative Information': ['非权威信息'],
        'No Content': ['无内容'],
        'Reset Content': ['重置内容'],
        'Partial Content': ['部分内容'],
        'Multi-Status': ['多状态'],
        'Already Reported': ['已报告'],
        'IM Used': ['使用 IM'],
        'Multiple Choices': ['多种选择'],
        'Moved Permanently': ['永久移动'],
        Found: ['已找到'],
        'See Other': ['查看其他'],
        'Not Modified': ['未修改'],
        'Use Proxy': ['使用代理'],
        'Temporary Redirect': ['临时重定向'],
        'Permanent Redirect': ['永久重定向'],
        'Bad Request': ['请求错误'],
        Unauthorized: ['未经授权'],
        'Payment Required': ['需要付款'],
        'Method Not Allowed': ['方法不允许'],
        'Not Acceptable': ['不可接受'],
        'Proxy Authentication Required': ['需要代理认证'],
        'Request Timeout': ['请求超时'],
        Conflict: ['冲突'],
        Gone: ['已删除'],
        'Length Required': ['需要长度'],
        'Precondition Failed': ['前置条件失败'],
        'Payload Too Large': ['负载过大'],
        'URI Too Long': ['URI 过长'],
        'Unsupported Media Type': ['不支持的媒体类型'],
        'Range Not Satisfiable': ['范围不可满足'],
        'Expectation Failed': ['期望失败'],
        'I’m a teapot': ['我是一个茶壶'],
        'Misdirected Request': ['请求误投'],
        'Unprocessable Content': ['无法处理的内容'],
        Locked: ['已锁定'],
        'Failed Dependency': ['依赖失败'],
        'Too Early': ['过早'],
        'Switching Protocols': ['切换协议'],
        'Upgrade Required': ['需要升级'],
        'Precondition Required': ['需要前置条件'],
        'Too Many Requests': ['请求过多'],
        'Request Header Fields Too Large': ['请求头字段过大'],
        'Unavailable For Legal Reasons': ['因法律原因不可用'],
        'Not Implemented': ['未实现'],
        'Bad Gateway': ['网关错误'],
        'Service Unavailable': ['服务不可用'],
        'Gateway Timeout': ['网关超时'],
        'HTTP Version Not Supported': ['HTTP 版本不支持'],
        'Variant Also Negotiates': ['变体也协商'],
        'Insufficient Storage': ['存储不足'],
        'Loop Detected': ['检测到循环'],
        'Not Extended': ['未扩展'],
        'Network Authentication Required': ['需要网络认证'],
        'Early Hints': ['早期提示'],
        OK: ['正常'],
        'Unknown Domain': ['未知域名'],
        'Monitor outgoing HTTP requests and investigate errors and performance bottlenecks tied to domains.':
          ['监控出站 HTTP 请求，并调查与域名相关的错误和性能瓶颈。'],
        'Outbound API Requests': ['出站 API 请求'],
        '"Unknown Domain" entries can be caused by instrumentation errors. Please refer to our [link] for more information.':
          [
            '“Unknown Domain” 条目可能是由于仪器错误引起的。请参阅我们的 [link] 以获取更多信息。',
          ],
        '3XX': ['3XX'],
        '4XX': ['4XX'],
        '5XX': ['5XX'],
        'Domain Summary': ['域名摘要'],
        'Search for more domains': ['搜索更多域名'],
        'Total tokens used': ['总令牌使用量'],
        'Number of AI pipelines': ['AI 管道数量'],
        'Pipeline Duration': ['管道持续时间'],
        'Total duration': ['总持续时间'],
        'Search for pipeline': ['搜索管道'],
        "Cost is calculated for some of the most popular models, but some providers aren't yet supported.":
          ['成本是为一些最受欢迎的模型计算的，但有些提供商尚未得到支持。'],
        'AI Pipeline Name': ['AI 管道名称'],
        'Total cost': ['总成本'],
        'Pipeline runs': ['管道运行次数'],
        'LLM Monitoring': ['大型语言模型监控'],
        LLM: ['大型语言模型'],
        LLMs: ['大型语言模型'],
        'Pipeline Runs Per Minute': ['每分钟管道运行次数'],
        'Pipeline Summary': ['管道摘要'],
        'Total Tokens Used': ['总令牌使用量'],
      };
      var trans7 = {
        'Total Cost': ['总成本'],
        'View analytics and information about your AI pipelines': [
          '查看有关您的 AI 管道的分析和信息',
        ],
        'No screens found on recent releases. Please try a single iOS or Android project, a single environment or a smaller date range.':
          [
            '在最近的版本中未找到屏幕。请尝试选择一个 iOS 或 Android 项目、一个环境或更小的日期范围。',
          ],
        'Top Screen Cold Start': ['屏幕冷启动次数最多的'],
        'Top %s Screen Cold Starts': ['前 %s 屏幕冷启动次数'],
        'Top Screen Warm Start': ['屏幕热启动次数最多的'],
        'Top %s Screen Warm Starts': ['前 %s 屏幕热启动次数'],
        '%s v. %s': ['%s 对比 %s'],
        'Search for Screen': ['搜索屏幕'],
        'Average Cold Start': ['平均冷启动时间'],
        'Average Warm Start': ['平均热启动时间'],
        'Cold Start Count': ['冷启动次数'],
        'Warm Start Count': ['热启动次数'],
        'Cold Start Device Distribution': ['冷启动设备分布'],
        'Warm Start Device Distribution': ['热启动设备分布'],
        'Event ID (%s)': ['事件 ID (%s)'],
        'Sample Type Selection': ['样本类型选择'],
        'By Spans': ['按跨度'],
        'By Event': ['按事件'],
        'Cold Start': ['冷启动'],
        'Warm Start': ['热启动'],
        'App Start': ['应用启动'],
        Screen: ['屏幕'],
        'Avg Cold Start (%s)': ['平均冷启动时间 (%s)'],
        'Avg Warm Start (%s)': ['平均热启动时间 (%s)'],
        'Type Breakdown': ['类型分解'],
        'Average Cold Start difference': ['平均冷启动时间差异'],
        'Average Warm Start difference': ['平均热启动时间差异'],
        'Avg Duration (%s)': ['平均持续时间 (%s)'],
        'App Starts': ['应用启动次数'],
        'Improve the latency associated with your application starting up. ': [
          '改善应用程序启动时的延迟。',
        ],
        'Count (%s)': ['计数 (%s)'],
        'Screen Summary': ['屏幕摘要'],
        'Device Class': ['设备类别'],
        'Compared to Average': ['与平均值相比'],
        'Invalid selection. Try a different release or date range.': [
          '选择无效。请尝试不同的版本或日期范围。',
        ],
        'TTID by Device Class': ['按设备类别划分的 TTID'],
        'Average TTID': ['平均 TTID'],
        'TTFD by Device Class': ['按设备类别划分的 TTFD'],
        'Average TTFD': ['平均 TTFD'],
        TTID: ['首次显示时间'],
        TTFD: ['完全显示时间'],
        'Filter platform': ['筛选平台'],
        '%s by Top Screen': ['按顶级屏幕划分的 %s'],
        'Search for Screens': ['搜索屏幕'],
        'Total Count': ['总次数'],
        Affects: ['影响'],
        'Affects TTID': ['影响 TTID'],
        'This span always ends before TTID and TTFD and may affect initial and final display. [link: Learn more.]':
          [
            '此跨度总是在 TTID 和 TTFD 之前结束，可能会影响初始和最终显示。[链接：了解更多。]',
          ],
        'TTID, TTFD': ['TTID, TTFD'],
        'This span always ends before TTFD and may affect final display. [link: Learn more.]':
          ['此跨度总是在 TTFD 之前结束，可能会影响最终显示。[链接：了解更多。]'],
        'This span may not be contributing to TTID or TTFD. [link: Learn more.]': [
          '此跨度可能不会对 TTID 或 TTFD 产生影响。[链接：了解更多。]',
        ],
        'This span always ends before TTID and may affect initial display. [link: Learn more.]':
          ['此跨度总是在 TTID 之前结束，可能会影响初始显示。[链接：了解更多。]'],
        'This span may not affect initial display. [link: Learn more.]': [
          '此跨度可能不会影响初始显示。[链接：了解更多。]',
        ],
        'Measuring TTFD requires manual instrumentation in your application. To learn how to collect TTFD, see the documentation [link].':
          [
            '测量 TTFD 需要在您的应用程序中进行手动instrumentation。有关如何收集 TTFD 的信息，请参阅文档 [链接]。',
          ],
        'AVG TTID (%s)': ['平均 TTID (%s)'],
        'AVG TTFD (%s)': ['平均 TTFD (%s)'],
        'Average time to initial display of %s.': ['%s 的平均初始显示时间。'],
        'Average time to full display of %s.': ['%s 的平均完全显示时间。'],
        'The total count of screen loads.': ['屏幕加载的总次数。'],
        'Slow Frame Rate': ['慢帧率'],
        'Frozen Frame Rate': ['冻结帧率'],
        'Frames Delay': ['帧延迟'],
        'Screen Loads': ['屏幕加载次数'],
        'Screen Load': ['屏幕加载'],
        'View the most active screens in your mobile application and monitor your releases for TTID and TTFD regressions.':
          ['查看移动应用中最活跃的屏幕，并监控版本的 TTID 和 TTFD 回归情况。'],
        'Avg TTID (%s)': ['平均 TTID (%s)'],
        'Avg TTFD (%s)': ['平均 TTFD (%s)'],
        'Total Count (%s)': ['总次数 (%s)'],
        "Improve your application's responsiveness.": ['提高应用的响应能力。'],
        'insights-mobile-screens-module': ['移动屏幕洞察模块'],
        'Screen Rendering': ['屏幕渲染'],
        'Cold App Start': ['冷启动应用'],
        'Average Cold App Start duration': ['平均冷启动应用持续时间'],
        'Warm App Start': ['热启动应用'],
        'Average Warm App Start duration': ['平均热启动应用持续时间'],
        'Average number of slow frames': ['平均慢帧数'],
        'Average number of frozen frames': ['平均冻结帧数'],
        'Frame Delay': ['帧延迟'],
        'Average frame delay': ['平均帧延迟'],
        'Average time to intial display.': ['平均初始显示时间。'],
        'Average time to full display.': ['平均完全显示时间。'],
        'Top Screen Frames Delay': ['屏幕帧延迟最多的'],
        'Top %s Screen Frames Delay': ['前 %s 屏幕帧延迟'],
        'Top Screen Slow Frames': ['屏幕慢帧最多的'],
        'Top %s Screen Slow Frames': ['前 %s 屏幕慢帧'],
        'Top Screen Frozen Frames': ['屏幕冻结帧最多的'],
        'Top %s Screen Frozen Frames': ['前 %s 屏幕冻结帧'],
        'Slow (%s)': ['慢 (%s)'],
        'Frozen (%s)': ['冻结 (%s)'],
        'Delay (%s)': ['延迟 (%s)'],
        'The number of slow frames divided by total frames (%s)': [
          '慢帧数占总帧数的比例 (%s)',
        ],
        'The number of frozen frames divided by total frames (%s)': [
          '冻结帧数占总帧数的比例 (%s)',
        ],
        'The average frame delay (%s)': ['平均帧延迟 (%s)'],
        'Mobile UI': ['移动 UI'],
        'Avg Latency': ['平均延迟'],
        'Average Time in Queue': ['平均队列时间'],
        'Average Processing Time': ['平均处理时间'],
        'Published vs Processed': ['已发布与已处理'],
        Published: ['已发布'],
        Processed: ['已处理'],
        Producer: ['生产者'],
        Consumer: ['消费者'],
        Retries: ['重试次数'],
        'Error Rate': ['错误率'],
        'Avg Time In Queue': ['平均队列时间'],
        'Avg Processing Time': ['平均处理时间'],
        'Message ID': ['消息 ID'],
        'Span Duration': ['跨度持续时间'],
        'Message Size': ['消息大小'],
        Destination: ['目的地'],
        'Avg Time in Queue': ['平均队列时间'],
        Queues: ['队列'],
        'Destination Summary': ['目的地摘要'],
        'Understand the health and performance impact that queues have on your application and diagnose errors tied to jobs.':
          ['了解队列对应用程序的健康和性能影响，并诊断与作业相关的错误。'],
        'Search for more destinations': ['搜索更多目的地'],
        'Failed to retrieve GitHub installation details': [
          '获取 GitHub 安装详细信息失败',
        ],
        'Failed to retrieve organization or integration details': [
          '获取组织或集成详细信息失败',
        ],
        'You do not have permission to install integrations in\n                [organization]. Ask an organization owner or manager to\n                visit this page to finish installing this integration.':
          [
            '您没有权限在 [organization] 中安装集成。请让组织的所有者或管理员访问此页面以完成集成安装。',
          ],
        'The following features will be available for [organization] when installed.': [
          '安装后，以下功能将对 [organization] 可用。',
        ],
        'GitHub user [sender_login] has installed GitHub app to [account_type] [account_login]. Proceed if you want to attach this installation to your Sentry account.':
          [
            'GitHub 用户 [sender_login] 已将 GitHub 应用安装到 [account_type] [account_login]。如果您希望将此安装附加到您的 Sentry 账户，请继续。',
          ],
        'Please pick a specific [organization:organization] to link with\n            your integration installation of [integation].':
          [
            '请选择一个特定的 [organization:organization] 以链接到您的 [integation] 集成安装。',
          ],
        'Account ID required': ['需要账户 ID'],
        'Invalid Account ID': ['账户 ID 无效'],
        "Add Sentry's CloudFormation": ['添加 Sentry 的 CloudFormation'],
        "Once you've created Sentry's CloudFormation stack (or if you already have one) press the button below to continue.":
          [
            '一旦您创建了 Sentry 的 CloudFormation 堆栈（或者如果您已经有一个），请点击下面的按钮继续。',
          ],
        "I've created the stack": ['我已经创建了堆栈'],
        'Add AWS Account Information': ['添加 AWS 账户信息'],
        'AWS Account ID': ['AWS 账户 ID'],
        'Your Account ID can be found on the right side of the header in AWS': [
          '您的账户 ID 可以在 AWS 的页眉右侧找到',
        ],
        'AWS Region': ['AWS 区域'],
        'Your current region can be found on the right side of the header in AWS': [
          '您的当前区域可以在 AWS 的页眉右侧找到',
        ],
        'External ID Required': ['需要外部 ID'],
        'External ID': ['外部 ID'],
        'Do not edit unless you are copying from a previously created CloudFormation stack':
          ['除非您是从以前创建的 CloudFormation 堆栈中复制，否则不要编辑'],
        'successfully updated %s function': ['成功更新 %s 函数'],
        'successfully updated %s functions': ['成功更新 %s 函数'],
        'Failed to update %s function': ['更新 %s 函数失败'],
        'Failed to update %s functions': ['更新 %s 函数失败'],
        'See [link:Troubleshooting Docs]': ['请参阅 [链接：故障排除文档]'],
        'Lambda Functions': ['Lambda 函数'],
        'Disable All': ['全部禁用'],
        'Enable All': ['全部启用'],
        'Decide which functions you would like to enable for Sentry monitoring': [
          '决定您希望启用哪些函数进行 Sentry 监控',
        ],
        'We found %s function with a Node or Python runtime': [
          '我们找到了一个具有 Node 或 Python 运行时的函数',
        ],
        'We found %s functions with Node or Python runtimes': [
          '我们找到了具有 Node 或 Python 运行时的函数',
        ],
        'This might take a while…': ['这可能需要一段时间…'],
        'This might take a sec…': ['这可能需要几秒钟…'],
        'Adding Sentry to %s functions': ['将 Sentry 添加到 %s 函数'],
        'Select a project for your AWS Lambdas': ['为您的 AWS Lambda 选择一个项目'],
        'Currently only supports Node and Python Lambda functions': [
          '目前仅支持 Node 和 Python Lambda 函数',
        ],
        'Need Help?': ['需要帮助吗？'],
        'Delete event…': ['删除事件…'],
        'Discarding event…': ['丢弃事件…'],
        'Discard and Delete': ['丢弃并删除'],
        'More Actions': ['更多操作'],
        'Mark reviewed': ['标记为已审查'],
        'Issue has been reviewed': ['问题已被审查'],
        'Reprocess events': ['重新处理事件'],
        'Remove bookmark': ['移除书签'],
        'Give feedback on new UI': ['对新 UI 提供反馈'],
        'How can we make this new UI work for you?': ['我们如何使这个新 UI 更适合您？'],
        'Switch to the old issue experience': ['切换到旧的问题体验'],
        'Switch to the new issue experience': ['切换到新的问题体验'],
        'Share a link with anyone outside your organization': [
          '与组织外的任何人分享链接',
        ],
        Unshare: ['取消分享'],
        'Generate new URL. Invalidates previous URL': ['生成新 URL。使之前的 URL 失效'],
        'Generate new URL': ['生成新 URL'],
        'Copy Link': ['复制链接'],
        'Share Issue': ['分享问题'],
        'Create a public link': ['创建公共链接'],
        title: ['标题'],
        trace: ['跟踪'],
        device: ['设备'],
        minidump: ['内存转储'],
        timestamp: ['时间戳'],
        'total duration': ['总持续时间'],
        runtime: ['运行时'],
        url: ['网址'],
        browser: ['浏览器'],
        replay: ['重放'],
        profile: ['配置文件'],
        Occurred: ['发生时间'],
        Received: ['接收时间'],
        '[author] [action] this issue until it happens [count] time(s) in [duration]': [
          '[author] 将此问题 [action] 直到它在 [duration] 内发生 [count] 次',
        ],
        '[author] [action] this issue until it happens [count] time(s)': [
          '[author] 将此问题 [action] 直到它发生 [count] 次',
        ],
        '[author] [action] this issue until it affects [count] user(s) in [duration]': [
          '[author] 将此问题 [action] 直到它在 [duration] 内影响 [count] 个用户',
        ],
        '[author] [action] this issue until it affects [count] user(s)': [
          '[author] 将此问题 [action] 直到它影响 [count] 个用户',
        ],
        '[author] [action] this issue until [date]': [
          '[author] 将此问题 [action] 直到 [date]',
        ],
        '[author] archived this issue until it escalates': [
          '[author] 将此问题存档直到它升级',
        ],
        '[author] marked this feedback as spam': ['[author] 将此反馈标记为垃圾信息'],
        '[author] [action] this issue forever': ['[author] 将此问题 [action] 永久'],
        '[author] flagged this issue as escalating because over [forecast] [event] happened in an hour':
          ['[author] 将此问题标记为升级，因为在一小时内发生了超过 [forecast] 个 [event]'],
        '[author] flagged this issue as escalating because [count] [event] happened in [duration]':
          ['[author] 将此问题标记为升级，因为在 [duration] 内发生了 [count] 个 [event]'],
        '[author] flagged this issue as escalating because [count] [event] happened': [
          '[author] 将此问题标记为升级，因为发生了 [count] 个 [event]',
        ],
        '[author] flagged this issue as escalating because [count] [user] affected in [duration]':
          ['[author] 将此问题标记为升级，因为在 [duration] 内影响了 [count] 个 [user]'],
        '[author] flagged this issue as escalating because [count] [user] affected': [
          '[author] 将此问题标记为升级，因为影响了 [count] 个 [user]',
        ],
        '[author] flagged this issue as escalating because [date] passed': [
          '[author] 将此问题标记为升级，因为 [date] 已过',
        ],
        '[author] flagged this issue as escalating': ['[author] 将此问题标记为升级'],
        '[author] left a comment': ['[author] 留下了评论'],
        '[author] marked this [issueType] as resolved via [integration]': [
          '[author] 通过 [integration] 将此 [issueType] 标记为已解决',
        ],
        '[author] marked this [issueType] as resolved': [
          '[author] 将此 [issueType] 标记为已解决',
        ],
        '[author] marked this issue as resolved due to inactivity': [
          '[author] 因不活跃将此问题标记为已解决',
        ],
        '[author] marked this issue as resolved in releases greater than [version] [semver]':
          ['[author] 将此问题标记为在大于 [version] [semver] 的版本中已解决'],
        '[author] marked this issue as resolved in [version] [semver]': [
          '[author] 将此问题标记为在 [version] [semver] 中已解决',
        ],
        '[author] marked this issue as resolved in the upcoming release': [
          '[author] 将此问题标记为在即将发布的版本中已解决',
        ],
        '[author] marked this issue as resolved in [version] [break]This commit was released in [release]':
          [
            '[author] 将此问题标记为在 [version] 中已解决 [break] 此提交已在 [release] 中发布',
          ],
        '[author] marked this issue as resolved in [version] [break]This commit was released in [release] and [otherCount] others':
          [
            '[author] 将此问题标记为在 [version] 中已解决 [break] 此提交已在 [release] 和其他 [otherCount] 个版本中发布',
          ],
        '[author] marked this issue as resolved in [commit]': [
          '[author] 将此问题标记为在 [commit] 中已解决',
        ],
        '[author] marked this issue as resolved in a commit': [
          '[author] 将此问题标记为在一次提交中已解决',
        ],
        '[author] has created a PR for this issue: [pullRequest]': [
          '[author] 已为此问题创建了一个 PR：[pullRequest]',
        ],
        'PR not available': ['PR 不可用'],
        '[author] marked this [issueType] as unresolved via [integration]': [
          '[author] 通过 [integration] 将此 [issueType] 标记为未解决',
        ],
        '[author] marked this [issueType] as unresolved': [
          '[author] 将此 [issueType] 标记为未解决',
        ],
        '[author] made this issue public': ['[author] 将此问题设为公开'],
        '[author] made this issue private': ['[author] 将此问题设为私有'],
        '[regressionVersion] is greater than or equal to [resolvedVersion] compared via [comparison]':
          ['[regressionVersion] 大于或等于 [resolvedVersion]（通过 [comparison] 比较）'],
        'release date': ['发布日期'],
        '[author] marked this issue as a regression in [version]': [
          '[author] 将此问题标记为在 [version] 中的回归',
        ],
        '[author] marked this issue as a regression': ['[author] 将此问题标记为回归'],
        '[author] created an issue on [provider] titled [title]': [
          '[author] 在 [provider] 上创建了一个标题为 [title] 的问题',
        ],
        '%2$s migrated %1$s fingerprint to %3$s': ['%2$s 将 %1$s 指纹迁移到 %3$s'],
        '%2$s migrated %1$s fingerprints to %3$s': ['%2$s 将 %1$s 指纹迁移到 %3$s'],
        '%2$s migrated %1$s fingerprint from %3$s': ['%2$s 从 %3$s 迁移了 %1$s 指纹'],
        '%2$s migrated %1$s fingerprints from %3$s': ['%2$s 从 %3$s 迁移了 %1$s 指纹'],
        '[author] first saw this issue and marked it as [priority] priority': [
          '[author] 首次看到此问题并将其标记为 [priority] 优先级',
        ],
        '[author] first saw this issue': ['[author] 首次看到此问题'],
        '[author] unassigned this [issueType]': ['[author] 取消了此 [issueType] 的指派'],
        '%2$s merged %1$s issue into this issue': ['%2$s 将 %1$s 个问题合并到此问题中'],
        '%2$s merged %1$s issues into this issue': ['%2$s 将 %1$s 个问题合并到此问题中'],
        '[author] reprocessed the events in this issue. [new-events]': [
          '[author] 重新处理了此问题中的事件。 [new-events]',
        ],
        '[author] marked this issue as reviewed': ['[author] 将此问题标记为已审查'],
        '[author] automatically marked this issue as ongoing after [afterDays] days': [
          '[author] 在 [afterDays] 天后自动将此问题标记为进行中',
        ],
        '[author] automatically marked this issue as ongoing': [
          '[author] 自动将此问题标记为进行中',
        ],
        themselves: ['他们自己'],
        '[author] updated the priority value of this issue to be [priority] after it escalated':
          ['[author] 在此问题升级后将其优先级更新为 [priority]'],
        '[author] updated the priority value of this issue to be [priority] after it was marked as ongoing':
          ['[author] 在此问题被标记为进行中后将其优先级更新为 [priority]'],
        '[author] updated the priority value of this issue to be [priority]': [
          '[author] 将此问题的优先级更新为 [priority]',
        ],
        '[author] deleted an attachment': ['[author] 删除了一个附件'],
        'an unknown user': ['一个未知用户'],
        'Microsoft Teams': ['Microsoft Teams'],
        'Codeowners Rule': ['代码所有者规则'],
        '[author] [action] this [issueType] to [assignee]': [
          '[author] 将此 [issueType] [action] 给 [assignee]',
        ],
        'auto-assigned': ['自动指派'],
        assigned: ['已指派'],
        'Assigned via %s': ['通过 %s 指派'],
        feedback: ['反馈'],
        issue: ['问题'],
        issues: ['问题'],
        archived: ['已存档'],
        '[author] [action] this issue for [duration]': [
          '[author] 将此问题 [action] 为期 [duration]',
        ],
        'Error loading the specified project': ['加载指定项目时出错'],
        'The project %s does not exist': ['项目 %s 不存在'],
        'No crash reports found': ['未找到崩溃报告'],
        'No attachments found': ['未找到附件'],
        'Error loading attachments': ['加载附件时出错'],
        'Error loading screenshots': ['加载截图时出错'],
        'No screenshots found': ['未找到截图'],
        Algorithm: ['算法'],
        Screenshots: ['截图'],
        'Event Attachments': ['事件附件'],
        'Are you sure you wish to delete this image?': ['您确定要删除此图像吗？'],
        Minidump: ['内存转储'],
        'Event with the most context': ['上下文最多的事件'],
        'Last seen event in this issue': ['此问题中最后看到的事件'],
        'First seen event in this issue': ['此问题中首次看到的事件'],
        'Custom Selection': ['自定义选择'],
        'Event URL copied to clipboard': ['事件 URL 已复制到剪贴板'],
        'Event ID copied to clipboard': ['事件 ID 已复制到剪贴板'],
        'Event Actions Menu': ['事件操作菜单'],
        'Copy Event ID': ['复制事件 ID'],
        'Copy Event Link': ['复制事件链接'],
        'Copy link to this issue event': ['复制此问题事件的链接'],
        'View JSON': ['查看 JSON'],
        'Hide feedback on all issue details': ['在所有问题详情中隐藏反馈'],
        'Unhide feedback on all issue details': ['在所有问题详情中显示反馈'],
        'Largest Changes in Call Stack Frequency': ['调用堆栈频率的最大变化'],
        'See which functions changed the most before and after the regression. The\n              frame with the largest increase in call stack population likely\n              contributed to the cause for the duration regression.':
          [
            '查看回归前后哪些函数变化最大。调用堆栈人口增长最多的帧可能对持续时间回归的原因有所贡献。',
          ],
        'Latest event not available': ['最新事件不可用'],
        'Unmerging events…': ['正在拆分事件…'],
        'Fingerprints included in this issue [count]': ['此问题中包含的指纹 [count]'],
        'This is an experimental feature. All changes may take up to 24 hours take effect.':
          ['这是一个实验性功能。所有更改可能需要长达 24 小时才能生效。'],
        'Unable to load merged events, please try again later': [
          '无法加载合并的事件，请稍后再试',
        ],
        'To check, the list must contain 2 or more items': [
          '要检查，列表必须包含 2 个或更多项目',
        ],
        'Show %s fingerprints': ['显示 %s 个指纹'],
        'Collapse %s fingerprints': ['折叠 %s 个指纹'],
        'To unmerge, the list must contain 2 or more items': [
          '要拆分，列表必须包含 2 个或更多项目',
        ],
        'To unmerge, 1 or more items must be selected': [
          '要拆分，必须选择 1 个或更多项目',
        ],
        'We are unable to unmerge all items at once': ['我们无法一次拆分所有项目'],
        'Unmerge ([itemsSelectedQuantity])': ['拆分 ([itemsSelectedQuantity])'],
        'To compare, exactly 2 items must be selected': ['要比较，必须选择正好 2 个项目'],
        'Unable to update issue priority': ['无法更新问题优先级'],
        'Issues in the same trace': ['同一跟踪中的问题'],
        'These issues were all found within ': ['这些问题都在 '],
        'this trace': ['此跟踪中'],
        'Issues caused by the same root cause': ['由同一根本原因引起的问题'],
        'Unable to load related issues, please try again later': [
          '无法加载相关问题，请稍后再试',
        ],
        'Up Next': ['接下来'],
        'Play Now': ['立即播放'],
        'There are %s for this issue across %s.': ['此问题在 %s 上有 %s。'],
        'No replay data available.': ['没有回放数据可用。'],
        '%s Individual': ['%s 个个人'],
        '%s Individuals': ['%s 个个人'],
        '%s Team': ['%s 个团队'],
        '%s Teams': ['%s 个团队'],
        Participants: ['参与者'],
        'People who have been assigned, resolved, unresolved, archived, bookmarked, subscribed, or added a comment':
          ['被指派、解决、未解决、存档、加书签、订阅或添加评论的人'],
        participants: ['参与者'],
        Viewers: ['查看者'],
        'Issues with a similar stack trace': ['具有类似堆栈跟踪的问题'],
        'Unable to load similar issues, please try again later': [
          '无法加载类似的问题，请稍后再试',
        ],
        "There don't seem to be any similar issues.": ['似乎没有类似的问题。'],
        "There don't seem to be any similar issues. This can occur when the issue has no stacktrace or in-app frames.":
          ['似乎没有类似的问题。这可能发生在问题没有堆栈跟踪或应用内帧时。'],
        Diff: ['差异'],
        'No issues with a similar stack trace have been found.': [
          '未找到具有类似堆栈跟踪的问题。',
        ],
        'Show %s issues below threshold': ['显示阈值以下的 %s 个问题'],
        'Would Group': ['会分组'],
        'Merging %s issues': ['正在合并 %s 个问题'],
        'Merge %s': ['合并 %s'],
        'Agree with the grouping of %s issues': ['同意将 %s 个问题分组'],
        'Agree %s': ['同意 %s'],
        'Disagree with the grouping of %s issues': ['不同意将 %s 个问题分组'],
        'Disagree %s': ['不同意 %s'],
        'There was an error loading issue tags.': ['加载问题标签时出错。'],
        'There was an error loading tag details': ['加载标签详细信息时出错'],
        'Search All Issues with Tag Value': ['搜索所有具有标签值的问题'],
        'Sorry, the tags for this issue could not be found.': [
          '抱歉，无法找到此问题的标签。',
        ],
        'No tags were found for the currently selected environments': [
          '在当前选择的环境中未找到标签',
        ],
        'Failed to fetch total tag values': ['获取总标签值失败'],
        'Sampled Events': ['采样事件'],
        'Reprocessing…': ['正在重新处理…'],
        'Once the events in this issue have been reprocessed, you’ll be able to make changes and view any new issues that may have been created.':
          ['一旦此问题中的事件被重新处理，您将能够进行更改并查看可能创建的新问题。'],
        '[remainingEventsToReprocess]/[totalEvents] [event] reprocessed': [
          '[remainingEventsToReprocess]/[totalEvents] [event] 重新处理',
        ],
        event: ['事件'],
        'Resources and Possible Solutions': ['资源和可能的解决方案'],
        'You are viewing a sample error. Configure Sentry to start viewing real errors.':
          ['您正在查看一个示例错误。配置 Sentry 以开始查看实际错误。'],
        'Copied Issue URL to clipboard': ['已将问题 URL 复制到剪贴板'],
        'Copied Markdown Issue Link to clipboard': ['已将 Markdown 问题链接复制到剪贴板'],
        'Copy Issue URL': ['复制问题 URL'],
        'Copy Markdown Link': ['复制 Markdown 链接'],
        'Event actions': ['事件操作'],
        'Sentry has detected configuration issues with this event. Click for more info.':
          ['Sentry 检测到此事件的配置问题。点击以获取更多信息。'],
        'Processing Error': ['处理错误'],
        'Jump to:': ['跳转到：'],
        'Recommended Event': ['推荐事件'],
        'Custom Event': ['自定义事件'],
        'Event Filters': ['事件筛选器'],
        'Event Tags': ['事件标签'],
        'Search events...': ['搜索事件...'],
        'One other issue appears in the same trace.': ['同一个跟踪中出现了另一个问题。'],
        'Trace Connections': ['跟踪连接'],
        'No Trace Available': ['无跟踪可用'],
        'Traces help you understand if there are any issues with other services connected to this event':
          ['跟踪帮助您了解与此事件相关的其他服务是否存在任何问题'],
        'View Full Trace': ['查看完整跟踪'],
        'This is a trace timeline showing all related events happening upstream and downstream of this event':
          ['这是一个跟踪时间线，显示此事件上下游发生的所有相关事件'],
        'You are here': ['您在这里'],
        'Around the same time': ['大约在同一时间'],
        'View %s more event': ['查看 %s 更多事件'],
        'View %s more events': ['查看 %s 更多事件'],
        "You're receiving workflow notifications because you are subscribed to this issue.":
          ['您收到工作流通知是因为您订阅了此问题。'],
        "You're receiving updates because you are subscribed to workflow notifications for this project.":
          ['您收到更新是因为您订阅了此项目的工作流通知。'],
        "You're receiving workflow notifications because you have commented on this issue.":
          ['您收到工作流通知是因为您对此问题发表了评论。'],
        "You're receiving workflow notifications because you were assigned to this issue.":
          ['您收到工作流通知是因为您被指派处理此问题。'],
        "You're receiving workflow notifications because you have bookmarked this issue.":
          ['您收到工作流通知是因为您将此问题添加到了书签。'],
        "You're receiving workflow notifications because you have changed the status of this issue.":
          ['您收到工作流通知是因为您更改了此问题的状态。'],
        "You're receiving workflow notifications because you have been mentioned in this issue.":
          ['您收到工作流通知是因为您在此问题中被提及。'],
        'You have disabled workflow notifications for this project.': [
          '您已为此项目禁用了工作流通知。',
        ],
        'Subscribe to workflow notifications for this issue': ['订阅此问题的工作流通知'],
        'Mark Reviewed': ['标记为已审查'],
        'More issue actions': ['更多问题操作'],
        'Cannot merge issues from different projects': ['无法合并不同项目的问题'],
        Started: ['已开始'],
        'Events Reprocessed': ['已重新处理的事件'],
        Progress: ['进度'],
        'Deselect all': ['取消选择全部'],
        'Select all': ['全选'],
        'Unable to update issues': ['无法更新问题'],
        '%s issue on this page selected.': ['此页面上选择了 %s 个问题。'],
        '%s issues on this page selected.': ['此页面上选择了 %s 个问题。'],
        'When issue was flagged for review.': ['问题被标记为需要审查的时间。'],
        'First time the issue occurred.': ['问题首次发生的时间。'],
        'Recent issues trending upward.': ['最近问题呈上升趋势。'],
        'Number of events.': ['事件的数量。'],
        'Number of users affected.': ['受影响的用户数量。'],
        'Last time the issue occurred.': ['问题最后发生的时间。'],
        'Bulk %s issues': ['批量 %s 问题'],
        '%2$s %s selected issue': ['%2$s %s 已选择的问题'],
        '%2$s %s selected issues': ['%2$s %s 已选择的问题'],
        'Are you sure you want to %2$s this %s issue%3$s?': [
          '您确定要 %2$s 此 %s 问题%3$s 吗？',
        ],
        'Are you sure you want to %2$s these %s issues%3$s?': [
          '您确定要 %2$s 这些 %s 问题%3$s 吗？',
        ],
        'Deleting performance issues is not yet supported and will be skipped.': [
          '删除性能问题尚不支持，将跳过。',
        ],
        'Note that unmerging is currently an experimental feature.': [
          '请注意，拆分目前是一个实验性功能。',
        ],
        'Merging performance issues is not yet supported and will be skipped.': [
          '合并性能问题尚不支持，将跳过。',
        ],
        Unsaved: ['未保存'],
        'Detailed views of errors and performance problems in your application grouped by events with a similar set of characteristics.':
          ['按具有相似特征的事件分组的应用程序中的错误和性能问题的详细视图。'],
        Rename: ['重命名'],
        'Discard Changes': ['放弃更改'],
        'Save View': ['保存视图'],
        Discard: ['放弃'],
        'Pause real-time updates': ['暂停实时更新'],
        'Enable real-time updates': ['启用实时更新'],
        'Failed to delete saved search.': ['删除已保存的搜索失败。'],
        'When you come back you’ll see this search by default.': [
          '当您回来时，默认会看到此搜索。',
        ],
        'Unable to set the default search.': ['无法设置默认搜索。'],
        "You'll no longer see this search by default.": ['您将不再默认看到此搜索。'],
        'Unable to remove the default search.': ['无法删除默认搜索。'],
        'Failed to update views': ['更新视图失败'],
        "We couldn't find any issues that matched your filters.": [
          '我们找不到与您的筛选条件匹配的问题。',
        ],
        'Get out there and write some broken code!': ['出去写些有问题的代码吧！'],
        'Well, would you look at that.': ['好吧，看看这个。'],
        'No more issues to review. Better get back out there and write some broken code.':
          ['没有更多的问题需要审查。最好回去写些有问题的代码。'],
        'No issues match your search': ['没有问题匹配您的搜索'],
        'If this is unexpected, check out these tips:': [
          '如果这是意外，请查看以下提示：',
        ],
        'Double check your project, environment, and date filters': [
          '再次检查您的项目、环境和日期筛选器',
        ],
        'Make sure your search has the right syntax. [link]': [
          '确保您的搜索具有正确的语法。[链接]',
        ],
        "Check your [filterSettings: inbound data filters] to make sure the events aren't being filtered out":
          ['检查您的 [filterSettings: 入站数据筛选器] 以确保事件没有被筛选掉'],
        '[start]-[end] of [total]': ['[start]-[end] of [total]'],
        'Add saved search': ['添加已保存的搜索'],
        'Collapse sidebar': ['折叠侧边栏'],
        "You don't have any saved searches": ['您没有任何已保存的搜索'],
        'Show %s more': ['显示 %s 更多'],
        'Recommended Searches': ['推荐搜索'],
        'Anyone in organization can see but not edit': [
          '组织中的任何人都可以查看但不能编辑',
        ],
        'Only you can see and edit': ['只有您可以查看和编辑'],
        'You do not have permission to edit this search.': ['您没有权限编辑此搜索。'],
        'You do not have permission to delete this search.': ['您没有权限删除此搜索。'],
        'Are you sure you want to delete this saved search?': [
          '您确定要删除这个已保存的搜索吗？',
        ],
        'Saved search options': ['已保存的搜索选项'],
        'Popular Filters': ['常用筛选器'],
        'Issue Category': ['问题类别'],
        'Error Level': ['错误级别'],
        'Unhandled Events': ['未处理的事件'],
        'Latest Release': ['最新版本'],
        'Custom Tags': ['自定义标签'],
        Prioritized: ['已优先处理'],
        'For Review': ['待审查'],
        'Issues are marked for review if they are new or escalating, and have not been resolved or archived. Issues are automatically marked reviewed in 7 days.':
          [
            '如果问题是新的或升级的，并且尚未解决或存档，则会被标记为待审查。问题会在 7 天后自动标记为已审查。',
          ],
        'Ignored issues don’t trigger alerts. When their ignore\n        conditions are met they become Unresolved and are flagged for review.':
          [
            '被忽略的问题不会触发警报。当它们的忽略条件满足时，它们会变为未解决并被标记为待审查。',
          ],
        Reprocessing: ['重新处理'],
        'These [link:reprocessing issues] will take some time to complete.\n        Any new issues that are created during reprocessing will be flagged for review.':
          [
            '这些 [link:重新处理的问题] 可能需要一些时间才能完成。\n        在重新处理期间创建的任何新问题都会被标记为待审查。',
          ],
        'My Default Search': ['我的默认搜索'],
        'No context available': ['没有上下文可用'],
        'Choose a metric to display data.': ['选择一个指标来显示数据。'],
        'Nothing to show!': ['没有内容可显示！'],
        'No code locations found for this metric.': ['为此指标未找到代码位置。'],
        'Grouped series are not supported by alerts. This is a preview of the data the alert will use.':
          ['警报不支持分组系列。这是警报将使用的数据的预览。'],
        'Please select a project': ['请选择一个项目'],
        'Paste dashboard JSON ': ['粘贴仪表盘 JSON'],
        'Processed %s widgets from the dashboard': ['从仪表盘处理了 %s 个小部件'],
        'Found %s widgets that can be imported': ['找到了 %s 个可以导入的小部件'],
        'Please input valid dashboard JSON': ['请输入有效的仪表盘 JSON'],
        'Import dashboard': ['导入仪表盘'],
        'Custom metrics aren’t available for your [platform] project.': [
          '自定义指标在您的 [platform] 项目中不可用。',
        ],
        "Adding custom metrics to your [platform] project is simple. Make sure you've got these basics down.":
          ['向您的 [platform] 项目添加自定义指标很简单。确保您掌握了这些基础知识。'],
        'Getting Started with custom metrics': ['开始使用自定义指标'],
        'Metrics help you track and visualize the data points you care about, making it easier to monitor your application health and identify issues.':
          [
            '指标帮助您跟踪和可视化您关心的数据点，使监控应用程序健康状况和识别问题变得更加容易。',
          ],
        "Track your system's behaviour and profit from the same powerful features as you do with errors, like alerting and dashboards.":
          ['跟踪您的系统行为，并从与处理错误相同的强大功能中受益，例如警报和仪表盘。'],
        'Set Up': ['设置'],
        'Track and solve what matters': ['跟踪和解决重要问题'],
        'Query and plot metrics extracted from your span data to visualise trends and identify anomalies. To get started, you need to enable [link:tracing].':
          [
            '查询并绘制从跨度数据中提取的指标，以可视化趋势并识别异常。要开始使用，您需要启用 [link:跟踪]。',
          ],
        'Set Up Tracing': ['设置跟踪'],
        'Create custom metrics to track and visualize the data points you care about over time, like processing time, checkout conversion rate, or user signups. See correlated trace exemplars and metrics if used together with Performance Monitoring.':
          [
            '创建自定义指标，以跟踪和可视化随时间变化的您关心的数据点，如处理时间、结账转化率或用户注册。如果与性能监控一起使用，可以查看相关的跟踪示例和指标。',
          ],
        'Set Up Custom Metric': ['设置自定义指标'],
        'View Performance Metrics': ['查看性能指标'],
        'There are upcoming changes to the Metrics API that may affect your usage. Read the [link:FAQs] for more details.':
          [
            '指标 API 即将发生可能影响您使用的更改。请阅读 [link:常见问题] 以获取更多详细信息。',
          ],
        "We've released a new API to submit metrics. Metrics using with the old API will stop being ingested soon. Read the [link:FAQs] for more details.":
          [
            '我们已发布一个新的指标提交 API。使用旧 API 的指标将很快停止被摄取。请阅读 [link:常见问题] 以获取更多详细信息。',
          ],
        'Add Custom Metrics': ['添加自定义指标'],
        'Save as default': ['另存为默认'],
        'Page actions': ['页面操作'],
        'Metrics Settings': ['指标设置'],
        'Select a metric to create an alert': ['选择一个指标来创建警报'],
        'Custom measurements cannot be used to create alerts': [
          '自定义测量不能用于创建警报',
        ],
        'One chart per metric': ['每个指标一个图表'],
        'No matching transaction found': ['未找到匹配的事务'],
        'Open Transaction Summary': ['打开事务摘要'],
        'Open Release Details': ['打开版本详情'],
        'Intervals smaller than 1 hour are not available for set metrics.': [
          '对于设置的指标，小于 1 小时的间隔不可用。',
        ],
        '1 month': ['1 个月'],
        Overlay: ['覆盖层'],
        'Choose a metric and an operation to display data.': [
          '选择一个指标和一个操作来显示数据。',
        ],
        'No results found for the given query': ['未找到给定查询的结果'],
        'The queries in this chart generate a large number of result groups. Only the first [numOfGroups] groups are displayed.':
          ['此图表中的查询生成大量结果组。仅显示前 [numOfGroups] 个组。'],
        'Open in Traces': ['在跟踪中打开'],
        'Back to Platforms': ['返回平台'],
        'Get Started with %s': ['开始使用 %s'],
        'Last Check-In': ['最后签到'],
        'Next Check-In': ['下次签到'],
        Legend: ['图例'],
        'Check-in missed after %s min': ['在 %s 分钟后错过签到'],
        'Check-in missed after %s mins': ['在 %s 分钟后错过签到'],
        'Check-in reported as failed': ['签到报告为失败'],
        'Check-in timed out after %s min': ['在 %s 分钟后签到超时'],
        'Check-in timed out after %s mins': ['在 %s 分钟后签到超时'],
        'Cron Details': ['定期作业详情'],
        'Monitor Slug': ['监控标识符'],
        'Check-Ins': ['签到'],
        'Invalid Schedule': ['无效的计划'],
        Attachment: ['附件'],
        'Expected At': ['期望时间'],
        'Recent Check-Ins': ['最近签到'],
        'Check-in Status: [status]': ['签到状态：[status]'],
        '(invalid schedule)': ['（无效的计划）'],
        'Interval Schedule': ['间隔计划'],
        Every: ['每'],
        'Choose Project': ['选择项目'],
        'Existing monitors cannot be moved between projects': [
          '现有的监控不能在项目之间移动',
        ],
        'Assign Ownership': ['分配所有权'],
        SCHEDULE: ['计划'],
        'Crontab Schedule': ['Crontab 计划'],
        'Add a name and project': ['添加名称和项目'],
        'The name will show up in notifications.': ['名称将显示在通知中。'],
        Slug: ['标识符'],
        'The [strong:monitor-slug] is used to uniquely identify your monitor within your organization. Changing this slug will require updates to any instrumented check-in calls.':
          [
            '这个 [strong:监控标识符] 用于在您的组织内唯一识别您的监控。更改此标识符将需要更新任何已 instrumented 的签到调用。',
          ],
        'monitor-slug': ['监控标识符'],
        'Suggested Projects': ['建议的项目'],
        'Other Projects': ['其他项目'],
        'Set your schedule': ['设置您的计划'],
        'You can use [link:the crontab syntax] or our interval schedule.': [
          '您可以使用 [link:Crontab 语法] 或我们的间隔计划。',
        ],
        'Any changes you make to the execution schedule will only be applied after the next expected check-in.':
          ['您对执行计划所做的任何更改仅在下一次预期签到后应用。'],
        'Interval Frequency': ['间隔频率'],
        'Interval Type': ['间隔类型'],
        'Set margins': ['设置容差'],
        'Configure when we mark your monitor as failed or missed.': [
          '配置我们何时将您的监控标记为失败或错过。',
        ],
        'Number of minutes before a check-in is considered missed.': [
          '认为签到错过前的分钟数。',
        ],
        'Grace Period': ['宽限期'],
        'Defaults to %s minute': ['默认为 %s 分钟'],
        'Defaults to %s minutes': ['默认为 %s 分钟'],
        'Number of a minutes before an in-progress check-in is marked timed out.': [
          '进行中的签到被标记为超时前的分钟数。',
        ],
        'Max Runtime': ['最大运行时间'],
        'Configure when an issue is created or resolved.': [
          '配置何时创建或解决一个问题。',
        ],
        'Create a new issue when this many consecutive missed or error check-ins are processed.':
          ['当处理这么多连续错过或错误签到时创建新问题。'],
        'Failure Tolerance': ['失败容忍'],
        'Resolve the issue when this many consecutive healthy check-ins are processed.': [
          '当处理这么多连续健康签到时解决此问题。',
        ],
        'Recovery Tolerance': ['恢复容忍'],
        'Set Owner': ['设置所有者'],
        'Choose a team or member as the monitor owner. Issues created will be automatically assigned to the owner.':
          ['选择一个团队或成员作为监控的所有者。创建的问题将自动分配给所有者。'],
      };
      var trans8 = {
        'Automatically assign issues to a team or user.': [
          '自动将问题分配给团队或用户。',
        ],
        'Configure who to notify upon issue creation and when.': [
          '配置在创建问题时通知的对象及时间。',
        ],
        'Customize this monitors notification configuration in Alerts': [
          '在警报中自定义此监控的通知配置',
        ],
        Notify: ['通知'],
        'Send notifications to a member or team.': ['向成员或团队发送通知。'],
        'Only receive notifications from a specific environment.': [
          '仅从特定环境接收通知。',
        ],
        'Please select which teams or members to notify first.': [
          '请先选择要通知的团队或成员。',
        ],
        Crontab: ['Crontab'],
        'Cron Monitor Details': ['Cron 监控详情'],
        'Are you sure you want to permanently delete this cron monitor?': [
          '您确定要永久删除这个 cron 监控吗？',
        ],
        'Unresolved Issues': ['未解决的问题'],
        'No issues relating to this cron monitor have been found.': [
          '未找到与此 cron 监控相关的问题。',
        ],
        'Issue category': ['问题类别'],
        'Platform Specfiic': ['特定平台'],
        'No check-ins have been recorded for this time period.': [
          '在此时间段内没有记录任何签到。',
        ],
        Successful: ['成功'],
        Missed: ['错过'],
        'Instrument your monitor': ['设置监控'],
        'Select an integration method for your new monitor. For in-depth instructions on integrating Crons, view [docsLink:our complete documentation].':
          [
            '为您的新监控选择一种集成方法。有关集成 Cron 的详细说明，请查看 [docsLink:我们的完整文档]。',
          ],
        'Waiting For Check-In': ['等待签到'],
        'This environment is likely broken due to being in an error state for multiple days.':
          ['由于处于错误状态多日，此环境很可能已损坏。'],
        'This environment is likely broken due to being in an error state for multiple days. It has been automatically muted.':
          ['由于处于错误状态多日，此环境很可能已损坏。它已被自动静音。'],
        'Monitor environment actions': ['监控环境操作'],
        'Show [num] More': ['显示 [num] 更多'],
        'View Environment': ['查看环境'],
        'Unmute Environment': ['取消静音环境'],
        'Mute Environment': ['静音环境'],
        'Monitor is muted': ['监控已静音'],
        'Delete Environment': ['删除环境'],
        'Delete Environment?': ['删除环境？'],
        'Are you sure you want to permanently delete the "[envName]" environment?': [
          '您确定要永久删除名为 "[envName]" 的环境吗？',
        ],
        'Time Scale': ['时间尺度'],
        Week: ['周'],
        Month: ['月'],
        'A → Z': ['A → Z'],
        'Z → A': ['Z → A'],
        'Failing First': ['先显示失败项'],
        'Okay First': ['先显示正常项'],
        'Active First': ['先显示活动项'],
        'Muted First': ['先显示静音项'],
        'Sort Cron Monitors': ['排序 Cron 监控'],
        'Sort Options': ['排序选项'],
        'Sort Order Options': ['排序顺序选项'],
        'Filter owners': ['筛选所有者'],
        'Filter Owners': ['筛选所有者'],
        'Monitor Your Cron Jobs': ['监控您的定时作业'],
        "We'll tell you if your recurring jobs are running on schedule, failing, or succeeding.":
          ['我们会告知您定期作业是否按计划运行、失败或成功。'],
        'Create %s Monitor': ['创建 %s 监控'],
        'Check-in on [datetime]': ['在 [datetime] 签到'],
        'check-in': ['签到'],
        'Dismiss Errors': ['忽略错误'],
        'Are you sure you want to dismiss this error?': ['您确定要忽略这个错误吗？'],
        'Are you sure you want to dismiss these %s errors?': [
          '您确定要忽略这 %s 个错误吗？',
        ],
        'Project [projectId]': ['项目 [projectId]'],
        'The environment of the second [checkinTooltip:check-in] does not match the original "[env]" environment. Ensure both check-ins have the same environment.':
          [
            '第二个 [checkinTooltip:签到] 的环境与原始 "[env]" 环境不匹配。请确保两个签到具有相同的环境。',
          ],
        'A [checkinTooltip:check-in] update was sent to a check-in that has already succeeded or failed. Only in-progress check-ins can be updated.':
          [
            '向已经成功或失败的签到发送了 [checkinTooltip:签到] 更新。只有进行中的签到可以更新。',
          ],
        'The [checkinTooltip:check-in] GUID provided matched to an existing check-in for a project that is different than the associated project DSN. Use the correct DSN to successfully update your check-in.':
          [
            '提供的 [checkinTooltip:签到] GUID 与一个与关联项目 DSN 不同的项目的现有签到匹配。请使用正确的 DSN 成功更新您的签到。',
          ],
        'A [checkinTooltip:check-in] was sent with an invalid duration of "[duration]".':
          ['发送了一个具有无效持续时间 "[duration]" 的 [checkinTooltip:签到]。'],
        'A [checkinTooltip:check-in] was sent with an invalid GUID.': [
          '发送了一个具有无效 GUID 的 [checkinTooltip:签到]。',
        ],
        'A [checkinTooltip:check-in] was sent with an invalid payload. Learn more about the check-in payload in our [link:documentation]':
          [
            '发送了一个具有无效负载的 [checkinTooltip:签到]。有关签到负载的详细信息，请参阅我们的 [link:文档]。',
          ],
        'A [checkinTooltip:check-in] was sent but was discarded because the monitor is disabled.':
          ['发送了一个 [checkinTooltip:签到]，但由于监控已禁用而被丢弃。'],
        'A [checkinTooltip:check-in] upsert was sent, but due to insufficient quota a new monitor could not be enabled. Increase your Crons on-demand budget in your [link: subscription settings], and then enable this monitor.':
          [
            '发送了一个 [checkinTooltip:签到] upsert，但由于配额不足而无法启用新监控。请在您的 [link: 订阅设置] 中增加按需 Crons 预算，然后启用此监控。',
          ],
        'A monitor failed to upsert due to an invalid [checkinTooltip:check-in] payload provided. Learn more about the check-in payload in our [link:documentation].':
          [
            '由于提供的 [checkinTooltip:签到] 负载无效，监控未能 upsert。有关签到负载的详细信息，请参阅我们的 [link: 文档]。',
          ],
        'A [checkinTooltip:check-in] was sent with an invalid environment due to: [reason].':
          ['由于 [原因]，发送了一个具有无效环境的 [checkinTooltip:签到]。'],
        'The maximum monitor limit for this project has been reached. Please reach out to our [link:sales team] to create additional monitors.':
          [
            '此项目的最大监控限制已达到。请联系我们的 [link: 销售团队] 以创建更多的监控。',
          ],
        'A [checkinTooltip:check-in] was sent for a monitor that does not exist. If you meant to create a new monitor via upsert, please provide a valid monitor configuration in the check-in payload.':
          [
            '为一个不存在的监控发送了一个 [checkinTooltip:签到]。如果您打算通过 upsert 创建一个新监控，请在签到负载中提供有效的监控配置。',
          ],
        'A [checkinTooltip:check-in] was sent but dropped due to the monitor being disabled. Please increase your on-demand budget if needed in your [link:subscription settings]. Then, enable this monitor to resume processing check-ins.':
          [
            '发送了一个 [checkinTooltip:签到]，但由于监控已禁用而被丢弃。如果需要，请在您的 [link: 订阅设置] 中增加按需预算，然后启用此监控以恢复处理签到。',
          ],
        'A [checkinTooltip:check-in] was sent but dropped because the monitor has already reached the limit of allowed environments. Remove an existing environment to create new ones.':
          [
            '发送了一个 [checkinTooltip:签到]，但由于监控已达到允许环境的限制而被丢弃。请删除一个现有环境以创建新的环境。',
          ],
        'A sent [checkinTooltip:check-in] was dropped due to being rate limited. Review our rate limits for more information.':
          [
            '由于受到速率限制，发送的 [checkinTooltip:签到] 被丢弃。请查看我们的速率限制以获取更多信息。',
          ],
        'We have detected a problem with your organization and disabled check-in ingestion. Contact [link:support] for details.':
          [
            '我们检测到您的组织存在问题并禁用了签到摄取。请联系 [link: 支持] 以获取详细信息。',
          ],
        'Unknown problem occurred while processing this [checkinTooltip:check-in]': [
          '处理此 [checkinTooltip:签到] 时发生了未知问题。',
        ],
        'Environment mismatch': ['环境不匹配'],
        'Check-in already completed': ['签到已完成'],
        'DSN project mismatch': ['DSN 项目不匹配'],
        'Invalid duration': ['无效的持续时间'],
        'Invalid GUID': ['无效的 GUID'],
        'Invalid check-in payload': ['无效的签到负载'],
        'Monitor disabled': ['监控已禁用'],
        'Insufficient quota to upsert': ['配额不足无法 upsert'],
        'Invalid monitor payload': ['无效的监控负载'],
        'Invalid environment': ['无效的环境'],
        'Maximum monitor limit exceeded': ['超过最大监控限制'],
        'Monitor not found': ['未找到监控'],
        'Environment limit exceeded': ['超过环境限制'],
        'Rate limited': ['受到速率限制'],
        'Disabled check-in ingestion': ['禁用签到摄取'],
        'Unknown processing error': ['未知处理错误'],
        'To notify Sentry if your job execution fails': ['如果作业执行失败，通知 Sentry'],
        '[installLink:Install and configure] the Sentry PHP SDK (min v3.16.0), then instrument your monitor:':
          [
            '[installLink:安装和配置] Sentry PHP SDK（最低版本 3.16.0），然后设置您的监控：',
          ],
        '[installLink:Install and configure] the Sentry PHP Laravel SDK (min v3.3.1), then add the [sentryMonitor:sentryMonitor()] call to your scheduled tasks defined in your [kernel:app/Console/Kernel.php] file:':
          [
            '[installLink:安装和配置] Sentry PHP Laravel SDK（最低版本 3.3.1），然后在 [kernel:app/Console/Kernel.php] 文件中定义的计划任务中添加 [sentryMonitor:sentryMonitor()] 调用：',
          ],
        '[installLink:Install and configure] the Sentry Node SDK (min v7.52), then instrument your monitor:':
          [
            '[installLink:安装和配置] Sentry Node SDK（最低版本 7.52），然后设置您的监控：',
          ],
        '[installLink:Install and configure] the Sentry Go SDK (min v0.23.0), then instrument your monitor:':
          [
            '[installLink:安装和配置] Sentry Go SDK（最低版本 0.23.0），然后设置您的监控：',
          ],
        '[installLink:Install and configure] the Sentry Java SDK (min v6.30.0), then instrument your monitor:':
          [
            '[installLink:安装和配置] Sentry Java SDK（最低版本 6.30.0），然后设置您的监控：',
          ],
        '[installLink:Install and configure] the Sentry Spring Boot SDK (min v6.30.0), then instrument your monitor:':
          [
            '[installLink:安装和配置] Sentry Spring Boot SDK（最低版本 6.30.0），然后设置您的监控：',
          ],
        '[installLink:Install and configure] the Sentry Java SDK (min v6.30.0), make sure `SentryJobListener` is [configureLink:configured], then instrument your monitor:':
          [
            '[installLink:安装和配置] Sentry Java SDK（最低版本 6.30.0），确保 `SentryJobListener` 已 [configureLink:配置]，然后设置您的监控：',
          ],
        'Use the [additionalDocs: Celery integration] to monitor your Celery periodic tasks. Initialize Sentry in the celeryd_init or beat_init signal.':
          [
            '使用 [additionalDocs: Celery 集成] 监控您的 Celery 周期性任务。在 celeryd_init 或 beat_init 信号中初始化 Sentry。',
          ],
        'Make sure to set monitor_beat_tasks=True in CeleryIntegration:': [
          '确保在 CeleryIntegration 中设置 monitor_beat_tasks=True：',
        ],
        '[installLink:Install and configure] the Sentry Python SDK (min v1.17.0), then instrument your monitor:':
          [
            '[installLink:安装和配置] Sentry Python SDK（最低版本 1.17.0），然后设置您的监控：',
          ],
        'You can use the [additionalDocs: PHP SDK] to create and update your Monitors programmatically with code rather than creating them manually.':
          [
            '您可以使用 [additionalDocs: PHP SDK] 通过代码而不是手动创建来程序化地创建和更新您的监控。',
          ],
        'Use the [additionalDocs: Laravel SDK] to monitor your scheduled task.': [
          '使用 [additionalDocs: Laravel SDK] 监控您的计划任务。',
        ],
        'To set up, add the "sentryMonitor()" macro to your scheduled tasks defined in your "app/Console/Kernel.php" file:':
          [
            '设置时，请将 "sentryMonitor()" 宏添加到 "app/Console/Kernel.php" 文件中定义的计划任务：',
          ],
        'By default, the Laravel SDK will infer various parameters of your scheduled task. For greater control, we expose some optional parameters on the sentryMonitor() macro.':
          [
            '默认情况下，Laravel SDK 将推断计划任务的各种参数。为了获得更大的控制，我们在 sentryMonitor() 宏中提供了一些可选参数。',
          ],
        'Use the [additionalDocs:Node SDK] to create and update your Monitors programmatically with code rather than creating them manually.':
          [
            '使用 [additionalDocs: Node SDK] 通过代码而不是手动创建来程序化地创建和更新您的监控。',
          ],
        'You can use the [additionalDocs: Go SDK] to create and update your Monitors programmatically with code rather than creating them manually.':
          [
            '您可以使用 [additionalDocs: Go SDK] 通过代码而不是手动创建来程序化地创建和更新您的监控。',
          ],
        'You can use the [additionalDocs: Java SDK] to create and update your Monitors programmatically with code rather than creating them manually.':
          [
            '您可以使用 [additionalDocs: Java SDK] 通过代码而不是手动创建来程序化地创建和更新您的监控。',
          ],
        'You can use the [additionalDocs: Ruby SDK] to create and update your Monitors programmatically with code rather than creating them manually.':
          [
            '您可以使用 [additionalDocs: Ruby SDK] 通过代码而不是手动创建来程序化地创建和更新您的监控。',
          ],
        'You can use the mixin module from the [additionalDocs: Ruby SDK] to automatically capture check-ins from your jobs rather than creating them manually.':
          [
            '您可以使用 [additionalDocs: Ruby SDK] 中的 mixin 模块自动从作业中捕获签到，而不是手动创建。',
          ],
        'ActiveJob Example:': ['ActiveJob 示例：'],
        'Sidekiq Example:': ['Sidekiq 示例：'],
        'You must pass in the monitor config explicity for upserts or you must create a new monitor explicitly in the UI.':
          ['对于 upserts，您必须显式传递监控配置，或者在 UI 中显式创建一个新监控。'],
        'If you use gems such as [sidekiqCronLink:sidekiq-cron] or [sidekiqSchedulerLink:sidekiq-scheduler] to manage your scheduled jobs, Sentry can automatically monitor all of them for you without any additional configuration.':
          [
            '如果您使用诸如 [sidekiqCronLink:sidekiq-cron] 或 [sidekiqSchedulerLink:sidekiq-scheduler] 之类的 gem 管理计划作业，Sentry 可以为您自动监控所有作业，无需额外配置。',
          ],
        '[installLink:Install and configure] the Sentry Ruby and Sidekiq SDKs (min v5.14.0) and turn on the relevant patches:':
          [
            '[installLink:安装和配置] Sentry Ruby 和 Sidekiq SDK（最低版本 5.14.0），并启用相关补丁：',
          ],
        '[installLink:Install and configure] the Sentry Ruby SDK (min v5.12.0), then instrument your monitor:':
          [
            '[installLink:安装和配置] Sentry Ruby SDK（最低版本 5.12.0），然后设置您的监控：',
          ],
        '[installLink:Install and configure] the Sentry Python SDK (min v1.17.0), then initialize Sentry either in [celerydInit:celeryd_init] or [beatInit:beat_init] signal:':
          [
            '[installLink:安装和配置] Sentry Python SDK（最低版本 1.17.0），然后在 [celerydInit:celeryd_init] 或 [beatInit:beat_init] 信号中初始化 Sentry：',
          ],
        '[installLink:Install and configure] the Sentry Ruby and Rails SDKs (min v5.12.0), then instrument your job with our mixin module:':
          [
            '[installLink:安装和配置] Sentry Ruby 和 Rails SDK（最低版本 5.12.0），然后使用我们的 mixin 模块设置您的作业：',
          ],
        'You can pass in optional attributes as follows:': ['您可以如下传递可选属性：'],
        '[installLink:Install and configure] the Sentry Ruby and Sidekiq SDKs (min v5.12.0), then instrument your job with our mixin module:':
          [
            '[installLink:安装和配置] Sentry Ruby 和 Sidekiq SDK（最低版本 5.12.0），然后使用我们的 mixin 模块设置您的作业：',
          ],
        'Link your Celery task to your Monitor:': ['将您的 Celery 任务链接到您的监控：'],
        'Make sure to [installLink:install the Sentry CLI] (min v2.16.1), then instrument your monitor:':
          ['请确保 [installLink:安装 Sentry CLI]（最低版本 2.16.1），然后设置您的监控：'],
        'Enable this monitor': ['启用此监控'],
        'Disable this monitor and discard incoming check-ins': [
          '禁用此监控并丢弃传入的签到',
        ],
        'Next %s': ['下一个 %s'],
        'Previous %s': ['上一个 %s'],
        'Sentry is currently experiencing an outage which may affect Check-In reliability.':
          ['Sentry 正在经历一次故障，可能会影响签到的可靠性。'],
        "Sentry experienced an outage which may have affected check-in's during this time.":
          ['Sentry 经历了一次故障，可能会影响在此期间的签到。'],
        'Add Monitor': ['添加监控'],
        'This monitor is disabled and is not accepting check-ins.': [
          '此监控已禁用，不接受签到。',
        ],
        'Errors were encountered while ingesting check-ins for this monitor': [
          '在摄取此监控的签到时遇到了错误。',
        ],
        'The monitor you were looking for was not found.': ['未找到您要查找的监控。'],
        'Edit Monitor': ['编辑监控'],
        'Search by name or slug': ['按名称或标识符搜索'],
        'Errors were encountered while ingesting check-ins for the selected projects': [
          '在摄取所选项目的签到时遇到了错误。',
        ],
        'Scheduled monitors that check in on recurring jobs and tell you if they’re running on schedule, failing, or succeeding.':
          ['定期检查重复作业的监控，并告知您它们是否按计划运行、失败或成功。'],
        Okay: ['正常'],
        'In Progress': ['进行中'],
        'Timed Out': ['已超时'],
        year: ['年'],
        years: ['年'],
        'Unknown schedule': ['未知计划'],
        'Every minute': ['每分钟'],
        'Every %s minutes': ['每 %s 分钟'],
        'Every hour': ['每小时'],
        'Every %s hours': ['每 %s 小时'],
        'Every day': ['每天'],
        'Every %s days': ['每 %s 天'],
        'Every week': ['每周'],
        'Every %s weeks': ['每 %s 周'],
        'Every month': ['每月'],
        'Every %s months': ['每 %s 个月'],
        'Every year': ['每年'],
        'Every %s years': ['每 %s 年'],
        'Pardon the interruption, we just need to get a quick answer from you.': [
          '抱歉打扰了，我们只需要您快速回答一个问题。',
        ],
        'Email Updates': ['邮件更新'],
        "We'd love to keep you updated via email with product and feature\n               announcements, promotions, educational materials, and events. Our updates\n               focus on relevant information, and we'll never sell your data to third\n               parties. See our [link:Privacy Policy] for more details.\n               ":
          [
            '我们希望通过电子邮件向您发送产品和功能公告、促销、教育资料和活动的更新。我们的更新专注于相关信息，我们绝不会将您的数据出售给第三方。请参阅我们的 [link: 隐私政策] 以获取更多详细信息。\n               ',
          ],
        'Failed to load SDK configuration': ['加载 SDK 配置失败'],
        'platform selected': ['已选择平台'],
        'Loading SDK configuration…': ['正在加载 SDK 配置……'],
        'Next Platform': ['下一个平台'],
        'View Sample Error': ['查看示例错误'],
        'Take me to my error': ['带我查看我的错误'],
        'Skip Onboarding': ['跳过引导'],
        'Error Received': ['已收到错误'],
        'Waiting for error': ['等待错误'],
        "You'll need to send your first error to continue": [
          '您需要发送第一个错误才能继续',
        ],
        'Waiting to receive first event to continue': ['等待接收第一个事件才能继续'],
        'Learn more about CloudFormation': ['了解更多关于 CloudFormation 的信息'],
        'Just press the [addInstallation] button below and complete the steps in the popup that opens.':
          ['只需按下下面的 [addInstallation] 按钮并完成弹出窗口中的步骤。'],
        'Add Installation': ['添加安装'],
        'If you don’t want to add CloudFormation stack to your AWS environment, press the [manualSetup] button instead.':
          ['如果您不想向 AWS 环境添加 CloudFormation 堆栈，请改按 [manualSetup] 按钮。'],
        'The automated AWS Lambda setup will instrument your Lambda functions with Sentry error monitoring and allow you to use tracing without any code changes. We use CloudFormation Stack ([learnMore]) to create the Sentry role which gives us access to your AWS account.':
          [
            '自动化的 AWS Lambda 设置将使用 Sentry 错误监控来设置您的 Lambda 函数，并允许您在不进行任何代码更改的情况下使用跟踪。我们使用 CloudFormation 堆栈 ([learnMore]) 来创建 Sentry 角色，从而获得对您的 AWS 账户的访问权限。',
          ],
        "Congrats, you just installed the %s integration! Now that it's installed, the next time you trigger an error it will go to your Sentry.":
          [
            '恭喜，您刚刚安装了 %s 集成！现在安装完成后，下次触发错误时它将发送到您的 Sentry。',
          ],
        'This snippet includes an intentional error, so you can test that everything is working as soon as you set it up:':
          ['此代码片段包含一个故意的错误，以便您在设置完成后可以测试一切是否正常工作：'],
        'Processing sample event...': ['正在处理示例事件……'],
        'Failed to create a new sample event': ['创建新的示例事件失败'],
        'Failed to load sample event': ['加载示例事件失败'],
        'View Full Documentation': ['查看完整文档'],
        'Failed to load the integration for the %s platform.': [
          '加载 %s 平台的集成失败。',
        ],
        'Automatically instrument %s': ['自动设置 %s'],
        "Don't have have permissions to create a Cloudformation stack? [link:Invite your team instead].":
          ['没有创建 Cloudformation 堆栈的权限？[link: 邀请您的团队成员代替]。'],
        'Invite your team instead': ['邀请您的团队成员代替'],
        "Hey, just a heads up - we haven't received any data for this SDK yet and by going back all changes will be discarded. Are you sure you want to head back?":
          [
            '嘿，提醒一下——我们尚未收到此 SDK 的任何数据，如果返回，所有更改都将被丢弃。您确定要返回吗？',
          ],
        "Yes I'm sure": ['是的，我确定'],
        'Select platform': ['选择平台'],
        'Select the platform you want to monitor': ['选择您想要监控的平台'],
        'Set up a separate project for each part of your application (for example, your API server and frontend client), to quickly pinpoint which part of your application errors are coming from.':
          [
            '为应用程序的每个部分（例如，您的 API 服务器和前端客户端）设置一个单独的项目，以便快速定位错误来源。',
          ],
        'Configure %s SDK': ['配置 %s SDK'],
        'Failed to update the project key with the selected products.': [
          '使用所选产品更新项目密钥失败。',
        ],
        'Failed to load Client Keys for the project.': ['加载项目的客户端密钥失败。'],
        'Configuration (Optional)': ['配置（可选）'],
        'Learn how to enable readable stack traces in your Sentry errors.': [
          '了解如何在 Sentry 错误中启用可读的堆栈跟踪。',
        ],
        'SDK Configuration': ['SDK 配置'],
        'Learn how to configure your SDK using our Loader Script': [
          '了解如何使用我们的加载器脚本配置您的 SDK',
        ],
        'Unable to updated dynamic SDK loader configuration': [
          '无法更新动态 SDK 加载器配置',
        ],
        'Your code is probably broken. Maybe not. Find out for sure. Get started below.':
          ['您的代码很可能有问题。也许没有。确定一下。开始操作如下。'],
        'Select your languages or frameworks and install the SDKs to start tracking issues':
          ['选择您的语言或框架并安装 SDK 以开始跟踪问题'],
        'Set up my team': ['设置我的团队'],
        'Invite [friends] coworkers. You shouldn’t have to fix what you didn’t break': [
          '邀请 [friends] 同事。您不应该修复您没有破坏的东西',
        ],
        friends: ['朋友'],
        'Invite Team': ['邀请团队'],
        "Gee, I've used Sentry before.": ['嗯，我以前用过 Sentry。'],
        'Skip onboarding.': ['跳过引导。'],
        'You do not have access to this organization.': ['您对此组织没有访问权限。'],
        'Creating Organization…': ['正在创建组织……'],
        'Unable to create organization.': ['无法创建组织。'],
        'Data Storage Location': ['数据存储位置'],
        "Choose where to store your organization's data. Please note, you won't be able to change locations once your organization has been created. [learnMore:Learn More]":
          [
            '选择存储组织数据的位置。请注意，一旦组织创建完成，您将无法更改存储位置。[learnMore: 了解更多]',
          ],
        '[relocationLink:Relocating from self-hosted?]': [
          '[relocationLink: 从自托管迁移]?',
        ],
        'Your request to join has been sent.': ['您的加入请求已发送。'],
        'You will receive an email when your request is approved.': [
          '您的请求获批时，您将收到电子邮件。',
        ],
        'Ask the admins if you can join the [orgId] organization.': [
          '询问管理员您是否可以加入 [orgId] 组织。',
        ],
        'There was an error loading your organization.': ['加载您的组织时出错。'],
        'Organization Restored': ['组织已恢复'],
        'The [name] organization is currently scheduled for deletion.': [
          '[name] 组织目前计划删除。',
        ],
        'Note: Restoration is available until deletion has started. Once it begins, there is no recovering the data that has been removed.':
          ['注意：在删除开始之前可以恢复。一旦开始，已删除的数据将无法恢复。'],
        'A view of the usage data that Sentry has received across your entire organization.':
          ['查看 Sentry 在整个组织中接收到的使用数据。'],
        Health: ['健康状况'],
        'Organization Usage Stats': ['组织使用统计'],
        'A view of the usage data that Sentry has received across your entire organization. [link: Read the docs].':
          ['查看 Sentry 在整个组织中接收到的使用数据。[link: 阅读文档]。'],
        'Last 2 weeks': ['过去 2 周'],
        'Last 4 weeks': ['过去 4 周'],
        'Last 8 weeks': ['过去 8 周'],
        'Last 12 weeks': ['过去 12 周'],
        'Project Health': ['项目健康状况'],
        'The percentage of healthy, errored, and abnormal sessions that didn’t cause a crash.':
          ['未导致崩溃的健康、错误和异常会话的百分比。'],
        'The number of unique users that experienced load times 4x the project’s configured threshold.':
          ['经历了项目配置阈值 4 倍加载时间的独特用户数量。'],
        'Metric Alerts Triggered': ['触发的指标警报'],
        'Alerts triggered from the Alert Rules your team created.': [
          '由您的团队创建的警报规则触发的警报。',
        ],
        'The releases that were created in your team’s projects.': [
          '在您的团队项目中创建的版本。',
        ],
        'Number of Releases': ['版本数量'],
        'Team Issues': ['团队问题'],
        'All Unresolved Issues': ['所有未解决的问题'],
        'This includes New and Returning issues in the last 7 days as well as those that haven’t been resolved or archived in the past.':
          ['包括过去 7 天内的新问题和回归问题，以及过去未解决或未存档的问题。'],
        'New and Returning Issues': ['新问题和回归问题'],
        'The new, regressed, and escalating issues that were assigned to your team.': [
          '分配给您的团队的新问题、回归问题和升级问题。',
        ],
        'Issues Triaged': ['已分类的问题'],
        'How many new and returning issues were reviewed by your team each week. Reviewing an issue includes marking as reviewed, resolving, assigning to another team, or deleting.':
          [
            '每周您的团队审查了多少新问题和回归问题。审查问题包括标记为已审查、解决、分配给其他团队或删除。',
          ],
        'Age of Unresolved Issues': ['未解决的问题年龄'],
        'How long ago since unresolved issues were first created.': [
          '未解决的问题首次创建的时间。',
        ],
        'The mean time it took for issues to be resolved by your team.': [
          '您的团队解决问题的平均时间。',
        ],
        'Time to Resolution': ['解决时间'],
        'No alerts triggered for team’s projects': ['团队项目未触发警报'],
        'Last [period] Average': ['上一个 [周期] 平均值'],
        'This Week': ['本周'],
        Difference: ['差异'],
        'No unresolved issues for this team’s projects': ['此团队项目没有未解决的问题'],
        'Oldest Issues': ['最老的问题'],
        Age: ['年龄'],
        '6 months': ['6 个月'],
        '1 year': ['1 年'],
        '> 1 year': ['> 1 年'],
        total: ['总计'],
        change: ['变化'],
        better: ['更好'],
        worse: ['更差'],
        'No key transactions starred by this team': ['此团队没有标记关键事务'],
        'Key transaction': ['关键事务'],
        'Last [period]': ['上一个 [周期]'],
        'Last 7 Days': ['过去 7 天'],
        'This Period': ['本周期'],
        'No releases were setup for this team’s projects': ['此团队项目未设置版本'],
        'Releases Per Project': ['每个项目的版本数'],
        'No projects with release health enabled': ['没有启用版本健康的项目'],
        '[period] Avg': ['[周期] 平均'],
        'Current Usage Period': ['当前使用周期'],
        Cumulative: ['累积'],
        Periodic: ['定期'],
        'Total [dataCategory]': ['总计 [数据类别]'],
        'Accepted [dataCategory]': ['已接受的 [数据类别]'],
        'Accepted [dataCategory] were successfully processed by Sentry': [
          'Sentry 成功处理了已接受的 [数据类别]',
        ],
        'Filtered [dataCategory]': ['已过滤的 [数据类别]'],
        'Filtered [dataCategory] were blocked due to your [filterSettings: inbound data filter] rules':
          ['由于您的 [filterSettings: 入站数据筛选器] 规则，已过滤的 [数据类别] 被阻止'],
        'Rate Limited [dataCategory]': ['受速率限制的 [数据类别]'],
        'Rate Limited [dataCategory] were discarded due to rate limits or quota': [
          '由于速率限制或配额，受速率限制的 [数据类别] 被丢弃',
        ],
        'Invalid [dataCategory]': ['无效的 [数据类别]'],
        'Invalid [dataCategory] were sent by the SDK and were discarded because the data did not meet the basic schema requirements':
          ['SDK 发送了无效的 [数据类别]，由于数据不符合基本架构要求，因此被丢弃'],
        '[start] — [end] ([timezone] UTC, [interval] interval)': [
          '[start] — [end] ([时区] UTC, [间隔] 间隔)',
        ],
        'Show client-discarded data:': ['显示客户端丢弃的数据：'],
        'in last min': ['最后一分钟内'],
        Invalid: ['无效'],
        'Filter your projects': ['筛选您的项目'],
        "You don't have access to any projects, or your organization has no projects.": [
          '您没有任何项目的访问权限，或者您的组织没有项目。',
        ],
        'Learn more about [link:Project Access]': [
          '了解更多关于 [link: 项目访问] 的信息',
        ],
        'Go to project settings': ['转到项目设置'],
        'Transaction Summary': ['事务摘要'],
        'Span Summary': ['跨度摘要'],
        'Vital Detail': ['重要细节'],
        'LCP p75': ['LCP p75'],
        'FCP p75': ['FCP p75'],
        'LCP Distribution': ['LCP 分布'],
        'FCP Distribution': ['FCP 分布'],
        'Transactions Per Minute': ['每分钟事务数'],
        'Duration p50': ['持续时间 p50'],
        'Duration p75': ['持续时间 p75'],
        'Duration p95': ['持续时间 p95'],
        'Duration p99': ['持续时间 p99'],
        'Cold Start Duration p50': ['冷启动持续时间 p50'],
        'Cold Start Duration p75': ['冷启动持续时间 p75'],
        'Cold Start Duration p95': ['冷启动持续时间 p95'],
        'Cold Start Duration p99': ['冷启动持续时间 p99'],
        'Cold Start Distribution': ['冷启动分布'],
        'Warm Start Duration p50': ['热启动持续时间 p50'],
        'Warm Start Duration p75': ['热启动持续时间 p75'],
        'Warm Start Duration p95': ['热启动持续时间 p95'],
        'Warm Start Duration p99': ['热启动持续时间 p99'],
        'Warm Start Distribution': ['热启动分布'],
        'TPM is the number of recorded transaction events per minute.': [
          'TPM 是每分钟记录的事务事件数量。',
        ],
        'Throughput is the number of recorded transaction events per minute.': [
          '吞吐量是每分钟记录的事务事件数量。',
        ],
        'Failure rate is the percentage of recorded transactions that had a known and unsuccessful status.':
          ['失败率是记录的事务中具有已知且不成功状态的百分比。'],
        'p50 indicates the duration that 50% of transactions are faster than.': [
          'p50 表示 50% 的事务所用时间比该值短。',
        ],
        'p75 indicates the duration that 75% of transactions are faster than.': [
          'p75 表示 75% 的事务所用时间比该值短。',
        ],
        'p95 indicates the duration that 95% of transactions are faster than.': [
          'p95 表示 95% 的事务所用时间比该值短。',
        ],
        'p99 indicates the duration that 99% of transactions are faster than.': [
          'p99 表示 99% 的事务所用时间比该值短。',
        ],
        'Largest contentful paint (LCP) is a web vital meant to represent user load times':
          ['最大的内容绘制 (LCP) 是一个网络核心指标，用于表示用户的加载时间'],
        'First contentful paint (FCP) is a web vital meant to represent user load times':
          ['首次内容绘制 (FCP) 是一个网络核心指标，用于表示用户的加载时间'],
        'First input delay (FID) is a web vital representing load for the first user interaction on a page.':
          ['首次输入延迟 (FID) 是一个网络核心指标，表示页面上首次用户交互的加载情况。'],
        'Cumulative layout shift (CLS) is a web vital measuring unexpected visual shifting a user experiences.':
          ['累积布局偏移 (CLS) 是一个网络核心指标，用于测量用户经历的意外视觉偏移。'],
        'The breakdown of transaction statuses. This may indicate what type of failure it is.':
          ['事务状态的分解。这可能表明是什么类型的失败。'],
        'Distribution buckets counts of transactions at specifics times for your current date range':
          ['在当前日期范围内特定时间的事务分布桶计数'],
        "User Misery is a score that represents the number of unique users who have experienced load times 4x the project's configured threshold. Adjust project threshold in project performance settings.":
          [
            '用户痛苦是一个分数，表示经历了项目配置阈值 4 倍加载时间的独特用户数量。在项目性能设置中调整项目阈值。',
          ],
        'Apdex is the ratio of both satisfactory and tolerable response times to all response times. To adjust the tolerable threshold, go to project performance settings.':
          [
            'Apdex 是满意和可接受响应时间与所有响应时间的比率。要调整可接受阈值，请转到项目性能设置。',
          ],
        'The count of the number of slow frames in the transaction.': [
          '事务中慢帧的数量。',
        ],
        'The count of the number of frozen frames in the transaction.': [
          '事务中冻结帧的数量。',
        ],
        'Transactions with the most associated errors.': ['关联错误最多的事务。'],
        'The most instances of an issue for a related transaction.': [
          '相关事务中问题实例最多。',
        ],
        'Database spans on which the application spent most of its total time.': [
          '应用程序花费总时间最多的数据库跨度。',
        ],
        'Render blocking resources on which the application spent most of its total time.':
          ['应用程序花费总时间最多的渲染阻塞资源。'],
        'Outgoing HTTP domains on which the application spent most of its total time.': [
          '应用程序花费总时间最多的出站 HTTP 域。',
        ],
        'Transactions with the highest cache miss rate.': ['缓存未命中率最高的事务。'],
        'The transactions with the slowest spans of a certain type.': [
          '特定类型跨度最慢的事务。',
        ],
        'The percentage of the transaction duration in which the application is in a stalled state.':
          ['事务持续时间中应用程序处于停滞状态的百分比。'],
        'Vitals Performance Details': ['核心性能详情'],
        'p50 Duration': ['p50 持续时间'],
        'p95 Duration': ['p95 持续时间'],
        'p99 Duration': ['p99 持续时间'],
        'Your main view for transaction data with graphs that visualize transactions or trends, as well as a table where you can drill down on individual transactions.':
          [
            '您的主要事务数据视图，包含可视化事务或趋势的图表，以及一个可以深入查看单个事务的表格。',
          ],
        'View Trends': ['查看趋势'],
        'You have some unparameterized transactions which are incompatible with dynamic sampling. You can either [setNames] or [discover]':
          ['您有一些未参数化的事务，与动态采样不兼容。您可以 [setNames] 或 [discover]'],
        'set names manually': ['手动设置名称'],
        'A few projects are incompatible with dynamic sampling. To enable this feature [updateSDK].':
          ['一些项目与动态采样不兼容。要启用此功能 [updateSDK]。'],
        'A few projects are incompatible with dynamic sampling. You can either [updateSDK] or [onlyViewCompatible]':
          ['一些项目与动态采样不兼容。您可以 [updateSDK] 或 [onlyViewCompatible]'],
        'only view compatible projects.': ['仅查看兼容的项目。'],
        'Your project has an outdated SDK which is incompatible with dynamic sampling. To enable this feature [updateSDK].':
          ['您的项目使用的是过时的 SDK，与动态采样不兼容。要启用此功能 [updateSDK]。'],
        'open them in Discover.': ['在 Discover 中打开它们。'],
        'You have some unparameterized transactions which are incompatible with dynamic sampling. You can [discover]':
          ['您有一些未参数化的事务，与动态采样不兼容。您可以 [discover]'],
        'Duration (p75)': ['持续时间 (p75)'],
        'Slow Frames (p75)': ['慢帧 (p75)'],
        'Frozen Frames (p75)': ['冻结帧 (p75)'],
        'Cold Start (p75)': ['冷启动 (p75)'],
        'Warm Start (p75)': ['热启动 (p75)'],
        'Stall Percentage (p75)': ['停滞百分比 (p75)'],
        Frontend: ['前端'],
        Backend: ['后端'],
        'No vitals found': ['未找到核心指标'],
        'The p75 for all transactions is ': ['所有事务的 p75 是 '],
        'Transactions may be missing due to the filters above, a low sampling rate, or an error with instrumentation. Please see the [link] for more information.':
          [
            '由于上述筛选条件、采样率低或 instrumentation 错误，可能会遗漏事务。请参阅 [link] 以获取更多信息。',
          ],
        'Cache module documentation': ['缓存模块文档'],
        'No transactions with [spanCategory] spans found. You may need to add integrations to your [link] to capture these spans.':
          [
            '未找到具有 [spanCategory] 跨度的事务。您可能需要向 [link] 添加集成以捕获这些跨度。',
          ],
        Database: ['数据库'],
        'performance monitoring setup': ['性能监控设置'],
        'Exclude this transaction from the search filter.': [
          '将此事务排除在搜索筛选器之外。',
        ],
        'Transactions may not be listed due to the filters above or a low sampling rate':
          ['由于上述筛选条件或采样率低，可能不会列出事务'],
        'Domains may be missing due to the filters above, a low sampling rate, or an error with instrumentation. Please see the [link] for more information.':
          [
            '由于上述筛选条件、采样率低或 instrumentation 错误，可能会遗漏域。请参阅 [link] 以获取更多信息。',
          ],
        'Requests module documentation': ['请求模块文档'],
        'FID Distribution': ['FID 分布'],
        'Worst LCP Web Vitals': ['最差的 LCP 网络核心指标'],
        'Worst FCP Web Vitals': ['最差的 FCP 网络核心指标'],
        'Worst FID Web Vitals': ['最差的 FID 网络核心指标'],
        'Worst CLS Web Vitals': ['最差的 CLS 网络核心指标'],
        'p75 Duration': ['p75 持续时间'],
        'p75 LCP': ['p75 LCP'],
        'Cold Startup Time': ['冷启动时间'],
        'Warm Startup Time': ['热启动时间'],
        'Most Related Errors': ['相关错误最多'],
        'Most Related Issues': ['相关问题最多'],
        'Most Time-Consuming': ['最耗时'],
        'Top queries by total duration': ['总持续时间最长的查询'],
        'Render blocking for pages': ['页面渲染阻塞'],
        'Highest Cache Miss Rates': ['缓存未命中率最高'],
        'Suggested Transactions': ['建议的事务'],
        'Most Time-Consuming Domains': ['最耗时的域'],
        'Top outgoing HTTP request domains by time spent': [
          '按耗时排序的出站 HTTP 请求域',
        ],
        'Best Page Opportunities': ['最佳页面优化机会'],
        'Pages to improve your performance score': ['提高性能得分的页面'],
        'The overall performance score across selected frontend projects only': [
          '选定的前端项目的整体性能得分',
        ],
        'Slow HTTP Ops': ['慢 HTTP 操作'],
        'Slow Browser Ops': ['慢浏览器操作'],
        'Slow Resource Ops': ['慢资源操作'],
        'Slow DB Ops': ['慢数据库操作'],
        'Time to Initial Display': ['初始显示时间'],
        'Time to Full Display': ['完全显示时间'],
        'Most Slow Frames': ['慢帧最多'],
        'Most Frozen Frames': ['冻结帧最多'],
        'Most Improved (P95)': ['改进最多（P95）'],
        'This compares the baseline (%s) of the past with the present.': [
          '将过去的基线（%s）与现在进行比较。',
        ],
        'Most Regressed (P95)': ['回归最多（P95）'],
        'Most Changed (P95)': ['变化最大（P95）'],
        'Span Operations Breakdown': ['跨度操作分解'],
        'Average TTIDs': ['平均 TTID'],
        'Top screens by count': ['按计数排序的顶级屏幕'],
        'Top screens by start count': ['按启动计数排序的顶级屏幕'],
        'In the last %s ': ['在最近的 %s 内'],
        'In the last period': ['在最近的周期内'],
        '[count] errors': ['[count] 个错误'],
        'Found in the following transactions': ['在以下事务中发现'],
        'Compared to last %s ': ['与上一个 %s 相比'],
        'Compared to the last period': ['与上一个周期相比'],
        'P75 in Top Transactions': ['顶级事务中的 P75'],
        'Trending Transactions': ['趋势事务'],
        Trace: ['跟踪'],
        Vitals: ['核心指标'],
        'Assembling the trace': ['正在组装跟踪'],
        'Ughhhhh, we failed to load your trace...': ['呃，我们未能加载您的跟踪……'],
        'Seeing this often? Send us ': ['经常看到这个吗？给我们发送'],
        'This trace does not contain any data?!': ['此跟踪不包含任何数据？！'],
        Empty: ['空'],
        '[type] did not report any span data': ['[类型] 没有报告任何跨度数据'],
        'Parent Transaction': ['父事务'],
        'Go to Issue': ['转到问题'],
        'No stack trace has been reported with this error': ['此错误未报告堆栈跟踪'],
        '[count]+  issues, [link]': ['[count]+ 个问题，[链接]'],
        'Performance issue': ['性能问题'],
        'Performance Issues': ['性能问题'],
        '[errors] [errorsText] and [performance_issues] [performanceIssuesText]': [
          '[errors] [errorsText] 和 [performance_issues] [performanceIssuesText]',
        ],
        'performance issue': ['性能问题'],
        'performance issues': ['性能问题'],
        'Failed to fetch issue': ['获取问题失败'],
        'Previous Span': ['上一个跨度'],
        'Next Span': ['下一个跨度'],
        'Missing Instrumentation': ['缺少 Instrumentation'],
        'Data quality': ['数据质量'],
        'The cause of missing data could be misconfiguration or lack of instrumentation. Send us [feedback] if you are having trouble figuring this out.':
          [
            '数据缺失的原因可能是配置错误或缺少 instrumentation。如果您在解决此问题时遇到困难，请给我们发送 [feedback]。',
          ],
        'Grouping Logic': ['分组逻辑'],
        'Chain of immediate and only children spans with the same operation as their parent.':
          ['与父级具有相同操作的直接且唯一的子跨度链。'],
        'Group Count': ['分组计数'],
        'Grouping Key': ['分组键'],
        'Span Operation': ['跨度操作'],
        Autogroup: ['自动分组'],
        '5 or more sibling spans with the same operation and description.': [
          '具有相同操作和描述的 5 个或更多兄弟跨度。',
        ],
        'Span operation: [operation] and description: [description]': [
          '跨度操作：[operation] 和描述：[description]',
        ],
        'Applicable to the children of this event only': ['仅适用于此事件的子项'],
        Http: ['HTTP'],
        'Extract as metric': ['提取为指标'],
        'Timing-Allow-Origin': ['Timing-Allow-Origin'],
        ' The following sizes were not collected for security reasons. Check if the host serves the appropriate [link] header. You may have to enable this collection manually.':
          [
            '由于安全原因，未收集以下大小。请检查主机是否提供了适当的 [link] 标头。您可能需要手动启用此收集。',
          ],
        'equal to the avg of [formattedBaseDuration]': [
          '等于 [formattedBaseDuration] 的平均值',
        ],
        '[deltaPct] faster than the avg of [formattedBaseDuration]': [
          '比 [formattedBaseDuration] 的平均值快 [deltaPct]',
        ],
        '[deltaPct] slower than the avg of [formattedBaseDuration]': [
          '比 [formattedBaseDuration] 的平均值慢 [deltaPct]',
        ],
        'Show in View': ['在视图中显示'],
        'Continuous Profile': ['连续配置文件'],
        'Show in view': ['在视图中显示'],
        'Trace Data': ['跟踪数据'],
        'Failed to fetch transaction details': ['获取事务详情失败'],
        'The trail of events that happened prior to an event. [link:Learn more]': [
          '事件发生前的事件轨迹。[link: 了解更多]',
        ],
        'Cache Metrics': ['缓存指标'],
        'View transaction summary': ['查看事务摘要'],
        'Ops Breakdown': ['操作分解'],
        Measurements: ['测量'],
        Command: ['命令'],
        cURL: ['cURL'],
      };
      var trans9 = {
        '%s error issue': ['%s 错误问题'],
        '%s error issues': ['%s 错误问题'],
        '%s performance issue': ['%s 性能问题'],
        '%s performance issues': ['%s 性能问题'],
        'Start Timestamp': ['开始时间戳'],
        'Total Duration': ['总持续时间'],
        'Profiled Transaction': ['已分析事务'],
        'Drawer left': ['左侧抽屉'],
        'Drawer bottom': ['底侧抽屉'],
        'Drawer right': ['右侧抽屉'],
        Minimize: ['最小化'],
        'Trace View': ['跟踪视图'],
        'Asset Summary': ['资源摘要'],
        'Page Overview': ['页面概览'],
        'Search in trace': ['在跟踪中搜索'],
        'Trace Shortcuts': ['跟踪快捷键'],
        'Navigate up or down': ['向上或向下导航'],
        'Collapse or expand': ['折叠或展开'],
        Shift: ['Shift'],
        'Jump to first/last element': ['跳转到第一个/最后一个元素'],
        'Cmd / Ctrl + Scroll': ['Cmd / Ctrl + 滚动'],
        'Zoom in/out at cursor': ['在光标处缩放'],
        'Shift + Scroll': ['Shift + 滚动'],
        'Scroll horizontally': ['水平滚动'],
        'Double click': ['双击'],
        'Zoom to fill': ['缩放以填满'],
        Shortcuts: ['快捷键'],
        'Sentry cant fix this': ['Sentry 无法修复此问题'],
        "You've exceeded your [billingInterval] [billingType]": [
          '您已超出 [billingInterval] [billingType]',
        ],
        'pay-as-you-go budget': ['按使用付费预算'],
        quota: ['配额'],
        'Increase Budget': ['增加预算'],
        'Increase Volumes': ['增加容量'],
        'Spans are being dropped and monitoring is impacted. To start seeing traces with spans, increase your [billingType].':
          [
            '跨度正在被丢弃，监控受到影响。要开始查看带有跨度的跟踪，请增加您的 [billingType]。',
          ],
        budget: ['预算'],
        "Some of the projects associated with this trace aren't set up for tracing so you're only getting a partial trace view. To learn how to enable tracing for all your projects, visit our [documentation].":
          [
            '与此跟踪相关的某些项目未设置跟踪，因此您只能看到部分跟踪视图。要了解如何为所有项目启用跟踪，请访问我们的 [documentation]。',
          ],
        documentation: ['文档'],
        'Your setup is incomplete': ['您的设置不完整'],
        'Want to know why this string of errors happened? Configure tracing for your SDKs to see correlated events across your services.':
          ['想知道这一串错误发生的原因吗？配置 SDK 的跟踪以查看跨服务的相关事件。'],
        'Start Checklist': ['开始检查列表'],
        'A root transaction is missing. Transactions linked by a dashed line have been orphaned and cannot be directly linked to the root.':
          ['缺少根事务。用虚线链接的事务已被孤立，无法直接链接到根。'],
        'This trace has broken subtraces. Transactions linked by a dashed line have been orphaned and cannot be directly linked to the root.':
          ['此跟踪有损坏的子跟踪。用虚线链接的事务已被孤立，无法直接链接到根。'],
        'Multiple root transactions have been found with this trace ID.': [
          '与此跟踪 ID 找到了多个根事务。',
        ],
        'Start Setup': ['开始设置'],
        'Pinpoint problems': ['精确定位问题'],
        'Something seem slow? Track down transactions to connect the dots between 10-second page loads and poor-performing API calls or slow database queries.':
          [
            '感觉有点慢吗？跟踪事务以连接 10 秒页面加载与性能不佳的 API 调用或慢数据库查询之间的点。',
          ],
        'View Sample Transaction': ['查看示例事务'],
        'Take a Tour': ['参加导览'],
        'Track Application Metrics': ['跟踪应用程序指标'],
        'Monitor your slowest pageloads and APIs to see which users are having the worst time.':
          ['监控最慢的页面加载和 API，以查看哪些用户遇到了最糟糕的体验。'],
        'Correlate Errors and Traces': ['关联错误和跟踪'],
        'See what errors occurred within a transaction and the impact of those errors.': [
          '查看在事务中发生的错误及其影响。',
        ],
        'Watch and Alert': ['监控和警报'],
        'Highlight mission-critical pages and APIs and set latency alerts to notify you before things go wrong.':
          ['突出显示关键页面和 API，并设置延迟警报以便在出现问题前通知您。'],
        'Trace Across Systems': ['跨系统跟踪'],
        "Follow a trace from a user's session and drill down to identify any bottlenecks that occur.":
          ['从用户会话跟踪并深入分析以识别任何发生的瓶颈。'],
        '[transactionName] updated successfully': ['[transactionName] 更新成功'],
        'Transactions are grouped together until we receive enough data to identify parameter patterns.':
          ['在我们收到足够的数据以识别参数模式之前，事务将被分组在一起。'],
        'Hang in there, as we build your trace view!': [
          '请耐心等待，我们正在构建您的跟踪视图！',
        ],
        'Trace view requires a date range selection.': ['跟踪视图需要选择日期范围。'],
        'Search for events': ['搜索事件'],
        'The number of transactions and issues there are in this trace.': [
          '此跟踪中的事务和问题数量。',
        ],
        '[transactions]  |  [errors]': ['[transactions]  |  [errors]'],
        '%s Transaction': ['%s 事务'],
        '%s Transactions': ['%s 事务'],
        'Across %s project': ['跨 %s 项目'],
        'Across %s projects': ['跨 %s 项目'],
        'The time elapsed between the start and end of this trace.': [
          '此跟踪从开始到结束所经过的时间。',
        ],
        'Trace ID: %s': ['跟踪 ID: %s'],
        "The good news is we know these errors are related to each other in the same trace. The bad news is that we can't tell you more than that due to limited sampling.":
          [
            '好消息是，我们知道这些错误在同一个跟踪中是相关的。坏消息是，由于采样有限，我们无法告诉您更多。',
          ],
        'Connect the Dots': ['连接点'],
        "If you haven't already, [tracingLink:set up tracing] to get a connected view of errors and transactions coming from interactions between all your software systems and services.":
          [
            '如果您尚未这样做，请 [tracingLink:设置跟踪] 以获得来自所有软件系统和服务交互的错误和事务的连接视图。',
          ],
        'Limited to a view of [count] rows. To view the full list, go to [discover].': [
          '限制为查看 [count] 行。要查看完整列表，请转到 [discover]。',
        ],
        '[loadMore:Show more] of this trace or go to the full list of events in [discover]':
          ['[loadMore:显示更多] 此跟踪或转到 [discover] 中的完整事件列表'],
        'Load more': ['加载更多'],
        "The good news: we know all these errors are related. The bad news: we can't tell you more than that. If you haven't already, [tracingLink:configure tracing for your SDKs] to get a connected view of your software systems and services.":
          [
            '好消息：我们知道所有这些错误都是相关的。坏消息：我们无法告诉您更多。如果您尚未这样做，请 [tracingLink:为您的 SDK 配置跟踪] 以获得您的软件系统和服务的连接视图。',
          ],
        '[numOfTransaction] hidden transaction': ['[numOfTransaction] 个隐藏事务'],
        '[numOfTransaction] hidden transactions': ['[numOfTransaction] 个隐藏事务'],
        '[numOfErrors] hidden error': ['[numOfErrors] 个隐藏错误'],
        '[numOfErrors] hidden errors': ['[numOfErrors] 个隐藏错误'],
        'This transaction is showing a direct child. Remove transaction to hide': [
          '此事务显示直接子项。移除事务以隐藏',
        ],
        'This transaction has a direct child. Add transaction to view': [
          '此事务有直接子项。添加事务以查看',
        ],
        'The trace cannot be shown when all events are errors. An error occurred when attempting to fetch these error events: [error]':
          [
            '当所有事件都是错误时，无法显示跟踪。在尝试获取这些错误事件时发生错误：[error]',
          ],
        'The trace cannot be shown when all events are errors.': [
          '当所有事件都是错误时，无法显示跟踪。',
        ],
        'The trace you are looking for was not found.': ['未找到您要查找的跟踪。'],
        'Hide Breadcrumbs': ['隐藏面包屑'],
        'Show Breadcrumbs': ['显示面包屑'],
        '%s issue occurred in this transaction.': ['此事务中发生了 %s 问题。'],
        '%s issues occurred in this transaction.': ['此事务中发生了 %s 问题。'],
        'Go to originating URL': ['转到原始 URL'],
        'Performance — Event Details': ['性能 — 事件详情'],
        'The unique ID assigned to this %s.': ['分配给此 %s 的唯一 ID。'],
        'Event Duration': ['事件持续时间'],
        'The time elapsed between the start and end of this transaction.': [
          '此事务从开始到结束所经过的时间。',
        ],
        'The time at which this event was created.': ['此事件创建的时间。'],
        'The status of this transaction indicating if it succeeded or otherwise.': [
          '此事务的状态，指示其是否成功或其他情况。',
        ],
        'The browser used in this transaction.': ['在此事务中使用的浏览器。'],
        'You are viewing a sample transaction. Configure performance to start viewing real transactions.':
          ['您正在查看示例事务。配置性能以开始查看实际事务。'],
        'Performance Details': ['性能详情'],
        'Requires tracing.': ['需要跟踪。'],
        'Missing Trace': ['缺少跟踪'],
        'Trace Navigator': ['跟踪导航器'],
        'An abbreviated version of the full trace. Related frontend and backend services can be added to provide further visibility.':
          ['完整跟踪的简略版本。可以添加相关的前端和后端服务以提供更多可见性。'],
        'View Full Trace: [id][events]': ['查看完整跟踪：[id][events]'],
        ' (%s event)': ['（%s 事件）'],
        ' (%s events)': ['（%s 事件）'],
        'Aggregate Spans: %s': ['聚合跨度：%s'],
        Anomalies: ['异常'],
        'Unable to get projects associated with transaction': [
          '无法获取与事务相关的项目',
        ],
        'Starred for Team': ['团队收藏'],
        'Starred for Teams': ['团队收藏'],
        'Star for Team': ['为团队收藏'],
        Confidence: ['置信度'],
        'Time Interval': ['时间间隔'],
        Expected: ['预期'],
        'Low Confidence': ['低置信度'],
        'High Confidence': ['高置信度'],
        Anomaly: ['异常'],
        'Represents transaction count across time, with added visualizations to highlight anomalies in your data.':
          ['表示随时间变化的事务计数，并添加可视化以突出显示数据中的异常。'],
        'Transaction Count': ['事务计数'],
        'trace id': ['跟踪 ID'],
        '%s duration': ['%s 持续时间'],
        'Profiles require a transaction duration of at least 20ms': [
          '分析需要事务持续时间至少为 20 毫秒',
        ],
        'Showing [pageEventsCount] of [totalEventsCount] events': [
          '显示 [pageEventsCount] 个事件，共 [totalEventsCount] 个',
        ],
        'Sort By HTTP': ['按 HTTP 排序'],
        'Sort By DB': ['按数据库排序'],
        'Sort By Resource': ['按资源排序'],
        'Sort By Browser': ['按浏览器排序'],
        p50: ['p50'],
        p75: ['p75'],
        p95: ['p95'],
        p99: ['p99'],
        p100: ['p100'],
        'Duration Breakdown': ['持续时间分解'],
        'Duration Percentiles': ['持续时间百分位数'],
        'Span Operation Percentiles': ['跨度操作百分位数'],
        'Span Operation Distribution': ['跨度操作分布'],
        'Fastest Transactions': ['最快事务'],
        'Slow Transactions (p95)': ['慢事务 (p95)'],
        'Outlier Transactions (p100)': ['异常事务 (p100)'],
        'Recent Transactions': ['最近事务'],
        'Fastest %s Operations': ['最快 %s 操作'],
        'Slow %s Operations (p95)': ['慢 %s 操作 (p95)'],
        'Outlier %s Operations (p100)': ['异常 %s 操作 (p100)'],
        'Based on your search criteria and sample rate, the events available may be limited.':
          ['根据您的搜索标准和采样率，可用的事件可能有限。'],
        'Span Operation Breakdown - [operationName]': ['跨度操作分解 - [operationName]'],
        'Duration Breakdown reflects transaction durations by percentile over time.': [
          '持续时间分解反映随时间变化的事务持续时间百分位数。',
        ],
        'Span Operation Percentiles - [operationName]': [
          '跨度操作百分位数 - [operationName]',
        ],
        'Compare the duration at each percentile. Compare with Latency Histogram to see transaction volume at duration intervals.':
          ['比较每个百分位数的持续时间。与延迟直方图比较以查看持续时间间隔的事务量。'],
        Outliers: ['异常值'],
        'Target zoom region too small': ['目标缩放区域太小'],
        'Span Operation Distribution - [operationName]': [
          '跨度操作分布 - [operationName]',
        ],
        'Duration Distribution reflects the volume of transactions per median duration.':
          ['持续时间分布反映每个中位持续时间的事务量。'],
        'Auto (metrics)': ['自动（指标）'],
        'Auto (transactions)': ['自动（事务）'],
        'given timeframe': ['给定时间范围'],
        'No new issues for this transaction for the [timePeriod].': [
          '此事务在 [timePeriod] 内没有新问题。',
        ],
        'Status Breakdown': ['状态分解'],
        'No statuses found': ['未找到状态'],
        'Suspect Spans': ['可疑跨度'],
        'View All Spans': ['查看所有跨度'],
        '%s faster': ['%s 更快'],
        '+%s slower': ['+%s 更慢'],
        'View All Tags': ['查看所有标签'],
        Smoothed: ['平滑'],
        'Trends shows the smoothed value of an aggregate over time.': [
          '趋势显示随时间变化的聚合平滑值。',
        ],
        'Web Vitals with p75 better than the "poor" threshold, as defined by Google Web Vitals.':
          ['Web Vitals 的 p75 优于 Google Web Vitals 定义的 "差" 阈值。'],
        'Web Vitals Breakdown': ['Web Vitals 分解'],
        'Web Vitals Breakdown reflects the 75th percentile of web vitals over time.': [
          'Web Vitals 分解反映随时间变化的 Web Vitals 的第 75 百分位数。',
        ],
        'There was an error loading the flamegraph.': ['加载火焰图时出错。'],
        'No profiling data found': ['未找到分析数据'],
        Flamegraph: ['火焰图'],
        'Call Tree': ['调用树'],
        'Newest Events': ['最新事件'],
        'Oldest Events': ['最旧事件'],
        'Slowest Events': ['最慢事件'],
        'Fastest Events': ['最快事件'],
        'Profile: %s': ['分析： %s'],
        'Unable to load profiles': ['无法加载分析数据'],
        'Error loading operations': ['加载操作时出错'],
        'Self Time Breakdown': ['独占时间分解'],
        'Self Time Distribution': ['独占时间分布'],
        'Distribution buckets counts of the same self time duration for the selected span op and group.':
          ['所选跨度操作和组中相同独占时间持续时间的分布桶计数。'],
        'Self Time Breakdown reflects the span self time by percentile over time.': [
          '独占时间分解反映随时间变化的跨度独占时间百分位数。',
        ],
        'Filter Transactions': ['筛选事务'],
        'Self Time Percentiles': ['独占时间百分位数'],
        '[times] times per event': ['每个事件 [times] 次'],
        '[events] events': ['[events] 事件'],
        'Cumulative Duration': ['累积持续时间'],
        '[percentage] of the transaction ([duration])': [
          '事务的 [percentage]（[duration]）',
        ],
        'Transaction Throughput': ['事务吞吐量'],
        'Span Throughput': ['跨度吞吐量'],
        '[spanCount] spans': ['[spanCount] 个跨度'],
        'Transaction duration unknown': ['事务持续时间未知'],
        'Span Name': ['跨度名称'],
        'Average Occurrences': ['平均发生次数'],
        'P50 Self Time': ['P50 独占时间'],
        'P95 Self Time': ['P95 独占时间'],
        'P99 Self Time': ['P99 独占时间'],
        'Average Count': ['平均计数'],
        'p50 Self Time': ['p50 独占时间'],
        'p75 Self Time': ['p75 独占时间'],
        'p95 Self Time': ['p95 独占时间'],
        'p99 Self Time': ['p99 独占时间'],
        LCP: ['LCP'],
        'X-Axis': ['X 轴'],
        'Suspect tags are tags that often correspond to slower transaction': [
          '可疑标签通常对应较慢的事务',
        ],
        'No tags detected.': ['未检测到标签。'],
        'Other Tags': ['其他标签'],
        'Other common tags for this transaction': ['此事务的其他常见标签'],
        'Heat Map': ['热图'],
        'This heatmap shows the frequency for each duration across the most common tag values':
          ['此热图显示最常见标签值中每个持续时间的频率'],
        'This determines which duration metric is used for the Response Time Threshold.':
          ['这决定了用于响应时间阈值的持续时间指标。'],
        'The satisfactory response time for the calculation method defined above. This is used to calculate Apdex and User Misery scores.':
          ['上述定义的计算方法的满意响应时间。这用于计算 Apdex 和用户痛苦分数。'],
        'The changes below will only be applied to [transaction]. To set it at a more global level, go to [projectSettings: Project Settings].':
          [
            '以下更改仅应用于 [transaction]。要在更全局的级别设置，请转到 [projectSettings: 项目设置]。',
          ],
        'If this page is looking a little bare, keep in mind not all browsers support these vitals. [link]':
          ['如果此页面看起来有点空，需注意并非所有浏览器都支持这些核心指标。[链接]'],
        'Read more about browser support.': ['阅读更多关于浏览器支持的信息。'],
        'Over this period, the %s for %s has %s %s from %s to %s': [
          '在此期间，%s 的 %s 从 %s 变为 %s，%s 了 %s',
        ],
        decreased: ['减少'],
        increased: ['增加'],
        'Show ≤ %s': ['显示 ≤ %s'],
        'Show ≥ %s': ['显示 ≥ %s'],
        'Hide from list': ['从列表中隐藏'],
        'Most Improved Transactions': ['改进最多的事务'],
        'Most Regressed Transactions': ['退步最多的事务'],
        'Regression Metric': ['退步指标'],
        'Improvement Metric': ['改进指标'],
        'Ongoing Regression': ['持续退步'],
        'Ongoing Improvement': ['持续改进'],
        'Relevant Suspect Functions': ['相关可疑函数'],
        'There was an issue finding suspect functions for this transaction': [
          '查找此事务的可疑函数时出现问题',
        ],
        'No results found for suspect functions': ['未找到可疑函数的结果'],
        '[changeType] suspect function': ['[changeType] 可疑函数'],
        'No sizable changes in suspect functions': ['可疑函数没有显著变化'],
        Removed: ['已移除'],
        Improved: ['已改进'],
        'Relevant Suspect Spans': ['相关可疑跨度'],
        'There was an issue finding suspect spans for this transaction': [
          '查找此事务的可疑跨度时出现问题',
        ],
        'No results found for suspect spans': ['未找到可疑跨度的结果'],
        '[changeType] suspect span': ['[changeType] 可疑跨度'],
        'No sizable changes in suspect spans': ['可疑跨度没有显著变化'],
        slower: ['更慢'],
        faster: ['更快'],
        'Past Baseline': ['过去基线'],
        'Present Baseline': ['当前基线'],
        'Unparameterized Transactions': ['未参数化事务'],
        'Performance - Unparameterized Transactions': ['性能 - 未参数化事务'],
        'See transaction summary of the transaction %s': ['查看事务 %s 的摘要'],
        'First Contentful Paint (FCP) measures the amount of time the first content takes to render in the viewport. Like FP, this could also show up in any form from the document object model (DOM), such as images, SVGs, or text blocks. At the moment, there is support for FCP in the following browsers:':
          [
            '首次内容绘制 (FCP) 测量第一个内容在视口中渲染所需的时间。与 FP 一样，这也可以来自文档对象模型 (DOM) 的任何形式，如图像、SVG 或文本块。目前，FCP 在以下浏览器中受支持：',
          ],
        'Cumulative Layout Shift (CLS) is the sum of individual layout shift scores for every unexpected element shift during the rendering process. Imagine navigating to an article and trying to click a link before the page finishes loading. Before your cursor even gets there, the link may have shifted down due to an image rendering. Rather than using duration for this Web Vital, the CLS score represents the degree of disruptive and visually unstable shifts. At the moment, there is support for CLS in the following browsers:':
          [
            '累积布局偏移 (CLS) 是在渲染过程中每个意外元素偏移的个体布局偏移得分之和。想象一下，在页面加载完成之前导航到一篇文章并尝试点击链接。在您的光标到达之前，链接可能因为图像渲染而向下移动。对于这个网络核心指标，CLS 得分代表了破坏性和视觉不稳定偏移的程度。目前，CLS 在以下浏览器中受支持：',
          ],
        'First Input Delay (FID) measures the response time when the user tries to interact with the viewport. Actions maybe include clicking a button, link or other custom Javascript controller. It is key in helping the user determine if a page is usable or not. At the moment, there is support for FID in the following browsers:':
          [
            '首次输入延迟 (FID) 测量用户尝试与视口交互时的响应时间。动作可能包括点击按钮、链接或其他自定义 JavaScript 控件。它对于帮助用户确定页面是否可用至关重要。目前，FID 在以下浏览器中受支持：',
          ],
        'Largest Contentful Paint (LCP) measures the render time for the largest content to appear in the viewport. This may be in any form from the document object model (DOM), such as images, SVGs, or text blocks. It’s the largest pixel area in the viewport, thus most visually defining. LCP helps developers understand how long it takes to see the main content on the page. At the moment, there is support for LCP in the following browsers:':
          [
            '最大内容绘制 (LCP) 测量最大的内容在视口中出现的渲染时间。这可以来自文档对象模型 (DOM) 的任何形式，如图像、SVG 或文本块。它是视口中的最大像素区域，因此在视觉上最具定义性。LCP 帮助开发人员了解看到页面上的主要内容需要多长时间。目前，LCP 在以下浏览器中受支持：',
          ],
        'Time to First Byte (TTFB) is a foundational metric for measuring connection setup time and web server responsiveness in both the lab and the field. It helps identify when a web server is too slow to respond to requests. In the case of navigation requests—that is, requests for an HTML document—it precedes every other meaningful loading performance metric. At the moment, there is support for TTFB in the following browsers:':
          [
            '首次字节时间 (TTFB) 是测量连接建立时间和网络服务器响应性的基础指标，无论是在实验室环境中还是在实际使用中。它有助于识别网络服务器响应请求是否过慢。在导航请求的情况下（即，对 HTML 文档的请求），它先于所有其他有意义的加载性能指标。目前，TTFB 在以下浏览器中受支持：',
          ],
        'CLS p75': ['CLS p75'],
        'The durations shown should fall under the vital threshold.': [
          '显示的持续时间应低于核心阈值。',
        ],
        '(>[threshold][unit])': ['(> [threshold][unit])'],
        '(<=[threshold][unit])': ['(<= [threshold][unit])'],
        'Your role does not have the necessary permissions to access this\n             resource, please read more about [link:organizational roles]':
          ['您的角色没有访问此资源所需的权限，请阅读更多关于 [link: 组织角色] 的信息'],
        'Profiling collects detailed information in production about the functions executing in your application and how long they take to run, giving you code-level visibility into your hot paths.':
          [
            '分析收集有关应用程序中执行的函数及其运行时间的详细信息，为您提供代码级别的热点路径可见性。',
          ],
        'Profiling — Flamechart': ['分析 — 火焰图'],
        'Most Regressed Functions': ['退步最多的函数'],
        'Functions by most regressed.': ['按退步最多的函数排序。'],
        'Most Improved Functions': ['改进最多的函数'],
        'Functions by most improved.': ['按改进最多的函数排序。'],
        'Unknown trend type': ['未知趋势类型'],
        'Appeared [count] times.': ['出现 [count] 次。'],
        'No regressed functions detected': ['未检测到退步的函数'],
        'No improved functions detected': ['未检测到改进的函数'],
        'Slowest Functions (breakdown by AVG)': ['最慢函数（按平均值分解）'],
        'Slowest Functions (breakdown by P50)': ['最慢函数（按 P50 分解）'],
        'Slowest Functions (breakdown by P75)': ['最慢函数（按 P75 分解）'],
        'Slowest Functions (breakdown by P95)': ['最慢函数（按 P95 分解）'],
        'Slowest Functions (breakdown by P99)': ['最慢函数（按 P99 分解）'],
        'Profiles by Count': ['按计数排序的分析数据'],
        'Profiles Duration': ['分析持续时间'],
        'Profiles by Percentiles': ['按百分位数排序的分析数据'],
        Durations: ['持续时间'],
        'Slowest Transactions': ['最慢事务'],
        'Slowest transactions that could use some optimization.': [
          '可能需要优化的最慢事务。',
        ],
        'Transactions may not be listed due to the filters above or a low number of profiles.':
          ['由于上述筛选条件或分析数据数量少，可能不会列出事务。'],
        '<unknown function>': ['<未知函数>'],
        '<unknown package>': ['<未知包>'],
        'View Function Metrics': ['查看函数指标'],
        'No functions found': ['未找到函数'],
        'Slowest functions': ['最慢函数'],
        'p75()': ['p75()'],
        'p95()': ['p95()'],
        'p99()': ['p99()'],
        'Sum()': ['Sum()'],
        'Appeared [count] times for a total time spent of [totalSelfTime]': [
          '出现 [count] 次，总独占时间为 [totalSelfTime]',
        ],
        'Slowest functions by total self time spent.': ['按总独占时间排序的最慢函数。'],
        'Expand or collapse the view': ['展开或折叠视图'],
        'Error: Unable to load profiles': ['错误：无法加载分析数据'],
        'Sampled Profiles': ['采样分析数据'],
        'Profiling — Profile Summary': ['分析 — 分析摘要'],
        profiles: ['分析数据'],
        'Failed to fetch regressed functions': ['获取退步函数失败'],
        time: ['时间'],
        times: ['次数'],
        'Slowest Application Functions': ['最慢的应用程序函数'],
        'Slowest System Functions': ['最慢的系统函数'],
        'Failed to fetch slowest functions': ['获取最慢函数失败'],
        'The fastest code is one that never runs.': ['最快的代码是永不运行的代码。'],
        'App Version': ['应用版本'],
        'Device Os Version': ['设备操作系统版本'],
        'Number of Errors Chart': ['错误数量图表'],
        'Daily Errors': ['每日错误'],
        'Overall Bad Behaviour Threshold': ['整体不良行为阈值'],
        'Get Tour': ['获取导览'],
        'Release health is not available for errors only self-hosted.': [
          '仅自我托管的错误不可用发布健康。',
        ],
        'Release Health is not yet supported on this platform.': [
          '此平台尚不支持发布健康。',
        ],
        'Number of Sessions': ['会话数量'],
        'Number of Transactions': ['事务数量'],
        'ANR Rate': ['ANR 速率'],
        'Foreground ANR Rate': ['前台 ANR 速率'],
        'Total Errors': ['总错误数'],
        'Total Transactions': ['总事务数'],
        'This project could not be found.': ['找不到此项目。'],
        'View All Issues': ['查看所有问题'],
        'Project %s': ['项目 %s'],
        'Search by release version, build, package, or stage': [
          '按版本、构建、包或阶段搜索',
        ],
        'Frequent Unhandled Issues': ['频繁未处理的问题'],
        'No [issuesType] issues for the [timePeriod].': [
          '在 [timePeriod] 内没有 [issuesType] 问题。',
        ],
        'Issue type': ['问题类型'],
        'Unable to load latest alerts': ['无法加载最新警报'],
        'No alerts found': ['未找到警报'],
        'Latest Alerts': ['最新警报'],
        'Metric Alert History': ['指标警报历史'],
        'No releases found': ['未找到版本'],
        'Latest Releases': ['最新版本'],
        'View Transactions': ['查看事务'],
        'Most Improved/Regressed Transactions': ['改进/退步最多的事务'],
        'Quick Links': ['快速链接'],
        'View Issues': ['查看问题'],
        ' This shows how it has changed since the last period.': [
          '这显示了自上一周期以来的变化。',
        ],
        'The number of releases for this project and how it has changed since the last period.':
          ['此项目的版本数量以及自上一周期以来的变化。'],
        'The number of releases for this project.': ['此项目的版本数量。'],
        'You do not have permission to do this': ['您没有权限执行此操作'],
        'Assign Team': ['分配团队'],
        'Show %s collapsed team': ['显示 %s 个折叠的团队'],
        'Show %s collapsed teams': ['显示 %s 个折叠的团队'],
        'Team Access': ['团队访问'],
        'Could not find an issue for the provided event id': [
          '无法找到提供的事件 ID 对应的问题',
        ],
        'Could not load the requested event': ['无法加载请求的事件'],
        'Not found': ['未找到'],
        'View full documentation': ['查看完整文档'],
        'Just want to poke around before getting too cozy with the SDK? [sample:View a sample event for this SDK] or [skip:finish setup later].':
          [
            '只想在熟悉 SDK 之前随便看看吗？[sample: 查看此 SDK 的示例事件] 或 [skip: 稍后完成设置]。',
          ],
        'View a sample event': ['查看示例事件'],
        'Finish setup later': ['稍后完成设置'],
        'Created project [project]': ['已创建项目 [project]'],
        'Created [project] under new team [team]': ['在新团队 [team] 下创建 [project]'],
        'Failed to create project [project]': ['创建项目 [project] 失败'],
        'Please select a platform in Step 1': ['请在步骤 1 中选择一个平台'],
        'Please select a team': ['请选择一个团队'],
        'Please fill out all the required fields': ['请填写所有必填字段'],
        'Please provide a project name': ['请输入项目名称'],
        'Please provide an alert threshold': ['请提供一个警报阈值'],
        'Create a new project in 3 steps': ['分 3 步创建一个新项目'],
        'Set up a separate project for each part of your application (for example, your API server and frontend client), to quickly pinpoint which part of your application errors are coming from. [link: Read the docs].':
          [
            '为应用程序的每个部分（例如，您的 API 服务器和前端客户端）设置一个单独的项目，以便快速定位错误来源。[link: 阅读文档]。',
          ],
        'Choose your platform': ['选择您的平台'],
        'occurrences of': ['... 的发生次数'],
        'When there are more than': ['当超过'],
        'a unique error in': ['... 中的一个唯一错误'],
        'Alert me on high priority issues': ['在高优先级问题上提醒我'],
        'Alert me on every new issue': ['在每个新问题上提醒我'],
        "I'll create my own alerts later": ['我稍后会自己创建提醒'],
        'Options for creating an alert': ['创建提醒的选项'],
        "We cannot provide instructions for '%s' projects. However, please find below the DSN key for this project, which is required to instrument Sentry.":
          [
            "我们无法提供 '%s' 项目的说明。但是，请参阅下面的 DSN 密钥，这是用于设置 Sentry 所必需的。",
          ],
        'dsn: %s': ['dsn: %s'],
        'Since it can be a lot of work creating a Sentry SDK from scratch, we suggest you review the following SDKs which are applicable for a wide variety of applications:':
          [
            '从头开始创建一个 Sentry SDK 可能会有很多工作，我们建议您查看以下适用于各种应用程序的 SDK：',
          ],
        "Also there's a rich ecosystem of [link:community suported SDKs] (including NestJS, Nuxt2, Perl, CFML and Clojure).":
          [
            '此外，还有丰富的 [link: 社区支持的 SDK]（包括 NestJS、Nuxt2、Perl、CFML 和 Clojure）。',
          ],
        'Your favorite language or framework still cannot be found? Then we encourage you to consider [link:writing your own SDK].':
          [
            '仍然找不到您喜欢的语言或框架吗？那么我们鼓励您考虑 [link: 编写您自己的 SDK]。',
          ],
        'Your selected platform supports performance, but your organization does not have performance enabled.':
          ['您选择的平台支持性能，但您的组织未启用性能。'],
        'Take me to Issues': ['带我去问题'],
        'Take me to Performance': ['带我去性能'],
        'Take me to Session Replay': ['带我去会话回放'],
        'Back to Platform Selection': ['返回平台选择'],
        'Configure %(platform)s SDK': ['配置 %(platform)s SDK'],
        'Add integration': ['添加集成'],
        'Track Deploys': ['跟踪部署'],
        "A high-level overview of errors, transactions, and deployments filtered by teams you're part of.":
          ['一个高级概述，显示错误、事务和部署，这些信息已根据您所属的团队进行筛选。'],
        'Search for projects by name': ['按名称搜索项目'],
        'An error occurred while fetching your projects': ['获取您的项目时发生错误'],
        'Errors: %s': ['错误： %s'],
        'Transactions: %s': ['事务： %s'],
        'Click here to learn more about performance monitoring': [
          '点击这里了解更多关于性能监控的信息',
        ],
        'Latest Deploys': ['最新部署'],
        'The Sentry Workflow': ['Sentry 工作流程'],
        'A visualization of your release adoption from the past 24 hours, providing a high-level view of the adoption stage, percentage of crash-free users and sessions, and more.':
          [
            '过去 24 小时内版本采用情况的可视化，提供采用阶段、无崩溃用户和会话的百分比等高级视图。',
          ],
        'Commits - Release %s': ['提交 - 版本 %s'],
        'There are no commits associated with this release in the %s repository.': [
          '在 %s 仓库中与此版本关联的提交不存在。',
        ],
        'Files Changed - Release %s': ['文件更改 - 版本 %s'],
        '%s file changed': ['%s 文件更改'],
        '%s files changed': ['%s 文件更改'],
        'There are no changed files associated with this release in the %s repository.': [
          '在 %s 仓库中与此版本关联的更改文件不存在。',
        ],
        'There are no changed files associated with this release.': [
          '与此版本关联的更改文件不存在。',
        ],
        'An error occurred while trying to fetch the repositories of the release: %s': [
          '尝试获取版本的仓库时发生错误： %s',
        ],
        'No commits associated with this release have been found.': [
          '未找到与此版本关联的提交。',
        ],
        'The repository you were looking for was not found.': ['找不到您要查找的仓库。'],
        Restore: ['恢复'],
        'Restore Release [release]': ['恢复版本 [release]'],
        'You are restoring this release for the following project:': [
          '您正在为以下项目恢复此版本：',
        ],
        'By restoring this release, you are also restoring it for the following projects:':
          ['通过恢复此版本，您也在为以下项目恢复它：'],
        'Archive Release [release]': ['存档版本 [release]'],
        'You are archiving this release for the following project:': [
          '您正在为以下项目存档此版本：',
        ],
        'By archiving this release, you are also archiving it for the following projects:':
          ['通过存档此版本，您也在为以下项目存档它：'],
        '%s other project': ['%s 其他项目'],
        '%s other projects': ['%s 其他项目'],
        'Are you sure you want to do this?': ['您确定要这样做吗？'],
        'Files Changed': ['文件更改'],
        'Release Details': ['版本详情'],
        'This release may not be in your selected project.': [
          '此版本可能不在您选择的项目中。',
        ],
        'This release could not be found.': ['找不到此版本。'],
        'Only projects with this release are visible.': ['只有具有此版本的项目可见。'],
        'Release %s': ['版本 %s'],
        'failure_count()': ['failure_count()'],
        'tpm()': ['tpm()'],
        'p50()': ['p50()'],
        'p75(lcp)': ['p75(lcp)'],
        'Clamped Release Period': ['限制版本周期'],
        'Entire Release Period': ['整个版本周期'],
        'In this release': ['在此版本中'],
        'Failing Transactions': ['失败的事务'],
        'Frequent Transactions': ['频繁的事务'],
        'Slow Transactions': ['慢事务'],
        'Slow LCP': ['慢 LCP'],
        'Trending Regressions': ['趋势退步'],
        'Trending Improvements': ['趋势改进'],
        'These releases have been archived.': ['这些版本已被存档。'],
        'This release has been archived.': ['此版本已被存档。'],
        'Restore this release': ['恢复此版本'],
        '([count] handled [issues])': ['([count] 已处理 [issues])'],
        '([count] unhandled [issues])': ['([count] 未处理 [issues])'],
        'Hide %s Other': ['隐藏 %s 其他'],
        'Hide %s Others': ['隐藏 %s 其他'],
        'Show %s Other': ['显示 %s 其他'],
        'Show %s Others': ['显示 %s 其他'],
        'Toggle additional charts': ['切换其他图表'],
        'Toggle chart group': ['切换图表组'],
        'Chart Title': ['图表标题'],
        'Chart Value': ['图表值'],
        'No new issues in this release.': ['此版本中没有新问题。'],
        'No new issues for the [timePeriod].': ['在 [timePeriod] 内没有新问题。'],
        'No unhandled issues in this release.': ['此版本中没有未处理的问题。'],
        'No unhandled issues for the [timePeriod].': [
          '在 [timePeriod] 内没有未处理的问题。',
        ],
        'No regressed issues in this release.': ['此版本中没有退步的问题。'],
        'No regressed issues for the [timePeriod].': [
          '在 [timePeriod] 内没有退步的问题。',
        ],
        'No resolved issues in this release.': ['此版本中没有已解决的问题。'],
        'No issues in this release': ['此版本中没有问题'],
        'No issues for the [timePeriod].': ['在 [timePeriod] 内没有问题。'],
        'Commit Author Breakdown': ['提交作者分解'],
        'Show %s other author': ['显示 %s 其他作者'],
        'Show %s other authors': ['显示 %s 其他作者'],
        '%s commit': ['%s 提交'],
        '%s commits': ['%s 提交'],
        'Other Project for This Release': ['此版本的其他项目'],
        'Other Projects for This Release': ['此版本的其他项目'],
        'Show %s collapsed project': ['显示 %s 个折叠的项目'],
        'Show %s collapsed projects': ['显示 %s 个折叠的项目'],
        'Project Release Details': ['项目版本详情'],
        Semver: ['Semver'],
        artifact: ['构件'],
        artifacts: ['构件'],
        'Adoption Stage': ['采用阶段'],
        'See if a release has low adoption, been adopted by users, or replaced by another release. Select an environment above to view the stage this release is in.':
          [
            '查看版本是否采用率低、已被用户采用或被其他版本取代。选择上面的环境以查看此版本所处的阶段。',
          ],
        'in [environment]': ['在 [environment] 中'],
        'Sessions Adopted': ['已采用的会话'],
        'Adoption compares the sessions of a release with the total sessions for this project.':
          ['采用率将版本的会话与该项目的总会话进行比较。'],
        'Users Adopted': ['已采用的用户'],
        'Adoption compares the users of a release with the total users for this project.':
          ['采用率将版本的用户与该项目的总用户进行比较。'],
        'Date Deployed': ['部署日期'],
        'Last Deploy': ['上次部署'],
        'Release created': ['版本创建'],
        later: ['之后'],
        'Total Crash Free Users': ['总无崩溃用户'],
        Healthy: ['健康'],
        Abnormal: ['异常'],
        Errored: ['出错'],
        'Crashed Session Rate': ['崩溃会话率'],
        'Crashed User Rate': ['崩溃用户率'],
        'Session Count': ['会话数'],
        'User Count': ['用户数'],
        'Healthy Session Rate': ['健康会话率'],
        'Abnormal Session Rate': ['异常会话率'],
        'Errored Session Rate': ['出错会话率'],
        'Healthy User Rate': ['健康用户率'],
        'Abnormal User Rate': ['异常用户率'],
        'Errored User Rate': ['出错用户率'],
        'The number of sessions in a given period.': ['指定期间的会话数。'],
        'The number of users in a given period.': ['指定期间的用户数。'],
        'Release Created': ['版本创建'],
        Adopted: ['已采用'],
        Replaced: ['已替换'],
        'time range': ['时间范围'],
        'There are no releases that match': ['没有匹配的版本'],
        'There are no releases with active user data (users in the last 24 hours).': [
          '没有具有活跃用户数据的版本（过去 24 小时内的用户）。',
        ],
        'There are no releases with active session data (sessions in the last 24 hours).':
          ['没有具有活跃会话数据的版本（过去 24 小时内的会话）。'],
        'There are no releases with semantic versioning.': ['没有使用语义化版本的版本。'],
        'There are no releases with data in the': ['没有在此处的版本'],
        'There are no archived releases.': ['没有已存档的版本。'],
        'To track user adoption, crash rates, session data and more, add Release Health to your current setup.':
          [
            '要跟踪用户采用率、崩溃率、会话数据等，请将版本健康状况添加到您的当前设置中。',
          ],
        'Add Release Health': ['添加版本健康状况'],
        'Changing this date range will recalculate the release metrics.': [
          '更改此日期范围将重新计算版本指标。',
        ],
        'Search by version, build, package, or stage': ['按版本、构建、包或阶段搜索'],
        Adoption: ['采用率'],
        'Crash Free Rate': ['无崩溃率'],
        'Show [numberOfHiddenItems] More': ['显示 [numberOfHiddenItems] 更多'],
        '[number:1] hidden project': ['[number:1] 个隐藏项目'],
        '[number] hidden projects': ['[number] 个隐藏项目'],
        'and %s more': ['和 %s 更多'],
        by: ['由'],
        '%s author': ['%s 作者'],
        '%s authors': ['%s 作者'],
        'Release Adoption': ['版本采用率'],
        '%s Other': ['%s 其他'],
        '%s Others': ['%s 其他'],
        'Total [display]': ['总计 [display]'],
        'Set up Releases': ['设置版本'],
        'Find which release caused an issue, apply source maps, and get notified about your deploys.':
          ['查找导致问题的版本，应用源映射，并获取有关您的部署的通知。'],
        'Add the following commands to your CI config when you deploy your application.':
          ['在部署应用程序时，将以下命令添加到您的 CI 配置中。'],
        'Available Integrations': ['可用集成'],
        'Select Internal Integration': ['选择内部集成'],
        'You must be an organization owner, manager or admin to create an integration.': [
          '您必须是组织的所有者、经理或管理员才能创建集成。',
        ],
        'Create New Integration': ['创建新集成'],
        'Sentry suggests which commit caused an issue and who is likely responsible so you can triage.':
          ['Sentry 建议哪个提交导致了问题以及可能的责任人，以便您进行分类处理。'],
        'Get an overview of the commits in each release, and which issues were introduced or fixed.':
          ['获取每个版本中提交的概览，以及引入或修复了哪些问题。'],
        'Easily Resolve': ['轻松解决'],
        'Automatically resolve issues by including the issue number in your commit message.':
          ['通过在提交消息中包含问题编号自动解决问题。'],
      };
      var trans10 = {
        'Receive email notifications about when your code gets deployed. This can be customized in settings.':
          ['接收有关代码部署时间的电子邮件通知。可以在设置中自定义。'],
        'Total Project': ['项目总计'],
        'Active Users': ['活跃用户'],
        'Active Sessions': ['活跃会话'],
        'Build Number': ['构建编号'],
        'Semantic Version': ['语义版本'],
        'Date Adopted': ['采用日期'],
        'Select one environment to use this sort option.': [
          '选择一个环境以使用此排序选项。',
        ],
        'Low Adoption': ['低采用率'],
        'This release has a low percentage of sessions compared to other releases in this project. [link:Learn more]':
          ['与该项目中的其他版本相比，此版本的会话占比很低。[link:了解更多]'],
        'This release has a high percentage of sessions compared to other releases in this project. [link:Learn more]':
          ['与该项目中的其他版本相比，此版本的会话占比很高。[link:了解更多]'],
        'This release was previously Adopted, but now has a lower level of sessions compared to other releases in this project. [link:Learn more]':
          ['此版本之前已被采用，但现在与其他版本相比会话水平较低。[link:了解更多]'],
        'During the session an unhandled global error/promise rejection occurred.': [
          '在会话期间发生了一个未处理的全局错误/承诺拒绝。',
        ],
        'Non applicable for Javascript.': ['对 JavaScript 不适用。'],
        'No errors were captured during session life-time.': [
          '在会话期间没有捕获到任何错误。',
        ],
        'During the session at least one handled error occurred.': [
          '在会话期间至少发生了一个已处理的错误。',
        ],
        'The application had an unrecoverable error (a panic)': [
          '应用程序发生了一个不可恢复的错误（恐慌）',
        ],
        'Number of users who experienced an unhandled error': [
          '经历未处理错误的用户数量',
        ],
        'An unknown session exit': ['未知的会话退出'],
        'Percentage of unique users that experienced an App Not Responding (ANR) error': [
          '经历应用无响应（ANR）错误的独立用户百分比',
        ],
        'Percentage of unique users that experienced an App Not Responding (ANR) error when the app was running in the foreground':
          ['当应用在前台运行时经历应用无响应（ANR）错误的独立用户百分比'],
        Crashed: ['崩溃'],
        'Other Crashed': ['其他崩溃'],
        'Other Abnormal': ['其他异常'],
        'Other Errored': ['其他错误'],
        'Other Healthy': ['其他正常'],
        'Other Crash Free Users': ['其他无崩溃用户'],
        'Other Crash Free Sessions': ['其他无崩溃会话'],
        'Other Releases': ['其他版本'],
        'Number of sessions with a crashed state': ['处于崩溃状态的会话数量'],
        'Percentage of sessions/users who did not experience a crash.': [
          '未经历崩溃的会话/用户百分比。',
        ],
        'Percentage of unique users with non-crashed sessions': [
          '非崩溃会话的独立用户百分比',
        ],
        'Percentage of non-crashed sessions': ['非崩溃会话的百分比'],
        'The percentage of crash free sessions.': ['无崩溃会话的百分比。'],
        'Adoption compares the sessions or users of a release with the total sessions or users for this project in the last 24 hours.':
          [
            '采用率将版本的会话或用户数量与该项目在过去 24 小时内的总会话或用户数量进行比较。',
          ],
        'The process was terminated due to an unhandled exception or a request to the server that ended with an error':
          ['由于未处理的异常或对服务器的请求以错误结束，进程被终止'],
        'An unknown session exit. Like due to loss of power or killed by the operating system':
          ['未知的会话退出。例如由于断电或被操作系统终止'],
        'A session without errors': ['无错误的会话'],
        'A session with errors': ['有错误的会话'],
        'Not handled by user code': ['未被用户代码处理'],
        'The application crashed with a hard crash (eg. segfault)': [
          '应用程序发生严重崩溃（例如段错误）',
        ],
        'The application did not properly end the session, for example, due to force-quit':
          ['应用程序未正确结束会话，例如由于强制退出'],
        'The application exited normally and did not observe any errors': [
          '应用程序正常退出且未发现任何错误',
        ],
        'The application exited normally but observed error events while running': [
          '应用程序正常退出但在运行期间观察到错误事件',
        ],
        'The application crashed with a hard crash': ['应用程序发生严重崩溃'],
        'A request that resulted in an unhandled exception and hence a Server Error response':
          ['导致未处理异常并因此产生服务器错误响应的请求'],
        'An unhandled exception that resulted in the application crashing': [
          '导致应用程序崩溃的未处理异常',
        ],
        'An error that resulted in the application crashing': ['导致应用程序崩溃的错误'],
        'Create an encrypted backup of your current self-hosted instance': [
          '创建当前自托管实例的加密备份',
        ],
        'You’ll need to have the public key saved in the previous step accessible when you run the following command in your terminal. Make sure your current working directory is the root of your ':
          [
            '在终端中运行以下命令时，需要能够访问上一步保存的公钥。确保你的当前工作目录是你的 根目录。',
          ],
        'install when you execute it.': ['安装时执行。'],
        'Understanding the command:': ['理解命令：'],
        'The ': [''],
        'environment variable maps the local directory where you saved your public key in the previous step to a ':
          ['环境变量将你在上一步保存公钥的本地目录映射到一个 '],
        'volume in your Docker container. ': ['Docker 容器中的 卷。'],
        'is a script included by default with your ': ['脚本默认包含在你的 '],
        'installation which contains a number of administrative tools. One of these is the':
          ['安装中，其中包含许多管理工具。其中之一是 '],
        'command for backing up all Sentry data. ': ['命令，用于备份所有 Sentry 数据。'],
        'encrypts the data using our public key, and ': ['使用我们的公钥加密数据，并 '],
        "is the name of the output tarball. This is what you'll upload in the next step.":
          ['是输出 tarball 的名称。这就是你将在下一步上传的内容。'],
        'Note: Depending on your system configuration, you may need to use ': [
          '注意：根据你的系统配置，你可能需要使用 ',
        ],
        'for this command.': ['来执行此命令。'],
        'Promo Code': ['促销代码'],
        promocode: ['促销码'],
        'That promotional code has already been claimed, does not have enough remaining uses, is no longer valid, or never existed.':
          ['该促销代码已被兑换、剩余使用次数不足、已失效或从未存在过。'],
        'Basic information needed to get started': ['开始所需的的基本信息'],
        'In order to best facilitate the process some basic information will be required to ensure success with the relocation process of you self-hosted instance':
          ['为了最好地促进该过程，将需要一些基本信息以确保你的自托管实例的迁移过程成功'],
        'Organization slugs being relocated': ['正在迁移的组织简短标识'],
        'org-slugs': ['组织简短标识'],
        'Choose a datacenter location': ['选择数据中心位置'],
        region: ['地区'],
        'This is an important decision and cannot be changed.': [
          '这是一个重要的决定，无法更改。',
        ],
        "Choose where to store your organization's data. Please note, you won't be able to change locations once your relocation has been initiated. ":
          ['选择存储组织数据的位置。请注意，一旦你的迁移开始，将无法更改位置。'],
        'Your relocation is under way!': ['你的迁移正在进行中！'],
        "Save Sentry's public key to your machine": ['将 Sentry 的公钥保存到你的计算机'],
        "To do so, you'll need to save the following public key to a file accessible from wherever your self-hosted repository is currently installed. You'll need to have this public key file available for the next step.":
          [
            '为此，你需要将以下公钥保存到一个文件中，该文件可以从你当前安装自托管仓库的位置访问。下一步将需要这个公钥文件。',
          ],
        'Failed to load information from server - check your connection?': [
          '从服务器加载信息失败 - 检查你的连接？',
        ],
        'Encrypt backup': ['加密备份'],
        'Upload backup': ['上传备份'],
        'Your relocation is in progress': ['你的迁移正在进行中'],
        'Upload Tarball to begin the relocation process': ['上传 tarball 以开始迁移过程'],
        "Nearly done! Just upload your tarball here, and we'll send you an email when everything is ready to go!":
          [
            '几乎完成！只需将你的 tarball 上传到这里，我们将在一切准备就绪时给你发送电子邮件！',
          ],
        'Remove file': ['删除文件'],
        'Start Relocation': ['开始迁移'],
        dropzone: ['放置区'],
        'Drag and Drop file here or': ['将文件拖放到这里或'],
        'Choose file': ['选择文件'],
        'file-upload': ['文件上传'],
        'An error has occurred while trying to start relocation job. Please contact support for further assistance.':
          ['在尝试启动迁移作业时发生了错误。请联系支持团队以获取进一步帮助。'],
        'You already have an in-progress relocation job.': [
          '你已经有一个正在进行中的迁移作业。',
        ],
        'We have reached the daily limit of relocations - please try again tomorrow, or contact support.':
          ['我们已达到每天的迁移限制，请明天再试，或联系支持团队。'],
        "Your relocation has started - we'll email you with updates as soon as we have 'em!":
          ['你的迁移已开始，我们一旦有更新就会给你发送电子邮件！'],
        'Top Selectors with Dead Clicks': ['死点击最多的顶级选择器'],
        'Top Selectors with Dead and Rage Clicks': ['死点击和愤怒点击最多的顶级选择器'],
        'See the top selectors your users have dead and rage clicked on.': [
          '查看用户死点击和愤怒点击最多的选择器。',
        ],
        'Most Dead Clicks': ['最多的死点击'],
        'The top selectors your users have dead clicked on (i.e., a user click that does not result in any page activity after 7 seconds).':
          ['用户死点击最多的选择器（即，用户点击后 7 秒内没有任何页面活动）。'],
        'Suggested replays to watch': ['建议观看的回放'],
        'Most Rage Clicks': ['最多的愤怒点击'],
        'The top selectors your users have rage clicked on (i.e., 5 or more clicks on a dead element, which exhibits no page activity after 7 seconds).':
          [
            '用户愤怒点击最多的选择器（即，对一个死元素进行 5 次或更多点击，且 7 秒内没有任何页面活动）。',
          ],
        'There were no [type] clicks within this timeframe. Expand your timeframe, or increase your replay sample rate to see more data.':
          [
            '在此时间段内没有 [type] 点击。扩展你的时间范围，或增加回放采样率以查看更多数据。',
          ],
        'See all selectors': ['查看所有选择器'],
        'No replays found': ['未找到回放'],
        'No dead or rage clicks found': ['未找到死点击或愤怒点击'],
        'There were no dead or rage clicks within this timeframe. Expand your timeframe, or increase your replay sample rate to see more data.':
          [
            '在此时间段内没有死点击或愤怒点击。扩展你的时间范围，或增加回放采样率以查看更多数据。',
          ],
        'Search for replays with clicks on the element': ['搜索对元素的点击回放'],
        'Impact Level': ['影响级别'],
        'Search Accessibility Issues': ['搜索无障碍问题'],
        Element: ['元素'],
        'Results as of [lastRuntime]': ['截至 [lastRuntime] 的结果'],
        'See in replay': ['在回放中查看'],
        'Pause and run validation for [now]': ['暂停并为 [now] 运行验证'],
        'Run validation for [now]': ['为 [now] 运行验证'],
        'toggle section': ['切换部分'],
        'DOM Element': ['DOM 元素'],
        Impact: ['影响'],
        'Missing details': ['缺少详情'],
        'No accessibility problems detected': ['未检测到无障碍问题'],
        'Search Breadcrumb Events': ['搜索面包屑事件'],
        'No breadcrumbs recorded': ['未记录面包屑'],
        'Log Level': ['日志级别'],
        'Search Console Logs': ['搜索控制台日志'],
        'No console logs recorded': ['未记录控制台日志'],
        'Search Errors': ['搜索错误'],
        'No errors! Go make some.': ['没有错误！去制造一些吧。'],
        'Data is still loading': ['数据仍在加载中'],
        Console: ['控制台'],
        'What is accessibility?': ['什么是无障碍？'],
        Accessibility: ['无障碍'],
        'Total DOM nodes': ['DOM 节点总数'],
        'DOM Nodes added': ['添加的 DOM 节点'],
        'DOM Nodes removed': ['移除的 DOM 节点'],
        'Hover player time': ['悬停播放时间'],
        'Current player time': ['当前播放时间'],
        'Date: %s': ['日期：%s'],
        'Time within replay: %s': ['回放内的时间：%s'],
        'No memory metrics found': ['未找到内存指标'],
        'Memory metrics are only captured within Chromium based browser sessions.': [
          '内存指标仅在基于 Chromium 的浏览器会话中捕获。',
        ],
        'Heap Size': ['堆大小'],
        'DOM Nodes': ['DOM 节点'],
        'Used Heap Memory': ['已用堆内存'],
        'Truncated (~~) due to exceeding 150k characters': [
          '因超过 150k 字符而截断（~~）',
        ],
        'Invalid JSON': ['无效的 JSON'],
        'It is possible the network transfer size is smaller due to compression.': [
          '由于压缩，网络传输大小可能更小。',
        ],
        'Capture Request and Response Headers and Bodies': ['捕获请求和响应的标头和正文'],
        'Capture Request and Response Headers': ['捕获请求和响应的标头'],
        'Capture Request and Response Bodies': ['捕获请求和响应的正文'],
        'To protect user privacy, Session Replay defaults to not capturing the request or response headers. However, we provide the option to do so, if it’s critical to your debugging process. [link].':
          [
            '为了保护用户隐私，会话回放默认不捕获请求或响应标头。但是，如果你的调试过程需要，我们提供了这样做的选项。[链接]。',
          ],
        'Add the following to your [field] list to start capturing data: [alert] ': [
          '将以下内容添加到你的 [field] 列表中以开始捕获数据：[警告] ',
        ],
        'Enable [field] to capture both Request and Response bodies.': [
          '启用 [field] 以捕获请求和响应正文。',
        ],
        Prerequisites: ['先决条件'],
        'Update your SDK version to >= [minVersion]': [
          '将你的 SDK 版本更新到 >= [minVersion]',
        ],
        'Edit the Replay integration configuration to allow this URL.': [
          '编辑回放集成配置以允许此 URL。',
        ],
        'That’s it!': ['就这些！'],
        'This feature is only compatible with [fetch] and [xhr] request types. [link].': [
          '此功能仅与 [fetch] 和 [xhr] 请求类型兼容。[链接]。',
        ],
        'You can capture additional headers by adding them to the [requestConfig] and [responseConfig] lists in your SDK config.':
          [
            '你可以在 SDK 配置的 [requestConfig] 和 [responseConfig] 列表中添加更多标头以捕获它们。',
          ],
        'The content-type of the request does not match the response.': [
          '请求的内容类型与响应不匹配。',
        ],
        'Response Headers': ['响应标头'],
        'Headers not captured': ['未捕获的标头'],
        'Query String Parameters': ['查询字符串参数'],
        'Request Body': ['请求正文'],
        'Size:': ['大小：'],
        'Request body not found.': ['未找到请求正文。'],
        'Response Body': ['响应正文'],
        'Response body not found.': ['未找到响应正文。'],
        'Request Body Size': ['请求正文大小'],
        'Response Body Size': ['响应正文大小'],
        'Missing request details': ['缺少请求详情'],
        'Request Headers': ['请求标头'],
        'No network requests recorded': ['未记录网络请求'],
        'Search Network Requests': ['搜索网络请求'],
        'If the status is [zero], the resource might be a cross-origin request.[linebreak][linebreak]Configure the server to respond with the CORS header [header] to see the actual response codes. [mozilla].':
          [
            '如果状态是 [zero]，该资源可能是一个跨源请求。[换行][换行]配置服务器以使用 CORS 标头 [header] 响应，以查看实际的响应代码。[mozilla]。',
          ],
        'The number used for fetch/xhr is the response body size. It is possible the network transfer size is smaller due to compression.':
          ['用于 fetch/xhr 的数字是响应正文大小。由于压缩，网络传输大小可能更小。'],
        'Clear filters': ['清除过滤器'],
        'No tags for this replay were found.': ['未找到此回放的标签。'],
        'Performance Monitoring': ['性能监控'],
        'Requires performance monitoring.': ['需要性能监控。'],
        'Unable to retrieve traces': ['无法检索追踪'],
        'No traces found': ['未找到追踪'],
        'This replay has been deleted.': ['此回放已被删除。'],
        'The replay is still processing': ['回放仍在处理中'],
        'The replay has been deleted by a member in your organization': [
          '回放已被组织中的成员删除',
        ],
        'There is an internal systems error': ['存在内部系统错误'],
        'There was an error while fetching this Replay': ['获取此回放时出错'],
        'This could be due to these reasons:': ['这可能是由于以下原因：'],
        'A view of available video-like reproductions of user sessions so you can visualize repro steps to debug issues faster.':
          [
            '提供用户会话的视频样回放视图，以便你可以直观地看到重现步骤，从而更快地调试问题。',
          ],
        'Hide Widgets': ['隐藏小部件'],
        'Show Widgets': ['显示小部件'],
        'Can I use Session Replay with my app?': ['我可以在我的应用中使用会话回放吗？'],
        'Session Replay supports all browser-based applications and certain native mobile platforms, such as Android, iOS, and React Native. Our mobile SDKs are currently in beta. Features are still in progress and may have some bugs. We recognize the irony.':
          [
            '会话回放支持所有基于浏览器的应用程序和某些原生移动平台，如 Android、iOS 和 React Native。我们的移动 SDK 目前处于测试阶段。功能仍在开发中，可能有一些错误。我们意识到这种讽刺。',
          ],
        'For browser-based applications, this includes static websites, single-page applications, and also server-side rendered applications. The only prerequisite is that your application uses Sentry JavaScript SDK (version 7.2.0 or greater) either with NPM/Yarn or with our JS Loader script.':
          [
            '对于基于浏览器的应用程序，这包括静态网站、单页应用程序以及服务器端渲染的应用程序。唯一的先决条件是你的应用程序使用了 Sentry JavaScript SDK（版本 7.2.0 或更高），可以通过 NPM/Yarn 或我们的 JS 加载器脚本使用。',
          ],
        'To learn more about which SDKs we support, please visit [link:our docs].': [
          '要了解更多关于我们支持的 SDK，请访问 [链接：我们的文档]。',
        ],
        'What’s the performance overhead?': ['性能开销是多少？'],
        'Session Replay adds a small amount of performance overhead to your web or mobile application. For most applications, the performance overhead of our client SDK will be imperceptible to end-users. For example, the Sentry site has Replay enabled and we have not seen any significant slowdowns.':
          [
            '会话回放会为你的 web 或移动应用增加少量性能开销。对于大多数应用，我们的客户端 SDK 的性能开销对于最终用户来说是难以察觉的。例如，Sentry 网站已启用回放，我们没有看到任何明显的 slowdowns。',
          ],
        'For web, the performance overhead generally scales linearly with the DOM complexity of your application. The more DOM state changes that occur in the application lifecycle, the more events that are captured, transmitted, etc.':
          [
            '对于 web，性能开销通常与你的应用的 DOM 复杂性成线性增长。在应用生命周期中发生的 DOM 状态变化越多，捕获、传输等的事件就越多。',
          ],
        'With early customers of Mobile Replay, the overhead was not noticeable by end-users, but depending on your application complexity, you may discover the recording overhead may negatively impact your mobile application performance. If you do, please let us know on GitHub: [android:Android], [ios:iOS], and [rn:React Native].':
          [
            '对于 Mobile Replay 的早期客户，开销对于最终用户来说并不明显，但根据你的应用复杂性，你可能会发现录制开销可能会对你的移动应用性能产生负面影响。如果你发现了，請在 GitHub 上告诉我们：[android:Android]、[ios:iOS] 和 [rn:React Native]。',
          ],
        'To learn more about how we’ve optimized our SDK, please visit [link:our docs].':
          ['要了解更多关于我们如何优化 SDK，请访问 [链接：我们的文档]。'],
        'How do you protect user data?': ['你们如何保护用户数据？'],
        'We offer a range of privacy controls to let developers ensure that no sensitive user information leaves the browser. By default, our privacy configuration is very aggressive and masks all text and images, but you can choose to just mask user input text, for example.':
          [
            '我们提供了一系列隐私控制，让开发者确保没有敏感用户信息离开浏览器。默认情况下，我们的隐私配置非常严格，会掩盖所有文本和图像，但你可以选择只掩盖用户输入文本，例如。',
          ],
        'To learn more about how we protect user privacy, please visit [link:our docs].':
          ['要了解更多关于我们如何保护用户隐私，请访问 [链接：我们的文档]。'],
        'Select a supported project from the projects dropdown.': [
          '从项目下拉列表中选择一个支持的项目。',
        ],
        'Set Up Replays': ['设置回放'],
        'Get to the root cause faster': ['更快找到根本原因'],
        'See a video-like reproduction of your user sessions so you can see what happened before, during, and after an error or latency issue occurred.':
          [
            '查看用户会话的视频样回放，以便你可以看到错误或延迟问题发生之前、期间和之后发生了什么。',
          ],
        FAQ: ['常见问题'],
        'See a [link:full list of FAQs].': ['查看 [链接：常见问题完整列表]。'],
        'Search for users, duration, clicked elements, count_errors, and more': [
          '搜索用户、时长、点击元素、错误计数等',
        ],
        'Search by click selector. (Requires SDK version >= 7.44.0)': [
          '按点击选择器搜索。（需要 SDK 版本 >= 7.44.0）',
        ],
        'Unindexed search field': ['未索引的搜索字段'],
        'Field [field] requires an [sdkPrompt]': ['字段 [field] 需要 [sdkPrompt]'],
        'SDK version >= 7.44.0': ['SDK 版本 >= 7.44.0'],
        'Activity represents how much user activity happened in a replay. It is determined by the number of errors encountered, duration, and UI events.':
          ['活动表示回放中发生的用户活动量。它由遇到的错误数量、时长和 UI 事件决定。'],
        'Dead clicks': ['死点击'],
        'A dead click is a user click that does not result in any page activity after 7 seconds. Requires SDK version >= [minSDK]. [link:Learn more.]':
          [
            '死点击是指用户点击后 7 秒内没有任何页面活动。需要 SDK 版本 >= [minSDK]。[链接：了解更多。]',
          ],
        'Rage clicks': ['愤怒点击'],
        'A rage click is 5 or more clicks on a dead element, which exhibits no page activity after 7 seconds. Requires SDK version >= [minSDK]. [link:Learn more.]':
          [
            '愤怒点击是指对一个死元素进行 5 次或更多点击，且 7 秒内没有任何页面活动。需要 SDK 版本 >= [minSDK]。[链接：了解更多。]',
          ],
        'Slowest Transaction': ['最慢的事务'],
        'Slowest single instance of this transaction captured by this session.': [
          '此会话捕获的此事务的最慢单个实例。',
        ],
        'Sorry, the list of replays could not be loaded. This could be due to invalid search parameters or an internal systems error.':
          ['抱歉，无法加载回放列表。这可能是由于无效的搜索参数或内部系统错误。'],
        '[type] version: [version]': ['[type] 版本：[version]'],
        'Deleted Replay': ['已删除的回放'],
        '[type] name: [name]': ['[type] 名称：[name]'],
        Selectors: ['选择器'],
        "If you're daring, you may want to try the following:": [
          '如果你很大胆，你可以尝试以下内容：',
        ],
        "We detected something AdBlock-like. Try disabling it, as it's known to cause issues.":
          ['我们检测到类似 AdBlock 的东西。尝试禁用它，因为它已知会引起问题。'],
        'Give it a few seconds and [link:reload the page].': [
          '等几秒钟然后 [链接：重新加载页面]。',
        ],
        'If all else fails, [link:contact us] with more details.': [
          '如果所有方法都失败，请 [链接：联系我们] 并提供详细信息。',
        ],
        'Oops! Something went wrong': ['哎呀！出错了'],
        "\n          It looks like you've hit an issue in our client application. Don't worry though!\n          We use Sentry to monitor Sentry and it's likely we're already looking into this!\n          ":
          [
            '\n          看起来你在我们的客户端应用中遇到了问题。不过别担心！\n          我们使用 Sentry 监控 Sentry，很可能我们已经在调查这个问题了！\n          ',
          ],
        'You do not have permission to install integrations in\n        [organization]. Ask an organization owner or manager to\n        visit this page to finish installing this integration.':
          [
            '你没有权限在\n        [organization] 中安装集成。请让组织所有者或管理员\n        访问此页面以完成集成安装。',
          ],
        'Integration [sentryAppName] already installed for [organization]': [
          '集成 [sentryAppName] 已为 [organization] 安装',
        ],
        'Integration [sentryAppName] is an unpublished integration for [otherOrg]. An unpublished integration can only be installed on the organization which created it.':
          [
            '集成 [sentryAppName] 是为 [otherOrg] 创建的未发布集成。未发布的集成只能安装在创建它的组织上。',
          ],
        'You are installing [sentryAppName] for organization [organization]': [
          '你正在为组织 [organization] 安装 [sentryAppName]',
        ],
        'Please pick a specific [organization:organization] to install [sentryAppName]': [
          '请选择一个特定的 [organization:organization] 来安装 [sentryAppName]',
        ],
        'This will permanently remove all associated data for your user. Any specified organizations will also be deleted.':
          ['这将永久删除你用户的所有相关数据。任何指定的组织也将被删除。'],
        'Delete the following organizations': ['删除以下组织'],
        'ORGANIZATIONS WITH CHECKED BOXES WILL BE DELETED!': [
          '选中复选框的组织将被删除！',
        ],
        'Ownership will remain with other organization owners if an organization is not deleted.':
          ['如果组织未被删除，所有权将保留在其他组织所有者手中。'],
        "Boxes which can't be unchecked mean that you are the only organization owner and the organization will be deleted.":
          ['无法取消选中的复选框表示你是唯一的组织所有者，组织将被删除。'],
        'User ID': ['用户 ID'],
        'Remove email': ['移除电子邮件'],
        'Application Identities': ['应用程序身份'],
        'There are no application identities associated with your Sentry account': [
          '没有与你的 Sentry 账户关联的应用程序身份',
        ],
        'Organization Identities': ['组织身份'],
        'There are no organization identities associated with your Sentry account': [
          '没有与你的 Sentry 账户关联的组织身份',
        ],
        Legacy: ['传统'],
        'Disconnect Your [provider] Identity?': ['断开你的 [provider] 身份？'],
        'After disconnecting, you will need to use a password or another identity to sign in.':
          ['断开连接后，你需要使用密码或其他身份登录。'],
        'You need this identity to sign into your account. If you want to disconnect it, set a password first.':
          ['你需要这个身份登录你的账户。如果你想断开它，请先设置密码。'],
        'You need this identity to access your organization.': [
          '你需要这个身份访问你的组织。',
        ],
        'Spend Notifications': ['支出通知'],
        'Control the notifications you receive for organization spend.': [
          '控制你接收的组织支出通知。',
        ],
        'Device was renamed': ['设备已重命名'],
        'Error renaming the device': ['重命名设备出错'],
        Authenticator: ['认证器'],
        'Verifying OTP...': ['正在验证 OTP...'],
        'Authentication Method Inactive': ['身份验证方法已停用'],
        'Authentication Method Active': ['身份验证方法已启用'],
        'Enrollment QR Code': ['注册 QR 码'],
        'Authenticator secret': ['认证器密钥'],
        'You have been invited to an organization that requires [link:two-factor authentication]. Setup two-factor authentication below to join your organization.':
          [
            '你已被邀请到一个需要 [链接：双因素认证] 的组织。在下方设置双因素认证以加入你的组织。',
          ],
        'Rename Device': ['重命名设备'],
        'Are you sure you want to remove the U2F device "%s"?': [
          '你确定要移除 U2F 设备 "%s" 吗？',
        ],
        'Two-factor authentication is required for organization(s): %s.': [
          '组织（%s）需要双因素认证。',
        ],
        'There was a problem closing all sessions': ['关闭所有会话时出现问题'],
        '[email] on [date]': ['[email] 在 [date]'],
        'Not currently subscribed': ['目前未订阅'],
        'We’re applying GDPR consent and privacy policies to all Sentry\n              contacts, regardless of location. You’ll be able to manage your\n              subscriptions here and from an Unsubscribe link in the footer of\n              all marketing emails.':
          [
            '我们正在将 GDPR 同意和隐私政策应用于所有 Sentry\n              联系人，无论其位置如何。你将能够在此处管理你的\n              订阅，也可以通过所有营销电子邮件底部的退订链接进行管理。',
          ],
        'Please contact [email:learn@sentry.io] with any questions or suggestions.': [
          '请通过 [电子邮件：learn@sentry.io] 提出任何问题或建议。',
        ],
        'Sentry is committed to respecting your inbox. Our goal is to\n              provide useful content and resources that make fixing errors less\n              painful. Enjoyable even.':
          [
            'Sentry 致力于尊重你的收件箱。我们的目标是提供有用的内容和资源，使修复错误变得不那么痛苦。甚至令人愉快。',
          ],
        'As part of our compliance with the EU’s General Data Protection\n              Regulation (GDPR), starting on 25 May 2018, we’ll only email you\n              according to the marketing categories to which you’ve explicitly\n              opted-in.':
          [
            '作为我们遵守欧盟通用数据保护条例（GDPR）的一部分，从 2018 年 5 月 25 日开始，我们只会根据你明确选择加入的营销类别向你发送电子邮件。',
          ],
        'Subscriptions for %s': ['%s 的订阅'],
        'Your new Client Secret': ['你的新客户端密钥'],
        'This will be the only time your client secret is visible!': [
          '这将是你唯一能看到你的客户端密钥的机会！',
        ],
        'new-client-secret': ['新客户端密钥'],
        'Error rotating secret': ['轮换密钥出错'],
        hidden: ['隐藏'],
        'Are you sure you want to rotate the client secret? The current one will not be usable anymore, and this cannot be undone.':
          ['你确定要轮换客户端密钥吗？当前密钥将不再可用，且此操作无法撤销。'],
        'Create User Auth Token': ['创建用户认证令牌'],
        'Create New User Auth Token': ['创建新的用户认证令牌'],
        'A name to help you identify this token.': ['一个帮助你识别此令牌的名称。'],
        'User Auth Token Details': ['用户认证令牌详情'],
        'Failed to load user auth token.': ['加载用户认证令牌失败。'],
        'Updated user auth token.': ['已更新用户认证令牌。'],
        'Failed to update the user auth token.': ['更新用户认证令牌失败。'],
        'You can only view the token once after creation.': [
          '你只能在创建后查看一次令牌。',
        ],
        'You cannot change the scopes of an existing token.': [
          '你无法更改现有令牌的范围。',
        ],
        'Are you sure you want to revoke %s token? It will not be usable anymore, and this cannot be undone.':
          ['你确定要撤销 %s 令牌吗？它将不再可用，且此操作无法撤销。'],
        'Token preview': ['令牌预览'],
        'WARNING! This is permanent and cannot be undone, are you really sure you want to do this?':
          ['警告！这是永久的且无法撤销，你真的确定要这样做吗？'],
        'Change Sentry marketing subscriptions you are subscribed to (GDPR)': [
          '更改你订阅的 Sentry 营销订阅（GDPR）',
        ],
        'Turning this off will irreversibly overwrite all of your fine-tuning settings to "off".':
          ['关闭此选项将不可逆地将所有你的微调设置重写为“关闭”。'],
        'Issue Alert Notifications': ['问题警报通知'],
        "Notifications from Alert Rules that your team has setup. You'll always receive notifications from Alerts configured to be sent directly to you.":
          [
            '来自你的团队设置的警报规则的通知。你将始终收到来自配置为直接发送给你的警报的通知。',
          ],
        Nudges: ['提示'],
        'Notifications that require review or approval.': ['需要审核或批准的通知。'],
        'Quota Notifications': ['配额通知'],
        'Control the notifications you receive for error, transaction, and attachment quota limits.':
          ['控制你接收的错误、事务和附件配额限制通知。'],
        'Spike Protection Notifications': ['激增保护通知'],
        'Notifications about spikes on projects that you have enabled spike protection for.':
          ['关于你已启用激增保护的项目的激增通知。'],
        'Broken Monitors': ['故障监控'],
        'Notifications for monitors that have been in a failing state for a prolonged period of time':
          ['对于长时间处于故障状态的监控的通知'],
        'Set Quota Limit': ['设置配额限制'],
        'Receive notifications when your organization exceeds the following limits.': [
          '当你的组织超过以下限制时接收通知。',
        ],
        '100% and 80%': ['100% 和 80%'],
        '100%': ['100%'],
        'Issue Alerts': ['问题警报'],
        'Receive notifications about your error quotas. [learnMore:Learn more]': [
          '接收关于你的错误配额的通知。[了解更多：了解更多]',
        ],
        'Receive notifications about your transaction quota. [learnMore:Learn more]': [
          '接收关于你的事务配额的通知。[了解更多：了解更多]',
        ],
        'Receive notifications about your spans quotas. [learnMore:Learn more]': [
          '接收关于你的跨度配额的通知。[了解更多：了解更多]',
        ],
        'Notifications sent from Alert rules that your team has set up.': [
          '来自你的团队设置的警报规则的通知。',
        ],
        'Receive notifications about your replay quotas. [learnMore:Learn more]': [
          '接收关于你的回放配额的通知。[了解更多：了解更多]',
        ],
        'Receive notifications about your attachment quota. [learnMore:Learn more]': [
          '接收关于你的附件配额的通知。[了解更多：了解更多]',
        ],
        'Receive notifications about your cron monitor quotas. [learnMore:Learn more]': [
          '接收关于你的 cron 监控配额的通知。[了解更多：了解更多]',
        ],
        'Spend Allocations': ['支出分配'],
        'Receive notifications about your spend allocations.': [
          '接收关于你的支出分配的通知。',
        ],
        'Receive notifications when your spend crosses predefined or custom thresholds. [learnMore:Learn more]':
          ['当你的支出超过预定义或自定义阈值时接收通知。[了解更多：了解更多]'],
        'Issue Workflow': ['问题工作流程'],
        'Only Subscribed Issues': ['仅已订阅的问题'],
        'Changes in issue assignment, resolution status, and comments.': [
          '问题分配、解决状态和评论的更改。',
        ],
        'Releases with My Commits': ['包含我的提交的版本'],
        'Release, environment, and commit overviews.': ['版本、环境和提交概览。'],
        'Delivery Method': ['传递方式'],
        'Where personal notifications will be sent.': ['个人通知将发送到的位置。'],
        Quota: ['配额'],
        'Error, transaction, replay, attachment, and cron monitor quota limits.': [
          '错误、事务、回放、附件和 cron 监控配额限制。',
        ],
        'A summary of the past week for an organization.': ['组织的过去一周总结。'],
        'Change the email address that receives notifications.': [
          '更改接收通知的电子邮件地址。',
        ],
        'Spike Protection': ['激增保护'],
        'Notifications about spikes on a per project basis.': ['按项目的通知激增。'],
        'My Own Activity': ['我自己的活动'],
        'Notifications about your own actions on Sentry.': [
          '关于你在 Sentry 上的个人操作的通知。',
        ],
        'Resolve and Auto-Assign': ['解决并自动分配'],
        "When you resolve an unassigned issue, we'll auto-assign it to you.": [
          '当你解决一个未分配的问题时，我们将自动将其分配给你。',
        ],
        Spend: ['支出'],
        'Notifications that help avoid surprise invoices.': ['帮助避免意外发票的通知。'],
        'Personal notifications sent by email or an integration.': [
          '通过电子邮件或集成发送的个人通知。',
        ],
        'Value…': ['值…'],
        'Settings for Organizations': ['组织设置'],
        'Project…': ['项目…'],
        'Sentry Organization…': ['Sentry 组织…'],
        'Add override': ['添加覆盖'],
        'This is the default for all projects.': ['这是所有项目的默认设置。'],
        'This is the default for all organizations.': ['这是所有组织的默认设置。'],
        'Updated notification setting': ['已更新通知设置'],
        'Unable to update notification setting': ['无法更新通知设置'],
        'All Organizations': ['所有组织'],
        'Settings for Organization': ['组织设置'],
        'You\'ve selected Slack as your delivery method, but do not have a linked account for the following organizations. You\'ll receive email notifications instead until you type "/sentry link" into your Slack workspace to link your account. If slash commands are not working, please re-install the Slack integration.':
          [
            '你已选择 Slack 作为传递方式，但以下组织没有关联的账户。在你输入 "/sentry link" 到你的 Slack 工作区以关联你的账户之前，你将接收电子邮件通知。如果斜杠命令不起作用，请重新安装 Slack 集成。',
          ],
        'An unknown error occurred while deleting data scrubbing rule': [
          '删除数据清理规则时发生未知错误',
        ],
        'Advanced Data Scrubbing': ['高级数据清理'],
        'The new rules will only apply to upcoming events. For more details, see [linkToDocs].':
          ['新规则仅适用于即将发生的事件。更多详细信息，请参阅 [linkToDocs]。'],
        'full documentation on data scrubbing': ['数据清理的完整文档'],
        'You have no data scrubbing rules': ['你没有数据清理规则'],
        'Successfully updated data scrubbing rule': ['成功更新数据清理规则'],
        'Unable to load data scrubbing rules': ['无法加载数据清理规则'],
        'Successfully added data scrubbing rule': ['成功添加数据清理规则'],
        'Successfully deleted data scrubbing rule': ['成功删除数据清理规则'],
        'Add an advanced data scrubbing rule': ['添加一个高级数据清理规则'],
        'Edit an advanced data scrubbing rule': ['编辑一个高级数据清理规则'],
        'Event ID (Optional)': ['事件 ID（可选）'],
        'Providing an event ID will automatically provide you a list of suggested sources':
          ['提供事件 ID 将自动为你提供建议来源列表'],
        XXXXXXXXXXXXXX: ['XXXXXXXXXXXXXX'],
        'This event ID is invalid': ['此事件 ID 无效'],
        'An error occurred while fetching the suggestions based on this event ID': [
          '根据此事件 ID 获取建议时发生错误',
        ],
        'The chosen event ID was not found in projects you have access to': [
          '在你有权访问的项目中未找到所选的事件 ID',
        ],
        'Clear event ID': ['清除事件 ID'],
        'What to do': ['做什么'],
        'Select method': ['选择方法'],
        'Custom Placeholder (Optional)': ['自定义占位符（可选）'],
        'It will replace the default placeholder [Filtered]': [
          '它将替换默认占位符 [已过滤]',
        ],
        'What to look for. Use an existing pattern or define your own using regular expressions.':
          ['要寻找什么。使用现有模式或使用正则表达式定义你自己的模式。'],
      };
      var trans11 = {
        'Custom regular expression (see documentation)': ['自定义正则表达式（查看文档）'],
        'Regex matches': ['正则表达式匹配'],
        '[a-zA-Z0-9]+': ['[a-zA-Z0-9]+'],
        'Hide event ID field': ['隐藏事件 ID 字段'],
        'Use event ID for auto-completion': ['使用事件 ID 进行自动完成'],
        'Where to look. In the simplest case this can be an attribute name.': [
          '在哪里查找。最简单的情况下，这可以是一个属性名称。',
        ],
        "You might want to change Data Type's value to 'Regex matches'": [
          '你可能需要将数据类型的值更改为“正则表达式匹配”',
        ],
        'Enter a custom attribute, variable or header name': [
          '输入自定义属性、变量或标头名称',
        ],
        'Examples for %s in current event': ['当前事件中 %s 的示例'],
        'See Example': ['查看示例'],
        'Unknown error occurred while saving data scrubbing rule': [
          '保存数据清理规则时发生未知错误',
        ],
        'Invalid source value: %s': ['无效的源值： %s'],
        'Invalid regex: %s': ['无效的正则表达式： %s'],
        'Compiled regex is too large, simplify your regex': [
          '编译后的正则表达式过大，请简化你的正则表达式',
        ],
        'An unknown error occurred while saving data scrubbing rule': [
          '保存数据清理规则时发生未知错误',
        ],
        'There are no data scrubbing rules at the organization level': [
          '在组织级别没有数据清理规则',
        ],
        'Organization Rules': ['组织规则'],
        'Expand Organization Rules': ['展开组织规则'],
        'Collapse Organization Rules': ['折叠组织规则'],
        'Toggle Organization Rules': ['切换组织规则'],
        'You do not have permission to edit rules': ['你没有权限编辑规则'],
        'Are you sure you wish to delete this rule?': ['你确定要删除这个规则吗？'],
        'You do not have permission to delete rules': ['你没有权限删除规则'],
        'the X-Custom-Token HTTP header': ['X-Custom-Token HTTP 标头'],
        'the user IP address': ['用户 IP 地址'],
        'the local variable "foo"': ['本地变量“foo”'],
        'the timezone in the device context': ['设备上下文中的时区'],
        'the tag "server_name"': ['标签“server_name”'],
        'all attachments': ['所有附件'],
        'all attachments named "logfile.txt"': ['所有名为“logfile.txt”的附件'],
        'the entire minidump of a native crash report': ['原生崩溃报告的整个 minidump'],
        'the heap memory region in a native crash report': ['原生崩溃报告中的堆内存区域'],
        'the pathname of a code module in a native crash report': [
          '原生崩溃报告中代码模块的路径名',
        ],
        'the pathname of a debug module in a native crash report': [
          '原生崩溃报告中调试模块的路径名',
        ],
        from: ['来自'],
        'Auth in URLs': ['URL 中的认证'],
        'US social security numbers': ['美国社会安全号码'],
        'Usernames in filepaths': ['文件路径中的用户名'],
        'Credit card numbers': ['信用卡号码'],
        'Password fields': ['密码字段'],
        'IP addresses': ['IP 地址'],
        Mask: ['掩码'],
        'Replace with ****': ['替换为 ****'],
        'Replace with DEADBEEF': ['替换为 DEADBEEF'],
        'Replace with null': ['替换为 null'],
        Replace: ['替换'],
        'Replace with Placeholder': ['替换为占位符'],
        Anything: ['任何内容'],
        'all default PII fields': ['所有默认的个人身份识别信息字段'],
        'attributes named "password"': ['名为“password”的属性'],
        'the exception value': ['异常值'],
        'IMEI numbers': ['IMEI 号码'],
        'the log message': ['日志消息'],
        'the key "MyValue" in "Additional Data"': ['“Additional Data”中的键“MyValue”'],
        'everything in "Additional Data"': ['“Additional Data”中的所有内容'],
        "Please copy this token to a safe place — it won't be shown again!": [
          '请将此令牌复制到一个安全的地方 — 它不会再显示了！',
        ],
        'You can only view this token when it was created.': [
          '你只能在创建时查看此令牌。',
        ],
        'Generated token': ['生成的令牌'],
        'Settings Breadcrumbs': ['设置导航面包屑'],
        'Close the menu': ['关闭菜单'],
        'Open the menu': ['打开菜单'],
        'Settings Navigation': ['设置导航'],
        'This setting needs review': ['此设置需要审核'],
        'Search Settings': ['搜索设置'],
        "This is the last team that grants Team Admin access to you for this project. After removing this team, you will not be able to edit this project's configuration.":
          [
            '这是最后一个授予你此项目团队管理员权限的团队。移除此团队后，你将无法编辑此项目的配置。',
          ],
        'This is the last team with access to this project. After removing this team, only organization owners and managers will be able to access the project pages.':
          [
            '这是最后一个可以访问此项目的团队。移除此团队后，只有组织所有者和管理员能够访问项目页面。',
          ],
        'Removing this team from the project means that members of the team can no longer access this project. Do you want to continue?':
          ['将此团队从项目中移除意味着团队成员将无法再访问此项目。你确定要继续吗？'],
        'You must be a Org Owner/Manager to create teams': [
          '你必须是组织所有者/管理员才能创建团队',
        ],
        'Early Adopter Features': ['早期采用功能'],
        'Manage organization auth tokens': ['管理组织认证令牌'],
        'Manage custom integrations': ['管理自定义集成'],
        'Configure general settings for your account': ['配置你的账户的一般设置'],
        'Configuration related to dealing with sensitive data and other security settings. (Data Scrubbing, Data Privacy, Data Scrubbing)':
          ['与处理敏感数据和其他安全设置相关的配置。（数据清理、数据隐私、数据清理）'],
        'User Settings': ['用户设置'],
        'Manage relays connected to the organization': ['管理连接到组织的中继'],
        'Manage organization-level integrations, including: Slack, Github, Bitbucket, Jira, and Azure DevOps':
          ['管理组织级别的集成，包括：Slack、Github、Bitbucket、Jira 和 Azure DevOps'],
        'Manage early access features': ['管理早期访问功能'],
        'These settings can only be edited by users with the organization owner or manager role.':
          ['这些设置只能由具有组织所有者或管理员角色的用户编辑。'],
        'Error removing key': ['删除密钥时出错'],
        'Created a new API key "%s"': ['创建了一个新的 API 密钥“%s”'],
        'Until Sentry supports OAuth, you might want to switch to using [tokens:User Auth Tokens] instead.':
          ['在 Sentry 支持 OAuth 之前，你可能需要改用 [令牌：用户认证令牌]。'],
        'Created project [projectSettingsLink]': ['创建项目 [projectSettingsLink]'],
        'Renamed project slug from [old-slug] to [new-slug]': [
          '将项目简短标识从 [old-slug] 重命名为 [new-slug]',
        ],
        'Edited project [projectSettingsLink] [note]': [
          '编辑项目 [projectSettingsLink] [note]',
        ],
        'Enabled retention priority "[biasLabel]" in project [samplingInProjectSettingsLink]':
          ['在项目 [samplingInProjectSettingsLink] 中启用保留优先级 “[biasLabel]”'],
        'Disabled retention priority "[biasLabel]" in project [samplingInProjectSettingsLink]':
          ['在项目 [samplingInProjectSettingsLink] 中禁用保留优先级 “[biasLabel]”'],
        'Modified ownership rules in project [projectSettingsLink]': [
          '修改项目 [projectSettingsLink] 中的所有权规则',
        ],
        'Select Action: ': ['选择操作： '],
        'Sentry Staff': ['Sentry 团队'],
        'Auth Settings': ['认证设置'],
        'Require 2FA will be disabled if you enable SSO.': [
          '如果你启用单点登录（SSO），将禁用双因素认证（2FA）。',
        ],
        'your preferred SAML2 compliant provider like Ping Identity, Google SAML, Keycloak, or VMware Identity Manager':
          [
            '你偏好的符合 SAML2 标准的提供商，如 Ping Identity、Google SAML、Keycloak 或 VMware Identity Manager',
          ],
        'Google (OAuth)': ['谷歌（OAuth）'],
        'Failed to update the auth token.': ['更新认证令牌失败。'],
        "Authentication tokens allow you to perform actions against the Sentry API on behalf of your organization. They're the easiest way to get started using the API.":
          [
            '认证令牌允许你代表组织对 Sentry API 执行操作。这是开始使用 API 最简单的方法。',
          ],
        'Auth Token Details': ['认证令牌详情'],
        'Failed to load auth token.': ['加载认证令牌失败。'],
        'Updated auth token.': ['已更新认证令牌。'],
        'You must be an organization owner, manager or admin to revoke a token.': [
          '你必须是组织所有者、管理员或经理才能撤销令牌。',
        ],
        'Revoke %s': ['撤销 %s'],
        '[date] in project [project]': ['[date] 在项目 [project] 中'],
        'in project [project]': ['在项目 [project] 中'],
        'never used': ['从未使用'],
        'Failed to revoke the auth token for the organization.': [
          '撤销组织的认证令牌失败。',
        ],
        'Organization Auth Tokens can be used in many places to interact with Sentry programatically. For example, they can be used for sentry-cli, bundler plugins or similar uses cases.':
          [
            '组织认证令牌可以在许多地方用来与 Sentry 进行程序交互。例如，它们可用于 sentry-cli、bundler 插件或类似的使用场景。',
          ],
        'Failed to load auth tokens for the organization.': ['加载组织认证令牌失败。'],
        'Auth token': ['认证令牌'],
        'Last access': ['最后访问'],
        'Revoked auth token for the organization.': ['已撤销组织的认证令牌。'],
        'Created auth token.': ['已创建认证令牌。'],
        'You have to configure `system.url-prefix` in your Sentry instance in order to generate tokens.':
          ['你需要在你的 Sentry 实例中配置 `system.url-prefix` 才能生成令牌。'],
        'Create Auth Token': ['创建认证令牌'],
        'Organization auth tokens currently have a limited set of scopes.': [
          '组织认证令牌目前具有有限的范围。',
        ],
        'Source Map Upload, Release Creation': ['源地图上传、版本创建'],
        'Create integrations that interact with Sentry using the REST API and webhooks. ':
          ['创建使用 REST API 和 Webhook 与 Sentry 交互的集成。 '],
        'For more information [link: see our docs].': [
          '更多信息 [链接：查看我们的文档]。',
        ],
        'No internal integrations have been created yet.': ['尚未创建任何内部集成。'],
        'Cannot update permissions on a published integration': [
          '无法更新已发布集成的权限',
        ],
        'You are going to increase privileges for this integration. Organization members who already had access to the Client Secret may gain extra permissions due to this change. If this is not what you are expecting, consider rotating the Client Secret below.':
          [
            '你将为此集成提升权限。已经可以访问客户端密钥的组织成员可能因此更改而获得额外权限。如果这不是你期望的，请考虑在下方轮换客户端密钥。',
          ],
        'Installations/Uninstallations over Last 90 Days': ['过去 90 天的安装/卸载情况'],
        'Integration views are measured through views on the ': [
          '集成视图通过 的视图进行衡量',
        ],
        'external installation page': ['外部安装页面'],
        ' and views on the Learn More/Install modal on the ': [
          ' 和 的“了解更多/安装”模态框视图',
        ],
        'Each link click or context menu open counts as one interaction': [
          '每次链接点击或上下文菜单打开计为一次交互',
        ],
        'Each open of the issue link modal counts as one interaction': [
          '每次打开问题链接模态框计为一次交互',
        ],
        'Component Interactions': ['组件交互'],
        'Installation & Interaction Data': ['安装与交互数据'],
        'Date published': ['发布日期'],
        'This log shows the status of any outgoing webhook requests from Sentry to your integration.':
          ['此日志显示 Sentry 向你的集成发送的任何传出 Webhook 请求的状态。'],
        'Errors Only': ['仅错误'],
        'No requests found in the last 30 days.': ['过去 30 天未找到请求。'],
        '[action] [type] Integration': ['[action] [type] 集成'],
        '%s successfully saved.': ['%s 保存成功。'],
        '%s successfully created.': ['%s 创建成功。'],
        'You do not have access to view these tokens.': ['你没有权限查看这些令牌。'],
        Logo: ['徽标'],
        'Small Icon': ['小图标'],
        ' Required for publishing.': [' 发布所需。'],
        'Default logo': ['默认徽标'],
        'Default small icon': ['默认小图标'],
        'Your secret is only available briefly after integration creation. Make\n                    sure to save this value!':
          ['集成创建后，你的密钥只能短暂使用。请务必保存此值！'],
        'Only Manager or Owner can view these credentials, or the permissions for this integration exceed those of your role.':
          ['只有管理员或所有者可以查看这些凭证，或者此集成的权限超出你的角色权限。'],
        'Default Logo': ['默认徽标'],
        'The default icon for integrations': ['集成的默认图标'],
        'Image must be between 256px by 256px and 1024px by 1024px.': [
          '图像必须在 256px×256px 到 1024px×1024px 之间。',
        ],
        'Default Icon': ['默认图标'],
        'This is a silhouette icon used only for [uiDocs:UI Components]': [
          '这是一个仅用于 [uiDocs：UI 组件] 的剪影图标',
        ],
        'Image must be between 256px by 256px and 1024px by 1024px, and may only use black and transparent pixels.':
          ['图像必须在 256px×256px 到 1024px×1024px 之间，且只能使用黑色和透明像素。'],
        'Deleting %s will also delete any and all of its installations. This is a permanent action. Do you wish to continue?':
          ['删除 %s 也会删除其所有安装。这是一个永久操作。你希望继续吗？'],
        'Organization owner permissions are required for this action.': [
          '此操作需要组织所有者权限。',
        ],
        "Must have at least 'Read' permissions enabled for %s": [
          '必须为 %s 启用至少“读取”权限',
        ],
        'Your organization does not have access to the error subscription resource.': [
          '你的组织无法访问错误订阅资源。',
        ],
        'Cannot enable webhook subscription without specifying a webhook url': [
          '未指定 Webhook URL 时无法启用 Webhook 订阅',
        ],
        "Your organization's data storage location. ": ['你的组织的数据存储位置。 '],
        'Enable Code Coverage Insights': ['启用代码覆盖洞察'],
        'Codecov Coverage': ['Codecov 覆盖率'],
        on: ['开启'],
        off: ['关闭'],
        'Codecov access was turned %s': ['Codecov 访问已 %s'],
        'powered by': ['由 … 提供支持'],
        "You haven't set anything up yet": ['你尚未设置任何内容'],
        'But that doesn’t have to be the case for long! Add an installation to get started.':
          ['但这不需要持续太久！添加一个安装即可开始。'],
        'You must be an organization owner, manager or admin to install this.': [
          '你必须是组织所有者、管理员或经理才能安装此内容。',
        ],
        'An unknown error occurred': ['发生未知错误'],
        'Add %s': ['添加 %s'],
        Reinstall: ['重新安装'],
        'Migration in progress.': ['迁移进行中。'],
        'Something went wrong! Please try again.': ['出错了！请再试一次。'],
        'Open this server in the Discord app': ['在 Discord 应用程序中打开此服务器'],
        'Open in Discord': ['在 Discord 中打开'],
        'This will automatically associate all the Linked Issues of your Jira Plugins to this integration.':
          ['这将自动将你的 Jira 插件的所有链接问题关联到此集成。'],
        'If the Jira Plugins had the option checked to automatically create a Jira ticket for every new Sentry issue checked, you will need to create alert rules to recreate this behavior. Jira Server does not have this feature.':
          [
            '如果 Jira 插件已勾选为每个新检查的 Sentry 问题自动创建 Jira 工单的选项，则需要创建警报规则来重现此行为。Jira Server 没有此功能。',
          ],
        'Once the migration is complete, your Jira Plugins will be disabled.': [
          '迁移完成后，你的 Jira 插件将被禁用。',
        ],
        'Migrate Plugin': ['迁移插件'],
        'This will automatically associate all the API keys and Alert Rules of your Opsgenie Plugins to this integration.':
          ['这将自动将你的 Opsgenie 插件的所有 API 密钥和警报规则关联到此集成。'],
        'API keys will be automatically named after one of the projects with which they were associated.':
          ['API 密钥将自动以其关联的项目之一命名。'],
        'Once the migration is complete, your Opsgenie Plugins will be disabled.': [
          '迁移完成后，你的 Opsgenie 插件将被禁用。',
        ],
        'User Mappings': ['用户映射'],
        'Team Mappings': ['团队映射'],
        'Code Mappings': ['代码映射'],
        'Configure %s': ['配置 %s'],
        'Manager or Owner permissions are required to create a new integration': [
          '创建新集成需要管理员或所有者权限',
        ],
        'View Example App': ['查看示例应用'],
        'You must be an organization owner, manager or admin to configure': [
          '你必须是组织所有者、管理员或经理才能配置',
        ],
        'Update Now': ['立即更新'],
        'You must be an organization owner, manager or admin to uninstall': [
          '你必须是组织所有者、管理员或经理才能卸载',
        ],
        'pending deletion': ['等待删除'],
        'This integration can be disabled by clicking the Uninstall button': [
          '点击卸载按钮可以禁用此集成',
        ],
        'This integration has been disconnected from the external provider': [
          '此集已与外部提供商断开连接',
        ],
        'This integration is pending deletion.': ['此集成正在等待删除。'],
        'Deleting this integration will remove any project associated data. This action cannot be undone. Are you sure you want to delete this integration?':
          ['删除此集成将移除任何关联的项目数据。此操作无法撤销。你确定要删除此集成吗？'],
        'Deleting this integration has consequences!': ['删除此集成功能会产生后果！'],
        'This integration cannot be removed in Sentry': ['无法在 Sentry 中移除此集成'],
        'Deleting this installation will disable the integration for this project and remove any configurations.':
          ['删除此安装将禁用此项目的集成并移除任何配置。'],
        'Deletion successful': ['删除成功'],
        'Configure code path mapping': ['配置代码路径映射'],
        'Code Mappings are used to map stack trace file paths to source code file paths. These mappings are the basis for features like Stack Trace Linking. To learn more, [link: read the docs].':
          [
            '代码映射用于将堆栈跟踪文件路径映射到源代码文件路径。这些映射是堆栈跟踪链接等功能的基础。要了解更多，请 [链接：阅读文档]。',
          ],
        'Stack Trace Root': ['堆栈跟踪根'],
        'Add Code Mapping': ['添加代码映射'],
        'View Documentation': ['查看文档'],
        'Set up stack trace linking by adding a code mapping.': [
          '通过添加代码映射来设置堆栈跟踪链接。',
        ],
        'Enable Slack threads on Issue Alerts': ['在问题警报上启用 Slack 线程'],
        'Allow Slack integration to post replies in threads for an Issue Alert notification.':
          ['允许 Slack 集成在问题警报通知的线程中发布回复。'],
        'You must have a Slack integration to enable this feature.': [
          '启用此功能需要有 Slack 集成。',
        ],
        'Enable Slack threads on Metric Alerts': ['在指标警报上启用 Slack 线程'],
        'Allow Slack integration to post replies in threads for an Metric Alert notification.':
          ['允许 Slack 集成在指标警报通知的线程中发布回复。'],
        'Enable Comments on Suspect Pull Requests': ['在可疑的拉取请求上启用评论'],
        'Allow Sentry to comment on recent pull requests suspected of causing issues.': [
          '允许 Sentry 在疑似导致问题的最近拉取请求上发表评论。',
        ],
        'You must have a GitHub integration to enable this feature.': [
          '启用此功能需要有 GitHub 集成。',
        ],
        'Enable Comments on Open Pull Requests': ['在打开的拉取请求上启用评论'],
        'Allow Sentry to comment on open pull requests to show recent error issues for the code being changed.':
          [
            '允许 Sentry 在打开的拉取请求上发表评论，以显示正在更改的代码的最近错误问题。',
          ],
        'Enable Missing Member Detection': ['启用缺失成员检测'],
        'Allow Sentry to detect users committing to your GitHub repositories that are not part of your Sentry organization..':
          ['允许 Sentry 检测向你的 GitHub 仓库提交代码但不属于你的 Sentry 组织的用户。.'],
        '@username': ['@用户名'],
        '@org/teamname': ['@组织/团队名称'],
        'Select Sentry %s': ['选择 Sentry %s'],
        'Are you sure you want to remove this external %s mapping?': [
          '你确定要移除此外部 %s 映射吗？',
        ],
        'Remove user mapping': ['移除用户映射'],
        'You must be an organization owner, manager or admin to delete an external user mapping.':
          ['你必须是组织所有者、管理员或经理才能删除外部用户映射。'],
        'This %s mapping suggestion was generated from a CODEOWNERS file': [
          '此 %s 映射建议是从 CODEOWNERS 文件生成的',
        ],
        'Configure External Team Mapping': ['配置外部团队映射'],
        'Configure External User Mapping': ['配置外部用户映射'],
        'All Categories': ['所有类别'],
        'Filter Integrations...': ['筛选集成...'],
        'No Integrations found for "[searchTerm]".': ['未找到集成“[searchTerm]”。'],
        "Not seeing what you're looking for?": ['没找到你要找的内容？'],
        '[link:Build it on the Sentry Integration Platform.]': [
          '[链接：在 Sentry 集成平台上构建它。]',
        ],
        'Integration updated.': ['集成已更新。'],
        'Integration Name': ['集成名称'],
        'Full URL': ['完整 URL'],
        'Save Settings': ['保存设置'],
        'We were unable to fetch repositories for this integration. Try again later. If this error continues, please reconnect this integration by uninstalling and then reinstalling.':
          [
            '我们无法为此集成获取仓库。稍后再试。如果此错误继续，请通过卸载然后重新安装来重新连接此集成。',
          ],
        'Add a repository to begin tracking its commit data. Then, set up release tracking to unlock features like suspect commits, suggested issue owners, and deploy emails.':
          [
            '添加一个仓库以开始跟踪其提交数据。然后，设置版本跟踪以解锁可疑提交、建议的问题负责人和部署邮件等功能。',
          ],
        'You must be an organization owner, manager or admin to add repositories': [
          '你必须是组织所有者、管理员或经理才能添加仓库',
        ],
        'Search Repositories': ['搜索仓库'],
        'Repository added': ['仓库已添加'],
        'Requesting Installation': ['请求安装'],
        'Installation Requested': ['已请求安装'],
        'Request Installation': ['请求安装'],
        'Request successfully sent.': ['请求已成功发送。'],
        'Sending Request': ['发送请求'],
        'Send Request': ['发送请求'],
        'Request %s Installation': ['请求 %s 安装'],
        'Looks like your organization owner, manager, or admin needs to install %s. Want to send them a request?':
          ['看起来你的组织所有者、管理员或经理需要安装 %s。你想发送一个请求吗？'],
        '(Optional) You’ve got good reasons for installing the %s Integration. Share them with your organization owner.':
          ['（可选）你有安装 %s 集成的好理由。与你的组织所有者分享这些理由。'],
        'Optional message…': ['可选消息…'],
        'When you click “Send Request”, we’ll email your request to your organization’s owners. So just keep that in mind.':
          [
            '当你点击“发送请求”时，我们会将你的请求通过电子邮件发送给你的组织所有者。请记住这一点。',
          ],
        'Manage your AWS Lambda functions below. Only Node and Python runtimes are currently supported.':
          ['在下方管理你的 AWS Lambda 函数。目前仅支持 Node 和 Python 运行时。'],
        'Layer Status': ['层状态'],
        Success: ['成功'],
        'Error occurred': ['发生错误'],
        'Reinstall required for disabled integrations.': ['禁用的集成功能需要重新安装。'],
        'Any stack trace starting with this path will be mapped with this rule. An empty string will match all paths.':
          ['任何以此路径开头的堆栈跟踪都将与此规则匹配。空字符串将匹配所有路径。'],
        'When a rule matches, the stack trace root is replaced with this path to get the path in your repository. Leaving this empty means replacing the stack trace root with an empty string.':
          [
            '当规则匹配时，堆栈跟踪根将被替换为此路径以获取你的仓库中的路径。留空意味着将堆栈跟踪根替换为空字符串。',
          ],
        'If an event does not have a release tied to a commit, we will use this branch when linking to your source code.':
          ['如果事件没有与提交相关的版本，我们将在链接到你的源代码时使用此分支。'],
        'Type root path of your stack traces': ['输入你的堆栈跟踪的根路径'],
        'You must be an organization owner, manager or admin to remove a code mapping.': [
          '你必须是组织所有者、管理员或经理才能删除代码映射。',
        ],
        'Are you sure you want to remove this code mapping?': [
          '你确定要删除此代码映射吗？',
        ],
        '%s successfully installed.': ['%s 安装成功。'],
        'Unable to uninstall %s': ['无法卸载 %s'],
        'Are you sure you want to uninstall the [slug] installation?': [
          '你确定要卸载 [slug] 安装吗？',
        ],
        'Unable to %s %s %s.': ['无法 %s %s %s。'],
        True: ['是'],
        False: ['否'],
        'Hide Missing Members': ['隐藏缺失成员'],
        'Are you sure you want to snooze this banner?': ['你确定要推迟显示此横幅吗？'],
        'Sent invite to [email]': ['已发送邀请到 [email]'],
        'Bring your full GitHub team on board in Sentry': [
          '在 Sentry 中引入你的全部 GitHub 团队',
        ],
        '[missingMemberCount] missing members': ['[missingMemberCount] 个缺失成员'],
        "Based on the last 30 days of GitHub commit data, there are team members committing code to Sentry projects that aren't in your Sentry organization":
          [
            '根据过去 30 天的 GitHub 提交数据，有团队成员向不在你的 Sentry 组织中的 Sentry 项目提交代码',
          ],
        '[commitCount] Recent Commits': ['[commitCount] 次最近提交'],
        Invite: ['邀请'],
        'See all [missingMembersCount] missing members': [
          '查看全部 [missingMembersCount] 个缺失成员',
        ],
        'Accounting for [totalCommits] recent commits': [
          '共计 [totalCommits] 次最近提交',
        ],
        'Unable to fetching missing commit authors': ['无法获取缺失的提交作者'],
        'Organization Role': ['组织角色'],
        'An existing member has asked to invite this user to your organization': [
          '一个现有成员已请求邀请此用户加入你的组织',
        ],
        'Requested by [inviterName]': ['由 [inviterName] 请求'],
        'This user has asked to join your organization.': ['此用户已请求加入你的组织。'],
        'This request needs to be reviewed by a privileged user': [
          '此请求需要由特权用户审核',
        ],
        'You do not have permission to approve a user of this role.\n                      Select a different role to approve this user.':
          [
            '你没有权限批准此角色的用户。\n                      请选择另一个角色来批准此用户。',
          ],
        'All authenticators have been removed': ['所有认证器已被移除'],
        'Error removing authenticators': ['移除认证器时出错'],
        Deactivated: ['已停用'],
        'Invitation Pending': ['邀请待处理'],
        'Generate a new invite link and send a new email.': [
          '生成一个新的邀请链接并发送一封新邮件。',
        ],
        'Cannot be reset since user is in more than one organization': [
          '由于用户属于多个组织，无法重置',
        ],
        'Not enrolled in two-factor authentication': ['未注册双因素认证'],
        'Resetting two-factor authentication will remove all two-factor authentication methods for this member.':
          ['重置双因素认证将移除此成员的所有双因素认证方法。'],
        'Cannot be reset since two-factor is required for this organization': [
          '由于此组织需要双因素认证，无法重置',
        ],
        'You cannot make changes to this partner-provisioned user.': [
          '你无法更改此由合作伙伴供应的用户。',
        ],
        'Sent!': ['已发送！'],
        "This user is managed through your organization's identity provider.": [
          '此用户由你的组织身份提供商管理。',
        ],
        'You do not have access to remove members': ['你没有权限移除成员'],
        "Your account is managed through your organization's identity provider.": [
          '你的账户由你的组织身份提供商管理。',
        ],
        'You cannot make changes as a partner-provisioned user.': [
          '作为合作伙伴供应的用户，你无法进行更改。',
        ],
        'You cannot leave this organization as you are the only organization owner.': [
          '你无法离开此组织，因为你是唯一的组织所有者。',
        ],
        'Invited [roleName]': ['已邀请 [roleName]'],
        'Error fetching members': ['获取成员时出错'],
        '[email] has been invited': ['[email] 已被邀请'],
        'Error inviting [email]': ['邀请 [email] 时出错'],
        'Invite request for [email] denied': ['拒绝 [email] 的邀请请求'],
        'Error denying invite request for [email]': ['拒绝 [email] 的邀请请求时出错'],
        'Active Members': ['活跃成员'],
        'Your organization must use its single sign-on provider to register new members.':
          ['你的组织必须使用其单点登录提供商来注册新成员。'],
        'The maximum percentage of the account limit (set above) that an individual project can consume.':
          ['单个项目可以消耗的账户限额（上文设置）的最大百分比。'],
        'No Limit — 100%': ['无限制 — 100%'],
        'No Keys Registered': ['无注册密钥'],
        'First Used': ['首次使用'],
        'Last Used': ['最后使用'],
        'You do not have permission to delete keys': ['你没有权限删除密钥'],
        'Created on [date]': ['创建于 [date]'],
        'You do not have permission to edit keys': ['你没有权限编辑密钥'],
        'After removing this Public Key, your Relay will no longer be able to communicate with Sentry and events will be dropped.':
          ['移除此公钥后，你的中继将无法再与 Sentry 通信，事件将被丢弃。'],
        'Waiting on Activity!': ['等待活动！'],
        'Run relay in your terminal with [commandLine]': [
          '在终端中使用 [commandLine] 运行中继',
        ],
        'Register Key': ['注册密钥'],
        'Initialize the configuration. [link: Learn how]': [
          '初始化配置。[链接：了解如何操作]',
        ],
        'Within your terminal:': ['在终端中：'],
        'Go to the file [jsonFile: credentials.json] to find the public key and enter it below.':
          ['转到文件 [jsonFile：credentials.json] 找到公钥并输入在下方。'],
        'An unknown error occurred while saving Relay public key.': [
          '保存中继公钥时发生未知错误。',
        ],
        'An invalid structure was sent.': ['发送了无效的结构。'],
        'Invalid Field': ['无效字段'],
        'Invalid Relay key': ['无效的中继密钥'],
        'Relay key already taken': ['中继密钥已被占用'],
        'Only enter the Public Key value from your credentials file. Never share the Secret key with Sentry or any third party':
          ['只输入你的凭证文件中的公钥值。切勿与 Sentry 或任何第三方共享密钥'],
        'Successfully added Relay public key': ['成功添加中继公钥'],
        'You do not have permission to register keys': ['你没有权限注册密钥'],
        'Sentry Relay offers enterprise-grade data security by providing a standalone service that acts as a middle layer between your application and sentry.io. Go to [link:Relay Documentation] for setup and details.':
          [
            'Sentry 中继通过提供一个独立的服务来充当你的应用程序和 sentry.io 之间的中间层，从而提供企业级的数据安全性。前往 [链接：中继文档] 获取设置和详细信息。',
          ],
        'Successfully updated Relay public key': ['成功更新中继公钥'],
        'Successfully deleted Relay public key': ['成功删除中继公钥'],
        'An unknown error occurred while deleting Relay public key': [
          '删除中继公钥时发生未知错误',
        ],
        'Want to add a repository to start tracking commits? Install or configure your version control integration here.':
          ['想添加一个仓库来开始跟踪提交吗？在此处安装或配置你的版本控制集成。'],
        'Unable to fetch authentication provider': ['无法获取认证提供商'],
        'These rules can be configured for each project.': [
          '这些规则可以为每个项目配置。',
        ],
        '%s Member': ['%s 成员'],
        '%s Members': ['%s 成员'],
        'Your request to join this team is being reviewed by organization owners': [
          '组织所有者正在审核你加入此团队的请求',
        ],
        'Organization not found': ['未找到组织'],
        '[selfNoun] organization role as [article] [orgRole] has granted [selfPronoun] a minimum team-level role of [teamRole]':
          [
            '[selfNoun] 组织角色作为 [article] [orgRole] 授予 [selfPronoun] 至少 [teamRole] 级别的团队角色',
          ],
        'This team does not exist, or you do not have access to it.': [
          '此团队不存在，或者你没有访问权限。',
        ],
        'You do not have access to the [teamSlug] team.': [
          '你没有访问 [teamSlug] 团队的权限。',
        ],
        'Successfully changed role for team member.': ['成功更改团队成员的角色。'],
        'There was an error while trying to change the roles for a team member.': [
          '尝试更改团队成员的角色时发生错误。',
        ],
        '"Open Membership" is enabled for the organization. Anyone can add members for this team.':
          ['组织已启用“开放成员资格”。任何人都可以为此团队添加成员。'],
        '"Open Membership" is disabled for the organization. Org Owner/Manager/Admin, or Team Admins can add members for this team.':
          [
            '组织已禁用“开放成员资格”。只有组织所有者/管理员/经理或团队管理员可以为此团队添加成员。',
          ],
        'This team has no members': ['此团队没有成员'],
        'You do not have permission to remove a member from this team.': [
          '你没有权限从此团队中移除成员。',
        ],
        'No teams have been linked yet.': ['尚未链接任何团队。'],
        'Head over to Slack and type [code] to get started. [link].': [
          '前往 Slack 并输入 [code] 开始。[链接]。',
        ],
        'Unlink this channel in Slack with [code]. [link].': [
          '在 Slack 中用 [code] 解除此频道的链接。[链接]。',
        ],
        'Unlink this channel in slack with `/slack unlink team`': [
          '在 slack 中用 `/slack unlink team` 解除此频道的链接',
        ],
        'You must be an organization owner, manager or admin to remove a Slack team link':
          ['你必须是组织所有者、管理员或经理才能移除 Slack 团队链接'],
        'Are you sure you want to remove this Slack team link?': [
          '你确定要移除这个 Slack 团队链接吗？',
        ],
        'No Notification Integrations have been installed yet.': [
          '尚未安装任何通知集成。',
        ],
        'You are not an admin for any other projects': ['你不是任何其他项目的管理员'],
        'If you have Team Admin permissions for other projects, you can associate them with this team.':
          ['如果你对其他项目具有团队管理员权限，可以将它们与此团队关联。'],
        'Team ID': ['团队 ID'],
        'Team Administration': ['团队管理'],
        "Membership to this team is managed through your organization's identity provider.":
          ['此团队的成员资格通过你的组织身份提供商管理。'],
        'The Loader Script is the easiest way to initialize the Sentry SDK. The Loader Script automatically keeps your Sentry SDK up to date and offers configuration for different Sentry features. [docsLink:Learn more about the Loader Script]. Note: The Loader Script is bound to a Client Key (DSN), to create a new Script, go to the [clientKeysLink:Client Keys page].':
          [
            '加载器脚本是初始化 Sentry SDK 的最简单方法。加载器脚本自动保持你的 Sentry SDK 最新，并为不同的 Sentry 功能提供配置。[docsLink：了解更多关于加载器脚本的信息]。注意：加载器脚本绑定到客户端密钥（DSN），要创建新的脚本，请前往 [clientKeysLink：客户端密钥页面]。',
          ],
        'Failed to load project keys.': ['加载项目密钥失败。'],
        'Client Key: [name]': ['客户端密钥：[name]'],
        'View Key Details': ['查看密钥详情'],
        'Note that it can take a few minutes until changed options are live.': [
          '请注意，更改的选项可能需要几分钟才能生效。',
        ],
        "View and manage the project's Loader Script": ['查看和管理项目的加载器脚本'],
        'Alert Settings': ['警报设置'],
        'Project alert settings': ['项目警报设置'],
        "View and manage a project's tags and context": ['查看和管理项目的标签和上下文'],
        'Manage ownership rules for a project': ['管理项目的所属规则'],
        'Configuration related to dealing with sensitive data and other security settings. (Data Scrubbing, Data Privacy, Data Scrubbing) for a project':
          [
            '与处理敏感数据和其他安全设置相关的配置。（数据清理、数据隐私、数据清理）针对项目',
          ],
        'These settings can only be edited by users with the organization-level owner, manager, or team-level admin roles.':
          ['这些设置只能由具有组织级别所有者、管理员或团队级别管理员角色的用户编辑。'],
        'Filters allow you to prevent Sentry from storing events in certain situations. Filtered events are tracked separately from rate limits, and do not apply to any project quotas.':
          [
            '过滤器允许你在某些情况下阻止 Sentry 存储事件。过滤的事件与速率限制分开跟踪，不适用于任何项目配额。',
          ],
      };
      var trans12 = {
        'Events filtered in the last 30 days (by day)': [
          '过去 30 天内过滤的事件（按天）',
        ],
        'Issues filtered as a result of your settings below will be shown here.': [
          '由于下面的设置而被过滤掉的问题将显示在这里。',
        ],
        Localhost: ['本地主机'],
        'Health Check': ['健康检查'],
        'Filter out legacy browsers': ['过滤掉旧版浏览器'],
        'The browser versions filtered out will be periodically evaluated and updated.': [
          '被过滤掉的浏览器版本将定期进行评估和更新。',
        ],
        "Minidumps, errors in the minified production build of React, and Internet Explorer's i18n errors cannot be filtered by message.":
          [
            '小型转储文件、React 生产版本中的错误以及 Internet Explorer 的国际化错误无法通过消息过滤。',
          ],
        'Filter out errors known to be caused by browser extensions': [
          '过滤掉已知由浏览器扩展导致的错误',
        ],
        'Filter out hydration errors': ['过滤掉水合错误'],
        'React falls back to do a full re-render on a page. [replaySettings: Hydration Errors created from captured replays] are excluded from this setting.':
          [
            'React 会回退到对页面进行完整的重新渲染。由捕获的回放创建的 [replaySettings：水合错误] 将被排除在此设置之外。',
          ],
        'Certain browser extensions will inject inline scripts and are known to cause errors.':
          ['某些浏览器扩展会注入内联脚本并且已知会导致错误。'],
        'React falls back to do a full re-render on a page and these errors are often not actionable.':
          ['React 会回退到对页面进行完整的重新渲染，这些错误通常无法采取行动。'],
        'Filter out ChunkLoadError(s)': ['过滤掉 ChunkLoadError(s)'],
        "ChunkLoadErrors can happen in Webpack-powered applications when code chunks can't be found on the server. This often occurs during a redeploy of the website while users have the old page open. A page refresh usually resolves the issue.":
          [
            '在 Webpack 驱动的应用程序中，当代码块在服务器上找不到时，会发生 ChunkLoadErrors。这种情况通常发生在网站重新部署时，而用户仍然打开旧页面。通常刷新页面可以解决问题。',
          ],
        'Filter out events coming from localhost': ['过滤掉来自本地主机的事件'],
        'Filter out health check transactions': ['过滤掉健康检查事务'],
        'Filter transactions that match most [commonNamingPatterns:common naming patterns] for health checks.':
          ['过滤掉与大多数 [commonNamingPatterns：常见命名模式] 匹配的健康检查事务。'],
        'Filter out known errors from legacy browsers': ['过滤掉已知的旧版浏览器错误'],
        'Older browsers often give less accurate information, and while they may report valid issues, the context to understand them is incorrect or missing.':
          [
            '旧版浏览器通常提供不太准确的信息，虽然它们可能会报告有效的问题，但理解这些问题的上下文是不正确的或缺失的。',
          ],
        'Filter out known web crawlers': ['过滤掉已知的网络爬虫'],
        'Some crawlers may execute pages in incompatible ways which then cause errors that are unlikely to be seen by a normal user.':
          ['某些爬虫可能会以不兼容的方式执行页面，从而导致普通用户不太可能看到的错误。'],
        'Rate limits provide a flexible way to manage your error\n                    volume. If you have a noisy project or environment you\n                    can configure a rate limit for this key to reduce the\n                    number of errors processed. To manage your transaction\n                    volume, we recommend adjusting your sample rate in your\n                    SDK configuration.':
          [
            '速率限制提供了一种灵活的方式来管理你的错误数量。如果你有一个嘈杂的项目或环境，你可以为这个密钥配置一个速率限制来减少处理的错误数量。为了管理你的事务数量，我们建议在你的 SDK 配置中调整采样率。',
          ],
        '[errors] in [timeWindow]': ['[errors] 在 [timeWindow] 中'],
        '%s error ': ['%s 错误 '],
        'no time window': ['没有时间窗口'],
        'Apply a rate limit to this credential to cap the amount of errors accepted during a time window.':
          ['为此凭据应用速率限制，以限制在时间窗口内接受的错误数量。'],
        'event(s) in': ['事件在'],
        'JavaScript Loader Script': ['JavaScript 加载器脚本'],
        'Copy this script into your website to setup your JavaScript SDK without any additional configuration. [link]':
          [
            '将此脚本复制到你的网站中，无需任何额外配置即可设置你的 JavaScript SDK。[链接]',
          ],
        ' What does the script provide?': ['脚本提供什么？'],
        'SDK Version': ['SDK 版本'],
        'At the moment, only the shown SDK version is available. New versions of the SDK will appear here as soon as they are released, and you will be able to upgrade by selecting them.':
          [
            '目前，只有显示的 SDK 版本可用。新版本的 SDK 一旦发布就会出现在这里，你可以通过选择它们来升级。',
          ],
        'Enable Performance Monitoring': ['启用性能监控'],
        'The default config is [codeTracesSampleRate:tracesSampleRate: 1.0] and distributed tracing to same-origin requests. [configDocs:Read the docs] to learn how to configure this.':
          [
            '默认配置是 [codeTracesSampleRate：tracesSampleRate：1.0] 并且对同源请求进行分布式跟踪。[configDocs：阅读文档] 以了解如何配置此设置。',
          ],
        'Only available in SDK version 7.x and above': ['仅在 SDK 版本 7.x 及以上可用'],
        'You do not have permission to edit this setting': ['你没有权限编辑此设置'],
        'Enable Session Replay': ['启用会话回放'],
        '[es5Warning]The default config is [codeReplay:replaysSessionSampleRate: 0.1] and [codeError:replaysOnErrorSampleRate: 1]. [configDocs:Read the docs] to learn how to configure this.':
          [
            '[es5Warning]默认配置是 [codeReplay：replaysSessionSampleRate：0.1] 和 [codeError：replaysOnErrorSampleRate：1]。[configDocs：阅读文档] 以了解如何配置此设置。',
          ],
        'When using Replay, the loader will load the ES6 bundle instead of the ES5 bundle.':
          ['使用回放时，加载器将加载 ES6 包而不是 ES5 包。'],
        'Enable Debug Bundles & Logging': ['启用调试包和日志记录'],
        'Successfully updated dynamic SDK loader configuration': [
          '成功更新动态 SDK 加载器配置',
        ],
        'Error enabling key': ['启用密钥时出错'],
        'Error disabling key': ['禁用密钥时出错'],
        'To send data to Sentry you will need to configure an SDK with a client key\n          (usually referred to as the [code:SENTRY_DSN] value). For more\n          information on integrating Sentry with your application take a look at our\n          [link:documentation].':
          [
            '要将数据发送到 Sentry，你需要使用客户端密钥配置一个 SDK（通常称为 [code：SENTRY_DSN] 值）。有关如何将 Sentry 与你的应用程序集成的更多信息，请查看我们的 [link：文档]。',
          ],
        'Disable Key': ['禁用密钥'],
        'Enable Key': ['启用密钥'],
        'Are you sure you want to disable this key?': ['你确定要禁用这个密钥吗？'],
        'Are you sure you want to enable this key?': ['你确定要启用这个密钥吗？'],
        'You can [configureLink:configure] the Loader Script to enable/disable Performance, Replay, and more.':
          ['你可以 [configureLink：配置] 加载器脚本以启用/禁用性能、回放等功能。'],
        'Use Case': ['使用场景'],
        'Whether the DSN is for the user or for internal data submissions.': [
          'DSN 是用于用户还是内部数据提交。',
        ],
        'The DSN tells the SDK where to send the events to. [link]': [
          'DSN 告诉 SDK 将事件发送到哪里。[链接]',
        ],
        'DSN URL': ['DSN URL'],
        'Use your security header endpoint for features like [link].': [
          '使用你的安全标头端点用于如 [链接] 所述的功能。',
        ],
        'CSP and Expect-CT reports': ['CSP 和 Expect-CT 报告'],
        'Security Header Endpoint URL': ['安全标头端点 URL'],
        'Minidump Endpoint URL': ['小型转储端点 URL'],
        'Unreal Engine Endpoint': ['虚幻引擎端点'],
        'Use this endpoint to configure your UE Crash Reporter.': [
          '使用此端点配置你的 UE 崩溃报告工具。',
        ],
        'Unreal Engine Endpoint URL': ['虚幻引擎端点 URL'],
        'Preview File': ['预览文件'],
        'Configure [userMappingsLink:User Mappings] or [teamMappingsLink:Team Mappings] for any missing associations.':
          [
            '配置 [userMappingsLink：用户映射] 或 [teamMappingsLink：团队映射] 以处理任何缺失的关联。',
          ],
        '[addAndSkip:Add and Skip Missing Associations] will add your codeowner file and skip any rules that having missing associations. You can add associations later for any skipped rules.':
          [
            '[addAndSkip：添加并跳过缺失的关联] 将添加你的 codeowner 文件并跳过任何具有缺失关联的规则。你可以在以后为任何跳过的规则添加关联。',
          ],
        'No codeowner file found.': ['未找到 codeowner 文件。'],
        'Add Code Owner File': ['添加代码所有者文件'],
        'Install a GitHub or GitLab integration to use this feature.': [
          '安装 GitHub 或 GitLab 集成以使用此功能。',
        ],
        "Configure code mapping to add your CODEOWNERS file. Select the integration you'd like to use for mapping:":
          ['配置代码映射以添加你的 CODEOWNERS 文件。选择你希望用于映射的集成：'],
        'Apply an existing code mapping': ['应用现有的代码映射'],
        'View in %s': ['在 %s 中查看'],
        Sync: ['同步'],
        'CODEOWNERS file sync successful.': ['CODEOWNERS 文件同步成功。'],
        'An error occurred trying to sync CODEOWNERS file.': [
          '尝试同步 CODEOWNERS 文件时发生错误。',
        ],
        codeowners: ['代码所有者'],
        'Last Synced': ['最后同步'],
        'Assign issues based on custom rules. To learn more, [docs:read the docs].': [
          '根据自定义规则分配问题。要了解更多，请 [docs：阅读文档]。',
        ],
        "Here's an example": ['这里有一个例子'],
        'Import CODEOWNERS': ['导入 CODEOWNERS'],
        'Edit Rules': ['编辑规则'],
        'Auto-assign issues to users and teams. To learn more, [link:read the docs].': [
          '自动将问题分配给用户和团队。要了解更多，请 [link：阅读文档]。',
        ],
        'Prioritize Auto Assignment': ['优先自动分配'],
        "When there's a conflict between suspect commit and ownership rules.": [
          '当可疑提交和所有权规则之间存在冲突时。',
        ],
        'Auto-assign to suspect commits': ['自动分配给可疑提交'],
        'Auto-assign to issue owner': ['自动分配给问题所有者'],
        'Turn off auto-assignment': ['关闭自动分配'],
        'Sync changes from CODEOWNERS': ['从 CODEOWNERS 同步更改'],
        'We’ll update any changes you make to your CODEOWNERS files during a release.': [
          '我们将在发布期间更新你对 CODEOWNERS 文件所做的任何更改。',
        ],
        'Here’s some suggestions based on this issue': ['基于这个问题的一些建议'],
        'Unable to save issue ownership rule changes: %s': [
          '无法保存问题所有权规则更改：%s',
        ],
        'Unable to save issue ownership rule changes': ['无法保存问题所有权规则更改'],
        'Last Edited': ['上次编辑'],
        'Updated issue ownership rules': ['已更新问题所有权规则'],
        "You don't have permission to modify issue ownership rules for this project": [
          '你没有权限修改此项目的問題所有权规则',
        ],
        Everyone: ['所有人'],
        'Search by type or rule': ['按类型或规则搜索'],
        Rule: ['规则'],
        'No ownership rules found': ['未找到所有权规则'],
        ' and %s other': ['和 %s 其他'],
        ' and %s others': ['和 %s 其他人'],
        synced: ['已同步'],
        edited: ['已编辑'],
        'Code Mapping:': ['代码映射：'],
        'Stack Trace Root -': ['堆栈跟踪根 -'],
        'Source Code Root -': ['源代码根 -'],
        'You do not have sufficient permissions to access Release tokens, placeholders are displayed below.':
          ['你没有足够的权限来访问发布令牌，下面显示的是占位符。'],
        'Start by binding the [release] attribute in your application, take a look at [link] to see how to configure this for the SDK you are using.':
          [
            '首先，在你的应用程序中绑定 [release] 属性，请查看 [链接] 以了解如何为你使用的 SDK 配置此设置。',
          ],
        'Create Rage Click Issues': ['创建愤怒点击问题'],
        'Toggles whether or not to create Session Replay Rage Click Issues': [
          '切换是否创建会话回放愤怒点击问题',
        ],
        'Create Hydration Error Issues': ['创建水合错误问题'],
        'Toggles whether or not to create Session Replay Hydration Error Issues during replay ingest. Using [inboundFilters: inbound filters] to filter out hydration errors does not affect this setting.':
          [
            '切换在回放摄取期间是否创建会话回放水合错误问题。使用 [inboundFilters：入站过滤器] 过滤掉水合错误不会影响此设置。',
          ],
        'Service Hooks are an early adopter preview feature and will change in the future.':
          ['服务钩子是一个早期采用者预览功能，将来会有所变化。'],
        'Failed to load project teams': ['加载项目团队失败'],
        'Project Teams for %s': ['%s 的项目团队'],
        'These teams and their members have access to this project. They can be assigned to issues and alerts created in it.':
          ['这些团队及其成员可以访问此项目。可以将在此创建的问题和警报分配给他们。'],
        'Team Admins can grant other teams access to this project. However, they cannot revoke access unless they are admins for the other teams too.':
          [
            '团队管理员可以授予其他团队访问此项目的权限。但是，除非他们也是其他团队的管理员，否则无法撤销访问权限。',
          ],
        'Unable to find "[teamSlug]"': ['无法找到 “[teamSlug]”'],
        'Sentry will automatically digest alerts sent by some services to avoid flooding your inbox with individual issue notifications. To control how frequently notifications are delivered, use the sliders below.':
          [
            'Sentry 将自动摘要一些服务发送的警报，以避免用单独的问题通知淹没你的收件箱。要控制通知的发送频率，请使用下面的滑块。',
          ],
        'Sentry forwards [em:all applicable error events] to the provider, in\n                some cases this may be a significant volume of data.':
          [
            'Sentry 将 [em：所有适用的错误事件] 转发给提供商，在某些情况下这可能会有大量的数据。',
          ],
        'Debug files can only be downloaded by users with organization [downloadRole] role[orHigher]. This can be changed in [settingsLink:Debug Files Access] settings.':
          [
            '只有具有组织 [downloadRole] 角色[或更高] 的用户才能下载调试文件。可以在 [settingsLink：调试文件访问] 设置中更改此设置。',
          ],
        'or higher': ['或更高'],
        '\n          Debug information files are used to convert addresses and minified\n          function names from native crash reports into function names and\n          locations.\n        ':
          ['调试信息文件用于将原生崩溃报告中的地址和简化函数名转换为函数名和位置。'],
        'There was an error loading repositories.': ['加载仓库时出错。'],
        'There was an error loading debug information files.': [
          '加载调试信息文件时出错。',
        ],
        'This field requires at least one built-in repository': [
          '此字段至少需要一个内置仓库',
        ],
        'An error occurred while adding new built-in repository': [
          '添加新的内置仓库时发生错误',
        ],
        'An error occurred while removing built-in repository': [
          '删除内置仓库时发生错误',
        ],
        'You do not have permission to edit built-in repositories configurations.': [
          '你没有权限编辑内置仓库的配置。',
        ],
        'Configures which built-in repositories Sentry should use to resolve debug files.':
          ['配置 Sentry 应该使用哪些内置仓库来解析调试文件。'],
        'Removing this repository applies instantly to new events.': [
          '删除此仓库会立即适用于新事件。',
        ],
        'Debug files from this repository will not be used to symbolicate future events. This may create new issues and alert members in your organization.':
          [
            '从此仓库获取的调试文件将不会用于将来事件的符号化。这可能会创建新问题并提醒组织中的成员。',
          ],
        'You do not have permission to edit custom repositories configurations.': [
          '你没有权限编辑自定义仓库的配置。',
        ],
        'You do not have permission to delete custom repositories configurations.': [
          '你没有权限删除自定义仓库的配置。',
        ],
        'You do not have permission to edit and delete custom repositories configurations.':
          ['你没有权限编辑和删除自定义仓库的配置。'],
        'You do not have permission to add custom repositories.': [
          '你没有权限添加自定义仓库。',
        ],
        'Open %s custom repository modal': ['打开 %s 自定义仓库模态框'],
        'No custom repositories configured': ['未配置自定义仓库'],
        'aws amazon s3 bucket': ['aws 亚马逊 s3 存储桶'],
        'gcs google cloud storage bucket': ['gcs 谷歌云存储存储桶'],
        'http symbol server ssqp symstore symsrv': [
          'http 符号服务器 ssqp symstore symsrv',
        ],
        'An error occurred while adding a new custom repository': [
          '添加新的自定义仓库时发生错误',
        ],
        'Successfully removed custom repository': ['成功删除自定义仓库'],
        'An error occurred while removing the custom repository': [
          '删除自定义仓库时发生错误',
        ],
        PDB: ['PDB'],
        'Portable PDB': ['便携式 PDB'],
        SourceBundle: ['源代码包'],
        WebAssembly: ['WebAssembly'],
        BCSymbolMap: ['BCSymbolMap'],
        'IL2CPP mapping': ['IL2CPP 映射'],
        'ProGuard mapping': ['ProGuard 映射'],
        Breakpad: ['Breakpad'],
        'Mach-O': ['Mach-O'],
        ELF: ['ELF'],
        PE: ['PE'],
        'Please enter the email of an organization owner to whom you would like to transfer this project. Note: It is not possible to transfer projects between organizations in different regions.':
          [
            '请输入你希望将此项目转让给的组织所有者的电子邮件。注意：无法在不同地区的组织之间转让项目。',
          ],
        'A request will be emailed to this address, asking the organization owner to accept the project transfer.':
          ['将向此地址发送一封电子邮件请求，要求组织所有者接受项目转让。'],
        'Failed to load grouping configs': ['加载分组配置失败'],
        'All events have a fingerprint. Events with the same fingerprint are grouped together into an issue. To learn more about issue grouping, [link: read the docs].':
          [
            '所有事件都有一个指纹。具有相同指纹的事件将被分组到一个问题中。要了解更多关于问题分组的信息，请 [link：阅读文档]。',
          ],
        'Disabling a metric blocks its ingestion and makes it inaccessible in Metrics, Alerts, and Dashboards.':
          ['禁用指标会阻止其摄取，并使其在指标、警报和仪表板中不可用。'],
        'Disabling a tag blocks its ingestion and makes it inaccessible in Metrics, Alerts, and Dashboards.':
          ['禁用标签会阻止其摄取，并使其在指标、警报和仪表板中不可用。'],
        'Are you sure you want to disable this metric? It will no longer be ingested, and will not be available for use in Metrics, Alerts, or Dashboards.':
          [
            '你确定要禁用这个指标吗？它将不再被摄取，并且将无法在指标、警报或仪表板中使用。',
          ],
        'Are you sure you want to disable this tag? It will no longer be ingested, and will not be available for use in Metrics, Alerts, or Dashboards.':
          [
            '你确定要禁用这个标签吗？它将不再被摄取，并且将无法在指标、警报或仪表板中使用。',
          ],
        'Are you sure you want to activate this metric?': ['你确定要激活这个指标吗？'],
        'Are you sure you want to activate this tag?': ['你确定要激活这个标签吗？'],
        'Disable metric': ['禁用指标'],
        'Disable tag': ['禁用标签'],
        'Activate metric': ['激活指标'],
        'Activate tag': ['激活标签'],
        'You do not have permissions to edit metrics.': ['你没有权限编辑指标。'],
        'There are no custom metrics to display.': ['没有自定义指标可以显示。'],
        'No metrics match the query.': ['没有指标匹配查询。'],
        'The tag cardinality of this metric exceeded the limit, causing the data to be dropped.':
          ['此指标的标签基数超过了限制，导致数据被丢弃。'],
        'Search Metrics': ['搜索指标'],
        'Toggling sampled mode': ['切换采样模式'],
        'Successfully toggled sampled mode': ['成功切换采样模式'],
        'Failed to toggle sampled mode': ['切换采样模式失败'],
        'Sampled Mode': ['采样模式'],
        'Typically, Sentry uses weights to approximate original volume and correct sampling skew. Enable sampled mode to view raw event data, where sample rates are ignored in calculations. [link:Read the docs] to learn more.':
          [
            '通常情况下，Sentry 使用权重来近似原始体积并纠正采样偏差。启用采样模式以查看原始事件数据，在计算中忽略采样率。[link：阅读文档] 以了解更多。',
          ],
        "Set up the metric you'd like to track and we'll collect it for you from future data.":
          ['设置你想要跟踪的指标，我们将为你从未来数据中收集它。'],
        'Metric extraction rule created': ['创建了指标提取规则'],
        'Add Metric': ['添加指标'],
        'Metric extraction rule updated': ['更新了指标提取规则'],
        'Edit Metric': ['编辑指标'],
        'This attribute is already in use. Please select another one or [link:edit the existing metric].':
          ['此属性已在使用中。请选择另一个或 [link：编辑现有指标]。'],
        'Edit %s metric': ['编辑 %s 指标'],
        'This tag has high cardinality.': ['此标签具有高基数。'],
        'Span attribute is required.': ['需要跨度属性。'],
        'At least one aggregate is required.': ['至少需要一个聚合。'],
        'Each filter must be unique; duplicates are not allowed.': [
          '每个过滤器必须是唯一的；不允许重复。',
        ],
        Measure: ['测量'],
        'Define the span attribute you want to track. Learn how to instrument custom attributes in [link:our docs].':
          [
            '定义你想要跟踪的跨度属性。学习如何在 [link：我们的文档] 中为自定义属性添加监控。',
          ],
        'Select an attribute or create one. [link:See how to instrument a custom attribute.]':
          ['选择一个属性或创建一个。[link：查看如何为自定义属性添加监控。]'],
        'Select span attribute': ['选择跨度属性'],
        'Select unit': ['选择单位'],
        'Select aggregations': ['选择聚合'],
        'Select the aggregations you’d like to view. For more information, read [link:our docs]':
          ['选择你想要查看的聚合。欲了解更多，请阅读 [link：我们的文档]'],
        'Select tags': ['选择标签'],
        'One of the selected tags is exceeding the cardinality limit. Remove tags or add more conditions to receive accurate data.':
          ['所选的一个标签超过了基数限制。删除标签或添加更多条件以获取准确的数据。'],
        'Select the tags that can be used to group and filter the metric. Tag values have to be non-numeric.':
          ['选择可以用来对指标进行分组和过滤的标签。标签值必须不是数字。'],
        'Select a tag or create one. [link:See how to instrument a custom tag.]': [
          '选择一个标签或创建一个。[link：查看如何为自定义标签添加监控。]',
        ],
        'Define filters to narrow down the metric to a specific set of spans.': [
          '定义过滤器以将指标缩小到特定的跨度集合。',
        ],
        'Add span attributes': ['添加跨度属性'],
        'Remove Filter': ['删除过滤器'],
        'You want to track a custom attribute, so if you haven’t already, please [link:add it to your span data].':
          [
            '你想跟踪一个自定义属性，所以如果你还没有，请 [link：将其添加到你的跨度数据中]。',
          ],
        'The changes you made will only be reflected on future data.': [
          '你所做的更改只会反映在未来的数据中。',
        ],
        count: ['计数'],
        count_unique: ['唯一计数'],
        'min, max, sum, avg': ['最小值、最大值、总和、平均值'],
        percentiles: ['百分位数'],
        'Span attribute': ['跨度属性'],
        'You have not created any span metrics yet.': ['你还没有创建任何跨度指标。'],
        'Some of your defined queries are exeeding the cardinality limit. Remove tags or add filters to receive accurate data.':
          ['你定义的一些查询超过了基数限制。删除标签或添加过滤器以获取准确的数据。'],
        'Edit metric': ['编辑指标'],
        'Delete metric': ['删除指标'],
        'Metric deleted': ['指标已删除'],
        'Failed to delete metric': ['删除指标失败'],
        'Are you sure you want to delete this metric?': ['你确定要删除这个指标吗？'],
        'Delete Metric': ['删除指标'],
        'Span Metrics': ['跨度指标'],
        'Metrics are numerical values extracted from span attributes that can help you track anything about your environment over time. To learn more about metrics, [link:read the docs].':
          [
            '指标是从跨度属性中提取的数值，可以帮助你随时间跟踪环境中的任何内容。欲了解更多关于指标的信息，请 [link：阅读文档]。',
          ],
        'Metric Details': ['指标详情'],
        'Name of the metric (invoked in your code).': ['指标名称（在代码中调用）。'],
        'Either counter, distribution, gauge, or set.': [
          '可以是计数器、分布、仪表或集合。',
        ],
        'Unit specified in the code - affects formatting.': [
          '代码中指定的单位 — 影响格式化。',
        ],
        'Activity in the last 30 days (by day)': ['过去 30 天的活动（按天）'],
        'No activity.': ['无活动。'],
        "We don't have data for this metric in the last 30 days.": [
          '我们在过去 30 天内没有此指标的数据。',
        ],
        'There are no tags for this metric.': ['此指标没有标签。'],
        'Code Location': ['代码位置'],
        'There is no threshold set for this project.': ['此项目没有设置阈值。'],
        'This determines which duration is used to set your thresholds. By default, we use transaction duration which measures the entire length of the transaction. You can also set this to use a [link:Web Vital].':
          [
            '这决定了用于设置阈值的时长。默认情况下，我们使用事务时长来衡量整个事务的长度。你也可以设置为使用 [link：Web Vital]。',
          ],
        'Define what a satisfactory response time is based on the calculation method above. This will affect how your [link1:Apdex] and [link2:User Misery] thresholds are calculated. For example, misery will be 4x your satisfactory response time.':
          [
            '根据上面的计算方法定义什么是一个满意的响应时间。这将影响你的 [link1：Apdex] 和 [link2：用户痛苦] 阈值的计算方式。例如，痛苦将是你的满意响应时间的四倍。',
          ],
        'Performance Issue Creation Rate': ['性能问题创建速率'],
        'This determines the rate at which performance issues are created. A rate of 0.0 will disable performance issue creation.':
          ['这决定了性能问题的创建速率。速率为 0.0 将禁用性能问题创建。'],
        'Send Occurrences To Platform': ['将发生次数发送到平台'],
        'This determines whether performance issue occurrences are sent to the issues platform.':
          ['这决定了性能问题的发生次数是否被发送到问题平台。'],
        'Create Issues Through Issues Platform': ['通过问题平台创建问题'],
        'This determines whether performance issues are created through the issues platform.':
          ['这决定了性能问题是否通过问题平台创建。'],
        'N+1 DB Queries Detection Enabled': ['已启用 N+1 数据库查询检测'],
        'Slow DB Queries Detection Enabled': ['已启用慢数据库查询检测'],
        'N+1 API Calls Detection Enabled': ['已启用 N+1 API 调用检测'],
        'Large Render Blocking Asset Detection Enabled': ['已启用大型渲染阻塞资源检测'],
        'Consecutive DB Queries Detection Enabled': ['已启用连续数据库查询检测'],
        'Large HTTP Payload Detection Enabled': ['已启用大型 HTTP 负载检测'],
        'DB On Main Thread Detection Enabled': ['已启用主线程上的数据库检测'],
        'File I/O on Main Thread Detection Enabled': ['已启用主线程上的文件 I/O 检测'],
        'Uncompressed Assets Detection Enabled': ['已启用未压缩资源检测'],
        'Consecutive HTTP Detection Enabled': ['已启用连续 HTTP 检测'],
        'HTTP/1.1 Overhead Enabled': ['已启用 HTTP/1.1 开销'],
        'Transaction Duration Regression Enabled': ['已启用事务持续时间回归'],
        'Function Duration Regression Enabled': ['已启用函数持续时间回归'],
        'Prioritize new releases': ['优先考虑新发布'],
        'Detection of this issue has been disabled. Contact our support team at [link:support@sentry.io].':
          ['已禁用此问题的检测。请联系我们的支持团队 [link：support@sentry.io]。'],
        'Prioritize dev environments': ['优先考虑开发环境'],
        'Prioritize low-volume transactions': ['优先考虑低流量事务'],
        'Minimum Total Duration': ['最短总时长'],
        'Deprioritize health checks': ['降低健康检查的优先级'],
        'Setting the value to 100ms, means that an eligible event will be detected as a N+1 DB Query Issue only if the total duration of the involved spans exceeds 100ms':
          [
            '将值设置为 100ms 意味着只有当涉及的跨度的总时长超过 100ms 时，符合条件的事件才会被检测为 N+1 数据库查询问题',
          ],
        'Minimum Duration': ['最短时长'],
        'Setting the value to 1s, means that an eligible event will be detected as a Slow DB Query Issue only if the duration of the involved db span exceeds 1s.':
          [
            '将值设置为 1s 意味着只有当涉及的数据库跨度的时长超过 1s 时，符合条件的事件才会被检测为慢数据库查询问题。',
          ],
        'Setting the value to 300ms, means that an eligible event will be detected as a N+1 API Calls Issue only if the total duration of the involved spans exceeds 300ms':
          [
            '将值设置为 300ms 意味着只有当涉及的跨度的总时长超过 300ms 时，符合条件的事件才会被检测为 N+1 API 调用问题',
          ],
        'Minimum FCP Ratio': ['最短 FCP 比率'],
        'Setting the value to 33%, means that an eligible event will be detected as a Large Render Blocking Asset Issue only if the duration of the involved span is at least 33% of First Contentful Paint (FCP).':
          [
            '将值设置为 33% 意味着只有当涉及的跨度的时长至少是首次内容绘制（FCP）的 33% 时，符合条件的事件才会被检测为大型渲染阻塞资源问题。',
          ],
        'Minimum Size': ['最短大小'],
        'Setting the value to 1MB, means that an eligible event will be detected as a Large HTTP Payload Issue only if the involved HTTP span has a payload size that exceeds 1MB.':
          [
            '将值设置为 1MB 意味着只有当涉及的 HTTP 跨度的负载大小超过 1MB 时，符合条件的事件才会被检测为大型 HTTP 负载问题。',
          ],
        'Frame Rate Drop': ['帧率下降'],
        'Setting the value to 60fps, means that an eligible event will be detected as a DB on Main Thread Issue only if database spans on the main thread cause frame rate to drop below 60fps.':
          [
            '将值设置为 60fps 意味着只有当主线程上的数据库跨度导致帧率下降到低于 60fps 时，符合条件的事件才会被检测为主线程上的数据库问题。',
          ],
        'Setting the value to 60fps, means that an eligible event will be detected as a File I/O on Main Thread Issue only if File I/O spans on the main thread cause frame rate to drop below 60fps.':
          [
            '将值设置为 60fps 意味着只有当主线程上的文件 I/O 跨度导致帧率下降到低于 60fps 时，符合条件的事件才会被检测为主线程上的文件 I/O 问题。',
          ],
        'Minimum Time Saved': ['最短节省时间'],
        'Setting the value to 100ms, means that an eligible event will be detected as a Consecutive DB Queries Issue only if the time saved by parallelizing the queries exceeds 100ms.':
          [
            '将值设置为 100ms 意味着只有当并行化查询节省的时间超过 100ms 时，符合条件的事件才会被检测为连续数据库查询问题。',
          ],
        'Setting the value to 512KB, means that an eligible event will be detected as an Uncompressed Asset Issue only if the size of the uncompressed asset being transferred exceeds 512KB.':
          [
            '将值设置为 512KB 意味着只有当正在传输的未压缩资源的大小超过 512KB 时，符合条件的事件才会被检测为未压缩资源问题。',
          ],
        'Setting the value to 500ms, means that an eligible event will be detected as an Uncompressed Asset Issue only if the duration of the span responsible for transferring the uncompressed asset exceeds 500ms.':
          [
            '将值设置为 500ms 意味着只有当负责传输未压缩资源的跨度的时长超过 500ms 时，符合条件的事件才会被检测为未压缩资源问题。',
          ],
        'Setting the value to 2s, means that an eligible event will be detected as a Consecutive HTTP Issue only if the time saved by parallelizing the http spans exceeds 2s.':
          [
            '将值设置为 2s 意味着只有当并行化 HTTP 跨度节省的时间超过 2s 时，符合条件的事件才会被检测为连续 HTTP 问题。',
          ],
        'Request Delay': ['请求延迟'],
        'Setting the value to 500ms, means that the HTTP request delay (wait time) will have to exceed 500ms for an HTTP Overhead issue to be created.':
          [
            '将值设置为 500ms 意味着 HTTP 请求延迟（等待时间）必须超过 500ms 才会创建 HTTP 开销问题。',
          ],
        'Captures more transactions for your new releases as they are being adopted': [
          '为你的新版本捕获更多事务，随着它们的采用',
        ],
        'Captures more traces from environments that contain "debug", "dev", "local", "qa", and "test"':
          ['从包含 “debug”、“dev”、“local”、“qa” 和 “test” 的环境中捕获更多跟踪'],
        "Balance high-volume endpoints so they don't drown out low-volume ones": [
          '平衡高流量端点，使它们不会淹没低流量端点',
        ],
        'Captures fewer of your health checks transactions': ['捕获较少的健康检查事务'],
        Images: ['图片'],
        'Enables images from real data to be displayed': ['启用显示真实数据的图片'],
        'Retention Priorities': ['保留优先级'],
        'Read docs': ['阅读文档'],
        'This action requires active super user access. Please re-authenticate to make changes.':
          ['此操作需要活跃的超级用户访问权限。请重新认证以进行更改。'],
        '### INTERNAL ONLY ### - Performance Issues Admin Detector Settings': [
          '### 仅限内部使用 ### - 性能问题管理员检测器设置',
        ],
        'Performance Issues - Detector Threshold Settings': ['性能问题 - 检测器阈值设置'],
        'Are you sure you wish to reset all detector thresholds?': [
          '你确定要重置所有检测器阈值吗？',
        ],
        'Reset All Thresholds': ['重置所有阈值'],
        "Legacy Integrations must be configured per-project. It's recommended to prefer organization integrations over the legacy project integrations when available. Visit the [link:organization integrations] settings to manage them.":
          [
            '遗留集必须按项目配置。如果可用，建议优先使用组织集成而不是遗留项目集成。访问 [link：组织集成] 设置来管理它们。',
          ],
        "Legacy Integrations must be configured per-project. It's recommended to prefer organization integrations over the legacy project integrations when available.":
          ['遗留集必须按项目配置。如果可用，建议优先使用组织集成而不是遗留项目集成。'],
        '+ %s more': ['+ %s 更多'],
        'No releases associated with this proguard mapping file': [
          '此 proguard 映射文件没有关联的版本',
        ],
        '%s Release': ['%s 版本'],
        '%s Releases': ['%s 版本'],
        associated: ['关联的'],
        'Filter mappings': ['过滤映射'],
        'ProGuard mapping files are used to convert minified classes, methods and field names into a human readable format. To learn more about proguard mapping files, [link: read the docs].':
          [
            'ProGuard 映射文件用于将简化类、方法和字段名转换为人类可读格式。要了解更多关于 proguard 映射文件的信息，请 [link：阅读文档]。',
          ],
        'Mappings can only be downloaded by users with organization [downloadRole] role[orHigher]. This can be changed in [settingsLink:Debug Files Access] settings.':
          [
            '只有具有组织 [downloadRole] 角色[或更高] 的用户才能下载映射。可以在 [settingsLink：调试文件访问] 设置中更改此设置。',
          ],
        'Download Mapping': ['下载映射'],
        'You do not have permission to delete mappings.': ['你没有权限删除映射。'],
        'Are you sure you want to remove this mapping?': ['你确定要删除这个映射吗？'],
        'Remove Mapping': ['删除映射'],
        'These rules can be configured at the organization level in [linkToOrganizationSecurityAndPrivacy].':
          [
            '这些规则可以在 [linkToOrganizationSecurityAndPrivacy] 中的组织级别进行配置。',
          ],
        'The environment name (e.g. production).': ['环境名称（例如，生产环境）。'],
        'You do not have permission to delete bundles.': ['你没有权限删除包。'],
        'Are you sure you want to delete this bundle?': ['你确定要删除这个包吗？'],
        'Delete Bundle': ['删除包'],
        'Associated Releases': ['关联的版本'],
        'Show Less': ['显示更少'],
        'Show All': ['显示全部'],
        'No releases associated with this bundle': ['此包没有关联的版本'],
        'Date Uploaded': ['上传日期'],
        'Removing artifacts…': ['正在删除工件…'],
        'Artifacts removed.': ['工件已删除。'],
        'Unable to remove artifacts. Please try again.': ['无法删除工件。请重试。'],
        'Bundle ID': ['包 ID'],
        'Date Modified': ['修改日期'],
        'Switch to descending order': ['切换到降序'],
        'Switch to ascending order': ['切换到升序'],
        'These source map archives help Sentry identify where to look when Javascript is minified. By providing this information, you can get better context for your stack traces when debugging. To learn more about source maps, [link: read the docs].':
          [
            '这些源映射归档文件帮助 Sentry 确定在 JavaScript 被压缩时在哪里查找。通过提供此信息，你可以在调试时获得更好的堆栈跟踪上下文。要了解更多关于源映射的信息，请 [link：阅读文档]。',
          ],
        'Filter by Bundle ID, Debug ID or Release': ['按包 ID、调试 ID 或版本过滤'],
        'Filter by Name': ['按名称过滤'],
        'No artifact bundles match your search query.': ['没有工件包匹配你的搜索查询。'],
        'No artifact bundles found for this project.': ['为此项目没有找到工件包。'],
        'No release bundles match your search query.': ['没有版本包匹配你的搜索查询。'],
        'No release bundles found for this project.': ['为此项目没有找到版本包。'],
        'A Release was created, but no artifacts were uploaded': [
          '已创建版本，但未上传任何工件',
        ],
        'No bundle to delete': ['没有包可删除'],
        'You do not have permission to delete artifacts.': ['你没有权限删除工件。'],
        'Are you sure you want to remove all artifacts in this archive?': [
          '你确定要删除此归档中的所有工件吗？',
        ],
        'Remove All Artifacts': ['删除所有工件'],
        'Filter by Path or ID': ['按路径或 ID 过滤'],
        'Filter by Path': ['按路径过滤'],
        'No artifacts match your search query.': ['没有工件匹配你的搜索查询。'],
        'There are no artifacts in this bundle.': ['此包中没有工件。'],
        'There are no artifacts in this archive.': ['此归档中没有工件。'],
        'Sourcemap Reference:': ['源映射引用：'],
        'Debug ID:': ['调试 ID：'],
        'No distribution set': ['未设置分发'],
        'Indexed RAM Bundle': ['索引 RAM 包'],
        'Artifacts can only be downloaded by users with organization [downloadRole] role[orHigher]. This can be changed in [settingsLink:Debug Files Access] settings.':
          [
            '只有具有组织 [downloadRole] 角色[或更高] 的用户才能下载工件。可以在 [settingsLink：调试文件访问] 设置中更改此设置。',
          ],
        'Download Artifact': ['下载工件'],
        'Deleting bundle…': ['删除包…'],
        'Bundle deleted.': ['包已删除。'],
        'Unable to delete bundle. Please try again.': ['无法删除包。请重试。'],
        'An error occurred while deleting the tag': ['删除标签时发生错误'],
        'Open the Crash Report Modal': ['打开崩溃报告模态框'],
        "Don't rely on stack traces and graphs alone to understand\n            the cause and impact of errors. Enable the User Feedback Widget to collect\n            your users' comments at anytime, or enable the Crash Report Modal to collect additional context only when an error occurs.":
          [
            '不要仅依赖堆栈跟踪和图表来理解错误的原因和影响。启用用户反馈小部件以随时收集用户的评论，或者启用崩溃报告模态框以仅在发生错误时收集额外的上下文。',
          ],
        'Organization Auth Tokens': ['组织认证令牌'],
        'Waiting for wizard to connect': ['等待向导连接'],
        'Return to your terminal to complete your setup.': ['返回终端完成设置。'],
        'Not all features have been implemented for shared Performance Issues and these issues may be missing context.':
          ['尚未为共享的性能问题实现所有功能，这些问题可能缺少上下文。'],
        'Last seen ': ['最后看到 '],
        'View on GitHub': ['在 GitHub 上查看'],
        'Edit on GitHub': ['在 GitHub 上编辑'],
        'Traces lets you search for individual spans that make up a trace, linked by a trace id.':
          ['跟踪让你可以搜索构成跟踪的单个跨度，通过跟踪 ID 进行链接。'],
        'The metric query [metricQuery] is filtering the results below.': [
          '指标查询 [metricQuery] 正在过滤下面的结果。',
        ],
        'missing instrumentation': ['缺少监控'],
        'This trace contains %s more project.': ['此跟踪包含 %s 更多项目。'],
        'This trace contains %s more projects.': ['此跟踪包含 %s 更多项目。'],
        '[more][space]more [matching]spans can be found in the trace.': [
          '在跟踪中可以找到更多 [匹配] 跨度。',
        ],
        'All Matching Spans': ['所有匹配跨度'],
        'Find traces where a span is': ['查找跨度为的跟踪'],
        'and another span where': ['和另一个跨度为'],
        'Remove Span': ['删除跨度'],
        'Add Another Span': ['添加另一个跨度'],
        'Toggle trace details': ['切换跟踪详情'],
        'Missing Trace Root': ['缺少跟踪根'],
        '[numerator][space]of[space][denominator]': ['[分子] 与 [分母]'],
        'Trace Root': ['跟踪根'],
        'Total Spans': ['总跨度'],
        'Matching Spans': ['匹配跨度'],
        Timeline: ['时间线'],
        'No trace results found': ['未找到跟踪结果'],
        'Try adjusting your filters or refer to [docSearchProps].': [
          '尝试调整过滤器或参考 [docSearchProps]。',
        ],
        'docs for search properties': ['搜索属性的文档'],
        'Issue Notification Unsubscribe': ['问题通知退订'],
        'There was an error loading unsubscribe data. Your link may have expired.': [
          '加载退订数据时出错。你的链接可能已过期。',
        ],
        'You are about to unsubscribe from [docsLink] for the [viewLink].': [
          '你即将退订 [docsLink] 的 [viewLink]。',
        ],
        'workflow notifications': ['工作流通知'],
        'selected %s': ['已选 %s'],
        'Go to New User Feedback': ['查看新的用户反馈'],
        'Feedback submitted by users who experienced an error while using your application, including their name, email address, and any additional comments.':
          [
            '用户在使用你的应用程序时遇到错误而提交的反馈，包括他们的姓名、电子邮件地址和任何其他评论。',
          ],
        'Go back to the new feedback layout.': ['返回新的反馈布局。'],
        'Set up now': ['立即设置'],
        'What do users think?': ['用户怎么看？'],
        "You can't read minds. At least we hope not. Ask users for feedback on the impact of their crashes or bugs and you shall receive.":
          [
            '你不能读心术。至少我们希望如此。询问用户对他们遇到的崩溃或漏洞的影响的反馈，你就会收到。',
          ],
      };
      var orgin = {
        Username: ['用户名'],
        Permissions: ['权限'],
        'Default (let Sentry decide)': ['默认 (由 Sentry 为您决定)'],
        'Most recent call last': ['最近的调用最后显示'],
        'Most recent call first': ['最近的调用最先显示'],
        Info: ['信息'],
        Remove: ['移除'],
        Configure: ['配置'],
        Continue: ['继续'],
        Priority: ['优先级'],
        'Last Seen': ['最后出现时间'],
        'First Seen': ['首次出现时间'],
        Frequency: ['频率'],
        Score: ['得分'],
        'Unknown Error': ['未知错误'],
        Name: ['姓名'],
        URL: ['URL'],
        Project: ['项目'],
        Active: ['激活'],
        Unresolved: ['未解决'],
        Resolved: ['已解决'],
        Ignored: ['已忽略'],
        error: ['错误'],
        Events: ['事件'],
        Users: ['用户'],
        name: ['姓名'],
        user: ['用户'],
        'Page Not Found': ['页面未找到'],
        'The page you are looking for was not found.': ['你要查找的页面没找到。'],
        'You may wish to try the following:': ['您可能会想尝试以下内容'],
        Cancel: ['取消'],
        'Confirm Password': ['确认密码'],
        'Help us keep your account safe by confirming your identity.': [
          '验证您的身份以协助我们确保您的账户安全',
        ],
        'Lost your password?': ['密码丢失？'],
        'Sign out': ['退出'],
        Submit: ['提交'],
        Next: ['下一个'],
        Error: ['错误'],
        Upgrade: ['升级'],
        'Sign in to continue': ['登录并继续'],
        Register: ['注册'],
        'Single Sign-On': ['单点登录'],
        'Privacy Policy': ['隐私政策'],
        'Organization ID': ['组织ID'],
        Approve: ['同意'],
        Deny: ['拒绝'],
        Auth: ['权限'],
        'Request to Join': ['请求加入'],
        'Save Changes': ['保存更改'],
        Method: ['方法'],
        Query: ['查询'],
        Fragment: ['片段'],
        'ID:': ['ID:'],
        'Username:': ['用户名:'],
        'Create Issue': ['创建问题'],
        'Link Issue': ['连接问题'],
        'Restore Organization': ['恢复组织'],
        'Deletion Scheduled': ['计划删除'],
        'Two-Factor Authentication': ['二步验证'],
        m: ['m'],
        never: ['从不'],
        '1 day': ['1天'],
        Account: ['账户'],
        'username or email': ['用户名或邮箱'],
        Password: ['密码'],
        password: ['密码'],
        Email: ['电子邮件'],
        Close: ['关闭'],
        'Jane Bloggs': ['简·博格斯'],
        'Default Role': ['默认角色'],
        '%s@%s': ['%s@%s'],
        'Unable to delete the saved query': ['无法删除保存的查询'],
        'Unable to load saved queries': ['无法加载已保存的查询'],
        'Unable to load saved query': ['无法加载已保存的查询'],
        'Unable to create your saved query': ['无法创建您保存的查询'],
        'Unable to update your saved query': ['无法更新您保存的查询'],
        'Saving changes...': ['保存修改'],
        'Unable to cancel deletion.': ['无法取消删除'],
        '[repo] has been successfully added.': ['[repo]已经成功删除。'],
        'Unable to add repository.': ['无法添加仓库'],
        'Disabled %s for %s': ['禁用%s for %s'],
        'Failed to disable %s for %s': ['禁用失败 %s for %s'],
        'Enabled %s for %s': ['启用%s for %s'],
        'Failed to enabled %s for %s': ['启用失败%s for %s'],
        'Unable to delete repository.': ['无法删除仓库'],
        'Enabling...': ['启用中...'],
        'Plugin was enabled': ['插件已被启用'],
        'Unable to enable plugin': ['无法启用插件'],
        'Disabling...': ['禁用中...'],
        'Plugin was disabled': ['插件已被禁用'],
        'Unable to disable plugin': ['无法禁用插件'],
        'Unable to fetch all project stats': ['未能获取全部项目状态'],
        '[project] was successfully removed': ['[project] 已成功移除'],
        'Error removing [project]': ['移除出错 [project]'],
        'A request was sent to move [project] to a different organization': [
          '一个请求已经被发送用于转移项目 [project] 到另一个组织',
        ],
        'Error transferring [project]': ['转移 [project] 时出错'],
        '[team] has been added to the [project] project': [
          '[team] 已经被添加至 [project] 项目',
        ],
        'Unable to add [team] to the [project] project': [
          '未能添加 [team] 到 [project] 项目',
        ],
        '[team] has been removed from the [project] project': [
          '[team] 已经被从 [project] 项目中移除',
        ],
        'Unable to remove [team] from the [project] project': [
          '未能从 [project] 项目中移除 [team]',
        ],
        'Unable to load saved searches': ['无法加载保存的搜索'],
        '%s successfully removed.': ['%s 删除成功。'],
        'Unable to remove %s integration': ['无法移除 %s 集成'],
        'Token successfully added.': ['令牌添加成功'],
        'Unable to create token': ['无法创建令牌'],
        'Token successfully deleted.': ['令牌创建成功'],
        'Unable to delete token': ['无法删除令牌'],
        'You have too many unique tags and some have been truncated': [
          '你有太多的不同标签了，一些已经被缩减',
        ],
        '[team] has been added to the [organization] organization': [
          '[team] 已经被添加到 [organization] 组织',
        ],
        'Unable to create [team] in the [organization] organization': [
          '未能在 [organization] 组织中创建 [team]',
        ],
        '[team] has been removed from the [organization] organization': [
          '[team] 已经从 [organization] 组织中移除',
        ],
        'Unable to remove [team] from the [organization] organization': [
          '未能从 [organization] 组织中移除 [team]',
        ],
        'You do not have sufficient permissions to access this.': [
          '你没有足够的权限访问该内容。',
        ],
        'This feature is coming soon!': ['这个特性即将到来！'],
        'Enables the %s feature': ['开启%s特性'],
        'This feature is not enabled on your Sentry installation.': [
          '这个特性在您的Sentry服务上没有开启。',
        ],
        Help: ['帮助'],
        'Ignore this issue until it affects an additional…': [
          '忽略这个问题直到它影响到其他...',
        ],
        'Number of users': ['用户数量'],
        Ignore: ['忽略'],
        'For…': ['直到...'],
        Custom: ['自定义'],
        'Until this occurs again…': ['直到该事件再次出现...'],
        '%s time…': ['%s 次…'],
        'from now': ['从现在起'],
        'Until this affects an additional…': ['直到该事件影响到另外...'],
        '%s user…': ['%s 个用户'],
        'per hour': ['1小时'],
        'per day': ['每天'],
        'per week': ['每周'],
        'Change status to unresolved': ['更改状态为未解决'],
        'Ignore this issue until it occurs again…': ['忽略该问题直到其再次复现...'],
        'Number of times': ['次数'],
        Unresolve: ['未解决'],
        'Set up release tracking in order to use this feature.': [
          '设置发布跟踪以使用这个新特性',
        ],
        'Resolved In': ['将会解决于'],
        'The next release': ['下一个版本'],
        'The current release': ['当前版本'],
        'The current release (%s)': ['当前版本（%s）'],
        'Error fetching project': ['获取项目出错。'],
        Resolve: ['解决'],
        'This event is resolved due to the Auto Resolve configuration for this project': [
          '该事件已通过本项目的自动解决配置解决',
        ],
        'You can edit this comment due to your superuser status': [
          '由于您是超级用户所以您可以编辑该评论',
        ],
        Edit: ['编辑'],
        'Are you sure you wish to delete this comment?': ['确定要删除该评论？'],
        'Save Comment': ['保存评论'],
        'Post Comment': ['发布评论'],
        'Unable to post comment': ['发表评论失败'],
        Write: ['编写'],
        Preview: ['预览'],
        'Markdown supported': ['支持 Markdown'],
        'Add a comment.\nTag users with @, or teams with #': [
          '添加评论。\n用@标记用户，或#标记团队',
        ],
        Undo: ['重做'],
        Teams: ['团队'],
        'Filter teams and people': ['过滤团队和人员'],
        'Clear Assignee': ['清除分配人'],
        'Invite Member': ['邀请新成员'],
        'Assigned to [name]': ['分配给 [name]'],
        'Resolve Your Issues': ['解决您的问题'],
        'Deal With It Later, Or Never': ['稍后处理，或不处理'],
        Projects: ['项目'],
        Issues: ['问题'],
        Performance: ['性能'],
        Releases: ['版本'],
        'Identify Your Issues': ['确定您的问题'],
        Discover: ['发现'],
        Issue: ['问题'],
        Details: ['详细信息'],
        Exception: ['异常'],
        Tags: ['标签'],
        Breadcrumbs: ['面包屑'],
        Release: ['版本'],
        'Annoy the Right People': ['惹恼合适的人'],
        'Find Information You Can Use': ['查找您需要的信息'],
        'Narrow Down Suspects': ['缩小嫌疑范围'],
        'Retrace Your Steps': ['追溯您的操作步骤'],
        Dismiss: ['解雇'],
        'Enough Already': ['已经足够'],
        'Got It': ['知道了'],
        'You are not authorized to access this resource.': ['你无权访问这个资源。'],
        'Search...': ['搜索...'],
        'Successfully saved avatar preferences': ['成功保存头像。'],
        'Use initials': ['使用初始值'],
        'Upload an image': ['上传一张图像'],
        'Use Gravatar': ['使用 Gravatar'],
        Avatar: ['头像'],
        'Avatar Type': ['头像类型'],
        'Gravatars are managed through ': ['Gravatars 被它管理：'],
        'Save Avatar': ['保存头像'],
        'Please upload an image larger than [size]px by [size]px.': [
          '请上传一张大于 [size]px x [size]px 的图片。',
        ],
        'Change Photo': ['修改照片'],
        'That is not a supported file type.': ['不支持该文件类型'],
        'Success!': ['成功！'],
        'Unable to save changes. Please try again.': ['无法保存修改。请重试。'],
        'An error occurred.': ['发生了一个错误。'],
        Current: ['当前'],
        Previous: ['上一个'],
        'previous %s': ['前 %s'],
        'Error loading chart data': ['加载图表数据出错'],
        'Error fetching releases': ['获取版本时出错'],
        'Show More': ['展示更多'],
        Collapse: ['收起'],
        'Unknown Commit': ['未知提交'],
        'No message provided': ['没有提供消息'],
        '[author] committed [timeago]': ['[author] 提交于 [timeago]'],
        'Unknown author': ['未知作者'],
        Confirm: ['确认'],
        'Please enter %s to confirm the deletion': ['请输入%s确认删除'],
        'Select an organization and a project to continue': ['选择一个组织和项目以继续'],
        'Select an organization to continue': ['选择一个组织以继续'],
        'Select a project to continue': ['选择一个项目继续'],
        'My Projects': ['我的项目'],
        'All Projects': ['全部项目'],
        'You have no projects. Click [link] to make one.': [
          '你没有项目。 点击[link]以新建一个。',
        ],
        here: ['这里'],
        'Select an Organization': ['选择一个组织'],
        'e.g. 100': ['例如：100'],
        'Time window': ['时间窗口'],
        'e.g. per hour': ['例如：每小时'],
        '(Optional) If supplied, this rule will apply as a rate of change.': [
          '（可选的）如果提供，此规则将作为更改率应用',
        ],
        'Please enter a valid date in the future': ['请输入一个未来的日期'],
        'Ignore this issue until …': ['忽略该问题直到 ...'],
        Date: ['日期'],
        'Time (UTC)': ['时间（UTC）'],
        Created: ['创建'],
        Version: ['版本'],
        'e.g. 1.0.4': ['例如：1.0.4'],
        'Sort by': ['排序依据'],
        'Y-Axis': ['Y 坐标'],
        "We're working on it...": ['正在开发中...'],
        'Export All to CSV': ['全部导出为 CSV'],
        'Symbol tables are used as a fallback when full debug information is not available':
          ['当调试信息文件不可用时，符号表将作为备用被使用。'],
        Documentation: ['快速链接'],
        'No results found': ['没有找到结果'],
        Description: ['描述'],
        Change: ['修改'],
        Filter: ['过滤器'],
        'Open in Discover': ['在发现中打开'],
        'No items': ['没有元素'],
        'Filter search': ['过滤搜索'],
        found: ['发现'],
        'Something went horribly wrong rendering this page.\nWe use a decent error reporting service so this will probably be fixed soon. Unless our error reporting service is also broken. That would be awkward.\nAnyway, we apologize for the inconvenience.':
          [
            '渲染页面时出现了一些错误，我们使用了一个不错的错误报告服务，这个问题可能将很快被修复，除非我们的错误报告服务也损坏了。那将十分令人尴尬。总而言之，我们为带来的不变而道歉。',
          ],
        'There was a problem rendering this component': ['渲染组件时发生了问题'],
        'Or see your sample event': ['或者看你的样例事件'],
        'Select a project to create a sample event': ['选择一个项目来创建报告示例'],
        'Create a sample event': ['创建样例事件'],
        'Waiting for events…': ['等待事件...'],
        'Installation Instructions': ['安装指引'],
        Setup: ['设置'],
        Retry: ['重试'],
        'Fill out a report': ['填写报告'],
        'Service status': ['服务状态'],
        'Contact support': ['联系支持'],
        'The events are still processing and are on their way': ['事件仍在处理中'],
        'The events have been deleted': ['该事件已经被删除'],
        'There is an internal systems error or active issue': [
          '内部系统错误或活动的问题',
        ],
        'This could be due to a handful of reasons:': ['这个可能有以下几个原因：'],
        'No events were found for the currently selected environments': [
          '当前所选环境未找到事件',
        ],
        'Sorry, the events for this issue could not be found.': [
          '对不起，这个问题的事件找不到了',
        ],
        'Not sure what to do? [link:Return to the dashboard]': [
          '不确定接下来该做什么？ [link:返回仪表盘页面]',
        ],
        ID: ['ID'],
        'Start Time': ['开始时间'],
        Device: ['设备'],
        'Build Type': ['构建类型'],
        'Build ID': ['构建 ID'],
        'Build Name': ['构建名称'],
        App: ['应用'],
        'Operating System': ['操作系统'],
        User: ['用户'],
        'Graphics Processing Unit': ['图形处理单元（GPU）'],
        'Free Storage': ['可用空间'],
        'Storage Size': ['空间大小'],
        'External Storage Size': ['外部存储大小'],
        Simulator: ['模拟器'],
        'Boot Time': ['启动时间'],
        Timezone: ['时区'],
        'Device Type': ['设备类型'],
        Architectures: ['架构'],
        Brand: ['品牌'],
        Charging: ['充电中'],
        'Connection Type': ['连接类型'],
        Id: ['ID'],
        Language: ['语言'],
        'Low Memory': ['低内存'],
        'Free Memory': ['可用内存'],
        'Memory Size': ['内存大小'],
        'Usable Memory': ['可用显存'],
        Manufacturer: ['制造商'],
        Online: ['在线'],
        'Screen Density': ['屏幕分辨率'],
        'Screen DPI': ['屏幕 DPI'],
        'Screen Height Pixels': ['屏幕高度像素'],
        'Screen Resolution': ['屏幕分辨率'],
        'Screen Width Pixels': ['屏幕宽度像素'],
        Model: ['型号'],
        'CPU Description': ['CPU 描述'],
        Architecture: ['架构'],
        'Battery Level': ['电池水平'],
        'Battery Status': ['电池状态'],
        Orientation: ['屏幕方向'],
        Memory: ['内存'],
        Capacity: ['容量'],
        'Multi-Thread rendering': ['多线程渲染'],
        'API Type': ['API 类型'],
        'GPU ID': ['GPU ID'],
        'Kernel Version': ['内核版本'],
        Rooted: ['已 Root'],
        yes: ['是'],
        no: ['否'],
        Status: ['状态'],
        'IP Address': ['IP 地址'],
        'Unknown Browser': ['未知的浏览器'],
        'Unknown Runtime': ['未知的运行时'],
        'Unknown Device': ['未知的设备'],
        'Arch:': ['架构：'],
        'Model:': ['型号：'],
        'Version:': ['版本：'],
        'Unknown GPU': ['未知GPU'],
        'Vendor:': ['供应商：'],
        Unknown: ['未知'],
        'Unknown OS': ['未知的操作系统'],
        'Kernel:': ['内核：'],
        'Unknown User': ['未知的用户'],
        Expand: ['展开'],
        Hide: ['隐藏'],
        Show: ['显示'],
        Delete: ['删除'],
        'Are you sure you wish to delete this file?': ['您确定要删除这个文件？'],
        'Insufficient permissions to delete attachments': ['你没有足够的权限删除附件'],
        'Insufficient permissions to download attachments': ['你没有足够的权限下载附件'],
        Download: ['下载'],
        'Attachments (%s)': ['附件 (%s)'],
        Size: ['大小'],
        Actions: ['动作'],
        'Suspect Commits': ['疑似的提交'],
        'Show less': ['显示更少'],
        'Show more': ['显示更多'],
        'Read the docs': ['阅读文档'],
        'Remind me next week': ['下周提醒我'],
        Snooze: ['冻结'],
        'Dismiss for this project': ['在此项目中关闭'],
        Raw: ['原始数据'],
        Formatted: ['已格式化的'],
        'There was an error rendering this data.': ['渲染数据时发生错误。'],
        'Latest Event Not Available': ['最新的事件不可用'],
        'Additional Data': ['附加数据'],
        'Crashed Process': ['崩溃进程'],
        'Event ID': ['事件 ID'],
        'Preview JSON': ['预览 JSON'],
        SDK: ['SDK'],
        'show [numberOfFrames] similiar': ['显示 [numberOfFrames] 个相似的'],
        'collapse [numberOfFrames] similiar': ['折叠 [numberOfFrames] 个相似的'],
        'Hash mismatch': ['Hash值不匹配'],
        Type: ['类型'],
        'Grouping Config': ['归组配置'],
        Grouping: ['归组'],
        By: ['以'],
        'All values': ['所有值'],
        'Fingerprint values': ['指纹值'],
        Hash: ['Hash'],
        'Events with the same hash are grouped together': ['hash值相同的事件被归为一组'],
        'Event Grouping Information': ['事件分组信息'],
        'Hide Details': ['隐藏详情'],
        'Show Details': ['显示详情'],
        'grouped by': ['分组依据'],
        'Invalid URL': ['无效的 URL'],
        Warning: ['警告'],
        '%s before': ['%s 前'],
        Category: ['类别'],
        Level: ['级别'],
        Time: ['时间'],
        'HTTP request': ['HTTP 请求'],
        System: ['系统'],
        Default: ['默认'],
        'User Action': ['用户动作'],
        Navigation: ['导航'],
        Debug: ['调试'],
        code: ['异常码'],
        'Frames %d until %d were omitted and not available.': [
          '栈帧 %d 到 %d 将会被忽略并且不可用。',
        ],
        Full: ['全部'],
        Original: ['原始的'],
        Symbolicated: ['标记'],
        Minified: ['最小化的'],
        Unsymbolicated: ['取消标记'],
        'App Only': ['仅限应用程序'],
        'most recent call first': ['最近的调用最先显示'],
        'most recent call last': ['最近的调用最后显示'],
        Report: ['报告'],
        'CSP Report': ['CSP 报告'],
        'proguard mapping': ['混淆映射'],
        'Debug ID': ['调试ID'],
        'Images Loaded': ['图片加载'],
        Symbolication: ['标记'],
        Availability: ['可用性'],
        ok: ['好的'],
        unused: ['未使用的'],
        failed: ['失败'],
        'An internal error occurred while handling this image.': [
          '当处理这张图片时发生了一个内部错误。',
        ],
        'Show all images': ['显示所有图像'],
        details: ['详情'],
        'Search images…': ['搜索图片...'],
        Path: ['路径'],
        'No additional details are available for this frame.': ['本帧中没有附加的信息。'],
        in: ['位置'],
        'at line': ['行'],
        within: ['在'],
        'Source Map': ['源映射'],
        registers: ['注册'],
        Hexadecimal: ['十六进制'],
        Numeric: ['数值'],
        'Toggle Context': ['显示/隐藏上下文'],
        'Found by stack scanning': ['通过栈扫描发现'],
        'Objective-C -> Swift shim frame': ['Objective-C -> Swift shim框架'],
        'Hidden function from bitcode build': ['来源于字节码构建的隐藏函数'],
        'No function name was supplied by the client SDK.': [
          '客户端 SDK 未提供函数名称。',
        ],
        'Unknown system frame. Usually from beta SDKs': [
          '未知的系统框架，通常源于测试版SDK。',
        ],
        Message: ['消息'],
        'Query String': ['查询字符串'],
        Cookies: ['Cookies'],
        Headers: ['标头'],
        Environment: ['环境'],
        Body: ['正文'],
        'Filter By': ['过滤依据'],
        Template: ['模板'],
        Filename: ['文件名'],
        Label: ['标签'],
        unknown: ['未知'],
        'Thread #[id]:': ['线程 #[id]:'],
        Other: ['其它'],
        Packages: ['软件包'],
        'View event': ['视图事件'],
        '<unknown>': ['<unknown>'],
        beta: ['内测'],
        API: ['API'],
        Docs: ['文档'],
        Contribute: ['贡献'],
        'Migrate to SaaS': ['迁移至 SaaS'],
        'There was an error saving your changes.': ['保存你的变更时出错'],
        'Unable to save your changes. Please correct the following errors try again.': [
          '无法保存你的修改。请更正下面的错误后重试。',
        ],
        'Unable to save your changes. Please ensure all fields are valid and try again.':
          ['无法保存你的修改。确保所有字段都正确，请重试。'],
        'There was a problem with the request.': ['请求出错。'],
        '%s is not a member of project': ['%s不是项目成员之一'],
        'Add %s to project': ['向项目中添加%s'],
        'You do not have permission to add team to project.': [
          '您没有向项目中添加团队的权限。',
        ],
        'Linked %s Integration': ['链接 %s 集成'],
        'Successfully unlinked issue.': ['成功与问题解除链接。'],
        'Unable to unlink issue.': ['未能与问题解除链接。'],
        Create: ['创建'],
        Link: ['链接'],
        'Successfully linked issue.': ['成功链接问题。'],
        'Successfully created issue.': ['成功创建问题。'],
        'Set up Issue Tracking': ['设置问题跟踪'],
        Regression: ['衰退'],
        ago: ['之前'],
        old: ['之后'],
        '[name] Issue': ['[name] 问题'],
        'Unable to unlink issue': ['未能与问题解除链接。'],
        'First seen': ['首次出现时间'],
        'Last seen': ['最后出现时间'],
        'All Environments': ['全部环境'],
        'selected environments': ['选择环境'],
        'Last 24 Hours': ['最近 24 小时'],
        'Last 30 Days': ['最近 30 天'],
        'Link [name] Issue': ['关联[name]问题'],
        'Sentry Issue: [%s](%s)%s': ['Sentry 问题： [%s](%s)%s'],
        'External Issues': ['外部问题'],
        'There was an error while trying to load participants.': ['载入参与者时出错。'],
        'No tags found': ['没有找到标签'],
        'View more': ['显示更多'],
        Commits: ['提交'],
        'Ownership Rules': ['所有权规则'],
        'Learn more': ['了解更多'],
        'Create Ownership Rule': ['创建所有权规则'],
        'Suggested Assignees': ['推荐分配人'],
        'Click to assign': ['点击分配'],
        'Inactive Integrations': ['无效集成'],
        delete: ['删除'],
        'Error loading events': ['加载事件出错'],
        Occurrences: ['发生次数'],
        'Users Affected': ['受影响的用户'],
        'Nothing to show here, move along.': ['没有任何东西可以显示。'],
        "There don't seem to be any events fitting the query.": [
          '似乎没有任何适合查询条件的事件。',
        ],
        events: ['事件'],
        Assignee: ['分配人'],
        'Unknown Author': ['未知作者'],
        'There was an error loading a component.': ['载入组件时出错。'],
        'There was an error loading data.': ['载入数据出错。'],
        Save: ['保存'],
        'Search for projects, teams, settings, etc...': ['搜索项目、团队、设置等等...'],
        'Create Team': ['创建团队'],
        'Search events': ['搜索事件'],
        Back: ['返回'],
        Update: ['更新'],
        'Private Key': ['私钥'],
        'A display name for this repository': ['此存储库的显示名称'],
        'New Repository': ['创建仓库'],
        'Download Url': ['下载地址'],
        'Access Key ID': ['Access Key ID'],
        'Access key to the AWS account. Credentials can be managed in the [link].': [
          'AWS账号的Access Key， 该认证信息可在此页面管理： [link]。',
        ],
        'Secret Access Key': ['Secret Access Key'],
        Bucket: ['桶'],
        'Name of the GCS bucket. Read permissions are required to download symbols.': [
          'GCS bucket名，必须具有读权限以下载数据。',
        ],
        Done: ['完成'],
        'Could not invite user': ['无法邀请用户'],
        'Sending organization invitations...': ['发送组织邀请...'],
        'Sending invite requests...': ['发送邀请请求中...'],
        'Sent [invites], [failed] failed to send.': [
          '已发送 [invites], [failed] 发送失败.',
        ],
        'Sent [invites]': ['已发送 [invites]'],
        'Send invites (%s)': ['发送邀请 (%s)'],
        'Invite New Members': ['邀请新成员'],
        'Email addresses': ['Email 地址'],
        Role: ['角色'],
        'Add to team': ['加入团队'],
        'Add another': ['添加其他'],
        'Send more invites': ['发送更多邀请'],
        'Get Recovery Codes': ['获取恢复码'],
        'Two-Factor Authentication Enabled': ['双重认证开启'],
        'Two-factor authentication via %s has been enabled.': [
          '通过 %s 的双重认证已经启用。',
        ],
        'You should now set up recovery options to secure your account.': [
          '现在，您应该设置恢复选项以保护您的账户安全。',
        ],
        'We recommend adding a phone number as a backup 2FA method.': [
          '我们建议添加一个手机号码作为备份的2FA方式。',
        ],
        'Recovery codes are the only way to access your account if you lose\n                  your device and cannot receive two-factor authentication codes.':
          ['`恢复代码` 用于您丢失了设备并无法使用二步验证时进行访问'],
        'Skip this step': ['跳过这一步'],
        'Add a Phone Number': ['添加一个电话号码'],
        'Redirecting to New Project...': ['跳转到新项目...'],
        'The project slug has been changed.': ['项目slug已经被修改。'],
        'You will be redirected to the new project [project] in [timer] seconds...': [
          '在[timer]秒内，您将被跳转至新项目[project]...',
        ],
        'Continue to %s': ['继续%s'],
        'Accept & Install': ['接受并安装'],
        'Questions to answer': ['待解答'],
        'You are attempting to access a resource that requires superuser access, please re-authenticate as a superuser.':
          ['您正在尝试访问需要超级用户访问权限的资源，请以超级用户身份重新认证。'],
        'Incorrect password': ['密码错误'],
        'Confirm Password to Continue': ['认证密码以继续'],
        'You will need to reauthenticate to continue.': ['您需要再次认证以继续'],
        'Email Address': ['Email 地址'],
        'Unable to send team request': ['无法发起加入团队请求'],
        'You do not have permission to add members to the #[team] team, but we will send a request to your organization admins for approval.':
          [
            '您没有权限直接为#[team] 团队添加成员，但我们将会将该添加请求发送给组织管理员审批。',
          ],
        'This issue has been ignored until %s': ['这个问题会被忽略直到 %s'],
        'This issue has been ignored until it occurs %s time(s) in %s': [
          '这个问题将会被忽略直到其发生%s次在%s之内',
        ],
        'This issue has been ignored until it occurs %s more time(s)': [
          '这个问题将会被忽略直到其发生%s次',
        ],
        'This issue has been ignored until it affects %s user(s) in %s': [
          '这个问题将会被忽略直到其影响到%s用户在%s之内',
        ],
        'This issue has been ignored until it affects %s more user(s)': [
          '这个问题将会被忽略直到其影响到%s用户',
        ],
        'This issue has been ignored': ['该问题已被忽略'],
        'You will not be notified of any changes and it will not show up by default in feeds.':
          ['您将接不到任何更改通知，订阅信息中默认也不显示。'],
        Oldest: ['最早'],
        Older: ['较旧'],
        Newer: ['较新'],
        Newest: ['最新'],
        'You do not have permission to join a team.': ['你没有加入团队的权限'],
        'Join a Team': ['加入团队'],
        'You do not have permission to create a project.': ['你没有创建项目的权限。'],
        'Create project': ['新建项目'],
        'Community Forum': ['社区论坛'],
        "Not sure what to do? We're here for you!": [
          '不知道该怎么办？ 我们在这里为您服务！',
        ],
        'Just skip': ['直接跳过'],
        'This task has been started by [user]': ['此任务已由 [user] 启动'],
        'Task in progress...': ['任务进行中...'],
        'Collect user feedback when your application crashes': [
          '当你的应用崩溃时收集用户的反馈',
        ],
        'Set up issue tracking': ['设置问题跟踪'],
        'Link to Sentry issues within your issue tracker': [
          '在你的问题跟踪器中链接到 Sentry 问题页面',
        ],
        'Create a project': ['创建新项目'],
        'Loading…': ['加载中...'],
        'Filter environments': ['过滤环境'],
        'You have no environments': ['没有环境'],
        'No environments found': ['未找到环境'],
        'Issues Stream': ['问题流'],
        'Apply Filter': ['应用筛选'],
        page: ['页'],
        Apply: ['应用'],
        'Back to Issues Stream': ['返回问题流'],
        'Filter projects': ['过滤项目'],
        'You have no projects': ['你没有任何项目。'],
        'No projects found': ['没有找到任何项目'],
        "You don't have permission to add a project": ['您没有添加项目的权限'],
        'Multiple project selection disabled': ['多项目选择已禁用'],
        'Multiple Project Selection': ['多项目选择'],
        'Use UTC': ['使用UTC'],
        'Absolute date': ['绝对日期'],
        to: ['到'],
        'Strength: [textScore]': ['强度: [textScore]'],
        "We don't have an SDK for that yet!": ['暂无对应 SDK'],
        All: ['全部'],
        'Test Plugin': ['测试插件'],
        Disable: ['禁用'],
        'Sending test...': ['发送测试...'],
        'Test Complete!': ['测试完成！'],
        'An unexpected error occurred while testing your plugin. Please try again.': [
          '当测试您的插件时发生了一个错误，请重试。',
        ],
        "Oops! Looks like there aren't any available integrations installed.": [
          'Oops！看起来似乎没有任何可用集合被安装。',
        ],
        'This feature is a preview and may change in the future. Thanks for being an early adopter!':
          ['这个功能是个预览版，未来有可能发生改变，感谢成为早期采纳者。'],
        'Unable to toggle bookmark for %s': ['未能为%s创建书签'],
        'Request Access': ['请求访问'],
        'No teams have access to this project yet. Ask an admin to add your team to this project.':
          ['这个项目还没有团队加入，请管理员将你的团队加入这个项目'],
        "You're not a member of this project.": ['你不是这个项目的成员。'],
        'Select a Team': ['选择一个团队'],
        'Join Team': ['加入团队'],
        'Request Pending': ['请求待处理'],
        'Are you sure you want to remove this repository? All associated commit data will be removed in addition to the repository.':
          [
            '您确定要删除此仓库吗？ 除了仓库之外，所有与该仓库关联的提交数据也都将被删除。',
          ],
        'You must be an organization owner, manager or admin to remove a repository.': [
          '您必须是组织所有者、经理或管理员才能删除仓库。',
        ],
        'This issue has been marked as resolved.': ['这个问题被标记为已解决。'],
        '[actor] marked this issue as resolved in the upcoming release.': [
          '[actor] 将这个问题在即将到来的版本中标记为已解决。',
        ],
        'This issue has been marked as resolved in the upcoming release.': [
          '这个问题在即将到来的版本中标记为已解决。',
        ],
        '[actor] marked this issue as resolved in version [version].': [
          '[actor] 将这个问题在版本[version]中标记为已解决。',
        ],
        'This issue has been marked as resolved in version [version].': [
          '这个问题在版本[version]中被标记为已解决。',
        ],
        'This issue has been marked as resolved by [commit]': [
          '这个问题被标记为已解决。',
        ],
        'Unable to open search result (a popup blocker may have caused this).': [
          '无法打开搜索结果（可能是弹出窗口阻止程序导致的）。',
        ],
        Event: ['事件'],
        '%s Dashboard': ['%s 仪表盘'],
        'Organization Dashboard': ['组织仪表盘'],
        '%s Settings': ['%s 设置'],
        'Organization Settings': ['组织设置'],
        'Project Settings': ['项目设置'],
        'Project Details': ['项目详细信息'],
        Clear: ['清空'],
        Loading: ['加载中'],
        "What's new": ['最新动态'],
        "What's new in Sentry": ['Sentry 最新动态'],
        'No recent updates from the Sentry team.': ['Sentry 团队无更新。'],
        'User Feedback': ['用户反馈'],
        Alerts: ['警报'],
        Dashboards: ['仪表盘'],
        Activity: ['活动'],
        Stats: ['统计'],
        Settings: ['设置'],
        'There are no incidents to report': ['没有事件需要报告'],
        'Organization settings': ['组织设置'],
        Members: ['成员'],
        'User settings': ['用户设置'],
        'API keys': ['API秘钥'],
        Admin: ['管理'],
        'Switch organization': ['切换组织'],
        'Create a new organization': ['创建一个组织'],
        'Read More': ['阅读更多'],
        'Log Message': ['日志消息'],
        'Exception Type': ['异常类型'],
        'Exception Message': ['异常消息'],
        Similar: ['相似'],
        'Not Similar': ['不相似'],
        'Unpin this search': ['取消固定此搜索'],
        'Pin this search': ['固定此搜索'],
        'Clear search': ['清空搜索'],
        'Invalid tag': ['无效标签'],
        'Recent Searches': ['最近的搜索'],
        'Total Events': ['全部事件'],
        'Select Issue': ['选择问题'],
        'last event from [ago]': ['从[ago]后最新的事件'],
        'Show details': ['展示详情'],
        'n/a': ['n/a'],
        'No recent data.': ['没有最近数据可用'],
        'Tag Details': ['标签详情'],
        'Team Name': ['团队名称'],
        'e.g. operations, web-frontend, desktop': ['例如：运维，网页前端，桌面'],
        'May contain lowercase letters, numbers, dashes and underscores.': [
          '可以包含小写字母，数字，点和下划线',
        ],
        '%(time)s old': ['%(time)s 前'],
        Support: ['支持'],
        'Error: ': ['错误：'],
        'There was an unknown problem, please try again': ['发生未知问题，请重试'],
        'Your U2F device reported an error.': ['您的 U2F 设备报告了一个错误。'],
        'The device you used for sign-in is unknown.': ['你登录的设备是未知的。'],
        '[p1:The Sentry server administrator modified the device registrations.][p2:You need to remove and re-add the device to continue using your U2F device. Use a different sign-in method or contact [support] for assistance.]':
          [
            '[p1:Sentry服务器管理员修改了设备注册。][p2:你需要移除并重新添加设备以便继续使用你的U2F设备.使用其他方式登录或联系[support]寻求帮助。]',
          ],
        'Try Again': ['重试'],
        'Alternatively you can use your U2F device to confirm the action.': [
          '另外你可以使用你的U2F设备认证动作。',
        ],
        'To enroll your U2F device insert it now or tap the button on it to activate it.':
          ['要注册您的U2F设备，请立即将其插入或点击按钮将其激活。'],
        'Insert your U2F device or tap the button on it to confirm the sign-in request.':
          ['插入您的UrF设备或点击按钮来认证登录请求。'],
        'New Issues': ['新问题'],
        'commits ': ['提交'],
        'commit ': ['提交'],
        'by ': ['由 '],
        authors: ['作者'],
        author: ['作者'],
        Deploys: ['部署'],
        'Last hour': ['\b最近 1 小时'],
        'Last 24 hours': ['最近 24 小时'],
        'Last 7 days': ['最近7天'],
        'Last 14 days': ['最近14天'],
        'Last 30 days': ['最近30天'],
        'Last 90 days': ['最近 90 天'],
        'Unknown error. Please try again.': ['未知错误。请重试。'],
        'Send Me Alerts': ['发送告警给我'],
        'Send Me Workflow Notifications': ['向我发送工作流通知'],
        Always: ['总是'],
        Never: ['永不'],
        'E.g. changes in issue assignment, resolution status, and comments.': [
          '例如 issue 指派变更、解决状态变更以及有新评论时。',
        ],
        'Send Me Weekly Reports': ['向我发送周报'],
        "Reports contain a summary of what's happened within your organization.": [
          '报告包含组织内部发生的情况的摘要。',
        ],
        'Send Me Deploy Notifications': ['向我发送部署通知'],
        'Deploy emails include release, environment and commit overviews.': [
          '向我发送部署通知',
        ],
        'Notify Me About My Own Activity': ['提醒我关于我自己的活动'],
        'Enable this to receive notifications about your own actions on Sentry.': [
          '开启以接收关于你自己在Sentry上动作的通知。',
        ],
        "Claim Unassigned Issues I've Resolved": ['认领我已解决的未分配问题'],
        "You'll receive notifications about any changes that happen afterwards.": [
          '您将收到后续任何变化的通知。',
        ],
        'Workflow Notifications': ['工作流程通知'],
        'Email Routing': ['邮件路由'],
        'Weekly Reports': ['周报告'],
        'Deploy Notifications': ['部署通知'],
        'My Activity': ['我的活动'],
        'Use a 24-hour clock': ['使用 24 小时制'],
        'Use default ignored sources': ['使用默认忽略源'],
        'Our default list will attempt to ignore common issues and reduce noise.': [
          '我们的默认列表会尝试忽略常见的问题。',
        ],
        'Additional ignored sources': ['附加忽略源'],
        'Discard reports about requests from the given sources. Separate multiple entries with a newline.':
          ['当清洗所有项目的数据时需要附加字段名称匹配，用换行符分割多个条目。'],
        'Separate multiple entries with a newline.': ['用换行分隔多个条目。'],
        'Allows [link:glob pattern matching].': ['允许[link:全局模式匹配]。'],
        'Custom Filters': ['自定义过滤器'],
        'IP Addresses': ['IP地址'],
        'Filter events from these IP addresses. ': ['使用这些IP地址过滤事件'],
        'Filter events from these releases. ': ['使用这些版本过滤事件'],
        'Error Message': ['错误消息'],
        'Filter events by error messages. ': ['使用错误消息过滤事件'],
        General: ['常规'],
        'A unique ID used to identify this organization': ['一个用于认证该组织的唯一ID'],
        'You will be redirected to the new organization slug after saving': [
          '在保存后您将被跳转到新的组织slug',
        ],
        'Display Name': ['显示名称'],
        'Early Adopter': ['早期使用者'],
        "Opt-in to new features before they're released to the public": [
          '在向公众发布前选自启用新功能',
        ],
        'The default role new members will receive': ['新成员将会收到的默认角色'],
        'Open Membership': ['开放式群组'],
        'Allow organization members to freely join or leave any team': [
          '允许组织成员随意加入或离开任何团队',
        ],
        'Allow members to delete events (including the delete & discard action) by granting them the `event:admin` scope.':
          ['通过授予成员`event:admin`来允许他们删除事件（包括删除和丢弃操作）。'],
        'Allow Join Requests': ['允许加入请求'],
        'Require Data Scrubber': ['需要数据清洗'],
        'Require server-side data scrubbing be enabled for all projects': [
          '要求为全部项目启用服务端侧数据清洗',
        ],
        'Disabling this can have privacy implications for ALL projects, are you sure you want to continue?':
          ['禁用次选项可能对全部项目都有影响，您确定要继续吗？'],
        'Require Using Default Scrubbers': ['要求使用默认的数据清洗器'],
        'Require the default scrubbers be applied to prevent things like passwords and credit cards from being stored for all projects':
          ['要求为所有项目应用默认清洗器以防止密码和信用卡之类的信息被存储'],
        'Security & Privacy': ['安全和隐私'],
        'Global Sensitive Fields': ['全局敏感字段'],
        'Additional field names to match against when scrubbing data for all projects. Separate multiple entries with a newline.':
          ['当清洗所有项目的数据时需要附加字段名称匹配，用换行符分割多个条目。'],
        'Note: These fields will be used in addition to project specific fields.': [
          '注意：除了项目特定字段外，还将使用这些字段。',
        ],
        'e.g. business-email': ['例如：业务邮箱'],
        'Field names which data scrubbers should ignore. Separate multiple entries with a newline.':
          ['数据清洗器忽略的字段。多个字段以换行符分隔。'],
        'Note: These fields will be used in addition to project specific fields': [
          '注意：除了项目特定字段外，还将使用这些字段',
        ],
        'Prevent Storing of IP Addresses': ['避免存储 IP 地址'],
        'Preventing IP addresses from being stored for new events on all projects': [
          '避免全部项目的新事件中包含的IP地址被存储。',
        ],
        'Require Two-Factor Authentication': ['要求双重认证'],
        'This will remove all members without two-factor authentication from your organization. It will also send them an email to setup 2FA and reinstate their access and settings. Do you want to continue?':
          [
            '这将会立刻强制全部用户启用双重认证。也将发送一封邮件提醒设置双重认证。您确定要继续吗？',
          ],
        'Are you sure you want to allow users to access your organization without having two-factor authentication enabled?':
          ['您确定您希望允许用户访问您的组织而不需要开启双重认证吗？'],
        'Allow Shared Issues': ['允许共享问题'],
        'Enable sharing of limited details on issues to anonymous users': [
          '开启对匿名用户分享有限问题细节',
        ],
        'Are you sure you want to allow sharing issues to anonymous users?': [
          '您确定您允许对匿名用户分享问题？',
        ],
        'Enhanced Privacy': ['增强隐私'],
        'Enable enhanced privacy controls to limit personally identifiable information (PII) as well as source code in things like notifications':
          ['启用增强的隐私控制以限制在通知之类东西里的个人身份信息（PII）和源代码'],
        'Allow Sentry to scrape missing JavaScript source context when possible': [
          '允许Sentry 尽可能抓取丢失的 JavaScript 源代码',
        ],
        'Store Native Crash Reports': ['存储原生崩溃报告'],
        'Reprocessing active': ['重处理活动'],
        'Only admins may change reprocessing settings': ['仅管理员可以改变重处理设置'],
        'Subject Template': ['题目模板'],
        'Minimum delivery interval': ['最小发送间隔'],
        'Notifications will be delivered at most this often.': [
          '通知最多会发送这么多次。',
        ],
        'Maximum delivery interval': ['最大发送间隔'],
        'Notifications will be delivered at least this often.': [
          '通知至少会发送这么多次。',
        ],
        '[Caution]: Enabling auto resolve will immediately resolve anything that has not been seen within this period of time. There is no undo!':
          [
            '[警告]：允许自动解决一段时间内未复现的事件，会立刻对现有的事件进行处理，造成的结果不能被撤销！',
          ],
        'https://example.com or example.com': ['https://example.com或example.com'],
        'Allowed Domains': ['允许的域名'],
        'Separate multiple entries with a newline': ['用换行分割多个条目'],
        'Enable JavaScript source fetching': ['启用 JavaScript 源读取'],
        'Security Token': ['安全令牌'],
        'Outbound requests matching Allowed Domains will have the header "{token_header}: {token}" appended':
          ['匹配允许域名的外网请求需要附有"{token_header}: {token}"'],
        'X-Sentry-Token': ['X-Sentry-Token'],
        'Security Token Header': ['安全令牌头'],
        'Verify TLS/SSL': ['验证TLS/SSL'],
        'Outbound requests will verify TLS (sometimes known as SSL) connections': [
          '外网请求要验证TSL（SSL）链接',
        ],
        "This option is enforced by your organization's settings and cannot be customized per-project.":
          ['这个选项已经在你的组织中设置成了强制项，不能给每个项目另外设置。'],
        'my-service-name': ['我的服务名称'],
        'A unique ID used to identify this project': ['一个用于验证该项目的唯一ID'],
        'You will be redirected to the new project slug after saving': [
          '保存后您将被跳转到新的项目slug',
        ],
        Platform: ['平台'],
        'Subject Prefix': ['主题前缀'],
        'e.g. [my-org]': ['例如：[我的组织]'],
        'Choose a custom prefix for emails from this project': [
          '为这个项目的邮件选择一个自定义的前缀',
        ],
        'Auto Resolve': ['自动解决'],
        "Automatically resolve an issue if it hasn't been seen for this amount of time": [
          '自动将一段时间内未复现的事件标记为解决',
        ],
        Disabled: ['已禁用'],
        'Preventing IP addresses from being stored for new events': [
          '防止新事件的IP地址被存储',
        ],
        'Are you sure you want to disable scrubbing IP addresses?': [
          '您确定要禁用IP地址清洗？',
        ],
        email: ['电子邮件'],
        'Additional Sensitive Fields': ['其他敏感字段'],
        'Additional field names to match against when scrubbing data. Separate multiple entries with a newline':
          ['当清洗所有项目的数据时需要附加字段名称匹配，用换行符分割多个条目。'],
        'business-email': ['业务邮箱'],
        'Safe Fields': ['安全字段'],
        'Field names which data scrubbers should ignore. Separate multiple entries with a newline':
          ['数据清洗器忽略的字段。多个字段以换行符分隔。'],
        'Data Scrubber': ['数据清洗'],
        'Enable server-side data scrubbing': ['启用服务端数据清洗'],
        'Are you sure you want to disable server-side data scrubbing?': [
          '您确定您要禁用服务端数据清洗？',
        ],
        'Use Default Scrubbers': ['使用默认数据清洗器'],
        'Apply default scrubbers to prevent things like passwords and credit cards from being stored':
          ['应用默认清洗器以防止密码和信用卡之类的信息被存储'],
        'Are you sure you want to disable using default scrubbers?': [
          '您确定要禁用默认清洗器？',
        ],
        'A unique ID used to identify the team': ['一个用于验证团队的唯一ID'],
        'You will be redirected to the new team slug after saving': [
          '保存后您将被跳转到新的团队slug',
        ],
        Popular: ['常见的'],
        Browser: ['浏览器'],
        Server: ['服务器'],
        Mobile: ['手机'],
        Desktop: ['桌面'],
        'An unknown error occurred.': ['未知的错误。'],
        'There was an error creating the issue.': ['创建问题时发生错误。'],
        'There was an error linking the issue.': ['连接问题时发生错误。'],
        'There was an error unlinking the issue.': ['解除问题连接时发生错误。'],
        'Are you sure you want to unlink this issue?': ['确定解除与这个问题的连接？'],
        'Unlink Issue': ['解除问题连接'],
        'Associate Identity': ['关联身份验证'],
        'An unknown error occurred. Need help with this? [link:Contact support]': [
          '发生了未知错误。是否需要帮助？[link:Contact support]',
        ],
        'New Alert Rule': ['新的警告规则'],
        Buffer: ['缓冲'],
        Relays: ['中继'],
        Organizations: ['组织'],
        Queue: ['队列'],
        Mail: ['邮件'],
        Organization: ['组织'],
        Notifications: ['通知'],
        Emails: ['Email'],
        Security: ['安全'],
        'Session History': ['会话历史'],
        Subscriptions: ['订阅'],
        Identities: ['身份'],
        'Auth Tokens': ['授权令牌'],
        'Create New Token': ['创建新的令牌'],
        Applications: ['应用'],
        'Close Account': ['关闭账户'],
        Environments: ['环境'],
        'Release Tracking': ['版本追踪'],
        'Issue Owners': ['问题所有者'],
        'Data Forwarding': ['数据转发'],
        'Debug Information Files': ['调试信息文件'],
        'ProGuard Mappings': ['混淆映射'],
        'Processing Issues': ['正在处理的问题'],
        'Inbound Filters': ['入站过滤器'],
        'Service Hooks': ['服务钩子'],
        'Create Service Hook': ['创建服务钩子'],
        'Service Hook Details': ['服务钩子详情'],
        'Client Keys': ['客户端密钥'],
        'Security Headers': ['安全头部信息'],
        'Content Security Policy': ['内容安全策略'],
        'Certificate Transparency': ['证书透明度'],
        'Legacy Integrations': ['遗留集成'],
        Configuration: ['配置'],
        'API Key': ['API Key'],
        'Audit Log': ['审计日志'],
        'Rate Limits': ['速率限制'],
        Repositories: ['仓库'],
        Team: ['团队'],
        Integrations: ['集成'],
        'Developer Settings': ['开发设置'],
        'Integration Dashboard': ['集成仪表盘'],
        'Unable to change assignee. Please try again.': ['无法更改被分配人。请重试。'],
        'Unable to delete events. Please try again.': ['无法删除事件。请重试。'],
        'The selected events have been scheduled for deletion.': [
          '选定事件已列入删除计划。',
        ],
        'Unable to discard event. Please try again.': ['无法丢弃事件。请重试。'],
        'Similar events will be filtered and discarded.': ['类似的事件将被过滤和丢弃。'],
        'Unable to merge events. Please try again.': ['无法合并事件。请重试。'],
        'The selected events have been scheduled for merge.': [
          '选定事件已列入合并计划。',
        ],
        'Unable to update events. Please try again.': ['无法更新事件。请重试。'],
        'An error occurred': ['发生错误'],
        Unlimited: ['无限制'],
        min: ['分'],
        s: ['秒'],
        ms: ['毫秒'],
        wk: ['周'],
        d: ['天'],
        hr: ['时'],
        milliseconds: ['毫秒'],
        'Create a new account': ['创建新账户'],
        'Login using an existing account': ['使用已有账号登录'],
        'Accept organization invite': ['接受组织邀请'],
        'Accept Organization Invite': ['接受组织邀请'],
        'Transfer Project': ['转让项目'],
        'Accept Project Transfer': ['接受项目转让'],
        'Project successfully transferred': ['项目已被成功转让'],
        'Unable to transfer project': ['未能转移项目'],
        'Approve Transfer Project Request': ['同意项目转让请求'],
        'Please select which [organization] you want for the project [project].': [
          '请选择您希望将项目[project]转移到哪一个[organization]。',
        ],
        'Server Version': ['服务器版本'],
        'Python Version': ['Python版本'],
        'Configuration File': ['配置文件'],
        Uptime: ['运行时间'],
        'Environment not found (are you using the builtin Sentry webserver?).': [
          '找不到环境变量(您是在使用内置的Sentry web服务器吗？)',
        ],
        "Send an email to your account's email address to confirm that everything is configured correctly.":
          ['向您的电子邮件地址发送一封邮件以确认配置正常。'],
        'SMTP Settings': ['SMTP 设置'],
        'From Address': ['来源地址'],
        Host: ['主机'],
        'not set': ['未设置'],
        No: ['否'],
        Yes: ['是'],
        'Mailing List Namespace': ['邮件列表命名空间'],
        'Test Settings': ['测试设置'],
        Accepted: ['已接受'],
        Dropped: ['减少'],
        'System Overview': ['系统概览'],
        'Event Throughput': ['事件吞吐量'],
        'API Responses': ['API响应'],
        Extensions: ['扩展'],
        'No extensions registered': ['没有已注册的拓展'],
        Modules: ['模块'],
        'No modules registered': ['没有已注册的模块'],
        'Are you sure you wish to delete this relay?': ['您确定要删除此中继吗？'],
        'Disable the account.': ['禁用这个账户'],
        'Permanently remove the user and their data.': ['永久移除这个用户及其数据'],
        'Remove User': ['删除用户'],
        'The username is the unique id of the user in the system': [
          '用户名是用户在系统中的唯一标识',
        ],
        'Designates whether this user can perform administrative functions.': [
          '是否允许该用户进行管理操作。',
        ],
        Superuser: ['超级用户'],
        'Designates whether this user has all permissions without explicitly assigning them.':
          ['是否允许该用户拥有所有未特别分配给他的权限。'],
        'Disable User': ['禁用用户'],
        'System Warnings': ['系统警告'],
        'We were unable to load the required configuration from the Sentry server. Please take a look at the service logs.':
          ['无法从 Sentry 服务器读取必须的配置。请查看日志文件。'],
        'Complete setup by filling out the required configuration.': [
          '填写必须的配置以完成安装。',
        ],
        'Setup Sentry': ['安装Sentry'],
        'Welcome to Sentry': ['欢迎来到Sentry'],
        'Allow anyone to create an account and access this Sentry installation.': [
          '允许任何人创建账户并访问该Sentry服务。',
        ],
        'IP Rate Limit': ['IP 速率限制'],
        'The maximum number of times an authentication attempt may be made by a single IP address in a 60 second window.':
          ['单个IP在60秒内最多能尝试鉴权的次数。'],
        'User Rate Limit': ['用户速率限制'],
        'The maximum number of times an authentication attempt may be made against a single account in a 60 second window.':
          ['单个用户60秒内最多能尝试鉴权的次数。'],
        'The maximum number of organizations which may be created by a single account in a one hour window.':
          ['单个用户一个小时内最多能创建的组织数量。'],
        'If enabled, any stats reported to sentry.io will exclude identifying information (such as your administrative email address). By anonymizing your installation the Sentry team will be unable to contact you about security updates. For more information on what data is sent to Sentry, see the [link:documentation].':
          [
            '如果开启，任何上报到sentry.io的状态将会不包含身份信息（例如你的管理员邮箱地址）。匿名安装则Sentry团队无法因安全更新而联系你。更多关于发送给Sentry数据的信息，请查看[link:文档]。',
          ],
        'Email From': ['电子邮件来自'],
        'Email address to be used in From for all outbound email.': [
          '邮件使用所有发信邮件的发件人的地址。',
        ],
        'SMTP Host': ['SMTP 主机'],
        'SMTP Port': ['SMTP 端口'],
        'SMTP Username': ['SMTP 用户名'],
        'SMTP Password': ['SMTP 密码'],
        'Outbound email': ['发出邮件'],
        Authentication: ['认证'],
        Beacon: ['信标'],
        'Root URL': ['根 URL'],
        'The root web address which is used to communicate with the Sentry backend.': [
          'web的根地址用来欲Sentry后台通信。',
        ],
        'Admin Email': ['管理员 Email 地址'],
        'The technical contact for this Sentry installation.': [
          '该Sentry服务中的技术支持',
        ],
        'Support Email': ['支持邮箱'],
        'The support contact for this Sentry installation.': [
          '该Sentry服务中的支持联系人',
        ],
        'Security Email': ['安全邮箱'],
        'The security contact for this Sentry installation.': [
          '该Sentry服务的安全联系人',
        ],
        'Rate Limit': ['速率限制'],
        'The maximum number of events the system should accept per minute. A value of 0 will disable the default rate limit.':
          ['一分钟能接受的最多事件量。设置为0则禁用速率限制。'],
        'Allow Registration': ['允许注册'],
        'The project you were looking for was not found.': ['您要查找的项目未找到。'],
        '1 minute': ['1 分钟'],
        '5 minutes': ['5 分钟'],
        '10 minutes': ['10  分钟'],
        '15 minutes': ['15 分钟'],
        '30 minutes': ['30 分钟'],
        '1 hour': ['1 小时'],
        '2 hours': ['2 小时'],
        '4 hours': ['4 小时'],
        '24 hours': ['24 小时'],
        'Updated alert rule': ['已更新告警规则'],
        'Created alert rule': ['已创建的告警规则'],
        'Field is required': ['必填字段'],
        'Delete Rule': ['删除规则'],
        'Save Rule': ['保存规则'],
        'Rule Name': ['规则名称'],
        'Total Sessions': ['全部会话'],
        Display: ['显示'],
        warning: ['警告'],
        None: ['空'],
        Below: ['以下'],
        Above: ['以上'],
        Slack: ['Slack'],
        Member: ['成员'],
        'Deleting...': ['正在删除...'],
        '60 minutes': ['60 分钟'],
        '3 hours': ['3 小时'],
        'Select an Environment': ['选择一个环境'],
        '12 hours': ['12 小时'],
        '1 week': ['1 周'],
        '30 days': ['30天'],
        'My Rule Name': ['我的规则名'],
        all: ['所有'],
        any: ['任何'],
        none: ['无'],
        'Delete Node': ['删除节点'],
        'Apply Changes': ['应用更改'],
        'Alert Rules': ['警报规则'],
        History: ['历史'],
        'Alert Rule': ['警报规则'],
        Duration: ['持续时间'],
        "You don't have access to this feature": ['内无权使用此功能'],
        above: ['以上'],
        below: ['以下'],
        Filters: ['过滤器'],
        'Created By': ['创建于'],
        'Edit Rule': ['编辑规则'],
        Alert: ['警报'],
        'Open in Issues': ['在问题页打开'],
        'Related Issues': ['相关问题'],
        Sessions: ['会话'],
        Login: ['登录'],
        'External Account Login': ['外部账户登录'],
        'Sign in with Google': ['用 Google 登录'],
        'Sign in with GitHub': ['用 GitHub 登录'],
        'Sign in with Azure DevOps': ['用 Azure DevOps 登录'],
        'you@example.com': ['you@example.com'],
        Table: ['表格'],
        'Recently Viewed': ['近期查看的'],
        'Delete Query': ['删除查询'],
        'Download CSV': ['下载 CSV'],
        'Download Center': ['下载中心'],
        'Discover Trends': ['发现趋势'],
        'Event Detail': ['事件详情'],
        Limit: ['限制'],
        'All Events': ['所有事件'],
        'You do not have permission to view that event.': ['您没有查看该事件的权限'],
        'Please set a name for this query': ['请为此查询设置一个名称'],
        'My Queries': ['我的查询'],
        'Query Name (A-Z)': ['查询名称(A-Z)'],
        'Display name': ['显示名称'],
        'Query not updated': ['查询未更新'],
        'Query name saved': ['查询名称已保存'],
        'Query name not saved': ['查询名称未保存'],
        'Query deleted': ['查询已删除'],
        'Query not deleted': ['查询未删除'],
        'Query saved': ['查询已保存'],
        'Query not saved': ['查询未保存'],
        'Please name your query': ['请命名你的查询'],
        'Query updated': ['查询已更新'],
        'Drag to reorder': ['拖动以重新排序'],
        'Remove column': ['移除列'],
        'Add a Column': ['添加一列'],
        'Read the Docs': ['阅读文档'],
        'Edit Columns': ['编辑列'],
        '(Required)': ['(必须)'],
        'No parameter': ['无参数'],
        'Hide Tags': ['隐藏标签'],
        'Show Tags': ['显示标签'],
        Export: ['导出'],
        'Export All': ['全部导出'],
        Results: ['结果'],
        'Finish integration installation': ['完成集成安装'],
        'Select an organization': ['选择一个组织'],
        'Choose Installation Organization': ['选择安装组织'],
        'Select a project': ['选择项目'],
        'Merge Selected Issues': ['合并所选的问题'],
        Merge: ['合并'],
        'Add to Bookmarks': ['添加至书签'],
        'Remove from Bookmarks': ['从书签移除'],
        'Set status to: Unresolved': ['设置状态为：未解决'],
        'Delete Issues': ['删除问题'],
        'This will apply to the current search query': ['这将应用于当前搜索查询'],
        'This will apply to the first [bulkNumber] issues matched in this project!': [
          '这将应用于该项目前[bulkNumber]个匹配的问题！',
        ],
        'This will apply to all [bulkNumber] issues matched in this project!': [
          '这将应用于该项目全部[bulkNumber]个匹配的问题！',
        ],
        'Graph:': ['图形：'],
        '24h': ['24 小时'],
        'Selected up to the first [count] issues that match this search query.': [
          '最多选择与该搜索查询匹配的前[count]个问题。',
        ],
        'Selected all [count] issues that match this search query.': [
          '选择与该搜索查询匹配的全部[count]个问题。',
        ],
        'Select the first [count] issues that match this search query.': [
          '选择与该搜索查询匹配的前[count]个问题。',
        ],
        'Select all [count] issues that match this search query.': [
          '选择与该搜索查询匹配的全部[count]个问题。',
        ],
        'Are you sure you want to [action] the first [bulkNumber] issues that match the search?':
          ['您确定要[action]该项目前[bulkNumber]个匹配搜索的问题？'],
        'Are you sure you want to [action] all [bulkNumber] issues that match the search?':
          ['您确定要[action]该项目全部[bulkNumber]个匹配搜索的问题？'],
        'Bulk deletion is only recommended for junk data. To clear your stream, consider resolving or ignoring. [link:When should I delete events?]':
          [
            '批量删除仅建议用于垃圾数据。考虑使用解决和忽略来清理你的流。[link:我什么时候应该删除事件？]',
          ],
        'This action cannot be undone.': ['该操作无法撤销。'],
        'Save Current Search': ['保存当前搜索'],
        'Saving Changes': ['保存更改'],
        'Unable to save your changes.': ['保存变更失败'],
        'Congrats, you have no unresolved issues': ['恭喜，您没有未解决的问题。'],
        'Saved Searches': ['保存的搜索'],
        'Custom Search': ['自定义搜索'],
        Tag: ['标签'],
        'Time or Count': ['时间或计数'],
        'Bookmarked By': ['由谁加入书签'],
        Text: ['文本'],
        'Search title and culprit text body': ['搜索标题和问题文本正文'],
        'Unable to retrieve values for tag [tagName]': ['未能取回标签[tagName]的值'],
        'My Cron Job': ['我的定时任务'],
        Config: ['配置'],
        'Schedule Type': ['计划类型'],
        Schedule: ['计划'],
        Interval: ['间隔'],
        Pause: ['暂停'],
        Enable: ['启用'],
        'Nothing recorded in the last 30 days.': ['近30天内没有记录。'],
        'Event was received!': ['事件已接受'],
        'Select a platform': ['选择一个平台'],
        'Install the Sentry SDK': ['安装 Sentry SDK'],
        'Creating Project...': ['创建项目...'],
        'Create Project': ['创建项目'],
        'Project Created': ['项目已创建'],
        'Failed to create project': ['项目创建失败'],
        '[author] marked [issue] as resolved': ['[author] 将 [issue] 标记为解决'],
        '[author] marked [issue] as resolved due to age': [
          '[author] 因时限将 [issue] 标记为解决',
        ],
        '[author] marked [issue] as resolved in [version]': [
          '[author] 在 [version] 中将 [issue] 标记为了已解决',
        ],
        '[author] marked [issue] as resolved in the upcoming release': [
          '[author] 在即将到来的版本中将 [issue] 标记为了已解决',
        ],
        '[author] marked [issue] as unresolved': ['[author] 将 [issue] 标记为了未解决'],
        '[author] ignored [issue] for [duration]': [
          '[author] 在 [duration] 中忽略 [issue]',
        ],
        '[author] ignored [issue] until it happens [count] time(s) in [duration]': [
          '[author] 忽略 [issue] 直到它在 [duration] 中 再发生 [count] 次',
        ],
        '[author] ignored [issue] until it happens [count] time(s)': [
          '[author] 忽略 [issue] 直到它再发生 [count] 次',
        ],
        '[author] ignored [issue] until it affects [count] user(s) in [duration]': [
          '[author] 忽略 [issue] 直到它在 [duration] 中 再影响 [count] 用户',
        ],
        '[author] ignored [issue] until it affects [count] user(s)': [
          '[author] 忽略 [issue] 直到它再影响 [count] 用户',
        ],
        '[author] ignored [issue]': ['[author] 忽略了 [issue]'],
        '[author] made [issue] public': ['[author] 将 [issue] 设置为公开'],
        '[author] made [issue] private': ['[author] 将 [issue] 设置为私有'],
        '[author] marked [issue] as a regression in [version]': [
          '[author] 将 [issue] 在 [version] 中标记为回归',
        ],
        '[author] marked [issue] as a regression': ['[author] 将 [issue] 标记为回归'],
        '[author] linked [issue] on [provider]': [
          '[author] 在 [provider] 上关联了 [issue]',
        ],
        'a group': ['组'],
        '[author] saw [link:issue]': ['[author] 看到 [link:issue]'],
        '[author] assigned [issue] to #[assignee]': [
          '[author] 分配了 [issue] 给 #[assignee]',
        ],
        '[author] assigned [issue] to themselves': ['[author] 分配 [issue] 给 自己'],
        '[author] assigned [issue] to [assignee]': [
          '[author] 分配了 [issue] 给 [assignee]',
        ],
        '[author] assigned [issue] to an [help:unknown user]': [
          '[author] 分配 [issue] 给一个 [help:unknown user]',
        ],
        '[author] unassigned [issue]': ['[author] 取消分配 [issue]'],
        '[author] merged [count] [link:issues]': ['[author] 合并[count] [link:issues]'],
        '[author] released version [version]': ['[author] 发布了版本 [version]'],
        '[author] deployed version [version] to [environment].': [
          '[author] 部署版本 [version] 到 [environment].',
        ],
        '[author] commented on [issue]': ['[author] 评论了 [issue]'],
        'The organization you were looking for was not found.': [
          '您要查找的组织未找到。',
        ],
        'Loading data for your organization.': ['正在加载您组织的数据。'],
        'Create Organization': ['创建组织'],
        'Create a New Organization': ['创建新组织'],
        "Organizations represent the top level in your hierarchy. You'll be able to bundle a collection of teams within an organization as well as give organization-wide permissions to users.":
          [
            '在你的分级系统中，组织为最高级。你可在组织下绑定多组团队，并向用户发放组织内许可。',
          ],
        'Organization Name': ['组织名称'],
        'e.g. My Company': ['例如：我的公司'],
        'I agree to the [termsLink:Terms of Service] and the [privacyLink:Privacy Policy]':
          ['我同意[termsLink:服务条款]和[privacyLink:隐私政策]'],
        'The [organization] organization is currently in the process of being deleted from Sentry.':
          ['[organization]组织正在被从Sentry中删除。'],
        'The [organization] organization is currently scheduled for deletion.': [
          '[organization]组织正在被排期删除。',
        ],
        'Would you like to cancel this process and restore the organization back to the original state?':
          ['您希望取消这个过程并将组织重置回初始状态吗？'],
        'If this is a mistake, contact an organization owner and ask them to restore this organization.':
          ['如果发生了错误，请联系组织的所有者并让他们恢复该组织。'],
        "Note: Restoration is available until the process begins. Once it does, there's no recovering the data that has been removed.":
          ['注意：在该过程开始之前重置都是可用的。一旦开始，被删除的数据都不能恢复。'],
        'Delete and discard future events': ['删除并丢弃未来的事件'],
        'Discarding this event will result in the deletion of most data associated with this issue and future events being discarded before reaching your stream. Are you sure you wish to continue?':
          [
            '丢弃此事件将导致删除与此事件相关的大多数数据，并且将来的事件在到达您的流之前将被丢弃。您确定要继续吗？',
          ],
        'Discard Future Events': ['丢弃未来的事件'],
        'Deleting this issue is permanent. Are you sure you wish to continue?': [
          '问题将永久删除，您确定要继续吗？',
        ],
        'Error sharing': ['错误分享'],
        Bookmark: ['书签'],
        'Enable public share link': ['开启公共分享链接'],
        'You are about to regenerate a new shared URL. Your previously shared URL will no longer work. Do you want to continue?':
          ['您将生成一个新的分享链接，您之前的分享链接将失效，您希望继续吗？'],
        Subscribe: ['订阅'],
        'Updating comment...': ['正在更新评论...'],
        'Unable to update comment': ['无法更新评论'],
        'Add details or updates to this event. \nTag users with @, or teams with #': [
          '更新或为这个事件添加细节。\n 用@标记用户或者用#标记团队',
        ],
        'Removing comment...': ['正在移除评论...'],
        'Failed to delete comment': ['删除评论失败'],
        'Posting comment...': ['正在发布评论...'],
        '[author] ignored this issue until it happens [count] time(s) in [duration]': [
          '[author] 忽略了这个问题直到在 [duration] 中发生 [count] 次',
        ],
        '[author] ignored this issue until it happens [count] time(s)': [
          '[author] 忽略了这个问题直到发生 [count] 次',
        ],
        '[author] ignored this issue until it affects [count] user(s) in [duration]': [
          '[author]忽略了这个问题直到在[duration]内影响了[count]用户',
        ],
        '[author] ignored this issue until it affects [count] user(s)': [
          '[author]忽略了这个问题直到影响了[count]用户',
        ],
        'The issue you were looking for was not found.': ['您要查找的问题未找到。'],
        'All Attachments': ['全部附件'],
        'Only Crash Reports': ['仅崩溃报告'],
        'Apple Crash Report': ['Apple 崩溃报告'],
        'Sorry, no events match your search query.': ['抱歉，找不到满足搜索条件的事件。'],
        "There don't seem to be any events yet.": ['还没出现任何事件。'],
        'search event id, message, or tags': ['搜索事件ID，消息和标签'],
        'Events successfully queued for unmerging.': ['事件成功入队等待拆分'],
        'Unable to queue events for unmerging.': ['事件未能成功进入拆分队列'],
        'This is an experimental feature. Data may not be immediately available while we process unmerges.':
          ['这是一个实验功能。当我们处理拆分时数据不会立刻生效。'],
        "There don't seem to be any hashes for this issue.": ['本问题没有任何哈希值。'],
        'Merged fingerprints with latest event': ['与最新事件合并指纹'],
        'These events will be unmerged and grouped into a new issue. Are you sure you want to unmerge these events?':
          ['这些事件将被分离并合并放入一个新的问题。您确定要分离这些事件？'],
        Unmerge: ['分离'],
        Compare: ['对比'],
        'Expand All': ['展开全部'],
        'Collapse All': ['折叠全部'],
        'This is an experimental feature. Data may not be immediately available while we process merges.':
          ['这是一个实验功能。当我们处理合并时数据不会立刻生效。'],
        'Are you sure you want to merge these issues?': ['你确定要合并这些问题？'],
        'Tags are automatically indexed for searching and breakdown charts. Learn how to [link: add custom tags to issues]':
          [
            '为了搜索和做分解图，标签自动会被索引。了解更多[link: 向问题中添加自定义标签]',
          ],
        'More Details': ['详细信息'],
        'Affected Users': ['受影响的用户'],
        Count: ['计数'],
        'Export Page to CSV': ['导出页面到 CSV'],
        'This identifier is unique across your organization, and can be used to reference an issue in various places, like commit messages.':
          ['该标识符在您的组织中是唯一的，可以用于在各种地方引用问题，例如提交消息。'],
        'Issue #': ['问题 #'],
        'People who have viewed this issue': ['浏览过该问题的人'],
        Attachments: ['附件'],
        'Similar Issues': ['相似问题'],
        'You have [link:disabled workflow notifications] for this project.': [
          '你已经 [link:disabled workflow notifications] 这个项目。',
        ],
        "You're receiving updates because you are [link:subscribed to workflow notifications] for this project.":
          ['由于 [link:已订阅工作流通知] 你正在接受该项目的更新。'],
        '%s added': ['%s 已添加'],
        'Learn More': ['了解更多'],
        Uninstall: ['卸载'],
        enabled: ['已启用'],
        disabled: ['已禁用'],
        'Unable to enable configuration.': ['无法启用配置'],
        'Unable to disable configuration.': ['无法禁用配置'],
        'Removing...': ['正在删除...'],
        'Configuration was removed': ['配置已移除'],
        'Unable to remove configuration': ['无法移除配置'],
        'Configuration was enabled.': ['配置已启用'],
        'Configuration was disabled.': ['配置已禁用'],
        'Project Configuration': ['项目设置'],
        'You have no projects to add Alert Rules to': ['没有可以添加告警规则的项目'],
        'Add Alert Rule': ['添加告警规则'],
        'Failed to remove Integration': ['移除集成失败'],
        'Add Repository': ['添加仓库'],
        'No repositories available': ['无可用仓库'],
        'No repositories found': ['未找到仓库'],
        'Sentry is better with commit data': ['Sentry更适合提交数据'],
        'Resolve Now': ['立即解决'],
        Enabled: ['已启用'],
        'Upgrade Now': ['立即升级'],
        'Add to Project': ['加入到项目'],
        'Request to join failed': ['申请加入失败'],
        'Request Sent': ['请求已发送'],
        'Crash Free Sessions': ['无崩溃的会话'],
        Filtered: ['过滤器'],
        Total: ['总计'],
        'No results': ['没有结果'],
        Overview: ['概览'],
        Trends: ['趋势'],
        Trend: ['趋势'],
        'Permission Denied': ['没有权限'],
        '< Back': ['< 返回'],
        'Full Documentation': ['全部文档'],
        'Project name': ['项目名称'],
        'Create a team': ['创建团队'],
        'Give your project a name': ['给您的项目起个名字'],
        'Create a new Project': ['创建一个新项目'],
        'Choose a platform': ['选择一个平台'],
        'users affected by': ['受影响的用户'],
        'Configure your application': ['配置您的应用'],
        'Get started by selecting the platform or language that powers your application.':
          ['从选择支持您应用的平台或语言开始。'],
        DSN: ['DSN'],
        'Got it! Take me to the Issue Stream.': ['好的!返回问题列表.'],
        'Already have things setup? [link:Get your DSN]': [
          '已经设置好了？[link:获取你的DSN]',
        ],
        'Projects Dashboard': ['项目仪表盘'],
        'You do not have permission to create projects': ['您没有创建项目的权限'],
        'No activity yet.': ['目前没有活动'],
        Resources: ['资源'],
        'Sentry vs Logging': ['Sentry vs 日志'],
        'There are no commits associated with this release.': ['没有提交与这个版本关联'],
        'All Issues': ['所有问题'],
        'First Event': ['第一个事件'],
        'Last Event': ['最后一个事件'],
        'Session Duration': ['会话持续时间'],
        Search: ['搜索'],
        'Project Name': ['项目名称'],
        Crashes: ['崩溃'],
        session: ['会话'],
        '14d': ['14 天'],
        'Release Stats': ['版本状态'],
        'Deploy Emails': ['部署邮件'],
        'Crash Free Users': ['无崩溃的用户'],
        'Saved changes': ['已保存变更'],
        'Unable to save changes, please try again': ['未能保存变更，请重试'],
        'You can manage your own applications via the [link:API dashboard].': [
          '您可以通过[link:API仪表盘]管理您的应用。',
        ],
        'Approved Applications': ['批准的申请'],
        "You haven't approved any third party applications.": [
          '您没有批准任何第三放应用。',
        ],
        'This will permanently remove all associated data for your user': [
          '这将会永久删除全部与你用户关联的数据',
        ],
        'Closing your account is permanent and cannot be undone': [
          '关闭您的账户是永久且不可撤销的',
        ],
        'Remove the following organizations': ['移除下列组织'],
        'This is permanent and cannot be undone, are you really sure you want to do this?':
          ['这是永久且不可撤销的，您确定要这么做吗？'],
        'Closing Account': ['正在关闭账户'],
        'Your account has been deactivated and scheduled for removal.': [
          '您的账户无效，而且已列入移除计划。',
        ],
        'Thanks for using Sentry! We hope to see you again soon!': [
          '感谢使用 Sentry！希望很快能再次见到您！',
        ],
        Goodbye: ['再见'],
        'Account Details': ['账户详情'],
        'Email Addresses': ['Email 地址'],
        Unverified: ['未验证'],
        Primary: ['主要的'],
        'Set as primary': ['设置为主要的'],
        'Resend verification': ['重新发送验证邮件'],
        'Want to change how many emails you get? Use the notifications panel.': [
          '希望改变收到的邮件数目？请使用通知面板。',
        ],
        Disconnect: ['断开'],
        Integration: ['集成'],
        'Search Projects': ['搜索项目'],
        "Two-factor authentication is required for at least one organization you're a member of.":
          ['双重认证要求你至少是一个组织的成员。'],
        'Created at': ['创建于'],
        'Last used': ['最近使用'],
        'Confirmation codes are sent to the following phone number': [
          '验证码被发送到下列手机号',
        ],
        '%s has been removed': ['%s 已经被移除'],
        'Error removing %s': ['移除%s时出错'],
        'Start Over': ['重新开始'],
        'Send Code': ['发送验证码'],
        'Already enrolled': ['已经激活'],
        'Sending code to %s...': ['正在给%s发送验证码...'],
        'Incorrect OTP': ['不正确的OTP'],
        'Error sending SMS': ['发送SMS错误'],
        'Sent code to %s': ['发送验证码给%s'],
        'Error adding %s authenticator': ['添加%s认证器错误'],
        'Error removing authenticator': ['移除认证器错误'],
        'Authenticator has been removed': ['认证器已经被移除'],
        'Error regenerating backup codes': ['生成备份码错误'],
        'Unused Codes': ['未使用的恢复码'],
        'Are you sure you want to regenerate recovery codes? Your old codes will no longer work.':
          ['您确信要重新生成恢复代码？旧的恢复码将失效。'],
        'Regenerate Codes': ['重新生成恢复代码'],
        'Make sure to save a copy of your recovery codes and store them in a safe place.':
          ['请确保保存一份你回复码的备份并将其保存在一个安全的地方。'],
        'You have no more recovery codes to use': ['你没有更多恢复码可用'],
        'Do you want to remove this method?': ['你想移除这个方法吗？'],
        'Removing the last authentication method will disable two-factor authentication completely.':
          ['移除最后一个认证方法将完全禁用双重认证。'],
        'Device name': ['设备名称'],
        'You have not added any U2F devices': ['您还没有添加任何U2F设备'],
        'Add Another Device': ['添加另一个设备'],
        'Do you want to remove U2F device?': ['你想移除U2F设备吗？'],
        'Can not remove last U2F device': ['不能移除最后一个U2F设备'],
        'Sign out of all devices': ['登出全部设备'],
        'Signing out of all devices will sign you out of this device as well.': [
          '登出全部设备也将会使你登出这个设备。',
        ],
        'No available authenticators to add': ['没有可用的认证器添加'],
        Add: ['添加'],
        'requires 2FA': ['要求2FA'],
        Subscription: ['订阅'],
        "There's no subscription backend present.": ['当前没有订阅后台。'],
        'Application Details': ['应用详情'],
        Credentials: ['证书'],
        'Your secret is only available briefly after application creation. Make\n                  sure to save this value!':
          ['你的秘密仅在创建应用后短暂可用，请确保保存好这个值！'],
        'API Applications': ['API 应用'],
        'Created a new API Application': ['创建新的API应用'],
        'Unable to remove application. Please try again.': ['移除应用失败，请重试。'],
        'Create New Application': ['创建新的应用'],
        'Application Name': ['应用名称'],
        "You haven't created any applications yet.": ['您尚未创建任何应用。'],
        "Authentication tokens allow you to perform actions against the Sentry API on behalf of your account. They're the easiest way to get started using the API.":
          ['授权令牌允许基于你的账户使用 Sentry API。这是简单的使用 API 的开始方式。'],
        'For more information on how to use the web API, see our [link:documentation].': [
          '更多关于如果使用我们的web API， 请参照 [link:文档]。',
        ],
        'Create Token': ['创建令牌'],
        Scopes: ['作用域'],
        'Auth Token': ['认证令牌'],
        "You haven't created any authentication tokens yet.": [
          '你还没创建任何授权令牌。',
        ],
        'API Tokens': ['API 令牌'],
        'Removed token': ['移除令牌'],
        'Unable to remove token. Please try again.': ['未能移除令牌。请重试。'],
        'Change your account details and preferences (e.g. timezone/clock, avatar, language)':
          ['改变你的账户详情和偏好（例如：时区/时钟，头像，语言）。'],
        'Change your account password and/or two factor authentication': [
          '改变你的账户密码和/或双重认证',
        ],
        'Configure what email notifications to receive': ['配置接受什么邮件通知'],
        'Add or remove secondary emails, change your primary email, verify your emails': [
          '添加或移除次要邮箱，改变主要邮箱，验证邮箱',
        ],
        'Authorized Applications': ['认证过的应用'],
        'Manage third-party applications that have access to your Sentry account': [
          '管理关联在Sentry账户上的第三方应用',
        ],
        'Manage your third-party identities that are associated to Sentry': [
          '管理关联在Sentry上的第三方身份',
        ],
        'Permanently close your Sentry account': ['永久关闭你的Sentry账户'],
        'Add and configure OAuth2 applications': ['添加并配置OAuth2应用'],
        On: ['开'],
        Off: ['关'],
        'Control workflow notifications, e.g. changes in issue assignment, resolution status, and comments.':
          ['设置工作流程通知，例如 issue 指派变更、解决状态变更以及有新评论时。'],
        'Only on issues I subscribe to': ['仅在我关联的问题上'],
        'Control deploy notifications that include release, environment, and commit overviews.':
          ['控制包括版本、环境和提交总览的部署通知。'],
        'Only on deploys with my commits': ['仅在有我的提交的部署上。'],
        "Reports contain a summary of what's happened within the organization.": [
          '报告包括一份组织里发生事情的总结。',
        ],
        'On a per project basis, route emails to an alternative email address.': [
          '在每个项目的基础上，将电子邮件路由到另一个电子邮件地址。',
        ],
        'Looking to add or remove an email address? Use the emails panel.': [
          '使用邮件面板来添加或删除电子邮件地址',
        ],
        'Change password': ['修改密码'],
        'Changing your password will invalidate all logged in sessions.': [
          '修改密码将会作废全部已经登录的会话。',
        ],
        'Add Rule': ['添加规则'],
        'Select type': ['选择类型'],
        'MAC addresses': ['MAC 地址'],
        UUIDs: ['UUIDs'],
        'Add Item': ['添加条目'],
        'Invalid value': ['无效值'],
        'No teams': ['无团队'],
        'Add Team': ['添加团队'],
        'No Teams assigned': ['没有已分配的团队'],
        'General Settings': ['常规设置'],
        'Configure general settings for an organization': ['组织常规设置'],
        "View and manage an organization's projects": ['查看并管理组织项目'],
        "Manage an organization's teams": ['管理组织团队'],
        'Manage user membership for an organization': ['管理组织用户成员关系'],
        'Configure single sign-on': ['配置单点登录'],
        'API Keys': ['API Keys'],
        'View the audit log for an organization': ['浏览组织审计日志'],
        'Configure rate limits for all projects in the organization': [
          '配置组织内全部项目的速度限制',
        ],
        'Manage repositories connected to the organization': ['管理连接在组织的仓库'],
        'Manage developer applications': ['管理开发应用'],
        'Edit API Key': ['编辑API Key'],
        'Are you sure you want to remove this API key?': ['您确定要删除这个 API key?'],
        'Remove API Key?': ['删除 API Key?'],
        'New API Key': ['新API秘钥'],
        "API keys grant access to the [api:developer web API].\n          If you're looking to configure a Sentry client, you'll need a\n          client key which is available in your project settings.":
          [
            'API秘钥授予访问[api:开发者网页API]的权限。如果您希望配置Sentry客户端，您需要在您项目设置中有可用的客户端秘钥。',
          ],
        'No API keys for this organization': ['该组织没有API秘钥'],
        Key: ['密钥'],
        'Any action': ['任何动作'],
        Action: ['动作'],
        IP: ['IP'],
        'No audit entries available': ['没有可用的审核条目'],
        '%s (Sentry Staff)': ['%s（Sentry职员）'],
        'Sent reminders to members': ['向成员发送提醒'],
        'Failed to send reminders': ['发送提醒失败'],
        'No authentication providers are available.': ['没有可用的身份验证提供程序。'],
        'Choose a provider': ['请选择一个身份验证提供程序'],
        'Get started with Single Sign-on for your organization by selecting a provider. Read more in our [link:SSO documentation].':
          [
            '从选择一个身份认证提供程序开启单点登录。更多关于SSO的信息请查阅[link:OSS文档]。',
          ],
        'Enable your organization to sign in with %s.': ['使您的组织能够使用%s登录。'],
        '%s SSO is disabled.': ['%s SSO 已经禁用。'],
        'SSO Auth': ['SSO认证'],
        'New Public Integration': ['新公开集成'],
        'Public Integrations': ['公开集成'],
        'No public integrations have been created yet.': ['没有公开集成'],
        'New Internal Integration': ['新内部集成'],
        'Internal Integrations': ['内部集成'],
        Webhooks: ['Webhooks'],
        uninstalled: ['已卸载'],
        'Integration Views': ['集成视图'],
        'integrations page': ['集成页面'],
        'Total installs': ['总安装'],
        'Total uninstalls': ['总卸载'],
        installed: ['已安装'],
        'Request Log': ['请求日志'],
        'Status Code': ['状态码'],
        'Event Type': ['事件类型'],
        'Webhook URL': ['Webhook 地址'],
        'Previous page': ['前一页'],
        'Next page': ['后一页'],
        Revoke: ['吊销'],
        'No tokens created yet.': ['还没有已创建令牌'],
        Tokens: ['令牌'],
        'New Token': ['新令牌'],
        Dashboard: ['仪表盘'],
        Publish: ['发布'],
        'Published integrations cannot be re-published.': ['已经发布的集成不能再次发布'],
        'Published integrations cannot be removed.': ['已经发布的集成不能移除'],
        'Remove Organization': ['移除组织'],
        'Removing this organization will delete all data including projects and their associated events.':
          ['删除组织将会删除包括项目和与之关联的事件在内的全部数据。'],
        'Removing the organization, [name] is permanent and cannot be undone! Are you sure you want to continue?':
          ['删除组织，[name]是永久且不可撤销的！您确定要继续吗？'],
        'This will also remove the following associated projects:': [
          '下列关联项目也将一同被删除：',
        ],
        'Add Services': ['添加服务'],
        'Organization Integration Settings': ['组织集成设置'],
        '2FA': ['双因子校验'],
        'SSO Linked': ['已关联 SSO'],
        'User Role': ['用户规则'],
        Invited: ['已邀请'],
        'Are you sure you want to invite [email] to your organization?': [
          '你确定要邀请[email]到你的组织吗？',
        ],
        'Join request': ['加入请求'],
        Saved: ['已保存'],
        'Could not save...': ['无法保存...'],
        'Sending invite...': ['正在发送邀请...'],
        'Sent invite!': ['已发送邀请！'],
        'Could not send invite': ['无法发送邀请'],
        'Invitation Expired': ['邀请已超时'],
        'Member Settings': ['成员设置'],
        Basics: ['基础'],
        Added: ['已添加'],
        'Invite Link': ['邀请链接'],
        'Generate New Invite': ['生成新的邀请'],
        'Resend Invite': ['重新发送邀请'],
        'Reset two-factor authentication': ['重置双重认证'],
        'Are you sure you want to disable all two-factor authentication methods for [name]?':
          ['您确定要禁用 [name] 的所有双因子认证方法吗？'],
        'Save Member': ['保存成员'],
        'You do not have permission to perform this action': ['您没有执行该操作的权限。'],
        'Saving...': ['正在保存...'],
        'Resend invite': ['重新发送邀请'],
        'Resend SSO link': ['重新发送 SSO 链接'],
        '2FA Enabled': ['双因子验证已启用'],
        '2FA Not Enabled': ['双因子验证未启用'],
        'Are you sure you want to remove [name] from [orgName]?': [
          '您确定要将[name]从[orgName]中移除吗？',
        ],
        'Are you sure you want to leave [orgName]?': ['您确定要离开[orgName]吗？'],
        Leave: ['离开'],
        'Expired Invite': ['已过期的邀请'],
        'Error removing [name] from [orgName]': ['从[orgName]中删除[name]失败'],
        'Removed [name] from [orgName]': ['[name]已经从[orgName]中删除'],
        'Error leaving [orgName]': ['离开[orgName]时出错'],
        'You left [orgName]': ['您离开了[orgName]'],
        'Error sending invite': ['发送邀请出错'],
        'Search Members': ['搜索成员'],
        'Pending Members': ['待审核成员'],
        'No members found.': ['未找到成员'],
        'Invite Members': ['邀请成员'],
        'No projects found.': ['没有找到任何项目。'],
        'Per-Project Limit': ['每个项目限制'],
        'No Limit': ['无限制'],
        'Adjust Limits': ['调整限额'],
        'Rate limits allow you to control how much data is stored for this\n                organization. When a rate is exceeded the system will begin discarding\n                data until the next interval.':
          [
            '速度限制可以控制为这个组织存储多少数据。当速度超过时系统开始丢弃数据直到下个时间周期。',
          ],
        'Account Limit': ['账户限额'],
        'The maximum number of events to accept across this entire organization.': [
          '在整个组织中可以接受的最大事件数。',
        ],
        '[number] per hour': ['[number]每小时'],
        'Your account is limited to a maximum of [maxRate] events per [maxRateInterval] seconds.':
          ['您的账户被限制每[maxRateInterval]秒最多[maxRate]事件。'],
        'Public Key': ['公钥'],
        "Connecting a repository allows Sentry to capture commit data via webhooks. This enables features like suggested assignees and resolving issues via commit message. Once you've connected a repository, you can associate commits with releases via the API.":
          [
            '连接到仓库后 Sentry 可以通过 webhooks 获取提交数据，这样可以实现在提交日志内指定分配人、标注解决状态等。也可以通过 API 将提交与发布的版本进行关联。',
          ],
        'See our [link:documentation] for more details.': ['更多详情请查看[link:文档]。'],
        'Added Repositories': ['添加仓库'],
        'Adding one or more repositories will enable enhanced releases and the ability to resolve Sentry Issues via git message.':
          ['添加一个或多个仓库将开启增强版本和通过git消息解决Sentry问题的能力。'],
        'Unable to save change': ['保存变更失败'],
        'No teams here. [teamCreate]': ['没有团队。[teamCreate]'],
        'You can always [link:create one].': ['您可以[link:创建团队]。'],
        'You have left [team]': ['您已经离开[team]'],
        'Unable to leave [team]': ['离开[team]失败'],
        'Leave Team': ['离开团队'],
        'You have requested access to [team]': ['您已申请加入[team]团队'],
        'Unable to request access to [team]': ['无法申请加入[team]团队'],
        'You have joined [team]': ['您已经加入[team]'],
        'Unable to join [team]': ['加入[team]失败'],
        '[requesterName] requests to add [name] to the [team] team.': [
          '[requesterName]请求将[name]加入[team]团队。',
        ],
        '[name] requests access to the [team] team.': ['[name]申请加入[team]团队。'],
        'Team request approved': ['已同意加入团队请求'],
        'Error approving team request': ['同意加入团队请求时出错'],
        'Team request denied': ['加入团队请求被拒绝'],
        'Error denying team request': ['拒绝加入团队请求时出错'],
        'Pending Team Requests': ['等待批准的加入团队请求'],
        'Your Teams': ['您的团队'],
        'Other Teams': ['其他团队'],
        'You do not have permission to create teams': ['您没有创建团队的权限'],
        'Team Details': ['团队详情'],
        'Successfully removed member from team.': ['从团队中移除成员成功。'],
        'There was an error while trying to remove a member from the team.': [
          '从团队中移除成员时出错。',
        ],
        'Unable to load organization members.': ['加载组织成员失败。'],
        'Successfully added member to team.': ['成功向团队添加成员。'],
        'Unable to add team member.': ['添加团队成员失败。'],
        'No members': ['没有成员'],
        'Add Member': ['添加成员'],
        'Successfully added project to team.': ['成功向团队添加项目。'],
        'Successfully removed project from team': ['从团队移除项目成功'],
        "Wasn't able to change project association.": ['变更项目关联失败'],
        'You do not have enough permission to change project association.': [
          '您没有足够的权限变更项目关联。',
        ],
        "This team doesn't have access to any projects.": ['这个团队没有加入任何项目。'],
        'You do not have enough permission to associate a project.': [
          '您没有足够的权限关联项目。',
        ],
        'Add Project': ['添加项目'],
        'No projects': ['无项目'],
        'Team name changed': ['团队名称已经修改'],
        'Remove Team': ['移除团队'],
        "This may affect team members' access to projects and associated alert delivery.":
          ['这个将会影响团队成员对项目的访问及告警发送。'],
        'Are you sure you want to remove the team [team]?': [
          '您确定您要移除团队[team]？',
        ],
        Conditions: ['条件'],
        'Debug Files': ['调试文件'],
        'SDK Setup': ['SDK安装'],
        'Client Keys (DSN)': ['客户端密钥 (DSN)'],
        "View and manage the project's client keys (DSN)": [
          '查看和管理项目客户端秘钥（DSN）',
        ],
        'Configure user feedback reporting feature': ['配置用户反馈报告功能'],
        'View, enable, and disable all integrations for a project': [
          '查看，开启和禁用项目的全部集成',
        ],
        'Configure general settings for a project': ['项目常规设置'],
        'Project Teams': ['项目团队'],
        'Manage team access for a project': ['管理项目的团队访问'],
        "View and manage a  project's tags": ['查看和管理项目标签'],
        'Manage environments in a project': ['管理项目环境'],
        'Manage issue ownership rules for a project': ['管理项目问题所有者规则'],
        "Configure a project's inbound filters (e.g. browsers, messages)": [
          '创建项目进入过滤器（例如：浏览器、消息）',
        ],
        'Unable to update [environment]': ['未能更新[environment]'],
        "You don't have any hidden environments.": ['您没有任何隐藏环境。'],
        "You don't have any environments yet.": ['您还没有任何环境。'],
        'Manage Environments': ['管理环境'],
        Hidden: ['隐藏'],
        'Active Environments': ['活跃的环境'],
        'Updated [environment]': ['[environment] 已更新'],
        'We were unable to undiscard this issue': ['不丢弃这个问题失败'],
        'You have no discarded issues': ['您没有丢弃的问题'],
        'Discarded by %s': ['被%s丢弃'],
        Undiscard: ['不丢弃'],
        'Undiscarding this issue means that incoming events that match this will no longer be discarded. New incoming events will count toward your event quota and will display on your issues dashboard. Are you sure you wish to continue?':
          [
            '不丢弃这个问题意味着匹配这个的到来的事件不再被丢弃。新到来的事件将会计算进你的事件配额并展示在问题仪表盘上。您确定要继续吗？',
          ],
        'Events similar to these will no longer be filtered': [
          '与这些类似的事件将不会再被过滤出来',
        ],
        'Inbound Data Filters': ['入站数据过滤器'],
        'Data Filters': ['数据过滤器'],
        'Discarded Issues': ['被丢弃的问题'],
        'Errors filtered in the last 30 days (by day)': [
          '过去 30 天内过滤的错误（按天）',
        ],
        'Nothing filtered in the last 30 days.': ['近30天没有该条件的记录。'],
        'Custom Inbound Filters': ['自定义入站过滤器'],
        'Release and Error Message filtering are not enabled on your Sentry installation':
          ['你的Sentry安装实例未允许根据发布版本和错误消息过滤'],
        'Key Details': ['秘钥详情'],
        'Fill in both fields first': ['先填写两个字段'],
        Window: ['窗口'],
        'Key Rate Limits': ['秘钥速度限制'],
        'JavaScript Loader': ['JavaScript 加载器'],
        '4.x': ['4.x'],
        'Your credentials are coupled to a public and secret key. Different clients will require different credentials, so make sure you check the documentation before plugging things in.':
          [
            '您的证书包含公钥和私钥。不同的客户端请求不同的证书，因此在插入前一定要检查文档。',
          ],
        'Revoke Key': ['移除秘钥'],
        'Revoking this key will immediately remove and suspend the credentials. This action is irreversible.':
          ['吊销秘钥将立刻移除并暂停证书。这个动作不可逆转。'],
        'Are you sure you want to revoke this key? This will immediately remove and suspend the credentials.':
          ['您确定要吊销这个秘钥吗？将会立刻移除和暂停证书。'],
        'Revoked key': ['撤销秘钥'],
        'Unable to revoke key': ['撤销秘钥失败'],
        'Key usage in the last 30 days (by day)': ['近30天密钥的使用状况（按天）'],
        'Total events captured using these credentials.': [
          '使用这些凭据捕获的全部事件。',
        ],
        'Rate Limited': ['速度限制'],
        'Created a new key.': ['创建新秘钥'],
        'Unable to create new key. Please try again.': ['未能创建新秘钥，请重试。'],
        'There are no keys active for this project.': ['这个项目没有活动的秘钥。'],
        'Generate New Key': ['生成新的Key'],
        'Enabled key': ['启用密钥'],
        'Disabled key': ['禁用密钥'],
        'Remove Key': ['移除秘钥'],
        'Are you sure you want to remove this key? This action is irreversible.': [
          '您确定您要移除这个秘钥吗？这个动作时不可逆转的。',
        ],
        'DSN (Deprecated)': ['DSN（废弃）'],
        'Security Header Endpoint': ['安全头部端点'],
        'Use your security header endpoint for features like CSP and Expect-CT reports.':
          ['为类似CSP和Expect-CT报告的功能使用安全头部端点。'],
        'Minidump Endpoint': ['转储端点'],
        'Use this endpoint to upload [link], for example with Electron, Crashpad or Breakpad.':
          ['使用这个端点来上传[link]，例如：Electron、Crashpad和Breakpad。'],
        'Unreal Engine 4 Endpoint': ['虚幻4引擎端点'],
        'Use this endpoint to configure your UE4 Crash Reporter.': [
          '使用这个端点来配置你的UE4崩溃报告。',
        ],
        'Secret Key': ['私钥'],
        'Project ID': ['项目ID'],
        'Rules follow the pattern: ': ['规则依照模式：'],
        'Globbing Syntax:': ['通配语法：'],
        'Match against Issue Data: (globbing syntax *, ? supported)': [
          '无法匹配问题数据：（支持通配语法*，?）',
        ],
        'Good news! There are no processing issues.': ['好消息！没有正在处理的问题。'],
        'Having trouble uploading debug informations? We can help!': [
          '上传调试信息遇到麻烦？我们可以帮忙！',
        ],
        "Paste this command into your shell and we'll attempt to upload the missing symbols from your machine:":
          ['将这个命令粘贴到你的shell里，我们将尝试从你的机器上上传缺失的符号：'],
        'No crashed thread found in crash report': ['在崩溃报告中没有找到崩溃线程'],
        'Internal failure when attempting to symbolicate: {error}': [
          '尝试解析符号时发生内部错误：{error}',
        ],
        'Pending Issues': ['挂起的问题'],
        'The debug information file used was broken.': ['调试信息问题损坏。'],
        'Discard all': ['丢弃全部'],
        Problem: ['问题'],
        'An optional debug information file was missing.': ['可选的调试文件信息丢失。'],
        'A required debug information file was missing.': ['必须的调试信息文件丢失。'],
        'A system debug information file was missing.': ['系统调试信息文件丢失。'],
        'Could not resolve one or more frames in debug information file.': [
          '在调试信息文件中不能解决一个或多个帧。',
        ],
        'Encountered an unprocessable simulator frame.': ['遇到无法处理的模拟帧。'],
        'A binary image is referenced that is unknown.': ['引用了未知的二进制镜像。'],
        'A proguard mapping file was missing.': ['混淆映射文件丢失。'],
        'A proguard mapping file does not contain line info.': [
          '混淆映射文件不包含行信息。',
        ],
        'Configure release tracking for this project to automatically record new releases of your application.':
          ['为这个项目配置版本追踪可以自动记录您应用的新版本。'],
        'Client Configuration': ['客户端配置'],
        "This will annotate each event with the version of your application, as well as automatically create a release entity in the system the first time it's seen.":
          [
            '这将会为每个事件注释您应用的版本，同时当第一次出现时自动在系统中创建版本实体',
          ],
        'In addition you may configure a release hook (or use our API) to push a release and include additional metadata with it.':
          ['此外您可以配置一个版本钩子（或使用API）来推送版本和额外的元信息。'],
        'Deploy Token': ['部署令牌'],
        Token: ['令牌'],
        'A unique secret which is used to generate deploy hook URLs': [
          '一个用于生成部署钩子URL的独立秘钥',
        ],
        'Regenerate Token': ['重新生成令牌'],
        'If a service becomes compromised, you should regenerate the token and re-configure any deploy hooks with the newly generated URL.':
          ['如果服务被破坏，您需要重新生成令牌并使用新生成的URL重新配置部署钩子。'],
        'Are you sure you want to regenerate your token? Your current token will no longer be usable.':
          ['您确定要重新生成您的令牌？您当前的令牌将不能再使用。'],
        Webhook: ['Webhook'],
        'If you simply want to integrate with an existing system, sometimes its easiest just to use a webhook.':
          ['如果您希望整合一个现有系统，有时最简单的方式是使用webhook。'],
        'The release webhook accepts the same parameters as the "Create a new Release" API endpoint.':
          ['版本webhook接受与"创建新版本"API相同的参数。'],
        'You can notify Sentry when you release new versions of your application via our HTTP API.':
          ['您的应用发布新版本的时候，您可以通过HTTP API通知Sentry。'],
        'Your deploy token has been regenerated. You will need to update any existing deploy hooks.':
          ['您的部署令牌已经重新生成。您需要更新全部已经存在的部署钩子。'],
        'Unable to regenerate deploy token, please try again': [
          '重新生成部署令牌失败，请重试',
        ],
        'Event Validation': ['事件验证'],
        Secret: ['秘钥'],
        'The shared secret used for generating event HMAC signatures.': [
          '分享秘钥用于生成事件的HMAC签名。',
        ],
        'Delete Hook': ['删除钩子'],
        'Removing this hook is immediate and permanent.': ['移除钩子是立刻且永久的。'],
        'Events in the last 30 days (by day)': ['过去 30 天(按天)发生的事件'],
        'Total webhooks fired for this configuration.': ['此配置触发的总的webhook。'],
        'There are no service hooks associated with this project.': [
          '这个项目没有关联的服务钩子。',
        ],
        'Service Hook': ['服务钩子'],
        'Create New Hook': ['创建新的钩子'],
        'You must be a project admin to create teams': ['只有项目管理员才能创建团队'],
        'Create Hook': ['创建钩子'],
        'Hook Configuration': ['钩子配置'],
        'The URL which will receive events.': ['接收事件的URL。'],
        'The event types you wish to subscribe to.': ['您希望订阅的事件类型。'],
        'Looking to fine-tune your personal notification preferences? Visit your Account Settings':
          ['想要更好的调整您的个人通知喜好?请查看您的账户设置'],
        'Email Settings': ['邮件设置'],
        Digests: ['摘要'],
        'There are no integrations available for data forwarding': [
          '没有供数据转发的有效的集成。',
        ],
        "Data Forwarding allows processed events to be sent to your\n                favorite business intelligence tools. The exact payload and\n                types of data depend on the integration you're using. Learn\n                more about this functionality in our [link:documentation].":
          [
            '数据转发将处理过的事件发送到你喜欢的业务集成工具。确切的数据载荷和类型取决于你使用的集成。在[link:文档]了解更多关于这个功能。',
          ],
        'Sentry forwards [em:all applicable events] to the provider, in\n                some cases this may be a significant volume of data.':
          [
            'Sentry将转发[em:全部适用的事件]到指定的提供商，在一些情况下可能是大量的数据。',
          ],
        'Forwarded events in the last 30 days (by day)': ['近30天内转发的事件（按天）'],
        'Nothing forwarded in the last 30 days.': ['近30天内没有转发过数据。'],
        'Total events forwarded to third party integrations.': [
          '全部转发到第三方集成的事件。',
        ],
        'You do not have permission to delete debug files.': [
          '您没有删除调试文件的权限。',
        ],
        'There are no debug symbols for this project.': ['本项目没有调试符号。'],
        '\n            Debug information files are used to convert addresses and minified\n            function names from native crash reports into function names and\n            locations.\n          ':
          [
            '\n           调试信息文件用于将本机崩溃报告中的地址和缩小的函数名称转换为函数名称和位置。',
          ],
        'show details': ['显示详情'],
        'Search DIFs': ['搜索DIF'],
        'Built-in Repositories': ['内置仓库'],
        'Custom Repositories': ['自定义仓库'],
        'dynamic library': ['动态链接库'],
        executable: ['可执行'],
        'debug companion': ['调试伴侣'],
        'Remove Project': ['删除项目'],
        'Remove the [project] project and all related data. [linebreak] Careful, this action cannot be undone.':
          ['删除 [project] 项目并清除所有相关数据。 [linebreak] 注意此操作无法撤销！'],
        'You do not have the required permission to remove this project.': [
          '你没有删除该项目的权限。',
        ],
        'This project cannot be removed. It is used internally by the Sentry server.': [
          '该项目由 Sentry 服务器内部使用，无法删除。',
        ],
        'Remove project': ['移除项目'],
        'Removing this project is permanent and cannot be undone!': [
          '移除该项目的操作是永久的，无法撤销！',
        ],
        'This will also remove all associated event data.': [
          '该操作也将移除所有相关事件数据。',
        ],
        'Transfer the [project] project and all related data. [linebreak] Careful, this action cannot be undone.':
          ['转让 [project] 项目以及所有相关数据。[linebreak] 注意此操作无法撤销！'],
        'You do not have the required permission to transfer this project.': [
          '您没有权限转让本项目。',
        ],
        'This project cannot be transferred. It is used internally by the Sentry server.':
          ['这个项目不能被转移。它被Sentry服务内部使用。'],
        'Transfer project': ['转让项目'],
        'Transferring this project is permanent and cannot be undone!': [
          '转让此项目是永久性的，无法撤消！',
        ],
        'Organization Owner': ['组织所有者'],
        'Event Settings': ['事件设置'],
        'Client Security': ['客户端安全性'],
        'Configure origin URLs which Sentry should accept events from. This is used for communication with clients like [link].':
          ['配置Sentry接受事件的原始URL。这用于与类似[link]的客户端通信。'],
        'This will restrict requests based on the [Origin] and [Referer] headers.': [
          '这将限制基于[Origin]和[Referer]头的请求。',
        ],
        'Project Administration': ['项目管理'],
        'You are already on the latest version': ['您已使用最新版本'],
        'Enable Plugin': ['启用插件'],
        'Disable Plugin': ['禁用插件'],
        'Reset Configuration': ['重置配置'],
        'Plugin Information': ['插件信息'],
        Author: ['作者'],
        'Plugin was reset': ['插件已被重置'],
        'Configure plugin': ['设置插件'],
        'Legacy Integration': ['遗留集成'],
        'There are no mappings that match your search.': ['没有与您的搜索匹配的映射。'],
        'There are no mappings for this project.': ['此项目没有映射。'],
        "To configure [csp:CSP] reports\n              in Sentry, you'll need to send a header from your server describing your\n              policy, as well specifying the authenticated Sentry endpoint.":
          [
            '在Sentry中配置[csp:CSP]报告，您需要从您的服务器发送一个头部来描述您的策略，同时指定认证过的Sentry端。',
          ],
        'For example, in Python you might achieve this via a simple web middleware': [
          '例如，在Python中您可以通过一个web中间件来实现',
        ],
        'Alternatively you can setup CSP reports to simply send reports rather than\n              actually enforcing the policy':
          ['或者您可以将SCP报告设置为仅发送，而不实际执行策略。'],
        "We recommend setting this up to only run on a percentage of requests, as\n              otherwise you may find that you've quickly exhausted your quota. For more\n              information, take a look at [link:the article on html5rocks.com].":
          [
            '我们建议将其设置为仅在一定比例的请求上运行，否则您将会发现您的配额被快速耗尽。更多信息请查看[link:html5rocks.com上的文章]。',
          ],
        'Content Security Policy (CSP)': ['内容安全协议(CSP)'],
        About: ['关于'],
        "[link:Content Security Policy]\n            (CSP) is a security standard which helps prevent cross-site scripting (XSS),\n            clickjacking and other code injection attacks resulting from execution of\n            malicious content in the trusted web page context. It's enforced by browser\n            vendors, and Sentry supports capturing CSP violations using the standard\n            reporting hooks.":
          [
            '[link:内容安全政策]\n(CSP)是一个安全标准，用于防止由于在可信网页上下文中执行恶意内容而导致的跨站脚本（XSS）、点击注入和其他代码注入攻击。它由浏览器供应商实施，Sentry支持使用标准报告钩子捕获CSP违规行为。',
          ],
        'Certificate Transparency (Expect-CT)': ['证书透明度（Expect-CT）'],
        '[link:Certificate Transparency]\n      (CT) is a security standard which helps track and identify valid certificates, allowing identification of maliciously issued certificates':
          [
            '[link:证书透明度]\n(CT)是一个用于追踪和验证证书有效性的安全标准，可以识别恶意颁发的证书',
          ],
        "To configure reports in Sentry, you'll need to configure the [header] a header from your server:":
          ['在Sentry中配置报告，您需要配置服务器[header]头部：'],
        'For more information, see [link:the article on MDN].': [
          '更多信息，请查看[link:MDN上的文章]。',
        ],
        'Alternatively you can setup HPKP reports to simply send reports rather than\n              actually enforcing the policy':
          ['或者，您可以将HPKP报告设置为仅发送报告，而不实际执行策略'],
        "We recommend setting this up to only run on a percentage of requests, as\n              otherwise you may find that you've quickly exhausted your quota. For more\n              information, take a look at [link:the documentation on MDN].":
          [
            '我们建议将其设置为仅在一定比例的请求上运行，否则您将会发现您的配额被快速耗尽。更多信息请查看[link:MDN上的文档]。',
          ],
        'HTTP Public Key Pinning (HPKP)': ['HTTP公钥固定(HPKP)'],
        'HTTP Public Key Pinning': ['HTTP公钥固定'],
        "[link:HTTP Public Key Pinning]\n              (HPKP) is a security feature that tells a web client to associate a specific\n              cryptographic public key with a certain web server to decrease the risk of MITM\n              attacks with forged certificates. It's enforced by browser vendors, and Sentry\n              supports capturing violations using the standard reporting hooks.":
          [
            '[link:HTTP公钥固定]\n（HPKP）是一项安全功能，它告诉Web客户端将特定的加密公钥与特定的Web服务器相关联，以降低使用伪造证书进行MITM攻击的风险。它由浏览器供应商实施，Sentry支持使用标准报告钩子捕获违规行为。',
          ],
        "To configure HPKP reports\n              in Sentry, you'll need to send a header from your server describing your\n              policy, as well specifying the authenticated Sentry endpoint.":
          [
            '为了在Sentry中配置HPKP报告，您需要从服务器发送一个头部来表述你的策略，同时指定认证过的Sentry端。',
          ],
        'Security Header Reports': ['安全头部报告'],
        'Additional Configuration': ['附加配置'],
        'In addition to the [key_param] parameter, you may also pass the following within the querystring for the report URI:':
          ['除了[key_param]参数，您还可以在报告URI的查询字符串中传递以下内容：'],
        'The environment name (e.g. production)': ['环境名称（例如：生产环境）'],
        'The version of the application.': ['应用的版本'],
        'Supported Formats': ['支持的格式'],
        Instructions: ['说明'],
        "We've automatically pulled these credentials from your available [link:Client Keys]":
          ['我们已经自动从你可用的[link:客户端秘钥]拉取了这些证书。'],
        'Artifact removed.': ['工件已被删除。'],
        'Unable to remove artifact. Please try again.': ['无法删除工件，请重试。'],
        'Are you sure you want to remove this artifact?': ['是否要删除该工件？'],
        Artifacts: ['工件'],
        'This tag cannot be deleted.': ['这个标签不能被删除。'],
        'You do not have permission to remove tags.': ['您没有删除标签的权限。'],
        'Each event in Sentry may be annotated with various tags (key and value pairs).\n                 Learn how to [link:add custom tags].':
          [
            '在Sentry中每个事件都被各个标签（键值对）注释着。了解如何[link:添加自定义标签]。',
          ],
        'There are no tags, [link:learn how to add tags]': [
          '没有标签。[link:了解添加标签]',
        ],
        'Quick links': ['快速链接'],
        'Change my password': ['修改我的密码'],
        'Notification Preferences': ['通知选项'],
        'Change my avatar': ['修改我的头像'],
        'No Organization': ['没有组织'],
        'Quickstart Guide': ['快速链接'],
        'Platforms & Frameworks': ['平台和框架'],
        'Sentry CLI': ['Sentry CLI'],
        'Sentry on GitHub': ['Sentry在GitHub'],
        'Service Status': ['服务状态'],
        'Your Integrations': ['你的集成'],
        'Community Forums': ['社区论坛'],
        'Contact Support': ['联系支持'],
        'My Account': ['我的账户'],
        'Create a New Team': ['创建新团队'],
        'Sorry, no user reports match your filters.': [
          '抱歉，没有满足您过滤条件的事件。',
        ],
        '': {
          domain: 'sentry',
          plural_forms: 'nplurals=1; plural=0;',
          lang: 'zh_CN',
        },
      };
      e.exports = Object.assign(
        orgin,
        translatedOnly,
        trans0,
        trans1,
        trans2,
        trans3,
        trans4,
        trans5,
        trans6,
        trans7,
        trans8,
        trans9,
        trans10,
        trans11,
        trans12
      );
    },
  },
]);
//# sourceMappingURL=../../sourcemaps/locale/zh-cn.442445c9eb76b832e643472576925c1c.js.map
