import {
    ACTIVE,
    ADD_TODO,
    CHANGETAB,
    CLEAR_COMPLETED_TODO,
    COMPLETED,
    taskInterface,
    TOGGLE_TODO,
    addAction,
    toggleAction,
    changTabAction,
    clearAllTodo,
    stateInterface
} from "./actions";
const uuidv1 = require('uuid/v1');

type dispactchAction = addAction | toggleAction | changTabAction | clearAllTodo

export default function reducer(state: stateInterface,action: dispactchAction):stateInterface {
    switch (action.type) {
        case ADD_TODO:
            const currentTasks = state.tasks;
            return {
                ...state,
                tasks: [
                    ...currentTasks,
                    {
                        todo: action.text as string,
                        id: uuidv1(),
                        todoStatus: ACTIVE
                    }
                ]
            };
        case TOGGLE_TODO: {
            return {
                ...state,
                tasks: state.tasks.map((task:taskInterface)=>{
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
                activeTab: action.tab as string
            };
        case CLEAR_COMPLETED_TODO:
            return {
                ...state,
                tasks: state.tasks.filter((task:taskInterface)=>{
                    return task.todoStatus === ACTIVE
                })
            };
        default:
            return state;
    }
}
