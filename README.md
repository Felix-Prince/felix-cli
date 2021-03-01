# felix-cli

> 学习开发一个简单的前端脚手架，并且发不到 npm 上，通过命令行的方式运行

## 最简单的 cli

在 package.json 中增加 `bin` —— [bin 说明](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#bin)

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

## 命令行交互

`commander`: 用于获取命令行参数，并对参数作出响应 [README](https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md)
`inquirer`: 提供问答式的交互 [README](https://github.com/SBoudrias/Inquirer.js)

修改原先的 `index.js`

```js
#!/usr/bin/env node

const { program } = require("commander");
program.version("0.0.1");

program.parse(process.argv);
```

接着就可以通过命令行加对应参数来显示对应内容了

```bash
felix-cli -V
## -> 0.0.1

felix-cli -h
## Usage: felix-cli [options]

## Options:
##   -V, --version  output the version number
##   -h, --help     display help for command
```

## 拉取模板库

`download-git-repo`: 用于拉取 github 上的 repo [README](https://github.com/ianstormtaylor/download-github-repo)

修改我们的 `index.js`

```js
#!/usr/bin/env node

console.log("--running felix-cli start--");

const { program } = require("commander");
const download = require("download-git-repo");
program.version("1.0.0");

program.parse(process.argv);

download(
    "direct:https://github.com/Felix-Prince/leetcode.git",
    "../template",
    { clone: true },
    (err) => {
        console.log("--------", err);
    }
);
```

上面我简单的找了个库来处理，这里可以有很多的交互，到这里一个最最最简陋的命令行工具就完成了
