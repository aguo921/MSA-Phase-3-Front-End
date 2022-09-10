// import material UI components
import TextField from "@mui/material/TextField";

// import interfaces
import { SearchBarProps } from '../interfaces';

import {KeyboardEvent, ChangeEvent} from 'react';

function SearchBar(props: SearchBarProps) {
    return (
        <TextField
            id="search-bar"
            className="text"
            value={props.value}
            label="Search the library..."
            variant="filled"
            placeholder="Search..."
            size="small"
            sx={{
                bgcolor: "white",
                width: '100%',
                maxWidth: '600px'
            }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                props.setValue(e.target.value);
            }}
            onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter'){
                    props.onEnter()
                }
            }}
        />
    )
}

export default SearchBar;