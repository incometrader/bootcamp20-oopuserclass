const User = require('../code/user.js');
const PremiumUser = require('../code/premium.js');

describe('User Class: Create a user, user can read posts and write comments', () => {
  it('user name and occupation should be a property of the user', () => {
    const fisayo = new User('Fisayo', 'Entrepreneur');
    expect(fisayo.name).toBe('Fisayo');
    expect(fisayo.occupation).toBe('Entrepreneur');
    expect(fisayo.customProfile).toBe(false);
  });

  it('Premium user name and interest should be a property of the Premium user', () => {
    const linda = new PremiumUser('Linda', 'Blogger', 36, 'lindaikeji@gmail.com', 'blogging');
    expect(linda.name).toBe('Linda');
    expect(linda.email).toBe('lindaikeji@gmail.com');
    expect(linda.customProfile).toBeTruthy();
    expect(linda.interest).toBe('blogging');
  });

  it('user should be a type of `object`, and an instance of the `User` class', () => {
    const johnson = new User('Johnson');
    expect(typeof johnson).toEqual(typeof {});
    expect(johnson instanceof User).toBeTruthy();
  });

  it('Premium user should be a type of `object`, and an instance of both the `User` and `PremiumUser` classes', () => {
    const jonah = new PremiumUser('Jonah');
    expect(typeof jonah).toEqual(typeof {});
    expect(jonah instanceof User).toBeTruthy();
    expect(jonah instanceof PremiumUser).toBeTruthy();
  });

  it('prototype of Premium user should be User', () => {
    expect(Object.getPrototypeOf(PremiumUser)).toEqual(User);
  });

  it('every user has a file storage of 50MB. Only developers can double their file storage', () => {
    const dexter = new User('Dexter', 'Scientist');
    expect(dexter.fileStorage).toBe(50);
    dexter.doubleFileStorage();
    expect(dexter.fileStorage).toBe(50);

    const michael = new User('Michael', 'Developer');
    expect(michael.fileStorage).toBe(50);
    michael.doubleFileStorage();
    expect(michael.fileStorage).toBe(100);
  });

  it('Premium user has a file storage of 500MB. Only developers can double their file storage', () => {
    const olamide = new PremiumUser('Olamide', 'Rapper');
    expect(olamide.fileStorage).toBe(500);
    olamide.doubleFileStorage();
    expect(olamide.fileStorage).toBe(500);

    const iyin = new PremiumUser('Iyinoluwa', 'Developer');
    expect(iyin.fileStorage).toBe(500);
    iyin.doubleFileStorage();
    expect(iyin.fileStorage).toBe(1000);
  });

  it('user gets no commentLikes until they makes a comment', () => {
    const victor = new User('Victor', 'Developer');
    expect(victor.commentLikes).toBe(0);
    victor.comment(5);
    expect(victor.commentLikes).toBe(50);

    const tiwa = new PremiumUser('Tiwatope', 'Singer');
    expect(tiwa.commentLikes).toBe(0);
    tiwa.comment(4);
    expect(tiwa.commentLikes).toBe(20);
  });

  it('user gets no point until they read a post', () => {
    const daniel = new PremiumUser('Daniel', 'Banker');
    expect(daniel.points).toBe(0);
    daniel.read(3);
    expect(daniel.points).toBe(15);
  });

  it('user can integrate 5 apps on the social network except user is less than 16', () => {
    const junior = new User('Junior', 'Student', 15);
    expect(junior.appsIntegration).toBe(2);

    const john = new User('John', 'Architect', 34);
    expect(john.appsIntegration).toBe(5);
  });

  it('user should get a default email if no email is passed as a parameter', () => {
    const ada = new PremiumUser();
    expect(ada.email).toBe('user@mysocial.com');
    expect(ada.age).toEqual(18);
  });
});
