import Poster from "../../components/Poster"
import ProductsList from "../../components/ProductsList"
import { useEffect, useState } from "react"

export type Food = {
    id: number;
    titulo: string;
    destacado?: boolean;
    tipo: string;
    avaliacao: number;
    descricao: string;
    capa: string;
    cardapio: Array<{
        foto: string;
        preco: number;
        descricao: string;
        porcao: string;
    }>
}

const Home = () => {
    const [restaurantes, setRestaurantes] = useState<Food[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((res) => setRestaurantes(res))
    }, [])

    return (
        <>
            <Poster />
            <ProductsList foods={restaurantes} />
        </>
    )
}

export default Home
