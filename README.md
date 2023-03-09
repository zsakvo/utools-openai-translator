## OpenAI Translator uTools Extension

`很遗憾，只是做了一些微小的工作。`

基于 `yetone` 开发的 chrome 划词翻译插件 [openai-translator](https://github.com/yetone/openai-translator) 移植，使其可以运行在 `uTools` 上，便于全局调用

# 使用截图

<img width="800" src="https://user-images.githubusercontent.com/25399519/223890372-028ae193-8ede-4e97-a84c-c6349d100b8c.png" />

# 特性

1. 支持三种翻译模式：翻译、润色、总结
2. 支持 55 种语言的相互翻译、润色和总结功能
3. 支持实时翻译、润色和总结，以最快的速度响应用户，让翻译、润色和总结的过程达到前所未有的流畅和顺滑
4. 支持自定义翻译文本
5. 支持一键复制
6. ~~支持 TTS~~

# 安装方法

并不上架 utools，目前可自行编译后载入。

1. 下载并编译源代码

```shell
gh repo clone zsakvo/utools-openai-translator
cd utools-openai-translator
yarn install
yarn build
```

2. 在 uTools 中安装 `uTools 开发者工具`（会需要你登录帐号）

3. 载入 `dist/plugin.json` 即可

4. 去 [OpenAI](https://platform.openai.com/account/api-keys) 获取你的 API KEY

<img width="600" src="https://user-images.githubusercontent.com/1206493/223043946-0e7486ca-94d7-4324-a4f2-f62b9a3d527d.png" />

6. 把 API KEY 填入此插件配置界面的 API KEY 输入框中

<img width="600" src="https://user-images.githubusercontent.com/1206493/222958165-159719b4-28a5-44a4-b700-567786df7f03.png" />

7. 刷新浏览器页面，即可享受丝滑般的划词翻译体验 🎉

# 请作者喝一杯咖啡（此为原作者的赞赏码，未作任何修改）

<div align="center">
<img height="360" src="https://user-images.githubusercontent.com/1206493/220753437-90e4039c-d95f-4b6a-9a08-b3d6de13211f.png" />
<img height="360" src="https://user-images.githubusercontent.com/1206493/220756036-d9ac4512-0375-4a32-8c2e-8697021058a2.png" />
</div>
