document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('createStockForm');
  
  if (!form) {
    console.error('Elemento com ID "createStockForm" não encontrado.');
    return;
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Previne o envio padrão do formulário

    // Pegando os valores do formulário
    const name = document.getElementById('itemName')?.value;
    const category = document.getElementById('itemCategory')?.value;
    const quantity = document.getElementById('itemQuantity')?.value;
    const type = document.getElementById('itemType')?.value;
    const line = document.getElementById('itemLine')?.value;

    if (!name || !category || !quantity || !type) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      // Fazendo a requisição POST para o backend
      const response = await fetch('http://localhost:3000/stock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          category,
          quantity: parseInt(quantity, 10), // Garante que é um número
          type,
          line,
        }),
      });

      if (response.ok) {
        alert('Item criado com sucesso!');
        window.location.href = 'main.html'; // Redireciona para a página principal
      } else {
        const error = await response.json();
        console.error('Erro ao criar item:', error);
        alert(`Erro: ${error.message}`);
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
      alert('Erro ao conectar com o servidor.');
    }
  });
});
