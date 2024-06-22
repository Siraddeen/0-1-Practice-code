// kindly hover over to see changes

/*
1
Pick  is used to take reference from Interface to create new
mini interface with some values from upper interface

if 1 interface value change then mini interface value also
changes   like from number-------> string


pick example:
*/
interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type UpdateProps1 = Pick<User, "name" | "age" | "email">;

function updateUser1(updatedProps: UpdateProps1) {}
