// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const ligthbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 400,
});

const loaderEl = document.querySelector('.loader');
const galleryEl = document.querySelector('.gallery');
const btnEl = document.querySelector('.load-more-btn');

function showLoader() {
  loaderEl.classList.remove('ishidden');
}

function hideLoader() {
  loaderEl.classList.add('ishidden');
}

function createGallery(images) {
  const murkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
                <a class="gallery-link" href="${largeImageURL}">
                    <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
                    <div class="info">
                        <p><b>Likes:</b> ${likes}</p>
                        <p><b>Views:</b> ${views}</p>
                        <p><b>Comments:</b> ${comments}</p>
                        <p><b>Downloads:</b> ${downloads}</p>
                    </div>
                </a>
            </li>`
    )
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', murkup);
  ligthbox.refresh();
}

function clearGallery() {
  galleryEl.innerHTML = '';
}

function showLoadMoreButton() {
  btnEl.classList.remove('ishidden');
}

function hideLoadMoreButton() {
  btnEl.classList.add('ishidden');
}

export {
  showLoader,
  hideLoader,
  createGallery,
  clearGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
  btnEl,
  galleryEl,
};
