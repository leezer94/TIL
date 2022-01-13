const layout = require('../layout');

const getError = (errors, prop) => {
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
};

module.exports = ({ req, errors }) => {
  return layout({
    content: `
      <div>
      Your id is : ${req.session.userId}
          <form method="POST">
            <input name="email" placeholder="email" />
            ${getError(errors, 'email')}
            <input name="password" placeholder="password" />
            ${getError(errors, 'password')}
            <input name="passwordConfirmation" placeholder="password confirmation" />
            ${getError(errors, 'passwordConfirmation')}
            <button>Sign up</button>
          </form>
        </div>
      `,
  });
};
