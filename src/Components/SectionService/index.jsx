import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import * as S from "./styles"

import ImagePhone from "../../assets/celular-tela-login.png"

export default function SectionService(){
       
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
                 <S.Span>Promoções Exclusivas</S.Span>
                 <S.H2>Controle suas finanças de forma prática</S.H2>
                 <S.P>Aqui o cliente tem seu espaço,por isso com as lojas
                  Renner você tem as melhores promoções!  
                 </S.P>

                 <ul>
                 <S.Li>
                <i class="fas fa-phone"></i>
                <p>Acompanhe sua conta,faça suas transferencias com segurança,
                 pagamentos,tudo em um só aplicativo.   
                </p>
                 </S.Li>  

                 <S.Li>
                 <i class="fas fa-user"></i>
                <p> Conta segura,que protege seus dados com alto indice de segurança.   
                </p>
                 </S.Li>  

                 <S.Li>
                 <i class="fas fa-money-check"></i>
                <p> Faça emprestimos para compras com segurança direto do aplicativo.
                </p>
                 </S.Li>  

                 <S.Li>
                 <i class="fas fa-home"></i>
                <p>Resolva tudo dentro do aplicativo sem sair de casa. 
                </p>
                 </S.Li>  
                 </ul>

                </S.DivLeft>
            </S.Container>    
            <S.DivRight className="right-element">
             <S.Img src={ImagePhone} alt="phone"/>
            </S.DivRight>
            </S.Section>
        )
}