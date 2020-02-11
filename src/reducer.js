import {ACTIVE, ADDTODO, CHANGETAB, CLEAR_COMPLETEDTODO, COMPLETED, TOGGLE_TODO} from "./App";
const uuidv1 = require('uuid/v1');

export default function reducer(state,action) {
    switch (action.type) {
        case ADDTODO:
            const currentTasks = state.tasks;
            return {
                ...state,
                tasks: [
                    ...currentTasks,
                    {
                        todo: action.text,
                        id: uuidv1(),
                        todoStatus: ACTIVE
                    }
                ]
            };
        case TOGGLE_TODO: {
            return {
                ...state,
                tasks: state.tasks.map((task)=>{
                    if(task.id === action.id){
                        return {
                            ...task,
                            todoStatus: task.todoStatus === ACTIVE ? COMPLETED : ACTIVE
                        }
                    }
                    return task;
                })
            }
        }
        case CHANGETAB:
            return {
                ...state,
                activeTab: action.tab
            };
        case CLEAR_COMPLETEDTODO:
            return {
                ...state,
                tasks: state.tasks.filter((task)=>{
                    return task.todoStatus === ACTIVE
                })
            };
        default:
            return state;
    }
}
