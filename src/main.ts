import './style.css'
import calculator from './calculator.svg'

import { setupCounter } from './counter.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://github.com/suca19/carlculator" target="_blank">
      <img src="${calculator}" class="logo" alt="calculator" />
    </a>
    <h1>CarlCulator</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      In Development
    </p>

    <div class="calculator">
        <input type="text" id="result" readonly>
        <input type="button" value="1" onclick="appendToResult('1')">
        <input type="button" value="2" onclick="appendToResult('2')">
        <input type="button" value="3" onclick="appendToResult('3')">
        <input type="button" value="+" onclick="appendToResult('+')">
        <br>
        <input type="button" value="4" onclick="appendToResult('4')">
        <input type="button" value="5" onclick="appendToResult('5')">
        <input type="button" value="6" onclick="appendToResult('6')">
        <input type="button" value="-" onclick="appendToResult('-')">
        <br>
        <input type="button" value="7" onclick="appendToResult('7')">
        <input type="button" value="8" onclick="appendToResult('8')">
        <input type="button" value="9" onclick="appendToResult('9')">
        <input type="button" value="*" onclick="appendToResult('*')">
        <br>
        <input type="button" value="0" onclick="appendToResult('0')">
        <input type="button" value="C" onclick="clearResult()">
        <input type="button" value="=" onclick="calculateResult()">
        <input type="button" value="/" onclick="appendToResult('/')">
    </div>
    
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


