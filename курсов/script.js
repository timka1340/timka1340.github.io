// Приклад списку товарів (можна замінити на ваші дані)
const products = [
    { id: 1, name: 'Ручка', price: 1.5 },
    { id: 2, name: 'Блокнот', price: 2.0 },
    { id: 3, name: 'Олівець', price: 0.5 },
    { id: 4, name: 'Маркери', price: 4.50 },
    { id: 3, name: 'Зошити', price: 0.5 },
    { id: 3, name: 'Пенал', price: 2.5 },
    // Додайте більше товарів тут
  ];
  
  const productList = document.getElementById('productList');
  const cartItems = document.getElementById('cartItems');
  const totalElement = document.getElementById('total');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const searchInput = document.getElementById('searchInput');
  
  // Заповнення списку товарів
  function renderProducts() {
    productList.innerHTML = '';
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>Ціна: $${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Додати до кошика</button>
      `;
      productList.appendChild(productElement);
    });
  }
  
  // Додавання товару до кошика
  function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
      cartItems.innerHTML += `<li>${product.name} - $${product.price.toFixed(2)}</li>`;
      updateTotal();
    }
  }
  
  // Оновлення загальної вартості кошика
  function updateTotal() {
    const cartItemsList = cartItems.querySelectorAll('li');
    let total = 0;
    cartItemsList.forEach(item => {
      const price = parseFloat(item.textContent.match(/\d+\.\d+/)[0]);
      total += price;
    });
    totalElement.textContent = `Загальна вартість: $${total.toFixed(2)}`;
  }
  
  // Пошук товарів
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    renderFilteredProducts(filteredProducts);
  });
  
  // Відображення відфільтрованих товарів
  function renderFilteredProducts(filteredProducts) {
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>Ціна: $${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Додати до кошика</button>
      `;
      productList.appendChild(productElement);
    });
  }
  
  // Оформлення замовлення
  checkoutBtn.addEventListener('click', () => {
    alert('Замовлення оформлено! Дякуємо за покупку.');
    cartItems.innerHTML = '';
    totalElement.textContent = 'Загальна вартість: $0';
  });
  
  
  // Запуск
  renderProducts();
  