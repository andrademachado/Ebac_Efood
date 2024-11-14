import styled from "styled-components";
import { cores } from "../../styles";

export const Imagem = styled.div`
    width: 100%;
    height: 166px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 80px;
    `

    export const Logo = styled.img`
    margin-top: 38px;
    margin-left: 150px;
    
    `
export const HeaderBar = styled.header`
    max-width: 1024px;
    margin-bottom: 80px ; 
    justify-content: space-between;
    align-items: center;
    `

export const Links = styled.ul`      
    display: flex;   
    
    `

export const LinkItem = styled.li`
    margin-top: 60px;
    margin-left: 100px;
    margin-right: 100px;

    a {
        color: ${cores.vermelho};
        font-size: 15px;
        font-weight: bold;
    }
`
export const Cart = styled.a`
    margin-left: 100px;
`