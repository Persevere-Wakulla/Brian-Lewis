import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
function AboutMe() {
    const navigate = useNavigate();
    const [bgColor,setBgColor] = useState('black')

    return (
        <div className='about' style={{backgroundColor: bgColor, color: bgColor === 'white' && 'black'}}>
            <div onClick={() => navigate('/')}>Go Back</div>
                <div>
                    <a className='gameBtn' href='smackacat\index-START.html'>Play Smack A Cat</a>
                    <br/>
                    <a className='gameBtn' href='canvas1\New Canvas\index.html'>Play Canvas</a>
                    <br/>
                    <a className='gameBtn' href='\turkey\index.html'>Turkey</a>
                    
                </div>
            <img className='proimg logo' src='\images\flags\flag.jpg'></img>
            <div><h1>Hi, i'm developer</h1>
                <h1 className='text'>Brian Lewis</h1></div>
            <div><p>I hope you enjoyed my capstone project,
                as much as i enjoyed building it.</p></div>
            <div className="dropup">
                <button className="dropbtn">ColorZ</button>
                <div className="dropup-content">
                    <button onClick={()=> setBgColor('red')}>red</button>
                    <button onClick={()=> setBgColor('white')}>white</button>
                    <button onClick={()=> setBgColor('blue')}>blue</button>
                    <button onClick={()=> setBgColor('black')}>black</button>
                    <button onClick={()=> setBgColor('purple')}>purple</button>
                    <button onClick={()=> setBgColor('green')}>green</button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe