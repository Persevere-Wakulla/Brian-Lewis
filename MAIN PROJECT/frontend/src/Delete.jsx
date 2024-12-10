import { useState } from 'react'
import Back from './Back';
import Spinner from './Spinner';
import { useNavigate, useParams } from 'react-router-dom';

function Delet() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const handleDelete = () => {
        setLoading(true);

        fetch(`http://localhost:3000/briansLists/${id}`, {
            method: "Delete"
        })
            .then(() => {
                setLoading(false);
                navigate('/home')
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happend. Please check console')
                console.log(error)
            });
    }
    return (
        <div  className='deleteContainer'>
            <Back />
            {loading ? <Spinner /> : ''}
            <div className='delete'><h1 className=''>Delete </h1>
                <h4 className=''>Are You Sure You Want To Delete This Item?</h4>
                <button onClick={handleDelete}>Yes,Delete It !!</button>
            </div>
        </div>
    )
}

export default Delet