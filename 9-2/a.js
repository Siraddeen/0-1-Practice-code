"use strict";
function first(fur) {
    let s = setTimeout(() => {
        fur();
    }, 1000);
    return () => {
        clearInterval(s);
    };
}
function fn() {
    console.log("hey");
}
let r = first(fn);
console.log(r);
