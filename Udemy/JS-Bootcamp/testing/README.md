# Goals of Testing

- Automate the process of ensuring that our app works as we expect
- Keep us from having to manually click around the app to find bugs
- Make sure the app still works as expected even after we change something

---

### Simple Steps

1.  Write a tiny node project
2.  Figure out how to test it without any outside testing library
3.  Test it using a testing lib
4.  Take a look at a previous project we built in this course
5.  Test it using a testing lib
6.  Write out own testing framework that will work in about 80% of all projects

### Using node modue `assert`

- assert.strictEqual(actual, expected[, message])
- assert.deepStrictEqual(actual, expected[, message])

### Mocha JS

- change `test` to `it`
- otherwise all the same codes
