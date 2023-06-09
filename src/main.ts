import './style.css'
import calculator from './calculator.svg'
import viteLogo from '/vite.svg'
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


    
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
