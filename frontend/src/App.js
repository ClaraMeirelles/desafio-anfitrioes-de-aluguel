import React from 'react';
import Header from './components/Header/Header';
import { GlobalStyle } from './GlobalStyles';
import Home from './pages/Home/Home';


export default function App() {

  return (
    <div>
      <GlobalStyle />
      <main>
        <Header />
        <Home />
      </main>
    </div>
  );
}


