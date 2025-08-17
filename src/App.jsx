import './App.css'
import Footer from './components/Footer'
import Manager from './components/Manager'
import NavBar from './components/NavBar'
import PasswordGenerator from './components/PasswordGenerator'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
      <NavBar />
      <Manager/>
      <Footer/>
      </>
    },
    {
      path: "/home",
      element: <>
      <NavBar />
      <Manager/>
      <Footer/>
      </>
    },
    {
      path: "/pass-gen",
      element: <>
      <NavBar />
      <Manager />
      <PasswordGenerator />
      <Footer/>
      </>
    }
  ])

  return (
    <>
      <ToastContainer />
      <div className="fixed inset-0 -z-10 h-[full] w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 z-20 m-auto h-[1000px] w-[1000px] rounded-full bg-green-400 opacity-25 blur-[100px]"></div></div>
      {/* <NavBar />
      <Manager />
      <PasswordGenerator/>
      <Footer/> */}
      <RouterProvider router={router} />

    </>
  )
}

export default App
