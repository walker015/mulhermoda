import React, { useState } from 'react';
import * as S from './styled';

export default function AddProdutos() {
    const [rg, setRG] = useState('');
    const [name, setName] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cep, setCEP] = useState('');
    const [nascimento, setNascimento] = useState('');
    const clienteData = [];



    function enviarDados(e) {
        const clientes = []
        clientes.push({
            "id": rg,
            "name": name,
            "quantidade": endereco,
            "description": cep,
            "valor": nascimento
        })

        if (localStorage.getItem('@data') === null) {
            clienteData.push(JSON.stringify(clientes));
            localStorage.setItem('@data', clienteData);
        } else {
            clienteData.push(localStorage.getItem(`@data`), JSON.stringify(clientes));
            localStorage.setItem('@data', clienteData);
        }

        setRG(e.target.value = '')
        setName(e.target.value = '')
        setEndereco(e.target.value = '')
        setCEP(e.target.value = '')
        setNascimento(e.target.value = '')
    }

    return (
        <S.Container>
            <S.MyGlobalStyle />
            <S.Header>
                <h1>ADICIONE UM CLIENTE</h1>
            </S.Header>
            <S.FormDiv>
                <S.Form>
                    <h4>RG:</h4>
                    <input className="rgImput" name="input" placeholder="xxx.xxx.xxx-xx" value={rg} onChange={ i => {setRG(i.target.value)}} />
                    <h4>Nome:</h4>
                    <input className="nameProductImput" name="input" placeholder="Nome" value={name} onChange={ n => {setName(n.target.value)}} />
                    <h4>Data de Nascimento:</h4>
                    <input className="nascimentoImput" name="input" placeholder="xx/xx/xxxx" value={nascimento} onChange={ v => {setNascimento(v.target.value)}} />
                    <h4>Endereço:</h4>
                    <input className="enderecoImput" name="input" placeholder="Endereço" value={endereco} onChange={ q => {setEndereco(q.target.value)}} />
                    <h4>CEP</h4>
                    <input className="cepImput" name="input" placeholder="xxxxx-xxx" value={cep} onChange={ d => {setCEP(d.target.value)}} />
                    <br />
                    <S.Button type="button" onClick={enviarDados}>Enviar</S.Button>
                </S.Form>
            </S.FormDiv>
        </S.Container>
    );
}