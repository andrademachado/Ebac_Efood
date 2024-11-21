import styled from "styled-components";
import { Link } from "react-router-dom";
import { cores } from "../../styles";
import  { Props } from '.'

export const  ButtonContainer = styled.button<Props>`
    background-color: ${(props) => (props.variant === 'primary' ? cores.vermelho : cores.bege )};
    color:  ${(props) => (props.variant === 'primary' ? cores.bege: cores.vermelho)};
    font-size: 14px;
    font-weight: 700;
    padding: 4px 6px;
    padding: ${(props) => (props.size === 'small' ?  '4px 6px' : '4px 82px')};
    border: 2px solid   ${(props) => (props.variant === 'primary' ? cores.bege : cores.vermelho)};  
` 

    
    export const ButtonLink = styled(Link)`
        background-color: ${cores.vermelho};
        color: ${cores.bege};
        font-size: 14px;
        font-weight: 700;
        padding: 4px 6px;   
        text-decoration: none;
    `
    
export const Clicker = styled.button`
    background-color: ${cores.bege};
    color: ${cores.vermelho};
    border: 2px solid ${cores.bege};
    width: 304px;
    height: 24px;
    font-size: 14px;
    font-weight: 700;
    align-items: center;
    text-decoration: none;
`