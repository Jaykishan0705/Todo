import React, {useCallback} from "react";
import {TaskInterface} from "./interface";
import {TODO_STATUS} from "./todoStatus";

interface TodoListProps {
    todos: TaskInterface[];
    onTodoClick: (id: string) => void
}

const {COMPLETED_TODO} = TODO_STATUS;

const TodoList: React.FC<TodoListProps> = (props: TodoListProps): JSX.Element => {
    const {todos} = props;
    const onToggleTodo = useCallback(event => props.onTodoClick(event.target.dataset.id), [props.onTodoClick]);
    return (
        <>
            <ul>
                {
                    todos.map((todo: TaskInterface) => {
                        return (
                            <div key={todo.id}>
                                <input type="checkbox" defaultChecked={todo.todoStatus === COMPLETED_TODO}
                                       onChange={onToggleTodo}
                                       data-id={todo.id}/>
                                {todo.todo}
                            </div>
                        )
                    })
                }
            </ul>
        </>
    )
};

export default TodoList


