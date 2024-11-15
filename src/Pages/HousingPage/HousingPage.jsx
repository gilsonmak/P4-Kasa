import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../Data/logements.json"
import Carrousel from "../../Components/Carrousel/Carrousel";



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
            <h1>{logement.title}</h1>
            <p> Description :{logement.description}</p>
        </div> 
       
    )
}
export default HousingPage