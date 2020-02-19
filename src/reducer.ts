import uniqueId from "uuid/v1"
import {POSSIBLE_ACTION_TYPES} from "./Constants/actionTypes";
import {POSSIBLE_TODO_STATUS} from "./Constants/todoStatus";
import {ActionType, IState, ITask} from "./Constants/type";

const {ACTIVE_TODO,COMPLETED_TODO} = POSSIBLE_TODO_STATUS;
const {CHANGE_FILTER,ADD_TODO,TOGGLE_TODO,CLEAR_COMPLETED_TODO} = POSSIBLE_ACTION_TYPES;

export default function reducer(state: IState, action: ActionType): IState {
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
                tasks: state.tasks.map((task:ITask)=>{
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
                tasks: state.tasks.filter((task: ITask) => task.todoStatus === ACTIVE_TODO)
            };
        default:
            return state;
    }
}
