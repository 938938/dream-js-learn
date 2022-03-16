'use strict';

let name = 'kj';
console.log(name);
name = "hello";
console.log(name);

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


