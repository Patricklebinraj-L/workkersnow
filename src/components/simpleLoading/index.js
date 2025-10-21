import React, { useEffect, useState } from "react";
import "./index.css";


const SimpleLoading = ()=>{

    return(<>
    
        <div className="sl-container">

            <span className="loader" style={{animationDelay:'0.7s'}}>  </span>
            <span className="loader" style={{animationDelay:'0.9s'}}>  </span>
            <span className="loader" style={{animationDelay:'1.0s'}}>  </span>

        </div>

    
    </>)

}

export default SimpleLoading;