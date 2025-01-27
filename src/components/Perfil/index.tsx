import Button from "../Button";
import Gallery from "../Gallery";
import { BotaoPerfil, Card, Imagem, Texto, Title } from "./styles";


type Props = {
    title: string;
    description: string;
    infos: string[];
    image: string;
    number: number;
};

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
        <Title>
            <h3>{title}</h3>
        </Title>
        <Texto>
            {description}
            <BotaoPerfil >
                <Button
                    type="link"
                    title="Clique aqui para adicionar ao carrinho"
                    variant="secondary"
                    size="big"
                    to="/product/id"
                >
                    Adicionar ao carrinho
                </Button>
            </BotaoPerfil>

        </Texto>
    </Card>
);

export default Perfil;