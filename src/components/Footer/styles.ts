import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.footer`
    background-color: ${cores.bege};
    color: ${cores.vermelho};
    padding: 40px ;

    @media (max-width: 768px) {
        padding: 20px;
    }
`
export const Card = styled.div`
    margin-left: 134px;

    @media (max-width: 768px) {
        margin-left: 0;
    }
`
export const Logo = styled.div`
    margin-bottom: 32px;
    margin-left: 450px;
    margin-top: 40px;

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 20px;
        text-align: center;
    }
`
export const Face = styled.a`
    margin-left: 8px;
    margin-right: 8px;

    @media (max-width: 768px) {
        margin-left: 4px;
        margin-right: 4px;
    }
`
export const Insta = styled.a`
    margin-left: 16px;

    @media (max-width: 768px) {
        margin-left: 8px;
    }
`
export const Redes = styled.div`
    margin-left: 450px;
    margin-bottom: 80px;

    @media (max-width: 768px) {
        margin-left: 0;
        text-align: center;
    }
`
export const Texto = styled.p`
    margin-left: 200px;
    margin-top: 80px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 40px;
        margin-bottom: 20px;
        text-align: center;
    }
`;

export const Title = styled.h5`
    margin-left: 165px;

    @media (max-width: 768px) {
        margin-left: 0;
        text-align: center;
    }
`

