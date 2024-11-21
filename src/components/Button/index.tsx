import { ButtonContainer, ButtonLink, } from "./styles"

export type Props = {
    type: 'button' | 'link' | 'styleButton'
    title: string
    to?: string
    onClick?: () => void
    children: string
    variant?: 'primary' | 'secondary'
    size?: 'small' | 'big'
}

const Button = ({ 
    type, 
    title, 
    to, 
    onClick, 
    children,
    variant = 'primary',
    size = 'small'
}: Props) => {
    if (type === 'button') {
        return(
            <ButtonContainer
            variant={variant} 
            size={size}
            type="button" 
            title={title}
            onClick={onClick}
            >
                {children}
            </ButtonContainer>
        )        
    }

    return (
        <ButtonLink to={to as string} title={title}>
            {children}
        </ButtonLink>
    )

}
export default Button