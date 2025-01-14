import  pizza from '../../assets/images/produto.png'
import close from '../../assets/images/close 1.png'
import { Card,  Click,  Close,  Image, Texto, Titulo } from './styles'
import Button from '../Button'

const Gallery = () => (
    <>
    <Card className='container'>        
                <Image src={pizza} width={280} height={280}/>     
            <div>
                <Titulo>
                    Pizza Marguerita
                </Titulo>
                <Texto>
                    A pizza Margherita é uma pizza clássica da culinária italiana,
                    reconhecida por sua simplicidade e sabor<br />
                    inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco,<br />
                    queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de <br />
                    sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e <br />
                    as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas <br />
                    deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião
                    <br />
                    <br />
                    Serve: de 2 a 3 pessoas
                </Texto>
                <Texto>

                </Texto>
                <Click >
                    <Button type="button" title="clique aqui para adicionar ao carrinho" variant="secondary" size="small"  >Adicionar ao carrinho  - R$ 60,90 </Button>
                </Click>
            </div>
            <div>
                <Close src={close}  alt="botao fechar" />
            </div>    

        </Card>
     
    </>   
    
)

export default Gallery