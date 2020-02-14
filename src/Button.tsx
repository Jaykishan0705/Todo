import React, {FormEvent} from 'react'
import {ACTIVE, ADD_TODO, addAction, changTabAction, CHANGETAB, COMPLETED, SHOWALL, ButtonProps,} from "./actions";

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const {dispatch} = props;
    return (
        <div>
            <form onSubmit={(event: any) => {
                event.preventDefault();

                dispatch({type: ADD_TODO, text: event.target["todo-input"].value});
                {
                    event.target["todo-input"].value = ''
                }
            }}>
                <input type="text" name={"todo-input"} />
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