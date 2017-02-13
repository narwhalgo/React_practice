import React from 'react';
import ImageDetail from './image-detail';


const ImageList = (props) => {
  const validImages = props.images.filter(image => !image.is_album);

  const RenderedImages = validImages.map(image =>{
    return <ImageDetail image={image} key={image.title}/>
  });

  return (
    <ul className='media-list list-group'>
      {RenderedImages}
    </ul>

  );
};

export default ImageList;
