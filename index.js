#!/usr/bin/env node
'use strict';

const fs = require('fs'),
      format = require('xml-formatter'),
      path = require('path'),
      yargs = require('yargs'),
      options = { indentation: '   ' };

const args = yargs
   .usage('Usage: $0 [options...] <url>')
   .string('o')
   .alias('o', 'output')
   .nargs('o', 1)
   .describe('o', 'File to write pretty xml to (if empty, writes to stdout)')
   .help('h')
   .alias('h', 'help')
   .demandCommand(1)
   .argv;

const xml = fs.readFileSync(args._[0], 'utf-8'),
      formattedXML = format(xml, options);

if (args.o) {
   fs.writeFileSync(args.o, format(xml, options), 'utf-8');
} else {
   console.log(formattedXML);
}
