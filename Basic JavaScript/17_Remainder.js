/*
% -> Remainder Operator
Remainder Operator is some times incorrectly referred as the modulus operator. It is similar to modulus operator but does not work with negative numbers. 
*/

// Let's suppose we have to find out a number is even or not.

var number = 23;

if (number % 2 == 0) {
    console.log("Even");
}else{
    console.log("Not Even");
}