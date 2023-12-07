# felix-cli 命令行工具

## 背景

目前 `react-web-template` 项目脚手架已经配置的基本完善，为了方便使用或者说显得更有逼格，同时也想要好好学习一下命令行工具的开发


## 目的

- 首要目的是能够快捷的把模板下载到本地，同时支持在命令行对模板重命名
  - 文件夹名称
  - package.json 里的名称
  - repository / homepage 这些原模板的配置需要去掉
  - ...
- 根据指令增加 dockerFile 配置
  - 这个可以在本地起 docker 进行验证
- 生产基于 pnpm workspace 的 monorepo 目录结构 （低优）
  - 生成基础的两个 repo 即可
  - repo 的名称自增

## 术语

|名称     |解释   |
|:--------|:-------|
|[react-web-template](https://github.com/Felix-Prince/React-Web-Template)| 这个是一个react 的模板项目 |


## 功能设计

> 该命令行工具，将基于上面的目的暂时分为三个迭代版本进行开发，也依据目标来进行拆分到每个阶段

### V1.0.0 版本功能

```base
## 期望的输入 felix-cli [project-name]
felix-cli react-app-demo
```
上面是我在终端进行输入的，首先是一个指令 felix-cli 这个就是当前的命令行工具，第二个参数是项目的名称（理论上是允许不传的，默认就是 react-web-template）

最终生成的项目的文件夹名称就是 react-app-demo，同时 package.json 中的，这里的 description 就不再终端输入了，明显在项目里去改更简单

⚠️应该还是需要把原来的 repository / homepage 的地址去掉才行

```json
{
	"name": "react-app-demo",
	"version": "1.0.0",
	"description": "自己搭建的一个前端脚手架，用于后面自己各个项目的使用",
	"main": "index.js",
}
```

### V2.0.0 版本功能

动态生成 `.DockerFile` 这个可以参考一下 gpt 回答的方式，具体因为没试过，后续可以继续基于 gpt 来进行尝试开发

```plain
我： 命令行交互的时候怎么根据命令执行不同的操作，比如我需要项目是ts的，难道我要给我的模板特地写一套 ts的代码吗

gpt：在命令行交互的时候，根据用户输入的命令执行不同的操作，通常可以通过条件判断语句（如if…else或switch…case）来实现。例如，如果用户输入的命令是"ts"，那么就执行与TypeScript相关的操作。

至于项目模板的问题，你并不一定需要为不同的技术栈（例如JavaScript和TypeScript）分别创建一套模板代码。一个更好的方法是，创建一个基础的模板，然后根据用户在命令行中的输入动态地添加或修改模板中的内容。

例如，你的基础模板可能只包含一些公共的文件和代码，如.gitignore文件、README文件、公共的配置文件等。然后，如果用户选择使用TypeScript，你的工具就会在这个基础模板的基础上添加tsconfig.json文件，将JavaScript文件改为TypeScript文件等。

你可以通过模板引擎（如EJS、Handlebars等）来实现这种动态生成模板的功能。在模板中，你可以设置一些占位符，然后在运行时根据用户的输入替换这些占位符。
```

这个 dockerFile 需要实现是 build 和 run 的功能，相对来说是比较简单的



### V3.0.0

到这一步后，需要在原先的模板基础上，再上一层，在顶层目录增加 package.json pnpm-workspace.yaml 等配置，我们的模板就是一个单独的 repo 了，大概的目录结构如下

```
mono-repo
|---- repo1
      |----package.json
|---- repo2
      |----package.json
package.json
pnpm-workspace.yaml
```

这里的 repo1 和 repo2 就是我们的模板了



























