import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import About from "./pages/about";
import Company from './pages/company';
import Test from './pages/test';

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
    path: "resources",
    element: <Resources/>,
  },
  {
    path: "test",
    element: <Test/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

);

