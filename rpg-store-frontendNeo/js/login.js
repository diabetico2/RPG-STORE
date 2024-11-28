document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault(); // Evita o reload da página

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  errorMessage.textContent = '';

  try {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('authToken', data.token);
      alert('Login bem-sucedido!');
      
      window.location.href = '/RPG-store/rpg-store-frontendNeo/templates/main.html';

    } else {
      errorMessage.textContent = data.message || 'Usuário ou senha inválidos.';
    }
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    errorMessage.textContent = 'Erro ao conectar ao servidor.';
  }
});
