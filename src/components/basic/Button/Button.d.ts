import { Button } from '@material-ui/core';

declare namespace IButton {
  export interface IProps extends Button {
    children: React.ReactNode | JSX.Element | JSX.Element[];
    onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    type?: 'button' | 'reset' | 'submit' | undefined;
    size?: 'small' | undefined;
    color?: color;
    backgroundcolormain?: string;
    modifier?: 'default' | 'outlined' | 'clear' | 'square' | undefined;
    active?: boolean;
    disableRipple?: boolean;
    disableFocusRipple?: boolean;
    fill?: string;
  }
}

export { IButton };
