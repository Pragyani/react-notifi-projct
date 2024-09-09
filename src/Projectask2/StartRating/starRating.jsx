import React, { useState } from "react";
import './rating.css';

const StarRating = ({ StarCount = 10 }) => {
    const [starColored, setStarColored] = useState(0);
    console.log('intialState', starColored);
    console.log('array', StarCount)
    return (
        <>
            <div className="container">
                {new Array(StarCount).fill(0).map((_, index) => {
                    return (
                        <span key={index}
                            onClick={() => setStarColored(index + 1)}
                            className={index < starColored ? "gold" : ""}>&#9733;</span>
                    )
                })}
            </div>
        </>
    )
}
export default StarRating;