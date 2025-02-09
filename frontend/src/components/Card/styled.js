import styled from "styled-components";

export const StyledCard = styled.article`
    display: flex;
    flex-direction: column;
    min-height: fit-content;
    width: 20vw;
    min-width: 300px;
    margin: 16px;
    justify-content: space-between;
    border-radius: 24px;
    box-shadow: 0 4px 10px #00173685;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        transform: translateY(-4px);
        h4 {
            color: #ff464f;
        }
    }
`

export const StyledImg = styled.img`
    width: 100%;
    border-radius: 24px 24px 0 0;
    object-fit: cover;
`

export const StyledTitle = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const StyledInfo = styled.section`
    display: flex;
    flex-direction:column;
    padding: 16px;
    gap: 8px;
    :last-child{
        justify-self:center;
    }
    :last-child:hover{
            text-decoration: underline;
    }
`