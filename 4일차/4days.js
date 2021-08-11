//한 변수에 한가지 데이터타입만 들어갈수있는데 이런 것들을 원시형 데이터 ex) let, var, const

// let user = new Object({
//     name: "kim",
//     age: 30
// })

// let user2 = new Object({
//     name: "kim",    // 프로퍼티     key: value
//     age: 30         // 프로퍼티     key: value
// })

// console.log(typeof user);

// console.log(user.name)
// console.log(user2.age)

// let kwon = new Object({
//     name: "kwon",
//     gender: "male",
//     age: "20",
//     height: "190",
//     person: true
// })

// let test = kwon;
// console.log(test)   // value 대입이 아닌 reference 대입

// console.log(`제 이름은 ${kwon.name}이고 저는 ${kwon.name}입니다. 저는 올해 입학한 ${kwon.age}이고 키는 ${kwon.height}입니다 ^^`)


// for(let info in kwon){
//     console.log(info+': '+kwon[info]);
// }

// let a = 10;
// let b = a;
// b = 20;
// console.log(a);
// console.log(b);

// let user = {
//     name: "kim",
//     age: 20
// }

// let user2 = {...user}

// for (let info in user){
//     user2[info] = user[info];
// }

// console.log(user2);

// user2.age = 100;
// console.log(user);
// console.log(user2);

// let user = {
//     nema: "kim",
//     age : 20,
// }
// let arr = [
//     {name: "kim"}, 
//     {name: "lee"}, 
//     {name: "park"}
// ];
// console.log(arr);

// arr.map((item)=>{
//     console.log(item)
// })

// let arr2 = arr.filter((item)=>{
//     return item.name != "kim"
// })
// console.log(arr2)

// let tmp = {
//     age: 18
// }

// tmp = null;

// console.log(tmp)

// let user = {
//     name: "kim",
//     age : 20,
//     intro(){
//         console.log(`hi i'm ${user.age} years old`);
//         console.log(`hi i'm ${this.age} years old`);
//     }
// }

function user3(name){
    this.name = name;
    this.age = "male";
}
let user4 = new user3('kim');
let user5 = new user3('lee');

console.log(user3);
console.log(user4);
console.log(user5);