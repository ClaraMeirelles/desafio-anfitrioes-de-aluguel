import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    height: 8vh;
    min-height: 50px;
    width: 98vw;
    padding: 8px;

    @media  screen and (max-width: 700px) {
        min-height: fit-content;
        flex-direction: column;
        align-items: center;
        padding: 16px;
    }
`

export const LogoImage = styled.img`
    height: 90%;
    margin: 16px; 
    object-fit: contain;
`
