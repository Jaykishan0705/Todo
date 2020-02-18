import React, {useCallback} from 'react'

export const TODO_INPUT = "todo-input";

interface Props {
    submitTodo: (todo: string)=> void
}

const Form: React.FC<Props> = (props: Props) => {

    const onSubmitTodo = useCallback(event => {
        event.preventDefault();
        props.submitTodo(event.target[TODO_INPUT].value);
        event.target[TODO_INPUT].value = '';
    },[props.submitTodo]);

   return (
        <div>
            <form onSubmit={onSubmitTodo}>
                <input type="text" name={TODO_INPUT}/>
                <button type="submit">
                    Add
                </button>
            </form>
        </div>
    )
};

export default Form;