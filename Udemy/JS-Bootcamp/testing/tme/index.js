#!/usr/bin/env node

const Runner = require('./runner');
const runner = new Runner();

const run = async () => {
  await runner.collecFiles(process.cwd());

  runner.runTest();
};

run();
