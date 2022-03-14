import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";


function ResidentInfo(props){
    const url = props.url;
    const [charInfo,setCharInfo] = useState({});
    useEffect(() => {
        axios.get(url)
        .then(res => setCharInfo(res.data))
    }, [url] )


    return(
        <div className="residentCard">
            <img src={charInfo.image} alt= "Character" className="charImg"></img>
            <ul>
                <li>Name: {charInfo.name}</li>
                <li>Status: {charInfo.status}</li>
                <li>Origin: {charInfo.origin?.name}</li>
                <li>Number of episodes: {charInfo.episode?.length} </li>
            </ul>
            
        </div>
            

        
    )
};

export default ResidentInfo;