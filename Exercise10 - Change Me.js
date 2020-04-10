function changeMe(arr) {
  var obj = {};
  for (var j = 0; j < arr.length; j++) {
    obj["firstName"] = arr[j][0];
    obj["lastName"] = arr[j][1];
    obj["gender"] = arr[j][2];
    if (arr[j][3] == undefined) {
      obj["age"] = "Invalid Birth Year";
    } else if (arr[j][3] < 2020) {
      obj["age"] = 2020 - arr[j][3];
    }
    console.log(`${j + 1}. ${arr[j][0]} ${arr[j][1]}: `);
    console.log(obj);
  }
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
