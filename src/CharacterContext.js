import React, { createContext, useState, useEffect } from 'react';

const CharacterContext = createContext();

const API_BASE_URL = 'https://gateway.marvel.com:443/v1/public';
const API_KEY = 'ba3eb4655fe528280f9570fc92a5e679';

const CharacterProvider = ({ children }) => {
  const [charactersAll, setCharactersAll] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState([]);
  const [comicImages, setComicImages] = useState({});
  const [comicYears, setComicYears] = useState({});
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/characters?apikey=${API_KEY}&limit=50`);
      const chars = await response.json();
      if (chars.code == 200) {
        setCharactersAll(chars.data.results);
        setCharacters(chars.data.results);
      }
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  const fetchCharacter = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/characters/${id}?apikey=${API_KEY}`);
      const chars = await response.json();
      if (chars.code == 200) {
        setCharacter(chars.data.results);
        fetchComicImages(chars.data.results[0].comics.items)
      }
    } catch (error) {
      console.error('Error fetching character:', error);
    }
  };

  const countCharacters = () => {
    return characters.length;
  };

  const fetchComicImages = async (comics) => {
    const images = {};
    const years = {};
    for (const comic of comics) {
      try {
        const response = await fetch(`${comic.resourceURI}?apikey=${API_KEY}`);
        const cimage = await response.json();
        const comicImage = cimage.data.results[0].thumbnail;
        images[comic.resourceURI] = comicImage;
        years[comic.resourceURI] = cimage.data.results[0].dates[0].date.substring(0, 4);
      } catch (error) {
        console.error('Error fetching comic image:', error);
      }
    }
    setComicImages(images);
    setComicYears(years);
  };

  const changeSearch = (event) => {
    setSearchTerm(event.target.value);
    updateSearch(event.target.value);
  };

  const updateSearch = (str) => {
    str = (str || '').trim().toLowerCase();
    let c = charactersAll.filter((c) => str === '' || (str !== '' && c.name.toLowerCase().includes(str)));
    if(showFavorites)
      c = c.filter((f) => favorites.includes(f));

    setCharacters(c);
  };

  const favoritesShow = () => {
    setShowFavorites(true);
    setCharacters(charactersAll.filter((c) => favorites.includes(c)));
  }

  const favoritesHide = () => {
    setShowFavorites(false);
    setCharacters(charactersAll);
  }

  const countFavorites = () => {
    return favorites.length;
  };

  const addToFavorites = (character) => {
    if (isInFavorites(character)) {

      setFavorites([...favorites.filter((f) => f.id !== character.id)]);
      if(showFavorites)
        setCharacters(characters.filter((f) => f.id !== character.id));

    } else
      setFavorites([...favorites, character]);
  };

  const isInFavorites = (character) => {
    return favorites.includes(character);
  };

  return (
    <CharacterContext.Provider value={{ characters, countCharacters, character, fetchCharacter, comicImages, comicYears, searchTerm, changeSearch, favorites, countFavorites, addToFavorites, isInFavorites, favoritesShow, favoritesHide }}>
      {children}
    </CharacterContext.Provider>
  );
};

export { CharacterContext, CharacterProvider };
