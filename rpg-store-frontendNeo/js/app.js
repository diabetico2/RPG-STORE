const app = document.getElementById('app');

async function loadPage(page) {
  const response = await fetch(`templates/${page}.html`);
  const content = await response.text();
  app.innerHTML = content;

  // Dynamically load the respective JS for the page
  const script = document.createElement('script');
  script.src = `js/${page}.js`;
  script.defer = true;
  document.body.appendChild(script);
}

function init() {
  // Default page
  loadPage('login');

  // Handle routing via hash
  window.addEventListener('hashchange', () => {
    const page = location.hash.replace('#', '');
    loadPage(page || 'login');
  });
}

init();
