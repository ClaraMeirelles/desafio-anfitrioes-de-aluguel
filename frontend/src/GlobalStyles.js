import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Raleway+Dots&display=swap');
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
    border-color: #fffcfeff;
    color: #ff464f;
    padding: 10px;
    border-radius: 11px;
    font-size: 2em;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    border-width: 1px;
    border-color: #f3f1f2   ;
    border-style: outset;
    transition: all 0.3s ease;
    
}
a:hover{
        text-decoration:underline;
        cursor: pointer;
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