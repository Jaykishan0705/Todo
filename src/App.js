import React, {useReducer} from 'react';
import './App.css';
import ShowTasks from "./showtask";
import Button from "./Button";
import reducer from "./reducer";
export const ACTIVE = "ACTIVE";
export const COMPLETED = "COMPLETED";
export const CHANGETAB = 'CHANGE_TAB';
export const CLEAR_COMPLETEDTODO = 'CLEAR_COMPLETEDTODO';
export const SHOWALL = 'SHOWALL';
export const ADDTODO = 'ADDTODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const initialState = {
    tasks: [],
    activeTab: SHOWALL,
};

function remainingTask(tasks) {
    return tasks.filter((task)=>{
        return task.todoStatus === ACTIVE;
    }).length
}

function App() {

    const [state, dispatch] = useReducer(reducer,initialState);

    return (
        <div>
            <Button dispatch={dispatch} />
            <ShowTasks state={state} dispatch={dispatch}/>
            <p> {remainingTask(state.tasks)} item left</p>
            <button onClick={()=>dispatch({type: CLEAR_COMPLETEDTODO})}> Clear Completed</button>
        </div>
    );
}

export default App;
