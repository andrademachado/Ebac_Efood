import Food from "../../models/Food"
import pizza from '../../assets/images/pizza.png'
import macarrao from '../../assets/images/macarrao5.png'
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import PerfilList from "../../components/PerfilList"


{/* Dashboard : conteúdos da página Perfil*/}
const dashboard: Food[] = [
    {
    id: 1,
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        title:'Pizza Marguerita ',
        infos: ['', ''],
        image: pizza,
        number: 4.9
    }, 
    {
        id: 2,
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        title: 'Pizza Marguerita ',
        infos: ['', ''],
        image: pizza,
        number: 4.9
    }, {
        id: 3,
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        title: 'Pizza Marguerita ',
        infos: ['', ''],
        image: pizza,
        number: 4.9
    }, 
    {
        id: 4,
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        title: 'Pizza Marguerita ',
        infos: ['', ''],
        image: pizza,
        number: 4.9
    }, 
    {
        id: 5,
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        title: 'Pizza Marguerita ',
        infos: ['', ''],
        image: pizza,
        number: 4.9
    }, {
        id: 5,
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        title: 'Pizza Marguerita ',
        infos: ['', ''],
        image: pizza,
        number: 4.9
    }
]

const Categories = () => (
    <>
        
        <Header />
        <Banner />
        <PerfilList foods={dashboard}/>
    </>
)

export default Categories