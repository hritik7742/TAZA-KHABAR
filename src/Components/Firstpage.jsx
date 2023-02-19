import React from "react";
import './App.css';


const Firstpage = ({currentPosts}) =>{
// const data=props.data;
// console.log(data);
    return(
      <div className="pagefirst-innerbox">
     {
     
     currentPosts.map((elem,index)=>{
        return(
       

  
           <div key={index} className="inner-box1">
            <div>
              <div className="img-box"><img src={elem.urlToImage}  alt="Girl in a jacket" width="202" height="212"/></div>
                <span className="box-para">
                  {elem.title}
                </span>
                    </div>
                <a href={elem.url}>
                 <button className="Readmore-btn">Read More..</button>  
                 </a> 
            </div> 
          
         
        
        )
      })
         
}
</div>
        
    )
}

export default Firstpage;