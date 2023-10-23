import "./index.css"

const Contacts = () =>{
    const imgClicked1 = () =>{
        window.location.replace("https://www.instagram.com/god_lucky_boy/")
    }
    const imgClicked2 = () =>{
        window.location.replace("https://www.facebook.com/profile.php?id=100067992199346")
    }
    const imgClicked3 = () =>{
        window.location.replace("https://www.linkedin.com/in/lakshminarayana-59245a247/")
    }
    const imgClicked4 = () =>{
        window.location.replace("https://twitter.com/Narayana7207")
    }

    return(
        <div style={{marginTop:"100px"}}>
        <hr
       style={{
         color: 'white',
         borderColor: 'white',
         marginBottom:"8px",
         marginLeft: "20px",
         marginRight:"20px"
       }}
     />
     <h1 style={{color:"white",fontWeight:"bold",textAlign:"center"}}> Contacts</h1>
     <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="f-img" className="c-img" onClick ={imgClicked1}/>
        <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="f-img" className="c-img" onClick ={imgClicked2}/>
         <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="f-img" className="c-img" onClick ={imgClicked3}/>
       <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="f-img" className="c-img" onClick ={imgClicked4}/>
       
      
        
     </div>
  </div>
    )
}
   

export default Contacts