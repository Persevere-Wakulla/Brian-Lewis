import { Link } from 'react-router-dom';

function Back({ destination = '/home' }) {
    return (
        <div className='back'>
            <Link to={destination}>👈🏻</Link>
        </div>
    )
}

export default Back