import React from 'react';
import Header from './components/Header/Header';
import { GlobalStyle } from './GlobalStyles';
import Home from './pages/Home/Home';
import Details from './pages/Detalhes.js/Details';
import { createBrowserRouter, RouterProvider } from 'react-router';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "/about",
    element: (
      <Details />
    ),
  },
]);

export default function App() {

  return (
    <div>
      <GlobalStyle />
      <main>
        <Header />
        <RouterProvider router={router} />
      </main>
    </div>
  );
}


