import React, { useState } from 'react';
import Header from './components/Header/Header';
import { GlobalStyle } from './GlobalStyles';
import Home from './pages/Home/Home';


export default function App() {
  const [page, setPage] = useState('home')
  const changePage = (selectedPage) => {
    setPage(selectedPage)
  }
  return (
    <div>
      <GlobalStyle />
      <main>
        <Header />
        <Home changePage={changePage} />
      </main>
    </div>
  );
}


