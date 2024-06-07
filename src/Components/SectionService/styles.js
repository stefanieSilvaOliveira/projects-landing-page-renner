import styled from "styled-components"

export const Section = styled.section`
          width: 100%;
          height: 965px;
          padding-top: 128px;

          position: relative;
`
export const Container = styled.div`
         display: flex;
         align-items:center;
         justify-content: space-between;
         width: 100%;
         max-width: 1246px;
         padding: 0 50px;
         margin: 0 auto;
`
export const DivLeft = styled.div`
         flex: 1;
         max-width: 594px;
`
export const Span = styled.span`
      display: block;
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      color: #f44336;
      margin-bottom: 35px;
`
export const H2 = styled.h2`
         color: #000;
         font-size: 56px;
         font-weight:bold;
         line-height: 61px;
         margin-bottom: 24px;
`
export const P = styled.p`
         font-size: 18px;
         max-width: 554px;
         margin-bottom: 68px;
         margin-top: 50px;
         color: #2C2C2C;
`
export const Li = styled.li`
       list-style: none;
       font-size: 15px;
       font-weight: 300;
       display: flex;
       align-items: center;
       gap: 36px;
       padding-bottom: 30px;  
       border-bottom: 1px solid #7a7786;

       i{
            color: #f44336;
            font-size: 18px;
            margin-top: 20px;
       }

       p{
           margin-top: 15px;
           font-size: 15px;
           font-weight: 300;
           color: #111111;
       }
`
export const DivRight = styled.div`
      position: absolute;
      top: 0;
      right: 0;
    

      width: 32%;
      height: 100%;
      display: flex;
      align-items: center;

      @media (max-width: 768px) {
        
        display: none;   
  }
      
`
export const Img = styled.img`
         transform: translateX(- 50%)
`