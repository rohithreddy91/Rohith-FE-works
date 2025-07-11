
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

//import Grocery from "./components/Grocery";


const Grocery = lazy(()=> import("./components/Grocery"))

const AppComponent =  () =>{
  return (<div className="app"> 
  <HeaderComponent/>
  <Outlet/>
  </div>);
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppComponent/>,
    children:[
      {
      path:"/",
      element :<BodyComponent/>
      },
      {
      path:"/about",
      element :<About/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      },
      {
      path:"/contact",
      element:<Contact/>
      },
      {
        path:"/restaurant/:resid",
        element:<RestaurantMenu/>
      }
  ],
    errorElement:<Error/>
  },
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);