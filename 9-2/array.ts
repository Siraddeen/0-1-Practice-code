// Arrays in TS

function mValue(g: number[]) {
  let a: number = 0;
  for (let i = 0; i < g.length; i++) {
    if (g[i] > a) {
      a = g[i];
    }
  }
  return a;
}
let d = mValue([2, 3, 1, 4]);
console.log(d);

//------------or can use ---------------------------

type arrn = number[]

function maxValue(aray:arrn){
  let a: number = 0;
  for (let i = 0; i < g.length; i++) {
    if (g[i] > a) {
      a = g[i];
    }
  }
  return a;
}

let u = maxValue([12,4,55,23])
console.log(u);


/* in TS to defining array of number use ---> number[]
        defining array of string use ---> string[]
*/
