import React from 'react'
import { BackButton, HeaderContainer, LogoImage } from './styled'
export default function Header({ changePage, page }) {
    return (
        <HeaderContainer
        >
            <LogoImage
                src={'/images/logomarca_anfitrioesdealuguel.png'}
                alt="logomarca anfitriões de aluguel" />
            {page === "detalhes" && (
                <BackButton
                    onClick={() => changePage("home")}
                    aria-label="Voltar para Home">
                    Voltar
                </BackButton>
            )}
        </HeaderContainer >
    )
}
