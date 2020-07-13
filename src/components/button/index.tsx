/**
|--------------------------------------------------
| Dependencies
|--------------------------------------------------
*/
import React from 'react';

/**
|--------------------------------------------------
| Modules
|--------------------------------------------------
*/
import ActivityIndicator from '../activityIndicator';
import { ButtonProps } from './types';
import { useBem } from '../../hooks';
import Link from '../link';
import './styles.scss';

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    href,
    loading,
    theme,
    size,
    block,
    type,
    transparent,
    className,
    ...rest
  } = props;

  // Creates className
  const classNames = useBem(
    'button',
    {
      loading,
      theme,
      size,
      block,
      transparent,
    },
    className
  );

  if (href) {
    return (
      <Link className={classNames} href={href} {...rest}>
        {loading ? <ActivityIndicator size={20} /> : children}
      </Link>
    );
  }

  return (
    <button className={classNames} type={type || 'button'} {...rest}>
      {loading ? <ActivityIndicator size={20} /> : children}
    </button>
  );
};

export default Button;
