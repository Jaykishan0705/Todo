import React, {useCallback} from 'react'

const TODO_INPUT = "todo-input";

interface IFormProps {
    submitTodo: (todo: string) => void
}

const TodoInputForm: React.FC<IFormProps> = (props) => {

    const onSubmitTodo = useCallback(event => {
        event.preventDefault();
        props.submitTodo(event.target[TODO_INPUT].value);
        event.target[TODO_INPUT].value = '';
    }, [props.submitTodo]);

    return (
        <form onSubmit={onSubmitTodo}>
            <input className="header" type="text" name={TODO_INPUT} placeholder="What needs to be done?"/>
        </form>
    )
};

export default TodoInputForm;