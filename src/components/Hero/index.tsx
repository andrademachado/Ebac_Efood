import Button from "../Button";
import { Card, CardList, Imagem,  Texto, Title } from "./styles";
import pizza from '../../assets/images/pizza.png'

const Hero = () => (
    <div className="container" >
        
        <CardList>
        <Card >
            <div>
                    <Imagem className="image-container" src={pizza} alt="Pizza marguerita" />
            </div>
            <Title >
                <h3>Pizza Marguerita</h3>
            </Title>
            <Texto>
                A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                
                    <Button type="button" title="Clique aqui para adicionar ao carrinho" variant="secondary" size="big"> Adicionar ao carrinho</Button>            </Texto>
        </Card>
        <Card >
            <div>
                    <Imagem className="image-container" src={pizza} alt="Pizza marguerita" />
            </div>
            <Title >
                <h3>Pizza Marguerita</h3>
            </Title>
            <Texto>
                A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!

                <Button type="button" title="clique aqui para adicionar ao carrinho" variant="secondary" size="big">Adicionar ao carrinho</Button>
            </Texto>
        </Card>
        <Card >
            <div>
                    <Imagem className="image-container" src={pizza} alt="Pizza marguerita" />
            </div>
            <Title >
                <h3>Pizza Marguerita</h3>
            </Title>
            <Texto>
                A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                <Button type="button" title="clique aqui para adicionar ao carrinho" variant="secondary" size="big">Adicionar ao carrinho</Button>
            </Texto>
        </Card>
        </CardList>
        
    

        
        </div>   
)

export default Hero