import Button from "../Button";
import { Card, CardInfo, CardList, CardModal, Imagem,  Texto, Title } from "./styles";
import pizza from '../../assets/images/pizza.png'
import close from '../../assets/images/close 1.png'

const Hero = () => (
    <div className="container" >
        <CardModal>
            <CardInfo>
                <img src={pizza} alt="pizza marguerita" />
                <div>
                <h3>Pizza Marguerita</h3>
                <p>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.</p>
                <p> Serve: de 2 a 3 pessoas</p>
                <Button type="button" title="clique aqui para adicionar ao carrinho" variant="secondary" size="small">Adicionar ao carrinho - R$ 60,90</Button>    
                </div>
                <img src={close} alt="botao fechar" />                
            </CardInfo>
        </CardModal>
        
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