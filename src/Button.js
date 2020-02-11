import React, {Fragment} from 'react'
import {ACTIVE, CHANGETAB, COMPLETED,SHOWALL} from "./App";

function Button({dispatch}) {
    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                dispatch({type: 'ADDTODO', text: event.target['todo-input'].value})
                {event.target['todo-input'].value = ''}
            }}>
                <input type="text" name={"todo-input"}/>
                <button type="submit">
                    Add
                </button>
            </form>

            <button onClick={() => dispatch({type: CHANGETAB, tab: SHOWALL})}>
                all
            </button>
            <button onClick={() => dispatch({type: CHANGETAB, tab: ACTIVE})}>
                active
            </button>
            <button onClick={() => dispatch({type: CHANGETAB, tab: COMPLETED})}>
                completed
            </button>
        </div>

    )
}

export default Button;