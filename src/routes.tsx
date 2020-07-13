/**
|--------------------------------------------------
| Dependencies
|--------------------------------------------------
*/
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

/**
|--------------------------------------------------
| Modules
|--------------------------------------------------
*/
import * as Pages from './pages';
import { Router } from './components';
import { DefaultTemplate } from './templates';
import { ReactComponent as HomeIcon } from './assets/icons/home.svg';
import { ReactComponent as ReportsIcon } from './assets/icons/reports.svg';
import { ReactComponent as BudgetsIcon } from './assets/icons/budgets.svg';
import { ReactComponent as TransactionsIcon } from './assets/icons/transactions.svg';

const routes = [
  {
    pathname: '/',
    description: 'Visão geral',
    icon: HomeIcon,
  },
  {
    pathname: '/lancamentos',
    description: 'Lançamentos',
    icon: TransactionsIcon,
  },
  {
    pathname: '/relatorios',
    description: 'Relatórios',
    icon: ReportsIcon,
  },
  {
    pathname: '/metas',
    description: 'Metas',
    icon: BudgetsIcon,
  },
];

const Routes: React.FC = () => (
  <BrowserRouter>
    <Router.Private>
      <Switch>
        <DefaultTemplate sideBarProps={{ routes }}>
          <Route exact path="/" component={Pages.Dashboard} />
          <Route exact path="/lancamentos" component={Pages.Transactions} />
          <Route exact path="/relatorios" component={Pages.Reports} />
          <Route exact path="/metas" component={Pages.Budgets} />
        </DefaultTemplate>
      </Switch>
    </Router.Private>
  </BrowserRouter>
);

export default Routes;
