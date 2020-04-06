function urutkanAbjad(str) {
  arr = [];
  var result = "";

  for (var i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }

  for (var j = 0; j < str.length; j++) {
    for (var k = 0; k < str.length - 1; k++) {
      if (arr[k] > [arr[k + 1]]) {
        var temp = arr[k + 1];
        arr[k + 1] = arr[k];
        arr[k] = temp;
      }
    }
  }

  for (var l = 0; l < arr.length; l++) {
    result += arr[l];
  }
  return result;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
