// axios is external library so import it

const axios = require("axios");

// --------------------------------------------------------GET

// previously we call a data from server using fetch as
/*

//        https://sum-server.100xdevs.com/todos

// function main() {   // fetch usually returns a promise
//   fetch("https://sum-server.100xdevs.com/todos").then(async (a) => {
//     const g = await a.json();
//     console.log(g);
//   });
// }

// main();

async function w() {
  const pro = await fetch("https://sum-server.100xdevs.com/todos");
  const j = await pro.json();
  console.log(j);
}
w();
*/

// but now               use

async function w() {
  const pro = await axios.get("https://sum-server.100xdevs.com/todos");
  console.log(pro.data);
}
//w();

// axios is simple & clean             .data   is actual & final data
// in axios we have to mention  get/post/////

// ------------------------------------------POST

async function pos() {
  const pro = await axios.post(
    "https://www.toptal.com/developers/postbin/1708258550188-4608828038908"
  );
  console.log(pro.data);
}
//pos();
// see here i don't mention output type as json or txt axios understand itself as it is txt

// ---------------------- Now let's add body & headers --------------------------------------------------------------

async function main() {
  const pro = await axios.post(
    "https://httpdump.app/dumps/7ad94fdb-1ba4-4721-90ee-db5ec146cf96",
    { username: "sir", age: 23 },
    {
      headers: {
        Authorizaton: "Bearer 123",
      },
    }
  );
  console.log(pro.data);
}
main();
// here const pro = order is  type(get|post|put...)---> link---> body --->header
