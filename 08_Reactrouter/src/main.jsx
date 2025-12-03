import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'

// const router = createBrowserRouter([

//    {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { index: true, element: <Home /> },      // Renders at "/"
//       { path: "about", element: <About /> },   // Renders at "/about"
//     ],
//   }
// ])

const routes=  createRoutesFromElements(

    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path='user/:userid' element={<User />} />

    </Route>
  )
const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)

