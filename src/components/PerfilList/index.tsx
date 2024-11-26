import Perfil from "../Perfil"
import { Container, List } from "./styles"
import pizza from '../../assets/images/pizza.png'
import { Food } from "../../pages/Home"

export type Props = {
    foods: Food[];
}

const PerfilList = ({ foods }: Props) => {

    return(
    <Container>
        <div className="container">
        <List>
            {foods.flatMap((food) => 
            food.cardapio?.map((item) =>(
                <Perfil
                    key={item.id}
                    description={item.descricao}
                    image={item.foto}
                    defultCover={item.foto}
                    title={item.nome}
                    number={item.preco} 
                    name={item.nome}                />
            )) || [] 
            )}                
        </List>
        </div>
    </Container>
    );
}
    

export default PerfilList