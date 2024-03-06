// Interfaces        vs      types

interface User {
  fname: string;
  lname: string;
  age: number;
  email?: string; // optional when used ?
}
/*
      when you need to use interfaces is in case of building classes

      but type are used for general case with =

      both can be unique @ some-cases & can be used almost similarly
*/
type User2 = {
  fname: string;
  lname: string;
  age: number;
  email?: string; // optional when used ?
}
