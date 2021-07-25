import React from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

import logoHome from '../../../logo.png';
import gifModa from '../../../moda.gif';


export default function Home() {
    
    const history = useHistory();

    function handleAdicionarP() {
        history.push('/AddProdutos')
    }

    function handleVisualizarP() {
        
    }

    function handleAdicionarC() {
        history.push('/AddClientes')
    }

    function handleVisualizarC() {
        
    }

    return (
        <>
            <S.MyGlobalStyle />
            <S.Container>
                <S.Section>
                    <S.Head>
                        <img src={logoHome} className="logoHome" alt="logoHome" width="40%" height="100%" />
                    </S.Head>
                    <S.Cadastro>
                        <S.Produtos>
                            <h3>Produtos: </h3>
                            <button type="button" onClick={handleAdicionarP}>Adicionar</button>
                            <button type="button" onClick={handleVisualizarP}>Visualizar</button>
                        </S.Produtos>
                        <S.Clientes>
                            <h3>Clientes:</h3>
                            <button type="button" onClick={handleAdicionarC}>Adicionar</button>
                            <button type="button" onClick={handleVisualizarC}>Visualizar</button>
                        </S.Clientes>
                    </S.Cadastro>
                    <S.gifModa>
                        <img src={gifModa} className="gifModa" alt="Gif Moda"/>
                    </S.gifModa>
                </S.Section>
            </S.Container>
        </>
    );
}