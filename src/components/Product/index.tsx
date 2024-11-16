import Button from "../Button";
import Tag from "../Tag";
import { Card, Info, Star, Texto, Title } from "./styles";
import star from '../../assets/images/star.png'
import sushi from '../../assets/images/sushi.png'

const Product = () => (
    <Card className="container" >
        <Info>
            <div>
                <img src={sushi} alt="Prato de sushi" />
                {/*
            <Tag>Destaque da semana</Tag>
            <Tag>Japonesa</Tag>
            
            */}
            </div>
            <div>
                <Title >
                    <h3>Hioki Sushi </h3>
                    <Star >
                        <h3>4.9</h3>
                        <img src={star} width={21} height={21} alt="Estrela" />
                    </Star >
                </Title>
                <Texto>
                    <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis <br />
                        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega <br />
                        rápida, embalagens cuidadosas e qualidade garantida.<br />
                        Experimente o Japão sem sair do lar com nosso delivery!</p>
                    {/*        <Button>Saiba mais</Button>            */}
                </Texto>
            </div>
        </Info>       
        
    </Card>
)

export default Product