import { ButtonContainer, ButtonLink, Clicker } from "./styles"

type Props = {
    type: 'button' | 'link' | 'styleButton'
    title: string
    to?: string
    onClick?: () => void
    children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
    if (type === 'button') {
        return(
            <ButtonContainer type="button" title={title} onClick={onClick}>
                {children}
            </ButtonContainer>
        )        
    };

    if(type === 'link') {
        return(
            <ButtonLink  to={to as string} title={title}>
                {children}
            </ButtonLink>
        )
    };
    
    if(type === 'styleButton'){
        return(
            <Clicker type="button" title={title} onClick={onClick}>
                {children}
            </Clicker>
        )
    }
    
    return null;

}
export default Button