#! /usr/bin/env node

// https://dev.to/rushankhan1/build-a-cli-with-node-js-4jbi
const yargs = require("yargs");
const utils = require('./utils.js')

const usage = "\nUsage: dart --new <project_name>";
const options = yargs  
      .usage(usage)  
      .option("n", {alias:"new", describe: "new project", type: "string", demandOption : true })
      .help(true)  
      .argv;

function run () {
    if(yargs.argv.n|| yargs.argv.new){  
        utils.newProject(yargs.argv.new || yargs.argv.n);
        return;  
    }
}

run();