
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import  appStore  from "./utils/appStore"
import Cart from "./components/Cart";

//import Grocery from "./components/Grocery";


const Grocery = lazy(()=> import("./components/Grocery"));

const AppComponent =  () =>{

  const [userName,setUserName] = useState(null);
 useEffect(()=>{
  const data = {
    name: "Rohith Reddy",
  }
  setUserName(data.name);
 },[])

  return (
    <Provider store={appStore}>
  <UserContext.Provider value={{loggingInUser : userName, setUserName }}>
  <div className="app"> 
  <HeaderComponent/>
  <Outlet/>
    </div>
  </UserContext.Provider>
  </Provider>

    );
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
      },
      {
        path:"/cart",
        element:<Cart/>
      }
  ],
    errorElement:<Error/>
  },
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);