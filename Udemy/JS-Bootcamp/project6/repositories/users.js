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

  async getOne(id) {
    const records = await this.getAll();

    //
    return records.find((record) => record.id === id);
  }

  async delete(id) {
    const records = await this.getAll();

    const filteredRecords = records.filter((record) => record.id !== id);

    await this.writeAll(filteredRecords);
  }

  async update(id, attrs) {
    const records = await this.getAll();
    const record = records.find((record) => record.id === id);

    if (!record) {
      throw Error(`Record with id ${id} not found`);
    }

    // record === { email : 'test@test.com}
    // attrs === {password : 'mypassword}
    Object.assign(record, attrs);
    // record === {email : 'test@test.com, password : 'mypassword}

    await this.writeAll(records);
  }
}

const test = async () => {
  const repo = new UsersRepository('users.json');
  await repo.update('dasdase', { password: 'password' });
};

test();
