import Food from "../../models/Food"
import Perfil from "../Perfil"
import { Container, List } from "./styles"

export type Props = {
    foods: Food[]
}

const PerfilList = ({ foods }: Props) => (
    <Container>
        <div className="container">
        <List>
            {foods.map(food => (
                <Perfil
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

export default PerfilList