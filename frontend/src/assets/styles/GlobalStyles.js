import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    font-family: "Inter", 'Arial Narrow', sans-serif;
    margin: 0;
    padding: 0;
}
body{
    min-height: 100vh;
}

button{
    text-align: center;
    background: none;
    border: none;
    color: #ff464f;
    text-decoration: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
        color: #8f1d22;
        transition: color 0.2s ease-in-out;
    }
    &:focus-visible {
      outline: 2px solid #ff464f;
      border-radius: 4px;
    }
}
`

/**
 cores do documento
 laranja: #ff8a3b
 vermelho: #ff464f
 amarelo: #ffc232
 preto: #001736
 cinza: #9e9e9e
 *  */ 