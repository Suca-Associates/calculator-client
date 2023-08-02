export const binaryToDecimalConverter = (binaryNumber: Int32Array): number => {
    let decimalValue: number = 0;
    const binaryNumberLength = binaryNumber.length;

    for (let i = 0; i < binaryNumberLength; i++) {
        const savedValue = binaryNumber[i];

        if (savedValue === 1) {
            decimalValue += Math.pow(2, binaryNumberLength - 1 - i);
        }
    }

    return decimalValue;
};

const userInput = prompt("Enter a binary number:");


const binaryArray = userInput.split("").map((char) => parseInt(char, 2));

const binaryNumber = new Int32Array(binaryArray);
const decimalValue = binaryToDecimalConverter(binaryNumber);
console.log(" from "+ userInput+" to: " +decimalValue);
