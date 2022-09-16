const openMenu = document.querySelector('.hamburger');
const modalMenu = document.querySelector('.nav_items');

openMenu.addEventListener('click', () => {
  modalMenu.style.display = 'block';
});

const closeMenu = document.querySelector('.close');
closeMenu.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

const closeProgram = document.querySelector('.navprogram');
closeProgram.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

const closeSpeakers = document.querySelector('.navspeakers');
closeSpeakers.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

const closeAbout = document.querySelector('.navabout');
closeAbout.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

const speakersInfo = [
  {
    image: './src/images/speakers/speaker_01.png',
    name: 'Yochai Blenker',
    position: 'President of Artisanal Cheese Producers',
    description: 'President of the association of artisanal cheese producers from 2019 until now.',
  },
  {
    image: './src/images/speakers/speaker_02.png',
    name: 'Ricardo Lara',
    position: 'Owner of El Rosal dairy company',
    description: 'El Rosal is an artisan company dedicated to the production of matured cheeses.',
  },
  {
    image: './src/images/speakers/speaker_03.png',
    name: 'Andrea Martinez',
    position: 'Head of the SENA dairy department',
    description: 'Teacher and writer with extensive experience in cheese making.',
  },
  {
    image: './src/images/speakers/speaker_04.png',
    name: 'Laura Díaz',
    position: 'President of the Small Cheese Producers Association.',
    description: 'President of the small cheese producers association from 2020 to date.',
  },
  {
    image: './src/images/speakers/speaker_05.png',
    name: 'Shasha Atencio',
    position: 'Writer.',
    description: 'Writer of the book "Sustainable development of the dairy industry".',
  },
  {
    image: './src/images/speakers/speaker_06.png',
    name: 'Roberto Crespo',
    position: 'Entrepeneur.',
    description: 'Leader in the manufacture of small-scale artisanal cheeses.',
  },
];

for (let i = 0; i < speakersInfo.length; i += 1) {
  const speak = document.createElement('div');
  speak.classList.add('speakers_cont');

  const speakImg = document.createElement('div');
  speakImg.classList.add('speakers_img');
  speak.appendChild(speakImg);
  const image = document.createElement('img');
  image.src = speakersInfo[i].image;
  image.alt = 'image';
  speakImg.appendChild(image);

  const speakData = document.createElement('div');
  speakData.classList.add('speakers_data');
  speak.appendChild(speakData);

  const speakName = document.createElement('h2');
  speakName.classList.add('speakers_name');
  speakName.textContent = speakersInfo[i].name;
  speakData.appendChild(speakName);

  const speakPos = document.createElement('p');
  speakPos.classList.add('speakers_pos');
  speakPos.textContent = speakersInfo[i].position;
  speakData.appendChild(speakPos);

  const speakDesc = document.createElement('p');
  speakDesc.classList.add('speakers_desc');
  speakDesc.textContent = speakersInfo[i].description;
  speakData.appendChild(speakDesc);

  document.querySelector('.speakers_container').appendChild(speak);
}