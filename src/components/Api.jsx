import React from "react";

   // код виконує запит до Pixabay для отримання фотографій за заданим ім’ям та сторінкою, 
// обробляє можливі помилки та виводить повідомлення про помилку в консоль або для користувача

// const fetchPhotos = async (name, page) => {
//     try {
// //         // key - твій унікальний код доступу API.
// //         // q - термін, який хочемо знайти (в даному випадку це ті малюнки, які шукатиме користувач) 
// //         // image_type - тип малюнку. тут хочемо тільки фото (photo)
// //         // orientation - орієнтація малюнку (horizontal)
// //         // safesearch - пошук малюнків SFW (Safe For Work). (true)
//        const response = await axios(`https://pixabay.com/api/?key=${APIKEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`);
//     const photos = await response.data;
//     checkResults(photos);
//   } catch (error) {
//     Notiflix.Notify.failure(error.message);
//   }
// };

const APIKEY = '42470920-96122d8b93373a33cc6d0556a';

const fetchPhotos = async (query, page) => {
    const response = await axios(`https://pixabay.com/api/?q=${query}&page=1key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`);
    const photos = await response.data;
    checkResults(photos);
  } catch (error) {
   console.log('error');
  }
