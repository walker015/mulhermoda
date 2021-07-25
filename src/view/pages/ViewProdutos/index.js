import React, { useEffect, useState } from 'react';
import { MyGlobalStyle } from './styled';

export default function VisualizarClientes() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const store = [JSON.parse(localStorage.getItem('@store'))];
        setClientes(store);
        console.log(localStorage.getItem('@store'));
    }, []);

   

    return (
        <>
            <MyGlobalStyle />
            <section>
                <ul>
                    {clientes.map((client) => {
                        return (
                            <li>{client}</li>
                        )
                    })
                    }
                </ul>
            </section>
        </>
    )
}