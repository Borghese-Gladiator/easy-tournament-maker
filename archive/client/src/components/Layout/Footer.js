import { AppBar, Box, Toolbar, Typography } from '@mui/material';

function Footer() {
	return (
		<Box>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						MUI
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Footer;
