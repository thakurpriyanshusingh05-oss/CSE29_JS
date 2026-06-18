// loops conditions ;

for(let count=1;count<=5;count++){
    console.log("HELLO EVERYONE")
}

// calculate the sum of 1 to 5;

let sum=0;
for(let i=0;i<=6;i++){
    sum=sum+i
}
console.log("sum is :",sum);

// while loop;
while(i<=6){
    console.log("hello");
    i++
 }

do-while loop
let i=1;
do {
    console.log("i=",i);
        i++;
}while(i<=10);

 for-of loop;
let str="hello"
let size = 0;
 for(let i of str){
    console.log("i=",i);
    size++;
 }
 console.log("string size=",size);

for-in loop;

let student={
    name:"priyanshu singh",
    age:18,
    cgpa:9.5,
    ispass:true
};
for(let key in student){
    console.log("key:",key,"value=",student[key]);
}


// print all even no from 1 to 100;

for(let num=0;num<=100;num++){
    if(num%2===0){
        console.log("num=",num);
    }
}

// (Q1) print all odd number from 1 to 100;

for(let num=0;num<=100;num++){
    if(num%2!==0){
        console.log("num=",num)
    }
}

// (Q2) create a game where you start with any random guess number...ask the user to keep guessing the number until the users enters correct number;

let gameNum=25;
let userNum=prompt("guess the game number:");

while(userNum!=gameNum){
    userNum=prompt("you entered the wrong number,guess again")
}
console.log("congratulations,you guess the right number");

string in js

let str="Priyanshu"
let str2='Singh'
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);
console.log(str[6]);
console.log(str[7]);
console.log(str[8]);

methods of strings in js;

let str="Priyanshu";
let newStr=str.toUpperCase();
console.log(str);
console.log(newStr);

let str ="    my name is priyanshu singh   "
console.log(str.trim());      
note:[trim is used to print white spaces];

let str ="hello"
console.log(str.replace("lo","p"))

let str="msdhoni"
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(3));
console.log(str.charAt(4));
console.log(str.charAt(5));
console.log(str.charAt(6));

// (Q3)

let fullName=prompt("enter your fullname without spaces");

let userName="@"+fullName+fullName.length;
console.log(userName);

var grade='A';
document.write("entering switch block<br/>");
switch(grade){
    case'A':document.write("good job<br/>")
    break;

    case'B':document.write("preety good<br/>");
    break;

    case'C':document.write("passed <br/>")
    break;

    case'D':document.write("not so good <br/>")
    break;

    case'E':document.write("failed <br/>")


    default:document.write("unknown grade <br/>")
}
document.write()










