function highestScore(students) {
  var obj = {};

  for (var i = 0; i < students.length; i++) {
    for (var j = 0; j < students.length - 1; j++) {
      if (students[j].score > students[j + 1].score) {
        var temp = students[j + 1];
        students[j + 1] = students[j];
        students[j] = temp;
      }
    }
  }

  for (var k = 0; k < students.length; k++) {
    if (!(students[k].class in obj)) {
      obj[students[k].class] = {};
    }
    obj[students[k].class] = students[k];
    delete obj[students[k].class].class;
  }
  return obj;
}

// TEST CASE
console.log(
  highestScore([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes",
    },
    {
      name: "Alexei",
      score: 85,
      class: "wolves",
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes",
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves",
    },
  ])
);

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
  highestScore([
    {
      name: "Alexander",
      score: 100,
      class: "foxes",
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves",
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes",
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves",
    },
    {
      name: "Viktor",
      score: 80,
      class: "tigers",
    },
  ])
);

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}
