import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/ Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="community-dragon-downloader/*">
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
