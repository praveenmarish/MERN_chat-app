const jwt = require('jsonwebtoken');

module.exports.TokenVerification = (Token, SecretKey) => {
  try {
    const decoded = jwt.verify(Token, SecretKey);
    return decoded;
  } catch {
    return false;
  }
};
