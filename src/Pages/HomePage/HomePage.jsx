import React from "react";
import Banner from "../../Components/Banner/Banner";
import BackgroundHome from "../../Assets/banner/BannerHome.png"
import Card from "../../Components/Card/Card"



function HomePage() {

    return (

        <div>
            <Banner bannerImage={BackgroundHome} bannerText="Chez vous, partout et ailleurs" />
            <Card />
          
        </div>
    )
}

export default HomePage