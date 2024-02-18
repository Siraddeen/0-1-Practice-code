//        https://sum-server.100xdevs.com/todos

// ------------------------------------------------------GET

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

/*       rough work
async function sa() {
  const f1 = await fetch("https://sum-server.100xdevs.com/todos");
  const f2 = await f1.json();
  console.log(f2);
}

sa();
*/
//------------------------------------------------------POST

async function po() {
  const pro = await fetch(
    "https://www.toptal.com/developers/postbin/1708258550188-4608828038908",
    {
      method: "POST", // usually method is get
    }
  );
  const j = await pro.text(); // here i converted json  to  text cause i know i'm gonna get text as output
  console.log(j);
}
po();
