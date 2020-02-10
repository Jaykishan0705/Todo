import React from 'react';
import './App.css';
import ShowTasks from "./showtask";
import getVisibleTodos, {SHOWALL} from "./getVisibleTodos";
import Button from "./Button";

const uuidv1 = require('uuid/v1');
export const ACTIVE = "ACTIVE";
export const COMPLETED = "COMPLETED";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tasks: [], tab: SHOWALL};
    }

    changeTab = (tabStatus) => {
        this.setState(() => ({
            tab: tabStatus
        }))
    };

    addTask = (event) => {
        event.preventDefault();
        let newTasks = this.state.tasks;
        newTasks.push(
            {
                task: event.target['todo-input'].value,
                isChecked: ACTIVE,
                id: uuidv1()
            }
        );
        this.setState(() => ({
            tasks: newTasks,
        }));
        event.target['todo-input'].value = '';
    };

    toggleTodo = (id1) => {
        let newTasks = this.state.tasks;
        newTasks.forEach((obj) => {
            if (obj.id == id1) {
                if (obj.isChecked === ACTIVE) {
                    obj.isChecked = COMPLETED;
                } else {
                    obj.isChecked = ACTIVE;
                }
            }
        });
        this.setState(() => ({
            tasks: newTasks,
        }));
    };
    clearTodos = () => {
        const newTask = this.state.tasks.filter((obj) => {
            return obj.isChecked !== COMPLETED
        });
        this.setState(() => ({
            tasks: newTask,
        }))
    };

    remainingTask = () => {
        return this.state.tasks.filter((task) => {
            return task.isChecked !== COMPLETED
        }).length
    };


    render() {
        let visibleTodos = getVisibleTodos(this.state.tasks, this.state.tab);
        return (
            <div>
                <Button changeTab={this.changeTab} addTask={this.addTask}/>
                <ShowTasks tasks={visibleTodos} toggle={this.toggleTodo}/>
                <p> {this.remainingTask()} item left</p>
                <button onClick={this.clearTodos}> Clear Completed</button>
            </div>
        )
    }
}

export default App;
