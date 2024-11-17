import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from "./styles";
import Home from './pages/Home';
import Categories from './pages/Categories';

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className='container'>

      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App;
