var provider = new firebase.auth.GoogleAuthProvider();
function googleVhid(){
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      var user = result.user;
        console.log(result)
        console.log(user)
        createUser(user.uid,'','','')
        localStorage.setItem('login', user.uid)
        setTimeout(function(){
          window.location.href = `spa.html?id=${user.uid}`
        },3000)
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
    });
}

function email_pass_vhid(){
    
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(userCredential)
    console.log(user)
    createUser(user.uid,nam.value,lastname.value,age.value)
    localStorage.setItem('login', user)
    setTimeout(function(){
      window.location.href = `spa.html?id=${user.uid}`
    },3000)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorCode)
    console.log(errorMessage)
  });
}

function createUser(id,imya,prizv,vik){
    let user = {
        name: imya,
        lastname: prizv,
        age: vik
    }
    console.log(user)
    db.collection('reg_test').doc(id).set(user).then(res => {
        console.log('успіх')
    })
  }
function checkUser(){
  let chek = localStorage.getItem('login')
  if(chek != null){
    window.location.href = `spa.html?id=${chek}`
  }
}

checkUser()