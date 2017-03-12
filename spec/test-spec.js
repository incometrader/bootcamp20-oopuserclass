
(function(){
  "use strict";

  describe("User Class: Create a user, user can read posts and write comments", function(){

    it("user name and occupation should be a property of the user", function() {
      let fisayo = new User('Fisayo', 'Entrepreneur');
      expect(fisayo.name).toBe('Fisayo');
      expect(fisayo.occupation).toBe('Entrepreneur');
      expect(fisayo.customProfile).toBe(false);
    });

    it("Premium user name and interest should be a property of the Premium user", function() {
      let linda = new PremiumUser('Linda', 'Blogger', 36, 'lindaikeji@gmail.com', 'blogging');
      expect(linda.name).toBe('Linda');
      expect(linda.email).toBe('lindaikeji@gmail.com');
      expect(linda.customProfile).toBeTruthy();
      expect(linda.interest).toBe('blogging');
    });

    it("user should be a type of `object`, and an instance of the `User` class", function(){
      let johnson = new User('Johnson');
      expect(typeof johnson).toEqual(typeof {});
      expect(johnson instanceof User).toBeTruthy();
    });

    it("Premium user should be a type of `object`, and an instance of both the `User` and `PremiumUser` classes", function(){
      let jonah = new PremiumUser('Jonah');
      expect(typeof jonah).toEqual(typeof {});
      expect(jonah instanceof User).toBeTruthy();
      expect(jonah instanceof PremiumUser).toBeTruthy();
    });

    it("every user has a file storage of 50MB. Only developers can double their file storage", function() {
      let dexter = new User('Dexter', 'Scientist');
      expect(dexter.fileStorage).toBe(50);
      dexter.doubleFileStorage();
      expect(dexter.fileStorage).toBe(50);

      let victor = new User('Victor', 'Developer');
      expect(victor.fileStorage).toBe(50);
      victor.doubleFileStorage();
      expect(victor.fileStorage).toBe(100);
    
      expect((function(){return new User('Audax', 'Developer');}()).fileStorage).toBe(50);
    });

    it("Premium user has a file storage of 500MB. Only developers can double their file storage", function() {
      let olamide = new PremiumUser('Olamide', 'Rapper');
      expect(olamide.fileStorage).toBe(500);
      olamide.doubleFileStorage();
      expect(olamide.fileStorage).toBe(500);

      let iyin = new PremiumUser('Iyinoluwa', 'Developer');
      expect(iyin.fileStorage).toBe(500);
      iyin.doubleFileStorage();
      expect(iyin.fileStorage).toBe(1000);
    });

    it("user gets no commentLikes until they makes a comment", function() {
      let victor = new User('Victor', 'Developer');
      expect(victor.commentLikes).toBe(0);
      victor.comment(5);
      expect(victor.commentLikes).toBe(50);

      let tiwa = new PremiumUser('Tiwatope', 'Nurse');
      expect(tiwa.commentLikes).toBe(0);
      tiwa.comment(4);
      expect(tiwa.commentLikes).toBe(20);
    });

    it("user gets no point until they read a post", function() {
      let daniel = new User('Daniel', 'Banker');
      expect(daniel.points).toBe(0);
      daniel.read(3);
      expect(daniel.points).toBe(15);
    });

    it("user can integrate 5 apps on the social network except user is less than 16", function() {
      let junior = new User('Junior', 'Student', 15);
      expect(junior.appsIntegration).toBe(2);

      let john = new User('John', 'Architect', 34);
      expect(john.appsIntegration).toBe(5);
    });

    it("user should get a default email if no email is passed as a parameter", function() {
      let ada = new User();
      expect(ada.email).toBe('user@mysocial.com');
      expect(ada.age).toEqual(18);
    });

  });
})();
