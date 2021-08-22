import React from 'react'
import '../Modal/Modal.css';

export default function Modal({ name, number, weight, height, hp, attack, imageURL }) {

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h1 className='modal-title'>{name}</h1>
                    <h1 className='modal-title'>{`#${number}`}</h1>
                </div>
                <div className='modal-body row'>
                    <div className='image__container'>
                        <img className='modal-body--image' src={imageURL} alt={name}/>
                    </div>
                    <div className='column'>
                        <h2>{`Weight : ${weight}`}</h2>
                        <h2>{`Height : ${height}`}</h2>
                        <h2>{`HP : ${hp}`}</h2>
                        <h2>{`Attack : ${attack}`}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
