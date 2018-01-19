let defaultUser = [{
  name: 'asdf',
  password: 'asdf',
}];

/**
* @param {object} req
* @param {object} res
*/
function login(req, res) {
  let userDetails = req.body;
  console.log(req.body);
  const users = defaultUser;
  // alert(JSON.stringify(users));
  for (let i = 0; i < users.length; i++) {
    if (users[i]) {
      let user = users[i];
      if (user.name === userDetails.username &&
        user.password === userDetails.password) {
        let response = {'login': true};
        console.log(response);
        res.json(response);
        console.log(res);
        return;
      }
    }
  }
  let response = {'login': false};
  res.json(response);
};

module.exports = {
  login,
};
