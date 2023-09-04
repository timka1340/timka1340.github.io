const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = loginForm.username.value;
  const password = loginForm.password.value;

  // Перевірка логіну та паролю (приклад, можна змінити на свою логіку)
  if (username === 'admin' && password === '29006') {
    alert('Ви успішно увійшли!');
    window.location.href = 'index.html'; // Перенаправлення на головну сторінку після входу
  } else {
    alert('Неправильний логін або пароль. Спробуйте ще раз.');
  }
});
