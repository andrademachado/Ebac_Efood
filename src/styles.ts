import styled, { createGlobalStyle } from "styled-components"

export const cores = {
    vermelho: '#E66767',
    branco: '#FFFFFF',
    bege: '#FFEBD9',
    creme: ' #FFF8F2'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        text-decoration: none;
        list-style: none;
    }

    body {
        background-color: ${cores.creme};
        color: ${cores.branco};
    }
`

