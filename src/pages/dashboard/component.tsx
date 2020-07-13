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
import {} from '../../components';
import './styles.scss';

export const DashboardComponent: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__content">
        <h1>Olá mundo, eu sou dashboard</h1>
      </div>
    </div>
  );
};

export default DashboardComponent;
