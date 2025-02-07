import React from 'react';
import Header from './components/Header/Header';
import { GlobalStyle } from './GlobalStyles';


export default function App() {
  return (
    <div>
      <GlobalStyle />
      <main>
        <Header />
      </main>
    </div>
  );
}


