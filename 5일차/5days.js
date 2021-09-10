// let user ={
//     name: "kim"
// };


// let des = Object.getOwnPropertyDescriptor(user, "name");

// Object.defineProperty(user,"name",{
//     configurable: false
// })

// Object.defineProperty(user,"name",{
//     writable: false
// })
// user.name = "lee";
// console.log(des)


// let user = {
//     name: "kim",
//     subname: "leepark",

//     get fullname() {
//         return `${this.name} ${this.subname}`;
//     },
//     set fullnmae(value) {
//         [this.name, this.subname] = value.spit(" ");
//     }
// }

// console.log(user.fullname)


// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;

//     Object.defineProperty(this,"age",{
//         get() {
//             let todayYear = new Date().getFullYear();
//             return todayYear = -this.birthday.getFullYear();
//         },
//     });

// }

// let eom = new User("eom",new Date(2000,6,1));

// console.log(eom);

// let animal = {
//     eats: true,
//     walk() {
//         console.log(`${this.eats} walk`);
//     }
// };

// let chicken = {
//     eats: false,
//     fly : true,
//     __proto__: animal
// }

// chicken.walk();
// chicken.eats = false;

// console.log(chicken);

// class animal{
//     constructor(name){
//         this.name = name;
//     }

//     walk() {
//         console.log("삐약삐약")
//     }
// }

// let ani = new animal("chicken");
// console.log(ani)
// ani.walk();

// function animal(name){
//     this.name = name;
// }

// class User{
//     constructor(name,gender){
//         this.name = name;
//         this.gender = gender;
//     }

//     get name(){
//         return this.name;
//     }
//     set name(value){

//         if(value.length < 4){
//             console.log("이넘짧");
//             return
//         }
//         this._name = value;
//     }

//     get gender() {
//         return this.gender;
//     }
//     set gender(value) {
//         if(value === "male"){
//             console.log("남자불가");
//             return
//         }
//         this._gender = value;
//     }
// }

// let user = new User("kim123", "male");
// console.log(user);
// console.log(user.profile)