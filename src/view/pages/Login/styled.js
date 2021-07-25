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

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 100vh;
    position: relative;

    img {
        margin: auto;
    }
`

export const LoginDiv = styled.div`
    position: absolute;
    left: 49%;
    top: 35%;
    width: 5%;
`

export const usuarioInput = styled.input`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    width: 100%;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`

export const senhaInput = styled.input`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    width: 100%;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`
