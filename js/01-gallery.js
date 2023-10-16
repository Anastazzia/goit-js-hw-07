import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgContainer = document.querySelector('.gallery');
const imgMarkup = createItemsCards(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', imgMarkup);

imgContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('gallery__image')) {
        event.preventDefault();
    };
    if (event.target.tagName === 'IMG') {

        const largeImgUrl = event.target.getAttribute('data-source')
        console.log('URL: ', largeImgUrl)

        const eventModalWindow = basicLightbox.create(`
        <img src="${largeImgUrl}" width="800" height="600">
        `);

        const visible = basicLightbox.visible();

        eventModalWindow.show(() => console.log('lightbox now visible'))
    };
});

function createItemsCards(imgCards) {
    return imgCards.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('');

};




