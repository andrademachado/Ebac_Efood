import { Card, Container, Face, Insta, Logo, Redes, Texto, Title } from './styles'
import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/Instagran.png'
import face from '../../assets/images/Facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
    <Container>
        <Card className="container">
            <div>
                <Logo>
                    <img src={logo} alt="logo do Efood" />
                </Logo>
                <Redes>
                    <Insta href="#">
                        <img src={insta} alt="logo do instagran" />
                    </Insta>
                    <Face href="#">
                        <img src={face} alt="logo do Facebook" />
                    </Face>
                    <a href="#">
                        <img src={twitter} alt="logo do twitter" />
                    </a>
                </Redes>
                <Texto>
                    <h5>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade</h5>
                    <Title>dos produtos é toda do estabelecimento contratado.</Title>
                </Texto>
            </div>
        </Card>
    </Container>
)

export default Footer
