#! /usr/bin/env node

// https://dev.to/rushankhan1/build-a-cli-with-node-js-4jbi
const yargs = require("yargs");
const utils = require("./utils.js");

const usage = "\nUsage: dart <web|server> <project_name>";

yargs
    .usage(usage)
    .command({
        command: 'server <project_name>',
        aliases: ['s'],
        desc: 'Generate server project',
        builder: (yargs) => {
            return yargs.positional('project_name', {
                describe: 'created project name'
            })
        },
        handler: serverGenerator
    })
    .command({
        command: 'web <project_name>',
        aliases: ['w'],
        desc: 'Generate web project',
        builder: (yargs) => {
            return yargs.positional('project_name', {
                describe: 'created project name'
            })
        },
        handler: webGenerator
    })
    .demandCommand(1, `Please use suggested command above to work with this tool.`)
    .help().argv;

function webGenerator(argv) {
    console.log(`Start generate web project:`, argv.project_name);
    utils.newProject(argv.project_name);
}
function serverGenerator(argv) {
    console.log(`Start generate server project:`, argv.project_name);
    // utils.newProject(argv.project_name);
}

function run() {
    
}

run();
