import '@testing-library/jest-dom'
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'

import TodoInputForm from "../TodoInputForm";


test('add task', () => {

    const handleSubmit = jest.fn();

    const {getByTestId} = render(<TodoInputForm submitTodo={handleSubmit}/>);

    fireEvent.change(getByTestId('todoInputForm'),{
        target: {
            ["todo-input"]: { value: "New Todo"}
        }
    });

    fireEvent.submit(getByTestId('todoInputForm'));

    expect(handleSubmit).toHaveBeenCalledTimes(1);

    expect(handleSubmit).toHaveBeenCalledWith("New Todo");
});
