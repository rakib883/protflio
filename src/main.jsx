import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home.jsx';
import App from './App.jsx';
import Error from './Components/Error/Error.jsx';
import Foter from './Components/Foter/Foter.jsx';
import Protflio from './Components/Protflio/Protflio.jsx';
import Contact from './Components/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children : [
      {
        path : "/",
        element :<Home></Home>
      },
      {
        path : "Contact",
        element :<Contact></Contact>
      },
      {
         path : "Protflio",
         element : <Protflio></Protflio>
      },
      {
        path : "Resume",
        element : <Foter></Foter>
        
      },
      {
        path : "*",
        element :<Error></Error> 
      },
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
