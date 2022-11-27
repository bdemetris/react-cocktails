import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

import About from './Pages/About';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import CocktailsList from './Pages/CocktailsList';
import Search from './Components/Search';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "cocktails/:cocktailName",
    element: <CocktailsList />,
  },
]);

function App() {

  return (
    <>
      <Navbar />
      <Search />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
