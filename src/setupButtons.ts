export const setupButtons = (buttonList: NodeListOf<HTMLInputElement>) => {
  buttonList.forEach((element: HTMLInputElement) => {
    element.addEventListener('click', (event: MouseEvent) => {
      const element = event.target as HTMLInputElement
    

      //Printing
      console.log(element?.value);
    });
  });
}