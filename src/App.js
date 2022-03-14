import React from "react";
import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react';
import LocationInfo from './components/LocationInfo';
import ResidentsList from "./components/ResidentsList";

function App() {
  // id que usaremos para buscar ubicacion
  const [location,setLocation] = useState("");
  // La informacion que obtenemos de la ubicación buscada
  const [locationData,setLocationData] = useState({});
  // state que contiene un array de residentes
  // const [residents,setResidents] = useState([]);
// La funcion que busca el id en el input
function searchLocation(){
  axios.get(`https://rickandmortyapi.com/api/location/${location}`)
  .then((res) => { setLocationData(res.data) 
    
  });
};
// Este useEffect nos da una ubicacion al azar al inicio
useEffect(
  () => {

    const randomlocation = Math.floor(Math.random() * 126);
    axios.get(`https://rickandmortyapi.com/api/location/${randomlocation}`)
    .then( (res) => { setLocationData(res.data) 
    } )
  },[]
);


  return (
    <div className="App">
      <div className="header">
      <h1>Rick and Morty App</h1>
      <input type="text" onChange={(e) => setLocation(e.target.value)} value={location} placeholder="Search by Id"></input>
      <button onClick={searchLocation}>Search</button>
      <LocationInfo locationData={locationData}/>

      </div>
      
      <ResidentsList residents = {locationData.residents}/>
    </div>
  );
}

export default App;
