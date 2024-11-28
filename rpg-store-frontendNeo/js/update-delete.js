document.addEventListener('DOMContentLoaded', async function () {
    const itemContainer = document.getElementById('itemContainer');
  
    try {
      const response = await fetch('http://localhost:3000/stock');
      if (response.ok) {
        const items = await response.json();
        itemContainer.innerHTML = '';
  
        if (items.length === 0) {
          itemContainer.innerHTML = '<tr><td colspan="7">Nenhum item encontrado.</td></tr>';
        } else {
          items.forEach((item) => {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${item.id}</td>
              <td><input type="text" value="${item.name}" class="edit-name"></td>
              <td><input type="text" value="${item.category}" class="edit-category"></td>
              <td><input type="number" value="${item.quantity}" class="edit-quantity"></td>
              <td><input type="text" value="${item.type}" class="edit-type"></td>
              <td><input type="text" value="${item.line || ''}" class="edit-line"></td>
              <td>
                <button class="action-button update-button" data-id="${item.id}">Atualizar</button>
                <button class="action-button delete-button" data-id="${item.id}">Excluir</button>
              </td>
            `;
            itemContainer.appendChild(row);
          });
  
          document.querySelectorAll('.update-button').forEach((button) =>
            button.addEventListener('click', async (e) => {
              const id = e.target.getAttribute('data-id');
              const row = e.target.closest('tr');
              const updatedItem = {
                name: row.querySelector('.edit-name').value,
                category: row.querySelector('.edit-category').value,
                quantity: parseInt(row.querySelector('.edit-quantity').value, 10),
                type: row.querySelector('.edit-type').value,
                line: row.querySelector('.edit-line').value,
              };
  
              try {
                const updateResponse = await fetch(`http://localhost:3000/stock/${id}`, {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(updatedItem),
                });
  
                if (updateResponse.ok) {
                  alert('Item atualizado com sucesso!');
                } else {
                  alert('Erro ao atualizar o item.');
                }
              } catch (error) {
                console.error('Erro ao atualizar:', error);
                alert('Erro ao conectar ao servidor.');
              }
            })
          );
  
          document.querySelectorAll('.delete-button').forEach((button) =>
            button.addEventListener('click', async (e) => {
              const id = e.target.getAttribute('data-id');
  
              if (confirm('Tem certeza que deseja excluir este item?')) {
                try {
                  const deleteResponse = await fetch(`http://localhost:3000/stock/${id}`, {
                    method: 'DELETE',
                  });
  
                  if (deleteResponse.ok) {
                    alert('Item excluído com sucesso!');
                    row.remove();
                  } else {
                    alert('Erro ao excluir o item.');
                  }
                } catch (error) {
                  console.error('Erro ao excluir:', error);
                }
              }
            })
          );
        }
      } else {
        itemContainer.innerHTML = `<tr><td colspan="7">Erro ao carregar os itens do estoque.</td></tr>`;
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
      itemContainer.innerHTML = '<tr><td colspan="7">Erro ao conectar ao servidor.</td></tr>';
    }
  });
  