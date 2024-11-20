import styled from "styled-components";

export const Container = styled.section`
    padding: 80px 171px ;

    @media (max-width: 768px) {
        padding: 60px 30px;
    }

    @media (max-width: 480px) {
        padding: 40px 20px;
    }
`
export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    column-gap: 48px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        column-gap: 32px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        column-gap: 16px;
    }
`