import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Flexbox from "../flexbox";

const ScollerBar = ()=>{

    const [scroll,setScroll] = useState(0);
    const banner = useRef(null);
    const [scrollValues,setScrollValues] = useState({ x:true,scroll:0,style:{}});
    const [scrollWidth,setScrollWidth] = useState(0);
    const [btnFocus,setBtnFocus] = useState(false);
    const [timer,setTimer] = useState(false);

    const images = ["web1.png","web2.jpg","web3.jpg","web4.jpg","web5.jpg"];



    useEffect(()=>{
      let prev = {...scrollValues,
        scroll:scroll,
      }
      setScrollValues(prev)

    },[scroll])


    const handleScrollWidth = (val)=>{
      setScrollWidth(val)
    }


    const onLeftScroll = (e)=>{

      setBtnFocus(true)
      e.preventDefault();
      let bannerWidth = parseInt(banner.current.clientWidth);
      if(scroll>0){
        setScrollValues((pre)=> {
          return {...pre,style:{scrollBehavior:"smooth"}}
        } )
      setScroll((val)=>val-bannerWidth-20)
      }
      else{

        setScrollValues((pre)=> {
          return {...pre,style:{scrollBehavior:"auto"}}
        } )
        setScroll(scrollWidth-bannerWidth-20)
      }

      setTimeout(()=>{
        setBtnFocus(false)
      },5000)

    }

    const onRightScroll = (e)=>{

      setBtnFocus(true)
      e.preventDefault();
      let bannerWidth = parseInt(banner.current.clientWidth);
        if(scroll<(scrollWidth-(bannerWidth+bannerWidth-20))){
          setScrollValues((pre)=> {
            return {...pre,style:{scrollBehavior:"smooth"}}
          } )
          setScroll((val)=>val+bannerWidth+20)
        }
        else{
          setScrollValues((pre)=> {
            return {...pre,style:{scrollBehavior:"auto"}}
          } )
          setScroll(0)
        }

        setTimeout(()=>{
          setBtnFocus(false)
        },5000)

    }


    useEffect(()=>{

      let bannerWidth = parseInt(banner.current.clientWidth);

      setTimeout(()=>{

        if(!btnFocus){
          if(scroll<(scrollWidth-(bannerWidth+bannerWidth-20))){
            setScrollValues((pre)=> {
              return {...pre,style:{scrollBehavior:"smooth"}}
            } )
            setScroll((val)=>val+bannerWidth+20)
          }
          else{
            setScrollValues((pre)=> {
              return {...pre,style:{scrollBehavior:"auto"}}
            } )
            setScroll(0)
          }
        }

        setTimer(!timer);

      },3000)


    },[timer])



    return(<>
    
    <button className="scrollbtn" style={{left:'6.5%'}} onClick={onLeftScroll}> {"<"} </button>
    <button className="scrollbtn" style={{left:'87%'}} onClick={onRightScroll}> {">"} </button>

    <Flexbox style={{padding:'0px',flexWrap:'nowrap',overflowX:'scroll',background:'rgb(249, 249, 249)'}}  scrollValues={scrollValues} 
    handleScrollWidth = {handleScrollWidth}
    >


      {images.map((e,i)=>{

            return (<>
            
            <div key={i} className="flexbox-data scrollfull" style={{background:'transparent',marginTop:'10px',marginBottom:'10px'}} ref={banner} >
                
                <img src={`./images/${e}`} />

            </div>
            
            </>);

      })}

    </Flexbox>
    
    
    </>)

}

export default ScollerBar;