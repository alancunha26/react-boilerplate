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
import { DefaultTemplateProps } from './types';
import { SideBar } from '../../components';
import './styles.scss';

export const DefaultTemplate: React.FC<DefaultTemplateProps> = (props) => {
  const { children, sideBarProps } = props;

  return (
    <div className="default-template">
      <SideBar {...sideBarProps} />
      <div className="default-template__content">{children}</div>
    </div>
  );
};

export default DefaultTemplate;
