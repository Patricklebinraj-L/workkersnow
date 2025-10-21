import React, { useEffect } from "react";

const ReduxForm = (Element,props) => {


  return (props) => {

    return <Element {...props} />;
  };
};



  const Form = (props) => {

    const {validate} = props;

    return (Element) => ReduxForm(Element,props);
  };

export default Form;