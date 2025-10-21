import React from "react";
import "./index.css";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const ModalBox = (props)=>{

    const {children,style} = props;
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.up('sm'));
    const md = useMediaQuery(theme.breakpoints.up('md'));
    const avg = useMediaQuery('(min-width:750px)');

    return (<>
    
        <div className="modalbox-container"
        
        style={Object.assign({},md || avg?{ width:'40%', }:{width:'80%'},style?style:{})}
        >

                {children}

        </div>
    
    
    </>)

}

export default ModalBox;