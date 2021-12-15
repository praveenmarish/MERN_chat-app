const {
  create_User,
  show_Users,
  userGetter,
  idGetter,
} = require('../utils/dbFunctions');
const { TokenVerification } = require('../utils/tokenVerification');
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

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await userGetter(username);

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return next(new ErrorResponse('Invalid credentials', 401));
    }

    const accessToken = user.getSignedJwtToken();
    const refreshToken = user.getSignedJwtRefreshToken();
    res.status(200).json({ sucess: true, accessToken, refreshToken });
  } catch (err) {
    next(err);
  }
};

exports.getNewAccessToken = async (req, res, next) => {
  const { refreshToken } = req.body;
  const decodedRrefreshToken = TokenVerification(
    refreshToken,
    process.env.JWT_SECRET_REFRESH
  );

  if (!decodedRrefreshToken) {
    return next(new ErrorResponse('Token not verified', 404));
  }

  try {
    const user = await idGetter(decodedRrefreshToken.id);
    const accessToken = user.getSignedJwtToken();
    res.status(200).json({ sucess: true, accessToken });
  } catch (err) {
    next(err);
  }
};
