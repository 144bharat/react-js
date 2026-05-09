import React from "react";
import ReactDOM from "react-dom/client";
import { UserRoundPen , Search, SquareDot, SquareMinus } from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";

//createBrowserRouter ==> Configuration to create routes
//RouterProvider ==> Component provided by react-router to provide defined routes throughout the application.
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

const root = ReactDOM.createRoot(document.getElementById('root'));        


const AppLayout = () => {
    return (
        <div>
            <Header/>
            <main><Outlet/></main>
            <Footer/>
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
                element:<About/>,
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/restaurantmenu/:id',
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    }
])

root.render(<RouterProvider router={appRouter} />);
