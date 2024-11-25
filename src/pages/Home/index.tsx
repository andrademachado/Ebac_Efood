import Poster from "../../components/Poster"
import ProductsList from "../../components/ProductsList"
import Sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao5.png'
import { useState } from "react"

type Food = {
    id: number;
    titulo: string;
    destacado?:boolean
    avaliacao:number;
    descricao:string
    capa: string;
    cardapio:[{
        foto:string;
        preco:number;
        id:number;
        nome:string;
        descricao:string;
        porcao:string;
    }]

}

const Home = () => {
    const [dashboard, setDashboard] = useState<Food[]>([])
    return (
        <>
            <Poster />
            <ProductsList foods={dashboard} />
        </>
    )
}

export default Home