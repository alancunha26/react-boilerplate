import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import history from './history';
import reducer from './ducks';
import sagas from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create store
const store = createStore(
  reducer(history),
  compose(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);

// then run the saga
sagaMiddleware.run(sagas);

export { history };
export default store;
