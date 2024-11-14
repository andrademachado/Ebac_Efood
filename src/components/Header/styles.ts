import styled from "styled-components";
import { cores } from "../../styles";

export const Imagem = styled.div`
    width: 100%;
    height: 166px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 0px;
    `

    export const Bloco = styled.div`
        width: 1024px;
        max-width: 1024px;
        background-repeat: no-repeat;
        background-size: cover;
        align-items: center;

    `

    export const Logo = styled.img`
    margin-top: 48px;
    margin-left: 120px;
   
    `

export const Links = styled.ul`      
    display: flex; 
    margin-left: 0;    
    justify-content: space-between;    
    `

export const LinkItem = styled.li`
    margin-top: 60px;
    

    a {
        color: ${cores.vermelho};
        font-size: 18px;
        font-weight: bold;
        
    }
`


export const Cart = styled.a`
margin-left: 98px;
`