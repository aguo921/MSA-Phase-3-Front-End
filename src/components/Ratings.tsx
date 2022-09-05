import Tooltip from "@mui/material/Tooltip";
import Rating from "@mui/material/Rating"

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
        >
            <span>
                <Rating
                    name="rating"
                    precision={0.1}
                    value={
                        props.averageRating ? props.averageRating : null
                    }
                    readOnly
                />
            </span>
        </Tooltip>
    )
}

export default Ratings