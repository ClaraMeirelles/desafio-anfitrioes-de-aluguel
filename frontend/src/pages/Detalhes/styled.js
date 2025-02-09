import styled from "styled-components";

export const DetailPage = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: justify;
    img{
        height: 60vh;
        width: 100%;
        object-fit: cover;
    }
    `

export const Description = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 16px;
    justify-items: center;
    padding: 16px;
    :last-child{
        grid-column:span 2;
    }
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
    @media (max-width: 700px) {
        grid-template-columns: 3fr 2fr;
        text-align: center;
    }
`