import { render } from "lit-html";
import "./style.css";
import calculator from "./calculator.svg";
import { setupCounter } from "./components/Counter/counter.ts";
import { bodyTemplate } from "./components/CalculatorCells/calculatorCells.tpl.ts";
import { headerTemplate } from "./components/Header/header.tpl.ts";
import { footerTemplate } from "./components/Footer/footer.tpl.ts";
import { setupButtons } from "./setupButtons.ts";
import { CalculatorCells } from "./components/CalculatorCells/CalculatorCells.ts";
//Append Elements to the DOM
render(
  headerTemplate(calculator),
  document.querySelector("#header") as HTMLDivElement
);
render(bodyTemplate, document.querySelector("#body") as HTMLDivElement);
render(footerTemplate, document.querySelector("#footer") as HTMLDivElement);

//Functions
setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
setupButtons(document.querySelectorAll<HTMLInputElement>(".button--number"));
setupButtons(document.querySelectorAll<HTMLInputElement>(".button--operation"));
setupButtons(document.querySelectorAll<HTMLInputElement>(".button--clear"));
setupButtons(document.querySelectorAll<HTMLInputElement>(".equalId"));

const cells = new CalculatorCells();
cells.run();
