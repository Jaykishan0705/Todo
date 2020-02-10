import React from 'react';
import './App.css';
import ShowTasks from "./showtask";
import getVisibleTodos from "./getVisibleTodos";
import Button from "./Button";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tasks: [], count: 0, tab: 0, taskLeft: 0};
    }

    changeTab = (tabId) => {
        this.setState(() => ({
            tab: tabId
        }))
    };

    addTask = (event) => {
        event.preventDefault();
        let newTasks = this.state.tasks;
        newTasks.push(
            {
                task: event.target['todo-input'].value,
                isChecked: 0,
                id: this.state.count + 1
            }
        );
        let newCount = this.state.count + 1;
        let remainingTask = this.state.taskLeft;
        this.setState(() => ({
            tasks: newTasks,
            count: newCount,
            taskLeft: remainingTask + 1
        }));
        event.target['todo-input'].value = '';
    };

    toggleTodo = (id1) => {
        let newTasks = this.state.tasks;
        let taskleft = 0;
        newTasks.forEach((obj) => {
            if (obj.id == id1) {
                obj.isChecked = !obj.isChecked;
            }
            if (!obj.isChecked) {
                taskleft++;
            }
        });
        let newCount = this.state.count;
        this.setState(() => ({
            tasks: newTasks,
            count: newCount,
            taskLeft: taskleft
        }));
    };
    clearTodos = () => {
        const newTask = this.state.tasks.filter((obj) => {
            return !obj.isChecked
        });
        let sz = newTask.length;
        this.setState(() => ({
            tasks: newTask,
            taskLeft: sz
        }))
    };


    render() {
        let visibleTodos = getVisibleTodos(this.state.tasks, this.state.tab);
        return (
            <div>
                <Button changeTab={this.changeTab} addTask={this.addTask}/>
                <ShowTasks tasks={visibleTodos} toggle={this.toggleTodo}/>
                <p>{this.state.taskLeft} item left</p>
                <button onClick={this.clearTodos}> Clear Completed</button>
            </div>
        )
    }
}

export default App;
