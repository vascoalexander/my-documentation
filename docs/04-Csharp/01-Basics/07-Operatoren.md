---
title: 'Operatoren'
description: ""
sidebar_position: 7
---
**Uniary Operator**: one Operand `index++`
**Binary Operator**: two Operands `a = a + 1`
**Ternary Operator**: three Operands `string c = (bool) ? "b is true" : "b is false"`

## Arithmetic Operators
```c
float myFloat = 0;

myFloat = 3 + 2; // Addition       => 5
myFloat = 3 - 2; // Subtraction    => 1
myFloat = 3 * 2; // Multiplication => 6
myFloat = 3 / 2; // Division       => 1
myFloat = 3 % 2; // Modulus        => 1

/*
    Notice that the division sign gives an incorrect result.
    This is because it operates on two integer values and will therefore round the result and return an integer.
    To get the correct value, one of the numbers needs to be converted into a floating-point number.
*/
myFloat = 3 / (float) 2; // 1.5
```
---
## Combined Assignment Operators
```c
float myFloat = 0;

myFloat += 2; // myNumber = myNumber + 2
myFloat -= 2; // myNumber = myNumber - 2
myFloat *= 2; // myNumber = myNumber * 2
myFloat /= 2; // myNumber = myNumber / 2
myFloat %= 2; // myNumber = myNumber % 2
```
---
## Comparison Operators
```c
Console.WriteLine($"3 == 2? {3 == 2}"); // => false
Console.WriteLine($"3 != 2? {3 != 2}"); // => true
Console.WriteLine($"3 > 2? {3 > 2}");   // => true
Console.WriteLine($"3 < 2? {3 < 2}");   // => false
Console.WriteLine($"2 <= 2? {2 <= 2}"); // => true
Console.WriteLine($"2 >= 2? {2 >= 2}"); // => true
```
---
## Logical Operators
```c
bool myBool;

myBool = (true && false); // Logical AND => (false)
myBool = (true || false); // Logical OR  => (true)
myBool = !(true);         // Logical NOT => (false)

Console.WriteLine(myBool);
```
---
## Bitwise Operators
```c
int myInteger;

// The bitwise operators can manipulate individual bits inside an integer.

myInteger = 5 & 4;  // and (0b101 & 0b100 = 0b100 = 4)
myInteger = 5 | 4;  // or (0b101 | 0b100 = 0b101 = 5)
myInteger = 5 ^ 4;  // xor (0b101 ^ 0b100 = 0b001 = 1)
myInteger = 4 << 1; // left shift (0b100 << 1 = 0b1000 = 8)
myInteger = 4 >> 1; // right shift (0b100 >> 1 = 0b10 = 2)
myInteger = ~ 4;    // invert (~0b00000100 = 0b11111011 = -5)

// These bitwise operators have shorthand assignment operators, just like the arithmetic operators.

myInteger = 5;
myInteger &= 4; // and (0b101 & 0b100 = 0b100 = 4)

myInteger = 5;
myInteger |= 4; // or (0b101 | 0b100 = 0b101 = 5)

myInteger = 5;
myInteger ^= 4; // xor (0b101 ^ 0b100 = 0b001 = 1)

myInteger = 5;
myInteger <<= 1; // left shift (0b101 << 1 = 0b1010 = 10)

myInteger = 5;
myInteger >>= 1; // right shift (0b101 >> 1 = 0b10 = 2)
```
---
## Operator Precedents
```c
/*

- parentheses ()

- Postfix Increment and Decrement         ++, --
- Prefix Increment, Decrement and Unary   ++, --, +, -, !, ~

- Multiplicative                          *, /, %
- Additive                                +, -

- Shift                                   <<, >>
- Relational                              <, <=, >, >=
- Equality                                ==, !=

- Bitwise AND                             &
- Bitwise XOR                             ^
- Bitwise OR                              |

- Logical AND                             &&
- Logical OR                              ||

- Ternary                                 ? :
- Assignment                              =, +=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>=

*/
```

## Related Links
[**Microsoft Language Specification - Operators and Expressions**](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/)    