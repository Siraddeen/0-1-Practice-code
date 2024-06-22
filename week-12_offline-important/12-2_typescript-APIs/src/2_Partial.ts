// kindly hover over to see changes

/*
2
Partial

like when you trying to use a mini interface you can accept 
any value to be change in that case use this ?

so every thing in mini interface get ? 
*/
interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type UpdateProps2 = Pick<User, "name" | "age" | "email">;
type UpdatePropsOptional2 = Partial<UpdateProps2>;
function updateUser2(updatedProps: UpdatePropsOptional2) {}
