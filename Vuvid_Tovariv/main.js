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

  let info = {
    text: 'Hi♡',
    all_products: [],
    all_products_copy: []
  }

  const tovar_component = {
    props:['tov'],
    template: `
    </div>  
        <div class="tovar">
            <p>Name: {{tov.name}}</p>
            <p>Developer: {{tov.developer}}</p>
            <p>Img: {{tov.img}}</p>
            <p>Price: {{tov.price}}</p>
            <p>Reviews: {{tov.reviews}}</p>
            <p>Type: {{tov.type}}</p>
        </div>
    `
  }
  const vue_app = {
    data(){
        return info;
    },
    methods:{
    getFBprods(){
        db.collection('kursova_tovars').get().then(res => {
            res.forEach(doc => {
                let prod = doc.data();
                prod.id = doc.id
                prod.count = 1;
                this.all_products.push(prod)
            })
        })
    
        this.all_products_copy = this.all_products
    },
    tovar_filter(type){
        this.all_products = this.all_products.filter(prod =>{
            return prod.type == type;
        }
        )
        console.log(this.all_products)
       
    }
    },
    components:{
        'tovar' : tovar_component
    },
    mounted(){
        this.getFBprods()
    }
  }
  Vue.createApp(vue_app).mount('#app')