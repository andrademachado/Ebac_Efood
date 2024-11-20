import BannerImg from '../../assets/images/macarrao5.png'
import { BackImg, Texto, Title } from './style'

const Banner = () => (
    <>
        <BackImg style={{ backgroundImage: `url(${BannerImg})` }} >
            <div className='container'>
                <div>
                    <Title>Italiana</Title>
                    <Texto>La Dolce Vita </Texto>
                </div>
            </div>
        </BackImg>
    </>


)

export default Banner

