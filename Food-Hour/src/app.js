import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import { UserRoundPen , Search, SquareDot, SquareMinus } from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";

//createBrowserRouter ==> Configuration to create routes
//RouterProvider ==> Component provided by react-router to provide defined routes throughout the application.
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
//INSTEAD OF IMPORTING DIRECTLY NOW WE WILL LOAD IT DYNAMICALLY ON DEMAND: import Grocery from "./components/Grocery";
//import About from "./components/About";

import UserContext from "/src/utils/UserContext.js";

const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=> import("./components/About"));

const root = ReactDOM.createRoot(document.getElementById('root'));        


const AppLayout = () => {
const [loggedInUserName, setLoggedInUserName] = useState("Bharat");

    return (
        <div>
            <UserContext.Provider value={{loggedInUserName}}>
            <Header/>
            <main><Outlet/></main>
            <Footer/>
            </UserContext.Provider>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>,
            },
            {
                path:'/about',
                element:<Suspense fallback={<h1>I will be displayed unless the component loads.....</h1>}><About/></Suspense>,
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/restaurantmenu/:id',
                element:<RestaurantMenu/>
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h1>I will be displayed unless the component loads.....</h1>}><Grocery/></Suspense>
            }
        ],
        errorElement:<Error/>
    }
])

root.render(<RouterProvider router={appRouter} />);
