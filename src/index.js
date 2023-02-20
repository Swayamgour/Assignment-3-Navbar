import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,
  RouterProvider  } from "react-router-dom"
import Home from './Components/Home';
import About from './Components/About';
import Help from './Components/Help';
import Contact from './Components/Contact';
import About1 from './Components/About1';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>

  },
  {
    path:'Home',
    element: <Home/>

  }
  ,{
    path:'About',
    element:<About/>
  },{
    path:'Help',
    element:<Help/>
  },{
    path:'Contact',
    element:<Contact/>
  }
  ,{
    path:'About1',
    element:<About1/>
  }
])
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
