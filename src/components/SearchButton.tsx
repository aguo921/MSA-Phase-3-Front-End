// import material UI components
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

// import interfaces
import { SearchButtonProps } from '../interfaces';

function SearchButton(props: SearchButtonProps) {
    return (
        <div>
            <IconButton
                aria-label="search"
                onClick={() => {
                    props.onClick();
                }}
            >
                <SearchIcon style={{fill: "white"}} />
            </IconButton>
        </div>
    )
}

export default SearchButton;