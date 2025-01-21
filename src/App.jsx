// eslint-disable-next-line no-unused-vars
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Portfolio from './portfolio/Portfolio'
import NotFound from './NotFound/NotFound'

function App() {
  const route = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "protfolio", element: <Portfolio /> },
        { path: "*", element: <NotFound /> }
      ]
    }
  ])
  return (
    <RouterProvider router={route}></RouterProvider>
  )
}

export default App