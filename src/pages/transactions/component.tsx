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

export const TransactionsComponent: React.FC = () => {
  return (
    <div className="transactions">
      <div className="transactions__content">
        <h1>Olá mundo, eu sou transactions</h1>
      </div>
    </div>
  );
};

export default TransactionsComponent;
