import {ACTION_TYPES} from "./constants/actionTypes";
import {TODO_STATUSES} from "./constants/todoStatus";

const {ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED_TODO, CHANGE_FILTER,UNDO,REDO} = ACTION_TYPES;
const {ACTIVE_TODO, COMPLETED_TODO} = TODO_STATUSES;

export interface ITask {
    todo: string;
    id: number;
    todoStatus: typeof ACTIVE_TODO | typeof COMPLETED_TODO
}

export interface ITodoState {
    tasks: ITask[],
    activeTab: string
}

export interface IState {
    tasks: ITask[],
    activeTab: string,
    pastState: ITodoState[],
    futureState: ITodoState[]
}

interface IAddAction {
    type: typeof ADD_TODO;
    payload: {
        text: string;
    }
}

interface IToggleAction {
    type: typeof TOGGLE_TODO;
    payload: {
        id: number;
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
}

interface IUndo {
    type: typeof UNDO;
}

interface IRedo {
    type: typeof REDO
}

export type ActionType = IAddAction | IToggleAction | IChangTabAction | IClearCompletedTodoAction | IUndo | IRedo




