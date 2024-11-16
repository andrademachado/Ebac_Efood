import Button from "../Button";
import Tag from "../Tag";
import { Card, CardDescricao, Star, Texto, Title } from "./styles";
import star from '../../assets/images/star.png'

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

const Product = ({
    title, 
    description, 
    infos, 
    image, 
    number
}: Props) => (
    <Card className="container" >
        <CardDescricao>
            <div>
                <img src={image} alt={title} />
                <div>
                    {infos.map(info => <Tag key={info}>{info}</Tag>)}
                </div>             
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
                
            </div>
        </CardDescricao>     
        
    </Card>
)

export default Product