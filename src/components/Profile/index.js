import { Link } from "react-router-dom"

import  "./index.css"

const Profile = () =>(
    <div className = "p-cont">
          <div className="head-cont">
            <h3>
                I'm Full Stack Web developer
              
            </h3>
            <p>   Hello there! 👋 I'm Lakshmi Narayana, a passionate and results-driven full stack developer with a keen eye for detail and a knack for creating innovative digital solutions. With a strong foundation in both front-end and back-end technologies, I specialize in translating creative ideas into seamless, user-friendly applications.</p>
          <Link to="/message">
          <button> Message Me</button>
          </Link> 
          </div>
          <div>
            <img src ="./images/my_image.jpg" alt ="my_imag" className="img-cont"/>
          </div>
    </div>
)

export default Profile