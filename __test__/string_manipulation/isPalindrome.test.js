import isPalindrome from '../../src/string_manipulation/isPalindrome.js';

describe('isPalindrome()', () => {
  it('should return false for a non palindrome', () => {
    expect(isPalindrome('hello')).toBeFalsy();
  });

  it('should return true for a  palindrome', () => {
    expect(isPalindrome('mmomm')).toBeTruthy();
  });

  it('should ignore whitespace', () => {
    expect(isPalindrome('madam im adam')).toBeTruthy();
  });

  it('should ignore non numbers/letters', () => {
    expect(isPalindrome('madam i\'m%%%%%%%% adam')).toBeTruthy();
  });

  it('should not be case sensitive', () => {
    expect(isPalindrome('Madam I\'m Adam')).toBeTruthy();
  });
});