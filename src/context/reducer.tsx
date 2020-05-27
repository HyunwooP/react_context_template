import { StateType, ActionType } from './types';

export default (state: StateType, action: ActionType): StateType  => {
    switch (action.type) {
        case "GET_USER":
            return {
                user: state.user
            };
        case "SET_USER":
            return Object.assign({}, state, action.user);
        default:
            return state;
    }
}