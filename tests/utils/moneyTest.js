import {formatCurrency} from '../../Scripst/utils/money.js';

describe('test suite: formatCurrensy', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with zero', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
  it('rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00')
  });
  it('rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00')
  });
  it('negative number', () => {
    expect(formatCurrency(-500.4)).toEqual('-5.00')
  });
});