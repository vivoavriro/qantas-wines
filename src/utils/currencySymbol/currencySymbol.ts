export const currencySymbol: Record<string, string> = {
  aud: '$',
  default: '$',
};

export const getCurrencySymbol = (currency?: string): string => {
  const currencyKey: string | undefined = currency?.toLowerCase();
  return currencyKey
    ? currencySymbol[currencyKey] || currencySymbol['default']
    : currencySymbol['default'];
};
