import React, { useState } from 'react';
import Header from './components/Header';
import { GlobalStyle } from './assets/styles/GlobalStyles';
import Home from './pages/Home';
import Detalhes from './pages/Detalhes'


export default function App() {
  const [page, setPage] = useState("home")
  const [id, setId] = useState(null)
  const changePage = (selectedPage, selectedId) => {
    setPage(selectedPage)
    setId(selectedId)
  }
  return (
    <main>
      <GlobalStyle />
      <Header changePage={changePage} page={page} />
      {page === "home" ? <Home changePage={changePage} /> : <Detalhes id={id} />}
    </main>
  );
}


