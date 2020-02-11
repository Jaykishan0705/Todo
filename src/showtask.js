import React from "react";
import {COMPLETED} from "./App";
import getVisibleTodos from "./getVisibleTodos";

function ShowTasks({state,dispatch}) {

    const visibleTodos = getVisibleTodos(state);
    return (
        <div>
            <ul>
                {
                    visibleTodos.map((obj) => {
                        return (
                            <div key={obj.id}>
                                <input type="checkbox" defaultChecked={obj.todoStatus == COMPLETED}
                                       onChange={(e) => {
                                           dispatch({type: 'TOGGLE_TODO', id: obj.id})
                                       }}/>
                                {obj.todo}
                            </div>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default ShowTasks