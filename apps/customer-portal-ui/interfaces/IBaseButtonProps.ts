
interface IBaseButtonProps {
    text: string;
    type: "submit" | "reset" | "button" | undefined;
    dark?: boolean;
    onClick?: () => void;
}

export default IBaseButtonProps;