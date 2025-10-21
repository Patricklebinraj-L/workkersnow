import React from "react";
import { useNavigate } from "react-router-dom";

export function getCount(ele,value){
    if(!value || !ele){
        return 0
    }

    let count = 0
    for(let i of value){
        if(ele==i){
            count+=1
        }
        
    }
    return count
}



export function checkValidEmail(value){

    let required = ["@","."];

    if(value?.includes(" ")){
        return false
    }

    for(let i of required){
        if(!(value?.includes(i))){
            return false
        }
    }
    let getATCount = getCount("@",value);
    if(getATCount!=1){
        return false
    }

    let splitVal = value.split("@");
    if( (splitVal[0]?.length==0) || (splitVal[(splitVal?.length)-1]?.length==0)){
        return false
    }

    let hasDot = splitVal[(splitVal?.length)-1]?.includes(".");
    if(!hasDot){
        return false
    }
    else{
        let dot = splitVal[(splitVal?.length)-1]?.split(".")
        let finalchk = dot[dot?.length-1]
        if(finalchk.length==0){
            return false
        }
    }

    return true

}



export function goBack(event){
    if(event){
        event?.preventDefault();
    }
    window.history.back();
}


export function navigateTo(url,event){

    if(event){
        event?.preventDefault();
    }
    if(url){
        window.location = url;
    }

}