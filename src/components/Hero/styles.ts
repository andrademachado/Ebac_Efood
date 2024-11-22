import styled from "styled-components";
import { cores } from "../../styles";
import Button from '../Button'

export const CardModal = styled.div`
    width: 1024px;
    height: 344px;
    background-color: ${cores.vermelho};
    color: ${cores.bege};
`


export const Card = styled.div`
    background-color: ${cores.vermelho};
    color: ${cores.bege};
    max-width: 320px;
    width: 100%;
    height: 338px;
    margin-bottom: 48px;
    margin-top: 40px;
    display: block;
    position: relative;
    padding: 8px;
    grid: 1fr 1fr 1fr;

    .image-container {
    width: 304px;
    height: 167px;    
    overflow: hidden;
    object-fit: cover;
    margin-bottom: 8px;
    }

    @media (max-width: 768px) {
        height: auto;
        max-width: 100%;
        margin-bottom: 24px;
        
        .image-container {
            width: 100%;
            height: auto;
            margin-bottom: 12px;
        }
        
        .button-container{ 
            position: static;
            transform: none;
            margin-top: 16px;
            font-size: 26px;
            width: 100%;
            height: 38px;
        }
    }
    @media (max-width: 480px) {
        padding: 12px;

        .button-container{ 
            margin-top: 12px;
            font-size: 18px;
            height: 28px;
        }
        
    }
    
`
export const CardList = styled.div`
    display: flex;
    column-gap: 48px;
`
export const Title = styled.h4`    
    font-size: 16px;
    font-weight: 900;    
    line-height: 21px;    
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    
    @media (max-width: 768px) {
        font-size: 26px;
    }
    @media (max-width: 480px) {
        font-size: 16px;
    }
`
export const Texto = styled.div`
    color: ${cores.bege};
    font-size: 14px;
    line-height: 22px;
    display: block;
    margin-bottom: 8px;
    cursor: pointer;

    @media (max-width: 768px) {
        font-size: 18px;
        margin-top: 40px;
        margin-bottom: 12px;
    }
    @media (max-width: 480px) {
        font-size: 14px;
    }
`
export const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`



