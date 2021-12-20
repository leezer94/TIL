# LEETCODE

## Valid Palindrome (LC #125)

      Instead of thinking of palindromes as words read the same backwards, think of them as words where each half morrors each other!

      This mirror concept works for words with both even and odd letters.

      create left and right pointer

      left pointer will initially start at the first chracter of the input string
      and the right pointer will start at the last character of the input string

      so if we have `LO OL` AND `LO VE` then
      with `LO OL` the left pointer and the right pointer are matched event the one down ones
      and `LO VE`  left and right pointer do not match which returns `false`

### Valid Palindorme Pseudocode

- Sanitize input string by removing non alphanumeric chracters and lovwercasing it.
- Create a left and right pointer, initially at start and end of input string
- while Left less than Right

  - if chracter at Left and Right Pointer are nor equal, return `false`
  - else return `true`

  #### Walking through

            `replace(/[\W_]/g,'')` => grab all alphanumerinc chracters including underscores and replace them to into Empty strings

- Complexity Analysis for Valid Palindrome
  Time complexity : O(N)

  space complexity : O(1) Left and Right others take up constants space
