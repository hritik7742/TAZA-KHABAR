
import React, { useEffect, useState } from "react";
import Firstpage from "./Firstpage";
import Pagination from "./Pagination";
import Navbar from "./Navbar";






const Apidata=() =>{
   const [currentdata,setcurrentdata]=useState([]);
   const [currentPage,setcurrentPage]=useState(1);
   const [postsPerPage,setpostsPerPage]=useState(9)
  
   const [filteredData, setFilteredData] = useState([]);
    
   const Api = async () =>{
  try{
    const res= await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-01-19&sortBy=publishedAt&apiKey=a15e4213c9e24bb18c708797d792c6f1');
    const data=await res.json();
    console.log(data)
    setcurrentdata(data.articles)
    setFilteredData(data.articles)

  }
  catch(error){}
    
 }

 useEffect(()=>{
    Api();
 },[currentPage])
 
const handlefilter=(event)=>{
   setFilteredData(event)
}



// 10*20=20
 const lastPostIndex=currentPage * postsPerPage;
 const  firstPostIndex=lastPostIndex - postsPerPage;
//20-10=10
   
const currentPosts=filteredData.slice(firstPostIndex,lastPostIndex);
// const next=()=>{setcurrentPage(currentPage+1)}

    return(
    <>
    {/* <News data={currentdata}/>
    <Secondpart data={currentdata}/> */}
   <Navbar currentdata={currentdata}  handlefilter={handlefilter} setFilteredData={setFilteredData} filteredData={filteredData} />
    <Firstpage currentPosts={currentPosts}/>


    <Pagination totalPosts={filteredData.length} postsPerPage={postsPerPage}  setCurrentPage={setcurrentPage} />
    </>
   )
}

export default Apidata;