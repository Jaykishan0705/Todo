import React, {useCallback} from 'react'

export const TODO_INPUT = "todo-input";

interface IFormProps {
    submitTodo: (todo: string)=> void
}

const TodoInputForm: React.FC<IFormProps> = (props) => {

    const onSubmitTodo = useCallback(event => {
        event.preventDefault();
        props.submitTodo(event.target[TODO_INPUT].value);
        event.target[TODO_INPUT].value = '';
    },[props.submitTodo]);

   return (
        <>
            <form onSubmit={onSubmitTodo}>
                <input type="text" name={TODO_INPUT}/>
                <button type="submit">
                    Add
                </button>
            </form>
        </>
    )
};

export default TodoInputForm;