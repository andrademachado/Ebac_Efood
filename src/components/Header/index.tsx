import { Cart, HeaderBar, Imagem, LinkItem, Links, Logo} from "./styles"
import fundo from '../../assets/images/Fundo.png'
import logo from '../../assets/images/logo.png'


const Header = () => (
    <Imagem style={{ backgroundImage: `url(${fundo})`}}>
        <HeaderBar className='container' >
            <nav >
                <Links >
                    <LinkItem>
                        <a href="#">Restaurantes</a>
                    </LinkItem>
                    
                    <Logo src={logo} width={100} height={48} alt="Ebac-Efood" /> 
                   
                    <LinkItem>
                        <Cart href="#">0 produto(s) no carrinho</Cart>
                    </LinkItem>
                </Links>
            </nav>
        </HeaderBar>  
    </Imagem>
)

export default Header