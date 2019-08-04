import React from 'react';
import './cartao.scss';

export default function Cartao({ param, url }) {
    return (
        <div className="card">
            <div className="card-container">
                <div className="foto-container">
                    <img src={ url } alt="" className="foto-card" />
                </div>
                <div className="text-card">
                    <span>
                        { param }
                    </span>
                </div>
            </div>
        </div>
    );
}