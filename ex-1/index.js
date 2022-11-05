const arr1 = [0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12];
const arr2 = [99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90];
const arr3 = [1, 10, 19, 11, 13, 16, 19];
function getLargestCombineNum(arr) {
  result = arr.sort((x, y) => {
    return "" + x + y > "" + y + x ? -1 : 1;
  });
  return console.log(result.join(""));
}

getLargestCombineNum(arr1);
getLargestCombineNum(arr2);
getLargestCombineNum(arr3);
