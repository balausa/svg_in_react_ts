import React, { useState } from 'react';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { SvgGenerator } from './pages/SvgGenerator/SvgGenerator';
import { randomInteger } from './utils/randomInteger';
function App() {
  const [random, setRandom] = useState<number>(randomInteger(0, 2));

  return (
    <>
      <Header setRandom={setRandom} />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/svg" element={<SvgGenerator random={random} />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;