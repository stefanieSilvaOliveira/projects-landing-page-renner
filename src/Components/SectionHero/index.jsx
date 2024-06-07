import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import * as S from "./styles";
import AppImage from "../../assets/acss-app.png";
import CartãoR from "../../assets/cartão-renner.png";

export default function SectionHero(){
    
    useEffect(() => {
        ScrollReveal().reveal('.left-element', { 
            duration: 1000, 
            origin: 'left', 
            distance: '50px' 
        });
        ScrollReveal().reveal('.right-element', { 
            duration: 1000, 
            origin: 'right', 
            distance: '50px' 
        });
    }, []);
    
    return(
        <S.Section>
            <S.Container>
            <S.DivLeft className="left-element"> 
             <S.H1>CONTE COM O AUTOATENDIMENTO DOS CARTÕES RENNER</S.H1>
             <S.P>Todos os parcelamentos são feitos sem juros,
                completo e feito pra você.
             </S.P>
             <S.ImageApp>
             <img src={ AppImage}  alt="appStorie"></img>
             </S.ImageApp>
            </S.DivLeft> 

            <S.ImageCartao  className="right-element">
            <img src={CartãoR}  alt="cartao"></img>   
            </S.ImageCartao>
            </S.Container>
        </S.Section>
    )
}