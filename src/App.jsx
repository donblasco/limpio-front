import { Link, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

export default function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <nav className="rounded text-white bg-indigo-900 px-2 py-2.5 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="https://laraveller.com/" className="flex items-center">Laraveller</a>
            <div className="hidden w-full md:block md:w-auto">
              <ul className="mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                <li className="mr-3">
                  <Link 
                    to="/"
                    className="block rounded py-2 pr-4 pl-3 text-white"
                    aria-current="page"
                    >Home
                  </Link>
                </li>
                <li className="mr-3">
                  <Link 
                    to="/login"
                    className="block rounded py-2 pr-4 pl-3 text-white"
                    aria-current="page"
                    >Login
                  </Link>
                </li>
                <li className="mr-3">
                  <Link 
                    to="/register"
                    className="block rounded py-2 pr-4 pl-3 text-white"
                    aria-current="page"
                    >Register
                  </Link>
                </li>
              </ul>
            </div>  
        </div>
      </nav>
      <div className= "max-w-7xl mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </div>
  )
}