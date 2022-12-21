class User {
  name: string;
  age: number;

  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);
  constructor(ageOrName?: number | string, age?: number) {
    if (typeof ageOrName === 'string') {
      this.name = ageOrName;
    } else if (typeof ageOrName === 'number') {
      this.age = ageOrName;
    }
    if (typeof age === 'number') {
      this.age = age;
    }
  }
}

const user = new User('vasea')
const user1 = new User(33)
const user2 = new User('vasea', 33)
const user3 = new User()