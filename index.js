// // part 1

// Convert the string "123" to a number and add 7.

// let x= Number("123")+7;

// ------------------------------------------------------------------------------------------------------------------------------------

// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
// Input Example: 0
// Output Example: "Invalid”

// let x=0
// if (x){
// console.log ("valid");
// }
//  else{
// console.log ("Invalid");
// }

// ------------------------------------------------------------------------------------------------------------------------------------

// 3.Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grad • Output Example:1, 3,5, 7, 9

// for (i=1;i<=10;i++){
//    if(i%2 != 0)
// {    console.log (i);
// }
// }

// ------------------------------------------------------------------------------------------------------------------------------------

// 4.Create an array of numbers and return only the even numbers using filter method. (0.5 Grade) • Input Example:
// [1, 2, 3, 4, 5]
// Output Example: [2,4]

// let a=[1, 2, 3, 4, 5];
// let x = a.filter((x)=>{    return x%2==0;}    )
//    console.log (x);

// ------------------------------------------------------------------------------------------------------------------------------------

// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade) Input Example: [1, 2, 3], [4, 5, 6] Output Example: [1, 2, 3, 4, 5, 6]

// let a = [1, 2, 3];let b= [4, 5, 6] ;let x = [...a,...b];

// ------------------------------------------------------------------------------------------------------------------------------------

// 6.Use a switch statement to return the day of the week given a number (1 = Sunday. ., 7 = Saturday). (C Input Example: 2 • Output Example: "Monday”

// let x=2;
// switch (x){    case 1 :        console.log ("sunday");        break    case 2:        console.log ("monday")        break    case 3:        console.log ("Tuesday ")        break}

// ------------------------------------------------------------------------------------------------------------------------------------

// 7 Create an array of strings and return their lengths using map method (0.5 Grade) Input: ["a", "ab", "abc"]

// Output Example: [1, 2, 3]

// let a = ["a", "ab", "abc"] ;
// let x= a.map((i)=>{    return i.length;}    )
// console.log (x);

// ------------------------------------------------------------------------------------------------------------------------------------

// 8.  Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)

// Input Example: 15 •

// Output Example: "Divisible by both”

// let x=15;

// function a(b){
// if (b%3==0 && b%5==0){
// console.log ("Divisible by both";
// }
// else{
// console.log ("try another ");
// }

// }

// a(x);

// ------------------------------------------------------------------------------------------------------------------------------------

// 9- Write a function using arrow syntax to return the square of a number (0.5 Grade) Input Example: 5

// Output Example: 25

// let x=5;
// let f= (i)=>{
// return (i*i);
// }

// console.log (f(x));

// ------------------------------------------------------------------------------------------------------------------------------------

// 10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Gra •

// Input Example: const person = fname: 'John', age: 25) •

//  Output Example: 'John is 25 years old’

// let person ={ fname: 'John', age: 25}

// function x(p){
// console.log (`${p.fname} is ${p.age} years old`)
// }

// x(person);

// ------------------------------------------------------------------------------------------------------------------------------------

// 11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
// • Input Example: 1, 2, 3, 4, 5
// • Output Example: 15

// function x(p){
// let sum = 0;
// for(i=0;i<p.length;i++){
// sum += p[i];

// }
// return sum;
// }

// console.log(x([1, 2, 3, 4, 5]));

// ------------------------------------------------------------------------------------------------------------------------------------

// 12 - Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
// • Output Example: “Success”

// ------------------------------------------------------------------------------------------------------------------------------------

// 13
// Write a function to find the largest number in an array. (0.5 Grade)
// • Input Example: [1, 3, 7, 2, 4]
// • Output Example: 7

// function large(a) {
// let x=0;
// for(i=0;i<a.length;i++){

// for(j=i+1;j<a.length;j++){

//   if (a[i] > a[j]){

//       x = a[i];

//   }
// }

// } return x;
// }
// console.log(large([1, 3, 7, 2, 4]));

// ------------------------------------------------------------------------------------------------------------------------------------

// 14-

// Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
// • Input Example: name: "John", age: 30}
// • Output Example: ["name", "age"]

// function key(ob){
// for (let k in ob){
// console.log(k);
// }
// }

// let Obj = {name: "John", age: 30};

// key(Obj);

// ------------------------------------------------------------------------------------------------------------------------------------

// 15-

// Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
// • Input: "The quick brown fox"
// • Output: ["The", "quick", "brown", "fox"]

// let x= "The quick brown fox";

// function split(str){
// let word = "";
// let n=[];

// for (i=0;i<str.length;i++){
// if (str[i] == " "){
// n.push(word);
// word = ""
// }
// else{
// word+=str[i];
// }
// }
// if (word) {
// n.push(word);
// }
// return n;
// }

// console.log(split(x));

//==============================================================================================================================================
