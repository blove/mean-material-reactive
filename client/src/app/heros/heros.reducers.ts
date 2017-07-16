import {
  CREATE_HERO,
  CREATE_HERO_ERROR,
  CREATE_HERO_SUCCESS,
  CREATE_HERO_DIALOG_CLOSE,
  CREATE_HERO_DIALOG_OPEN,
  LOAD_HEROS,
  LOAD_HEROS_ERROR,
  LOAD_HEROS_SUCCESS,
  REMOVE_HERO,
  REMOVE_HERO_ERROR,
  REMOVE_HERO_SUCCESS,
  Actions
} from "./heros.actions";
import { Hero } from "../models/hero";

export interface State {
  error?: Error,
  hero?: Hero,
  heros: Hero[];
}

const initialState: State = {
  heros: []
}

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {

    case CREATE_HERO:
      return { ...state, ...{
        error: undefined,
        hero: undefined
      }};

    case CREATE_HERO_ERROR:
      return { ...state, ...{
        error: action.payload.error
      }};

    case CREATE_HERO_SUCCESS:
      return { ...state, ...{
        hero: action.payload.hero,
        heros: (state.heros === undefined) ? [action.payload.hero] : [ ...state.heros, action.payload.hero ]
      }};

    case LOAD_HEROS:
      return { ...state, ...{
        error: undefined,
        heros: []
      }};

    case LOAD_HEROS_ERROR:
      return { ...state, ...{
        error: action.payload.error
      }};

    case LOAD_HEROS_SUCCESS:
      return { ...state, ...{
        heros: action.payload.heros
      }};

    case REMOVE_HERO:
      return { ...state, ...{
        error: undefined,
        hero: action.payload.hero
      }};

    case REMOVE_HERO_ERROR:
      return { ...state, ...{
        error: action.payload.error
      }};

    case REMOVE_HERO_SUCCESS:
      return { ...state, ...{
        heros: [ ...state.heros].filter(hero => hero._id !== action.payload.hero._id)
      }};

    default:
      return state;
  }
}

export const getHeros = (state: State) => state.heros;