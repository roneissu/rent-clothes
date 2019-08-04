import React, { useState } from 'react';
import './App.scss';

import Header from './components/Header';
import Body from './components/Body';

export default function App() {

    const [abaSel, setAbaSel] = useState(1);

    function selectAba(newAba) {
        setAbaSel(newAba);
    }

    return (
        <div className="App">
            <header className="App-header">
                <Header abaMenuSel={abaSel} callbackParent={(newAba) => selectAba(newAba)} />
            </header>
            <div className="App-body">
                <Body abaMenuSel={abaSel} callbackParent={(newAba) => selectAba(newAba)} />
            </div>
        </div>
    );
}
