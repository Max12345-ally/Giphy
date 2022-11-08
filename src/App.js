import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults.js';
import { useState, useEffect } from 'react';


function App() {
  const [searchString, setSearchString] = useState('minions');


  useEffect(() => {
    getImages();
  }, []);

  const [images, setImages] = useState([]);
  
  function handleChange(event) {
    setSearchString(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    getImages();
  }
  
  const searchOptions = {
    key: process.env.REACT_APP_GIPHY_KEY,
    limit: 25,
    //offset: 0,
    rating: 'G',
    api: 'https://api.giphy.com/v1/gifs',
    endpoint: '/search'
  };

  function getImages() {
    const searchString = 'minions';
    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString} &limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;
    //console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setImages(response.data);
      })
      .catch(console.error);
  }
  return(
    <>
    <SearchForm
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    searchString={searchString}
/>

    <SearchResults images={images} />
    </>
  )
  
}

export default App;
