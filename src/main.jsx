import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './Layout/Main.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Skills from './Pages/Home/Skills/Skills';
import Projects from './Pages/Home/Projects/Projects';
import Education from './Pages/Home/Education/Education';
import Contact from './Pages/Home/Contact/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: 'home',
        element:<Home/>
      },
      {
        path: 'about',
        element:<About/>
      }, {
        path: 'skills',
        element:<Skills/>
      }, {
        path:'projects',
        element:<Projects/>
      }, {
        path:'education',
        element:<Education/>
      }, {
        path: 'contact',
        element:<Contact/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
