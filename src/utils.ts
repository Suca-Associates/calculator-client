//@ts-nocheck
function appendToResult(value: string) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculateResult() {
    var result = document.getElementById('result').value;
    var answer = eval(result);
    document.getElementById('result').value = answer;
  }