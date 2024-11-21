import React from "react";
import Banner from "../../Components/Banner/Banner";
import BackgroundAbout from "../../Assets/banner/BannerAbout.png"
import "./AboutPage.scss"
import Collapse from "../../Components/Collapse/Collapse";
import aboutJson from "../../Data/about.json"


function AboutPage() {

    return (

        <div>

             <Banner bannerImage={BackgroundAbout} alt="Banner About" />
             <div className="collapse">
                {aboutJson.map(({title, description}, index) => (
                    <Collapse key={`${title}-${index}`}
                    title={<h2 className="about-title">{title}</h2>}
                    description={description}
                    />          
               ) )}

            </div>
        </div>
    )
}

export default AboutPage