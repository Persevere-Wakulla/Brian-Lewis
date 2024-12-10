
import { useState } from 'react';
import Back from './Back';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [category, setCategory] = useState('');
    const [item, setItem] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [imageUp, setImageUp] = useState({});
    const navigate = useNavigate();
    const handleSave = () => {
        const data = {
            category,
            item,
            price,
            location,
            name,
            email,
            phone,
            imageUp,
        };
        setLoading(true);

        fetch("http://localhost:3000/briansLists", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(() => {
                setLoading(false);
                navigate('/home');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened.Please Check console');
                console.log(error);
            });
    };
    return (
        <div className='addContainer'>
            <Back />
            {loading ? <Spinner /> : ''}
            <div className='newEntry'>
                <div className=''>
                    <h1 className=''>Create</h1>
                    <select className='' onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Category</option>
                        <option value="auto">auto</option>
                        <option value="electronic">electronic</option>
                        <option value="furniture">furniture</option>
                        <option value="sports">sports</option>
                    </select>
                </div>
                <div className='text-black'>
                <input
                    type='text'
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    placeholder='Item...'
                    />
                <input
                    type='text'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder='Price...'
                    />
                <input
                    type='text'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder='Location...'
                    />
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name...'
                    />
                <input
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email...'
                    />
                <input
                    type='text'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Phone...'
                    />
                <input
                    type='file'
                    value={imageUp.name}
                    onChange={(e) => {
                        console.dir(e.target.value)
                        setImageUp(`images/${e.target.value.slice(12)}`)
                    }}
                    />
                    </div>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
export default Create