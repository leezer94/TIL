module.exports = {
  getError(errors, prop) {
    // prop === 'email' || prop === 'password' || prop === 'passwordConfrimation'
    try {
      return errors.mapped()[prop].msg;
    } catch (err) {
      return '';
    }

    // errors.mapped() ===
    //   {
    //     email: {
    //       msg :'Invalid Email'
    //     },
    //     password: {
    //       msg :'blah'

    //     },
    //     passwordConfirmation: {
    //       msg :'blah'

    //     },
    //   };
  },
};
