// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

let modal=new SimpleLightbox(".gallery a");

const loaderEl=document.querySelector(".loader");
const galleryEl=document.querySelector(".gallery");

function showLoader(){
    loaderEl.classList.remove("ishidden");
};

function hideLoader(){
     loaderEl.classList.add("ishidden");
};

function createGallery(images){
    const murkup=images.map(
        ({ previewURL, largeImageURL, tags, likes, views, comments, downloads }) => 
            `<li class="gallery-item">
                <a class="gallery-link" href="${largeImageURL}">
                    <img class="gallery-image" src="${previewURL}" alt="${tags}" />
                    <div class="info">
                        <p><b>Likes:</b> ${likes}</p>
                        <p><b>Views:</b> ${views}</p>
                        <p><b>Comments:</b> ${comments}</p>
                        <p><b>Downloads:</b> ${downloads}</p>
                    </div>
                </a>
            </li>`)
    .join("");
    galleryEl.insertAdjacentHTML("beforeend", murkup);
    modal.refresh();
};

function clearGallery(){
    galleryEl.innerHTML="";
};

export {showLoader, hideLoader, createGallery, clearGallery};
