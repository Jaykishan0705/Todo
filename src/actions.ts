export const ACTIVE = "ACTIVE";
export const COMPLETED = "COMPLETED";
export const CHANGETAB = 'CHANGE_TAB';
export const CLEAR_COMPLETED_TODO = 'CLEAR_COMPLETED_TODO';
export const SHOWALL = 'SHOWALL';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export interface taskInterface{
    todo: string;
    id: string;
    todoStatus: string
}

export interface stateInterface{
    tasks : taskInterface[],
    activeTab : string
}
export interface addAction {
    type: typeof ADD_TODO;
    text: string
}
export interface toggleAction {
    type: typeof TOGGLE_TODO;
    id: string;
}

export interface changTabAction {
    type: typeof CHANGETAB;
    tab: string;
}

export interface clearAllTodo {
    type: typeof CLEAR_COMPLETED_TODO
}

export interface ButtonProps {
    dispatch: (action: addAction | changTabAction ) => void
}
