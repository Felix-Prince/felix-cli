# felix-cli

> 学习开发一个简单的前端脚手架，并且发不到 npm 上，通过命令行的方式运行

## 最简单的 cli

在 package.json 中增加 `bin`

```json
"bin": {
    "felix-cli": "index.js"
}
```

根目录下增加 `index.js`

```js
#!/usr/bin/env node

console.log("helo, world!");
```

`#!/usr/bin/env node` 这段并不是注释，这段代码是告诉你的脚本工具(bash/zsh), 下面的内容是要在 node 环境下运行的代码。千万不能省略！！！

这时候如果我们直接在终端执行 `felix-cli`,得到的是 `zsh: command not found: felix-cli`
要想解决这个问题有如下方法：

1. 把包发布到 npm，然后全局安装
2. 通过 `npm link` ，在项目根目录下执行该命令，然后执行 `felix-cli`,就可以在终端看到输出的 "hello,world"
