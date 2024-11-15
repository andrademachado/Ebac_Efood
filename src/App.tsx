import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from "./components/Banner";

import Header from "./components/Header";
import Poster from "./components/Poster";
import { GlobalCss } from "./styles";

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
  }
])

function App() {
  return (
    <>
      <GlobalCss />      
      <Header />        
      <div className='container'>

      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App;
