import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from './UseLocalstorage';
function Page() {
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage("BizNizLoggedIn", false);
    const [currentProfile, setCurrentProfile] = useLocalStorage("BizNizUser", "");
    const navigate = useNavigate()
    console.log(isLoggedIn);
    
    return (
        <div className='grid gap-2 text-center text-white'>
            <div className=''>
                <div className="topnav">
                    <h1 >Welcome</h1>
                    <p>Please choose a link below !</p>
                </div>
            </div>
            <div className='sect1'>
                <Link to='/home'>
                    <h3 className='border  hover:border-black bg-orange-600 hover:bg-yellow-500 hover:text-white'>To 4 Sale Page</h3>
                </Link>
                <Link to='/wanted'>
                    <h3 className='border hover:border-black bg-orange-600 hover:bg-yellow-600 hover:text-white'>To Wanted Page</h3>
                </Link>
                <Link to='/jobs'>
                    <h3 className='border hover:border-black bg-orange-600 hover:text-white hover:bg-red-600'>To Jobs Page</h3>
                </Link>
            </div>


            <footer className='footer'>
                <h1 className='bg-orange-600'>This APP was created by: Brian Lewis</h1>
            </footer>
        </div>


    )
}

export default Page