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
