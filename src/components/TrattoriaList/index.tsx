import Food from "../../models/Food"
import Trattoria from "../Trattoria"
import { Container, List } from "./styles"

export type Props = {
    foods: Food[]
}

const TrttoriaList = ({ foods }: Props) => (
    <Container>
        <div className="container">
        <List>
            {foods.map(food => (
                <Trattoria
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

export default TrttoriaList