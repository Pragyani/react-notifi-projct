import React, { useState } from "react";
import './rating.css';

const StarRating = ({ StarCount = 10 }) => {
    const [starColored, setStarColored] = useState(0);
    const [starHover, setStarHover] =useState();
    console.log('intialState', starColored);
    console.log('array', StarCount)
    console.log('hoverindex', starHover);
    return (
        <>
            <div className="container">
                {new Array(StarCount).fill(0).map((_, index) => {
                    return (
                        <span key={index}
                            onClick={() => setStarColored(index + 1)}
                            onMouseEnter={()=>setStarHover(index +1)}
                            className={index < starColored  || index < starHover ? "gold" : ""}>&#9733;</span>
                    )
                })}
            </div>
        </>
    )
}
export default StarRating;