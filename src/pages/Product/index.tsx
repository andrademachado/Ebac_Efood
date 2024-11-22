import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Header from '../../components/Header'
import Banner from '../../components/Banner'

const Product = () =>{
    
    const {id} = useParams()
    
    return (
        <>
        <Header />
        <Banner />
        <div>
            teste
        </div>
        <Hero />
        </>
    )
}

export default Product