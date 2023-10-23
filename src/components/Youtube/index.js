import "./index.css"

const Youtube = () => {

    const clickedLink = () =>{
        window.location.replace("https://www.youtube.com/channel/UCZVNGNyFZdhweu5MObu4vHg")
    }
    return(
        <div className="y-cont">
        <div className="you-mini-cont">
            <img src = "./images/youtube.png" className="you-img" alt="img-you"/>
            <h1 className="you-h1"> Youtube </h1>   
        </div> 
        <div className="you-second-cont">
               <div style={{marginRight:"60px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <h1 style={{textAlign:"center",color:"#ffffff",fontWeight:"bold",fontSize:"40px"}}> I'm a Youtuber</h1>
                    <p style={{textAlign:"center",marginLeft:"60px"}}> 

LN Skill Squad is not just a YouTube channel; it's a vibrant community dedicated to fostering a love for learning. We curate and produce high-quality educational videos that cover a wide array of topics, ensuring that learners of all ages and backgrounds find valuable, easy-to-understand content here. Whether you're a student, a professional looking to upskill, or someone simply curious about the world, LN Skill Squad has something for everyone.</p>
               <h3 style={{fontSize:"20px",fontWeight:"bold",textAlign:"center",cursor:"pointer"}}> Link : <span style={{color:"green",fontSize:"20px",cursor:"pointer"}} onClick={clickedLink}> https://www.youtube.com/channel/UCZVNGNyFZdhweu5MObu4vHg</span></h3>
                </div>
               <div>
                   <img src ="./images/youtubechannel.png" alt="ychannel" className="y-sec-img"/>
               </div>
        </div>
   </div>
    )
}
 

export default Youtube