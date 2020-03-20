var arr = ['html', 11, 'JavaScript', 2, 'CSS', 23, 12];
arr.push(-42);
arr.unshift(1000);
arr.push('Last array element');
arr.splice(arr.indexOf("JavaScript"), 1);
var filterArr = arr.filter(value => value !== 'JavaScript');
var numberArr = arr.filter(value => typeof value === 'number');
var sqareArr = numberArr.map(value => value * value);
console.log(Math.max.apply(null, sqareArr));