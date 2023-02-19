import React from "react";

const Pagination=({totalPosts,postsPerPage,setCurrentPage})=>{
let pages=[];
for(let i=1;i<=Math.ceil(totalPosts/postsPerPage); i++){
    pages.push(i);
}

const button={
    
    width: "30px",
    height: "27px",
    borderRadius: "4px",
    marginRight: "10px",
    border: "none",
    backgroundColor: "black",
    color: "white",
    marginBottom: "5px",
    
}
    return(
        <>
        <div className="Pagination-btn" style={{textAlign:"center",padding: "20px 0px 10px 0px"}}>
   {
        pages.map((page,index)=>{
            return <button style={button} key={index} onClick={()=>setCurrentPage(page)} >{page}</button>
        })
    }
        </div>
        </>
    )
}

export default Pagination;