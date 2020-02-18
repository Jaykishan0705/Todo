import React, { useCallback, useMemo, useReducer} from 'react';
import TodoList from "./TodoList";
import Form from "./Form";
import reducer from "./reducer";
import getVisibleTodos from "./getVisibleTodos";
import FilterTabPanel from "./FilterTabPanel";

import {TaskInterface, StateInterface} from "./interface";
import {ACTION_TYPES} from "./actionTypes";
import {VISIBILLITY_FILTERS} from "./visibilityFilter";
import {TODO_STATUS} from "./todoStatus";

import './App.css';

const {ADD_TODO,CLEAR_COMPLETED_TODO,CHANGE_FILTER,TOGGLE_TODO} = ACTION_TYPES;
const {SHOW_ALL} = VISIBILLITY_FILTERS;
const {ACTIVE_TODO} = TODO_STATUS;

const initialState: StateInterface = {
    tasks: [],
    activeTab: SHOW_ALL
};

function TodoApp() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const visibleTodos: TaskInterface[] = useMemo(()=> getVisibleTodos(state),[state]);

    const clearCompletedTodos = useCallback(()=> dispatch({type: CLEAR_COMPLETED_TODO, payload: {}}),[]);

    const onTabChange = useCallback((tab: string)=> dispatch({type: CHANGE_FILTER, payload: {tab}}),[]);

    const submitTodo = useCallback(todo=> dispatch({type: ADD_TODO, payload: {text: todo}}),[]);

    const toggleTodo = useCallback((id: string)=> dispatch({type: TOGGLE_TODO, payload: {id: id}}), []);

    const remainingTask =useMemo(()=> state.tasks.filter((task: TaskInterface) => task.todoStatus === ACTIVE_TODO).length,[state.tasks]);

    return (
        <div>
            <Form submitTodo={submitTodo}/>
            <FilterTabPanel onTabChange={onTabChange}/>
            <TodoList todos={visibleTodos} toggleTodo={toggleTodo} />
            <p> {remainingTask} item left</p>
            <button onClick={clearCompletedTodos}> Clear Completed </button>
        </div>
    );
}

export default TodoApp;




