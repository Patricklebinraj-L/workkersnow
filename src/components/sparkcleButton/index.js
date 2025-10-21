import React from "react";
import "./index.css";


const SparkleButton = (props)=>{

    const {value="Proceed", handleClick} = props;

    return(<>
    
    <button className="sparkle-button" onClick={handleClick} > {value} </button>
    
    </>)

}

export default SparkleButton;
