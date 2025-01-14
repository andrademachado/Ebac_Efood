import styled from "styled-components";
import { cores } from "../../styles";


export  const Card = styled.div`
    max-width: 1024px;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 2px;
    display: flex;
    background-color: ${cores.vermelho};

`

export const Titulo = styled.h1`
    font-size: 18px;
    width: 900;
    line-height: 21px;
    margin-top: 32px;
    margin-left: 24px;
`
export const Texto = styled.p`
    font-size: 14px;
    line-height: 21px;
    margin-top: 16px;
    margin-left: 24px;

`
export const Click = styled.div`
    margin-left: 24px;
    margin-top: 2px;
`

export const Image = styled.img`
    width: 280px;
    height: 280px;
    margin-left: 32px;
    margin-top: 32px;
    margin-bottom: 32px;
`
export const Close = styled.img`
    width: 16px;
    height: 16px;
    margin-top: 8px;
`

