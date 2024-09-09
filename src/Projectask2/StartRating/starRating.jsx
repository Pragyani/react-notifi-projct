import React from "react";
import './rating.css';

const StarRating = ({StarCount = 10})=>{
    return(
        <>
        <div className="container">
            {new Array(StarCount).fill(0).map(()=>{
                return(
                    <span>&#9733;</span>
                )
            })}
        </div>
        </>
    )
}
export default StarRating;