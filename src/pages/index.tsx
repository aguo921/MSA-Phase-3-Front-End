// import libraries
import axios from "axios";
import {useState} from "react";

// import material UI components
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// import components
import Layout from '../components/Layout';
import BookList from "../components/BookList";
import Header from '../components/Header';

// import interfaces
import { SearchResults } from '../interfaces';

// Agenda
// TODO: Fix changing size of filter + search bar
// TODO: Separate home and search results pages
// TODO: Details page for each book
// TODO: Header component
// TODO: Add links

export default function Home() {
  const [searchInfo, setSearchInfo] = useState<SearchResults | undefined>(undefined);
  const [query, setQuery] = useState<string | undefined>(undefined);

  const GOOGLE_BOOKS_BASE_URL = "https://www.googleapis.com/books/v1"

  return (
    <Layout>
      <Header
        setSearchInfo={setSearchInfo}
      />
      <Container maxWidth="sm">
        {searchInfo ? (
          <>
            <Typography sx={{mt: 5, textAlign: "center"}}>
              {`Displaying ${searchInfo.items.length} out of ${searchInfo.totalItems} search results.`}
            </Typography>
            <BookList books={searchInfo.items} />
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