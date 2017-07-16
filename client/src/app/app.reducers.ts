import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { RouterState, routerReducer } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as heros from "./heros/heros.reducers";
import * as shared from './shared/shared.reducers';

export interface State {
  heros: heros.State;
  router: RouterState;
  shared: shared.State;
}

const reducers = {
  heros: heros.reducer,
  router: routerReducer,
  shared: shared.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

/**
 * Heros Reducers
 */
export const getHerosState = (state: State) => state.heros;
export const getHeros = createSelector(getHerosState, heros.getHeros);

/**
 * Shared Reducers
 */
export const getSharedState = (state: State) => state.shared;
export const getShowSidenav = createSelector(getSharedState, shared.getShowSidenav);