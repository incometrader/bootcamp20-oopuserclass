const User = require('./user.js');

class PremiumUser extends User {
  constructor(name, occupation, age, email, interest) {
    super(name, occupation, age, email);
    this.interest = interest;
    this.customProfile = true;
    this.twoFactorAuth = true;
    this.fileStorage = 500;
  }
}

module.exports = PremiumUser;
