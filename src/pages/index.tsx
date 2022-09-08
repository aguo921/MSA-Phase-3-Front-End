// import material UI components
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// import components
import Layout from '../components/Layout';
import Header from '../components/Header';

// Agenda
// TODO: Fix changing size of filter + search bar

export default function Home() {
  return (
    <Layout>
      <Header />
      <Container maxWidth="sm">
        <Typography variant="h1" sx={{py: 20}}>Library</Typography>
      </Container>
    </Layout>
  )
}