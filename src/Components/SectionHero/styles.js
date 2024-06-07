import styled from "styled-components";
import Background from "../../assets/backgroud.png"

export const Section = styled.section`
    background-image: url(${Background});
    width: 100%;
    height: 704px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (max-width: 768px) {
       width: 120%;
       margin-top: 50px;
 }
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1246px;
    padding: 0 50px;
    margin: 0 auto;
`
export const DivLeft = styled.div`
    flex: 1;
    max-width: 500px;
`
export const H1 = styled.h1`
    color: #000;
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 16px;
    margin-top: 30px;

    @media (max-width: 768px) {
        font-size: 30px;
        text-align: center;
        margin-right: 100px;
       
 }
`
export const P = styled.p`
    color: #2C2C2C;
    font-size: 17px;
    max-width: 408px;
    margin-top: 10px;
    margin-bottom: 32px;

`
export const ImageApp = styled.image`
    display: flex;
    align-items: center;
    margin-left: -80px;
    height: 100px;
    cursor: pointer;

    @media (max-width: 768px) {
        margin-right: 20px;
       
 }
`
export const ImageCartao = styled.image`
       cursor: pointer;  

       @media (max-width: 768px) {
        
        display: none;    
 }
`
   

