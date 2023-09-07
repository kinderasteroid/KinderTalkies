import React from "react";

const MovieCard  = (props) =>{
    return(
    <div className='movie'>
    <div>
    <p>{props.movie1.Year}</p>
    </div>
    <div>
        <img src={props.movie1.Poster !== 'N/A'?props.movie1.Poster:'http://via.placeholder.com/400'} ></img>
     </div>

     <div>
        <span>{props.movie1.Title}</span>
        <h3>{props.movie1.Type}</h3>
     </div>
    </div>
    )
    
}
export default MovieCard;