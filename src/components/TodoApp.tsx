import React, {useCallback, useEffect, useMemo, useReducer} from 'react';
import TodoList from "./TodoList";
import TodoInputForm from "./TodoInputForm";
import FilterTabPanel from "./FilterTabPanel";
import reducer from "../reducer";
import getVisibleTodos from "../getVisibleTodos";

import {IState, ITask} from "../types";
import {ACTION_TYPES} from "../constants/actionTypes";
import {POSSIBLR_VISIBILLITY_FILTERS} from "../constants/visibilityFilter";
import {TODO_STATUSES} from "../constants/todoStatus";

import '../App.css'

const {ADD_TODO, CLEAR_COMPLETED_TODO, CHANGE_FILTER, TOGGLE_TODO,UNDO,REDO} = ACTION_TYPES;
const {SHOW_ALL} = POSSIBLR_VISIBILLITY_FILTERS;
const {ACTIVE_TODO} = TODO_STATUSES;
const KEYCODE_OF_Z = 90;

const initialState: IState = {
    tasks: [],
    activeTab: SHOW_ALL,
    pastState: [{tasks: [],activeTab: SHOW_ALL}],
    futureState: []
};

function TodoApp() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCompletedTodos = useCallback(() => dispatch({type: CLEAR_COMPLETED_TODO}), [dispatch]);

    const onTabChange = useCallback((tab: string) => dispatch({type: CHANGE_FILTER, payload: {tab}}), [dispatch]);

    const submitTodo = useCallback(todo => dispatch({type: ADD_TODO, payload: {text: todo}}), [dispatch]);

    const toggleTodo = useCallback((id: number) => dispatch({type: TOGGLE_TODO, payload: {id}}), [dispatch]);

    const remainingTaskCount = useMemo(() => state.tasks.filter((task: ITask) => task.todoStatus === ACTIVE_TODO).length, [state.tasks]);

    const visibleTodos: ITask[] = useMemo(() => getVisibleTodos(state.activeTab, state.tasks), [state]);

    const handleUndoRedoOnKeyDown = useCallback(event=> {

        if(event.keyCode === KEYCODE_OF_Z && event.metaKey === true && event.shiftKey === true){
            event.preventDefault();
            dispatch({type: REDO});
        }
        else if(event.keyCode === KEYCODE_OF_Z && event.metaKey === true){
            event.preventDefault();
            dispatch({type: UNDO});
        }
    },[dispatch]);

    useEffect(()=>{
       document.addEventListener("keydown",handleUndoRedoOnKeyDown);

        return ()=> document.removeEventListener("keydown", handleUndoRedoOnKeyDown);

    },[handleUndoRedoOnKeyDown]);

    return (
        <div className="App bg-white mt-32 mb-10">
            <TodoInputForm submitTodo={submitTodo}/>
            <TodoList todos={visibleTodos} onTodoClick={toggleTodo}/>
            <div className="footer flex justify-around items-center font-sans font-light h-12">
                <p> {remainingTaskCount} item left</p>
                <FilterTabPanel onTabChange={onTabChange} currentTab={state.activeTab}/>
                <button className="tab m-1 p-1 font-sans font-thin" onClick={clearCompletedTodos}> Clear Completed</button>
            </div>
        </div>
    );
}

export default TodoApp;


