#!/usr/bin/env node

const { program } = require("commander")
const fs = require("fs")

program
    .command("create <filename>")
    .description("Create a new file")
    .action((filename) => {
        fs.writeFileSync(filename, "")
        console.log(`File '${filename}' created successfully.`)
    })

program
    .command("delete <filename>")
    .description("Delete a file")
    .action((filename) => {
        try {
            fs.unlinkSync(filename)
            console.log(`File '${filename}' deleted successfully.`)
        } catch (error) {
            console.error(`Error deleting file: ${error.message}`)
        }
    })

program.parse(process.argv)
