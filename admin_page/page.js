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
  

function showModal(id){
    document.getElementById(id).classList.add('show')
    }
    function hideModal(id){
    document.getElementById(id).classList.remove('show')
    }
    let vsi_masive = []
    let nomer = 0;
    function addUser(){
        let user = {
            name: document.getElementById('name').value,
            developer: document.getElementById('developer').value,
            img: document.getElementById('img').value,
            reviews:document.getElementById('reviews').value,
            type:document.getElementById('type').value
        }
    
        db.collection("kursova_tovars").add(user).then(function(){
            console.log('Додано')
            hideModal('newTaskModal')
            location.reload()
        })
    }
    
    
    function drawUsers(){
        let tbody = document.getElementById('tbody')
        tbody.innerHTML = ''
        let idx = 1;
        db.collection("kursova_tovars").get().then(res => {
            res.forEach(function(doc){
                let tovar = doc.data();
                tovar.id = doc.id;
                vsi_masive.push(tovar)
                
                tbody.innerHTML += `
                <tr>
                <th scope="row">${idx}</th>
                <td>${tovar.name} </td>
                <td>${tovar.developer}</td>
                <td>${tovar.img}</td>
                <td>${tovar.price}</td>
                <td>${tovar.revievs}</td>
                <td>${tovar.type}</td>
                <td class="text-center"><button class="btn btn-warning btn-sm" onclick="edit(${nomer})">Редагувати</button></td>
                <td class="text-center"><button class="btn btn-danger btn-sm" onclick="delUser('${tovar.id}')">x</button></td>
              </tr>
                `
                nomer++
                idx++
            })
        })
    }
    
    
    drawUsers()
    
    
    function SaveEditUser(id){
        let user = {
            name: document.getElementById('edit_name').value,
            developer: document.getElementById('edit_developer').value,
            img: document.getElementById('edit_img').value,
            price:document.getElementById('edit_price').value,
            reviews:document.getElementById('edit_reviews').value,
            type:document.getElementById('edit_type').value
        }
        console.log(user)
        db.collection("kursova_tovars").doc(id).set(user).then(function(){
            console.log('Оновлено')
            hideModal('editTaskModal')
            location.reload()
        })
    }
    
    
    function edit(index){
       document.getElementById('edit_name').value = vsi_masive[index].name;
        document.getElementById('edit_developer').value= vsi_masive[index].developer;
        document.getElementById('edit_img').value= vsi_masive[index].img;
        document.getElementById('edit_price').value= vsi_masive[index].price;
        document.getElementById('edit_reviews').value= vsi_masive[index].reviews;
        document.getElementById('edit_type').value= vsi_masive[index].type;
        showModal('editTaskModal')
        document.getElementById('saveEd').setAttribute('onclick', `SaveEditUser("${vsi_masive[index].id}")`)
    }
    
    
    function delUser(userId){
        db.collection('kursova_tovars').doc(userId).delete().then(function(){
            location.reload()
        })
        
    }
    
    
    
    
    