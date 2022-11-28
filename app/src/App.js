import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

import About from './Pages/About';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import CocktailsList from './Pages/CocktailsList';
import Search from './Components/Search';
import GetRandomCocktail from './Pages/GetRandomCocktail';

const router = createBrowserRouter([
  {
    path: "/",
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
