import React from "react";
import "./index.css";

const CircularLoading = (props)=>{

    const {delay,nobackground=null} = props;

    return (
    
        <>
        
        <div className="circularLoading-container" style={{
            background:nobackground?'none':'white',
        }} >
            <div style={delay?{animationDelay:delay}:{}}> 
                <span></span>
            </div>
        </div>
        
        
        </>
    )

}

export default CircularLoading;