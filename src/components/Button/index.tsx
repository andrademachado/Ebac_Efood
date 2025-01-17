import { Children } from "react";
import { ButtonContainer, ButtonLink } from "./styles";
export type Props = {
    type?: 'button' | 'link';
    title: string;
    to?: string;
    onClick?: () => void;
    children: string;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'big';
    className?: string;
};
const Button = ({
    type,
    title,
    to,
    onClick,
    children,
    variant = "primary",
    size = 'small',
    className,

}: Props) => {
    if (type === 'button') {
        return (
            <ButtonContainer
                className={className}
                variant={variant}
                size={size}
                type="button"
                title={title}
                onClick={onClick}
            >
                {children}
            </ButtonContainer>
        );
    }
    return (
        <ButtonLink className={className} to={to as string} title={title} size={size} variant={variant}>
            {children}
        </ButtonLink>
    );
};
export default Button;