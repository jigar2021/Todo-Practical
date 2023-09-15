import React, { Fragment } from 'react';

//material-ui components
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import InputBase from '@mui/material/InputBase';

//receive Redux state via props, we invoke actions via props
const TodoItem = ({
	todoItem,
	onItemDelete,
	onUpdateTodo,
	onItemToggleComplete,
}) => {
	const handleTextChange = (event) => {
		onUpdateTodo(todoItem.id, event.target.value);
	};

	return (
		<Fragment>
			<ListItem>
				<Tooltip title="Completed" placement="right">
					<Checkbox
						checked={todoItem.completed}
						onChange={() => onItemToggleComplete(todoItem.id)}
					/>
				</Tooltip>

				<ListItemText
					primary={
						<InputBase
							multiline={true}
							value={todoItem.content}
							onChange={(event) => handleTextChange(event)}
						/>
					}
				/>

				<ListItemSecondaryAction
					onClick={() => onItemDelete(todoItem.id)}>
					<Tooltip title="Delete" placement="right">
						<IconButton aria-label="delete todo">
							<DeleteOutline />
						</IconButton>
					</Tooltip>
				</ListItemSecondaryAction>
			</ListItem>

			<Divider />
		</Fragment>
	);
};

export default TodoItem;
