import React, { useEffect, useRef, useState } from "react";
import "./index.css";


const Flexbox = (props)=>{

        const {children , scrollValues , handleScrollWidth , style,title,} = props;
        const scrollContainer = useRef(null);
        const [styles,setStyles] = useState({});

        useEffect(()=>{
            setStyles((pre)=>{
                return {...pre,...style}
            })
        },[style])

        useEffect(()=>{
            let val = scrollValues?.scroll;
            let scrollWidth = scrollContainer.current?.scrollWidth;
            if(scrollValues?.x){
                scrollContainer.current?.scroll(val,0);
            }
            if(handleScrollWidth){
                handleScrollWidth(scrollWidth)
            }
            if(scrollValues?.style){
               setStyles((pre)=>{
                return {...pre,...scrollValues?.style}
               })
            }

        },[scrollValues])

    return (<>
    
        <div className="flexbox-container" style={styles} ref={scrollContainer}>

           {title &&  <div className="flexbox-title">{title}</div> }

            {children}

        </div>
    
    
    </>)

}

export default Flexbox;