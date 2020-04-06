function ubahHuruf(kata) {
  var result = "";

  for (var i = 0; i < kata.length; i++) {
    if (kata[i] == "a") {
      result += "b";
    } else if (kata[i] == "b") {
      result += "c";
    } else if (kata[i] == "c") {
      result += "d";
    } else if (kata[i] == "d") {
      result += "e";
    } else if (kata[i] == "e") {
      result += "f";
    } else if (kata[i] == "f") {
      result += "g";
    } else if (kata[i] == "g") {
      result += "h";
    } else if (kata[i] == "h") {
      result += "i";
    } else if (kata[i] == "i") {
      result += "j";
    } else if (kata[i] == "j") {
      result += "k";
    } else if (kata[i] == "k") {
      result += "l";
    } else if (kata[i] == "l") {
      result += "m";
    } else if (kata[i] == "m") {
      result += "n";
    } else if (kata[i] == "n") {
      result += "o";
    } else if (kata[i] == "o") {
      result += "p";
    } else if (kata[i] == "p") {
      result += "q";
    } else if (kata[i] == "q") {
      result += "r";
    } else if (kata[i] == "r") {
      result += "s";
    } else if (kata[i] == "s") {
      result += "t";
    } else if (kata[i] == "t") {
      result += "u";
    } else if (kata[i] == "u") {
      result += "v";
    } else if (kata[i] == "v") {
      result += "w";
    } else if (kata[i] == "w") {
      result += "x";
    } else if (kata[i] == "x") {
      result += "y";
    } else if (kata[i] == "y") {
      result += "z";
    } else if (kata[i] == "z") {
      result += "a";
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
