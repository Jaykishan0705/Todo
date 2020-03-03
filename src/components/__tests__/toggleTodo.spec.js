import TodoList from "../TodoList";
import {render, fireEvent, screen} from '@testing-library/react';
import React from "react";

test('toggle todo', ()=>{

    const handleTodoToggle = jest.fn();

    const fakeTodos = [{
        todo: "lets play",
        id: "1",
        todoStatus: "@@status/ACTIVE"
    }];

    const {getByTestId} = render(<TodoList todos={fakeTodos} onTodoClick={handleTodoToggle} />);

    fireEvent.click(getByTestId(fakeTodos[0].id));

    expect(handleTodoToggle).toHaveBeenCalledWith(fakeTodos[0].id);

    expect(handleTodoToggle).toHaveBeenCalledTimes(1);
});