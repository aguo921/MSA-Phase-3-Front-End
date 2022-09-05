import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { SearchButtonProps } from '../interfaces';

function SearchButton(props: SearchButtonProps) {
    return (
        <div>
            <IconButton
                aria-label="search"
                onClick={() => {
                    props.search();
                }}
                sx={{mr: 2}}
            >
                <SearchIcon
                    style={{fill: "white"}}
                />
            </IconButton>
        </div>
    )
}

export default SearchButton;