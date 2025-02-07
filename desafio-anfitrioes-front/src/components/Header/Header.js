import React from 'react'
import Logo from '../../images/logomarca_anfitrioesdealuguel.png'
import { HeaderMain, StyledImg } from './styled'
export default function Header() {
    return (
        <HeaderMain>
            <StyledImg src={Logo} alt="logomarca anfitriões de aluguel" />
        </HeaderMain>
    )
}
