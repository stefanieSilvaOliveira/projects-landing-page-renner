import React from "react"
import * as S from "./styles"

export default function ItensMenu({name}){
    return(
        <>
        <S.ButtonItensMenu>
        <span>{name}</span>
        <i class="fas fa-chevron-down custom-icon"></i>
        </S.ButtonItensMenu>
         </>
    )
}