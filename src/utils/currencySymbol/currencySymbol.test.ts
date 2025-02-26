import { getCurrencySymbol, currencySymbol } from './currencySymbol';

describe('getCurrencySymbol tests:', () => {
  test('should return the correct symbol if it exists in constants', () => {
    const symb = getCurrencySymbol('AUD');
    expect(symb).toBe(currencySymbol['aud']);
  });
  test('should return the default symbol if it doesnt exists in constants', () => {
    const symb = getCurrencySymbol('JPN');
    expect(symb).toBe(currencySymbol['default']);
  });
});
