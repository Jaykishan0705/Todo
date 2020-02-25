import uniqueId from "uuid/v1"
import {ACTION_TYPES} from "./constants/actionTypes";
import {TODO_STATUSES} from "./constants/todoStatus";
import {ActionType, IState, ITask,ITodoState} from "./types";

const {ACTIVE_TODO, COMPLETED_TODO} = TODO_STATUSES;
const {CHANGE_FILTER, ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED_TODO,UNDO,REDO} = ACTION_TYPES;

export default function reducer(state: IState, action: ActionType): IState {

    switch (action.type) {
        case ADD_TODO: {
            const currentTasks = state.tasks;
            const foo1 = {
                tasks: currentTasks.concat({
                    todo: action.payload.text,
                    id: uniqueId(),
                    todoStatus: ACTIVE_TODO
                }),
                activeTab: state.activeTab
            };
            const newPastTasks = state.pastState.concat(foo1);
            const newFutureTask: ITodoState[] = [];
            return {
                tasks: foo1.tasks,
                activeTab: foo1.activeTab,
                pastState: newPastTasks,
                futureState: newFutureTask
            }
        }
        case TOGGLE_TODO: {

            const newTask = state.tasks.map((task: ITask) => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        todoStatus: task.todoStatus === ACTIVE_TODO ? COMPLETED_TODO : ACTIVE_TODO
                    };
                }
                return task;
            });

            const foo1 = {
                tasks: newTask,
                activeTab: state.activeTab
            };

            const newPastTasks = state.pastState.concat(foo1);
            const newFutureTask: ITodoState[] = [];
            return {
                ...foo1,
                pastState: newPastTasks,
                futureState: newFutureTask
            }
        }
        case CHANGE_FILTER: {
            const foo1 = {
                tasks: state.tasks,
                activeTab: action.payload.tab
            };
            const newPastTasks = state.pastState.concat(foo1);
            const newFutureTask: ITodoState[] = [];
            return {
                ...foo1,
                pastState: newPastTasks,
                futureState: newFutureTask
            }
        }
        case CLEAR_COMPLETED_TODO: {
            const foo1 = {
                activeTab: state.activeTab,
                tasks: state.tasks.filter((task: ITask) => task.todoStatus === ACTIVE_TODO)
            };
            const newPastTasks = state.pastState.concat(foo1);
            const newFutureTask: ITodoState[] = [];
            return {
                ...foo1,
                pastState: newPastTasks,
                futureState: newFutureTask
            }
        }
        case UNDO: {
            if(state.pastState.length === 1){
                return state;
            } else {
                const newPastState = state.pastState.slice(0,state.pastState.length - 1);
                const newFutureState = state.futureState.concat(state.pastState[state.pastState.length - 1]);
                return {
                    tasks: newPastState[newPastState.length - 1].tasks,
                    activeTab: newPastState[newPastState.length - 1].activeTab,
                    pastState: newPastState,
                    futureState: newFutureState
                }
            }
        }
        case REDO: {
            if(state.futureState.length === 0){
                return state;
            } else {
                const newFutureState = state.futureState.slice(0,state.futureState.length - 1);
                const newPastState = state.pastState.concat(state.futureState[state.futureState.length - 1]);
                return {
                    tasks: newPastState[newPastState.length - 1].tasks,
                    activeTab: newPastState[newPastState.length - 1].activeTab,
                    pastState: newPastState,
                    futureState: newFutureState
                }
            }
        }
        default:
            return state;
    }
}