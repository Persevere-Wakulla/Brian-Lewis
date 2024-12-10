import { useState } from 'react'
import BackJobs from './BackJobs';
import Spinner from './Spinner';
import { useNavigate, useParams } from 'react-router-dom';

function DeletJobs() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const handleDeleteJobs = () => {
        setLoading(true);
        fetch(`http://localhost:3000/jobsLists/${id}`, {
            method: "Delete"
        })
            .then(() => {
                setLoading(false);
                navigate('/jobs')
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happend. Please check console')
                console.log(error)
            });
    }
    return (
        <div className='deleteContainer'>
            <BackJobs />
            {loading ? <Spinner /> : ''}
            <div className='delete'>
                <h1 className='text-3xl my-4'>Delete jobs</h1>
                <h4 className='text-2xl'>Are You Sure You Want To Delete This Job?</h4>
                <button onClick={handleDeleteJobs}>Yes,Delete It !!</button>
            </div>
        </div>
    )
}

export default DeletJobs