import { ThemeProps } from '../@types/ThemeProps';

export const ThemeDefault: ThemeProps = {
	appBackground: '#ffffff',
	header: {
		backgroundColor: '#273fad',
		textColor: '#FFFFFF',
	},
	todoInput: {
		input: '#000000',
		backgroundColor: '#F5F4F8',
		addButtonColor: '#3FAD27',
		inputContainerBackground: '#F5F4F8',
		placeHolderColor: 'rgba(61, 61, 77, 0.5)',
	},
	taskList: {
		header: '#3d3d4d',
		taskMarker: '#3D3D4D',
		taskText: '#3D3D4D',
		taskButtonDone: 'rgba(25, 61, 223, 0.1)',
		taskMarkerDone: '#273FAD',
		taskTextDone: '#A09CB1',
	},
};
