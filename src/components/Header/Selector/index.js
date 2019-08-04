import React from 'react';
import './selector.scss';

export default function Selector({ name, icon, aba, abaSel, callbackParent }) {
    return (
        <>
            <button onClick={ () => callbackParent(aba) }
                    className={ "btn" + (abaSel === aba ? " sel" : "") }>
                <img src={"/images/" + icon + ".png"} alt={ name } />
            </button>
        </>
    )
}
