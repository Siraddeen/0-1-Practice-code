// Interfaces

/*
      when you need to give type to certain things like object first create skeleton of it &
      give types to it    then use it  as  Interface
      now give this interface as type of object 
*/

interface User {
  fname: string;
  lname: string;
  age: number;
}

function pep(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

let u = pep({
  fname: "raj",
  lname: "dins",
  age: 20,
});
console.log(u);
// ------------------------------------------------------------------------------------------------------------------------------

// another example
interface Raja {
  fname: string;
  lname: string;
  age: number;
}
let w: Raja = {
  fname: "raj",
  lname: "dins",
  age: 20,
};
console.log(w);
