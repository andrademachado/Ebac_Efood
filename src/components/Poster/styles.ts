import styled from "styled-components";
import { cores } from "../../styles";

export const Imagem = styled.div`
    width: 100%;
    height: 366px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 0px;
    margin-bottom: 0px;

      @media (max-width: 768px){
      width: 100%;
    }
`

export const Bloco = styled.div`
    width: 539px;
    max-width: 539px;
    text-align: center;
    margin-left: 240px;

    @media (max-width: 768px) {
        margin-left: auto;
        margin-right: auto;
        width: 90%; 
    } 
`

export const Logo = styled.img`
    margin-top: 64px;

    @media (max-width: 768px){
      margin-top: 32px;
    }
`
export const Texto = styled.h2`
    margin-top: 138px;
    font-size: 36px;
    font-weight: bold;    
    line-height: 42px;
    color: ${cores.vermelho};

      @media (max-width: 768px){
        margin-top: 100px; 
        font-size: 24px; 
        line-height: 32px;
        text-align: center; 
    }
`



