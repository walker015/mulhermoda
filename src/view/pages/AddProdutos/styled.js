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

export const Container = styled.div`
    display: grid;
    background-color: black;
    height: 100vh;
    width: 100%;
    justify-items: center;
    align-items: center;
    grid-template-rows: 1fr 15fr;
`

export const Header = styled.div`
    margin-left: auto;
    margin-right: auto;
    color: #FFF;
    top: 0%;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    margin-top: 5%;
`

export const FormDiv = styled.div`
    display: grid;
    margin-left: auto;
    margin-right: auto;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
`

export const Form = styled.div`
    margin-left: auto;
    margin-right: auto;
    color: #FFF;
`

export const Button = styled.button`
    margin-top: 5px;
`

export const Descri = styled.textarea`
    width: 200px;
    height: 50px;
`
