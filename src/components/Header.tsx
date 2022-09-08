// import libraries
import {useState} from "react";

// import next components
import Link from "next/link";
import { useRouter } from 'next/router';

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
import { SearchBy } from '../interfaces';

// import styles
import styles from './Header.module.css';

// TODO: fix changing size of search bar

export default function Header() {
  const [searchName, setSearchName] = useState<string>("");
  const [searchBy, setSearchBy] = useState<SearchBy>("any");

  const router = useRouter()

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
                <Link href='/' className={ styles.link }>Library</Link>
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
                    router.push({
                        pathname: '/search/[name]/[searchBy]',
                        query: { name: searchName, searchBy: searchBy },
                    })
                    console.log('Click!')
                }}
            />
            </Toolbar>
        </AppBar>
    </Box>
  )
}