import styled, { createGlobalStyle } from 'styled-components';


export const MyGlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }

    html {
        height: 100vh;
    }
`

export const Container = styled.section`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: #363636;
`;

export const Section = styled.section`
    display: grid;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    height: 100%;
    background-color: #FFF;
    justify-items: center;

`

export const Head = styled.div`
    position: relative;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    height: max-content;
    img {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0px;
    }
`

export const Cadastro = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #fff;
    grid-template-rows: repeat(1, 1fr);
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
`
export const Produtos = styled.div`
    margin: auto;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    p {
        font-size: 400;
    }
`
export const Clientes = styled.div`
    margin: auto;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    p {
        font-size: 400;
    }
`

export const gifModa = styled.div`
    position: relative;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;

    img {
        width: 100%;
        height: 100vh;

    }
`
