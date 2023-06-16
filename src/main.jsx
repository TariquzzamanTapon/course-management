import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/router.jsx';
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="md:container mx-auto">
      <HelmetProvider context={helmetContext}>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </div>
  </React.StrictMode>,
)
