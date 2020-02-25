import React, {useCallback} from "react";
import {TODO_STATUSES} from "../constants/todoStatus";
import {ITask} from "../types";

interface ITodoListProps {
    todos: ITask[];
    onTodoClick: (id: string) => void
}

const {COMPLETED_TODO} = TODO_STATUSES;

const TodoList: React.FC<ITodoListProps> = (props: ITodoListProps): JSX.Element => {
    const {todos} = props;
    const onToggleTodo = useCallback(event => {console.log('nken');props.onTodoClick(event.target.dataset.id)}, [props.onTodoClick]);
    return (
        <ul className="Main">
            {
                todos.map((task: ITask) => {
                    return (
                        <div className="newtodo" key={task.id}>
                            <input type="checkbox" checked={task.todoStatus === COMPLETED_TODO}
                                   onChange={onToggleTodo}
                                   data-id={task.id}>
                            </input>
                            <div className="checkmark" onClick={onToggleTodo} data-id={task.id}></div>
                            <label className={task.todoStatus ===  COMPLETED_TODO ? "completed-todo":"active-todo"} data-id={task.id} onClick={onToggleTodo}>{task.todo}</label>
                        </div>
                    )
                })
            }
        </ul>
    )
};

export default TodoList


