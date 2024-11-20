import Button from "../Button";
import { ButtonLink, Clicker } from "../Button/styles";
import { Card, Imagem, Texto, Title } from "./styles";
type Props = {
    title: string;
    description: string;
    infos: string[]
    image: string
    number: number
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
const Perfil = ({
    title,
    description,
    infos,
    image,
    number
}: Props) => (
    <Card>
        <div>
            <Imagem className="image-container" src={image} alt={title} />
        </div>
        <Title >
            <h3>{title}</h3>
        </Title>
        <Texto>
            {description}
            <Clicker className="button-container">Adicionar ao carrinho</Clicker>
        </Texto>
    </Card>
)
export default Perfil
