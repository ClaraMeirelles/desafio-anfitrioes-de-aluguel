import React from 'react';
import Header from './components/Header/Header';
import { GlobalStyle } from './GlobalStyles';
import Accommodation from './components/Accommodation/Accommodation';


export default function App() {
  const properties = [
    {
      id: '1',
      nome: 'Apartamento Beira-Mar',
      imagem: 'https://picsum.photos/300/200',
      precoNoite: 350,
      localizacao: 'Florianópolis, SC'
    },
    {
      id: '2',
      nome: 'Chalé na Serra',
      imagem: 'https://picsum.photos/300/200',
      precoNoite: 500,
      localizacao: 'Campos do Jordão, SP'
    },
  ]
  return (
    <div>
      <GlobalStyle />
      <main>
        <Header />
        <Accommodation properties={properties} />
      </main>
    </div>
  );
}


