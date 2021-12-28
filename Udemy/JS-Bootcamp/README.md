# Udemy JavaScript bootcamp

`== Double Equals`

- Checks for equality of value, but not equality of type
- It coerces(converts) both values to the smae type and then compares them
- This can lead to some unexpected result

`=== Triple Equals`

- Checks for equality fo value and type

`!== None Equality`

- Strictly not Equals

`Truthy and Falsy Values`

- All values have an inherent truthy or falsy boolean value

`Falsy Values`

- false
- 0
- '' (Empty String)
- null
- undefined
- NaN

`Truthy Values`

- Everything else is truthy

`Operator Precednece` <br>
link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

- NOT(!) has higher precedence than && and || && has higher precedence than ||
- we can alter this using ()

`Switch Statement`

- looking for the first match and then as soon as it finds it, everything else runs

`Ternary Operator`

- condition ? ecpIfTure : expIfFalse
- `If(?)` condition is Ture this code runs `otherwise(:)` that code runs
- only for simple code

`Arrays`

Array Method : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

- Arrays are indexed
- Arrays are mutable
- Arrays are special object where the keys are an ordered set of indices numbers starting at zero
- array.push() method actually mutate original value
- array.unshift() method can add multiple values to the front of arrays
- array.concat() methid can pass in multiple values

`Referecne Type`

Value Type Variable

- instead of storing all of those values in the variable itself, what JavaScript does instead is it stores reference

`Primitive Type`

- Primitive Type are stored as the actual value in a variable arrays are different

`const And Arrays`

- Value can change as long as the reference ramians the same
- because Arrays are `reference type` `const` is use most of the time when we work with Arrays

`Object`

- Objects are collections of properties.
- Properties are a Key - Value pair
- Rather than accessing data using an index, we use custom keys.

                  KEY   :   VALUE
               Username : 'crazyCatLady'
               upvotes  : 7
                  text  : 'great post!'

- All keys are converted to strings
- Sometimes we have property names that may not be vaild JavaScript identifiers then we use Array Brackets `['example']`;

          `const palette = {
            red: '#eb4d4b',
            yellow: '#f9ca24',
            blue: '#30336b',
            };

            let mysteryColor = 'yellow';

            console.log(palette[mysteryColor]);`

- This looks for the value of mysteryColor and then plugs into palette
- Try to use `Dot Notation` whenever possible but for the `dynamic value` we need to use array bracket

`Object and Reference Type`

- Same as Array better call it with const and we can change what's inside of Object but we don't change that Object

`Array / Obejct Equality`

- Eventhough they contains exact same values and the exact same order, but they are completly different in JavaScript

            let array1 = [1,2,3];
            let array2 = [1,2,3];
            array1 === array2 => false

ex)
array1 => 12342343
array2 => 35234324

- when we have Variable the value of variable dosent store the Array it stores the reference
- Because Array can be huge so JavaScript dosent store Array itself
- All that ('===','==') Operators will do is check for quality fo REFERENCE not QUALITY

`Loops`

- Loop allow us to repeat code
  - Print 'hello' 10 times
  - Sum all numbers in array
- There are multiple types

  - for loop
  - while loop
  - for ... of loop
  - for ... in loop

`For loop`

         for(
            [initialExpression];
            [condition];
            [incrementExpression];
         ){

         }

`Nested for loop`

- Every single time this outer loops runs just a single iteration, the inner loop completes if full cycle

            for (let i = 0; i <= 10; i++) {
               console.log(`outer loops : ${i}`);
               for (let j = 10; j >= 0; j -= 2) {
                console.log(`   inner Loops : ${j}`);
               }
            }

`Break`

- We can use instead of loops to break out of that loop
- whenever JavaScript encounters break, that loop that its enclosed in is done.
- it is not common in for loop but it is common in while loop

`for ... of with Object`

- there are no indecies in the Object
- which is Object is not iterable
- by using Object.keys / Object.values we can get iterated Keys / Values

`for ... in`

      - difference between for...in and for...of - for...of will iterate over the actual values in an array or an iterable or string
      - for ...in will loop over the keys, the properties in an Object

`Funtions ( reusable procedures )`

- Functions allow us to write resusable, modular code
- We define a 'chunk\ of code that we can then execute at a later point
- We use them ALL THE Time

`SCOPE`

- Variable 'visibility'

  - The location where a variable is defined dictates where we have access to that variable

1. Block Scope
   ]

   - There is no Block Scope for `Var`

2. Lexical Scope

   - Nested functions are lexically bound, they are bound to the scope of their parent or of their outer functions
   - One way relation ship `inside -> outside`

3. Funtion expressions

   - another way to express functions
     ex ) Arrow Function, ...
   - In JavaScript functions are Object so we can put them in the Variable, we can stroe 10 of thme in array

4. Higer order Funtions

   - Functions that operate on/with other functions
   - Accept other functions as arguments
   - return a function
   - We can put functions in the array and loop over it that we don't have to hard code it
   - We can call them dynamically

5. Callback functions

   - Anytime we pass a function to another function and it's executed in that function we would call it Callback function

`Array Callback Methods`

Map()

- Creates a new `Array` with the results fo calling a callback on every element in the array
- The original Array is immutable

find()

- Returns the value of the `first element` in the array that satisfies the proveided testing function.

filter()

- Creates a new Array with all elements that ass the test implemented by the provided function

every()

- every() is going to accept a callback it needs to be boolean value if it gets true then whole function returns true

sort()

- arr.sort(compareFunc(a,b))

- If compareFunc(a,b) returns less than 0
  - sort `a` before `b`
- If compareFunc(a,b) returns 0
  - Leave `a` and `b` unchanged with respect to each other
- If compareFunc(a,b) returns greater than 0

  - sort `b` before `a`

- It changes the original Value

`Implicit return`

- Adding an implicit return to an arrow function means that you don't have to write the return keyword itself

reduce()

`Spread`

- Spread syntax allows an iterable such as an array to be `expanded` in place where Zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expressions to be `expanded` in places where zero or more key -value pairs (for object literals) are `expanded`

`Spread in Array Literals`

- Create a new array using an existing array.
- Spreads the elements from one array into a new array
- same as split('') ?

`Rest`

- it looks like spread but it is actually not
- Instead of spreading data out into argumens or into a new object or an array it collects things down to a single array
- It does not work in Arrow Functions

`Destructuring Arrays`

- A short, clean syntax to 'unpack'
- Valuse from arrays
- Prorperties from obejcts into distrinct variables

`This`

- `Let` , `Const` is not added to the global scope while `Var` is
- `This` is a reference to an object and that object represents the current execution

- in the object using this lead us to window ,

---

## DOM

- The Dom jis a javaScript representation of a webpage
- It's your JS `window` into the contents of a webpage
- It's just a bunch of Objects that you can interact with via JS
