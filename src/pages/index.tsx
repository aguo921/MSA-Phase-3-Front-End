// import material UI components
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// import components
import Layout from '../components/Layout';
import Header from '../components/Header';

import { useTheme } from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';

export default function Home() {

  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Layout>
      <Header />
      <Container maxWidth="sm">
        <Typography variant={small ? 'h3' : 'h1'} sx={{mt: small ? 10 : 20, mb: 2}}>Library</Typography>
        <Typography>Explore the wonderful world of books...</Typography>
      </Container>
    </Layout>
  )
}