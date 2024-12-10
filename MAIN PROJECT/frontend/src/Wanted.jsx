import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import { ProfileContext } from './RootLayout';
function Wanted() {
    const currentProfile = useContext(ProfileContext)
    const [wantedLists, setWantedLists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWantedLists = async () => {
            const request = await fetch('http://localhost:3000/wantedLists');
            const result = await request.json();
            if (result.data) {
                setWantedLists(result.data)
            } else {
                console.error()
            }
        }
        if (loading) {
            fetchWantedLists()
        }
        setLoading(false)
    }, [loading]);

    return (
        <div className='p-4  '>
            {loading ? (
                <Spinner />
            ) : (
                <div id='a' className=' a '>
                    <Link className='add' to='/createWanted'>create</Link>
                    {wantedLists.map((wantedList, index) => (
                        <ul className='wanted wantedpage' key={wantedList._id}>
                            <li>Item<p>{wantedList.item}</p></li>
                            <li>Name<p>{wantedList.name}</p></li>
                            <li>Phone<p>{wantedList.phone}</p></li>
                            <li>
                                <div className='infoDelete'>
                                    <Link to={`/detailsWanted/${wantedList._id}`}>
                                        <h3>Info</h3>
                                    </Link>
                                    {currentProfile.admin &&
                                    <Link to={`/deleteWanted/${wantedList._id}`}>
                                        <h3>Delete</h3>
                                    </Link>
                                    }
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
            )}
        </div>
    )
}
export default Wanted