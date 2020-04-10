function countProfit(shoppers) {
  let listBarang = [
    ["Sepatu Stacattu", 1500000, 10],
    ["Baju Zoro", 500000, 2],
    ["Sweater Uniklooh", 175000, 1],
  ];

  var arr = [];

  if (shoppers.length == 0) {
    return [];
  }

  for (var i = 0; i < listBarang.length; i++) {
    var obj = {};
    obj.product = listBarang[i][0];
    obj.shoppers = [];
    obj.leftOver = listBarang[i][2];
    obj.totalProfit = 0;
    arr.push(obj);
  }
  for (var j = 0; j < shoppers.length; j++) {
    if (arr[0].product == shoppers[j].product) {
      if (arr[0].leftOver >= shoppers[j].amount) {
        arr[0].shoppers.push(shoppers[j].name);
        arr[0].leftOver = arr[0].leftOver - shoppers[j].amount;
        arr[0].totalProfit += shoppers[j].amount * listBarang[0][1];
      }
    }
    if (arr[1].product == shoppers[j].product) {
      if (arr[1].leftOver >= shoppers[j].amount) {
        arr[1].shoppers.push(shoppers[j].name);
        arr[1].leftOver = arr[1].leftOver - shoppers[j].amount;
        arr[1].totalProfit += shoppers[j].amount * listBarang[1][1];
      }
    }
    if (arr[2].product == shoppers[j].product) {
      if (arr[2].leftOver >= shoppers[j].amount) {
        arr[2].shoppers.push(shoppers[j].name);
        arr[2].leftOver = arr[2].leftOver - shoppers[j].amount;
        arr[2].totalProfit += shoppers[j].amount * listBarang[2][1];
      }
    }
  }

  return arr;
}
// TEST CASES
console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 2 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 3 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 2 },
  ])
);
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 8 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 10 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 1 },
    { name: "Devi", product: "Baju Zoro", amount: 1 },
    { name: "Lisa", product: "Baju Zoro", amount: 1 },
  ])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(
  countProfit([{ name: "Windi", product: "Sepatu Naiki", amount: 5 }])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
