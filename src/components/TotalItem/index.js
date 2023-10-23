import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Project from './components/Project';
import Youtube from './components/Youtube';
import Contacts from './components/Contacts';
import MessageMe from './components/MessageMe';
import './index.css';

function TotalItem() {
     return(
      <div >
        <Header/>
        <Profile/>
        <Skills/>
        <Project/>
        <Youtube/>
        <Contacts/>
        <MessageMe/>
      </div>
     )
}

export default TotalItem;
