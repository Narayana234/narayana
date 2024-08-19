import { Component } from "react";
import ReactPlayer from "react-player";
class App extends Component {
    render() {
        return (
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
              <ReactPlayer url="https://www.youtube.com/watch?v=N8IkK7FjCgw"/>
            </div>
        );
     
}
