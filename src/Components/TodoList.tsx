import React, {useCallback} from "react";
import {POSSIBLE_TODO_STATUS} from "../Constants/todoStatus";
import {ITask} from "../Constants/type";

interface ITodoListProps {
    todos: ITask[];
    onTodoClick: (id: string) => void
}

const {COMPLETED_TODO} = POSSIBLE_TODO_STATUS;

const TodoList: React.FC<ITodoListProps> = (props: ITodoListProps): JSX.Element => {
    const {todos} = props;
    const onToggleTodo = useCallback(event => props.onTodoClick(event.target.dataset.id), [props.onTodoClick]);
    return (
        <>
            <ul>
                {
                    todos.map((todo: ITask) => {
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


