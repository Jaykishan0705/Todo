import React, {useCallback} from "react";
import {TODO_STATUSES} from "../constants/todoStatus";
import {ITask} from "../types";

interface ITodoListProps {
    todos: ITask[];
    onTodoClick: (id: number) => void
}

const {COMPLETED_TODO} = TODO_STATUSES;

const TodoList: React.FC<ITodoListProps> = (props: ITodoListProps): JSX.Element => {
    const {todos} = props;
    const onToggleTodo = useCallback(event => {props.onTodoClick(event.target.dataset.id)}, [props.onTodoClick]);
    return (
        <ul className="Main w-full overflow-auto">
            {
                todos.map((task: ITask) => {
                    return (
                        <div className="newtodo w-full h-auto flex items-center font-sans break-all text-2xl font-thin" key={task.id}>
                            <input className="absolute opacity-0 ml-4" type="checkbox" checked={task.todoStatus === COMPLETED_TODO}
                                   onChange={onToggleTodo}
                                   data-id={task.id}>
                            </input>
                            <div className="checkmark ml-2 h-6 w-6" onClick={onToggleTodo} data-id={task.id}/>
                            <label data-testid = {task.id} className={task.todoStatus ===  COMPLETED_TODO ? "completed-todo ml-4 transition duration-150": "ml-4 transition duration-150"} data-id={task.id} onClick={onToggleTodo}>{task.todo}</label>
                        </div>
                    )
                })
            }
        </ul>
    )
};

export default TodoList


