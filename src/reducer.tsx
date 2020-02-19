import {ACTION_TYPES} from "./actionTypes";
import {TODO_STATUS} from "./todoStatus";

import {ActionType, StateInterface, TaskInterface} from "./interface";
import uniqueId from "uuid/v1"

const {ACTIVE_TODO,COMPLETED_TODO} = TODO_STATUS;
const {CHANGE_FILTER,ADD_TODO,TOGGLE_TODO,CLEAR_COMPLETED_TODO} = ACTION_TYPES;

export default function reducer(state: StateInterface, action: ActionType): StateInterface {
    switch (action.type) {
        case ADD_TODO:
            const currentTasks = state.tasks;
            return {
                ...state,
                tasks: [
                    ...currentTasks,
                    {
                        todo: action.payload.text,
                        id: uniqueId(),
                        todoStatus: ACTIVE_TODO
                    }
                ]
            };
        case TOGGLE_TODO: {
            return {
                ...state,
                tasks: state.tasks.map((task:TaskInterface)=>{
                    if(task.id === action.payload.id){
                        return {
                            ...task,
                            todoStatus: task.todoStatus === ACTIVE_TODO ? COMPLETED_TODO : ACTIVE_TODO
                        };
                    }
                    return task;
                })
            }
        }
        case CHANGE_FILTER:
            return {
                ...state,
                activeTab: action.payload.tab
            };
        case CLEAR_COMPLETED_TODO:
            return {
                ...state,
                tasks: state.tasks.filter((task: TaskInterface) => task.todoStatus === ACTIVE_TODO)
            };
        default:
            return state;
    }
}
