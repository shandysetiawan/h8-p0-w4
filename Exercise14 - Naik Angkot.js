function naikAngkot(arrPenumpang) {
  var rute = ["A", "B", "C", "D", "E", "F"];

  var arr = [];

  for (var i = 0; i < arrPenumpang.length; i++) {
    var bayar = 0;
    var obj = {};

    obj["penumpang"] = arrPenumpang[i][0];
    obj["naikDari"] = arrPenumpang[i][1];
    obj["tujuan"] = arrPenumpang[i][2];

    var start = 0;
    for (var j = 0; j < rute.length; j++) {
      start++;
      if (arrPenumpang[i][1] == rute[j]) {
        break;
      }
    }
    var end = 0;
    for (var k = 0; k < rute.length; k++) {
      end++;
      if (arrPenumpang[i][2] == rute[k]) {
        break;
      }
    }

    obj["bayar"] = bayar += Math.abs(end - start) * 2000;

    arr.push(obj);
  }
  return arr;
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

// if (arrPenumpang[i][1] == rute[0]) {
//   start += 1;
// } else if (arrPenumpang[i][1] == rute[1]) {
//   start += 2;
// } else if (arrPenumpang[i][1] == rute[2]) {
//   start += 3;
// } else if (arrPenumpang[i][1] == rute[3]) {
//   start += 4;
// } else if (arrPenumpang[i][1] == rute[4]) {
//   start += 5;
// } else if (arrPenumpang[i][1] == rute[5]) {
//   start += 6;
// }

// if (arrPenumpang[i][2] == rute[0]) {
//   end += 1;
// } else if (arrPenumpang[i][2] == rute[1]) {
//   end += 2;
// } else if (arrPenumpang[i][2] == rute[2]) {
//   end += 3;
// } else if (arrPenumpang[i][2] == rute[3]) {
//   end += 4;
// } else if (arrPenumpang[i][2] == rute[4]) {
//   end += 5;
// } else if (arrPenumpang[i][2] == rute[5]) {
//   end += 6;
// }
