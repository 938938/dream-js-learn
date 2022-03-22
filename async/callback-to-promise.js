class UserStorage {
  loginUser(id, passwordr){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(
          (id==='abc'&&password==='coding') ||
          (id==='def'&&password==='javascript')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    })
  }

  getRoles(user){
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        if(user==='abc'){
          resolve({name:'abc', role:'admin'});
        } else {
          reject(new Error('no access'));
        }
      }, 1000);  
    })
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user=>alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`))
  .catch(console.log);

//위 userStorage와 아래는 같음.

// userStorage.loginUser(
//   id,
//   password,
//   user=>{
//     userStorage.getRoles(
//       user,
//       userWithRole => {
//         alert
//       },
//       error=>{
//         console.log(error);
//       }
//     );
//   },
//   error => {
//     console.log(error);
//   }
// )