const fs = require('fs');
const path = require('path');

class Runner {
  constructor() {
    this.testFiles = [];
  }

  async runTest() {
    for (let file of this.testFiles) {
      const beforeEaches = [];
      global.beforeEach = (fn) => {
        beforeEaches.push(fn);
      };

      // if node finds 'it' node will automatically run this function
      global.it = (desc, fn) => {
        beforeEaches.forEach((func) => func());

        fn();
      };
      // node is going to find a file and excute
      require(file.name);
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
        this.testFiles.push({ name: filepath });
      } else if (stats.isDirectory()) {
        const childFiles = await fs.promises.readdir(filepath);

        // this one is confusing
        files.push(...childFiles.map((f) => path.join(file, f)));
      }
    }
  }
}

module.exports = Runner;
