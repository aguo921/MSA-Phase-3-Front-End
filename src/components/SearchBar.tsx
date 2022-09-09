// import material UI components
import TextField from "@mui/material/TextField";

// import interfaces
import { SearchBarProps } from '../interfaces';

function SearchBar(props: SearchBarProps) {
    return (
        <TextField
            id="search-bar"
            className="text"
            value={props.value}
            onChange={(prop: any) => {
                props.setValue(prop.target.value);
            }}
            label="Search the library..."
            variant="filled"
            placeholder="Search..."
            size="small"
            sx={{
                bgcolor: "white",
                width: '100%',
                maxWidth: '600px'
            }}
        />
    )
}

export default SearchBar;