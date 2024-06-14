//day 1....................................................
//data type
// //var
// var num = 10;
// {
//   num=20;
// }
// console.log("var ",num);


// //let
// let num1=10;
// {
//   num1=20;
// }
// console.log("let ",num1);

// //const 
// const num2=10;
// {
//     num2=20;
// }
// console.log("const ",num2);
// //var
// var num = 10;
// {
//     var num = 20;
//     num = 30;
//     console.log(num);
// }
// console.log(num)
// //let
// let num2 = 10;
// {
//     let num2 = 20;
//     num2 = 30;
//     console.log(num2);
// }
// console.log(num2)
// //const
// const num3 = 10;
// {
//     const num3 = 20;
//     num3 = 30;
//     console.log(num3);
// }
// console.log(num3)


//operator's
// let num1 =10;
// let num2 = 5;

// let sum = num1+num2;
// console.log("sum ",sum)

// let sub = num1-num2;
// console.log("sub ",sub)

// let mul = num1*num2;
// console.log("mul ",mul)

// let div = num1/num2;
// console.log("div ",div)

// let mod = num1%num2;
// console.log("mod ",mod)

// num2 += num1
// console.log(num2)

// let increament = num2++ + num2 + num2++;
// console.log(num2);
// console.log(increament)

// let i = 5;
// let j = 10;
// let incre = --i + ++j + i-- + j++;
// console.log(i);
// console.log(j);
// console.log(incre);

//logic operator

// let checkIn = 10;
// let checkOut = "10";
// console.log(checkIn == checkOut);
// console.log(checkIn === checkOut);
// console.log(typeof checkIn);
// console.log(typeof checkOut);

// let chIn = true;
// console.log(!chIn);

// let checkIn = "";
// let checkOut = 0;
// console.log(!checkOut);

// let checkOut = true;
// // let checkIn = true;
// let checkIn = false;
// console.log(checkOut || checkIn);

// let a = 10;
// let b = 20;
// let c = 30;
// let greater = (a>b && a>c)?"a":(b>c)?"b":"c";
// let less = (a<b && a<c)?"a":(b<c)?"b":"c";
// console.log(greater)
// console.log(less)


// let age = prompt("enter your age1? ");
// let vote = (age>=18)?"yes,u can vote":"no, u not eligible";
// console.log(vote);

// let num1 = {"key":"20"};
// let arr = [1,2,3];
// let result = (num1 && num2)?"yes":"no";
// console.log(result);

// let result = 10 + 5 * 2 + 2 * 2;
// console.log(result);

// let a = 10;
// a +=5;
// console.log(a);


//day 2................................................

//function.......

// function add(){
//     console.log("hello");
//     }
// add();

// function add(a){
//     console.log("hello ",a);
// }
// add(10);

// function add(a=1){
//     console.log("hello ",a);
// }
// add();
// add(10);

// function add(a){
//     console.log("hello ",a);
// }
// add(10,20);

// function add(...a){
//     console.log("hello ",a);
// }
// add(10,20);

// function add(...a){
//     console.log(a[0])
//     console.log(a[1])
//     console.log(a[2])
// }
// add(10,20,30);

// function add(...a){
//     console.log(a);
//   }
//   add(10,{"key":"59"},30);

// function add(...a){
//   console.log(a[1].key);
// }
// add(10,{"key":"59"},30);

// function add(b,...a){
//   console.log(b);
// }
// add(10,{"key":"59"},30);

// function add(a){
//   return a;
// }
// const result = add("hello");
// console.log(result);

// function add(a){
//     return a+a;
//   }
//   const result = add("hello");
//   const result1 = add("hello1");
//   console.log(result);
//   console.log(result1);

// (()=>{
//     console.log("hello");
// })()

// string

// let str = "sachin is my name";
// console.log(str[3]);
// console.log(str.slice(0,6));
// console.log(str.length);

