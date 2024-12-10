import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from './BackButton';
import Spinner from './Spinner';

function ShowWanted() {
    const [wantedList, setWantedList] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchWantedLists = async () => {
            const request = await fetch(`http://localhost:3000/wantedLists/${id}`);
            const result = await request.json();

            if (result) {
                setWantedList(result)
                setLoading(false);
            } else {
                console.error()
            }
        }
        setLoading(true);
        fetchWantedLists();

    }, [id]);


    return (
        <div className='details'>
            <BackButton />
            {loading ? (
                <Spinner />
            ) : (
                <div className='detailsContainer'>
                    <span>Id: {`${wantedList._id}`}</span>
                    <span>Item: {`${wantedList.item}`}</span>
                    <span>name: {`${wantedList.name}`}</span>
                    <span>phone: {`${wantedList.phone}`} </span>
                    <span>price: ${`${wantedList.price}`}</span>
                    <span>Create Time: {new Date(wantedList.createdAt).toString()}</span>
                </div>
            )}
        </div>

    )
}

export default ShowWanted