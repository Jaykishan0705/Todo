import {ACTIVE, COMPLETED} from "./App";

export const SHOWALL = "SHOWALL";

function getVisibleTodos(tasks,tabStatus) {
    let visibleTodos = [];
    if(tabStatus === SHOWALL){
        visibleTodos = tasks;
    }
    else if(tabStatus == ACTIVE){
        visibleTodos = tasks.filter((obj)=>{
            if(obj.isChecked == ACTIVE){
                return 1;
            }
        })
    }
    else{
        visibleTodos = tasks.filter((obj)=>{
            if(obj.isChecked == COMPLETED){
                return 1;
            }
        })
    }
    return visibleTodos;
}

export default getVisibleTodos;