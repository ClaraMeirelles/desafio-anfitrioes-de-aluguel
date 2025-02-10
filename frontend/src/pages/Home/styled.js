import styled from "styled-components";

export const HomeContainer = styled.main`
    padding: 16px;
`

export const HomeControls = styled.section`
    display: flex;
    justify-content: space-evenly;
    @media  screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        font-size: 1.5em;
        padding-bottom: 32px;
    }
`

export const HomeLayout = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`