"use strict"; //treat all js code as newer version
// alert(3); //we are using nodejs, not browser
let name = "bittu"; //string => "" || ''
let age = 19; //integer || number
let isLoggedIn = false; //boolean
let state = null; //standalone value
let isValid; //undefined => value not assigned yet
//symbol => unique

//object
// console.log(typeof "bittu");
// console.log(typeof isLoggedIn);
// console.log(typeof age);
// console.log(typeof null); //object
// console.log(typeof undefined);
let num = 23;
// console.log(typeof num);

// console.log(String(num));
let n = String(num);
// console.log(typeof n);

//operation
// let value = -num;
// console.log(value);
// console.log(typeof value);
// console.log(2 ** 4); //power
// console.log(1 + 2 + "2"); //first adddition then string conv
// console.log("1" + 2 + 2); //conv string all

//comparison datatype
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(3 != 2);
// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(null < 0);
// console.log(null <= 0);

// console.log(undefined < 0);
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);

// console.log("2" == 2);
// //stricly check (===)
// //data type check
// console.log("2" === 2);

//primitive data type (Stack memory use)

// 7 types : String, Boolean, Number, null, undefind, BigInt, Symbol
// Number = 34
// Number = 35.4
const id = Symbol("123"); //unique
const anotherId = Symbol("123");
// console.log(anotherId);
// console.log(id);
// console.log(id === anotherId);

//Reference(Non primitive) =>(Heap memory use)
//Arrays, Objects, Functions
//array
const hero = ["Thalapathy", "IlayaThalapathy", "Vijay"];
//object
{
  name: "bittu";
  age: 18;
}
//store in var of object data
const obj = {
  name: "bittu",
  age: 18,
};
//++++++++++++++++++functions+++++++++++++++++
const myFunction = function () {
  console.log("Hello");
};
// console.log(typeof myFunction);

//+++++++++++++class 10/51+++++++++

//+++++++++++++++++++stack and Heap++++++++++++++++++
// stack la var copy pnga and original la illa change
let myYotubename = "Bittu Vijay";
let myYT = myYotubename;
// console.log(myYT);
myYT = "bittu";
// console.log(myYT);
// console.log(myYotubename);

// heap la var link through reference and change/update happens in original value
let userOne = {
  email: "b2ra@google.com",
  upi: "b2ra@ptsbi",
};
let userTwo = userOne;
// console.log(userTwo.email);
userTwo.email = "bittu@gmail.com";
// console.log(userTwo.email);
// console.log(userOne.email);

//++++++++++++++++class 11/51+++++++++++++
//+++++++++++++++++strings in js++++++++++++++++++
const nameA = "Bittu";
const nameB = new String("Bittu Vijay");
const repoCount = 28; //reposatory on github
// console.log(nameA + repoCount + "added"); //not a good way to add string
//here are good way to add string
// console.log(
//   `Hello my name is ${nameA.toUpperCase()} and my repo count is ${repoCount}`
// );
// console.log(nameB.charAt(0));
// console.log(nameB.charAt(1));
// console.log(nameB.indexOf("t"));
const newString = nameB.substring(0, 4);
// console.log(newString);
// const anotherString = nameB.slice(-8, 4);
// console.log(anotherString);
//trim()
const username = "   bitturana.ab        ";
// console.log(username);
// console.log(username.trim()); //trim extra unwanted space
const url = "https://ab.com/bittu%20rana";
// url.replace("%20", "-");
// console.log(url.replace("%20", "-"));
// console.log(url.includes("bittu"));
//split into an array
const sname = "bittu-rana-ab";
// console.log(sname.split("-"));
// console.log(sname.split("a"));

//+++++++++class 12/51+++++++++++++++++

const score = 400;
// console.log(score);
const balance = new Number(1000); //predefine type of data
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //for ecommerce

const otherNumber = 23.784;
// console.log(otherNumber.toPrecision(3));
const hundreds = 1000000000;
// console.log(hundreds.toLocaleString()); //"en-IN" || "en-US"

//+++++++++++++Math+++++++++++++++
// console.log(Math);
// console.log(Math.abs(-34)); //remove signn  of a num
// console.log(Math.round(9.67)); //round figure
// console.log(Math.floor(4.89)); //remove decml part
// console.log(Math.min(34, 6, 45, 7, 23));
// console.log(Math.random()); //value is btwn 0-1
// console.log(Math.random() * 10 + 1); //0-9 +1
// console.log(Math.floor(Math.random() * 100) + 1);
//++++++++class 13/51 +++++++++++++++
//+++++++++++dates and time++++++++++++
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());

// let myCreatedDate = new Date(2005, 1, 28);
let myCreatedDate = new Date("2005-02-28");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000)); //second la time

