export interface home {
    title: string
}

export interface taskData {
    title: string
    project: string;
    todo_complete: true;
    todo_assign_to: string;
    _id: string;
}

export interface stateType {
    root: any
}

export interface select {
    defaultValue: string;
    changeEvent: any | Function;
    options: Array<string>
    disable: boolean
}
