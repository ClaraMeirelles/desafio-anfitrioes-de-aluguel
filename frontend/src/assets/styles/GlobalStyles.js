import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    font-family: "Inter", 'Arial Narrow', sans-serif;
    display: flex;
    align-items: center;
    justify-items: center;
    box-sizing: border-box;
    max-width: 100vw;
    overflow-x: hidden;
}

a{
    color: #ff464f;
    margin: 16px;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
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