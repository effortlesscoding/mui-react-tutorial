import React from 'react'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import { fade, makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.black, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.black, 0.25),
		},
		marginLeft: 0,
		marginBottom: 15,
		border: '1px solid gray',
		float: 'left',
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '70%',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
	inputSelectLabel: {
		display: 'inline',
		marginLeft: 50,
		marginRight: 20,
	},
	inputSelect: {
		border: '1px solid gray',
		width: 80,
	}

}));

const SearchBox = () => {
	const classes = useStyles();
	const [pageCount, setpageCount] = React.useState(10);
	const handleChange = (event) => {
		setpageCount(event.target.value);
	};
	const [view, setView] = React.useState(10);
	const handleChangeView = (event) => {
		setView(event.target.value);
	};
	return (
		<div>
			<div>
				<h1>Projects</h1>
			</div>
			<div className={classes.search}>
				<div className={classes.searchIcon}>
					<SearchIcon />
				</div>
				<InputBase
					placeholder="Search…"
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					inputProps={{ 'aria-label': 'search' }} />

			</div>
			<div>
				<InputLabel className={classes.inputSelectLabel}>Show:</InputLabel>
				<Select className={classes.inputSelect}
					value={pageCount}
					onChange={handleChange}>
					<MenuItem value={10}>10</MenuItem>
					<MenuItem value={20}>20</MenuItem>
					<MenuItem value={50}>50</MenuItem>
					<MenuItem value={100}>100</MenuItem>
				</Select>

				<InputLabel className={classes.inputSelectLabel}>View:</InputLabel>
				<Select className={classes.inputSelect}
					value={view}
					onChange={handleChangeView}>
					<MenuItem value={10}>All</MenuItem>
					<MenuItem value={20}>Recruiter</MenuItem>
				</Select>
			</div>
		</div>
	)
}
export default SearchBox;