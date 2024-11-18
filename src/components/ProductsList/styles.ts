import styled from "styled-components";

export const Container = styled.section`
    padding: 80px 171px ;

    @media (max-width: 768px) {
        padding: 40px 16px;
    }
`
export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 48px;
   
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        column-gap: 0;
        row-gap: 16px;
    }

`
