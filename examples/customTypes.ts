// Type aliases
type MyFunctionType = (x: number, y: number) => string;

const getPosition: MyFunctionType = (x, y) => {
  return `(${x}, ${y})`
}

getPosition(10, -7);


// Interfaces
interface UserType {
  username: string;
  age: number;
}

const getInfo = (user: UserType) => {
  return `${user.username} is ${user.age} years old`;
}

getInfo({ username: 'Topii99', age: 23 });
