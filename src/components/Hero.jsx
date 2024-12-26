import React, {useState} from 'react'
import '../styles/HeroStyles/HeroStyles.css';
import TypeWriter from '../components/TypeWriter.jsx';


const Hero = () => {
    const [textRendered, setTextRendered] = useState(false);

    let heading = ' Axel Ndayiragije.';

    const handleTextRendered = () => {
        setTextRendered(true);
      };

    
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-content" >
          <div className="text">
          <h1 className='intro-header mono'>
            Hi👋, I'm 
            <TypeWriter 
              text={heading} 
              delay={90} 
              onTextRendered={handleTextRendered} 
              follower={true}
              color={"#EEEEEE"}/>
          </h1>
          {
            (textRendered) ? (
              <p className='intro-text mono'>
                <TypeWriter 
                  text={'A Software Developer👨🏽‍💻 that embraces challenges, builds solutions and maintains an insatiable thirst for learning.'} 
                  delay={35} 
                  follower={false}
                  color={"#20C20E"}/>
              </p>
            ) :
            <p></p>
          }
          </div>
          <a className="btn" href="https://drive.google.com/file/d/1B0ORWKFkZYHgjjJU97lq7OpX-1NM-i5x/view?usp=sharing">My resume</a>
        </div>
      </div>
    </div>
    
  )
}

export default Hero
