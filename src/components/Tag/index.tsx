import { TagContainer } from './style';

type Props = {
    size?: 'small' | 'big';
    children: JSX.Element
}

const Tag = () => (
    <TagContainer>
        Nome Tag
    </TagContainer>
)

export default Tag