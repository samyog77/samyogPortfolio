import createProjectImg1 from "../assets/createProjectApp_Image/createProject1.png"
import createProjectImg2 from "../assets/createProjectApp_Image/createProject2.png"
import createProjectImg3 from "../assets/createProjectApp_Image/createProject3.png"
import createProjectImg4 from "../assets/createProjectApp_Image/createProject4.png"
import './CreateProjectApp'
import { useState } from "react"


export default function({onClose}){
    const images = [
        createProjectImg1,
        createProjectImg2,
        createProjectImg3,
        createProjectImg4,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    function handleNext() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    function handlePrev() {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    return (
        <>
            <div className='header'>
                <h1>Create Project App</h1>
                <button className='closeResturantApp' onClick={onClose}>Close</button>
            </div>

            <div className="resturantApp">
                <button className="prev" onClick={handlePrev}>&#10094;</button> {/* Left Arrow */}
                <img src={images[currentIndex]} alt="restaurant app image" className="swipeable-image" />
                <button className="next" onClick={handleNext}>&#10095;</button> {/* Right Arrow */}
            </div>
        </>
    );
}