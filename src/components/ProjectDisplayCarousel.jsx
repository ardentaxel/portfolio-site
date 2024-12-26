import React, {useState} from 'react'
import '../styles/ProjectsStyles/ProjectDisplayCarouselStyles.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


const ProjectDisplayCarousel = ({data}) => {
  const [slide,setSlide] = useState(0);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState('');

  const nextSlide = () => {
    if(slide === data.length-1){
      setSlide(0);
    }else {
      setSlide(slide + 1);
    }
  }

  const prevSlide = () => {
    if(slide === 0){
      setSlide(data.length-1);
    }else {
      setSlide(slide - 1);
    }
    
  }

  const openEnlargedImage = (img) => {
      setEnlargedImage(img);
      setIsImageEnlarged(true);
  }

  const closeEnlargedImage = () => {
    setIsImageEnlarged(false);
  }

  return (
    <div className='carousel'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
      {
        data.map((item,index) => {
          return <img 
              src={item.src} 
              key={index} 
              className={slide === index ? 'slide' : 'slide slide-hidden'}
              onClick={() => openEnlargedImage(item.src)}
          ></img>
        })
      }
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>

      {isImageEnlarged && (
        <div className='enlargedImageView' onClick={closeEnlargedImage}>
          <img src={enlargedImage} alt="Enlarged view" className="enlarged-image" />
        </div>
      )}
    </div>
  )
}

export default ProjectDisplayCarousel
