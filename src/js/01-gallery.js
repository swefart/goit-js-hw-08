import { galleryItems } from './gallery-items.js';
// Change code below this line


import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.css";

const gallery = document.querySelector('.gallery')
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

function createGalleryMarkup(galleryItems) {
   return galleryItems.map(function ({ preview, description, original }, index) {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
    }).join('')
}

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});
