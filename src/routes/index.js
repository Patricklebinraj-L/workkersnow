import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimpleLoading from "../components/simpleLoading";
import Schema from "./schema.js";
import { injectReducer, injectSaga } from "../redux/store.js";
import Footer from "../pages/layout/footer/index.js";

const Layout = React.lazy(()=>import("../pages/layout"));
const Home = React.lazy(()=>import("../pages/home"));

const CustomisedRoute = ()=>{

    return(

        <Routes>

            <Route element={<React.Suspense fallback={<SimpleLoading/>}>
                                                                <Layout />
                                                            </React.Suspense>} >

                {
                    Schema()?.map((route,i)=>{

                        const pageActions = [];
                        const name = [];
                        const noFooter = route?.noFooter || null;

                        let PageComponent = route?.chunk? 
                                lazy(()=> Promise.all(
                                            route?.chunk?.map((data,i)=>{

                                                return (import(`../redux/${data?.page}`)).then((module)=>{
                                                    let mod = module.default;
                                                    const {actions,reducer,saga} = mod();
                                                    pageActions.push(actions);
                                                    // name.push(data?.name);
                                                    name.push(data?.name);
                                                    injectReducer(data?.name,reducer);
                                                    injectSaga(data?.name,saga);
                                                    return module;
                                                })

                                            })
                                ).then(()=>import(`../pages/${route?.pageName}`)) 
                                )
                                : lazy(()=>import(`../pages/${route?.pageName}`));


                    return <Route key={i} path={route?.path} element={<React.Suspense fallback={<SimpleLoading/>}>
                               
                                <PageComponent 
                                
                                name = {name}
                                actions = {pageActions}

                                />
                                
            {!noFooter ? <div className="footer">
                <Footer />
            </div> : null
            }
                            </React.Suspense>} />


                    })
                }

            </Route>

        </Routes>
    )

}

export default CustomisedRoute;