import { Dispatch } from 'react';
import { User } from '../model/User';

export type StateType = {
    user: User;
}

export type ActionType =
  | { type: "GET_USER" }
  | { type: "SET_USER"; user: User }

export type UserDispath = Dispatch<ActionType>;