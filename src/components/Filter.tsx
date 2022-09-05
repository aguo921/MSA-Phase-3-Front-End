import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { string } from "prop-types";

import { FilterProps, SearchBy } from "../interfaces";

function Filter(props: FilterProps) {
    return (
        <FormControl
            variant="filled"
            size="small"
            sx={{
                mr: 2,
                minWidth: 0.15,
                flexGrow: 0.5,
                bgcolor: "white"
            }}
        >
            <InputLabel id="filter-label">
                Search by...
            </InputLabel>
            <Select
                labelId="filter-label"
                value={props.searchBy}
                onChange={(event: SelectChangeEvent) => {
                    props.setSearchBy(event.target.value as SearchBy);
                }}
            >
                <MenuItem value={"any"} label="select-any">
                    Any
                </MenuItem>
                <MenuItem value={"intitle"} label="select-title">
                    Title
                </MenuItem>
                <MenuItem value={"inauthor"} label="select-author">
                    Author
                </MenuItem>
            </Select>
        </FormControl>
    )
}

export default Filter