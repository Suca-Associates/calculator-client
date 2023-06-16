import {render,} from 'lit-html'
import './style.css'
import calculator from './calculator.svg'
import { setupCounter } from './counter.ts'
import {bodyTemplate} from './templates/calculatorCells.ts';
import { headerTemplate } from './templates/header.ts';
import {footerTemplate} from './templates/footer.ts';
import { setupButtons } from './setupButtons.ts';


//Append Elements to the DOM
render(headerTemplate(calculator), document.querySelector('#header') as HTMLDivElement);
render(bodyTemplate, document.querySelector('#body') as HTMLDivElement );
render(footerTemplate, document.querySelector('#footer') as HTMLDivElement);

//Functions
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
setupButtons(document.querySelectorAll<HTMLInputElement>('.button--number'));

