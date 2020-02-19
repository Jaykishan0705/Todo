import {POSSIBLR_VISIBILLITY_FILTERS} from "./Constants/visibilityFilter";
import {POSSIBLE_TODO_STATUS} from "./Constants/todoStatus";
import {IState, ITask} from "./type";


const {SHOW_ALL, ACTIVE, COMPLETED} = POSSIBLR_VISIBILLITY_FILTERS;
const {ACTIVE_TODO, COMPLETED_TODO} = POSSIBLE_TODO_STATUS;

export default function getVisibleTodos(state: IState) {
    let visibleTodos: ITask[] = [];
    const activeTab = state.activeTab;
    const tasks = state.tasks;
    switch (activeTab) {
        case SHOW_ALL:
            visibleTodos = tasks;
            break;
        case ACTIVE:
            visibleTodos = tasks.filter((tasks: ITask) => tasks.todoStatus === ACTIVE_TODO);
            break;
        case COMPLETED:
            visibleTodos = tasks.filter((task: ITask) => task.todoStatus === COMPLETED_TODO);
            break;
        default:
            visibleTodos = tasks;
    }

    return visibleTodos;
}