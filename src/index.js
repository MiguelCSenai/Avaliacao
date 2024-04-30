import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import reportWebVitals from './reportWebVitals';
import NavBarComponent from './Components/NavBarComponent';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home/>,
  },
  {

    path: "/Contato",
    element: <Contact/>,

  },
  {

    path: "/Sobre-nos",
    element: <About/>,

  },
  {

    path: "/login",
    element: <Login/>

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBarComponent/>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
