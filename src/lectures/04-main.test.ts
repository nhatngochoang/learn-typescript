import { isPositive } from './04-main';

describe('isPositive()', () => {
  it('should return true when n > 0', () => {
    expect(isPositive(1) === true);
    expect(isPositive(2) === true);
    expect(isPositive(3) === true);
  });

  it('should return false when n = 0', () => {
    expect(isPositive(0) === false);
  });

  it('should return false when n <0', () => {
    expect(isPositive(-1).toBe(false));
    expect(isPositive(-2) === false);
    expect(isPositive(-5) === false);
  });
});
