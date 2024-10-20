import { Box, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';

function Logo({ fontSize }) {
	return (
		<Box>
			<AdbIcon sx={{ mr: 1 }} />
			<Typography
				variant="h6"
				noWrap
				component="a"
				href="/"
				sx={{
					mr: 2,
					fontFamily: 'monospace',
					fontWeight: 700,
					letterSpacing: '.3rem',
					color: 'inherit',
					textDecoration: 'none',
				}}
			>
				LOGO
			</Typography>
		</Box>
	)
}

export default Logo;
