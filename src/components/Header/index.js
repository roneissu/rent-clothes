import React from 'react';
import './header.scss';

import Selector from './Selector';

export default function Header({ abaMenuSel, callbackParent }) {

    function selectAba(newAba) {
        callbackParent(newAba);
    }

    return (
        <div className="menu">
            <Selector name="Vestidos"
                          icon="vestido"
                          aba={1}
                          abaSel={ abaMenuSel }
                          callbackParent={(newAba) => selectAba(newAba)}
            />
            <Selector name="Editar"
                          icon="lapis"
                          aba={2}
                          abaSel={ abaMenuSel }
                          callbackParent={(newAba) => selectAba(newAba)}
            />
            <Selector name="Calendário"
                          icon="calendario"
                          aba={3}
                          abaSel={ abaMenuSel }
                          callbackParent={(newAba) => selectAba(newAba)}
            />
        </div>
    );
}
