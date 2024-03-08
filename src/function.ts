import { appendToResult } from "./utils";
let myArray = [];

do {
  myArray.push());
} while (myArray[-1] === "=");

let result = 0;

let upcomingOperator = "+";

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] === Number) {
    if (upcomingOperator === "+") {
      result += myArray[i];
    }
    if (upcomingOperator === "-") {
      result -= myArray[i];
    }
    if (upcomingOperator === "*") {
      result *= myArray[i];
    }
    if (upcomingOperator === "/") {
      result /= myArray[i];
    }
  }
}
