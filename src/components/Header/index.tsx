import { Bloco, Cart,  Imagem, LinkItem, Links, Logo} from "./styles"
import fundo from '../../assets/images/Fundo.png'
import logo from '../../assets/images/logo.png'


const Header = () => (
    <Imagem style={{ backgroundImage: `url(${fundo})`}}>    
            <Bloco className='container' >
            <nav >
                <Links >
                    <LinkItem>
                        <a href="#">Restaurantes</a>
                    </LinkItem>
                    <Logo src={logo} width={125} height={58} alt="Ebac-Efood" />
                    <LinkItem>
                        <Cart href="#">0 produto(s) no carrinho</Cart>
                    </LinkItem>
                </Links>
            </nav>
            </Bloco>
    </Imagem>
)

export default Header