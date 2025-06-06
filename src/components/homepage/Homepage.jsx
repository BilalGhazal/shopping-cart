import homepage from "./homepage.module.css"
import image1 from "../../assets/image-1.jpg"
import image2 from "../../assets/image-2.jpg"
import image3 from "../../assets/image-3.jpg"



function Homepage() {
    return (
        <div className={homepage.homepage}>
            <p className={homepage.mainTitle}> Fashion that goes <span className={homepage.highlight}>HARD</span></p>
            <div className={homepage.images}>
                <img src={image1}/>
                <img src={image2}/>
                <img src={image3}/>
            </div>
        </div>
    )
}


export default Homepage