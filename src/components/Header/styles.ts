import styled from "styled-components";
import { cores } from "../../styles";

export const Imagem = styled.div`
    width: 100%;
    height: 186px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 70px;
    `
    
    export const Logo = styled.img`
    margin-top: 63px;
    margin-left: 160px;
    
    `
export const HeaderBar = styled.header`
    max-width: 1024px;
    margin-bottom: 80px ; 
    justify-content: space-between;
    align-items: center;
    `

export const Links = styled.ul`      
    display: flex;   
    margin-right: 100px;
    `

export const LinkItem = styled.li`
    margin-top: 82px;
    margin-left: 120px;

    a {
        color: ${cores.vermelho};
        font-size: 18px;
    }
`