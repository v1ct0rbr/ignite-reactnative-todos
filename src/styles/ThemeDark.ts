import { ThemeProps } from '../@types/ThemeProps';

export const ThemeDark: ThemeProps = {
	appBackground: '#191d3a',
	header: {
		backgroundColor: '#282B5A',
		textColor: '#E1E1E6',
	},
	todoInput: {
		input: '#E1E1E6',
		backgroundColor: '#413A6F',
		addButtonColor: '#9347CA',
		inputContainerBackground: '#413A6F',
		placeHolderColor: 'rgba(225, 225, 230, 0.5)',
	},
	taskList: {
		header: '#E1E1E6',
		taskMarker: '#9347CA',
		taskText: '#E1E1E6',
		taskButtonDone: 'rgba(65, 58, 111, 0.5)',
		taskMarkerDone: '#9347CA',
		taskTextDone: '#E1E1E6',
	},
};
