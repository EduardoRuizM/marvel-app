import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CharacterContext } from './CharacterContext';

import fav from './fav.png';
import favSel from './favSel.png';

const CharacterDetail = () => {
  const { id } = useParams();
  const { character, fetchCharacter, comicImages, comicYears, isInFavorites } = useContext(CharacterContext);

  useEffect(() => {
    fetchCharacter(id);
  }, []);

  return (
    <div>
      {character.map((c) => (
        <div key={c.id}>
          <div className="Detail">
            <Link to='/'><div className="DetailImg" style={{backgroundImage: `url(${c.thumbnail.path}.${c.thumbnail.extension})`}}>&nbsp;</div></Link>
            <div className="DetailInfo">
              <h2 className="DetailText">
                {c.name}
                <div><img src={ (isInFavorites(c)) ? fav : favSel} width="31" /></div>
              </h2>
              {c.description}
            </div>
          </div>
          <div className="DetailComics">
            <div className="Comics">
              <h2>COMICS</h2>
              {c.comics.items.sort((a, b) => comicYears[a.resourceURI] - comicYears[b.resourceURI]).slice(0, 20).map((comic) => (
                <div key={comic.resourceURI} className="ComicsDetail">
                  {comicImages[comic.resourceURI] && (
                    <img src={`${comicImages[comic.resourceURI].path}.${comicImages[comic.resourceURI].extension}`} alt={comic.name} />
                  )}
                  <div>{comic.name}</div>
                  <div className="ComicsYear">{comicYears[comic.resourceURI]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        ))}
      </div>
  );
}

export default CharacterDetail;
