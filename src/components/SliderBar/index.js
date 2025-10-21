import React,{useRef,useEffect,useState} from "react";
import "./index.css";

const SliderBar = ()=>{

    const container = useRef(null);
    const images = ['web1.png','web2.jpg','web3.jpg','web4.jpg','web5.jpg','web6.png'];
    const image_dir = './images/';
    const [containerWidth,setContainerWidth] = useState(null);
    const [imageDetails,setImageDetails] = useState(null);

    useEffect(()=>{

        if(container){
            let getWidth = container.current?.innerWidth || container.current?.clientWidth;
            setContainerWidth(getWidth);
        }

    },[container]);

    return (
        <>
        
        <div className="sliderbar-container" ref={container}>

            {/* {
                images.map((image,index)=>{
                    return <img src={`${image_dir}${image}`} key={index} 
                    className="sliderbar-image"
                    style={{
                        minWidth:containerWidth || '90%'
                    }}
                    />
                })
            } */}

        </div>
        
        </>
    )

}

export default SliderBar;