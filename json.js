// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple","banana"]

const rabbit = {
  name: 'abc',
  color: 'white',
  size: null,
  birthDay: new Date(),
  symbol: Symbol('id'), //자바스크립트 자체에 들어있는 데이터는 JSON에 포함되지 않음
  jump: ()=>{
    console.log(`${name} can jump!`);
  },
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === 'name' ? 'abc' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value)=>{
  console.log(`key:${key}, value:${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// abj.jump();

console.log(rabbit.birthDay.getDate());
console.log(obj.birthDay.getDate());