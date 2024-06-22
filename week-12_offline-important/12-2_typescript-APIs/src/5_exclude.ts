// in a code if you assign many value to a element

type ageOFStudent = "click" | "scroll" | "mousemove"; //different types in case

type excludedAge = Exclude<ageOFStudent, "scroll">; // click & mousemove will accepted

const handleEvent = (event: excludedAge) => {
  console.log(`handking event : ${event}`);
};

console.log(handleEvent("click"));
//console.log(handleEvent("scroll"));  // red swiglly under scroll
console.log(handleEvent("mousemove"));

//see scroll is excluded
