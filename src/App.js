import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CharacterProvider } from './CharacterContext';
import Top from './Top';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

function App() {
  return (
    <Router>
      <CharacterProvider>
	<Top/>
	<Routes>
          <Route path="/" element={<CharacterList/>} />
          <Route path="/character/:id" element={<CharacterDetail/>} />
	</Routes>
      </CharacterProvider>
    </Router>
  );
}

export default App;
