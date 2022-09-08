// import material UI components
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// import components
import Layout from '../../../components/Layout';
import BookList from "../../../components/BookList";
import Header from '../../../components/Header';

import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    if (context.params && context.params.name) {
        let query = context.params.name
        query = context.params.searchBy === "any" ? query : context.params.searchBy + ":" + query
        const res = await fetch(`${process.env.GOOGLE_BOOKS_BASE_URL}/volumes?q=${query}&key=${process.env.API_KEY}`)
        const data = await res.json()
        if (!data) {
            return {
                notFound: true,
            }
        }
    
        return {
            props: { data }
        }

    } else {
        return {
            notFound: true
        }
    }

}

export default function SearchResults({ data }: any) {
  return (
    <Layout>
      <Header />
      <Container maxWidth="sm">
        {data && data.items ? (
          <>
            <Typography sx={{mt: 5, textAlign: "center"}}>
              {`Displaying ${data.items.length} out of ${data.totalItems} search results.`}
            </Typography>
            <BookList books={data.items} />
          </>
        ) : (
          <Typography sx={{mt: 5, textAlign: "center"}}>
            Book not found
          </Typography>
        )}
      </Container>
    </Layout>
  )
}