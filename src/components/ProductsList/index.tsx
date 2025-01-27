import { Food } from "../../pages/Home";
import Product from "../Product";
import { Container, List } from "./styles";

export type Props = {
    foods: Food[];
};

const ProductsList = ({ foods }: Props) => (
    <Container>
        <div className="container">
            <List>
                {foods.map((food) => (
                    <Product
                        key={food.id}
                        id={food.id}
                        description={food.descricao}
                        title={food.titulo}
                        image={food.capa}
                        infos={[food.tipo]}
                        number={food.avaliacao}
                        destacado={food.destacado}
                    />
                ))}
            </List>
        </div>
    </Container>
);

export default ProductsList;
