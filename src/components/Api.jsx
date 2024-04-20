import axios from "axios";

const API_KEY = '42470920-96122d8b93373a33cc6d0556a';
export const fetchPhotos = async (query, page) => {
  
    const response = await axios.get(
  `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
); 
return {
    images: response.data.hits, 
    total: response.data.totalHits,
};
};
const Api = { fetchPhotos };

export default Api;