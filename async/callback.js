'use strict';

//JavaScript is synchronous / 자바스크립트는 동기적인 성격을 가짐.
// 호이스팅이 된 이후부터 작성한 순서대로 동기적으로 실행

console.log('1');
setTimeout(()=>console.log('2'), 1000);
console.log('3');

// Synchronous callback 동기 콜백
function printImmediately(print){
  print();
}
printImmediately(()=>console.log('hello'));

// Asynchronous callback 비동기 콜백
function printWithDelay(print, timeout){
  setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);


// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError){
    setTimeout(()=>{
      if(
        (id==='abc'&&password==='coding') ||
        (id==='def'&&password==='javascript')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError){
    setTimeout(() => {
      if(user==='abc'){
        onSuccess({name:'abc', role:'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user=>{
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
      },
      error=>{
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
)