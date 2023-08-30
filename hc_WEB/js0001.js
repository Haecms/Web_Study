console.log("abc");
//alert("abc");

//변수 종류
// 1. 자동(따로 설정 안 함)
x = 10;
x2 =  x+1
console.log("x2",x2);
// 2. var(old한 방식 - 잘 안쓰는게 좋음)
var x3 = 10;
var x4 = x3 + 1
console.log("x4",x4);
// 3. let(ES6에서 권장하는 타입)
let x5 = 10;
let x6 = x3 + 1
console.log("x6",x6);
// 4. const(ES6에서 권장하는 타입)
const x7 = 10;
const x8 = x3 + 1
console.log("x8",x8);

// let vs const
let x9 = 1;
x9 = 2;
console.log("x9",x9);
//const x10 = 1;
//x10 = 2;
//console.log("x10",x10);

// var vs let(var 재정의 가능/let: const처럼 처음에만 지정 가능)
var x11 = 1
console.log("x11", x11)
var x11 = 'abc'
console.log("x11",x11)

//let x12 = 1
//console.log("x12", x12)
//let x12 = 'abc'
//console.log("x12",x12)

// => Typescript(숫자, 문자열, ...)

// 연산자
// + - * /
console.log("2의 3제곱",2**3)

if(1>2){
    console.log("true");
}
if(1 ==='1'){
    console.log("1===1 true");
}
else{
    console.log("1===1 false");
}
console.log("5+5",5+5)
console.log("'5'+5",'5'+5)
console.log("'abc'+5",'abc'+5)

if(2>1 && 3>2)
{
    console.log("&& 참");
}
if(2>1 || 3>2)
{
    console.log("|| 또는");
}
console.log(typeof("1"));   // "1": string
console.log(typeof(1));     // 1 : number
console.log(typeof(true));  // true/false: boolean
console.log(typeof({"name":"hc", age:43})); // object
console.log(typeof([1,2,3])) // array(object)
console.log(typeof(new Date("2023-07-04"))) // date(object)

let car = undefined;
console.log("car:", typeof(car));

let car2 = "";
console.log("car:", typeof(car2));

function myFunction(p1,p2){
    return p1+p2;
}
let res_myFunction = myFunction(1,2);
console.log(res_myFunction);

// {
//    let local_var = "hello"
// }
// console.log(local_var)

let global_var = "hello2"
function global_var_test(){
    console.log(global_var);
}
global_var_test();

// 문자열 관련 함수들
let text1 = "안녕하세요";
console.log(text1.length);
console.log(text1.slice(2,4));
console.log(text1.slice(2));
console.log(text1.slice(-2));
console.log(text1.substring(2,4));

console.log(text1.replace("안녕","건강"));
console.log("      글자      ".trim());

console.log(text1.indexOf("하세"));
console.log(text1.search("하세"));
console.log(text1.match("하세"));

// let text2 = "첫줄
// 둘쨋줄"
let text2 = `첫줄
둘쨋줄`
console.log(text2);

let text3 = `He said that "I'm not hero"`
let text4 = `He said that \"I'm not hero\"` 

let name2 = "hc";
let familyname = "hae"
let sentencde = `성은 ${familyname} 이고 이름은 ${name2}이다.` // 물결표 쪽 콤마를 사용해야 보관 가능
console.log(sentencde)

let x_nan = 1000 / "ok"
console.log(x_nan) // NaN: not A number

let x_nan2 = NaN
console.log(x_nan2) // NaN: not A number

let x_inf = Infinity
console.log(x_inf);
console.log(1/0)

// array
const cars=["sonata", "avante"];

const cars2=[];
cars2[0] = "sonata";
cars2[1] = "avante";

const cars3 = new Array("sonata", "avante");
cars3[0] = "k5"
cars3[2] = "anata"
console.log(cars3.toString());
console.log(cars3);

/*************************/
function myFunction2(x){
    return x+1;
}
const new_array = []    // 함수가 사용이 됨
new_array[0] = myFunction2;
new_array[1] = cars3;

console.log(new_array[0](1));
console.log(new_array);
/******************************/
const be_sorted = [3, 1, 10, 4, 6];
be_sorted.sort((a,b)=> b-a) // 내림차순 -> 두 개의 숫자를 줘라 그리고 빼서 비교를 한다.
console.log(be_sorted)

be_sorted.sort((a,b)=> a-b) // 오름차순
console.log(be_sorted)

console.log(be_sorted[-1]) // error
console.log(be_sorted[be_sorted.length-1])

const person = []
person[0] = "hc"
person[1] = "Joe"
person[2] = 25
console.log(person.length)
console.log(Array.isArray(person))

const person2 = []
person["name"] = "hc"
person["familyname"] = "Joe"
person["age"] = 25
console.log(person2.length)
console.log(Array.isArray(person2))

const fruit = ["apple", "mango", "melon"];
console.log(fruit.pop(),fruit)
console.log(fruit.pop(),fruit)
console.log(fruit.pop(),fruit)
console.log(fruit.pop(),fruit)

fruit.push("apple");
console.log(fruit);
fruit.push("mango");
console.log(fruit);
fruit.push("melon");
console.log(fruit);

delete fruit[0];
console.log(fruit);

const fruits2 = ["apple", "mango", "melon", "banana"]
console.log(fruits2.slice(1,3))
const fruits3 = ["apple", "mango", "melon", "banana"]
fruits3.splice(1,2)   // 1번부터 2개 *********slice 말고 splice
console.log(fruits3);

const fruits4 = ["apple", "mango", "melon", "banana"]
fruits4.splice(1,2, "lemon", "berry")   // 1번부터 2개 대체
console.log(fruits4);

console.log(Math.min(1,2,3));
console.log(Math.max(1,2,3));
console.log(Math.PI);
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));    // 올림
console.log(Math.floor(4.6));   // 버림
console.log(Math.sign(-4.6));    // 부호만(양수: 1, 음수: -1)
console.log(Math.sqrt(64));
console.log(Math.abs(-10.5));
console.log(Math.round(4.6));
console.log(Math.sin(90*Math.PI/180));
console.log(Math.random());
console.log(Math.round(6*Math.random()));
console.log(Math.round(6*Math.random()));
console.log(Math.round(6*Math.random()));
console.log(Math.round(6*Math.random()));

// if else, switch case

// for
yasik = ["pizza","chicken", "tanghulu"]
for (let i=0; i<yasik.length; i++)
{
    console.log("yasik: ", yasik[i]);
}

yasik = {"store1":"pizza", "store2":"chicken","store3":"tanghulu"}
for (let x in yasik){
    console.log("yasik: ",yasik[x])
}

yasik = ["pizza","chicken", "tanghulu"]
for (let x in yasik){
    console.log("yasik: ",yasik[x])
}

console.log("yasik callback: forEach");
function myFruitCallback(value, index, array){
    console.log("yasik:", value)
}
yasik.forEach(myFruitCallback)

console.log("yasik: for of");
for(let x of yasik){
    console.log("yasik: ",x)
}

// while, do-while 동일   

// break, continue 동일

//Javascript Hoisting: 변수 선언을 나중에 해도 위로 올려줌

hoistVar = 5
console.log(hoistVar);
var hoistVar; // let은 안 됨

// strict mode 다음장으로