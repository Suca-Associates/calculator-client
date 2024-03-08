export class CalCulatorCells {
  public myProperty = 0;

  onClickEventHandler(element: HTMLInputElement) {
    element.addEventListener("click", (event: MouseEvent) => {
      (document.querySelector("#result") as HTMLInputElement).value += (
        event.target as HTMLInputElement
      ).value;
    });
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
  }
}
