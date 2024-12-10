import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ProfileContext } from './RootLayout';

function Top() {

    const currentProfile = useContext(ProfileContext)
    const modal = document.getElementById('id01');
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function handleModal() {
        document.getElementById("myModal").style.display = "block";
    }
    function handleSpan() {
        document.getElementById("myModal").style.display = "none";
    }

    return (
        <div>
            <div className='name1'>
                <h1>B's List</h1>
            </div>
            {currentProfile &&
                <div className='homeEntro'>
                    <h1>Welcome back <span className='greeting'>{currentProfile.username}</span></h1>
                </div>
            }
            {!currentProfile &&
                <div className='loginPageTabs'>
                    <h1 onClick={handleModal}>4 Sale</h1>
                    <h1 onClick={handleModal}>Wanted</h1>
                    <h1 onClick={handleModal}>Jobs</h1>
                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="close" onClick={handleSpan}>&times;</span>
                                <h2>Warning!!!</h2>
                            </div>
                            <div className="modal-body">
                                <p>You must Log In to view our site</p>
                                <p>Please Log In...</p>
                            </div>
                            <div className="modal-footer">
                                <h3>Warning!!!</h3>
                            </div>
                        </div>
                    </div>
                    <footer id='cuffs'>
                        <h4 className=''>Click Here :👉<Link to='/aboutMe'><u>Brian Lewis</u>👈</Link></h4>
                        <br /> <p>click here<i className='glow1'> ☝🏻 🔝 </i></p>
                        <img className='eagle' src='\images\flags\flag 2.jpg'></img>
                    </footer>
                </div>
            }
            {currentProfile && <div className='homePageOptions'>
                <section >
                    <div className='e'>
                        <Link className='eb' to="/home">4 Sale</Link>
                        <Link to="/jobs" className='eb' >Wanted</Link>
                        <Link to="/jobs" className='eb'>Jobs</Link>
<p>Plaese enjoy your experience here.</p>
<p className='text-5xl text-blue-400'>{currentProfile.username}</p>
                    </div>
                </section>
                {currentProfile.admin && <Link to='/admin'>Admin</Link>}
            </div>
            }
        </div>
    )
}
export default Top