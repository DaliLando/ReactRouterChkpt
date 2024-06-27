import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = ({add,toggle})=> {
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [imgURL,setImg]=useState("")
    const[rating,setRating]=useState(0)
   const navigate = useNavigate()
    const handelSubmit =()=>{
        add({id: Date.now(),title,description,imgURL,rating})
        // toggle()
        navigate("/")
    }

    return (
        <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}> 
            <input type="text" onChange={(e)=> setTitle(e.target.value) } placeholder="Add Title"/>
            <input type="text" onChange={(e)=> setDescription(e.target.value)} placeholder="Add Descrption" />
            <input type="text" onChange={(e)=> setImg(e.target.value)} placeholder="Add Movie image link"/>
            <input type="number" onChange={(e)=> setRating(e.target.value)} placeholder="Add Rating"/>
            <button onClick={()=> handelSubmit()}> Submit</button>
        </div>
    )
}

export default AddMovie;