import pizza from '../../assets/images/produto.png';
import close from '../../assets/images/close 1.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Click, Close, Image, Modal, ModalContent, Texto, Titulo } from './styles';
import Button from '../Button';
import { useState } from 'react';

//tipagem da função pra ModalAberto ou ModalFechado
export type ModalState = {
    modalEstaAberto: boolean
}

//tipagem pro tipo de mídea .Se vai ser vídeo ou imagem
type GalleryItem = {
    type: 'image' | 'video'
    url: string
}

//código mockado, é um código rígido que serve apenas pra fim de preenchimento , até podermos fazer a substituição pelos dados da API .
const mock: GalleryItem[] = [
    {
        type: 'image',
        url: pizza,
    }
]

type Props = {
    defaultCover: string
    name: string
}

//função pra img/produto ( escolher = imagem/vídeo) ; e nome do produto;
const Gallery = ({ defaultCover, name }: Props) => {
    //função useState pra modal
    const [modalEstaAberto, setmodalEstaAberto] = useState(true);
    const getMediaCover = (item: GalleryItem) => {
        if (item.type === 'image') return item.url
        return defaultCover
    }
    return (
        <>
        
            <Modal className={modalEstaAberto ? 'visivel'  : ''}>
                {mock.map((media, index) => (
                    <ModalContent className='container' key={media.url}  >
                        <Image src={getMediaCover(media)}
                            width={280} height={280}
                            alt={`Mídia ${index + 1} de ${name}`} />
                        <div>
                            <Titulo>
                                {name}
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
                            <Click >
                                <Button type="button" title="clique aqui para adicionar ao carrinho" variant="secondary" size="small"  >Adicionar ao carrinho  - R$ 60,90 </Button>
                            </Click>                            
                        </div>
                        <Link to="/categories">
                            <Close
                                src={close}
                                alt="Ícone fechar"
                                onClick={() => setmodalEstaAberto(false)}
                            />
                        </Link>                        
                    </ModalContent>

                ))}                
                <Link to="/categories">
                    <div className="overlay" onClick={() => setmodalEstaAberto(false)}></div>
                </Link>
            </Modal>            
        </>
    )
}
export default Gallery

{/*
    /////esse códigos abaixo com links foram desenvolvidos pra fechar a modal e retornae a pagina de origem.//////
    
    <Link to="/categories">
                            <Close
                                src={close}
                                alt="Ícone fechar"
                                onClick={() => setmodalEstaAberto(false)}
                            />
                        </Link>                        
                    </ModalContent>

                ))}                
                <Link to="/categories">
                    <div className="overlay" onClick={() => setmodalEstaAberto(false)}></div>
                </Link>
    */}
