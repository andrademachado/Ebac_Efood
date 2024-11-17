import Food from "../../models/Food"
import Product from "../Product"
import { Container, List } from "./styles"

export type Props = {
    foods: Food[]
}

const ProductsList = ({ foods }: Props) => (
    <Container>
        <div className="container">
        <List>
            {foods.map(food => (
                <Product
                        key={food.id}
                        description={food.description}
                        image={food.image}
                        infos={food.infos}
                        title={food.title}
                        number={food.number} 
                />
            ))}                
        </List>
        </div>
    </Container>
)

export default ProductsList