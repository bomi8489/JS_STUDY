// var let const 으로 변수선언
// var: 재선언 가능
// let, const : 재선언이 불가능
// var, let : 재할당이 가능
// const : 재할당이 불가능

// 호이스팅 : 번수선언을 함수 중간에서 하면 맨위로 올려서 먼저 읽고 코드 해석
// function hello() {
//     console.log(hi)      // var hi, console.log(hi)
//     var hi = 'hello'     // hi = 'hello'
//     console.log(hi)      // console.log(hi)
// }
// hello()

// 템플릿 리터럴 : js에서 문자를 다룰때 어려웠던 점을 해결하기 위해 나온 문법 ``, 문자중간에 변수를 집어넣을떄 편리

// 스프레드 문법 활용방법과 apply, call함수
// var array = ['hello', 'hi'];
// console.log( ... array);
// var a = [1,2,3];
// var b = [4,5,6];
// var c = [ ... a, ... b]; // [1,2,3,4,5,6];
// var d = [a,b];
// console.log(c)
// console.log(d)

// 오브젝트 key값 중복이 일어나면 마지막으로 선언한 key값으로 적용
// var o1 = {a : 1, b : 2};
// var o2 = {a : 3, ... o1};
// console.log(o2);

