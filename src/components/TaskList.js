import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

function TaskList() {
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		if (!task.text || /^\s*$/.test(task.text)) {
			return;
		}

		const newTask = [task, ...tasks];
		setTasks(newTask);
	};

	const updateTask = (taskId, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}
		setTasks((prev) =>
			prev.map((item) => (item.id === taskId ? newValue : item))
		);
	};

	const removeTask = (id) => {
		const removeArr = [...tasks].filter((task) => task.id !== id);
		setTasks(removeArr);
	};

	const completeTask = (id) => {
		let updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				task.isComplete = !task.isComplete;
			}
			return task;
		});
		setTasks(updatedTasks);
	};
	return (
		<div>
			<h1>Task List</h1>
			<TaskForm onSubmit={addTask} />
			<Task
				tasks={tasks}
				completeTask={completeTask}
				removeTask={removeTask}
				updateTask={updateTask}
			/>
		</div>
	);
}

export default TaskList;
