import { applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import CardsOrchestrator from '../reducers/cards/orchestrator';
import DetailsOrchestrator from '../reducers/details/orchestrator';

export default () =>
  applyMiddleware(
    CardsOrchestrator(),
    DetailsOrchestrator(),
    reduxImmutableStateInvariant(),
  );
