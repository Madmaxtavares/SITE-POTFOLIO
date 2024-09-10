// Pega os elementos do DOM

const openMenuIcon = document.getElementById('btn-menu');
const closeMenuIcon = document.getElementById('btn-fechar');
const menu = document.getElementById('menu-mobile');

// Função para abrir o menu

function openMenu() {
  menu.style.width = '70%';    // Mostra o menu
  openMenuIcon.style.display = 'none';  // Esconde o ícone de abrir
  closeMenuIcon.style.display = 'block'; // Mostra o ícone de fechar
}

// Função para fechar o menu

function closeMenu() {
  menu.style.width = '0';    // Esconde o menu
  openMenuIcon.style.display = 'block';  // Mostra o ícone de abrir
  closeMenuIcon.style.display = 'none'; // Esconde o ícone de fechar
}

// Adiciona os eventos de clique nos ícones

openMenuIcon.addEventListener('click', openMenu);
closeMenuIcon.addEventListener('click', closeMenu);
