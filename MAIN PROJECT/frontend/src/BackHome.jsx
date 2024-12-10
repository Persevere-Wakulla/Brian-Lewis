import { Link } from 'react-router-dom';

function BackHome({ destination = '/page' }) {
    return (
        <div className='back'>
            <Link to={destination}>👈🏻</Link>
        </div>
    )
}

export default BackHome