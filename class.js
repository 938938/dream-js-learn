'use strict';

// 1. class declarations 클레스 선언
class person{
  //constructor
  constructor(name, age){
    //fileds
    this.name = name;
    this.age = age;
  }
  //methods
  speak(){
    console.log(`${this.name}: hello!`);
  }
}

const abc = new person('age',20);
console.log(abc,name); // age
console.log(abc.age); // 20
abc.speak(); // abc : hello!

//2. Getter and setters
class user {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value){
    if(value<0){
      throw Error('age can not be negative');
    } // value가 0보다 작으면 에러를 표시함
    //or
    this._age = value <0 ? 0 : value; // 0보다 작으면 0을 쓰고 아니면 그 값을 씀
  }
}

const user1 = new user('abc', 'def', -1);
console.log(user1.age);

//3. Fields ( public, private )
class experiment{
  publicField = 2; // 외부에서 접근 가능
  #privateField = 0; // 앞에 # 붙이기. 클래스 내부에서만 값이 보여지고 접근되고 변경 가능, 외부에선 불가능.
}
console.log(experiment.privateField); //undifined

//4. Static properties and methods
// object와 상관없이 class가 가지고 있는 동일한 값 등에 반복되어 사용되는 메소드에 static 키워드를 붙여 사용
class article{
  static publisher = 'abcdef';
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }
  static printPublisher(){
    console.log(article.publisher);
  }
}

//5. Inheritance
class shape {
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw(){
    console.log(`drawing ${this.color} color of`);
  }
  getArea(){
    return this.width = this.height;
  }
}

class Rectangle extends shape{} // extends 키워드를 통해 shape의 요소가 rectangle에 포함
class Triangle extends shape{
  draw(){
    super.draw(); // 부모의 메소드도 호출 됨 (2)
    console.log('triangle'); // 재정의하면 기존 함수는 호출되지 않음 (1)
  }
  getArea(){
    return(this.width = this.height)/2;
  }
}
// shape만 수정해도 Rectangle, Triangle 모두 수정 가능
// 필요한 함수만 재정의 가능(overwrite)

const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'red');
rectangle.draw(); // drawing blue color of

//6. Class checking : instanceOf // 오브젝트가 오른쪽 클래스를 이용해서 만들어진건지 아닌지 확인 true & false
console.log(rectangle instanceof Rectangle); //t
console.log(triangle instanceof Rectangle); //t
console.log(triangle instanceof Triangle); //t
console.log(triangle instanceof shape); //t
console.log(triangle instanceof Object); //t

