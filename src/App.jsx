import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Rent from './pages/Rent'
import Closet from './pages/Closet'
import About from './pages/About'
import Store from './pages/Store'
import Contact from './pages/Contact'
import Home from './pages/Home'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[{
        path:"/",
        element:<Home/>
      },
    {
      path:"/rent",
      element:<Rent/>
    },
    {
      path:"/clean-out-closet",
      element:<Closet/>
    },
    {
      path:"/about-us",
      element:<About/>
    },
    {
      path:"/store",
      element:<Store/>
    },
    {
      path:"/contact-us",
      element:<Contact/>
    }
    
    ]
    }
  ])
  return (
  <>
 <RouterProvider router={router} />
  </>
  )
}

export default App
