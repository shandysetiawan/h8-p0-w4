function digitPerkalianMinimum(angka) {
  var temp = [];
  var temp2 = [];
  var result = [];
  result = [];

  if (angka == 1) {
    return 2;
  } else if (angka == 0 || angka == undefined) {
    return 0;
  }

  for (var i = 0; i < angka; i++) {
    if (angka % i == 0) {
      temp.push(i.toString());
    }
  }

  for (var j = 0; j < temp.length; j++) {
    temp2.push((angka / temp[j]).toString());
  }

  for (var k = 0; k < temp.length; k++) {
    result.push(temp[k] + temp2[k]);
  }

  for (var l = 0; l < result.length; l++) {
    for (var m = 0; m < result.length - 1; m++) {
      if (result[m].length > result[m + 1].length) {
        var sort = result[m + 1];
        result[m + 1] = result[m];
        result[m] = sort;
      }
    }
  }

  return result[0].length;
}
//TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
