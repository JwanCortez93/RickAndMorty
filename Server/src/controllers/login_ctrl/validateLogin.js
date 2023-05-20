let usersWithAccess = [
  {
    email: "jwancortez@gmail.com",
    password: "admin123",
  },
];

const createUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const newUser = { email, password };
  usersWithAccess.push(newUser);
};

const validateLogin = (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  const goodUser = usersWithAccess.filter(
    (user) => user.email === email && user.password === password
  );
  res.status(200).json({ access: goodUser.length > 0 ? true : false });
};

module.exports = { validateLogin, createUser };
