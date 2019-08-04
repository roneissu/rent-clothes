import React, { useState, useEffect } from 'react';
import './modal.scss';

const dataIDBName = "vestidos";
const imagesIDBName = "vestidos_images";

export default function Modal({ resetParent }) {

    const [fotoDados, setFotoDados] = useState({
        id: 0,
        url: '',
        girar: false,
        name: '',
        identificador: '',
        selected: false,
    });

    useEffect(() => {
        const maxId = localStorage.getItem('max_id');
        if (maxId > 0){
            setFotoDados({
                id: localStorage.getItem('max_id'),
                url: '',
                girar: false,
                name: '',
                identificador: '',
                selected: false,
            })
        } else {
            setFotoDados({
                id: 0,
                url: '',
                girar: false,
                name: '',
                identificador: '',
                selected: false,
            })
        }
    }, []);

    function resetModal() {
        resetParent();
        setFotoDados({
            id: 0,
            url: '',
            girar: false,
            name: '',
            identificador: '',
            selected: false,
        });
    }

    function mostrarFoto(event) {
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
            setFotoDados({
                id: parseInt(fotoDados.id)+1,
                url: event.target.result,
                girar: false,
                name: '',
                identificador: '',
                selected: false,
            });
        }
        fileReader.readAsDataURL(event.target.files[0]);
    }

    function toggleStep() {
        setFotoDados({
            id: fotoDados.id,
            url: fotoDados.url,
            girar: fotoDados.girar,
            name: fotoDados.name,
            identificador: fotoDados.identificador,
            selected: !fotoDados.selected,
        });
    }

    function girarFoto() {
        setFotoDados({
            id: fotoDados.id,
            url: fotoDados.url,
            girar: !fotoDados.girar,
            name: fotoDados.name,
            identificador: fotoDados.identificador,
            selected: fotoDados.selected,
        });
    }

    function sendImage() {

        localStorage.setItem('max_id', fotoDados.id);

        localStorage.setItem('vestido_' + fotoDados.id,
            JSON.stringify(
                {
                    girar: fotoDados.girar,
                    url: fotoDados.url,
                    name: 'teste ' + fotoDados.id,
                    // name: fotoDados.name,
                    identificador: fotoDados.identificador,
                }
            )
        );

        saveDataIDB();
        saveImagesIDB();
        resetModal();
    }

    function saveDataIDB() {

        let request = indexedDB.open(dataIDBName, 1);

        request.onerror = (event) => {
            console.log('Erro', event);
        };

        request.onsuccess = (event) => {
            console.log('Sucesso', event);
        };
    }

    function saveImagesIDB() {

        let request = indexedDB.open(imagesIDBName, 1);

        request.onerror = (event) => {
            console.log('Erro', event);
        };

        request.onsuccess = (event) => {
            console.log('Sucesso', event);
        };
    
    }
    
    return (
        <div className="modal">
            <div>
                <label htmlFor="select-image">{ fotoDados.id > 0 ? 'Escolher foto' : 'Mudar foto'}</label>
                <input type="file" id="select-image" accept="image/*" onChange={e => mostrarFoto(e) } />
            </div>
            
            <div className={ (fotoDados.girar) ? "container-girar-foto" : "" }>
                <img src={ fotoDados.url } alt="" className="foto" />
            </div>
            {
                fotoDados.url === "" && !fotoDados.selected ? <></> :
                    <button onClick={ girarFoto } className="btn-girar-foto">
                        <img src="/images/seta_curva.svg" alt="" className={ fotoDados.girar ? "btn-seta" : "btn-seta-voltar" } />
                    </button>
            }

            <div className="navegacao">
                <button className="cancelar" onClick={ resetModal }>Cancelar</button>
                {
                    fotoDados.selected ? 
                        <button className={"enviar"} onClick={ sendImage } >Enviar</button> :
                        <button className="enviar" disabled={ fotoDados.id === 0 } onClick={ toggleStep } >OK</button>
                }
            </div>
        </div>
    );
}