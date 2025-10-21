import React from "react";
import "./index.css";
import ModalBox from "../../components/ModalBox";
import CircularLoading from "../../components/circularLoading";
import Form from "../../forms";
import validate from "../../utils/validations";

const ErrorPage = ()=>{

    return(<>
    
            <ModalBox>

                    <div className="error-container">
                    <p> Sorry, This page is not Available! right now </p>
                    </div>

            </ModalBox>

    </>);

}


export default Form({
        validate,
})(ErrorPage);

