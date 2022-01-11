const fs = require('fs');
const crypto = require('crypto');
const { throws } = require('assert');

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

  async getOneBy(filters) {
    const records = await this.getAll();

    // iterating through array
    for (const record of records) {
      let found = true;

      // iterating through object
      for (const key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
          return 'User not found';
        }
      }

      if (found) {
        return record;
      }
    }
  }
}

const test = async () => {
  const repo = new UsersRepository('users.json');

  // we are using hashMap so the order of record dosent matter
  const user = await repo.getOneBy({
    password: 'password',
    email: '2kunhee94@gmail.com',
    id: 'b211c8ed5',
  });

  console.log(user);
};

test();
