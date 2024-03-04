import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CharacterContext } from './CharacterContext';
import { NumericFormat } from 'react-number-format';

import fav from './fav.png';
import favSel from './favSel.png';
import search from './search.png';

const CharacterList = () => {
  const { characters, countCharacters, searchTerm, changeSearch, addToFavorites, isInFavorites } = useContext(CharacterContext);

  return (
    <div>
      <div className="cards SearchBand">
        <img src={search} alt="Search" />
        <input id="seach" maxLength="25" value={searchTerm} onChange={changeSearch} className="SearchInput" />
      </div>
      <div className="cards SearchResults">
        <NumericFormat
          value={countCharacters()}
          displayType={"text"}
          thousandSeparator={true}
         /> RESULTS
      </div>
      <div className="CardsCard">
        {characters.map((character) => (
          <div key={character.id} className="card" style={{backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})`}}>
            <Link to={`/character/${character.id}`}><div className="CardsSel"></div></Link>
            <div className="CardsBottom"></div>
            <div className="CardsInfo"></div>
            <div className="CardsText">
              {character.name.substring(0, 10) + ((character.name.length > 10) ? '…' : '')}
              <div><img src={ (isInFavorites(character)) ? fav : favSel} width="18" className="CardsFav" onClick={() => addToFavorites(character)} /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
