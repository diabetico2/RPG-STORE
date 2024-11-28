document.addEventListener('DOMContentLoaded', async function () {
  const stockContainer = document.getElementById('stockContainer');

  try {
    const response = await fetch('http://localhost:3000/stock');

    if (response.ok) {
      const items = await response.json();
      stockContainer.innerHTML = ''; // Limpa o container antes de popular

      if (items.length === 0) {
        stockContainer.innerHTML = '<tr><td colspan="5">Nenhum item encontrado no estoque.</td></tr>';
      } else {
        items.forEach((item) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.quantity}</td>
            <td>${item.type}</td>
            <td>${item.line || '-'}</td>
          `;
          stockContainer.appendChild(row);
        });
      }
    } else {
      const error = await response.json();
      console.error('Erro ao carregar estoque:', error);
      stockContainer.innerHTML = `<tr><td colspan="5">Erro: ${error.message}</td></tr>`;
    }
  } catch (error) {
    console.error('Erro de conexão:', error);
    stockContainer.innerHTML = '<tr><td colspan="5">Erro ao conectar com o servidor.</td></tr>';
  }
});
