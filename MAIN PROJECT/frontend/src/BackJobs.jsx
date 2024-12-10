import { Link } from 'react-router-dom';

function BackJobs({ destination = '/jobs' }) {
    return (
        <div className='back'>
        <Link to={destination}>👈🏻</Link>
    </div>
    )
}

export default BackJobs