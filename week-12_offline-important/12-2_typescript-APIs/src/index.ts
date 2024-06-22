// interface User {
//   name: string;
//   age: number;
// }

// const sumAge = (a: User, b: User) => {
//   return a.age + b.age;
// };

// const re = sumAge({ name: "ar", age: 23 }, { name: "jfkd", age: 56 });

// console.log(re);

interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "name" | "age" | "email">;
type UpdatePropsOptional = Partial<UpdateProps>;
function updateUser(updatedProps: UpdatePropsOptional) {}
