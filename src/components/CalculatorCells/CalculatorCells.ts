export class CalculatorCells {
  public myProperty = 0;

  onClickEventHandler(element: HTMLInputElement) {
    element.addEventListener("click", (event: MouseEvent) => {
      (document.querySelector("#result") as HTMLInputElement).value += (
        event.target as HTMLInputElement
      ).value;
    });
  }
  onEqual(_event: MouseEvent) {
    const result = (document.querySelector("#result") as HTMLInputElement)
      .value;
    const myArray = result.split(/(\+|\-|\*|\/)/g);
    let resultValue = 0;
    let upcomingOperator = "+";

    for (let i = 0; i < myArray.length; i++) {
      switch (upcomingOperator) {
        case "+": {
          resultValue += Number(myArray[i]);
          break;
        }
        case "-": {
          resultValue -= Number(myArray[i]);
          break;
        }
        case "*": {
          resultValue *= Number(myArray[i]);
          break;
        }
        case "/": {
          resultValue /= Number(myArray[i]);
          break;
        }
      }
      if (
        myArray[i] === "+" ||
        myArray[i] === "-" ||
        myArray[i] === "*" ||
        myArray[i] === "/"
      ) {
        upcomingOperator = myArray[i];
      }
    }
    (document.querySelector("#result") as HTMLInputElement).value = "";
    (document.querySelector("#result") as HTMLInputElement).value =
      resultValue.toString();
  }

  onClearResult(_event: MouseEvent) {
    (document.querySelector("#result") as HTMLInputElement).value = "";
  }

  run() {
    (
      document.querySelectorAll(
        ".button--number"
      ) as NodeListOf<HTMLInputElement>
    ).forEach(this.onClickEventHandler);
    (
      document.querySelector(".button--clear") as HTMLButtonElement
    ).addEventListener("click", this.onClearResult);

    (
      document.querySelectorAll(
        ".button--operation"
      ) as NodeListOf<HTMLInputElement>
    ).forEach(this.onClickEventHandler);

    (document.querySelector("#equalId") as HTMLButtonElement).addEventListener(
      "click",
      this.onEqual
    );
  }
}
