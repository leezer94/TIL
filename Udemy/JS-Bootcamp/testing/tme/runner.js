const fs = require('fs');
const path = require('path');
const render = require('./render');
const forbiddenDirs = ['node_modules'];

class Runner {
  constructor() {
    this.testFiles = [];
  }

  async runTest() {
    for (let file of this.testFiles) {
      console.log(`---- ${file.shortName} ----`);
      const beforeEaches = [];
      global.render = render;
      global.beforeEach = (fn) => {
        beforeEaches.push(fn);
      };

      // if node finds 'it' node will automatically run this function
      global.it = async (desc, fn) => {
        beforeEaches.forEach((func) => func());

        try {
          await fn();
          // if test is passed this console will run
          console.log(`\tPass - ${desc}`);
        } catch (err) {
          console.log(`\tFail - ${desc}`);
          // '\t' this gives indent in a message
          console.log('\t', err.message);
        }
      };

      try {
        // node is going to find a file and excute
        require(file.name);
      } catch (err) {
        const message = err.message.replace(/n/g, '\n\t\t');
        console.log(message);
      }
    }
  }

  // this look for the test files by iterating files
  async collecFiles(targetPath) {
    const files = await fs.promises.readdir(targetPath);

    for (let file of files) {
      // by calling lstat we can figure out if file is folder or file that we are looking for
      const filepath = path.join(targetPath, file);
      const stats = await fs.promises.lstat(filepath);

      if (stats.isFile() && file.includes('.test.js')) {
        this.testFiles.push({ name: filepath, shortName: file });
      } else if (stats.isDirectory() && !forbiddenDirs.includes(file)) {
        const childFiles = await fs.promises.readdir(filepath);

        // this one is confusing
        files.push(...childFiles.map((f) => path.join(file, f)));
      }
    }
  }
}

module.exports = Runner;
