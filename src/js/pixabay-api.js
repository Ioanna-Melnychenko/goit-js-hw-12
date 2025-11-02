import axios from "axios";
const API_KEY="53036317-ecc3b65bfc32e98f0ebbd349e";
axios.defaults.baseURL="https://pixabay.com/api/";
export async function getImagesByQuery(query, page){
    const options={key: API_KEY, q:query, image_type: "photo", orientation: "horizontal", safesearch: true, page: page, per_page: 15};
    return await axios("", {params:options}).then(({data})=>data);
}