import styled from "styled-components";
import { cores } from "../../styles";

export const Imagem = styled.div`
    width: 100%;
    height: 186px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 0px;

    @media (max-width: 768px) {
        height: 250px;

    }

    @media (max-width: 480px) {
        height: 170px; 
    }
    `

export const Bloco = styled.div`
        width: 1024px;
        max-width: 1024px;
        background-repeat: no-repeat;
        background-size: cover;
        align-items: center;

        @media (max-width: 768px) {
        width: 100%;
        max-width: 100%;
    }

    @media (max-width: 480px) {
        width: 100%;
        max-width: 100%;
    }
    `

export const Logo = styled.img`
    margin-top: 48px;
    margin-left: 138px;
    
    @media (max-width: 768px) {
        margin-top: 24px;  
        margin-left: 50px;  
    }
    @media (max-width: 480px) {
        margin-top: 16px;  
        margin-left: 20px;  
    }
    `

export const Links = styled.ul`      
    display: flex; 
    margin-left: 0;    
    justify-content: space-between;
    
    @media (max-width: 768px) {
        flex-direction: column;  
        align-items: center; 
    }

    @media (max-width: 480px) {
        flex-direction: column;  
        align-items: center;
    }
    `

export const LinkItem = styled.li`
    margin-top: 60px;

    a {
        color: ${cores.vermelho};
        font-size: 18px;
        font-weight: bold;
    }

    @media (max-width: 768px) {
        margin-top: 20px;
        
        a {
            font-size: 16px; 
        }
    }

    @media (max-width: 480px) {
        margin-top: 12px;
        font-size: 16px;

        a {
            font-size: 14px;
        }

    }
`

export const Cart = styled.a`
margin-left: 98px;

@media (max-width: 768px) {
        margin-left: 0;
        margin-top: 20px;
        text-align: center;
    }

    @media (max-width: 480px) {
        margin-left: 0;
        margin-top: 12px;
        text-align: center
    }
`