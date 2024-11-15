import React, {useState} from "react";
import previousArrow from "../../Assets/arrow/previous.png"
import nextArrow from "../../Assets/arrow/next.png"
import "./Carrousel.scss"



const Carrousel = ({pictures}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlide = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === pictures.length -1 ? 0 : prevIndex +1

    );
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === 0 ? pictures.length -1 : prevIndex -1

    );
    };

    return (
        <div className="carousel">
          {pictures.length > 1 && (
            <img
            src={previousArrow}
            onClick={prevSlide} 
            alt="Précédent" 
            className="previous-arrow arrow-img"
            />

          )}
          <img
            src={pictures[activeIndex]}
            alt={`Slide ${activeIndex}`}
            className="carousel__img"
          />

           {pictures.length > 1 && (

            <img
            src={nextArrow}
            onClick={nextSlide} 
            alt="Suivant" 
            className="next-arrow arrow-img"
            />

          )}
        
        </div>
      );
}


export default Carrousel