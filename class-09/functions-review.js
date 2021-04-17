function getTwo() {
  return 2;
}























function log(thing) {
  console.log(thing);
}
function logResult(thing) {
  console.log(thing());
}

log(getTwo);
log(getTwo());
// logResult(getTwo);
// logResult(getTwo());


// Write a function that takes in an array and adds the number 0 to the end of that array and returns it.
// input: [3,5,2]
// output: [3,5,2,0]
function addZeroToEnd(arr) {
  arr.push(0);
  return arr;
}
