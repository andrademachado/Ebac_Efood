import Banner from "./components/Banner";
import Header from "./components/Header";
import Poster from "./components/Poster";
import { GlobalCss } from "./styles";

function App() {
  return (
    <>
      <GlobalCss />
      <Poster />
      <Header />
        <Banner />
      <div className='container'>

      </div>
    </>
  )
}

export default App;
