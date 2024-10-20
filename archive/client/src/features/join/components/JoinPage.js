import { Box, Container, Paper, TextField, Typography } from '@mui/material';
import { yyyymmdd } from 'utils';
import GroupIcon from '@mui/icons-material/Group';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import JoinVerticalStepper from './JoinVerticalStepper';

export default function JoinPage() {
	const title = 'Boston Badminton Tournament 2022';
	const organizer = "Badminton World Federation";
	const location = "Kuala Lumpur, Malaysia";
	const startDate = new Date(2022, 11, 24);
	const endDate = new Date(2022, 11, 25);
	return (
		<Container maxWidth="md">
			<Typography variant="h1">Join Tournament</Typography>
			<Typography variant="h5">{title}</Typography>
			<Box sx={{ display: 'flex' }}>
				<Typography variant="subtitle1"><GroupIcon />{organizer}</Typography>
				<Box m={2} />
				<Typography variant="subtitle1"><LocationOnIcon />{location}</Typography>
			</Box>
			<Typography variant="subtitle2"><CalendarMonthIcon />{yyyymmdd(startDate)} - {yyyymmdd(endDate)}</Typography>
			<JoinVerticalStepper />
		</Container>
	)
}