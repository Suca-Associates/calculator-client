import {html, render} from 'lit-html'

const counterTemplate = (counter: number) =>  html`Give us a like ${counter}`;

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  
  const setCounter = (count: number) => {
    counter = count;
    
    render(counterTemplate(counter), element);
  }
  //Event Listener
  element.addEventListener('click', () => setCounter(counter + 1));
  
  //Init the DOM and counter in 0
  setCounter(0);
}
