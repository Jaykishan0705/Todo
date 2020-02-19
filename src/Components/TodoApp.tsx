import React, { useCallback, useMemo, useReducer} from 'react';
import TodoList from "./TodoList";
import TodoInputForm from "./TodoInputForm";
import FilterTabPanel from "./FilterTabPanel";
import reducer from "../reducer";
import getVisibleTodos from "../getVisibleTodos";

import {IState, ITask} from "../Constants/type";
import {POSSIBLE_ACTION_TYPES} from "../Constants/actionTypes";
import {POSSIBLR_VISIBILLITY_FILTERS} from "../Constants/visibilityFilter";
import {POSSIBLE_TODO_STATUS} from "../Constants/todoStatus";

import '../App.css'

const {ADD_TODO,CLEAR_COMPLETED_TODO,CHANGE_FILTER,TOGGLE_TODO} = POSSIBLE_ACTION_TYPES;
const {SHOW_ALL} = POSSIBLR_VISIBILLITY_FILTERS;
const {ACTIVE_TODO} = POSSIBLE_TODO_STATUS;

const initialState: IState = {
    tasks: [],
    activeTab: SHOW_ALL
};

function TodoApp() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCompletedTodos = useCallback(()=> dispatch({type: CLEAR_COMPLETED_TODO, payload: {}}),[]);

    const onTabChange = useCallback((tab: string)=> dispatch({type: CHANGE_FILTER, payload: {tab}}),[]);

    const submitTodo = useCallback(todo=> dispatch({type: ADD_TODO, payload: {text: todo}}),[]);

    const toggleTodo = useCallback((id: string)=> dispatch({type: TOGGLE_TODO, payload: {id: id}}), []);

    const remainingTask =useMemo(()=> state.tasks.filter((task: ITask) => task.todoStatus === ACTIVE_TODO).length,[state.tasks]);

    const visibleTodos: ITask[] = useMemo(()=> getVisibleTodos(state),[state]);

    return (
        <div>
            <TodoInputForm submitTodo={submitTodo}/>
            <FilterTabPanel onTabChange={onTabChange}/>
            <TodoList todos={visibleTodos} onTodoClick={toggleTodo} />
            <p> {remainingTask} item left</p>
            <button onClick={clearCompletedTodos}> Clear Completed </button>
        </div>
    );
}

export default TodoApp;




