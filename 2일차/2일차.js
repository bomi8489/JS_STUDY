// let A = 10;
// let B = 20;

// console.log(A>B);
// console.log(A==B);

// let Astring = 'z';
// let Bstring = 'a';

// console.log(Astring>Bstring);

// let D = '2';
// let E = 2;

// console.log(D==E);
// console.log(D===E);

// console.log(0 == false);
// console.log('' == false);
// console.log(null === undefined);



// let kim = "kim";
// let lee = "lee";

// lee = "kim";

// if(lee === kim){
//     console.log(`같아`);
// }else if(lee == "lee"){
//     console.log(`중복이야`);
// }else{
//     console.log(`그런 이름한적없어`);
// }


//19살 성인 남자면 출입 붕가능
//19살 성인 여자면 출입 가능
// let age = 25;
// let gender = "여자";

// let message = (age>19 && gender === "남자")? "이용불가입니다." : "안녕하세요";
// console.log(message)

// if(gender === "남자" && age>=10){
//     console.log(`꼬맹이`);
// }else if(gender === "남자" && age<10){
//     console.log(`애기`);
// }else if(gender === "여자"){
//     console.log(`여성입니다`);
// }


// let Name = "";
// if(Name == ""){
//     Name = "kim"
//     console.log(Name);
// }

// let height;
// height = height ?? 100;
// console.log(height);

// let count = 0;
// while(count<10){
//     count++;
// }
// console.log(count);

// for(let i = 1; i<11; i++){
//     console.log(i);
// }




for(var i =0; i<4; i++){
    for(var j=0; j<=i; j++){
        process.stdout.write(`*`);
    }
    console.log("");
}

for (let i = 1; i <= 4; i++) {
    let star = "";
    for (let j = 0; j < i; j++) {
      star += "*";
    }
    console.log(star);
  }


// let browser = "";
// switch(browser){
//     case "explo":
//         console.log("구데기");
//         break;
//     case "safari":
//         console.log("맥만 좋음");
//         break;
//     case "fireFox":
//         console.log("캐릭터 귀여움");
//         break;
//     default:
//         console.log("그런 브라우저가 세상에 있다니!")
// }

add(10,20);

function add(a,b){
    return a+b;
}

let result = add(10,20);
console.log(result);