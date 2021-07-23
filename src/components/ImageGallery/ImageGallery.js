import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

//Styles
import './ImageGallery.css';

const CustomImageGallery = ({ images }) => {
    const imageList = images?.map(image => {
        return {
            original: image,
            thumbnail: image
        }
    })
    return (
        <div>
            <ImageGallery items={imageList} showBullets showThumbnails={false} />
        </div>
    )
}

export default CustomImageGallery;
