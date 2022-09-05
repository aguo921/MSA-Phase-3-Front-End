// import material UI components
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// import interfaces
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
                onChange={
                    (event: SelectChangeEvent<typeof props.searchBy>) => {
                        const {
                            target: { value },
                        } = event;
                        props.setSearchBy(value as SearchBy)
                    }
                }
            >
                <MenuItem value={"any"} key={"any"}>
                    Any
                </MenuItem>
                <MenuItem value={"intitle"} key={"intitle"}>
                    Title
                </MenuItem>
                <MenuItem value={"inauthor"} key={"inauthor"}>
                    Author
                </MenuItem>
            </Select>
        </FormControl>
    )
}

export default Filter