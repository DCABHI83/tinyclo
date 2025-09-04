import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Rent from './pages/Rent'
import Closet from './pages/Closet'
import About from './pages/About'
import Store from './pages/Store'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Blog from './pages/Blog'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Subscription from './pages/Subscription'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'

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
    },
    {
      path:'/blogs',
      element:<Blog/>
    },
    {
      path:"/register",
      element:<SignUp/>
    },
    {
      path:"/login",
      element:<LogIn/>
    },
    {
      path:"/subscription",
      element:<Subscription/>
    },
    {
      path:"/cart/:id",
      element:<Cart/>
    },
    {
      path:"/product-details/:id",
      element:<ProductDetail/>
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
