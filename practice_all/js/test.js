function User(name, age) {
    this.name = name;
    this.age = age;

    return {
        name, age
    }
}

const user = new User('Dima', 29);
console.log(user instanceof User);