#!/usr/bin/env node

const { program } = require("commander")
const fs = require("fs")

program
    .command("create <filename>")
    .description("Create a new file")
    .option("-c, --content <content>", "文件内容", "这是内容这是内容这是内容")
    .option("-t, --title <title>", "这是标题", "This is Title")
    .action(async (filename, option) => {
        console.log(option)
        if (option.title) {
            fs.writeFileSync(filename, `# ${option.title}`)
        }
        if (option.content) {
            const content = await fs.readFileSync(filename)
            fs.writeFileSync(filename, content + "\n" + option.content)
        }
        console.log(`File '${filename}' created successfully.`)
    })

program.parse(process.argv)
