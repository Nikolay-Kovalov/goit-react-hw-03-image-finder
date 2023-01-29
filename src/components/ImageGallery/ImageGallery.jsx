import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { GallaryList } from "./ImageGallery.styled"

export const ImageGallery = ({ images, openModal}) => {
    return (
<GallaryList>
{images.map(image => <ImageGalleryItem openModal={openModal} key={image.id} image={image.webformatURL}></ImageGalleryItem>)}
</GallaryList>)}

