import React from 'react';
import Header from './components/Header/Header';
import { GlobalStyle } from './GlobalStyles';
import Accommodation from './components/Accommodation/Accommodation';


export default function App() {

  return (
    <div>
      <GlobalStyle />
      <main>
        <Header />
        <Accommodation />
      </main>
    </div>
  );
}


