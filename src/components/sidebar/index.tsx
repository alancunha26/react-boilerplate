/**
|--------------------------------------------------
| Dependencies
|--------------------------------------------------
*/
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

/**
|--------------------------------------------------
| Modules
|--------------------------------------------------
*/
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { APP_VERSION } from '../../utils/constants';
import { SideBarProps } from './types';
import { useBem } from '../../hooks';
import Button from '../button';
import Link from '../link';
import './styles.scss';

export const SideBar: React.FC<SideBarProps> = ({ routes }) => {
  // Gets the current location object
  const { location } = useHistory();

  // Menu opened boolean state
  const [closed, setClosed] = useState(false);

  // Current route index
  const index = routes.findIndex((o) => o.pathname === location.pathname);

  // Generates the className string
  const className = useBem('side-bar', { index, closed });

  // Translation
  const { t } = useTranslation();
  console.log('SideBar', t('hello_world'));

  return (
    <div className={className}>
      <div className="side-bar__header">
        <Button
          transparent
          theme="sideBarText"
          onClick={() => setClosed(!closed)}
        >
          <MenuIcon />
        </Button>
        <Button transparent theme="sideBarText" href="/settings">
          <SettingsIcon />
        </Button>
      </div>
      <div className="side-bar__center">
        <ul className="side-bar__list">
          {routes.map((route, i) => (
            <li key={i} className="side-bar__item">
              <Link href={route.pathname}>
                <span className="side-bar__itemIcon">
                  <route.icon />
                </span>
                <span className="side-bar__itemText">{route.description}</span>
              </Link>
            </li>
          ))}
        </ul>
        <span className="side-bar__indicator" />
      </div>
      <div className="side-bar__footer">
        <small>Versão {APP_VERSION}</small>
      </div>
    </div>
  );
};

export default SideBar;
