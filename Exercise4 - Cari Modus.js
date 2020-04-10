function cariModus(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    if (!(arr[i] in obj)) {
      obj[arr[i]] = 0;
    }
    obj[arr[i]]++;
  }

  var maxKey = 0;
  var maxVal = 0;
  for (var i = 0; i < arr.length; i++) {
    if (maxVal < obj[arr[i]]) {
      maxVal = obj[arr[i]];
      maxKey = arr[i];
    }
  }
  if (maxVal == arr.length || maxVal == 1) {
    return -1;
  }
  return maxKey;
}

// // TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
