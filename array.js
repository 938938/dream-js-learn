// 배열 : 칸칸이 촘촘이 모여있는 자료구조
// 인덱스 : 0부터 시작. 배열을 구성하는 칸.

'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits); // 0:apple, 1:banana, length:2
console.log(fruits.length); //2
console.log(fruits[0])//apple
console.log(fruits[fruits.length-1])//배열의 마지막 인덱스
console.log(fruits[2])//undefined

// 3. looping over an array
//print all fruits

//a. for
for ( let i = 0; i<fruits.length; i++){
  console.log(fruits[i]);
}
//b. for of
for(let fruit of fruits){
  console.log(fruit);
}
//c. forEach
fruits.forEach((fruit)=> console.log(fruit)); //콜백함수

//4. Addition, deletion, copy
//push: add an item to the end
fruits.push('cherry','orange');
//pop: remove an item from the end
fruits.pop(); // 가장 뒤에서 아이템을 하나 제거 ex)orange
// unshift : add an item to the beginning
fruits.unshift('lemon');
//shift : remove an item from the beginning
fruits.shift(); // 가장 앞에서 아이템 제거 ex)lemon

// shift와 unshift는 pop과 push보다 느림!!!

//slice : remove an item by index position fruits.slice(어디서부터,몇개나 지울건지);
fruits.push('melon','berry');
console.log(fruits); //apple, banana, cherry, melon, berry
fruits.slice(1, 1); // 몇개나 지울건지 설정하지 않으면 해당 인덱스부터 뒷 데이터 모두 삭제.
console.log(fruits); // apple, cheery, melon, berry
fruits.slice(1, 1, 'grape'); // 1번 인덱스부터 하나를 지우고 그 자리에 grape 삽입

//combine two arrays
const fruits2 = ['mandarin','kiwi'];
const newFruits = fruits.concat(fruits2); // fruits에 fruits2를 연결

//5. searching
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple')); //0 / find the index / 배열에 해당하는 값이 없을 때는 -1 출력
console.log(fruits.includes('kiwi')); //true

// lastIndexOf - 같은 값이 여러개일 경우 가장 마지막 값의 위치를 검색
console.clear();
fruits.push('apple');
console.log(fruits.indexOf('apple')); //0
console.log(fruits.lastIndexOf('apple')); //5