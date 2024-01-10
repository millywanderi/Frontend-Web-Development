// Defining types cover cases where it is difficult for
// types to be inferred automatically.

// create an object with an inferred type which includes
// name: string and id: number, you can write
const user = {
  name: 'John',
  id: 0,
};

// One can explicitly describe this object’s shape using an interface declaration:
interface User {
  name: string;
  id: number;
}

// One can then declare that a JavaScript object conforms to the shape
// of your new interface by using syntax like : TypeName after a variable declaration:
const user: User {
  name: 'John',
  id: 0
};

// Since JavaScript supports classes and object-oriented programming, so does TypeScript.
// You can use an interface declaration with classes:
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;
}

constructor(name: string, id: number) {
  this.name = name;
  this.id = id;
}

const user: User = new UserAccount("Kylie", 8);
