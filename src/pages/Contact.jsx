import './Contact.css'
import { useRef, useState } from 'react'
import linkedinImg from '../assets/linkedin-brands-solid.svg'
import facebookImg from '../assets/facebook-brands-solid.svg'
import instagramImg from '../assets/instagram-brands-solid.svg'
import githubImg from '../assets/github-brands-solid.svg'


export default function Contact(){
    const name = useRef();
    const email = useRef();
    const [messages, setMessages] = useState([]);

    function handleClick(){
        const newMessage = `Name: ${name.current.value}, Email: ${email.current.value}`;
        setMessages((prevMessages) => [...prevMessages, newMessage]);

    }
    
    return(
        <div className="container">
            <h1>Send me a message!</h1>
            <h2>Let's work together.</h2>
            <label>Your Name</label>
            <input type="text"  ref={name}/>
            <label>Email Address</label>
            <input type="email" ref={email}/>
            <button onClick={handleClick}>Send</button>
            <div className='messageList'>
                <ul>
                    {messages.map((message, index) => (
                        <li key ={index}>{message}</li>
                    ))}
                </ul>
            </div>
            <div className="social-img">
                <ul>
                    <li>
                        <a href="https://linkedin.com/in/samyog-dahal-89a647225" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinImg} alt="LinkedinImage" />
                        </a>
                        <a href="https://www.facebook.com/samyog.dahal" target="_blank" rel="noopener noreferrer">
                            <img src={facebookImg} alt="FacebookImage" />
                        </a>
                        <a href="https://www.instagram.com/sam.dc/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramImg} alt="InstagramImage" />
                        </a>
                        <a href="https://github.com/samyog77" target="_blank" rel="noopener noreferrer">
                            <img src={githubImg} alt="GithubImage" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>


    );
}