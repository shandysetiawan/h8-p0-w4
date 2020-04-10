function ubahHuruf(kata) {
  var result = "";

  var abjad = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j < abjad.length; j++) {
      if (kata[i] === abjad[j] && kata[i] === "z") {
        result += abjad[0];
      } else if (kata[i] === abjad[j]) {
        result += abjad[j + 1];
      }
    }
  }
  return result;
}

//   // TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
