import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const veiga = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
]);

export default function App() {
  return (
    <div><RouterProvider router={veiga} />
    </div>
  )
}
