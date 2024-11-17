import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/style";

export const Card = styled.div`
    max-width: 472px;
    width: 100%;
    height: 398px;
    margin-bottom: 48px;
    background-color: ${cores.branco};
    color: ${cores.vermelho};
    display: block;
    position: relative;
    ${TagContainer} {
        margin-right: 8px;
    }
    
`

export const Infos = styled.div`
    position: absolute;
    top: 16px;
    right: 8px;
    display: flex;
    gap: 8px; 
    
`

export const CardDescricao = styled.div`    
    height: 398px;
    border: solid 1px;
    color: ${cores.vermelho};

    .image-container {
    width: 472px;
    height: 217px;
    overflow: hidden;
    object-fit: cover;
    }
    
`

export const Title = styled.h4`    
    font-size: 16px;
    font-weight: 900;    
    line-height: 21px;
    margin-left: 7px;
    display: flex;
    justify-content: space-between;    
    
    h3{
        margin-right: 8px;
    }
`
export const Star = styled.div`
    display: flex;
    margin-right: 8px;
`
export const Texto = styled.div`
    color: ${cores.vermelho};
    font-size: 14px;
    margin-top: 16px;
    margin-left: 8px;
    margin-bottom: 140x;
    line-height: 22px;
    display: block;
`
export const Botao = styled.div`
    position: relative;
    margin-top: 16px;
    margin-left: 8px;
    display: block;   
`
export  const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`




