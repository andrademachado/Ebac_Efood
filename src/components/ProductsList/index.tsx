import Product from "../Product"
import { Container, List } from "./styles"



const ProductsList = () => (
    <Container>
        <div className="container">
        <List>
            <Product 
                    description="Texto do parágrafo"
                    image="//placehold.it/472x217"
                    infos={['Destaque da Semana', 'Japonesa']}
                    title="Nome do reastaurante" 
                    number={4.9} 
            />
                <Product
                    description="Texto do parágrafo"
                    image="//placehold.it/472x217"
                    infos={['Destaque da Semana', 'Japonesa']}
                    title="Nome do reastaurante"
                    number={4.9}
                />
                <Product
                    description="Texto do parágrafo"
                    image="//placehold.it/472x217"
                    infos={['Destaque da Semana', 'Japonesa']}
                    title="Nome do reastaurante"
                    number={4.9}
                />
                <Product
                    description="Texto do parágrafo"
                    image="//placehold.it/472x217"
                    infos={['Destaque da Semana', 'Japonesa']}
                    title="Nome do reastaurante"
                    number={4.9}
                />
                <Product
                    description="Texto do parágrafo"
                    image="//placehold.it/472x217"
                    infos={['Destaque da Semana', 'Japonesa']}
                    title="Nome do reastaurante"
                    number={4.9}
                />
                <Product
                    description="Texto do parágrafo"
                    image="//placehold.it/472x217"
                    infos={['Destaque da Semana', 'Japonesa']}
                    title="Nome do reastaurante"
                    number={4.9}
                />
        </List>
        </div>
    </Container>
)

export default ProductsList