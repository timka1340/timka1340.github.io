document.addEventListener('DOMContentLoaded', async function(){
    let not_found = await axios.get('templates/404.html');
    let home = await axios.get('templates/home.html');
    let sots = await axios.get('templates/sots.html');
    let article = await axios.get('templates/articles.html');
    let login = await axios.get('templates/login.html');


    const data = {
        test: 'Hi!',
        currentPath: window.location.hash,
        content: []
    }


    const Home = {
        template: home.data
    }

    const notFounds = {
        template: not_found.data
    }
    const Login = {
        template: login.data,
        methods: {
            googleAuth(){
                firebase.auth()
                .signInWithPopup(provider)
                .then((result) => {
                  /** @type {firebase.auth.OAuthCredential} */
                  var credential = result.credential;
              
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  var token = credential.accessToken;
                  // The signed-in user info.
                  var user = result.user;
                  console.log(result)
                  // IdP data available in result.additionalUserInfo.profile.
                    // ...
                }).catch((error) => {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // The email of the user's account used.
                  var email = error.email;
                  // The firebase.auth.AuthCredential type that was used.
                  var credential = error.credential;
                  // ...
                });  
            }
        }
    }

    const Sots = {
        template: sots.data,

        methods: {
            getProducts(){
                db.collection('products').get().then(res =>{
                    this.$root.content = [];
            res.forEach(doc => {
                let prod = doc.data();
                prod.id = doc.id;
                this.$root.content.push(prod)
            })   
           
                })
        }

    },
    mounted(){
        this.getProducts();
    }



    const Art = {
        template: article.data,

        methods: {
            getProducts(){
                db.collection('articles').get().then(res =>{
                    this.$root.content = [];
            res.forEach(doc => {
                let prod = doc.data();
                prod.id = doc.id;
                this.$root.content.push(prod)
            })   
          
                })
        }

    },
    mounted(){
        this.getProducts();
    }

    }





    const routes = {
        '/': Home,
        '/not-found': notFounds,
        '/sots': Sots,
        '/art': Art,
        '/login': Login
    

    }

    const app = {
        data(){
            return data
        },
        methods: {
    },
        components: {

        },
        computed: {
            currentView(){
                return routes[this.currentPath.slice(1) || '/' || notFounds]
            }
        },
        mounted(){
            window.addEventListener('hashchange', () =>{
                this.currentPath = window.location.hash
            })
        }
        }



   Vue.createApp(app).mount('#app')








})