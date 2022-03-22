'use strict';

// Promise is a JavaScript object for asynchronous operation
// 정보를 제공하는 프로듀서, 정보를 소비하는 소비자(컨슈머)
// State : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
/// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject)=>{
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(()=>{
    // resolve('abc');
    reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then(value=>{
    console.log(value);
  })
  .catch(error=>{
    console.log(error);
  })
  .finally(()=>{  // 성공과 실패 유무에 상관없이 무조건 마지막에 실행
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
  setTimeout(()=>resolve(1),1000);
});

fetchNumber
  .then(num=>num*2)
  .then(num=>num*3)
  .then(num=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>resolve(num-1), 1000);
    })
  })
  .then(num=>console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('chicken'),1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject)=>{
    setTimeout(()=>reject(new Error(`error! ${hen}=>egg`)),1000);
  });
const cook = egg =>
  new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(`${egg}=>meal`),1000);
  });

getHen()
  .then(getEgg) // hen => getEgg(hen) 한가지만 가져올 땐 다른 부분 생략 가능
  .catch(error => {
    return 'bread';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);