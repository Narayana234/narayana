import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Skills from './components/Skills';
import Project from './components/Project';
import Youtube from './components/Youtube';
import Contacts from './components/Contacts';
import MessageMe from './components/MessageMe';
import All from './All';
import LightDarkMode from './components/LightDarkMode';
import SimpleTodos from './components/SimpleTodos';
import GoogleSuggestions from './components/GoggleSuggestions';
import ClickCounter from './ClickCounter';
import Speedometer from './components/Speedometer';
import Gallery from './components/Gallery';
import './App.css';



function App() {
    
  const suggestionsList = [
    {
      id: 1,
      suggestion: 'Amazon',
      url:
        'https://www.google.com/search?q=amazon&oq=amazon&aqs=chrome.0.35i39i650j46i67i131i199i433i465i650j35i39j0i67i131i433i650j0i67i650j0i67i131i433i650j0i67i650j5.3500j0j7&sourceid=chrome&ie=UTF-8',
    },
    {
      id: 2,
      suggestion: 'Facebook',
      url:
        'https://www.google.com/search?q=facebook&oq=Facebook&aqs=chrome.0.35i39i355i650j46i39i199i465i650j0i67i650l4j0i67i131i433i650j0i67i650l2j46i67i175i199i650.1277j0j7&sourceid=chrome&ie=UTF-8',
    },
    {
      id: 3,
      suggestion: 'Instagram',
      url:
        'https://www.google.com/search?q=instagram&oq=Instagram&aqs=chrome.0.69i59j69i64j0i131i433i512j0i67i650j0i131i433i512j0i67i650j69i60l2.2812j0j7&sourceid=chrome&ie=UTF-8',
    },
    {
      id: 4,
      suggestion: 'Pdf convertor',
      url:
        'https://www.google.com/search?q=pdf+converter&oq=Pdf+C&aqs=chrome.2.69i57j0i67i131i433i650l4j69i60l3.4807j0j7&sourceid=chrome&ie=UTF-8',
    },
    {
      id: 5,
      suggestion: 'What is AI',
      url:
        'https://www.google.com/search?q=what+is+ai&oq=what+is+AI&aqs=chrome.0.0i433i512j0i131i433i512l2j0i433i650j0i131i433i650j0i433i512j0i512j69i61.4820j0j7&sourceid=chrome&ie=UTF-8',
    },
    {
      id: 6,
      suggestion: 'cricket world cup',
      url:
        ' https://www.google.com/search?q=cricket+world+cup&oq=cricket+world+cup&aqs=chrome..69i57j0i271.490j0j7&sourceid=chrome&ie=UTF-8',
    },
    {
      id: 7,
      suggestion: 'video editor',
      url:
        'https://www.google.com/search?q=video+editor&oq=vide&aqs=chrome.2.69i57j35i39i650j0i67i433i650l2j0i67i650j69i65j69i60l2.2439j0j7&sourceid=chrome&ie=UTF-8',
    },
    {
      id: 8,
      suggestion: 'chatgpt',
      url:
        'https://www.google.com/search?q=chatgpt&oq=chatgpt&aqs=chrome..69i57j0i67i650j0i433i512j0i131i433i512j0i67i131i433i650j69i61l2j69i60.2468j0j7&sourceid=chrome&ie=UTF-8',
    },
    {
      id: 9,
      suggestion: 'Bgmi',
      url:
        'https://www.google.com/search?q=bgmi&oq=Bgmi&aqs=chrome.0.0i67i355i433i650j46i67i433i650j0i433i512j0i67i433i650j0i433i512j0i67i650j0i433i512j5.1256j0j7&sourceid=chrome&ie=UTF-8',
    },
  ]
     return(
      <div className='cont'>
         <BrowserRouter>
          <Header/>
            <Routes>
              <Route path = "/" element = {<All/>}/>   
              <Route path = "/skills" element = {<Skills/>}/>
              <Route path = "/project" element = {<Project/>}/>
              <Route path = "/youtube" element = {<Youtube/>}/>
              <Route path = "/contacts" element = {<Contacts/>}/>
              <Route path = "/message" element= {<MessageMe/>}/>
              <Route path ="/goggle" element={<GoogleSuggestions suggestionsList={suggestionsList} />}/>
              <Route path ="/gal" element={<Gallery/>}/>
              <Route path = "/click" element= {<ClickCounter/>}/>
              <Route path = "/speed" element = {<Speedometer/>}/>
              <Route path ="/light" element = {<LightDarkMode/>}/>
              <Route path ="/todo" element = {<SimpleTodos/>}/>
            </Routes>
          </BrowserRouter>
      </div>
     )
}

export default App;
