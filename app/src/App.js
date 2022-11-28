import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Home from './Pages/Home';
import About from './Pages/About';
import GetRandomCocktail from './Pages/GetRandomCocktail';
import CocktailsList from './Pages/ListCocktails';
import CocktailGet from './Pages/GetCocktail';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Search from './Components/Search';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "random",
    element: <GetRandomCocktail />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "cocktails/:cocktailName",
    element: <CocktailsList />,
  },
  {
    path: "cocktail/:cocktailId",
    element: <CocktailGet />,
  },
]);

function App() {

  return (
    <>
      <Navbar />
      <div className="site-body">
        <Container className="container-fluid mt-4">
          <Search />
          <RouterProvider router={router} />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;
