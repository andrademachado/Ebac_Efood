import styled from "styled-components";
import { cores } from "../../styles";
import Button from '../Button'

export const Card = styled.div`
    background-color: ${cores.vermelho};
    color: ${cores.bege};
    max-width: 320px;
    width: 100%;
    height: 338px;
    margin-bottom: 48px;
    display: block;
    position: relative;
    padding: 8px;

    .image-container {
    width: 304px;
    height: 167px;    
    overflow: hidden;
    object-fit: cover;
    margin-bottom: 8px;
    }
    
`
export const Title = styled.h4`    
    font-size: 16px;
    font-weight: 900;    
    line-height: 21px;    
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
   

`
export const Texto = styled.div`
    color: ${cores.bege};
    font-size: 14px;
    line-height: 22px;
    display: block;
    margin-bottom: 8px;
    cursor: pointer;
`

export  const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`






