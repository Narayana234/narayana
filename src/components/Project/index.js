import { Link } from "react-router-dom"
import  "./index.css"

const Project = () =>(
    <div className="project-cont">
        <h1 className ="pro-cont">My Projects</h1>
        <ul className="pro-ul"> 
        <Link to="/gal">
        <li className="pro-li">
            <img src ="./images/gallary_app.png" alt="gal" className="pro-img"/> 
            <h2> Gallery App</h2></li>
        </Link>
        <Link to="/click">
        <li className="pro-li">
            <img src ="./images/clickcounter.png" alt="gal" className="pro-img"/> 
            <h2> Click Counter</h2></li>
        </Link>
        <Link to="/speed">
        <li className="pro-li">
            <img src ="./images/speedometer.png" alt="gal" className="pro-img"/> 
            <h2> speedoMeter</h2></li>
        </Link>

        <Link to="/goggle">
        <li className="pro-li">
            <img src ="./images/google_suggestion.png" alt="gal" className="pro-img"/> 
            <h2> Google Suggestion</h2></li>
        </Link>
       <Link to="/light">
    <li className="pro-li">
            <img src ="./images/Light_Dark.png" alt="gal" className="pro-img"/> 
            <h2> Light Dark Mode</h2></li>
    </Link> 
    <Link to="/todo">
    <li className="pro-li">
            <img src ="./images/simpleTodos.png" alt="gal" className="pro-img"/> 
            <h2> SimpleTodos</h2></li>
    </Link>
                  
        </ul>
    </div>
)

export default Project