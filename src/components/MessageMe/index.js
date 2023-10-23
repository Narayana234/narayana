import {Component} from "react"

import "./index.css"

class MessageMe extends Component{
    state = {
        mesg: "",
        name :"",
        email:"",
        listCount:[],
        count : 0,
        isSubmit : false
    }

   submited = (event) =>{
      const {mesg,name,email,listCount,count} = this.state;
      const obj = {mesg,name,email,count};
      listCount[count] = obj;
      this.setState((prevState) =>({
         count : prevState.count + 1 ,
         isSubmit :!prevState.isSubmit 
      }))
      event.preventDefault();
   }
   btnClicked = () =>{
    this.setState((prevState) =>(
        {isSubmit : !prevState.isSubmit}
    ))
   }
    render(){
        const {isSubmit} = this.state;
        if(isSubmit){
           return(
            <div style={{display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"100px"}}>
                <img src = "./images/thank.png" alt ="thank you" style={{width:"50%"}}/>
                <button onClick={this.btnClicked} style={{marginBottom:"40px"}}> Message again</button>
            </div>
           )
             }
             else{
                return(
                    <div className="container">
                        <h1> Message Here!</h1>
                    <form onSubmit={this.submited}>
                      <div className="row">
                        <div className="col-25">
                          <label for="fname">Your Name</label>
                        </div>
                        <div className="col-75">
                          <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange = {(event) =>{this.setState({name : event.target.value})}}/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-25">
                          <label for="fnam">Email</label>
                        </div>
                        <div className="col-75">
                          <input type="email" id="fnam" name="firstname" placeholder="Your Email.." onChange = {(event) =>{this.setState({email : event.target.value})}} style={{   width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    resize: "vertical"}}/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-25">
                          <label for="country">Country</label>
                        </div>
                        <div className="col-75">
                          <select id="country" name="country">
                            <option value="australia">India</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-25">
                          <label for="subject">Message Me</label>
                        </div>
                        <div className="col-75">
                          <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}} onChange = {(event) =>{this.setState({mesg : event.target.value})}}/>
                        </div>
                      </div>
                      <div className="row">
                        <input type="submit" value="Submit"/>
                      </div>
                    </form>
                  </div>
                )
             }
           
        }
       
    }
   
    

export default MessageMe