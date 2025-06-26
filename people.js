const fullName = require("./names.js");
const hobbies = require("./hobbies.js");

function peopleHobbies() {
  const person = fullName("Simone ", "Sampino");
  const personHobbies = hobbies("Gaming", " Football", " Music");

  return person + ": " + personHobbies;
}

console.log(peopleHobbies());
