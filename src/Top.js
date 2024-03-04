import React, { useContext } from 'react';
import { CharacterContext } from './CharacterContext';
import { NumericFormat } from 'react-number-format';

import fav from './fav.png';
import logo from './logo.svg';

const Top = () => {
  const { countFavorites, favoritesShow, favoritesHide } = useContext(CharacterContext);

  return (
    <div>
      <div className="TopHeader">
        <img src={logo} alt="Logo" className="TopLogo" onClick={favoritesHide} />
        <div className="TopFav" onClick={favoritesShow}>
          <img src={fav} alt="Favorite" />
          <div className="FavCount">
            <NumericFormat
              value={countFavorites()}
              displayType={"text"}
              thousandSeparator={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;

