/*
When you decalre a variable it can be easilt overwritten but what to do when you dont want to overwrite it.

Here comes the let keyword to our help.
*/

var name = "Raghu";
var name = "Shivam";
console.log(name); // here name is overwritten and Shivam will be the output.

let city = "Mangalore";
// let city = "Mysuru"; // I have commetned this line so that code runs. 
console.log(city); // here name is overwritten and we will get error in output.


/*

So unlike var, when you use let, a variable with the same name can only once be declared
*/