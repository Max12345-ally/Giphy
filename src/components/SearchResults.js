import React from 'react';

const SearchResults = ({ images }) => {
  // return early if there are no images
  if (!images.length) {
    return <h2>No Images Found!</h2>
  }

  return (
    {images.map(image => (
      <div key={image.id} className="gif">
        <img src={image.images.downsized_large.url} />
      </div>
    ))}
    
  )
}

export default SearchResults;
