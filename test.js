const http = require('http');

function test() {
  return true;
}

if (!test()) {
  throw new Error("Test failed!");
}

console.log("Test passed!");