import BanneImg from '../../assets/images/macarrao3.jpg'
import { Imagem } from './style'

const Banner = () => (
    <>
        <Imagem style={{ backgroundImage: `url(${BanneImg})` }} >
            <h2>Italiana</h2>
        </Imagem>
    </>
        
    
)

export default Banner


{
    /*
    <div className='container'>
            <Bloco>                
                <Title>
                    Italiana
                </Title>
                <Texto>
                    La Dolce Vita Trattoria
                </Texto>
            </Bloco>

        </div>
    */
}