// Authenticate 
import { getLayout } from '@/components/Layout';
import { Box } from '@mui/system';
import JoinPage from 'features/join/components/JoinPage';

function Join() {
	return (
		<Box p={1} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
			<JoinPage />
		</Box>
	)
}

Join.getLayout = getLayout;

export default Join;
