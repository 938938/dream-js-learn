// 1. String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals: 1+2
123
=${1+2}`);

//2. Numeric operators
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(1%1); //remainder
console.log(1**1);  //exponentiation

//3. Increment and decrement operators
let counter = 2;
const perIncrement = ++counter;
//counter = counter + 1
//perIncrement = counter;
//perIncrement = 3 //counter = 3
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter+1;
//postIncrement = 3 //counter = 4
//++의 위치에 따라 업데이트 순서가 달라짐.(--도 같음)

//4. Assigment operators
let x = 3;
let y = 6;
x += y; // x = x+y;
x -= y;
x *= y;
x /= y;

//5. Logical operators : || (or), && {and}, ! (not)

// a || b || c  : a나 b나 c 중 하나라도 true면 참.
// 만약 a가 참이면 거기서 멈춤. b, c 판단 안함.
// 심플한 값을 앞에 두고 시간이 걸리는 함수 등은 뒤에 위치

const value1 = false;
const value2 = 4<2; // false

console.log(`or : ${value1 || value2 || check()}`);

function check(){
  for(let i = 0; i < 10; i ++){
    //wasting time
    console.log('house');
  }
  return true;
} // true

if(nullableObject !=null ){
  nullableObject.something;
}

//5. Equality
//== : loose equality, with type conversiton
//=== : strict equality, no type conversion
const stringFive = '5';
const numberFive = 5;
console.log(stringFive == numberFive); // true
console.log(stringFive === numberFive); // false

const a = {name:'abc'};
const b = {name:'abc'};
const c = a;
console.log(a==b);//false
console.log(a===b);//false
console.log(a===c);//true

//6. Conditional operators : if
const name = 'abc';
if ( name==='abc'){
  console.log("Welcome, abc!");
} else if ( name==="def"){
  console.log("Hello?")
} else {
  console.log("unknown");
}

//7. Ternary operator : ?
//condition ? value1 : value2; // 조건이 참이면 value1, 거짓이면 value2 실행
console.log( name === 'abc' ? 'yes' : 'no');

//8. Switch statement
const browser = 'IE';
switch (browser){
  case 'IE':
    console.log('go away!');
    break;
  case 'chrome':
  case 'firefox':
    console.log('love you');
    break;
  default:
    console.log('same all!');
    break;
}

//9. Loops
let i = 3;
while ( i>0 ){
  console.log(i);
  i--;
}
// 3
// 2
// 1

do{  // 블럭을 실행한 다음 조건이 맞는지 안맞는지 검사.
  console.log{i};
  i--;
} while ( i>0 );
//0

// for loop, for(begin; condition; step)
for(i = 3; i>0; i--){
  console.log(i);
}
//3
//2
//1
for(let i = 3; i>0; i=i-2){
  console.log(i);
}
//3
//1

// nested loops
for(let i = 0; i<10; i++){
  for(let j = 0 ; j < 10; j++){
    console.log(`i:${i}, j:${j}`);
  }
}
// i가 0일 때 j를 0부터 9까지
// i가 1일 때 j를 0부터 9까지
// …
// i가 9일 때 j를 0부터 9까지

// break : 루프를 완전히 끝냄
// continue : 지금 것만 스킵하고 다음으로 다시 넘어감
for ( let i = 0; i < 11; i++){
  if(i%2 !==0){
    continue;
  }
  console.log(i);
}
// 0, 2, 4, 6, 8, 10
for ( let i = 0; i < 11; i++){
  if(i%2 ===0){
    console.log(i);
  }
}
//위 수식보다 아래 수식(원하는 결과가 나왔을 때만 출력)이 더 좋음

for ( let i = 0; i < 11; i++ ){
  if(i>8){
    break;
  }
  console.log(i);
}
// 1,2,3,4,5,6,7,8