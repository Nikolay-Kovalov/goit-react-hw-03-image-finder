import { Modal } from "components/Modal/Modal"
import { ImageItem, Image } from "./ImageGalleryItem.styled"
import { Component } from "react"
import PropTypes from 'prop-types'


export class ImageGalleryItem extends Component {
 state = {
          isOpen: false,
 }
  
  toggleModal = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  }
  

   
  render() {
    const { isOpen } = this.state;
    const { image, bigImage } = this.props;
      return (
        <ImageItem>
            <Image src={image} alt="img" onClick={this.toggleModal}/>
          {isOpen && <Modal img={bigImage} onClose={this.toggleModal} />}
        </ImageItem>
    )
}   
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  bigImage: PropTypes.string.isRequired
}

