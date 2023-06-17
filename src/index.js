import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/about";
import Company from './pages/company';
import Test from './pages/test';
import Services from './pages/Services';
import Custom from './pages/custom'
import Cart from './pages/Cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "company",
    element: <Company/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "services",
    element: <Services/>,
  },
  {
    path: "test",
    element: <Test/>,
  },
  {
    path: "cart",
    element: <Cart/>,
  },
  {
    path: "custom",
    element: <Custom/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

);

