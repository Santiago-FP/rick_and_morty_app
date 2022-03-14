import React from "react";
import ResidentInfo from "./ResidentInfo";
function ResidentsList(props)
{
    const residents = props.residents;
    return(
        <div className="residentsList">
            
            {residents &&  residents.map(resident => {
                return (<ResidentInfo url={resident} key={resident}/>)
            })}
        </div>
        
    )
    
};

export default ResidentsList;