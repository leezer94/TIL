const fs = require('fs');
const crypto = require('crypto');

class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error('Creating a repository requires a filename');
    }

    this.filename = filename;

    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, '[]');
    }
  }

  async getAll() {
    // Open the file called the.filename
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: 'utf8',
      })
    );
  }

  async create(attrs) {
    attrs.id = this.randomId();
    // {email : 'ddd@fasf.com' , password : 'password'}

    const records = await this.getAll();
    records.push(attrs);

    await this.writeAll(records);
  }

  async writeAll(records) {
    // write the updated 'records' array back to this.filename

    await fs.promises.writeFile(
      this.filename,
      // custom format value of null
      // 2 : level of indentation
      JSON.stringify(records, null, 2)
    );
  }

  randomId() {
    return crypto.randomBytes(4).toString('hex');
  }
}

const test = async () => {
  const repo = new UsersRepository('users.json');

  await repo.create({ email: '2kunhee94@gmail.com', password: 'password' });
  const users = await repo.getAll();

  console.log(users);
};

test();
