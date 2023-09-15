import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions/todoActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const AddTodo = ({ dispatch }) => {
	let input;

	return (
		<form
			autoComplete="off"
			onSubmit={(e) => {
				e.preventDefault();
				if (!input.value.trim()) {
					return;
				}
				dispatch(addTodo(input.value));
				input.value = '';
				input.style.height = 'auto';
			}}>
			<TextField
				inputRef={(node) => (input = node)}
				placeholder="Empty todo"
				fullWidth
				margin="normal"
				variant="outlined"
				autoFocus={true}
				multiline={true}
				spellCheck="false"
				InputLabelProps={{
					shrink: true,
				}}
			/>

			<Button
				style={{ float: 'right', marginTop: '8px' }}
				variant="contained"
				size="medium"
				color="primary"
				type="submit">
				Add Todo
			</Button>
		</form>
	);
};

export default connect()(AddTodo);
