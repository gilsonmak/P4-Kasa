import React from "react";
import { useParams, Navigate } from "react-router-dom";
import logements from "../../Data/logements.json"
import Carrousel from "../../Components/Carrousel/Carrousel";
import "./HousingPage.scss"
import Tags from "../../Components/Tags/Tags";
import Ratings from "../../Components/Ratings/Ratings";
import Collapse from "../../Components/Collapse/Collapse";




function HousingPage() {

    const {id} = useParams();
    console.log(id)

    const logement = logements.find(logement => logement.id === id);

   if (!logement) {
        return <Navigate to="/*" />
    } 

    return (
        <main>
            <Carrousel pictures={logement.pictures} />
        {/*    <h1>{logement.title}</h1>
            <p> Description :{logement.description}</p>*/}
            <div className="property-details">
                <div className="title-location-container">
                    <div className="property-title">
                        {logement.title}
                    </div>
                    <div className="property-location">
                        {logement.location}
                    </div>
                    <div className="tags-container">
                        <Tags tags={logement.tags}  />
                    </div>
                </div>
                <div className="host-container">
                    <div className="name-picture">
                        <p className="host-name">
                            {logement.host.name.split(' ')[0]} <br />
                            {logement.host.name.split(' ')[1]}
                        </p>
                        <img className="host-picture" src={logement.host.picture} alt={logement.title} />
                    </div>

                    <div className="rating-container">
                        <Ratings rating={logement.rating} className="ratings" />
                    </div>

                </div>
            </div>
            <div className="collapse-section">
                  
                <Collapse title="Description" className="collapse-title" description={logement.description} 
                
                />

                <Collapse
                title="Équipements" className="collapse-title"
                description={
                    <ul className="list-equipement">
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                }
            />
               
            </div> 
        </main> 
       
    )
}
export default HousingPage