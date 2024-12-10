import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import { ProfileContext } from './RootLayout';
export default function Home() {
    const currentProfile = useContext(ProfileContext)
    const [briansLists, setBriansLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('all');
    const [bgColor, setBgColor] = useState('black')

    useEffect(() => {
        const fetchBriansLists = async () => {
            const request = await fetch('http://localhost:3000/briansLists');
            const result = await request.json();
            if (result.data) {
                setBriansLists(result.data)
            } else {
                console.error()
            }
        }
        if (loading) {
            fetchBriansLists()
        }
        setLoading(false)
    }, [loading]);

    const handleFilter = (e) => {
        setCategory(e.target.value)
    }

    const handleSort = (e) => {
        let newList = briansLists.toSorted((a, b) => {
            if (a.category == e.target.textContent) { return -1 }
            else if (a.category != e.target.textContent) { return 1 }
            else if (a.category == b.category) { return 0 }
        })
        setBriansLists(newList)
    }

    return (
        <div style={{ backgroundColor: bgColor, color: bgColor === 'white' && 'black' }}>
            <div className='a text-yellow-400   '>
                <h1 className=''><i>Brians List</i></h1>
                <div className=''>
                    <select className='text-black' onChange={handleFilter}>
                        <option value="all">Filter</option>
                        <option value="auto">auto</option>
                        <option value="electronic">electronic</option>
                        <option value="furniture">furniture</option>
                        <option value="sports">sports</option>
                    </select>
                </div>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <div id='a' className='a'>
                    <Link className='add' to='/create'>create</Link>
                    {briansLists.map((briansList) => {
                        if ((category == 'all') || (category == briansList.category)) {
                            return (<ul className='forSale homepage' key={briansList._id}>
                                <Link to={`/details/${briansList._id}`}>
                                    <img className='tableImg' src={briansList.imageUp} />
                                </Link>
                                <li onClick={handleSort}>Catagory<p>{briansList.category}</p></li>
                                <li>Item<p>{briansList.item}</p></li>
                                <div className='infoDelete'>
                                    <Link to={`/details/${briansList._id}`}>
                                        <h3 className=''>Info</h3>
                                    </Link>
                                    {currentProfile.admin &&
                                    <Link to={`/delete/${briansList._id}`}>
                                        <h3 className=''>Delete</h3>
                                    </Link>
                                    }
                                </div>
                            </ul>)
                        }
                    })}
                </div>
            )}
        </div>
    )
}
