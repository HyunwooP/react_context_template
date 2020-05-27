import { createContext, useContext } from 'react';
import { StateType, UserDispath } from './types';
import { User } from './model/User';

const StateContext = createContext<StateType | undefined>(undefined);
const DispatchContext = createContext<UserDispath | undefined>(undefined);

const GetState = () => {
  const state = useContext(StateContext);
  if (!state) throw new Error('getState in state is not found');
  return state;
}

const ActionDispatch = () => {
  const state = useContext(DispatchContext);
  if (!state) throw new Error('actionDispatch in state is not found');
  return state;
}

const initState = {
  user: User.createDefault('', '', '', '', '')
}

export {
  StateContext,
  DispatchContext,
  GetState,
  ActionDispatch,
  initState
}
