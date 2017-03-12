class User {
  constructor(name, occupation, age = 18, email = 'user@mysocial.com') {
    this.name = name;
    this.occupation = occupation;
    this.age = age;
    this.email = email;
    this.customProfile = false;
    this.fileStorage = 50;
    this.points = 0;
    this.commentLikes = 0;
  }
  get appsIntegration() {
    if (this.age < 16) {
      return 2;
    }
    return 5;
  }
  doubleFileStorage() {
    if (this.occupation === 'Developer') {
      this.fileStorage *= 2;
    }
  }
  read(numOfPages) {
    const reward = numOfPages * 5;
    this.points += reward;
  }
  comment(numOfLines) {
    if (this.occupation === 'Developer') {
      this.commentLikes = numOfLines * 10;
    } else {
      this.commentLikes = numOfLines * 5;
    }
  }
}

class PremiumUser extends User {
  constructor(name, occupation, age, email, interest) {
    super(name, occupation, age, email);
    this.interest = interest;
    this.customProfile = true;
    this.twoFactorAuth = true;
    this.fileStorage = 500;
  }
}

module.exports = User, PremiumUser;
