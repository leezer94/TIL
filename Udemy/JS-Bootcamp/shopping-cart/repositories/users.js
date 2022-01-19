const fs = require('fs');
const crypto = require('crypto');
const util = require('util');
const Repository = require('./repository');

const scrypt = util.promisify(crypto.scrypt);

class UsersRepository extends Repository {
  async create(attrs) {
    // {email : 'ddd@fasf.com' , password : 'password'}
    attrs.id = this.randomId();

    const salt = crypto.randomBytes(8).toString('hex');
    const buf = await scrypt(attrs.password, salt, 64);

    const records = await this.getAll();

    // destruct arrts and overwrite password to next parameter
    const record = { ...attrs, password: `${buf.toString('hex')}.${salt}` };
    records.push(record);

    await this.writeAll(records);

    return record;
  }

  async comparePasswords(saved, supplied) {
    // Saved => password saved in our database. = 'hashed.salt'
    // Supplied => password given to us by a user trying to sign in

    // const result = saved.split('.');
    // const hased = result[0];
    // const salt = result[1];
    console.log(saved);

    const [hashed, salt] = saved.split('.');
    console.log(salt);

    const hashedSuppliedBuf = await scrypt(supplied, salt, 64);

    return hashed === hashedSuppliedBuf.toString('hex');
  }
}

// const test = async () => {
//   const repo = new UsersRepository('users.json');

//   // we are using hashMap so the order of record dosent matter
//   const user = await repo.getOneBy({
//     password: 'password',
//     email: '2kunhee94@gmail.com',
//     id: 'b211c8ed5',
//   });

//   console.log(user);
// };

// test();

// Rather
//  module.exprots = UsersRepository;
// instead
module.exports = new UsersRepository('users.json');
