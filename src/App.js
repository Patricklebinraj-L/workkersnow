import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomisedRoute from "./routes";

const App = function(){


  return (
    <>

    <BrowserRouter>

            <CustomisedRoute></CustomisedRoute>

    </BrowserRouter>
    
    
    </>
  )


}


export default App;