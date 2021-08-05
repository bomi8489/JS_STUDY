// function hello(a,b) {
//     console.log("안녕하세요");
//     console.log(`a+b = ${a+b}`);
// }
// hello(10,5);

// function ask(question, yes, no) {
//     if(question == "동의?") yes()
//     else no()
// }

// function agree() {
//     console.log("동의");
// }

// function disagree(){
//     console.log("비동의");
// }

// ask("동의?", agree, disagree)

// ask(
//     "동의?",
//     function(){console.log("동의")},
//     function(){console.log("비동의")}
// )

// function test(){} // 함수 선언문
// let test2 = function(){} // 함수 표현식

// let a = 1
// function print(){
//     let a = 111;
//     console.log(a);
// }
// print();
// console.log(a);

// function test(){
//     for (let i = 0; i < 5; i++){    // let은 블록단위{}의 스코프
//         setTimeout(function(){
//             console.log(i)
//         },0)
//     }
// }
// test()

// function test2(){
//     for (var i = 0; i < 5; i++){    // var는 함수단위function()의 스코프
//         setTimeout(function(){
//             console.log(i)
//         },0)
//     }
// }
// test2()

// function test1(){
//     var a = 10;
//     const c = 30;   // const역시 블록단위의 스코프
//     if(10<20){
//         const c = 30;
//         let b = 20;
//     }
//     console.log(c);
// }
// test1()

// let func = function(a){
//     return "b"
// }

// let func2 = (a)=> "b";

// console.log(func())
// console.log(func2())

// let googoodan = (a,b)=> {
//     for(let i = 1; i<10; i++){
//         for(let j = 1; j<10; j++){
//             console.log(`${i}*${j}=${i*j}`)
//         }
//     }
// }

// console.log(googoodan())

// var x =1;
// function first(){
//     var x = 10;
//     second();       // x는 호출기준10이 아니라 함수가선언됐을때 기준인 1
// }
// function second() {
//     console.log(x);
// }
// first();
// second();

// var x =1;
// function first(){
//     var x = 10;
//     function second() {
//         console.log(x);
//     }
//     second();
//     console.log(x);
// }

// first();

// function otherfunc(){
//     var x =10;
//     var innerfunc = function(){
//         console.log(x);
//     }
//     return innerfunc
// }
// var inner = otherfunc();
// inner();

// let user = new Object({name : "kim", age:30});

// let user2 = {
//     name : "kim",
//     age : 20
// };
// user2.test = 1
// delete user2.test;

// user2["bird"]=true;
// delete user2["bird"];

// console.log(user);
// console.log(user2);

let check = (obj) => {
    if(obj.age > 40){
        obj.check = true;
    }
    return{obj}   
}

let person = {name:"kim", age:50}
check(person);
console.log(person);