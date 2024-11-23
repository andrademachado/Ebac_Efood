import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import pizza from '../../assets/images/pizza.png'

const Product = () =>{
    
    const {id} = useParams()
    
    return (
        <>
        <Header />
        <Banner />
        <div>
            teste
        </div>
            <Hero name='Pizza Marguerita' defultCover={pizza} />
        </>
    )
}

export default Product