function toggleTheme() {
  const htmlElement = document.getElementsByTagName('html')[0];
  htmlElement.classList.toggle('dark-mode');

  // Altera o ícone do botão de mudar o tema
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.classList.toggle('dark-mode');

  // Altera a imagem da logo de acordo com o tema
  const logo = document.getElementById('logo');
  if (htmlElement.classList.contains('dark-mode')) {
    logo.src = '/IMG/logo-light.png'; 
  } else {
    logo.src = '/IMG/logo-dark.png'; 
  }
}