import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from "./components/Banner";

import Header from "./components/Header";
import Poster from "./components/Poster";
import { GlobalCss } from "./styles";
import Product from './components/Product';
import ProductsList from './components/ProductsList';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (      
      <>
      <Poster />            
      <ProductsList />
      </>
    )

  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className='container'>

      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App;
