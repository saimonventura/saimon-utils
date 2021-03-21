import { formatCurrency } from '../';

describe('Testing Currency', () => {
  test('Not number returns zero', () => {
    expect(formatCurrency('null')).toEqual('R$ 0');
  });

  test('Empty', () => {
    expect(formatCurrency('')).toEqual('R$ 0');
  });

  test('Zero', () => {
    expect(formatCurrency('0')).toEqual('R$ 0');
  });

  test('Point', () => {
    expect(formatCurrency(',')).toEqual('R$ 0.');
  });

  test('Negative', () => {
    expect(formatCurrency('-1')).toEqual('-R$ 1');
  });

  test('Two decimals', () => {
    expect(formatCurrency('123,456')).toEqual('R$ 123.45');
  });

  test('Three decimals', () => {
    expect(formatCurrency('123,4567', undefined, 3)).toEqual('R$ 123.456');
  });

  test('Another symbol', () => {
    expect(formatCurrency('123,4567', 'U$')).toEqual('U$ 123.45');
  });

  test('Ignore characters', () => {
    expect(formatCurrency('potato 123 head , is 4567 !@#$%ˆ&*() ')).toEqual(
      'R$ 123.45'
    );
  });
});
