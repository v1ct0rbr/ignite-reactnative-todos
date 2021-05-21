import React, { useState } from 'react';
import {
	FlatList,
	TouchableOpacity,
	View,
	Text,
	StyleSheet,
	FlatListProps,
	TouchableOpacityProps,
	StyleSheetProperties,
} from 'react-native';
import { TaskListThemeProps } from '../@types/ThemeProps';

function FlatListHeaderComponent() {
	return (
		<View>
			<Text style={styles.header}>Minhas tasks</Text>
		</View>
	);
}

interface MyTasksListProps {
	tasks: {
		id: number;
		title: string;
		done: boolean;
	}[];
	onPress: (id: number) => void;
	onLongPress: (id: number) => void;
	theme: TaskListThemeProps;
}

export function MyTasksList({ tasks, onLongPress, onPress, theme }: MyTasksListProps) {
	const themeStyle = StyleSheet.create({
		header: {
			color: theme.header,
		},
		taskMaker: {
			borderColor: theme.taskMarker,
		},
		taskText: {
			color: theme.taskText,
		},
		taskButtonDone: {
			backgroundColor: theme.taskButtonDone,
		},
		taskMarkerDone: {
			backgroundColor: theme.taskMarkerDone,
		},
		taskTextDone: {
			color: theme.taskTextDone,
		},
	});

	return (
		<FlatList
			data={tasks}
			keyExtractor={(item) => String(item.id)}
			renderItem={({ item, index }) => {
				return (
					<TouchableOpacity
						testID={`button-${index}`}
						activeOpacity={0.7}
						onPress={() => onPress(item.id)}
						onLongPress={() => onLongPress(item.id)}
						style={item.done ? [styles.taskButtonDone, themeStyle.taskButtonDone] : styles.taskButton}

						//TODO - use onPress, onLongPress and style props
					>
						<View
							testID={`marker-${index}`}
							style={
								item.done
									? [styles.taskMarkerDone, themeStyle.taskMarkerDone]
									: [styles.taskMarker, themeStyle.taskMaker]
							}
							//TODO - use style prop
						/>
						<Text
							//TODO - use style prop
							style={item.done ? [styles.taskTextDone, themeStyle.taskTextDone] : [themeStyle.taskText]}
						>
							{item.title}
						</Text>
					</TouchableOpacity>
				);
			}}
			ListHeaderComponent={
				<View>
					<Text style={[styles.header, themeStyle.header]}>Minhas tasks</Text>
				</View>
			}
			ListHeaderComponentStyle={{
				marginBottom: 20,
			}}
			style={{
				marginHorizontal: 24,
				marginTop: 32,
			}}
		/>
	);
}

const styles = StyleSheet.create({
	header: {
		//color: '#3D3D4D',
		fontSize: 24,
		fontFamily: 'Poppins-SemiBold',
	},
	taskButton: {
		flex: 1,
		paddingHorizontal: 10,
		paddingVertical: 12,
		marginBottom: 4,
		borderRadius: 4,
		flexDirection: 'row',
		alignItems: 'center',
	},
	taskMarker: {
		height: 16,
		width: 16,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#3D3D4D',
		marginRight: 10,
	},
	taskText: {
		//color: '#3D3D4D',
	},
	taskButtonDone: {
		flex: 1,
		paddingHorizontal: 10,
		paddingVertical: 12,
		marginBottom: 4,
		borderRadius: 4,
		//backgroundColor: 'rgba(25, 61, 223, 0.1)',
		flexDirection: 'row',
		alignItems: 'center',
	},
	taskMarkerDone: {
		height: 16,
		width: 16,
		borderRadius: 8,
		backgroundColor: '#273FAD',
		marginRight: 10,
	},
	taskTextDone: {
		color: '#A09CB1',
		textDecorationLine: 'line-through',
	},
});
