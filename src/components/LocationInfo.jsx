import React from "react";



function LocationInfo(props){
  const locationData = props.locationData;
    return(
        <>
      <div className="locationInfo">
      <h2>{locationData.name}</h2>
      <div >
      <b>Type: {locationData.type}</b>
        <b>Dimension: {locationData.dimension}</b>
        <b>Residents: {locationData.residents?.length}</b>
      </div>
        
      </div>
        </>

    )
};


export default LocationInfo;