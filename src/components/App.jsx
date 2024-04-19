import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";



class App extends Component{
  constructor(props) {
  super(props)
  this.state = {
    id: [],
    isLoading: false,
    error: '',
    currentPage: 1
  }  
  }
  async componentDidMount() {
    await this.getInitialData()
  }
  render() {
    return(
  <>
    <Searchbar />
   <ImageGallery> 
    <ImageGalleryItem />
    <Button />
   </ImageGallery>
   <Modal />
  </>
 
   ) 
  }
    
 
}


export default App;
