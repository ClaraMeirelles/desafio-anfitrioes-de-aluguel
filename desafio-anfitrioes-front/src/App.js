import React from 'react';
import Header from './components/Header/Header';
import { GlobalStyle } from './GlobalStyles';
import Card from './components/Card/Card';


export default function App() {
  return (
    <div>
      <GlobalStyle />
      <main>
        <Header />
        <Card />
      </main>
    </div>
  );
}


