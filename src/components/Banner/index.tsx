import BannerImg from '../../assets/images/macarrao4.png'
import {  BackImg, Texto, Title } from './style'

const Banner = () => (
    <>
        <BackImg style={{ backgroundImage: `url(${BannerImg})` }} >
            <div className='container'>                
                <div>
                    <Title>Italiana</Title>
                    <Texto>La Dolce Vita Trattoria</Texto>
                </div>
            </div>
        </BackImg>
    </>
        
    
)

export default Banner

