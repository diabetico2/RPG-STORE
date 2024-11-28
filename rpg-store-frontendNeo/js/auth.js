function isAuthenticated() {
  const token = localStorage.getItem('authToken');
  return token !== null; // Verifica se o token existe
}

function protectRoute() {
  if (!isAuthenticated()) {
    alert('Você precisa fazer login para acessar esta página!');
    window.location.href = '../index.html'; // Redireciona para a página inicial
  }
}
