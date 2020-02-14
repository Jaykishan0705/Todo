import {ACTIVE, COMPLETED, stateInterface, taskInterface} from "./actions";
import {SHOWALL} from "./actions";
import { createSelector } from 'reselect'
import _ from 'lodash';

const getVisibleTodos = createSelector([_.property('state')],
    (state: stateInterface) => {
        const activeTab = state.activeTab;
        const tasks = state.tasks;
        let visibleTodos: taskInterface[] = [];
        if(activeTab === SHOWALL){
            visibleTodos = tasks;
        }
        else if(activeTab == ACTIVE){
            visibleTodos = tasks.filter((obj: taskInterface)=>{
                if(obj.todoStatus == ACTIVE){
                    return 1;
                }
            })
        }
        else{
            visibleTodos = tasks.filter((obj: taskInterface)=>{
                if(obj.todoStatus == COMPLETED){
                    return 1;
                }
            })
        }
        return visibleTodos;
    }
);

// const getVisibleTodos = (state: stateInterface)=>{
//
//     const activeTab: string = state.activeTab;
//     const tasks: taskInterface[] = state.tasks;
//     let visibleTodos: taskInterface[] = [];
//
//     const memoizedGetVisibleTodos = (): void => createSelector([activeTab,tasks],
//     memoizedGetVisibleTodos();
//     return visibleTodos;
// };


export default getVisibleTodos;
