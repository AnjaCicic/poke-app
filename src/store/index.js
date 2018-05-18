import { createStore, compose } from 'redux';

import initState from './initState';
import reducers from './reducers';
import middleware from './middleware';

export default () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    reducers,
    initState,
    composeEnhancers(
      middleware(),
    ),
  );
};
