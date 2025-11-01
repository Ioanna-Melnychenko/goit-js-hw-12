import axios from "axios";
const API_KEY="53036317-ecc3b65bfc32e98f0ebbd349e";
axios.defaults.baseURL="https://pixabay.com/api/";
export function getImagesByQuery(query){
    const options={key: API_KEY, q:query, image_type: "photo", orientation: "horizontal", safesearch: true};
    return axios("", {params:options}).then(({data})=>data);
}