import React from 'react';
import './selector.scss';

export default function Selector({ name, icon, aba, abaSel, callbackParent }) {
    return (
        <>
            <button onClick={ () => callbackParent(aba) }
                    className={ 'btn' + (abaSel === aba ? ' sel' : '') }>
                <img src={process.env.PUBLIC_URL + '/images/' + icon + '.png'} alt={ name } />
            </button>
        </>
    )
}
