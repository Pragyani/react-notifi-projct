import React from "react";

const Pagination = ({pageNo , setPageNo})=>{

    const handleNext =()=>{
         setPageNo(pageNo+1)
    }

    const handlePrevious = () =>{
        setPageNo(pageNo-1)
    }

    return(
        <>
     <div className="pagination-container">
        <div className="page-btn" onClick={handlePrevious}>{"<"}</div>
        <div className="page-btn">{pageNo}</div>
        <div className="page-btn" onClick={handleNext}>{">"}</div>
     </div>
        </>
    )
}
export default Pagination;