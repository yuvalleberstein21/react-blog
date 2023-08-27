import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Single from './pages/Single';
import Write from './pages/Write';
import Register from './pages/Register';
import Login from './pages/Login';




function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };



  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/post/:id',
          element: <Single />,
        },
        {
          path: '/write',
          element: <Write />,
        },
      ],
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);



  return (
    <div className="app">
          <RouterProvider router={router} />
    </div>
  )
}

export default App
