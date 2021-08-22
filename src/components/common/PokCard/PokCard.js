import axios from 'axios';
import React, { useState , useEffect } from 'react'
import Modal from '../Modal/Modal';
import '../PokCard/PokCard.css';


function PokCard(data) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [name, setName] = useState(data.name)
    const [height, setHight] = useState(null);
    const [weight, setWight] = useState(null);
    const [attack, setAttack] = useState(null);
    const [hp, setHp] = useState(null);
    const [image, setImage] = useState('');

    const getData = async () => {
        await axios.get(data.url)
        .then(res => {
            data = res.data;
            console.log(data)
            setHight(data.height)
            setWight(data.weight)
            setAttack(data.stats[1].base_stat)
            setHp(data.stats[0].base_stat)
            setImage(data.sprites.other.dream_world.front_default)
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='PokCard' onClick={() => setIsPopupOpen(!isPopupOpen)}>
            <img className={'card-img'} src = {image} alt={name}/>
            <div className='PokCard__title'>
                <h1>{name}</h1>
                <h5>{`#${data.index} `}</h5>
            </div>
            {isPopupOpen? <Modal name={name} number = {data.index}  weight={weight} height={height} hp={hp} attack ={attack} imageURL={image} ></Modal>: <></> }
        </div>

    )
}

export default PokCard;