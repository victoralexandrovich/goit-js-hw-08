const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryList = document.querySelector('.gallery');

const markup = images
  .map(
    image => `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.original}">
          <img
            class="gallery-image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
          />
        </a>
      </li>
    `
  )
  .join('');

galleryList.insertAdjacentHTML('beforeend', markup);

let currentIndex = 0;
let lightboxInstance = null;

function getModalMarkup(index) {
  const image = images[index];

  return `
    <div class="lightbox-content">
      <button type="button" class="lightbox-arrow lightbox-arrow-prev">‹</button>
      <div class="lightbox-counter">${index + 1}/${images.length}</div>
      <img src="${image.original}" alt="${image.description}" class="lightbox-image" />
      <button type="button" class="lightbox-arrow lightbox-arrow-next">›</button>
    </div>
  `;
}

function openLightbox(index) {
  currentIndex = index;

  lightboxInstance = basicLightbox.create(getModalMarkup(currentIndex), {
    onShow: instance => {
      const element = instance.element();
      element
        .querySelector('.lightbox-arrow-prev')
        .addEventListener('click', showPrevImage);
      element
        .querySelector('.lightbox-arrow-next')
        .addEventListener('click', showNextImage);

      window.addEventListener('keydown', onKeyPress);
    },
    onClose: () => {
      window.removeEventListener('keydown', onKeyPress);
      lightboxInstance = null;
    },
  });

  lightboxInstance.show();
}

function updateLightboxContent() {
  const element = lightboxInstance.element();
  element.innerHTML = getModalMarkup(currentIndex);

  element
    .querySelector('.lightbox-arrow-prev')
    .addEventListener('click', showPrevImage);
  element
    .querySelector('.lightbox-arrow-next')
    .addEventListener('click', showNextImage);
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightboxContent();
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightboxContent();
}

function onKeyPress(event) {
  if (event.key === 'Escape') {
    lightboxInstance.close();
  }

  if (event.key === 'ArrowLeft') {
    showPrevImage();
  }

  if (event.key === 'ArrowRight') {
    showNextImage();
  }
}

galleryList.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const clickedSrc = event.target.getAttribute('data-source');
  const index = images.findIndex(image => image.original === clickedSrc);

  openLightbox(index);
}
