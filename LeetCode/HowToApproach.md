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

            `replace(/[\W_]/g,'')` => grab all alphanumerinc chracters
            including underscores and replace them to into Empty strings

- Complexity Analysis for Valid Palindrome
  Time complexity : O(N)

  space complexity : O(1) Left and Right others take up constants space

## Longest Palindromic Substring (LC #5)

## Brute-force search

    - The aim : we would like to construct an algorithm thats capable of finding a pattern in a text(string)
    - Brute-force search is the naive approach ( intuitive )
    - Keep iteration through the text and if there is a mismatch we shift the pattern one step to the right
    - not so efficially when thete are lots of matching prefixes
    -For example : pattern is `DDDDE` and the text is `DDDDDDDDDDDDE`
    - Main Problem : needs backup for every mismatch... if there is a mismatch we jump back to the next character
    - Lots of compares : ! N*M where N is the length f the text, M is the length of the pattern we are looking for
    - Linear time guarantee would be better

## Walking Through

                                            'A'       'B'        'A'
                                             ^
                                            longest = 'A'
                                                       ^
                                                       longest = 'ABA'
                                                                  ^
                                                                  longest = 'A'

- But our previous work won't work for even lettered strings

                                   |     'A'     |    'B'    |    'B'     |     'A'     |
                                                             ^
                                                             longest = 'BB'
                                                             ^
                                   ^                  longest = 'ABBA                   ^

- We can solve this by having our center both be the chracter we are iterating on AND the space in between each character
  ex) A B A C C A A C C D B B

        we need to keep track on the longest palindromic substring as we go through string
        palindromes moirrors around its center
        2 cases for this center

        1. even amount of charaters

        2. add amount of characters
