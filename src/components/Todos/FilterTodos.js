import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	SHOW_ALL_TODOS,
	SHOW_COMPLETED_TODOS,
	SHOW_ACTIVE_TODOS,
} from '../../redux/constants/constants';
import { filterTodos } from '../../redux/actions/todoActions';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const FilterTodos = (props) => {
	const [val, setVal] = useState(null);
	const open = Boolean(val);

	function handleClick(event) {
		setVal(event.currentTarget);
	}

	function handleClose() {
		setVal(null);
	}

	//dispatch filter action and close menu
	function handleChange(state) {
		props.filterTodos(state);
		handleClose();
	}

	return (
		<div style={{marginTop:'4rem'}}>
			<Button
				aria-owns={open ? 'fade-menu' : undefined}
				aria-haspopup="true"
				size="small"
				onClick={handleClick}>
				{props.todosFilter.split('_').join(' ')}
			</Button>
			<Menu 
				id="fade-menu"
				val={val}
				open={open}
				onClose={handleClose}>
				<MenuItem onClick={() => handleChange(SHOW_ALL_TODOS)}>
					All
				</MenuItem>
				<MenuItem onClick={() => handleChange(SHOW_ACTIVE_TODOS)}>
					InCompleted
				</MenuItem>
				<MenuItem onClick={() => handleChange(SHOW_COMPLETED_TODOS)}>
					Completed
				</MenuItem>
			</Menu>
		</div>
	);
};

//return action creators
function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			filterTodos,
		},
		dispatch
	);
}

//return data our component needs
function mapStateToProps({ todosFilter }) {
	return {
		todosFilter,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterTodos);
