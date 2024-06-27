import React, { useState } from "react";
import MovieList from "./Components/movieList";
import { liste } from "./data";
import AddMovie from "./Components/addMovie";
import NavScrollExample from "./navBar";
import { Route, Routes } from "react-router-dom";
import Trailer from "./Components/Trailer";


function App() {

const [movie,setMovie]= useState(liste)
const [show,setShow]=useState(false)

const toggle = ()=> {
  setShow(!show);
  setMovie([]);
}
const [movieFilter,setMovieFilter]=useState(movie)
// create a new movie
const add =(newMovie)=>{
  setMovieFilter([...movieFilter , newMovie])
}

// filtration

const filtration = (value) =>{
  setMovieFilter(movie.filter((item)=>{
   return  item.title.toLowerCase()===value.toLowerCase() || item.rating===Number(value)
  })) 
}
  return (
    <div>
      <NavScrollExample filtration ={filtration}/>
      <Routes>
        <Route path="/" element={<MovieList movie={movieFilter}/>}/>
        <Route path="/trailer/:id" element={<Trailer movieList={movieFilter}/>}/> 
        <Route path="/add" element={<AddMovie add={add} toggle ={toggle}/>}/>
      </Routes>
    <div >
      
       
  </div>
  {/* <button onClick={toggle} style={{marginLeft:"45%",marginTop:"30px",marginBottom:"10px"}}>Add new movie</button>
      { show && <AddMovie add={add} toggle ={toggle}/>}  */}
      
  </div>
  );
}

export default App;
