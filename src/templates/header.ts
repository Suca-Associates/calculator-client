import { html } from 'lit-html';

export const headerTemplate = (calculator: string) => html`
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
`;