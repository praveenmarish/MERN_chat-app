const ErrorResponse = require('../utils/errorResponse');
const { TokenVerification } = require('../utils/tokenVerification');
const { idGetter } = require('../utils/DbFunctions');

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  const decoded = TokenVerification(token, process.env.JWT_SECRET);

  if (!decoded) {
    return next(new ErrorResponse('Token not verified', 404));
  }

  try {
    const user = await idGetter(decoded.id);

    if (!user) {
      return next(new ErrorResponse('No user found with this id', 404));
    }

    req.user = user;

    next();
  } catch (err) {
    return next(new ErrorResponse('Not authorized to access this router', 401));
  }
};
