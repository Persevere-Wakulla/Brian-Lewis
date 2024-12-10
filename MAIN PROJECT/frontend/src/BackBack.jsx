import { Link } from 'react-router-dom';

function BackBack({ destination = '/' }) {
    return (
        <div className='back'>
        <Link to={destination}>👈🏻</Link>
    </div>
    )
}

export default BackBack