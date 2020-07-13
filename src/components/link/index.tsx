/**
|--------------------------------------------------
| Node Modules
|--------------------------------------------------
*/
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

/**
|--------------------------------------------------
| Local Modules
|--------------------------------------------------
*/
import helpers from '../../helpers';
import { LinkProps } from './types';
import { useBem } from '../../hooks';
import './styles.scss';

export const Link: React.FC<LinkProps> = (props) => {
  const { children, href, state, modal, className, ...rest } = props;
  const classNames = useBem('link', {}, className);

  if (helpers.isUrl(href)) {
    return (
      <a className={classNames} href={href} {...rest}>
        {children}
      </a>
    );
  }

  const toHref = { pathname: href, state: { modal, ...state } };

  return (
    <RouterLink to={toHref} className={classNames} {...rest}>
      {children}
    </RouterLink>
  );
};

export default Link;
