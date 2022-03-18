//Object = { key : value }

const name = 'abc';
const age = 5;
print(name, age);
function print(name, age){
  console.log(name);
  console.log(age);
}

const abc = {name:'abc', age:4};
function print(person){
  console.log(person.name);
  console.log(person.age);
}
print(abc);

const obj1 = {}; // object literal
const obj2 = new Object(); //object constructor

abc.hasJob = true; // 기존 object에 새로운 요소 추가 가능
console.log(abc.hasJob);

delete abc.hasJob; // 기존 object 요소 삭제 가능

//2. Computed properties

console.log(abc.name); // abc / 코딩하는 순간 키에 해당하는 값을 받아오고 싶을 때 사용
console.log(abc['name']); // abc / 정확하게 어떤 키가 필요한지 모를 때(런타임에 결정될 때)
abc['hasJob'] = true;

function printValue(obj, key){
  console.log(obj[key]);
}
printValue(abc, 'name');

// 3. Property value shorthand

const person1 = { name:'bob', age:2 };
const person2 = { name:'steve', age:3 };
const person3 = { name:'dave', age:4 };
const person4 = new Person('abc',20);

function Person(name, age){ // 순수하게 오브젝트를 생성하는 함수는 주로 대문자로 시작
  // return{
  //   name,
  //   age
  // };

  //4. constructor function
  this.name = name;
  this.age = age;
}

//5. in operator : 해당하는 오브젝트 안에 키가 있는지 없는지 확인
console.log('name' in abc); // true
console.log('age' in abc); // true
console.log('who' in abc); // false
console.log(abc.who) // undefined

//6. for..in vs for..of
//for (key in obj)
console.clear(); // 이전에 있는 콘솔 모두 삭제
for ( key in abc ){
  console.log(key); // abc 안의 모든 키가 출력
}

// for (value of iteralbe) / 배열, 리스트 등 순차적으로 된 요소를 사용
const array = [1,2,3,4];
for(let i = 0; i<array.length; i++){
  console.log(array[i]);
}
// 위와 아래는 동일함
for(value of array){
  console.log(value);
}

// 7. fFun cloning
const user = { name : 'abc', age:20};
const user2 = user;
user2.name = 'coder';
console.log(user); // { name : 'coder', age : 20 }

//Object 복제 방법
//old way
const user3 = {};
for ( key in user ){
  user3[key] = user[key];
}
//new way - Object.assign
// Object.assign(dest, [obj1, obj2, obj3...])
// assign<T,U>(target : T, source:U) : T & U;
// assign<T,U,V>(target : T, source1:U, source2 : V) : T & U & V;
const user4 = Object.assign({}, user);

//another example
const fruit1 = {color:'red'};
const fruit2 = { color:'blue', size:'big'};
const mixed = Object.assign({},fruit1, fruit2); // 동일한 부분 덮어씌움
console.log(mixed.color); // blue
console.log(mixed.size); // big