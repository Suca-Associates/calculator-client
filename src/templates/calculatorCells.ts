import {html} from 'lit-html';

export const bodyTemplate = html`<div>
 
    <div class="calculator">
      
      <div>
        <input type="text" id="result" class="input--digits">
        <input class="button--number" type="button" value="1">
        <input class="button--number" type="button" value="2">
        <input class="button--number" type="button" value="3">
        <input class="button--operation" type="button" value="+">
      </div>
      <div>
      <input class="button--number" type="button" value="4">
        <input class="button--number" type="button" value="5">
        <input class="button--number" type="button" value="6">
        <input class="button--operation" type="button" value="-">  
      </div>
      <div>
        <input class="button--number" type="button" value="7">
        <input class="button--number" type="button" value="8">
        <input class="button--number" type="button" value="9">
        <input class="button--operation" type="button" value="*">
      </div>
      <div>
        <input class="button--number" type="button" value="0">
        <input type="button" value="C">
        <input type="button" value="=">
        <input class="button--operation" type="button" value="/">
      </div>
    </div>
    
  </div>`;