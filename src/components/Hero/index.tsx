import Banner from "../Banner";
import Header from "../Header";
import pizza from '../../assets/images/pizza.png'
import PerfilList from "../PerfilList";
import Gallery from "../Gallery";
import produto from '../../assets/images/produto.png'
import Categories from "../../pages/Categories";

const Hero = () => (
    <>
        <ul>
            <PerfilList foods={[

                {
                    id: 1,
                    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
                    title: 'Pizza Marguerita ',
                    infos: ['', ''],
                    image: pizza,
                    number: 4.9
                },
                {
                    id: 2,
                    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
                    title: 'Pizza Marguerita ',
                    infos: ['', ''],
                    image: pizza,
                    number: 4.9
                }, {
                    id: 3,
                    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
                    title: 'Pizza Marguerita ',
                    infos: ['', ''],
                    image: pizza,
                    number: 4.9
                },
                {
                    id: 4,
                    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
                    title: 'Pizza Marguerita ',
                    infos: ['', ''],
                    image: pizza,
                    number: 4.9
                },
                {
                    id: 5,
                    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
                    title: 'Pizza Marguerita ',
                    infos: ['', ''],
                    image: pizza,
                    number: 4.9
                }, {
                    id: 5,
                    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
                    title: 'Pizza Marguerita ',
                    infos: ['', ''],
                    image: pizza,
                    number: 4.9
                }
            ]} />
        </ul>
        <div>Hero TESTE</div>
    </>
)

export default Hero