import React, { Fragment } from 'react'

function Button({changeTab,addTask}){
    return (
        <Fragment>
            <form onSubmit={addTask}>
                <input type = "text" name={"todo-input"} />
                <button type="submit">
                    Add
                </button>
            </form>
            <button onClick={()=>changeTab(0)}>
                all
            </button>
            <button onClick={()=>changeTab(1)}>
                active
            </button>
            <button onClick={()=>changeTab(2)}>
                completed
            </button>
        </Fragment>
    )
}

export default Button;