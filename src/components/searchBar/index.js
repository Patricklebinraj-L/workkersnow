import React, { useEffect, useState } from "react";
import "./index.css";
import Flexbox from "../flexbox";


const SearchBar = (props)=>{

    const {snackbar,snackBarOpen} = props;
    const [snack,setSnack] = useState(false);

    const handleClick = ()=>{
        setSnack(true)
    }

    useEffect(()=>{
        setSnack(snackBarOpen)
    },[snackBarOpen])


    return(<>
    
    
        <div className="sb-container" >

            <Flexbox style={{justifyContent:'center'}}>
                    <input type="text" id="input" placeholder="search" />
                    <button onClick={handleClick}> search </button>
            </Flexbox>

            {snack?snackbar:null}

        </div>
    
    
    
    </>)

}

export default SearchBar;