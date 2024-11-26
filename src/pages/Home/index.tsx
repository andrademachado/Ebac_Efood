import Poster from "../../components/Poster"
import ProductsList from "../../components/ProductsList"
import Sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao5.png'
import { useEffect, useState } from "react"

export type Food = {
    id: number;
    titulo: string;
    destacado?:boolean;
    tipo: string;
    avaliacao:number;
    descricao:string
    capa: string;
    cardapio?:{
        foto:string;
        preco:number;
        id:number;
        nome:string;
        descricao:string;
        porcao:string;
    }[];

};

const Home = () => {
    const [dashboard, setDashboard] = useState<Food[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then(res => res.json())
            .then((res) => setDashboard(res))
    }, [])
   
    return (
        <>
            <Poster />
            <ProductsList foods={dashboard} />
        </>
    )
}

export default Home