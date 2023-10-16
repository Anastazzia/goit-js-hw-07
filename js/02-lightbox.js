import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')
const imgMarkup = createImgCards(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);

const imgLiLinks = document.querySelectorAll('.gallery__item');

const lightbox = new SimpleLightbox('.gallery a', {
    /* options */
    captions: true,
    captionPosition: 'bottom',
    captionDelay: 250,
});

function createImgCards(imgCards) {
    return imgCards.map(({
        preview, original, description
    }) => {
        return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`

    }).join('');
};

