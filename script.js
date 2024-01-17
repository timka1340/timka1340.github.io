// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMTz8qEc6a6CAtRit63FxgH62iBRmgKgw",
  authDomain: "mm2rb-2b0bb.firebaseapp.com",
  projectId: "mm2rb-2b0bb",
  storageBucket: "mm2rb-2b0bb.appspot.com",
  messagingSenderId: "335543025501",
  appId: "1:335543025501:web:9bd851dcada2ce57cfb2b4",
  measurementId: "G-3EY64C0VZW"
};
  
  firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function drawTovars(){
  let productList = document.getElementById('productList')
  productList.innerHTML = '';

  db.collection('kursova_tovars').get().then(res=>{
    res.forEach(doc=>{
      let tovar = doc.data();
      tovar.id = doc.id;
      productList.innerHTML += `
      <div class="card" style="width: 18rem;">
    <img src="${tovar.img}" class="card-img-top" alt="...">
    <div class="card-body body">
      <h5 class="card-title">${tovar.name}</h5>
      <p class="card-text">${tovar.type}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Виробник:${tovar.developer}</li>
      <li class="list-group-item">₴:${tovar.price}</li>
      <li class="list-group-item">Відгуки:${tovar.reviews}</li>
    </ul>
    <div class="card-body">
    <a href=""><button type="button" class="btn btn-secondary" disabled>Купити</button></a>
    <a href=""><button type="button" class="btn btn-primary" disabled>В кошик</button></a>
    </div>
  </div>
      `

    })
  })
}
drawTovars()