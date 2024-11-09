import React from "react";
import Banner from "../../Components/Banner/Banner";
import BackgroundHome from "../../Assets/banner/BannerHome.png"
import Card from "../../Components/Card/Card";
import logements from "../../Data/logements.json"
import "./HomePage.scss"

function HomePage() {

    return (

        <div>
            <Banner bannerImage={BackgroundHome} bannerText="Chez vous, partout et ailleurs" />
            <div className="card-container">
                {logements.map((logement) => (
                    <Card 
                    key={logement.id}
                    id={logement.id}
                    title={logement.title}
                    cover={logement.cover}

                    />
                )
            )}
            </div>
        </div>
    )
}

export default HomePage