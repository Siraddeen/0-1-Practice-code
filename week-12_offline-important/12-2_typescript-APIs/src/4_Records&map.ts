/*
when ever you deal with objects in typescript 

it get messy to point oit for id & value 
*/

// before using Record

type User4 = {
  [key: string]: number;
};

const usersAge: User4 = {
  raju: 21,
  varma: 26,
};

// now using Record

type User4a = Record<string, number>; // here inside <> <key ,it's type>   here key is string   & value is number
const exAge: User4a = {
  josh: 45,
  mono: 23,
};

//-------------------===========================-----------------------------------================================---------------==================-------------------============================================================

// Map        to get key value pairs

const examp = new Map(); // now we can use set for creating new values to examp

examp.set("ram", { name: "ram", age: 24, height: 6 });
examp.set("ok", { name: "krish", age: 32, height: 4 });

// we have Map.set /get / delete so ise them as required

let a = examp.get("ok");

// we can also give typescript properties to Map as ---------------------------------------------------------------------------------

type UserId = {
  name: string;
  age: number;
  height: number;
};

const ao = new Map<string, UserId>(); // here string is key , userId is key's property
ao.set("raman", { name: "raj", age: 24, height: 6 });
ao.set("okar", { name: "krishna", age: 32, height: 4 });

let u = ao.get("okar");
console.log(u);
