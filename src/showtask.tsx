import React, {useCallback} from "react";
import {addAction, COMPLETED, taskInterface, TOGGLE_TODO, toggleAction} from "./actions";

interface Props {
    dispatch: (action: addAction|toggleAction) => void;
    visibleTodos: taskInterface[]
}

const ShowTasks: React.FC<Props> = (props: Props) => {
    const {visibleTodos,dispatch} = props;
    const toggleTodo = useCallback((e)=>{
        dispatch({type: TOGGLE_TODO, id: e.target.dataset.id})
    },[]);
    return (
        <div>
            <ul>
                {
                    visibleTodos.map((todoitem:taskInterface) => {
                        return (
                            <div key={todoitem.id}>
                                <input type="checkbox" defaultChecked={todoitem.todoStatus == COMPLETED}
                                       onChange={toggleTodo} data-id={todoitem.id} />
                                {todoitem.todo}
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default ShowTasks

// reselect
