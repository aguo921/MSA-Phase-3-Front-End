// import libraries
import axios from "axios";
import {useState} from "react";

// import next components
import Link from "next/link";

// import material UI components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

// import components
import Layout from '../components/Layout';
import BookList from "../components/BookList";
import Header from '../components/Header';

// import interfaces
import { SearchResults, SearchBy } from '../interfaces';

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
        setQuery={setQuery}
        onSearch={onSearch}
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

  function onSearch() {
    axios
    .get(GOOGLE_BOOKS_BASE_URL + "/volumes?q=" + query)
    .then((res) => {
      setSearchInfo(res.data);
    })
    .catch((err) => {
      console.log("Book not found");
      setSearchInfo(undefined);
    });
  }
}