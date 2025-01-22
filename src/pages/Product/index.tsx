import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import PerfilList from '../../components/PerfilList';
import pizza from '../../assets/images/pizza.png';
import produto from '../../assets/images/produto.png'

const Product = () => {
    const { id } = useParams();
    return (
        <>
            <div>
                <Header />
                <Banner />
                <PerfilList
                    foods={[
                        {
                            id: 1,
                            description:
                                'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
                            title: 'Pizza Marguerita ',
                            infos: ['', ''],
                            image: pizza,
                            number: 4.9,
                        },
                        {
                            id: 2,
                            description:
                                'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
                            title: 'Pizza Marguerita ',
                            infos: ['', ''],
                            image: pizza,
                            number: 4.9,
                        },
                        {
                            id: 3,
                            description:
                                'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
                            title: 'Pizza Marguerita ',
                            infos: ['', ''],
                            image: pizza,
                            number: 4.9,
                        },
                        {
                            id: 4,
                            description:
                                'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
                            title: 'Pizza Marguerita ',
                            infos: ['', ''],
                            image: pizza,
                            number: 4.9,
                        },
                        {
                            id: 5,
                            description:
                                'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
                            title: 'Pizza Marguerita ',
                            infos: ['', ''],
                            image: pizza,
                            number: 4.9,
                        },
                        {
                            id: 6,
                            description:
                                'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
                            title: 'Pizza Marguerita ',
                            infos: ['', ''],
                            image: pizza,
                            number: 4.9,
                        }
                    ]}
                />
                <Gallery defaultCover={produto} name="Pizza Margherita" />
            </div>
        </>
    );
};

export default Product;
