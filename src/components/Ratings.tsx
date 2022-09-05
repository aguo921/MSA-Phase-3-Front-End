// import material UI components
import Tooltip from "@mui/material/Tooltip";
import Rating from "@mui/material/Rating"
import Box from "@mui/material/Box";

// import interfaces
import { RatingsProps } from "../interfaces";

function Ratings(props: RatingsProps) {
    return (
        <Tooltip
            title={
                props.ratingsCount ? (
                    props.ratingsCount === 1 ? (
                        `1 rating`
                    ) : (
                        `${props.ratingsCount} ratings`
                    )
                ) : `0 ratings`
            }
            placement="right"
            describeChild
            arrow
        >
            <Box sx={{display: 'inline-block'}}>
                <Rating
                    name="rating"
                    precision={0.1}
                    value={
                        props.averageRating ? props.averageRating : null
                    }
                    readOnly
                    sx={{ py: 2 }}
                />
            </Box>
        </Tooltip>
    )
}

export default Ratings