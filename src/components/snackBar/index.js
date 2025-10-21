import React from "react";
import  "./index.css";
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import { SnackbarContent } from "@mui/material";



const SnackBars = (props)=>{

    const {useState,useEffect} = React;

    const { transition ,message,time,close,open,error} = props;

    const [state, setState] = useState({
        open: false,
        Transition: Slide,
      });


      function SlideTransition(props) {
        return <Slide {...props} direction="up" />;
      }
      
      function GrowTransition(props) {
        return <Grow {...props} />;
      }
    
      const handleClose = () => {
        setState({
          ...state,
          open: false,
        });
      };

      useEffect(()=>{

        if(transition?.trim().toLowerCase()=="grow"){
            setState({
                open:true,
                Transition:GrowTransition,
            })
        }
        else if(transition?.trim().toLowerCase()=="fade"){
            setState({
                open:true,
                Transition:Fade,
            })
        }
        else{
            setState({
                open:true,
                Transition:SlideTransition,
            })
        }

      },[])
    
    return(<>
    
    <Snackbar
        open={open}
        // onClose={handleClose}
        TransitionComponent={state.Transition}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'',
        }}
        message={message?message:null}
        key={"state.Transition?.name"}
        autoHideDuration={time? typeof(time)=='number'? time: parseInt(time):3500}
      >
        {!error ? <SnackbarContent style={{background:'rgb(0 171 64)',color:'white',textAlign:'center'}}
        message = {message?message:"Success!"} /> :
        <SnackbarContent style={{background:'crimson',color:'white',textAlign:'center'}}
        message = {message?message:"Error!"} />
      }

      </Snackbar>
    
    
    
    </>)

}


export default SnackBars;