import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BackJobs from './BackJobs';
import Spinner from './Spinner';

function ShowJobs() {
    const [jobsLists, setJobsLists] = useState({});
    console.log(jobsLists);

    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchJobsLists = async () => {
            const request = await fetch(`http://localhost:3000/jobsLists/${id}`);
            const result = await request.json();

            if (result) {
                setJobsLists(result)
                setLoading(false);

            } else {
                console.error()
            }
        }
        setLoading(true)
        fetchJobsLists()

    }, [id]);

    return (
        <div className='details jobpage'>
            <div className='backBtns'>
                <Link to='/jobs'>👈🏻</Link>
            </div>

            {loading ? (
                <Spinner />
            ) : (
                <div className='detailsContainer'>

                    <span>Id: {`${jobsLists._id}`} </span>
                    <span>Company: {`${jobsLists.company}`}</span>
                    <span>Logo: {`${jobsLists.logo}`}</span>
                    <span>Position: {`${jobsLists.position}`}</span>
                    <span>role: {`${jobsLists.role}`}</span>
                    <span>Level: {`${jobsLists.level}`}</span>
                    <span>PostedAt: {`${jobsLists.postedAt}`}</span>
                    <span>Contract: {jobsLists.contract}</span>
                    <span>Location: {jobsLists.location}</span>

                </div>
            )}
        </div>
    )
}

export default ShowJobs