import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider/AuthProver';
import { Toaster } from 'react-hot-toast';
const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="px-2 sm:px-4 md:px-10 lg:px-14 ">
      <AuthProvider>
        <HelmetProvider context={helmetContext}>
          <RouterProvider router={router}></RouterProvider>
          <Toaster />
        </HelmetProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
