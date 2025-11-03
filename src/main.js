// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import {
  clearGallery,
  showLoader,
  hideLoader,
  createGallery,
  btnEl,
  showLoadMoreButton,
  hideLoadMoreButton,
  galleryEl,
} from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';

const formEL = document.querySelector('.form');

formEL.addEventListener('submit', onSubmit);
btnEl.addEventListener('click', onLoadMore);

let curretPage = 1;
let searchQuery = '';
let totalPage = 0;

async function onSubmit(ev) {
  ev.preventDefault();
  searchQuery = ev.target.elements['search-text'].value.trim();
  if (searchQuery === '') {
    iziToast.error({
      position: 'topRight',
      message: 'Please enter a search query!',
    });
    return;
  }
  hideLoadMoreButton();
  clearGallery();
  showLoader();

  curretPage = 1;

  try {
    const data = await getImagesByQuery(searchQuery, curretPage);
    if (data.hits.length === 0) {
      return iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }
    createGallery(data.hits);

    //const firstEl = galleryEl.firstElementChild.getBoundingClientRect().height;
    //smoothScroll(firstEl);

    if (data.totalHits > 15) {
      showLoadMoreButton();
      totalPage = Math.ceil(data.totalHits / 15);
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

    formEL.reset();
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topRight' });
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  curretPage += 1;
  showLoader();
  hideLoadMoreButton();
  try {
    const data = await getImagesByQuery(searchQuery, curretPage);
    if (totalPage === curretPage) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      createGallery(data.hits);

      const firstEl =
        galleryEl.firstElementChild.getBoundingClientRect().height;
      smoothScroll(firstEl);
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topRight' });
  } finally {
    hideLoader();
  }
}

function smoothScroll(elem) {
  window.scrollBy({
    top: elem * 2,
    behavior: 'smooth',
  });
}
