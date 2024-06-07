import React from 'react';
import * as S from "./styles";
import ItensMenu from './itensMenu';
import logoRenner from '../assets/icon-renner.png';

export default function Header() {
    return (
        <S.Header>
            <S.Container>
                <S.ContainerItens>
                    <div>
                        <img src={logoRenner} alt='logo' />
                    </div>
                    <S.Ul>
                        <S.Li>
                            <ItensMenu name="Promoções" />
                        </S.Li>
                        <S.Li>
                            <ItensMenu name="Fatura" />
                        </S.Li>
                        <S.Li>
                            <ItensMenu name="Empréstimos" />
                        </S.Li>
                        <S.Li>
                            <ItensMenu name="Compras" />
                        </S.Li>
                    </S.Ul>
                    <S.DivButtonAcess>
                        <S.ButtonAcess>Acessar
                            <i className="fas fa-user custom-icon"></i>
                        </S.ButtonAcess>
                    </S.DivButtonAcess>
                </S.ContainerItens>
            </S.Container>
        </S.Header>
    );
}
