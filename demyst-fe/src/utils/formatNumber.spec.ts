import { formatNumber } from './formatNumber';

describe('formatNumber', () => {
  it('should format numbers with two decimal places', () => {
    expect(formatNumber(1234)).toBe('1,234.00');
    expect(formatNumber(1234.5)).toBe('1,234.50');
    expect(formatNumber(1234.567)).toBe('1,234.57');
  });

  it('should handle negative numbers', () => {
    expect(formatNumber(-1234)).toBe('-1,234.00');
    expect(formatNumber(-1234.5)).toBe('-1,234.50');
    expect(formatNumber(-1234.57)).not.toBe('-1234.57');
  });

  it('should handle zero', () => {
    expect(formatNumber(0)).toBe('0.00');
  });

  it('should handle large numbers', () => {
    expect(formatNumber(1234567890)).toBe('1,234,567,890.00');
    expect(formatNumber(1234567890.123)).toBe('1,234,567,890.12');
  });
});
