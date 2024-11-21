import Button from "../Button";
import { ButtonLink, Clicker } from "../Button/styles";
import { Card, Imagem, Texto, Title } from "./styles";
import Macarrao from '../../assets/images/macarrao5.png'

const Hero = () => (
    <div className="container" >
    <Card >
        <div>
            <Imagem className="image-container" src={Macarrao} alt="Macarrão com frutos do mar"/>
        </div>
        <Title >
            <h3>Pizza Marguerita</h3>
        </Title>
        <Texto>
            A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
            <Clicker className="button-container">Adicionar ao carrinho</Clicker>
        </Texto>
    </Card>
        <Card >
            <div>
                <Imagem className="image-container" src={Macarrao} alt="Macarrão com frutos do mar" />
            </div>
            <Title >
                <h3>Pizza Marguerita</h3>
            </Title>
            <Texto>
                A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                <Clicker className="button-container">Adicionar ao carrinho</Clicker>
            </Texto>
        </Card>
        <Card >
            <div>
                <Imagem className="image-container" src={Macarrao} alt="Macarrão com frutos do mar" />
            </div>
            <Title >
                <h3>Pizza Marguerita</h3>
            </Title>
            <Texto>
                A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                <Clicker className="button-container">Adicionar ao carrinho</Clicker>
            </Texto>
        </Card>
    </div>
)

export default Hero