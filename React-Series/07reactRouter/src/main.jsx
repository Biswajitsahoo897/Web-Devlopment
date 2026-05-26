import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/contact.jsx'
import './index.css'
import Github, { githubInfoLoaded } from './components/Github/Github.jsx'
import User from './components/User/user.jsx'


// Method-01
// You can also use this to create a router but it is not recommended for larger applications


// createBrowserRouter is used to create a router for the application it takes an array of route objects
// and returns a router object that can be used to render the application
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: '/',
//         element: <Home /> },
//       {
//         path: '/about',
//         element: <About />
//       },
//       {
//         path: '/contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])


// Method-02
// createRoutesFromElements is used to create a router from the elements it takes a JSX element
// and returns a router object that can be used to render the application
// It is recommended & it is more readable and maintainable
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/User/:userid" element={<User />} />
      <Route
      loader={githubInfoLoaded}
      path="/Github" element={<Github />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


// 'rfce' is the shortcut for react snippet 