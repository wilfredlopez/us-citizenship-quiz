

  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import './App.css';
  import './quiz.css'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './Routes'


export const router = createBrowserRouter(routes, {
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
