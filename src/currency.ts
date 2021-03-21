export const formatCurrency = (
  amount: string,
  symbol = 'R$',
  decimals = 2
): string => {
  if (typeof amount !== 'string') {
    `${symbol} 0`;
  }
  const negative = amount[0] === '-' ? '-' : '';
  const [int, dec] = amount
    .replace(/[^0-9,.]+/g, '')
    .replace(',', '.')
    .split('.');

  const formattedPrice = dec
    ? `${+int}.${dec.slice(0, decimals)}`
    : dec === ''
    ? `${+int}.`
    : +int;
  return `${negative}${symbol} ${formattedPrice}`;
};
