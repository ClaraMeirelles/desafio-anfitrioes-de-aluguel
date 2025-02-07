import styled from "styled-components";

export const StyledCard = styled.article`
    display: flex;
    flex-direction: column;
    width: 25vw;
    min-width: fit-content;
    margin: 16px;
    justify-content: space-evenly;
    border-radius: 24px;
    box-shadow: 0 5px 8px 0 #001736 ;
`

export const StyledImg = styled.img`
    width: 100%;
    border-radius: 24px 24px 0 0;
`

export const StyledTitle = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const StyledInfo = styled.section`
    padding: 0 16px;
`