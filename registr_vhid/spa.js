document.addEventListener('DOMContentLoaded', async function(){
    let user_id = new URL(window.location.href).searchParams.get("id");
    let not_found = await axios.get('templates/404.html');
    let home = await axios.get('templates/home.html');
    let sots = await axios.get('templates/sots.html');
    


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
