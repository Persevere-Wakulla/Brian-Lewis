import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import { ProfileContext } from './RootLayout';
export default function Jobs() {
    const currentProfile = useContext(ProfileContext)
    const [jobsLists, setJobsLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
        const fetchJobsLists = async () => {
            const request = await fetch('http://localhost:3000/jobsLists');
            const result = await request.json();
            console.log(result)
            if (result.data) {
                setJobsLists(result.data)
            } else {
                console.error()
            }
        }
        if (loading) {
            fetchJobsLists()
        }
        setLoading(false)
    }, [loading]);

    return (
        <div >
            {loading ? (
                <Spinner />
            ) : (
                <div className='a'>
                    <Link className='add' to='/createjobs'>create</Link>
                    {jobsLists.map((jobsList) => (
                        <ul className='jobs jobpage' key={jobsList._id} >
                            <img className='imag' src={jobsList.imageUp} alt='didnt' />
                            <li>Company<p>{jobsList.company}</p></li>
                            <li>Position<p>{jobsList.position}</p></li>
                            <li>Contract<p>{jobsList.contract}</p></li>
                            <div className='infoDelete'>
                                <Link to={`/detailsJobs/${jobsList._id}`}>
                                    <h3 className=''>Info</h3>
                                </Link>
                                {currentProfile.admin &&
                                    <Link to={`/deleteJobs/${jobsList._id}`}>
                                        <h3 className=''>Delete</h3>
                                    </Link>
                                }
                            </div>
                        </ul>
                    ))}
                </div>
            )}
        </div>
    )
}
