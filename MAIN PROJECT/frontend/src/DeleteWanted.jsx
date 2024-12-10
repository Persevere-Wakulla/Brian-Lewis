import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from './BackButton';
import Spinner from './Spinner';

function DeleteWanted() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const handleDeleteWantedList = () => {
        setLoading(true);

        fetch(`http://localhost:3000/wantedLists/${id}`, {
            method: "Delete"
        })
            .then(() => {
                setLoading(false);
                navigate('/')
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happend. Please check console')
                console.log(error)
            });
    }
    return (
        <div className='deleteContainer'>
            <BackButton />
            {loading ? <Spinner /> : ''}
            <div className='delete'>
                <h1>Delete WantedList</h1>
                <h4>Are You Sure You Want To Delete This Wanted List?</h4>
                <button onClick={handleDeleteWantedList}>Yes,Delete It !!</button>
            </div>
        </div>
    )}
export default DeleteWanted