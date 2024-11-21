import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../Data/logements.json"
import Carrousel from "../../Components/Carrousel/Carrousel";
import "./HousingPage.scss"
import Tags from "../../Components/Tags/Tags";



function HousingPage() {

    const {id} = useParams();
    console.log(id)

    const logement = logements.find(logement => logement.id === id);

   if (!logement) {
        return <div>Logement non trouvé</div>
    } 

    return (
        <div>
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
                        <p className="host-name">{logement.host.name}</p>
                        <img className="host-picture" src={logement.host.picture} alt={logement.title} />
                    </div>

                </div>
            </div>
        </div> 
       
    )
}
export default HousingPage