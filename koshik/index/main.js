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
  


  let vsi_tovari=[]
  function drawTovars(){
      let tovari = document.getElementById('tovari');
      tovari.innerHTML = ''
      db.collection('products').get().then(res => {
          res.forEach(doc  =>{
              let tovar = doc.data();
              tovar.id = doc.id;
              tovar.count = 1;
              vsi_tovari.push(tovar)
              tovari.innerHTML += `
          <div class="tovar">
              <p>Назва: ${tovar.name}</p>
              <p>Картинка:${tovar.img}</p>
              <p>Діагональ:${tovar.display}</p>
              <p>Акумулятор:${tovar.accumulyator}</p>
              <p>Ціна: ${tovar.price}</p>
              <button onclick="saveLocal(${vsi_tovari.length-1})">Купити</button>
          </div>
              `
             
          })
      })
  }
  drawTovars()
  
  
  function saveLocal(index){
      let loc_tovars = getLocal();
   
      let tovar = loc_tovars.findIndex(car => car.id === vsi_tovari[index].id);
       
      if(tovar === -1){
          loc_tovars.push(vsi_tovari[index])
      }else{
          loc_tovars[tovar].count++
      }
     
      console.log(tovar)
  
  
     
      localStorage.setItem('prod', JSON.stringify(loc_tovars))
     
  }
  
  
  function getLocal(){
     let prod =  JSON.parse(localStorage.getItem('prod'));
      if(prod === null){
          return []
      }else{
          return prod
      }
  
  
  }
  
  
  