import React, { useState } from 'react';
import './new.scss';

import Modal from './Modal';

export default function NewDress() {

    const [openModal, setOpenModal] = useState(false);

    function toggleModal() {
        setOpenModal(!openModal);
    }

    return (
        <>
            <button onClick={ () => setOpenModal(true) } className="mais card">
                <div className="border">
                    <div className="mais-vertical" />
                    <div className="mais-horizontal" />
                </div>
            </button>
            { openModal ? <Modal resetParent={ toggleModal } /> : <></> }
        </>
    );
}