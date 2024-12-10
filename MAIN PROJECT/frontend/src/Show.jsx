import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Back from './Back';
import Home from './Home';
import Spinner from './Spinner';
function Show() {
    const [briansList, setBriansList] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        const fetchBriansList = async () => {
            const request = await fetch(`http://localhost:3000/briansLists/${id}`);
            const result = await request.json();

            if (result) {
                setBriansList(result)
                setLoading(false);

            } else {
                console.error()
            }
        }
        setLoading(true)
        fetchBriansList()

    }, [id]);

    return (
        <div id='show'>
            {loading ? (
                <Spinner />
            ) : (
                <div className='text homepage'>
                    <Back />

                    <img className='currentImg' src={`/${briansList.imageUp}`} alt="" />
                    <div className='currentImgInfo'>
                        <div>
                            <span>Category: </span>
                            <span>{`${briansList.category}`}</span>
                        </div>
                        <div>
                            <span>Item: </span>
                            <span>{`${briansList.item}`}</span>
                        </div>
                        <div>
                            <span>Price: </span>
                            <span>{`${briansList.price}`}</span>
                        </div>
                        <div>
                            <span>Location: </span>
                            <span>{`${briansList.location}`}</span>
                        </div>
                        <div>
                            <span>Name: </span>
                            <span>{`${briansList.name}`}</span>
                        </div>
                        <div>
                            <span>Email: </span>
                            <span>{briansList.email}</span>
                        </div>
                        <div>
                            <span>Phone: </span>
                            <span>{briansList.phone}</span>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}

export default Show