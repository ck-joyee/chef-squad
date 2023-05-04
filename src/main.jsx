import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './Route/Route.jsx';
import AuthProbider from './providers/AuthProbider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProbider><RouterProvider router={router}></RouterProvider></AuthProbider>
  </React.StrictMode>,
)
