import {  useParams } from "react-router-dom"


const Trailer =({movieList})=> {

    let {id} = useParams();
    
    let found = movieList.find((item)=>{
      return  item.id === Number(id)
    })
   
    return  (
        <div style={{display:"flex", alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
            {(found.trailer ? found.trailer : "not found" )}
          <p style={{margin:"20px", padding:"50px"}}>{found.description} </p>
        </div>
    )
}

export default Trailer