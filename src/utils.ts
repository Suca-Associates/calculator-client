//@ts-nocheck
export function appendToResult(currentValue: string, value: string) {
  return currentValue + value;
}
export function clearResult() {
  document.getElementById("result").value = "";
}

export function convertToNumber(value: string): number {
  return Number(value);
}
