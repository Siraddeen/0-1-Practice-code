//   usecase of  types    over      interface

/* suppose you need to choose number or string for a value @ same 
    now in this case you use type with = 
*/

type ageNum = number | string;

function old(age: number | string) {} // this works                       or    you can use

function old2(age: ageNum) {} // now you can pass data regardless of any issue like

old(21); // works
old("twentyone"); // works

old2(25);
old2("thirty");

// but if i try interface agenum = number |string     it will fail
// first of all you can't able to use = in interfaces


// this whole process is called UNIONS
