import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({image, openModal}) => {
    return (
      
<GalleryItem onClick={openModal}>
  <GalleryImage src={image} alt="" />
</GalleryItem>  
    )
}
