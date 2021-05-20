import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import nextId, { setPrefix } from 'react-id-generator';
import { Alert } from 'react-native';
// import { showMessage, hideMessage } from 'react-native-flash-message';

interface Task {
	id: number;
	title: string;
	done: boolean;
}

export function Home() {
	const [tasks, setTasks] = useState<Task[]>([]);

	setPrefix('');

	async function handleAddTask(newTaskTitle: string) {
		//TODO - add new task if it's not empty
		if (newTaskTitle.trim() === '') {
			return;
		}
		if (checkDuplicated(newTaskTitle)) {
			/* await showMessage({
				message: 'Task já existe',
				type: 'danger',
				icon: 'danger',
			}); */
			return;
		}

		const newTask = { id: Number(nextId()), title: newTaskTitle, done: false } as Task;

		setTasks((oldTasks) => [...oldTasks, newTask]);
	}

	function handleMarkTaskAsDone(id: number) {
		//TODO - mark task as done if exists
		const updatedTasks = [...tasks];

		let doneTask = updatedTasks.find((task) => task.id === id);
		if (doneTask) {
			doneTask.done = !doneTask.done;
			setTasks(updatedTasks);
		}
	}

	function handleRemoveTask(id: number) {
		//TODO - remove task from state
		const updatedTasks = tasks.filter((task) => task.id !== id);

		setTasks(updatedTasks);
	}

	function checkDuplicated(newTask: string): boolean {
		return tasks.findIndex((task) => task.title.trim() === newTask.trim()) > -1;
	}

	return (
		<>
			<Header />

			<TodoInput addTask={handleAddTask} />

			<MyTasksList tasks={tasks} onPress={handleMarkTaskAsDone} onLongPress={handleRemoveTask} />
		</>
	);
}
