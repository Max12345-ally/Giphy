import React from 'react';

const SearchResults = ({ images }) => {
    if (!images.length) {
      return <h2>No Images Found!</h2>
    }
  
    return (
      <div className="gallery">
        {images.map(image => (
          <div key={image.id} className="gif">
            <img src={image.url} />
          </div>
        ))}
      </div>
    )
  }

export default SearchResults;
