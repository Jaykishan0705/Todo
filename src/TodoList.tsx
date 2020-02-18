import React, {useCallback} from "react";
import {TaskInterface} from "./interface";
import {TODO_STATUS} from "./todoStatus";

interface Props {
    todos: TaskInterface[];
    toggleTodo: (id: string) => void
}

const {COMPLETED_TODO} = TODO_STATUS;


const TodoList: React.FC<Props> = (props: Props): JSX.Element => {
    const {todos} = props;
    const onToggleTodo = useCallback(event => props.toggleTodo(event.target.dataset.id), [props.toggleTodo]);
    return (
        <div>
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
        </div>
    )
};

export default TodoList


