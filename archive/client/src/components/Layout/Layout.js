import Navbar from './Navbar';
import Footer from './Footer';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const RootBox = styled(Box)`
	min-height: 100vh;
	display: flex;
	flex-flow: column;
`
export default function Layout({ children }) {
  return (
    <RootBox>
      <Navbar />
      {children}
			<Footer />
    </RootBox>
  )
}

export const getLayout = page => <Layout>{page}</Layout>