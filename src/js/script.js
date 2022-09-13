const hamburger = document.querySelector('.hamburger');
const modalMenu = document.querySelector('.nav_items');
hamburger.addEventListener('click', () => {
  modalMenu.style.left = 0;
});

const closeMenu = document.querySelector('.close');
closeMenu.addEventListener('click', () => {
  modalMenu.style.left = '-100%';
});

const closeProgram = document.querySelector('.navprogram');
closeProgram.addEventListener('click', () => {
  modalMenu.style.left = '-100%';
});

const closeSpeakers = document.querySelector('.navspeakers');
closeSpeakers.addEventListener('click', () => {
  modalMenu.style.left = '-100%';
});

const closeAbout = document.querySelector('.navabout');
closeAbout.addEventListener('click', () => {
  modalMenu.style.left = '-100%';
});