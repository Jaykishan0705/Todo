import React, {useReducer} from 'react';
import './App.css';
import ShowTasks from "./showtask";
import Button from "./Button";
import reducer from "./reducer";
import {SHOWALL, ACTIVE, CLEAR_COMPLETED_TODO, taskInterface, stateInterface} from "./actions";
import getVisibleTodos from "./getVisibleTodos";

let initialState : stateInterface = {
    tasks: [],
    activeTab:  SHOWALL
};

function remainingTask(tasks: taskInterface[]) {
    return tasks.filter((task:taskInterface)=>{
        return task.todoStatus === ACTIVE;
    }).length
}

function App() {

    const [state, dispatch] = useReducer(reducer,initialState);
    const visibleTodos: taskInterface[] = getVisibleTodos({state});
    return (
        <div>
            <Button dispatch={dispatch} />
            <ShowTasks visibleTodos={visibleTodos} dispatch={dispatch}/>
            <p> {remainingTask(state.tasks)} item left</p>
            <button onClick={()=>dispatch({type: CLEAR_COMPLETED_TODO})}> Clear Completed</button>
        </div>
    );
}

export default App;
