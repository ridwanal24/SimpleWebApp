const string = prompt("Masukan String").split("");

let dict = {};

// filter huruf
string.forEach((item) => {
  if (item.match(/[a-zA-Z]/i)) {
    if (dict[item] == undefined) {
      dict[item] = 1;
      console.log(item);
    } else {
      dict[item] += 1;
    }
  }
});

// Tamplikan ke console
console.log(
  "==========================================" +
    "\nKalimat yang diinput : " +
    string.join("") +
    "\n=========================================="
);
for (const [key, value] of Object.entries(dict)) {
  console.log(`Huruf ${key} ada ${value} karakter.`);
}
