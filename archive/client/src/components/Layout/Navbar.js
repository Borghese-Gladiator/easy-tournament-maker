import { AppBar, Box, Toolbar } from '@mui/material';
import Logo from '@/components/Logo';

function Navbar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
					<Logo />
					<Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;

/*
const AppBarStyled = styled(AppBar)`
	padding: 8px 16px;
	transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	box-shadow: none;
	backdrop-filter: blur(20px);
	border-style: solid;
	border-color: rgba(194, 224, 255, 0.08);
	border-width: 0px 0px thin;
	background: rgba(10, 25, 41, 0.7);
	color: rgb(160, 170, 180);
`
*/