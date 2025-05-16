class User {
    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("Joe");
  console.log(user.name); // Joe  , Name is too short.
  
  user.name = "Biswajit sahoo" // it will simply show the name
  console.log(user.name)

// Using instanceof to check if user is an instance of User
console.log(user instanceof User); // true