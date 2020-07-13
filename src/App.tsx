/**
|--------------------------------------------------
| Dependencies
|--------------------------------------------------
*/
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ConnectedRouter } from 'connected-react-router';

/**
|--------------------------------------------------
| Modules
|--------------------------------------------------
*/
import store, { history } from './store';
import { Button } from './components';
import i18n from './utils/i18n';
import Routes from './routes';
import './scss/app.scss';

function App() {
  const [theme, setTheme] = useState('default');

  const handleToggleTheme = () => {
    if (theme === 'dark') {
      setTheme('default');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div className={`app theme--${theme}`}>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <ConnectedRouter history={history}>
            <Routes />
          </ConnectedRouter>
        </I18nextProvider>
      </Provider>
      <Button onClick={handleToggleTheme} className="toggle-theme" theme="red">
        Trocar tema
      </Button>
    </div>
  );
}

export default App;
