import { Children, useState } from "react";
import Button from "../Button";
import { ButtonLink, Clicker } from "../Button/styles";
import { Card, CardInfo, CardModal, Imagem, ImageModal, Modal, ModalContent, Texto, Title } from "./styles";
import pizza from '../../assets/images/pizza.png'
import close from '../../assets/images/close 1.png'
import { url } from "inspector";

type Props = {
    title: string;
    description: string;
    infos: string[]
    image: string
    number: number
}

const Perfil = ({
    title,
    description,
    infos,
    image,
    number
}: Props) => {
    const [ModalEstaAberto, setModalEstaAberto] = useState(false);
    

    return (
        <>
            
            <Card >
                <div >
                    <Imagem className="image-container" src={image} alt={title} />
                </div>
                <Title >
                    <h3>{title}</h3>
                </Title>
                <Texto>
                    {description}
                    <Button type="button" title="clique aqui para adicionar ao carrinho" variant="secondary" size="big" onClick={() => setModalEstaAberto(true)}  >Adicionar ao carrinho</Button>
                </Texto>
            </Card>
            <Modal className={ModalEstaAberto ? 'visivel' : ''} >
                <ModalContent className="container" >
                    <CardModal>
                        <CardInfo >
                            <ImageModal src={pizza} alt="pizza" />
                            <div>
                                <h3></h3>
                                <p>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.</p>
                                <p> Serve: de 2 a 3 pessoas</p>
                                <Button type="button" title="clique aqui para adicionar ao carrinho" variant="secondary" size="small">Adicionar ao carrinho - R$ 60,90</Button>
                            </div>
                            <img src={close} width={16} height={16} alt="icone de fechar" onClick={() => setModalEstaAberto(false)} />
                        </CardInfo>
                    </CardModal>
                </ModalContent >
                <div className="overlay"></div>
            </Modal>
        </>
    )
}

{/*
    Propriedades =
    
    image : Foto do sushi
    info: Tags =  Destaque da Semana / japonesa
    title nome do restaurante = Hioki Sushi 
    Number : numero da estrla
    description: Texto do paragrafo
    Button: tipo Botão
    */}
export default Perfil
