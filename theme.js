function toggleTheme() {
  const htmlElement = document.getElementsByTagName('html')[0];
  htmlElement.classList.toggle('dark-mode');

  // Altera o ícone do botão de alternância de tema
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.classList.toggle('dark-mode');

  // Altera a imagem da logo de acordo com o tema
  const logo = document.getElementById('logo');
  if (htmlElement.classList.contains('dark-mode')) {
    logo.src = 'logo-light.png'; // Substitua 'logo-dark.png' pelo caminho da imagem para o tema dark
  } else {
    logo.src = 'logo-dark.png'; // Substitua 'logo-light.png' pelo caminho da imagem para o tema light
  }
}