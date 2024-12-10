import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import BackButton from './BackButton';

function CreateWanted() {
    const [item, setItem] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [price, setPrice] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [color, setColor] = useState('');
    const handleSaveWantedList = () => {
        const data = {
            item,
            name,
            phone,
            price,
        };
        setLoading(true);
        fetch("http://localhost:3000/wantedLists", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(() => {
                setLoading(false);
                navigate('/wanted');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened.Please Check console');
                console.log(error);
            });
    };
    return (
        <div className='addContainer'>
            <BackButton />
            {loading ? <Spinner /> : ''}
            <div className='newEntry text-black'>
                <h1>Create WantedList</h1>
                <input type='text' value={item} onChange={(e) => setItem(e.target.value)} placeholder='Item' />
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name...' />
                <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone...' />
                <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price...' />
                <button className='text-black p-2 bg-sky-300 m-8' onClick={handleSaveWantedList}>Save</button>
            </div>
        </div>
    )
}
export default CreateWanted