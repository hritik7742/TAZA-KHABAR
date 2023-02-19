import React, { useState } from "react";
import './App.css';
import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
const Navbar = ({currentdata, handlefilter,setFilteredData, filteredData}) =>{
    const [searchterm,setsearchterm]=useState('');


    const handlesearch=()=>{
        const filtered=currentdata.filter(item=>item.title.toLowerCase().includes(searchterm))
        console.log('Filtered data:', filtered);
        handlefilter(filtered)
        setFilteredData(filtered)
        console.log('my filtered data',filteredData)
        
    }

    // const handlesearch = (event) => {
    //     const searchValue = event?.target?.value?.toLowerCase() || '';
    //     setsearchterm(searchValue);
    //     const filteredData = currentdata.filter((elem) => {
    //       return elem.title.toLowerCase().includes(searchValue);
    //     });
    //     setFilteredData(filteredData);
    //   }


    // const handlesearch=(event)=>{
    //     const searchValue = event.target.value.toLowerCase();  // check if currentSearch is defined before calling toLowerCase()
    //     setsearchterm(searchValue);
    //     const filteredData = currentdata.filter((elem) => {
    //         return elem.title.toLowerCase().includes(searchValue);
    //     });
    //     setFilteredData(filteredData);
    // }



    const handleinputsearch=(event)=>{
    setsearchterm(event.target.value)
}


console.log('Current data:', currentdata);
console.log('Search term:', searchterm);


    return(
        <>
        <div className="main-box">
            <div className="navbar">
                <div className="parent-icons">
                    <div className="child-icons"><FacebookRoundedIcon className="inner-child-icons"/></div>
                    <div className="child-icons"><InstagramIcon className="inner-child-icons"/></div>
                    <div className="child-icons"><WhatsAppIcon className="inner-child-icons"/></div>
                    <div className="child-icons"><TwitterIcon className="inner-child-icons"/></div>
                </div>

               <div className="website-heading"><span>TAZA KHABAR</span></div>
               <div className="Search">
                <input type="text" placeholder="Search.." className="Search-input" value={searchterm} onChange={handleinputsearch}/>  
                <IconButton className="button" onClick={handlesearch}><Search/></IconButton>
                </div>
             
            </div>

        </div>
       
        </>
    )
}

export default Navbar;