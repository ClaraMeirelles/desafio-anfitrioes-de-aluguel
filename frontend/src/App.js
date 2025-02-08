import React, { useState } from 'react';
import Header from './components/Header/Header';
import { GlobalStyle } from './GlobalStyles';
import Home from './pages/Home/Home';
import Detalhes from './pages/Detalhes.js/Detalhes';


export default function App() {
  const [page, setPage] = useState("home")
  const [id, setId] = useState(0)
  const changePage = (selectedPage, selectedId) => {
    setPage(selectedPage)
    setId(selectedId)
  }
  console.log(page)
  return (
    <div>
      <GlobalStyle />
      <main>
        <Header changePage={changePage} page={page} />
        {page === "home" ? <Home changePage={changePage} /> : <Detalhes id={id} changePage={changePage} />}
      </main>
    </div>
  );
}


