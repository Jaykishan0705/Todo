import React, { Fragment } from 'react'
import {SHOWALL} from "./getVisibleTodos";
import {ACTIVE, COMPLETED} from "./App";

function Button({changeTab,addTask}){
    return (
        <Fragment>
            <form onSubmit={addTask}>
                <input type = "text" name={"todo-input"} />
                <button type="submit">
                    Add
                </button>
            </form>
            <button onClick={()=>changeTab(SHOWALL)}>
                all
            </button>
            <button onClick={()=>changeTab(ACTIVE)}>
                active
            </button>
            <button onClick={()=>changeTab(COMPLETED)}>
                completed
            </button>
        </Fragment>
    )
}

export default Button;