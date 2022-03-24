// 함수 선언
// 함수 호출

//함수 선언
function doSomething(add) {
  console.log(add);
  const result1 = add(2, 3);
  console.log(result1);
};
function add(a, b){
  const sum = a + b;
  return sum;
}

//함수 호출
doSomething(add); // add 함수 자체가 doSomething에 전달 add()를 할 경우 함수 실행 - NaN

const result = add(1, 2); // 함수가 전달한 값을 변수에 저장
console.log(result); // 3

const addFun = add;
console.log(add); // addFun
addFun(1,2); //3