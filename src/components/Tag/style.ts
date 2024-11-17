import styled from "styled-components";
import { cores } from "../../styles";

import { Props } from '.'


export const TagContainer = styled.div<Props>`
    background-color: ${cores.vermelho};
    color:  ${cores.bege};
    font-size: ${props => props.size === 'big' ? '12px' : '10px'} ;
    font-weight: bold;
    padding:${(props) => (props.size === 'big' ? '8px 6px' : '6px 4px')};
    display:inline-block;
`
