import { Link } from 'react-router-dom';

function BackButton({ destination = '/wanted' }) {
    return (
        <div className='back'>
            <Link to={destination}>👈🏻</Link>
        </div>
    )
}

export default BackButton