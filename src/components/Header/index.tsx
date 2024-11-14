import { HeaderBar, Imagem, LinkItem, Links, Logo} from "./styles"
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
                    
                    <Logo src={logo} width={125} height={60} alt="Ebac-Efood" /> 
                   
                    <LinkItem>
                        <a href="#">0 produto(s) no carrinho</a>
                    </LinkItem>
                </Links>
            </nav>
        </HeaderBar>  
    </Imagem>
)

export default Header