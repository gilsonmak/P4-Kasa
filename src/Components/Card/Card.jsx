import React from "react";
import { Link } from "react-router-dom";
import logements from "../../Data/logements.json"
import "./Card.scss"



const Card = () => {
    return (
      <div className='cards'>
          {logements.map((logement)=>(
              <div key={logement.id}>
                  <Link to={`/housingpage/${logement.id}`}>
                      <div className="housing">
                          <img src={logement.cover} alt={logement.title} />
                          <h2>{logement.title}</h2>
                      </div>
                  </Link>
              </div>
          ))}
      </div>
    )
  }
  

export default Card