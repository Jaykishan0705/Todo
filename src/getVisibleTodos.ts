import {POSSIBLR_VISIBILLITY_FILTERS} from "./constants/visibilityFilter";
import {TODO_STATUSES} from "./constants/todoStatus";
import {IState, ITask} from "./types";


const {SHOW_ALL, ACTIVE, COMPLETED} = POSSIBLR_VISIBILLITY_FILTERS;
const {ACTIVE_TODO, COMPLETED_TODO} = TODO_STATUSES;

export default function getVisibleTodos(activeTab: IState['activeTab'], tasks: IState['tasks']) {
    let visibleTodos: ITask[] = [];
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