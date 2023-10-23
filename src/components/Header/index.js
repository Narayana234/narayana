import { Link } from "react-router-dom"
import "./index.css"

const Header = () =>(
     <div className = "main-cont">
           <img src = "./images/ln.jpg" alt="img" className="header-img"/>
           <ul className="h-ul">
            
            <li > <Link to="/" className="h-li">Home</Link></li>
            <li > <Link to="/skills" className="h-li">Skills</Link></li>
            <li> <Link to="/project" className="h-li">Projects</Link></li>
            <li > <Link to="/youtube" className="h-li">Youtube</Link></li>
            <li > <Link to="/contacts" className="h-li">Contacts</Link></li>
           </ul>
     </div>
)

export default Header