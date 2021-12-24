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

#### Walking Through

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

## Substring and Subsequence

### What is Substring ?

- A substring is a continuos sequence of chracters present within a string , it is a string present inside a string

  for instance - the substrings of the string 'tree' would be - 't', 'r', 'e', 'tre', 'tree', 're', 'ree', 'ee' and ''

- while finding the substring of a string , we must keep in mind that

  - An empty string is also substring of the given string
  - if the string has a character repeated twice as in the above example of 'tree', we have 'e' repeated twice, so 'e' will be counted only once as a substring

- Essential things to be kept in mind while denoting them

  - We can use '', or "" to denote substring
  - The entire string is a substring of itself
  - An empty string is a substring of any string
  - The order of elements should be the same as the original string

- The Number of substring of a string of length `N` is equal to `(Nx(N+1))/2`
  ( this expression doesn't include the empty string as a substring)

reference )

- https://www.codingninjas.com/blog/2021/09/18/subsequence-vs-substring/

## Longest Substring Without Repeating Characters (LC #3)

      We can solve this in O(n) time using the 'Sliding Window' approach to problem solving
      The Sliding Window will represent the current     substring of non repeating characters we are on
      We will not be working Sliding Window of Fixed      Size, the window will grow or shrink in size as we    iterate through string
      Current index and value in for loop will Always be      end of the sliding window, As end of window     increase, we conditionally increase start of window

### Length of longest substring Pseudocode

- Create an empty hashMap ( key/val => character/index)
- Create start and max variable, set both with initial values of zero

- Loop through input string
  if current Character in HashMap & has index >= start
  set start to index for chracter found in HashMap +1

- set key / value pair on HashMap to be current Character/ current index
  if length of current window is greater than max
  set max to length of current window

Return Max

- Complexity Analysis for Length Of Longest Substring

  Time complexity : O(n)

      - Each character of the string needs to be visited once

  space complexity : O(min(m,n))

      - The number of keys in HashMap is bounded by the size of string n and the size of the charset/ alphabet m

## Excel Sheet Column Title (LC #168)

-

## Hash Map

### Object vs Maps

    - Obejct is simillar to Map both let you set keys to values,  retreve those values, delete keys, and detect whether something is stored at a key
    - For this reason Object has been used as Map historically

reference)

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
- https://erim1005.tistory.com/entry/Javascript-%EC%97%90%EC%84%9C-Object%EB%A5%BC-%ED%95%B4%EC%8B%9C%EB%A7%B5%EC%B2%98%EB%9F%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%A7%80-%EB%A7%88%EC%84%B8%EC%9A%94
