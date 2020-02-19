import {POSSIBLE_ACTION_TYPES} from "./actionTypes";
import {POSSIBLE_TODO_STATUS} from "./todoStatus";

const {ADD_TODO,TOGGLE_TODO,CLEAR_COMPLETED_TODO,CHANGE_FILTER} = POSSIBLE_ACTION_TYPES;
const {ACTIVE_TODO,COMPLETED_TODO} = POSSIBLE_TODO_STATUS;

export interface ITask {
    todo: string;
    id: string;
    todoStatus: typeof ACTIVE_TODO | typeof COMPLETED_TODO
}

export interface IState {
    tasks: ITask[],
    activeTab: string
}

interface IAddAction  {
    type: typeof ADD_TODO;
    payload: {
        text: string;
    }
}

interface IToggleAction {
    type: typeof TOGGLE_TODO;
    payload: {
        id: string;
    }
}

interface IChangTabAction {
    type: typeof CHANGE_FILTER;
    payload: {
        tab: string;
    }
}

interface IClearCompletedTodoAction {
    type: typeof CLEAR_COMPLETED_TODO;
    payload: {

    }
}

export type ActionType = IAddAction | IToggleAction | IChangTabAction | IClearCompletedTodoAction




