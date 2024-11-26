import pizza from '../../assets/images/pizza.png'
import macarrao from '../../assets/images/macarrao5.png'
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import PerfilList from "../../components/PerfilList"
import { Food } from '../Home'


{/* Dashboard : conteúdos da página Perfil*/}
const dashboard: Food[] = [
    
]

const Categories = () => (
    <>
        
        <Header />
        <Banner />
        <PerfilList foods={dashboard}/>
    </>
)

export default Categories