import { getImages } from "api";
import { Component } from "react";
import { LoadMoreButton } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Layout } from "./Layout/Layout";
import { Loader } from "./Loader/Loader";
import { Searchbar } from "./Searchbar/Searchbar";
import { Toaster, toast } from "react-hot-toast";

export class App extends Component {

  state = {
    images: [], 
    page: 1,  
    searchQuerry: '',
    isLoading: false,
    error: null,
    totalHits: ''
  
  }
  
  setToastAlert = () => {
       const notify = () => toast('Введите пожалуйста Ваш запрос', {  position: 'top-right', style: {backgroundColor: 'red', color: 'white'}});
      return notify()
  }
  setSearchQuerry = (querry) => {
 
    this.setState({ searchQuerry: querry, images: [], page: 1, error: null })
        
    
  }

  loadMore = () => {
    this.fetchImage(this.state.searchQuerry, this.state.page)
  }

  fetchImage = async (querry, page) => {
   
     
    this.setState({ isLoading: true })
    
    try {
      const image = await getImages(querry, page)
      return this.setState(prevState => ({ images: [...prevState.images, ...image.data.hits], page: prevState.page + 1, totalHits: image.data.totalHits }))
    }
    catch (error) {
      this.setState({ error: 'Что-то пошло не так. Перезагрузите пожалуйста страницу!'})
    }
    finally { this.setState({ isLoading: false }) }
    
  }

  componentDidUpdate(_, prevState) {
    if (prevState.searchQuerry !== this.state.searchQuerry) {
      this.fetchImage(this.state.searchQuerry, this.state.page)
    }

      }
  
  render() {
      const{searchQuerry, images, isLoading,error,totalHits}=this.state
    return (

      <Layout>
        <Searchbar
        onSubmit = {this.setSearchQuerry}
        />
        {error && <p style={{fontSize: 24, color: 'red', textAlign: 'center'}}>{this.state.error}</p>}
        {searchQuerry && <ImageGallery
        Images={images}
        />}
        {images.length > 0 && images.length < totalHits && <LoadMoreButton text="Load more" onClickButton={this.loadMore} />}
        {isLoading && <Loader />}
        {images.length === totalHits && <p style={{fontSize: 36, textAlign: 'center'}}>Это были все фотографии по Вашему запросу</p>}
    <Toaster autoClose={3000} />
      </Layout>
    )
  }
}
