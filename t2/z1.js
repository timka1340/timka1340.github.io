const firebaseConfig = {
  apiKey: "AIzaSyDkV46OAWt3T-4YYbKIHf8iH7sETr9eKCE",
  authDomain: "christmas-fe4af.firebaseapp.com",
  projectId: "christmas-fe4af",
  storageBucket: "christmas-fe4af.appspot.com",
  messagingSenderId: "416529199848",
  appId: "1:416529199848:web:e6bbe3c102b539533f0f5d"
};
  firebase.initializeApp(firebaseConfig);

            var db = firebase.firestore();
let spiner = document.getElementById('spiner');
let list = document.getElementById('list');

let articles = [];

db.collection("articles").get().then( res => {
    spiner.style.display = "none";
    res.forEach( doc => {
        const article = doc.data();
        articles.push(article);
        drawArticle(article)
    });
    console.log(articles);
});
function drawArticle(data){
    const article = document.createElement('article');  // Створюємо новий html елемент article

    const title = document.createElement('h2');         // Створюємо новий html елемент h2 (заголовок для article) 
    const text = document.createElement('div');         // Створюємо новий html елемент div (контейнер для тексту у article) 
    const author = document.createElement('a');         // Створюємо новий html елемент а (посилання на ресурс у article)

    title.innerHTML  = data.title;                      // Додаємо відповідні тести у потрібні блоки статті. 
    text.innerHTML   = data.article;                    // Використовуютсья .innerHTML для того, щоб враховуватии htьl теги збержені у базі данних
    author.innerHTML = "Оригінал";
    author.href      = data.author;

    article.appendChild(title);                         // Вставляємо заголовок у елемент article
    article.appendChild(text);                          // Вставляємо текст у елемент article
    article.appendChild(author);                        // Вставляємо посилання у елемент article

    list.appendChild(article);                          // Вставляємо article у елемент на нашій стоорінці
}