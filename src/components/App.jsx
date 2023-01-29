import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Spinner } from "./Loader/Loader";
import { LoadButton } from "./Button/Button";
import { ModalWindow } from "./Modal/Modal";


export class App extends Component {

    state = {
        page: 1,
        images: [],
        isLoading: false,
        error: null,
        inputValue: ' ',
        showModal: false,
    }

    toggleModal = () => {
        this.setState(({showModal}) => ({
            showModal: !showModal
        }))
    }

    handleFormSubmit = inputValue => {
    this.setState({inputValue})
    }

 

    loadMore = () => {
        this.setState(prevState => ({ page: prevState.page + 1}))
    }

    componentDidUpdate(_, prevState) {
        if (prevState.inputValue !== this.state.inputValue || prevState.page !== this.state.page)
            this.setState({ isLoading: true});
setTimeout(() => {
    fetch(`https://pixabay.com/api/?q=${this.state.inputValue}&page=${this.state.page}&key=31924399-5ed70afbd2fbb0ac4f5aecf83&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => {
            if (res.ok) { return res.json() }
            return Promise.reject(new Error('Такого изображения нет'))
        })
        .then(data => this.setState(prevState => ({ images: [...prevState.images, ...data.hits], page: prevState.page + 1 }))
  
    .catch(error => this.setState({error}))
    .finally(() => this.setState({ isLoading: false })));
}, 2000);
        
    }

    render() {
        
        return (
            <>
                {this.state.showModal && <ModalWindow onClose={this.toggleModal} largeImage={this.findPic()} />}
                <Searchbar onSubmit={this.handleFormSubmit} />
                {this.state.isLoading &&  <Spinner/>}
                {this.state.error && <h1>{this.state.error.message}</h1>}
                <ImageGallery images={this.state.images} openModal={this.toggleModal}/>
                {this.state.images.length > 0 && <LoadButton load={this.loadMore}></LoadButton>}
            </>
        )
    }
     
};


