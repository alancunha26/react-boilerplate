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
import { TypographyProps, TypographChildren } from './types';
import { useBem } from '../../hooks';
import './styles.scss';

export const Typography: TypographChildren & React.FC<TypographyProps> = (
  props
) => {
  const { children, element: Component, className, ...rest } = props;
  const classNames = useBem('typography', {}, className);

  if (!Component) {
    return (
      <span className={classNames} {...rest}>
        {children}
      </span>
    );
  }

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  );
};

const P: React.FC<TypographyProps> = ({ element, ...props }) => (
  <Typography element="p" {...props} />
);

const H1: React.FC<TypographyProps> = ({ element, ...props }) => (
  <Typography element="h1" {...props} />
);

const H2: React.FC<TypographyProps> = ({ element, ...props }) => (
  <Typography element="h2" {...props} />
);

const H3: React.FC<TypographyProps> = ({ element, ...props }) => (
  <Typography element="h3" {...props} />
);

const H4: React.FC<TypographyProps> = ({ element, ...props }) => (
  <Typography element="h4" {...props} />
);

const H5: React.FC<TypographyProps> = ({ element, ...props }) => (
  <Typography element="h5" {...props} />
);

const H6: React.FC<TypographyProps> = ({ element, ...props }) => (
  <Typography element="h6" {...props} />
);

const Small: React.FC<TypographyProps> = ({ element, ...props }) => (
  <Typography element="small" {...props} />
);

Typography.P = P;
Typography.H1 = H1;
Typography.H2 = H2;
Typography.H3 = H3;
Typography.H4 = H4;
Typography.H5 = H5;
Typography.H6 = H6;
Typography.Small = Small;
export default Typography;
