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