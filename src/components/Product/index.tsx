import Button from "../Button";
import { Botao, Card, CardDescricao, Imagem, Infos, Star, Texto, Title } from "./styles";
import star from '../../assets/images/star.png';
import Tag from "../Tag";

type Props = {
    id: number;
    title: string;
    destacado?: boolean;
    infos: string[];
    description: string;
    image: string;
    number: number;
};

const Product = ({
    id,
    title,
    description,
    infos,
    image,
    number,
    destacado,
}: Props) => (
    <Card>
        <CardDescricao>
            <div>
                <Imagem className="image-container" src={image} alt={title} />
                <Infos>
                    {infos.map((info) => (
                        <Tag key={info}>{info}</Tag>
                    ))}
                    {destacado && <Tag key="destaque">Destaque da Semana</Tag>}
                </Infos>
            </div>
            <div>
                <Title>
                    <h3>{title}</h3>
                    <Star>
                        <h3>{number}</h3>
                        <img src={star} width={21} height={21} alt="Estrela" />
                    </Star>
                </Title>
                <Texto>{description}</Texto>
                <Botao>
                    <Button type={"link"} title={"Saiba mais"} size="small" to="/categories">
                        Saiba mais
                    </Button>
                </Botao>
            </div>
        </CardDescricao>
    </Card>
);

export default Product;
