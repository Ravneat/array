
let numbers = ["AJ", "JS","Java","book","long name bere"]
// console.log(numbers[2])

// let a = numbers[0];
// let b = numbers[1];

//console.log(a)

const[a,b,c,d,e] = numbers;

console.log(c);


//Destructuring.
let oddNum = [1,3,5,7,11]

const[i,j,k,l,m] = oddNum;
console.log(k);

let name = "Doe";
let lname = "John";
[name, lname] = [lname, name]

console.log(name)
console.log(lname);

let x = 5;
let y = 10;

[y,x] = [x,y]

console.log(x);
