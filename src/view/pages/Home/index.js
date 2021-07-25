import React from 'react';
import * as S from './styled';

import logoHome from '../../../logo.png';
import gifModa from '../../../moda.gif';


export default function Home() {
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
                            <button type="button">Adicionar</button>
                            <button type="button">Visualizar</button>
                        </S.Produtos>
                        <S.Clientes>
                            <h3>Clientes:</h3>
                            <button type="button">Adicionar</button>
                            <button type="button">Visualizar</button>
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