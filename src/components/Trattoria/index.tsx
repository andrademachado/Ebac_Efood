import Button from "../Button";
import { Botao, Card, CardDescricao, Imagem, Infos, Star, Texto, Title } from "./styles";
import star from '../../assets/images/star.png'
import { ButtonContainer } from "../Button/styles";
import Tag from "../Tag";
import { Link } from "react-router-dom";

type Props = {
    title: string;
    description:string;
    infos: string[]
    image:string
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

const Trattoria = ({
    title,
    description, 
    infos, 
    image, 
    number
}: Props) => (
    <Card >
        <CardDescricao>
            <div>
                <Imagem className="image-container" src={image} alt={title} />                
                <Infos>
                    {infos.map(info => <Tag key={info}>{info}</Tag>)}
                </Infos>
            </div>
            <div>
                <Title >
                    <h3>{title}</h3>
                    <Star >
                        <h3>{number}</h3>
                        <img src={star} width={21} height={21} alt="Estrela" />
                    </Star >
                </Title>
                <Texto>
                    {description}                    
                </Texto>
                <Botao>
                <Button type="link" to="/categories" title="Clique aqui para saber mais" >Saiba mais</Button>
                </Botao>
            </div>
        </CardDescricao> 
    </Card>
)

export default Trattoria