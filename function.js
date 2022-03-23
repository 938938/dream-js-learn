// function 
// function = object in JS / 서브 프로그램이라고도 부름
// =변수할당, return, 파라미터 가능 , 여러번 사용 가능. 주로 한가지 기능.

function log(message){
  console.log(message);
}
log('hello'); // hello

function changeName(obj){
  obj.name = 'coder';
}

//Parameters
const a = {name:'abc'};
changeName(a);
console.log(a); // {name:'coder'}

//Default parameters
function showMessage(message, from = 'unknown'){
  console.log(`${message} by ${from}`);
}
showMessage('hi!');
//hi! by unknown

// Rest parameters : ... 배열 형태로 전달됨.
function printAll(...args){
  for(let i = 0; i<args.length; i++){
    console.log(args[i]);
  }
//위와 아래는 같음
  for (const arg of args){
    console.log(arg);
  }
}
printAll('dream','coding','abc');
//dream
//coding
//abc

// Local scope
let globalMessage = 'global'; // global variable
function printMessage(){
  let message = 'hello'; // 지역변수
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother(){
    console.log(message);
    let childMessage = 'hello';
  };
  console.log(childMessage); // 에러. 자식 함수에서 정의된 값은 부모는 알 수 없음.
}
printMessage(); // hello / global

//return a value
function sum(a,b){
  return a + b;
}
const result = sum(1,2); //3
console.log(`sum : ${sum(1,2)}`); // sum : 3
//return값이 따로 지정되어있지 않은 함수는 return undefined가 기본 설정되어있음(생략)

//7. Early return, early exit
//bad
function upgradeUser(user){
  if(user.point>10){
    //long upgrade logic...
  }
}

//good
function upgradeUser(user){
  if(user.point<=10){
    return;
  }
  //long upgrade logic...
}

//function expression << 할당된 다음부터 호출이 가능. ↔ function declaration : 호이스팅이 가능함
const print = function (){ //anonymous function(이름없는함수) //이름 작성할 수도 있음(name function)
  console.log('print');
};
print(); // print
const printAgain = print; //print
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3)); // 4

//Callback function 함수에 함수를 포함.
function randomQuiz(answer, printYes, printNo){
  if(answer === 'love you'){
    printYes();
  } else {
    printNo();
  }
}
const printYes = function (){
  console.log('yes');
};
const printNo = function print(){ // 디버깅을 할 때 찾기 쉽도록 이름 붙여놓음.
  console.log('no');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function // always anonymous // 간편하게 function 사용 가능.
const simplePrint1 = function(){
  console.log('simple');
}
// simplePrint1과 2는 같은 함수.
const simplePrint2 = () => console.log('simple');

const add = (a, b) => a+b;
const simpleMultiply = (a, b) => {
  return a*b;
}

// IIFE
(function hello(){
  console.log('IIFE');
})(); // 선언함과 동시에 바로 함수 호출