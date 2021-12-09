const { create_User, show_Users } = require('../utils/dbFunctions');
exports.addUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    await create_User(username, password);
    res.status(200).json({ success: true, message: 'user added' });
  } catch (err) {
    next(err);
  }
};

exports.users = async (req, res, next) => {
  try {
    const users = await show_Users();
    res.status(200).json({ success: true, message: 'user details', users });
  } catch (err) {
    next(err);
  }
};
