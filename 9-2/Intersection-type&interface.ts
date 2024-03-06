// Intersection

/* can able to use propertise of both interfaces & type 
    @ same time via type
*/

type student = {
  name: string;
  class: number | string;
};
interface teacher {
  name: string;
  age: number;
}

type school = student & teacher; //   combined type

const zpschool: school = {
  name: "Raj",
  class: 8,
  age: 13,
};
