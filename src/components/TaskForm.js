import React, { useState, useEffect, useRef } from "react";

function TaskForm(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : "");

	const inputFocus = useRef(null);

	useEffect(() => {
		inputFocus.current.focus();
	});

	const handleOnChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});
		setInput("");
	};
	return (
		<form className='task-form' onSubmit={handleSubmit}>
			{props.edit ? (
				<>
					<input
						type='text'
						placeholder='Update'
						value={input}
						name='text'
						className='task-input edit'
						onChange={handleOnChange}
						ref={inputFocus}
					/>
					<button className='task-button edit'>Update</button>
				</>
			) : (
				<>
					<input
						type='text'
						placeholder='Add a task'
						value={input}
						name='text'
						className='task-input'
						onChange={handleOnChange}
						ref={inputFocus}
					/>
					<button className='task-button'>Add task</button>
				</>
			)}
		</form>
	);
}

export default TaskForm;
