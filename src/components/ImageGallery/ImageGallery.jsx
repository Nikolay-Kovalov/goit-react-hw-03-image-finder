import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Gallery } from "./ImageGallery.styled"
import PropTypes from 'prop-types'

export const ImageGallery = ({ Images }) => {
    return (
          <Gallery>
            {Images.map(image => (
                <ImageGalleryItem key={image.id} image={image.webformatURL
                } bigImage={image.largeImageURL} /> 
            ))}
</Gallery> 
   )
}

ImageGallery.propTypes = {
  Images: PropTypes.arrayOf(PropTypes.object),
}