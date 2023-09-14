export const languageChinese = {
	"formating": {
		"main": "主提示词",
		"jailbreak": "越狱提示词",
		"chats": "过去的聊天",
		"lorebook": "Lorebook",
		"globalNote": "全局注释",
		"authorNote": "作者注释",
		"lastChat": "最后的聊天",
		"description": "角色描述",
		"personaPrompt": "人物提示词",
		"plain": "基础提示"
	},
	"errors": {
		"toomuchtoken": "错误：所需的最低token数超过了最大上下文大小。",
		"unknownModel": "错误：选择了未知的模型",
		"httpError": "错误：请求中出现错误：",
		"noData": "文件中没有数据，或者文件已损坏",
		"onlyOneChat": "至少必须有一条聊天记录",
		"alreadyCharInGroup": "在该群组中已经有一个同名的角色了。",
		"noUserIcon": "你必须先设置你的头像。"
	},
	"showHelp": "显示帮助",
	"help": {
		"model": "模型选项是聊天中使用的主要模型。",
		"submodel": "辅助模型是用于分析情绪图像，自动建议等的模型。推荐使用gpt3.5。",
		"oaiapikey": "OpenAI的API密钥。你可以在https://platform.openai.com/account/api-keys 处获取。",
		"mainprompt": "主提示词选项设定了默认模型的行为。",
		"jailbreak": "当角色中启动NSFW(成人模式)/越狱开关时，NSFW(成人模式)/越狱提示词选项将被激活。",
		"globalNote": "强烈影响模型行为的全局注释，也被称为UJB。在所有角色中都起作用。",
		"autoSuggest": "用于生成自动建议用户回应时的提示词。",
		"formatOrder": "提示词的格式化顺序。位置越靠下的模块对模型的影响更大。",
		"forceUrl": "如果不为空，请求将会被发送到你输入的URL。",
		"tempature": "较低的值能够让角色紧密地遵循提示词，但它更可能像机器一样回应。\n较高的值将使回复更具创造性，但角色的回应可能更容易崩溃。",
		"frequencyPenalty": "较高的值能够防止在回应中使用重复的单词，但角色的回应可能更容易崩溃。",
		"presensePenalty": "较高的值能够防止在所有上下文中使用重复的单词，但角色的回应可能更容易崩溃。",
		"sdProvider": "图像生成的提供商。",
		"msgSound": "角色回应时播放*叮*的声音",
		"charDesc": "角色的简要描述。这会影响角色的回应。",
		"charFirstMessage": "角色的第一条信息。这会极大地影响角色的回应。",
		"charNote": "强烈影响模型行为的角色注释。嵌入到当前角色中。也被称为记忆或UJB。",
		"toggleNsfw": "启用NSFW(成人模式)/越狱",
		"lorebook": "lorebook是用户制作的AI词典。只有当上下文中有激活关键字时，AI才会看到它。",
		"loreName": "lorebook的名称。它不会影响AI。",
		"loreActivationKey": "如果上下文中存在其中激活关键字，lorebook就会被激活，提示词才会介入。用逗号分隔。",
		"loreorder": "lore插入顺序更高，它会更多地影响模型，而当激活的lorebook较多时，它会被剪裁的更少。",
		"bias": "偏差是一种修改字符串出现概率的键值数据。\n它可以从-100到100，更高的值会更可能出现，更低的值则不太可能出现\n警告：如果分词器出错，它可能无法正常工作。",
		"emotion": "激活情绪图像功能会使系统根据角色的情绪显示图像，该情绪是通过分析角色的回应得出的。你必须输入情绪名称作为单词 *(如 joy，happy，fear 等)*。如果存在，以**neutral**命名的情绪将成为默认情绪。必须有3个以上的图像才能正常工作。",
		"imggen": "图像生成功能会从外部程序生成并显示图像。该图像是通过分析当前聊天生成的图像提示词生成的。\n\n图像生成功能是基于键值参数进行分析的，这些参数可以在下面配置。\n\n**'always'** 键总是应用，并且不会改变。**'negative'** 键对于图像生成始终应用负值。\n\n其他键的值将根据随着聊天的进行而改变。\n\n如果一个键的名字前面有特殊字符，它就有特殊的效果。\n- 如果键以 **|** 开始，键的值将不会改变。\n- 如果键以 **$** 开始，键的值更有可能改变。\n\n当图像首次生成时，你只能通过修改下面的'当前图像生成数据'来改变它。",
		"regexScript": "正则表达式脚本是一个自定义脚本，它将匹配到的IN字符串替换为OUT。\n\n有四种类型的选项。\n\n- **修改输入**修改用户的输入。\n\n- **修改输出**修改字符的输出。\n\n- **更改请求数据**在发送时修改当前聊天数据。\n\n- **修改显示**只在显示时修改文本，而不修改聊天数据。\n\nIN必须是一个没有标记且开始和结束时没有斜杠的正则表达式。\n\nOUT是一个可以包含替换模式的字符串。这些是模式：\n\n- $$\n\n    - 插入$\n\n- $&\n\n    - 插入匹配的子字符串。\n\n- $`\n\n    - 插入匹配子字符串之前的字符串部分。\n\n- $1\n\n    - 插入第一个匹配的组。与其他数字如2，3等一起工作...\n\n- $(name)\n\n    - 插入命名的组\n\n如果OUT以 **@@** 开始，它不会替换字符串，而是在找到匹配字符串时产生特殊效果。\n\n- @@emo (情绪名称)\n\n    - 如果角色处于情绪图像模式，将(情绪名称)设置为情绪，并阻止默认设置。",
		"experimental": "这是一个不稳定的实验性功能。",
		"oogaboogaURL": "如果你的WebUI支持旧版本的api，你的url应该像*https:.../run/textgen*\n\n如果你的WebUI支持新版api，你的url应该像*https://.../api/v1/generate* 使用api服务器作为主机，并将--api添加到参数中。",
		"exampleMessage": "影响角色输出的示例对话。它不会永久性地使用token。\n\n对话的示例格式：\n\n```\n<START>\n{{user}}: 嗨\n{{char}}: 你好\n<START>\n<user>: 嗨\nHaruhi: 你好\n```\n\n```<START>``` 标记新对话的开始。",
		"creatorQuotes": "注意本栏中的内容会在第一条消息的上方出现。用于告知用户有关该角色的信息。它不会进入提示词中。",
		"systemPrompt": "如果不为空，将替换设置中的主要提示词。",
		"chatNote": "强烈影响模型行为的聊天注释。嵌入到当前聊天中。也被称为记忆或ujb。",
		"personality": "关于角色个性的简短描述。\n\n**不建议使用此选项。改为在角色描述中进行描述。**",
		"scenario": "关于角色情境的简短描述。\n\n**不建议使用此选项。改为在角色描述中进行描述。**",
		"utilityBot": "激活后，它会忽略主要提示。\n\n**不建议使用此选项。改为修改系统提示词。**",
		"loreSelective": "如果切换选择性的，则激活键和次要键都应有匹配项才能激活lorebook。",
		"loreRandomActivation": "如果启用了概率条件，那么当lorebook的其他条件都已满足时，每次发送聊天时lorebook将以“概率”设置的概率被激活。",
		"additionalAssets": "在你的聊天中显示的额外资源。\n\n - 使用`{{raw::<asset name>}}`作为路径\n - 使用`{{img::<asset name>}}`作为图片\n - 使用`{{video::<asset name>}}`作为视频\n - 使用`{{audio::<asset name>}}` 作为音频\n    - 建议放在背景 HTML中",
		"superMemory": "超级记忆通过给 AI 提供总结数据使你的角色记忆更多信息\n\n超级记忆模型是一个总结文本的模型。推荐使用Davinci，除非是具有超过2000个token数的高度总结能力的未经过滤模型，否则不推荐使用辅助模型。\n\n超级记忆提示决定了应发送什么提示词进行总结。如果你留空，它将使用默认提示词。建议留空。\n\n在所有设置都完成后，你可以在角色的设置中启用它。",
		"replaceGlobalNote": "如果不为空，则将当前全局注释替换为此。",
		"backgroundHTML": "将被注入聊天屏幕背景的Markdown/HTML数据。\n\n你也可以使用其他资源。例如，你可以使用`{{audio::<asset name}}`添加背景音乐\n\n此外，你还可以将这些数据与其他资源一起使用：\n - `{{bg::<asset name>}}`: 将背景注入资源"
	},
	"setup": {
		"chooseProvider": "选择AI提供商",
		"openaikey": "使用API密钥的OpenAI（推荐）",
		"openaiProxy": "OpenAI反向代理",
		"setupmodelself": "其他/我将自行设置",
		"inputApiKey": "在此输入API密钥",
		"apiKeyhelp": "你可以从以下地址获取API KEY：",
		"setupSelfHelp": "欢迎界面结束后在设置中自行设置",
		"theme": "选择你的主题",
		"themeDescWifulike": "不适合移动设备",
		"themeDescWifuCut": "适合移动设备",
		"themeDescClassic": "适合所有设备",
		"texttheme": "选择你的文字颜色",
		"inputName": "最后，输入你的昵称。"
	},
	"confirm": "确认",
	"goback": "返回",
	"botSettings": "机器人设置",
	"model": "模型",
	"apiKey": "API密钥",
	"providerURL": "请求URL",
	"providerJSON": "请求体JSON",
	"mainPrompt": "主要提示",
	"jailbreakPrompt": "NSFW/越狱提示",
	"globalNote": "全局注释",
	"autoSuggest": "自动建议",
	"tokens": "tokens",
	"maxContextSize": "最大上下文大小",
	"maxResponseSize": "最大响应大小",
	"temperature": "温度",
	"frequencyPenalty": "频率惩罚",
	"presensePenalty": "存在惩罚",
	"advancedSettings": "高级设置",
	"advancedSettingsWarn": "警告：如果你不知道该选项的作用，请不要更改它！",
	"formatingOrder": "格式化顺序",
	"authorNote": "作者注释",
	"firstMessage": "第一条消息",
	"description": "描述",
	"jailbreakToggle": "启用NSFW/越狱",
	"charIcon": "角色头像",
	"characterDisplay": "角色展示",
	"viewScreen": "额外角色屏幕",
	"none": "无",
	"emotionImage": "情绪图像",
	"noImages": "没有图像",
	"noBias": "无偏差",
	"image": "图像",
	"name": "名称",
	"emotion": "情绪名称",
	"value": "值",
	"reroll": "重新生成",
	"chatList": "聊天列表",
	"removeChat": "删除这条消息？",
	"loreBook": "Lorebook",
	"character": "角色",
	"Chat": "聊天",
	"globalLoreInfo": "角色Lorebook适用于该角色的所有聊天。",
	"group": "群组",
	"groupLoreInfo": "群组Lorebook适用于该群组的所有聊天。",
	"localLoreInfo": "聊天Lorebook仅适用于当前聊天。",
	"removeConfirm": "你真的要删除： ",
	"removeConfirm2": "你真的要删除： ",
	"exportConfirm": "你想要导出这个吗？",
	"insertOrder": "插入顺序",
	"activationKeys": "激活键",
	"activationKeysInfo": "用逗号分隔",
	"prompt": "提示",
	"loreBookDepth": "Lorebook搜索深度",
	"loreBookToken": "Lorebook最大tokens数",
	"removeCharacter": "删除角色",
	"removeGroup": "删除群组",
	"exportCharacter": "导出角色",
	"userSetting": "用户设置",
	"username": "你的姓名",
	"userIcon": "你的头像",
	"successExport": "成功导出并下载到你的下载目录中",
	"successImport": "成功导入",
	"importedCharacter": "已导入的角色",
	"alwaysActive": "始终激活",
	"additionalPrompt": "附加提示",
	"descriptionPrefix": "描述前缀",
	"forceReplaceUrl": "反向代理",
	"emotionWarn": "辅助模型正在使用中。",
	"plugin": "插件",
	"language": "语言",
	"UiLanguage": "UI语言",
	"createfromScratch": "从头创建",
	"importCharacter": "导入角色",
	"translator": "翻译器",
	"disabled": "已禁用",
	"noPluginSelected": "已将模型设置为插件，但未选择任何插件。",
	"text": "文本",
	"UISize": "聊天文本大小",
	"newVersion": "发现更新，是否要安装？",
	"display": "显示&音频",
	"useCustomBackground": "自定义背景",
	"translateInput": "翻译输入",
	"autoTranslation": "自动翻译",
	"fullscreen": "全屏",
	"playMessage": "播放消息音频",
	"iconSize": "头像大小",
	"createGroup": "创建群组",
	"groupIcon": "群组头像",
	"single": "单个",
	"multiple": "多个",
	"useCharLorebook": "在角色中使用Lorebook",
	"selectChar": "选择角色",
	"askLoadFirstMsg": "是否加载第一条消息？",
	"theme": "主题",
	"editOrder": "编辑顺序",
	"autoMode": "自动模式",
	"submodel": "辅助模型",
	"timeOutinSec": "超时（秒）",
	"emotionPrompt": "情绪提示词",
	"singleView": "单角色视图",
	"SpacedView": "多角色视图",
	"emphasizedView": "双角色视图",
	"pluginWarn": "插件在隔离的环境中运行，但安装恶意插件可能会导致问题。",
	"createGroupImg": "生成群组头像",
	"waifuWidth": "虚拟伴侣聊天宽度",
	"savebackup": "将备份保存到Google",
	"loadbackup": "从Google加载备份",
	"files": "文件",
	"backupConfirm": "你真的想要保存备份吗？",
	"backupLoadConfirm": "你真的想要加载备份吗？所有数据将丢失！",
	"backupLoadConfirm2": "你真的，真的想要加载备份吗？所有数据将丢失！",
	"pasteAuthCode": "请从弹出窗口中复制授权代码并粘贴到此处：",
	"others": "其他",
	"presets": "预设",
	"imageGeneration": "图像生成",
	"provider": "提供商",
	"key": "键",
	"noData": "无数据",
	"currentImageGeneration": "当前图像生成数据",
	"promptPreprocess": "使用提示词预处理",
	"SwipeRegenerate": "使用滑动箭头重新生成消息",
	"instantRemove": "在删除消息时删除后续消息",
	"instantRemoveConfirm": "你是否想只删除一条消息？如果你选择否，那么它下面的消息也将被删除。",
	"textColor": "文本颜色",
	"classicRisu": "经典Risu",
	"highcontrast": "高对比度",
	"quickPreset": "你可以通过 Ctrl +（预设的索引）快速更改预设",
	"requestretrys": "请求失败时重试",
	"utilityBot": "实用机器人",
	"ShowLog": "显示请求日志",
	"waifuWidth2": "虚拟伴侣大小",
	"sayNothing": "当没有字符串输入时自动发送'say nothing'",
	"regexScript": "正则表达式",
	"type": "类型",
	"editInput": "修改输入",
	"editOutput": "修改输出",
	"editProcess": "修改请求数据",
	"loadLatest": "加载最新的备份",
	"loadOthers": "加载其他备份",
	"exampleMessage": "示例消息",
	"creatorNotes": "角色创作者的评论",
	"systemPrompt": "系统提示词",
	"characterNotes": "角色备注",
	"personality": "个性",
	"scenario": "情境",
	"alternateGreetings": "备用问候语",
	"unrecommended": "不推荐",
	"chatNotes": "聊天笔记",
	"showUnrecommended": "显示不推荐的设置",
	"altGreet": "备选问候语",
	"scripts": "脚本",
	"settings": "设置",
	"selective": "选择性的",
	"SecondaryKeys": "次要键",
	"useGlobalSettings": "使用全局设置",
	"recursiveScanning": "递归扫描",
	"creator": "创作者",
	"CharVersion": "角色版本",
	"Speech": "语音",
	"ToggleSuperMemory": "启用超级记忆",
	"SuperMemory": "超级记忆",
	"useExperimental": "启用实验性功能",
	"showMemoryLimit": "显示记忆限制",
	"roundIcons": "圆形头像",
	"streaming": "流式传输",
	"chatBot": "聊天机器人",
	"otherBots": "其他机器人",
	"user": "用户",
	"additionalAssets": "额外资源",
	"editDisplay": "修改显示",
	"community": "社区",
	"textBackgrounds": "自定义文本屏幕颜色",
	"textBorder": "文本轮廓",
	"textScreenRound": "圆角文本屏幕",
	"textScreenBorder": "文本屏幕边框",
	"ttsReadOnlyQuoted": "TTS仅阅读引号内的文本",
	"ttsStop": "停止TTS（文转语音）",
	"askRemoval": "删除消息时询问",
	"replaceGlobalNote": "替换全局注释",
	"charLoreBook": "角色LoreBook",
	"globalLoreBook": "全局LoreBook",
	"globalRegexScript": "全局正则表达式",
	"accessibility": "易访问性",
	"sendWithEnter": "用回车键发送",
	"clickToEdit": "点击文本以编辑",
	"setNodePassword": "设置你的密码以确保安全",
	"inputNodePassword": "输入你的密码。如果你不记得，请删除服务器文件中的save/__password.txt并重新启动服务器。",
	"simple": "简易",
	"advanced": "高级",
	"askReRollAutoSuggestions": "重新生成自动建议",
	"creatingSuggestions": "生成建议中...",
	"orderByOrder": "按顺序交谈",
	"removeFromGroup": "你真的想从群组中删除{{char}}吗？",
	"talkness": "健谈程度",
	"active": "活跃",
	"loreRandomActivation": "使用概率条件",
	"activationProbability": "概率",
	"shareCloud": "分享到RisuRealm",
	"hub": "RisuRealm",
	"tags": "标签",
	"backgroundHTML": "背景嵌入",
	"copied": "已复制",
	"useChatCopy": "使用聊天复制",
	"useChatSticker": "使用聊天贴纸",
	"useAdditionalAssetsPreview": "使用额外资源预览",
	"autoTranslateInput": "自动翻译输入",
	"enterMessageForTranslateToEnglish": "输入要翻译成英语的消息",
	"recent": "最新",
	"downloads": "下载量",
	"trending": "最热",
	"imageCompression": "图像压缩",
	"notLoggedIn": "未登录到Risu帐户",
	"googleDriveInfo": "连接到Google Drive以同步你的数据。",
	"googleDriveConnection": "Google Drive连接",
	"googleDriveConnected": "Google Drive已连接",
	"SaveDataInAccount": "在帐户中保存数据",
	"dataSavingInAccount": "在帐户中保存数据",
	"logout": "注销",
	"loadDataFromAccount": "从帐户加载数据",
	"saveCurrentDataToAccount": "将当前数据保存到帐户",
	"chatAssumed": "",
	"proxyAPIKey": "代理API密钥/密码",
	"proxyRequestModel": "代理请求模型",
	"officialWiki": "官方Wiki",
	"officialWikiDesc": "RisuAI的官方Wiki，随意查看。",
	"officialDiscord": "官方Discord",
	"officialDiscordDesc": "用于讨论RisuAI的官方Discord服务器",
	"confirmRecommendedPreset": "该模型有一个推荐设置。你想将设置更改为该推荐设置吗？（你可以在可访问性设置中关闭询问）",
	"toggleConfirmRecommendedPreset": "更改模型时询问是否使用推荐设置",
	"recommendedPreset": "设置为推荐设置",
	"persona": "用户信息",
	"icon": "头像",
	"account": "账号",
	"remove": "删除",
	"creationSuccess": "创建成功",
	"noweb": "此功能无法在Web版本上使用。",
	"createBotInternet": "使用AI从互联网创建机器人",
	"createBotInternetAlert": "请提供角色的名称和相应的系列/游戏。",
	"able": "能够",
	"assetWidth": "资源图像最大宽度",
	"animationSpeed": "动画速度",
	"screenshot": "截图",
	"screenshotSaved": "截图已保存",
	"inputBotGenerationPrompt": "输入机器人生成提示",
	"createBotAI": "使用AI创建OC机器人",
	"createBotwithAI": "使用AI创建机器人",
	"changeFolderName": "输入新文件夹名称（留空以取消）",
	"cancel": "取消",
	"renameFolder": "重命名文件夹",
	"changeFolderColor": "更改文件夹颜色",
	"fullWordMatching": "完整单词匹配",
	"botSettingAtStart": "启动时的机器人菜单",
	"triggerStart": "在聊天发送时触发",
	"triggerInput": "在用户输出时触发",
	"triggerOutput": "在角色输出时触发",
	"triggerManual": "仅手动触发",
	"triggerCondVar": "如果变量",
	"triggerCondExists": "如果聊天中存在文本",
	"triggerScript": "触发脚本",
	"triggerMatchRegex": "与正则表达式匹配",
	"triggerMatchLoose": "宽松匹配",
	"triggerMatchStrict": "严格匹配",
	"searchDepth": "搜索深度",
	"equal": "等于",
	"notEqual": "不等于",
	"greater": "大于",
	"less": "小于",
	"greaterEqual": "大于或等于",
	"lessEqual": "小于或等于",
	"triggerEffSysPrompt": "添加系统提示",
	"triggerEffSetVar": "修改变量",
	"triggerEffImperson": "发送聊天",
	"varableName": "变量名",
	"role": "角色",
	"location": "位置",
	"promptstart": "提示开始",
	"promptend": "提示结束",
	"historyend": "历史结束",
	"always": "总是",
	"noEffect": "无效果",
	"invaildTriggerEffect": "此效果不适用于此触发器类型。",
	"operator": "运算符",
	"TriggerSetToVar": "设置为变量",
	"TriggerAddToVar": "添加到变量",
	"TriggerSubToVar": "从变量中减去",
	"TriggerMulToVar": "乘以变量",
	"TriggerDivToVar": "除以变量",
	"isNull": "未设置",
	"ifChatIndex": "如果聊天索引",
	"ifRandom": "如果随机",
	"hideRealm": "隐藏RisuRealm",
	"popularityLevel": "{} 流行度",
	"colorScheme": "配色方案",
	"rangeStart": "范围开始",
	"rangeEnd": "范围结束",
	"untilChatEnd": "直到聊天结束",
	"usePromptTemplate": "使用提示模板",
	"specialType": "特殊类型",
	"noSpecialType": "无特殊类型",
	"forceProxyAsOpenAI": "强制代理格式为 OpenAI",
	"promptTemplate": "提示模板",
	"customInnerFormat": "自定义内部格式",
	"innerFormat": "内部格式",
	"HypaMemory": "HypaMemory",
	"ToggleHypaMemory": "启用HypaMemory",
	"resetPromptTemplateConfirm": "你确定要重置提示词模板吗？",
	"emotionMethod": "情绪方法",
	"continueResponse": "继续响应",
	"showMenuChatList": "显示聊天菜单列表",
	"translatorLanguage": "翻译语言",
	"translatorType": "翻译类型",
	"deeplKey": "deepl API密钥",
	"deeplFreeKey": "deepl 免费 API密钥",
	"exportPersona": "导出角色",
	"importPersona": "导入角色",
	"export": "导出",
	"import": "导入",
	"supporterThanks": "支持者感谢",
	"supporterThanksDesc": "感谢你的支持！",
	"donatorPatreonDesc": "默认情况下，不会在列表中显示，以保护隐私。如果你想显示你的昵称，请前往RisuAI的Patreon页面并按下链接按钮。",
	"useNamePrefix": "使用名称前缀",
	"textAdventureNAI": "以NAI模式运行",
	"appendNameNAI": "在NAI上附加名称"
}