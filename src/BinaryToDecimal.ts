export const binaryToDecimalConverter = (binaryNumber: Int32Array): number => {
   
    let decimalValue: number = 0;
    const binaryNumberLength = binaryNumber.length;

    for (let i = binaryNumberLength - 1; i >= 0; i--) {
        const savedValue = binaryNumber[i];

        if (savedValue === 1) {
            decimalValue += Math.pow(2, binaryNumberLength - 1 - i);
        }
    }

    return decimalValue;
};

const binaryNumber = new Int32Array([1, 0, 1, 0]);
const decimalValue = binaryToDecimalConverter(binaryNumber);
console.log(decimalValue); 
