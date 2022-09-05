// import libraries
import {useState} from "react";
import axios from "axios";

// import next components
import Link from "next/link";

// import material UI components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

// import components
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";

// import interfaces
import { SearchBy, HeaderProps } from '../interfaces';

// import styles
import styles from './Header.module.css';

export default function Header(props: HeaderProps) {
  const [searchName, setSearchName] = useState<string>("");
  const [searchBy, setSearchBy] = useState<SearchBy>("any");

  const GOOGLE_BOOKS_BASE_URL = "https://www.googleapis.com/books/v1"

  return (
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
                <Link href='/' className={ styles.headerlink }>Library</Link>
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
                onClick={() => {
                    let query = searchName.replace(" ", "+");
                    query = searchBy === "any" ? query : searchBy + ":" + query;
                    axios
                    .get(GOOGLE_BOOKS_BASE_URL + "/volumes?q=" + query)
                    .then((res) => {
                        props.setSearchInfo(res.data);
                    })
                    .catch((err) => {
                        console.log("Book not found");
                        props.setSearchInfo(undefined);
                    });
                }}
            />
            </Toolbar>
        </AppBar>
    </Box>
  )
}