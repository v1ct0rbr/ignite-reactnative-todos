import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { TodoInputThemeProps } from '../@types/ThemeProps';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
	addTask: (task: string) => void;
	theme: TodoInputThemeProps;
}

export function TodoInput({ addTask, theme }: TodoInputProps) {
	const [task, setTask] = useState('');
	const themeStyle = StyleSheet.create({
		button: {
			backgroundColor: theme.addButtonColor,
		},
		input: {
			backgroundColor: theme.backgroundColor,
			color: theme.input,
		},
		inputContainer: {
			backgroundColor: theme.inputContainerBackground,
		},
	});

	function handleAddNewTask() {
		addTask(task);
		setTask('');
		//TODO - Call addTask and clean input value
	}

	return (
		<View
			style={[
				styles.inputContainer,
				themeStyle.inputContainer,
				Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow,
			]}
		>
			<TextInput
				style={[styles.input, { color: themeStyle.input.color }]}
				placeholder="Adicionar novo todo..."
				placeholderTextColor={theme.placeHolderColor}
				returnKeyType="send"
				value={task}
				onChangeText={setTask}
				onSubmitEditing={handleAddNewTask}
				//TODO - use value, onChangeText and onSubmitEditing props
			/>
			<TouchableOpacity
				testID="add-new-task-button"
				activeOpacity={0.7}
				style={[styles.addButton, themeStyle.button]}
				onPress={handleAddNewTask}
				//TODO - onPress prop
			>
				<Image source={checkIcon} />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		borderRadius: 5,
		marginTop: -25,
		marginHorizontal: 40,
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		flex: 1,
		paddingLeft: 12,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
	},
	inputIOSShadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},
	inputAndroidShadow: {
		elevation: 5,
	},
	addButton: {
		height: 50,
		paddingHorizontal: 16,
		justifyContent: 'center',
		alignItems: 'center',
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
	},
});
