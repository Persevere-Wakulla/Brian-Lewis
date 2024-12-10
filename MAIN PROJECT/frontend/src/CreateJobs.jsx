
import { useState } from 'react';
import BackJobs from './BackJobs';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';

function CreateJobs() {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [role, setRole] = useState('');
    const [level, setLevel] = useState('');
    const [imageUp, setImageUp] = useState({});
    const [contract, setContract] = useState('');
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [newBanner, setNewBanner] = useState(false);
    const [hotBanner, setHotBanner] = useState(false);
    const navigate = useNavigate();
    const handleSaveJobsList = () => {
        const data = {
            company,
            position,
            role,
            level,
            contract,
            location,
            imageUp,
            newBanner,
            hotBanner,
        };
        setLoading(true);

        fetch("http://localhost:3000/jobsLists", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(() => {
                setLoading(false);
                navigate('/jobs');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened.Please Check console');
                console.log(error);
            });
    };
    return (
        <div className='addContainer'>
            <BackJobs />
            {loading ? <Spinner /> : ''}
            <div className='newEntry text-black'>
            <h1>Publish A Job</h1>
                    <input
                        type='text'
                        value={company}
                        onChange={(e) => setCompany(e.target.value)} placeholder='Company...' />
                    <input
                        type='text'
                        value={position}
                        onChange={(e) => setPosition(e.target.value)} placeholder='Position...' />
                    <select onChange={(e) => setRole(e.target.value)}>
                        <option value="">role</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Fullstack">Fullstack</option>
                        <option value="Backend">Backend</option>
                        <option value='Other'>Other</option>
                    </select>
                    <select onChange={(e) => setLevel(e.target.value)}>
                        <option value=''>level</option>
                        <option value='Senior'>Senior</option>
                        <option value='Midweight'>Midweight</option>
                        <option value='Junior'>Junior</option>
                        <option value='Other'>Other</option>
                    </select>
                    <select onChange={(e) => setContract(e.target.value)}>
                        <option value=''>contract</option>
                        <option value='Full Time'>Full Time</option>
                        <option value='Part Time'>Part Time</option>
                        <option value='Contract'>Contract</option>
                    </select>
                    <select onChange={(e) => setLocation(e.target.value)}>
                        <option value="">location</option>
                        <option value="USA Only">Usa Only</option>
                        <option value="Remote">Remote</option>
                        <option value="Worldwide">Worldwide</option>
                        <option value="UK Only">UK Only</option>
                    </select>
                    <input 
                        type='file'
                        value={imageUp.name}
                        onChange={(e) => {
                            console.dir(e.target.value)
                            setImageUp(`images/${e.target.value.slice(12)}`)
                        }}/>
                <button onClick={handleSaveJobsList}>Save</button>
            </div>
        </div>
    )}
export default CreateJobs