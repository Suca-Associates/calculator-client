import { binaryToDecimalConverter } from '../BinaryToDecimal';

describe('Utils', () => {
  describe('binaryToDecimal', () => {

    test('should return `357` given `101100101` value as an input', () => {
        expect(binaryToDecimalConverter('101100101')).toBe(357);
    });

    test('should return `1365` given `10101010101` value as an input', () => {
        const intValue = binaryToDecimalConverter('10101010101');
        expect(intValue).toBe(1365)
    })

  })
});