import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetices] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetices(data))
    }, [])
    return (
        <div>
            <h1>Cosmetic Shops</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic}></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;