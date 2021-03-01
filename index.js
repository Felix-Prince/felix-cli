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
