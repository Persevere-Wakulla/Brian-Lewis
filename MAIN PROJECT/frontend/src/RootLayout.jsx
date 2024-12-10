import React, { useRef, createContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
export const ProfileContext = createContext()

export default function RootLayout() {

    const navigate = useNavigate()
    const [currentProfile, setCurrentProfile] = useState(null);
    const [signUp, setSignUp] = useState(false)
    const [navBar, setNavBar] = useState(true)

    useEffect(() => {
        const profile = JSON.parse(sessionStorage.getItem('profile'))
        if (profile) {
            setCurrentProfile(profile)
        }
    }, [])

    function handleLogin(e) {
        e.preventDefault()
        console.log("log In Hitter")
        const data = new FormData(e.target)
        const userLogin = {}
        for (const info of data) {
            userLogin[info[0]] = info[1]
        }
        fetch('http://localhost:3000/profile/login', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(userLogin),
            headers: {
                'content-type': 'application/json'
            },
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.message) { setCurrentProfile(null) }
            else {
                setCurrentProfile(data)
                sessionStorage.setItem('profile', JSON.stringify(data))
            }
        })
    }

    function handleLogout() {
        navigate('/')
        setCurrentProfile(null)
        sessionStorage.removeItem('profile')
    }

    async function handleSignUp(e) {
        e.preventDefault()
        console.log("Sign Up Hitter")
        const data = new FormData(e.target)
        const userInfo = {}
        console.log(userInfo)
        for (const info of data) {
            userInfo[info[0]] = info[1]
        }
        await fetch('http://localhost:3000/profile/signUp', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }).then((res) => console.log(res.json)).then(data => {
            setCurrentProfile(data)
            sessionStorage.setItem('profile', JSON.stringify(data))
            setSignUp(false)
        })
    }

    useEffect(() => {
        window.onresize = () => {
            if (window.innerWidth > 600) {
                setNavBar(true)
            } else {
                setNavBar(false)
            }
        }
    }, [])

    const dropdown = () => {
        setNavBar(!navBar)
    }

    return (<>
        <div className="topnav">
            <h1 className='pageTitle logo'>B's List</h1>
            {!currentProfile ? (
                <div className="login-container">
                    <form onSubmit={handleLogin}>
                        <input type="text" id='un' placeholder="email" name="email" required />
                        <input type="text" placeholder="Password" id='psw' name="password" required />
                        <br />
                        <button className='logoutBtn'>Login</button>
                    </form>
                    <button className='signup logoutBtn' onClick={() => setSignUp(true)}>Create</button>
                </div>
            ) : (
                <div id="inner-nav" onClick={dropdown}>
                    {navBar ?
                        (<div id="headerBtns" className='headerBtns'>
                            <Link to='/home'>4 $sale</Link>
                            <Link to="/jobs"> to Jobs</Link>
                            <Link to="/wanted">to Want</Link>
                            <button className='logoutBtn' onClick={handleLogout} type='button'>
                                Log_ Out</button>
                        </div>)
                        :
                        (<div id="burger">
                            <div className='bar1'></div>
                            <div className='bar2'></div>
                            <div className='bar3'></div>
                        </div>)
                    }
                </div>
            )}
            {signUp && (<div id="id01" className="modal1">
                <span onClick={() => setSignUp(false)} className="close" title="Close Modal">&times;</span>
                <form className="modal-content" action="/page" onSubmit={handleSignUp}>
                    <div className="container">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />
                        <div className='container1'>
                            <input type='text' name='username' placeholder='username' />
                            <br />
                            <input type="text" placeholder="Enter Email" name="email" required />
                            <input type="password" placeholder="Enter Password" name="password" required />
                            <input type="password" placeholder="Repeat Password" name="p" required />
                        </div>
                        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                        <div className="clearfix">
                            <button type="button" onClick={() => setSignUp(false)} className="cancelbtn">Cancel</button>
                            <button type="submit" className="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>)}
        </div>
        <main>
            <ProfileContext.Provider value={currentProfile}>
                <Outlet />
            </ProfileContext.Provider>
        </main>
    </>)
}