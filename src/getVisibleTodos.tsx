import {StateInterface, TaskInterface} from "./interface";
import {VISIBILLITY_FILTERS} from "./visibilityFilter";
import {TODO_STATUS} from "./todoStatus";

const {SHOW_ALL, ACTIVE, COMPLETED} = VISIBILLITY_FILTERS;
const {ACTIVE_TODO, COMPLETED_TODO} = TODO_STATUS;

export default function getVisibleTodos(state: StateInterface) {
    let visibleTodos: TaskInterface[] = [];
    const activeTab = state.activeTab;
    const tasks = state.tasks;
    switch (activeTab) {
        case SHOW_ALL:
            visibleTodos = tasks;
            break;
        case ACTIVE:
            visibleTodos = tasks.filter((tasks: TaskInterface) => tasks.todoStatus === ACTIVE_TODO);
            break;
        case COMPLETED:
            visibleTodos = tasks.filter((task: TaskInterface) => task.todoStatus === COMPLETED_TODO);
            break;
        default:
            visibleTodos = tasks;
    }

    return visibleTodos;
}