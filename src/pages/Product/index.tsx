import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import pizza from '../../assets/images/pizza.png'
import Perfil from '../../components/Perfil'

const Product = () =>{
    
    const { id }= useParams()
    
    return (
        <>
        <h1>PRODUCT {id}</h1>
        </>
    )
}

export default Product