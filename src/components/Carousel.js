import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { carousel, carousel__container, carousel__image, active, carousel__button, boxStrelice  } from '../assets/css/carousel.module.css'

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className={`${carousel}`}>
        <div className={`${carousel__container}`}>
            {images.map((image, index) => (
                <GatsbyImage
                    key={index}
                    image={getImage(image)}
                    alt={`Image ${index + 1}`}
                    className={`${carousel__image} ${index === currentIndex ? `${active}` : ""}`}
                />
            ))}
        </div>

        <div className={`${boxStrelice}`}>
            <button onClick={handlePrevClick} className={`${carousel__button}`}>
                &#8592;
            </button>
            <button onClick={handleNextClick} className={`${carousel__button}`}>
                 &#8594;
            </button>
        </div>
    </div>
  )
}

export default Carousel
