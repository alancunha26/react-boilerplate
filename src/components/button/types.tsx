import { Theme } from '../../utils/typescript';

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  href?: string;
  block?: boolean;
  loading?: boolean;
  theme?: Theme;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  transparent?: boolean;
};
