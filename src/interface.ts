import {ACTION_TYPES} from "./actionTypes";
import {TODO_STATUS} from "./todoStatus";

const {ADD_TODO,TOGGLE_TODO,CLEAR_COMPLETED_TODO,CHANGE_FILTER} = ACTION_TYPES;
const {ACTIVE_TODO,COMPLETED_TODO} = TODO_STATUS

export interface TaskInterface {
    todo: string;
    id: string;
    todoStatus: typeof ACTIVE_TODO | typeof COMPLETED_TODO
}

export interface StateInterface {
    tasks: TaskInterface[],
    activeTab: string
}

type dispatchType = typeof ADD_TODO | typeof TOGGLE_TODO | typeof CLEAR_COMPLETED_TODO | typeof CHANGE_FILTER

interface PayloadInterface {
    text?: string,
    tab?: string,
    id?: string
}

export interface DispatchInterface{
    type: dispatchType
    payload: PayloadInterface
}

// export interface AddAction {
//     type: typeof ADD_TODO;
//     payload: PayloadInterface
// }

// export interface ToggleAction {
//     type: typeof TOGGLE_TODO;
//     payload: PayloadInterface
// }

// export interface ChangTabAction {
//     type: typeof CHANGE_FILTER;
//     payload: PayloadInterface
// }

// export interface ButtonProps {
//     dispatch: (action: AddAction | ChangTabAction) => void
// }



