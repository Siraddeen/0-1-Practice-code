// Generics     --------> Generics are a language independent concept (exist in C++ as well)

function fir(nam: string[]) {
  return nam[0];
}

let a = fir(["raj", "hulk", "munda"]);
console.log(a.toUpperCase());

// this  approach is good   but what if you have 2 data types

type sarr = (number | string)[];

function firstEl(fname: sarr) {
  return fname[0];
}

let bg = firstEl(["hi", "hello", "mangatha"]);
console.log(bg); // works fine             but
console.log(bg.toUpperCase()); /* this won't work & throws this error
                    Property 'toUpperCase' does not exist on type 'string | number'.
  Property 'toUpperCase' does not exist on type 'number'.
*/

//------------------------------SOLUTIION----------------------------------------------------------------

// we will use generic type , that we don't know what will the type of value   so we use generic function

function old<T>(age: T) {
  return age;
}

let g1 = old("twentyfive"); // see both works
let g2 = old(25); // see both works
console.log(g1.toUpperCase());
console.log(g2);

// here    <T> refers any

//-------------------- consise SOLUTION -------------------------------------------------------------------

function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

const randStr = getFirstElement<string>(["ntr", "eachma"]);  // use <string>  if you are gonna explicitly use string
const randNum = getFirstElement<number>([45, 57]);  // use <number>  if you are gonna explicitly use number
console.log(randStr.toUpperCase());
console.log(randNum);
