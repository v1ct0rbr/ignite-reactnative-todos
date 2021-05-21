
export interface HeaderThemeProps {
	backgroundColor: string;
	textColor: string;
}

export interface TodoInputThemeProps {
	backgroundColor: string;
	addButtonColor: string;
	placeHolderColor: string;
	inputContainerBackground: string;
	input: string;
}

export interface TaskListThemeProps {
	header: string;
	taskMarker: string;
	taskText: string;
	taskButtonDone: string;
	taskMarkerDone: string;
	taskTextDone: string;
}

export interface ThemeProps {
	appBackground: string;
	header: HeaderThemeProps;
	todoInput: TodoInputThemeProps;
	taskList: TaskListThemeProps;
}
