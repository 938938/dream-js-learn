//변수 : 프로그래밍 언어에서 처리하는 데이터를 담고 있는 곳
let age = 2; // 변수 이름은 가능한 구체적으로 정하는게 좋음
let number = 2;
let number2 = number; // number의 변수를 복사해서 붙여넣음.

number2 = 3; // 2 대신 3을 업데이트(number 변수에는 영향 없음)

//오브젝트 (함수도 오브젝트에 포함)
const obj = { // key를 모은 주소만 obj라는 이름으로 할당 
  // const로 선언할 경우 레퍼런스의 변경은 불가능하지만 그 안의 내용은 변경 가능.
  name : 'abc', // 각 key마다 메모리가 할당
  age : 5,
};
console.log(obj.name); // abc

let obj2 = obj; // obj의 주소만 복사되어 obj2에 할당.
console.log(obj2.name); // abc

obj.name = 'def';
console.log(obj2.name); // def . obj2의 key도 같이 변경됨.


// 함수 . 반복적으로 수행되는 일은 함수로 설정.(재사용 가능)\
// {} 코드 블럭. 

function add(a,b){ // a, b: 인자. 외부에서 받아오는 값을 블럭 안에 접근할 수 있도록 함.
  //현재 시점에는 a와 b가 결정되어있지 않음
  return a+b;
};
const sum = add(3,4); // 함수 호출, 코드블럭 실행. 결과가 sum에 할당.
console.log(sum);
const doSomething = add; // 
const result = doSomething(2,3);
console.log(result);