import { Children, useState } from "react";
import Button from "../Button";
import { ButtonLink, Clicker } from "../Button/styles";
import { Card, CardInfo, CardModal, Imagem, ImageModal, Modal, ModalContent, Texto, Title } from "./styles";
import pizza from '../../assets/images/pizza.png'
import close from '../../assets/images/close 1.png'
import { url } from "inspector";

interface  PerfilCard  {
    type: 'image' | 'video'
    url: string
}

const mock: PerfilCard[] = [
    {
        type: 'image',
        url: pizza
    }
]

type Props = {
    title: string;
    description: string;
    infos: string[]
    image: string
    number: number
    defultCover:string
    name: string
    
}

interface ModalState extends PerfilCard {    
    isViseble: boolean
}

const Perfil = ({
    title,
    description,
    infos,
    image,
    number,
    defultCover,
    name
}: Props) => {
    const [modal, setModal] = useState<ModalState>({
        isViseble: false,
        type:'image',
        url:'',
    })

    const[ModalEstaAberto, setModalEstaAberto] = useState(false);
    const [modalUrl, setModalUrl] = useState('');

    const getMediaCover = (item: PerfilCard) => {
        if (item.type === 'image') return item.url
        return defultCover
    }

    const closeModal = () => {
        setModal({
            isViseble: false,
            type: 'image',
            url: ''
        })
    }
    return (
        <>
            <div>
                {mock.map((media, index) => (
                    <Card >
                        <div key={media.url} onClick={() => {
                            setModal({
                                isViseble:true,
                                type: media.type,
                                url: media.url
                            })
                        }}>
                            <div key={media.url}>
                                <div >
                                    <Imagem className="image-container" src={getMediaCover(media)} alt={`media ${index + 1} do ${name}`} />
                                </div>
                                <Title >
                                    <h3>{title}</h3>
                                </Title>
                                <Texto>
                                    {description}
                                    <Button type="button" title="clique aqui para adicionar ao carrinho" variant="secondary" size="big"  >Adicionar ao carrinho</Button>
                                </Texto>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            {/*
            <Modal className={modal.isViseble ? 'visivel' : ''}>
                <ModalContent className="container" >
                    <CardModal>
                        {mock.map((media, index) => (
                            <CardInfo key={media.url}>
                                <ImageModal src={modal.url}
                                    alt={`media ${index + 1} de ${name}`} />
                                <div>
                                    <h3>{name}</h3>
                                    <p>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.</p>
                                    <p> Serve: de 2 a 3 pessoas</p>
                                    <Button type="button" title="clique aqui para adicionar ao carrinho" variant="secondary" size="small">Adicionar ao carrinho - R$ 60,90</Button>
                                </div>
                                <img src={close} width={16} height={16} alt="icone de fechar" 
                                onClick={() => {
                                    closeModal()
                                }} />
                            </CardInfo>
                        ))}
                    </CardModal>
                </ModalContent >
                <div
                    onClick={() => {
                        closeModal()
                    }} 
                className="overlay"
                ></div>
            </Modal>
            */}
            
        </>
    )
}
    
export default Perfil



