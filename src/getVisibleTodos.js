import {ACTIVE, COMPLETED} from "./App";

function getVisibleTodos(state) {
    const {activeTab,tasks} = state;
    let visibleTodos = [];
    if(activeTab === 'SHOWALL'){
        visibleTodos = tasks;
    }
    else if(activeTab == ACTIVE){
        visibleTodos = tasks.filter((obj)=>{
            if(obj.todoStatus == ACTIVE){
                return 1;
            }
        })
    }
    else{
        visibleTodos = tasks.filter((obj)=>{
            if(obj.todoStatus == COMPLETED){
                return 1;
            }
        })
    }
    return visibleTodos;
}

export default getVisibleTodos;