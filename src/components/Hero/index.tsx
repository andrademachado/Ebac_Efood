import Button from "../Button";
import { Card, CardInfo, CardList, CardModal, Imagem,  ImageModal,  Modal,  ModalContent,  Texto, Title } from "./styles";
import pizza from '../../assets/images/pizza.png'
import close from '../../assets/images/close 1.png'

type CardInfo ={
    type: 'image' | 'video'
    url: string
}

const mock: CardInfo[] = [
    {
        type:'image',
        url: pizza
    }    
]

type Props = {
    defultCover: string
    name: string
}

const Hero = ({ defultCover, name }: Props) => {
    const getMediaCover = (item: CardInfo) => {
        if(item.type === 'image') return item.url
        return defultCover
    }

    return (
        <> 
        
            <Modal>
                <ModalContent className="container" >
                    <CardModal>
                        {mock.map((media, index) => (
                            <CardInfo key={media.url}>
                                <ImageModal src={getMediaCover(media)}
                                    alt={`media ${index + 1} de ${name}`} />
                                <div>
                                    <h3>{name}</h3>
                                    <p>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.</p>
                                    <p> Serve: de 2 a 3 pessoas</p>
                                    <Button type="button" title="clique aqui para adicionar ao carrinho" variant="secondary" size="small">Adicionar ao carrinho - R$ 60,90</Button>
                                </div>
                                <img src={close} width={16} height={16} alt="icone de fechar" />
                            </CardInfo>

                        ))}
                    </CardModal>

                </ModalContent >
                <div className="overlay"></div>
            </Modal>
        </>
)
}

export default Hero