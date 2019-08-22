# _Roman Numeral Converter_

#### _A webpage to convert decimal numbers to Roman Numerals, 22 Aug 2019_

#### By _**Lauren Musante, Sofia Giordano, and Jacqueline Remmel**_

## Specifications & Description

* _For any input other than a number between 0 and 3,999, an error message is displayed._
  * _Example Input: 5,000_
  * _Example Output: Please enter a number between 0 and 3,999._
* _For a single-digit numerical input, the corresponding Roman Numerals are added together._
  * _Example Input: 8_
  * _Example Output: IIIIIIII_
* _For a single-digit numerical input where the corresponding Roman Numerals result is more than three consecutive symbols, convert to the symbol of the next highest value._
  * _Example Input: 4_
  * _Example Output: V_
* _After applying the previous rule, then find the difference between the higher value symbol and the original input, and place the value of this difference to the left of the higher value symbol._
  * _Example Input: 4_
  * _Example Output: IV_
* _For a multi-digit numerical input, examine the digit in each place (ones, tens, hundreds, thousands) separately, converting it to Roman Numerals using the above rules._
  * _Example Input: 99_
  * _Example Output: XCIX_

## Setup/Installation Requirements

* _Clone this repository._
* _Open the index.html file in a browser._

## Technologies Used

_JavaScript, jQuery_

### License

*Open-source*

Copyright (c) 2019 **_Lauren Musante, Sofia Giordano, and Jacqueline Remmel_**