// let num = "120";
// console.log(typeof num);
// console.log(typeof parseInt(num));
// console.log(typeof parseFloat(num));

// const obj = {
//     name : "sachin",
//     class : "2 year",
//     "roll No." : "47",
//     age : (a)=>{
//     return a;
//     }
// }
// console.log(obj.name);
// console.log(obj.class);
// console.log(obj["roll No."]);
// console.log(obj.age(13));

//arry

// const arr = [
//     "hello", 
//     "one",
//     { name:"sachin",class:"2 year"},
//     [1,2,3,[4,5,6]]
// ];
// console.log(arr);
// console.log(arr[1]);
// console.log(arr[2]["name"]);
// console.log(arr[3][2]);
// console.log(arr[3][3][2]);


//day 3...............................................................
// let age = 10;
// console.log(age);

// let name0 = "it's hello";
// let name1 = 'it"s hello';
// console.log(name0);
// console.log(name1);

// let isCheck = true;
// console.log(isCheck);

// let person = {key:10,"str":"hello",bool:true,fun:function (){
//     return "sachin";
// }}
// console.log(person.key);
// console.log(person["key"]);
// console.log(person["str"]);
// console.log(person["bool"]);
// console.log(person.fun());

// let arr = ["hola",10];
// // console.log(arr);
// // console.log(arr[1]);

// // function add(){
// //     console.log("hello");
// // }
// // add();
// function add(a){
//     console.log(`my pocket money is ${a+a} in current time`);
// }
// add(100);

// let a = prompt("enter your age? ");
// age = Number.parseInt(age) 

// if(age>=18){
//     console.log("u can vote");
// }
// else{
//     console.log(`not able to vote, try after ${18-age} year`);
// }

// let str = "sunday";
// switch(str){
//     case "monday" :
//         console.log("today is monday");
//         break;
//     case "tuesday" :
//         console.log("today is tuesday");
//         break;
//     case "wednesday" :
//         console.log("today is wednesday");
//         break;
//     case "friday" :
//         console.log("today is wednesday");
//         break;
//     default : 
//     console.log("today is sunday");
// }

//loop
// let i = 0;
// while(i < 15){
//     console.log("countin is ",i);
//     i++;
// }
// let i = 2;
// console.log("table od 2 is ");
// while(i<=20){
//     console.log(i);
//     i=i+2;
// }

// let i = 2;
// do{
//     console.log(i);
//     i=i+2;
// }while(i<=20)

// let i;
// for(i=2;i<=20;i=i+2){
//    console.log(`2 X ${i/2} = ${i}`);
// }


// let i;
// let table = 3;
// for(i=1;i<=10;i++){
//    console.log(`${table}x${i}=${table*i}`);
// }

// let date = new Date();
// let day = ["sun","mon","tue","wed","thu","fri","sat"];
// let Month =["jun","feb","mar","apr","may","jun","jul","aug","sep","oct","nev","dec"];
// console.log(date.getDate());
// console.log(day[date.getDay()]);
// console.log(Month[date.getMonth()]);
// console.log(date.getFullYear());

// let str = "hello";
// let num = 100;
// let bool = true;
// console.log("str");
// console.log("num");
// console.log("bool");

// let obj = {
//     key : "value0"
// }
// console.log(obj);
// console.warn(obj);
// alert(obj.key);
// document.write(obj.key);

// let arr = [1,3,"sachin","kumar"];
// console.table(arr);

// function add(...a){
//     return a[1];
// }
// let result = add(10,20,30);
// console.log(result);

// let num = 100;
// if(!num){
//     console.log("if print")
// }
// else{
//     console.log("else print");
// }

// let str = "u";
// switch (str) {
//     case "a":
//         console.log("this is a")
//         break;
//     case "b":
//         console.log("this is b")
//         break;
//     case "c":
//         console.log("this is c")
//         break;
//     default:
//         console.log(`choose valid option, you choose ${str}`);
//         break;
// }

