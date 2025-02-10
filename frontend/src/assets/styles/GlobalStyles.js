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

select {
  width: 200px;
  height: 40px;
  padding:4px 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url('data:image/svg+xml;charset=US-ASCII,<svg%20xmlns="http://www.w3.org/2000/svg"%20viewBox="0%200%204%205"><polygon%20points="0,0%204,0%202,5"%20fill="%23ccc"/></svg>') no-repeat right 10px center;
  background-size: 10px;
}

select:hover {
  border-color: #888;
}

select:focus {
  outline: none;
  border-color: #555;
}

select option[value=""] {
  color: #888;
}
`

/*
 cores do documento
 laranja: #ff8a3b
 vermelho: #ff464f
 amarelo: #ffc232
 preto: #001736
 cinza: #9e9e9e
 */ 