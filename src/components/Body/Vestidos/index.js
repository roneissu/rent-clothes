import React, { useState, useEffect } from 'react';
import './vestido.scss';

import Cartao from './Cartao';
import Adicionar from './NewDress';

export default function Vestidos() {

    const [normalSel, setTamanho] = useState(true);
    const [vestidosLista, setVestidosLista] = useState([]);

    useEffect(() => {
        const max_id = parseInt(localStorage.getItem('max_id'));
        const auxLista = [];

        for(let i = 1; i <= max_id; i++) {
            const v = JSON.parse(localStorage.getItem('vestido_' + i));
            if (v) {
                auxLista.push({
                    id: i,
                    name: v.name,
                    sizeChild: false,
                    url: v.url
                });
            }
        }
        setVestidosLista(auxLista);
    }, []);

    useEffect(() => {
        // console.log(vestidosLista);
    }, [vestidosLista]);

    // const teste = [
    //     { id: 1, name: "teste 10", sizeChild: true },
    //     { id: 2, name: "teste 1",  sizeChild: true },
    //     { id: 3, name: "teste 3",  sizeChild: false },
    //     { id: 4, name: "teste 77", sizeChild: true },
    //     { id: 5, name: "teste 6",  sizeChild: false },
    //     { id: 6, name: "teste 35", sizeChild: true },
    //     { id: 7, name: "teste 2",  sizeChild: true },
    //     { id: 8, name: "teste 5",  sizeChild: true }
    // ]

    return (
        <>
            <div className="tamanhos">
                <button onClick={() => setTamanho(true)} 
                        className={ normalSel ? 'btn-sel' : 'btn-not' }
                >
                    NORMAL
                </button>
                <button onClick={() => setTamanho(false)} 
                        className={ normalSel ? 'btn-not' : 'btn-sel' }
                >
                    INFANTIL
                </button>
            </div>

            <ul className="lista">
                { vestidosLista
                    .filter((item) => (
                        item.sizeChild !== normalSel
                    ))
                    .map((item) => (
                        <li key={ item.id }><Cartao param={ item.name } url={ item.url } /></li>
                    ))
                }
                <li key={ 0 }><Adicionar /></li>
            </ul>
        </>
    )
}
