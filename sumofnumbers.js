/* E26 Mirabela Medallon
Four functions that return the sum of the numbers in a given list
*/

function sumFor(list) {
  let result = 0;
  for (let i = 0; i < list.length; i++) {
    result += list[i];
  }
  return result;
}

function sumWhile(list) {
  let result = 0;
  let i = 0;
  while (i < list.length) {
    result += list[i];
    i++;
  }
  return result;
}

function sumRecursion(list) {
  if (list.length === 1) {
    return list[0];
  }
  return list.pop() + sumRecursion(list);
}


function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

const list = [2, 3, 4, 5];

console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list));
console.log(sumTheSimpleWay(list));
