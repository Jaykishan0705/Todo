function getVisibleTodos(tasks,tabId) {
    let visibleTodos = [];
    if(tabId == 0){
        visibleTodos = tasks;
    }
    else if(tabId == 1){
        visibleTodos = tasks.filter((obj)=>{
            if(!obj.isChecked){
                return 1;
            }
        })
    }
    else{
        visibleTodos = tasks.filter((obj)=>{
            if(obj.isChecked){
                return 1;
            }
        })
    }
    return visibleTodos;
}

export default getVisibleTodos;