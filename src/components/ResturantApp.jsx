import { useState } from 'react';
import resturantAppImg from '../assets/resturantApp_Image/resturantAppImg.png';
import resturantAppImg1 from '../assets/resturantApp_Image/resturantAppImg1.png';
import resturantAppImg2 from '../assets/resturantApp_Image/resturantAppImg2.png';
import resturantAppImg3 from '../assets/resturantApp_Image/resturantAppImg3.png';
import resturantAppImg4 from '../assets/resturantApp_Image/resturantAppImg4.png';
import './ResturantApp.css';

export default function ResturantApp({ onClose }) {
    const images = [
        resturantAppImg,
        resturantAppImg1,
        resturantAppImg2,
        resturantAppImg3,
        resturantAppImg4,
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
                <h1>Resturant App</h1>
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
