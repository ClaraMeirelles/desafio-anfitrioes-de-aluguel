import React from 'react'
import Logo from '../../images/logomarca_anfitrioesdealuguel.png'
import { HeaderMain, StyledLogo } from './styled'
export default function Header({ changePage, page }) {
    return (
        <HeaderMain>
            <StyledLogo src={Logo} alt="logomarca anfitriões de aluguel" />
            {page === "detalhes" && <a onClick={() => changePage("home")}>Voltar</a>}
        </HeaderMain>
    )
}
