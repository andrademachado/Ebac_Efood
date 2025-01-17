import styled from "styled-components";
import { Link } from "react-router-dom";
import { cores } from "../../styles";
import { Props } from ".";
export const ButtonContainer = styled.button<Props>`
    background-color: ${(props) => (props.variant === 'primary' ? cores.vermelho : cores.bege)};
    color:  ${(props) => (props.variant === 'primary' ? cores.bege : cores.vermelho)};
    font-size: 14px;
    font-weight: 700;
    padding: ${(props) => (props.size === 'small' ? '4px 6px' : '4px 80px')};
    border: 2px solid ${(props) => (props.variant === 'primary' ? cores.bege : 'transparent')};
    cursor: pointer;
`;
export const ButtonLink = styled(Link) <Props>`
    background-color: ${(props) => (props.variant === 'primary' ? cores.vermelho : cores.bege)};
    color: ${(props) => (props.variant === 'primary' ? cores.bege : cores.vermelho)};
    
    font-size: 14px;
    font-weight: 700;
    padding: ${(props) => (props.size === 'small' ? '4px 6px' : '2px 77px' )};
    text-decoration: none;
    border: 2px solid ${(props) => (props.variant === 'primary' ? cores.vermelho : 'transparent')};
    cursor: pointer;
`;
