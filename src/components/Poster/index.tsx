import { Bloco,  Imagem, Logo, Texto } from "./styles"
import fundo from '../../assets/images/Fundo.png'
import logo from '../../assets/images/logo2.png'

const Poster = () => (
    
    <Imagem style={{ backgroundImage: `url(${fundo})` }}>
        <div className='container'>
            <Bloco>
            <Logo src={logo} width={125} height={58} alt="Ebac-Efood" /> 
                <Texto>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
                </Texto> 
            </Bloco>
            
        </div>
    </Imagem>
    
)

export default Poster