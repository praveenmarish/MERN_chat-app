const crypto = require('crypto');
module.exports.Generator = () => {
  return crypto.randomBytes(20).toString('hex');
};
