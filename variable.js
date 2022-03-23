// 1. Use strict
// ES5에 추가된 기능. Valina 자바스크립트를 사용하기 위함
'use strict';

// 2. Variable
// 변경될 수 있는 값.
// let 변수 선언. 
let name = 'abc';
console.log(name); // abc
name = "hello";
console.log(name); // hello

//  var : 더이상 사용하지 않음. 호이스팅(선언 장소에 상관없이 항상 선언을 가장 위로 끌어올려줌)때문. + Block 선언이 통하지 않기 때문.

//3. Constant
// 한번 선언하면 변수 변경이 안됨. Immutable 타입.
// 보안성, 안전성, 실수 방지

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1===gSymbol2); //true
console.log(`value:${symbol1.description}, type:${typeof symbol1}`);

let text = 'hello';
console.log(`value:${text}, type:${typeof text}`); //vlaue:hello, type:string
text = 1;
console.log(`value:${text}, type:${typeof text}`); //vlaue:1, type:number
text = '7'+5;
console.log(`value:${text}, type:${typeof text}`); //vlaue:75, type:string
text = '8'/'2';
console.log(`value:${text}, type:${typeof text}`); //vlaue:4, type:number