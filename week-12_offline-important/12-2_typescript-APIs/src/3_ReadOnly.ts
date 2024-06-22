// kindly hover over to see changes

/*
3
Read Only

generally we can change or assign new values to elements of 
array & object even in use of const as 

const arr = [1,2,4,5,3,6]

arr[0] = 9    then it will turn into

[9,2,4,5,3,6]


to stop this , mean not able to assign any new value to array
or object we use readonly 
*/

// before readonly

type Student = {
  name: string;
  age: number;
};
const student1: Student = {
  name: "rathod",
  age: 24,
};

// now if i try to change it

student1.age = 16; // see no red swigly

// after using readonly

type Student6 = {
  readonly name: string;
  readonly age: number;
};

const studentq: Student6 = {
  name: "rathod",
  age: 24,
};

// now if i try to change it

//studentq.age = 16; // now see red swigly so you cannot able to change actuall value ------------------------------------------------------

// or other way to use

const student8: Readonly<Student6> = {
  name: "raj",
  age: 45,
};

// student8.name = "mango"; // red swigly ----------------------------------------------------------------------------------------
