import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function AddProdutos() {
    const history = useHistory();
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [quantidade, setQuant] = useState('');
    const [description, setDescri] = useState('');
    const [valor, setValor] = useState('');
    const productStore = [];



    function enviarDados(e) {
        const produtos = {
            "id": id,
            "name": name,
            "quantidade": quantidade,
            "description": description,
            "valor": valor
        }

        if (localStorage.getItem('@store') === null) {
            productStore.push(JSON.stringify(produtos));
            localStorage.setItem('@store', productStore);
        } else {
            productStore.push(localStorage.getItem(`@store`), JSON.stringify(produtos));
            localStorage.setItem('@store', productStore);
        }

        setId(e.target.value = '')
        setName(e.target.value = '')
        setQuant(e.target.value = '')
        setDescri(e.target.value = '')
        setValor(e.target.value = '')
    }

    return (
        <section>
            <div>

            </div>
            <div>
                <input type="text" className="idProductImput" name="idProduct" placeholder="xxxx" value={id} onChange={i => { setId(i.target.value) }} />
                <input className="nameProductImput" name="nameProduct" placeholder="Nome do Produto" value={name} onChange={n => { setName(n.target.value) }} />
                <input className="quantProductImput" name="quantProduct" placeholder="Quantidade de Produtos" value={quantidade} onChange={q => { setQuant(q.target.value) }} />
                <input className="descriProductImput" name="descriProduct" placeholder="Descrição do Produto" value={description} onChange={d => { setDescri(d.target.value) }} />
                <input className="valorProductImput" name="valorProduct" placeholder="Valor em centavos" value={valor} onChange={v => { setValor(v.target.value) }} />
                <button type="button" onClick={enviarDados}>Enviar</button>
            </div>
        </section>
    );
}