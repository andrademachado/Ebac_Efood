import styled from "styled-components";
import { cores } from "../../styles";

export const Card = styled.div`
    width: 472px;
    height: 398px;
    margin-bottom: 48px;
    background-color: ${cores.branco};
    color: ${cores.vermelho};
    display: block;
    position: relative;
    
`

export const Infos = styled.div`
    position: absolute;
    top: 16px;
    margin-left: 270px;
    display: flex;
    gap: 8px;    
`

export const CardDescricao = styled.div`
    width: 472px;
    height: 100%;
    height: 398px;
    border: solid 1px;
    color: ${cores.vermelho};
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
    line-height: 22px;
    display: block;
`




