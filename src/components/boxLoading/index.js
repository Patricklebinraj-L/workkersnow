import React, { useEffect, useState } from "react";
import "./index.css";


const BoxLoading = (props)=>{

    const {style} = props;

    // const colors = ["green","blue","crimson","orange","aqua"]
    const [color,setColor] = useState("white")
    const [index,setIndex] = useState(0);
    const [loadingText,setLoadingText] = useState("Loading")

    useEffect(()=>{

        setInterval(()=>{

            setTimeout(()=>{
                setLoadingText("Loading.")
            },700)

            setTimeout(()=>{
                setLoadingText("Loading..")
            },1400)

            setTimeout(()=>{
                setLoadingText("Loading...")
            },1900)


        },2000)

    },[])

    // useEffect(()=>{
    //     if(index>=colors.length){
    //         setIndex(0)
    //     }
    //     else{
    //         setTimeout(()=>{

    //             setIndex((pre)=>{
    //                 return pre+1
    //             })

    //         },2000)
    //     }
    //     // setColor(colors[index])
    // },[index])

    return (<>
    
        <div className="boxloading-container" style={style}>

        <span className="boxloading-ball" ></span>
        <span className="boxloading-hider">
            <h6> {loadingText} </h6>
        </span>

        </div>
    
    
    
    </>)


}

export default BoxLoading;