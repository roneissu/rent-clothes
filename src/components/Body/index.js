import React from 'react';

import Calendario from './Calendario';
import Editar from './Editar';
import Vestidos from './Vestidos';

export default function Body({ abaMenuSel }) {
    return (
        <>
            { abaMenuSel === 1 ? <Vestidos /> : 
              abaMenuSel === 2 ? <Editar /> : 
                                 <Calendario /> }
        </>
    );
}