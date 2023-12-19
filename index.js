#!/usr/bin/env node

const { program } = require("commander")
const fs = require("fs")
const path = require('path');
const ejs = require('ejs');

program
    .command("create <filename>")
    .description("Create a new file")
    .option("-c, --content <content>", "文件内容", "这是内容这是内容这是内容")
    .option("-t, --title <title>", "这是标题", "This is Title")
    .action(async (filename, option) => {
        const templatePath = path.join(__dirname, 'templates', 'component.ejs');
        const outputPath = path.join(process.cwd(), filename + '.js');
        // 读取 EJS 模板文件
        const templateContent = fs.readFileSync(templatePath, 'utf-8');

        // 编译 EJS 模板
        const template = ejs.compile(templateContent);

        // 定义模板数据
        const templateData = { componentName: filename };

        // 渲染模板并写入文件
        const result = template(templateData);
        fs.writeFileSync(outputPath, result);

        console.log(`Component '${filename}' generated successfully at: ${outputPath}`);


        // console.log(option)
        // if (option.title) {
        //     fs.writeFileSync(filename, `# ${option.title}`)
        // }
        // if (option.content) {
        //     const content = await fs.readFileSync(filename)
        //     fs.writeFileSync(filename, content + "\n" + option.content)
        // }
        // console.log(`File '${filename}' created successfully.`)
    })

program.parse(process.argv)
