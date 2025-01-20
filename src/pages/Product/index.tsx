import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Gallery from '../../components/Gallery'


const Product = () => {
    const { id } = useParams()

    return (
        <>
            <Hero />
        </>
    )
}


export default Product
    

