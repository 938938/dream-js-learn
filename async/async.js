// async & await
// clear style of using promise

// 1 . async
async function fetchUser(){ // 함수 앞에 async 를 사용하면 자동으로 Promise로 만들어짐
  // return new Promise((resolve, reject)=>{
  //   // do network request in 10 secs...
  //   rresolve('abc');
  // });
  return 'abc';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
  await delay(1000);
  throw 'error';
  return 'apple';
}
async function getBanana(){
  await delay(1000);
  return 'banana';
}

async function pickFruits(){
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise; // apple과 banana 병렬실행
  return `${apple}+${banana}`;
}
pickFruits().then(console.log);

// 3.  useful Promise APIs
function pickAllFruits(){
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);