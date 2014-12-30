#!/usr/bin/env node
var greet = require("../index.js");
var parseArgs = require("minimist");

var args = parseArgs(process.argv.slice(2))
console.log(greet(args._[0], args.drunk))
