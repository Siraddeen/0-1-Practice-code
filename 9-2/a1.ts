function first(fur: Function) {
  let s = setTimeout(() => {
    fur();
  }, 1000);
  return () => {
    clearInterval(s);
  };
}
function fn() {
  console.log("hey all");
}

let r = first(fn);

console.log(r);
