import React from "react";
import "./index.css";

const ElementToolBar = ()=>{

    const images = ['paint.png','plus.png','pencil.png','file.png'];
    const image_dir = './images/';

    return (
        <>
            <div className="elementtoolbar-container">
                <div>
                <img src={`${image_dir}${images[0]}`} />
                </div>
                <div>
                    <img src={`${image_dir}${images[1]}`} />
                </div>
                <div>
                <img src={`${image_dir}${images[2]}`} />
                </div>
                <div>
                <img src={`${image_dir}${images[3]}`} />
                </div>
            </div>
        
        </>
    )

}

export default ElementToolBar;