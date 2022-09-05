// import libraries
import axios from "axios";
import {useState} from "react";

// import material UI components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

// import components
import Layout from '../components/Layout';
import BookList from "../components/BookList";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";

// import interfaces
import { SearchResults, SearchBy } from '../interfaces';

export default function Home() {
  const [searchName, setSearchName] = useState<string>("");
  const [searchInfo, setSearchInfo] = useState<SearchResults | undefined>(undefined);
  const [searchBy, setSearchBy] = useState<SearchBy>("any");

  const GOOGLE_BOOKS_BASE_URL = "https://www.googleapis.com/books/v1"

  return (
    <Layout>
      <Box sx={{flexGrow: 1}}>
        <AppBar
          position="static"
          sx={{padding: 1}}
        >
          <Toolbar>
            <Typography
              variant="h3"
              component="div"
              sx={{flexGrow: 1}}
            >
              Library
            </Typography>
            <Filter
              searchBy={searchBy}
              setSearchBy={setSearchBy}
            />
            <SearchBar
              value={searchName}
              setValue={setSearchName}
            />
            <SearchButton
              search={search}
            />
          </Toolbar>
        </AppBar>
      </Box>
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

  function search() {
    let query = searchName.replace(" ", "+");
    query = searchBy === "any" ? query : searchBy + ":" + query;
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