// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import {clearGallery, showLoader, hideLoader, createGallery} from "./js/render-functions";
import {getImagesByQuery} from "./js/pixabay-api";

const formEL = document.querySelector(".form");

formEL.addEventListener("submit", onSubmit);
 function onSubmit(ev){
    ev.preventDefault();
    const searchQuery=ev.target.elements["search-text"].value.trim();
    if(searchQuery===""){
        iziToast.error({
            position: "topRight",
            message: 'Please enter a search query!',
        });
        return;
    };
    clearGallery();
    showLoader();
    getImagesByQuery(searchQuery).then(data=>{
        if(data.hits.length===0){
          return iziToast.error({message: "Sorry, there are no images matching your search query. Please try again!", position: "topRight"});
    } else {
        createGallery(data.hits);
        formEL.reset();
    }}).catch(error=>{iziToast.error({message: error.message, position:"topRight"})}).finally(()=>{hideLoader()});
 };


//