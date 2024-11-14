import { Imagem, Logo, Texto } from "./styles"
import fundo from '../../assets/images/Fundo.png'
import logo from '../../assets/images/logo.png'

const Poster = () => (
    <Imagem style={{ backgroundImage: `url(${fundo})` }}>
        <div className='container'>
        <Logo src={logo} width={125} height={57} alt="Ebac-Efood" /> 
            <Texto>
            Viva experiências gastronômicas
            <br />
                no conforto da sua casa
            </Texto>            
            
        </div>
    </Imagem>
)

export default Poster