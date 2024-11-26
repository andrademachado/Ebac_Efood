import { Food } from "../../pages/Home"
import Product from "../Product"
import { Container, List } from "./styles"

export type Props = {
    foods: Food[]
}

const ProductsList = ({ foods }: Props) => {
        const getFoodTags = (food: Food) => {
        const tags: string[] = [];
        if (food.destacado) {
            tags.push("Destaque da Semana");
        }
        if (food.tipo) {
            tags.push(food.tipo);
        }
            return tags
    };
    return (
        <Container>
            <div className="container">
                <List>
                    {foods.map(food => (
                        <Product
                            key={food.id}
                            description={food.descricao}
                            image={food.capa}
                            infos={getFoodTags(food)}
                            title={food.titulo}
                            number={food.avaliacao}                            
                        />
                    ))}
                </List>
            </div>
        </Container>
    )
} 
    
export default ProductsList