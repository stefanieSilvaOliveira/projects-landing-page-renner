import styled from 'styled-components';

export const Header = styled.header`
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 80px;
        background-color: #F8F9FA;

        img{
                width: 120px;
                height: 120px;
                cursor: pointer;
        }

  @media (max-width: 768px) {
       width: 120%;
       height: 100%;
       background-color: #FFFF;

       img {
      width: 100px;
      height: 100px;
       }

       i{
          display: none;
       }       
  }
      
`
export const Container = styled.div`
       width: 100%;
  
`
export const ContainerItens = styled.div`
       display:flex;
       align-items: center;
       justify-content: space-between;
       height: 100%;
       max-width: 1246px;
       padding: 0 15px;
       margin: 0 auto;

       @media (max-width: 768px) {
              
  }


`
export const Ul = styled.ul`
       display: flex;
       align-items: center;
       justify-content: center;
       gap: 40px;
       margin: 0 20px 0 0;

       @media (max-width: 768px) {
      flex-direction: column;
      margin-right: 150px;
      gap: 20px;
      margin-top: 10px;
        
  }

      
`
export const Li = styled.li`
      list-style: none;

      @media (max-width: 768px) {
        
        flex-direction: column;    
  }

      
`
export const ButtonItensMenu = styled.button`
      display: flex;
      align-items: center;
      background-color: transparent;
      font-weight: 300;
      font-size: 14px;
      color: #2C2C2C;
      cursor: pointer;
      border:none;
      
      @media (max-width: 768px) {
        
       font-size: 20px;  
       
  }
  
`

export const DivButtonAcess= styled.div`
      display: flex;
      align-self: center;
      height: 45%;
      padding: 0 20px;
      background-color: #000;

      @media (max-width: 768px) {
        
        display: none;     
  }
  
      
`
export const ButtonAcess = styled.button`
       display: flex;
       align-items: center;
       background-color: #000;
       border: none;
       color: #FFF;
       font-weight: 200;
       font-size: 13px;
       cursor: pointer;

       @media (max-width: 768px) {
          display: none;
  }
      

`