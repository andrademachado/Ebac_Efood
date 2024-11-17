import ProductsList from "../../components/ProductsList"
import Food from "../../models/Food"
import Sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao5.png'
import Header from "../../components/Header"
import Banner from "../../components/Banner"


{/* Dashboard : conteúdos da página inicial(Home)*/}
const dashboard: Food[] = [
    {
    id: 1,
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        title:'Hioki Sushi ',
        infos: ['Destaque da semana', 'Japonesa'],
        image: Sushi,
        number: 4.9
    },
    {
        id: 2,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        title: 'La Dolce Vita Trattoria ',
        infos: ['Italiana'],
        image: macarrao,
        number: 4.6
    },
    {
        id: 3,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        title: 'La Dolce Vita Trattoria ',
        infos: ['Italiana'],
        image: macarrao,
        number: 4.6
    },
    {
        id: 4,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        title: 'La Dolce Vita Trattoria ',
        infos: ['Italiana'],
        image: macarrao,
        number: 4.6
    }    
]

const Categories = () => (
    <>
        
        <Header />
        <Banner />
        <ProductsList foods={dashboard} />
    </>
)

export default Categories