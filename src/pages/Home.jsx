import portfolioImg from '../assets/samyog_img.png'
import'./Home.css'

export default function Home(){
    return(
        <section id = "intro">
            <div className='inroContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'> I'm Samyog,<br/>Website 
                Developer</span><br/>
                <p className='introPara'>I am a skilled and passionate 
                web developer with experience in creating visually 
                appealing and user-friendly websites.</p><br/>
                <span className='download'>Download my,</span>
                <button className='resumeButton'>Resume</button>

            </div>
            <img src={portfolioImg} alt="samyog portfolio image" className="profile-image" />
        </section>
      
      
    );
}