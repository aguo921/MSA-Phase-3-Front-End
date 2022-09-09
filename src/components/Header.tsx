// import libraries
import {useState} from "react";

// import next components
import Link from "next/link";
import { useRouter } from 'next/router';

// import material UI components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// import components
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";

// import interfaces
import { SearchBy } from '../interfaces';

// import styles
import styles from './Header.module.css';

export default function Header() {
    const [searchName, setSearchName] = useState<string>("");
    const [searchBy, setSearchBy] = useState<SearchBy>("any");

    const router = useRouter();

    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'))

    function handleSearch() {
        router.push({
            pathname: '/search/[name]/[searchBy]',
            query: { name: searchName, searchBy: searchBy }
        })
    }

    return (
        <Box
            sx={{
                display: 'flex',
                p: 2,
                bgcolor: '#1976d2',
                flexWrap: small ? 'wrap' : 'nowrap'
            }}
        >
            <Box
                sx={{
                    width: small ? '100%' : 'fit-content',
                    p: 1
                }}
            >
                <Typography
                    variant="h4"
                    component="div"
                    sx={{
                        fontWeight: 'bold',
                        color: 'white'
                    }}
                >
                    <Link href='/' passHref>
                        <a href="replace" className={styles.link}>Library</a>
                    </Link>
                </Typography>
            </Box>

            <Box
                sx={{
                    py: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: '100%'
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                >
                    <Box
                        sx={{
                            px: 1,
                            width: small ? '25%' : '20%'
                        }}
                    >
                        <Filter
                            searchBy={searchBy}
                            setSearchBy={setSearchBy}
                        />
                    </Box>

                    <Box
                        sx={{
                            px: 1,
                            width: small ? '75%' : '50%'
                        }}
                    >
                        <SearchBar
                            value={searchName}
                            setValue={setSearchName}
                            onEnter={handleSearch}
                        />
                    </Box>
                </Box>

                <Box>
                    <SearchButton
                        onClick={handleSearch}
                    />
                </Box>
            </Box>
        </Box>
    )
}