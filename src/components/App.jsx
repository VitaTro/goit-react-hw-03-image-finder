import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";


const API_KEY = '42470920-96122d8b93373a33cc6d0556a';
const fetchPhotos = async (query, page) => {
  try {
    const response = await axios.get(
  `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
); 
return response.data;
  } catch (error) {
    return { error: error.message };
  }

};


class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: "",
    error: null,
    actualPage: 1,
    lastPage: 1,
    modalOpen: false,
  }  

  modalInfo = {
    modalPhotoURL: null,
    modalAlt: null,
  };

  updateQuery = ({ query }) => {
    this.setState({  query: query });
  };

  // вікно модальне
  openModal = (evt) => {
this.setState({
  modalOpen: true,
});

this.modalInfo = {
  modalPhotoURL: evt.target.dataset['source'],
  modalAlt: evt.target.alt,
};
  }; 

  // якщо немає картинок, то вікно не відкриється
  closeModal = (evt) => {
    if(evt.target.nodeName !== "IMG") {
      this.setState({
        modalOpen: false,
      });
    }
  };
// завантаження нових фото 
  downloadNewImages = (fetchedImages) => {
const downloadMapImages = fetchedImages.map((image) => ({
  id: image.id,
      small: image.webformatURL,
			large: image.largeImageURL,
			alt: image.tags,
}));
   return downloadMapImages;
  };

// притиск на наступну сторінку
  nextPage = () => {
let { actualPage } = this.state;
actualPage++;
this.setState({ actualPage: actualPage });
  }
  // асинхронічна функція
  // приймає значення попередній пропс і попередній стейт
async componentDidUpdate( prevProps, prevState) {
  // якщо попередній стейт не такий як зараз, то запит стає актуальним
  if( prevState.query !== this.state.query) {
    
    // актуалізується лоодінг 
  
  // якщо виконуються всі задачі 
try {
  // Виконується запит до API для отримання зображень на основі оновленого запиту

  const fetchedData = await fetchPhotos( this.state.query, 1);
  // йде завантаження всіх картинок 
  const mapImages = this.mapImages(fetchedData.hits);
  // на сторінці має бути по 12 картинок, 
  // тому дані обчислюються, скільки картинок буде на останній сторінці
  const lastPage = Math.ceil(fetchedData.totalHits / 12 );
// обчислюються картинки, актуальна сторінка і останнч сторінка
  this.setState({ images: mapImages, actualPage: 1, lastPage: lastPage });
// скролл
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // якщо ж виникає помилка, то з'являється комунікат
} catch (error) {
    this.setState({ error });
  }
  }


// якщо змінилася актуальна сторінка (actualPage) у поточному стані порівняно з попереднім станом, 
// і чи запит залишається незмінним
if( 

  prevState.actualPage !== this.state.actualPage &&
  prevState.query === this.state.query &&
  this.state.actualPage !== 1
) {
try {
 // запит встановлюєтья в поточну сторінку
 const fetchedData = await fetchPhotos( this.state.query, this.state.actualPage);
 // йде завантаження всіх картинок з поточного стану
 const mapImages =  this.mapImages(fetchedData.hits);
// картинки нові об'єднуюються зі старими картинками
 const concatImages = this.state.images.concat(mapImages);
//  йде завантаження нових картинок
 this.setState({ images: concatImages });
} catch(error) {
   // якщо ж виникає помилка, то з'являється комунікат
this.setState({ error });
}
}
}
  render() {
    const { images, isLoading, actualPage, lastPage, modalOpen, query } = this.state;
    
    return(
  <>
  <Modal />
    <Searchbar onSubmit={this.updateQuery} />
   <ImageGallery
   page = { actualPage }
   images = { images }
   clickHandler = { this.openModal }
   > 
  
    <Button onClick={ this.nextPage }/>
   </ImageGallery>
   
  </>
 
   ) 
  }
}


export default App;
