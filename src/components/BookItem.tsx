// important material UI components
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";

// import components
import Ratings from "./Ratings";

// import styles
import styles from "./book_item.module.css";

// import fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';

// import interfaces
import { Book } from '../interfaces';

import Link from 'next/link';

function BookItem(props: Book) {
    return (
        (props.volumeInfo && props.id && props.volumeInfo.title) ? (
            <Paper
                key={props.id}
                elevation={2}
                sx={{ p: 5 }}
            >
                
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    <Link href={`/books/${props.id}`}>
                        <a>{props.volumeInfo.title}</a>
                        </Link>
                    </Typography>

                {props.volumeInfo.authors ? (
                    <Typography variant="h6">
                        Author: {props.volumeInfo.authors.join(", ")}
                    </Typography>
                ) : null}

                <Ratings
                    ratingsCount={props.volumeInfo.ratingsCount}
                    averageRating={props.volumeInfo.averageRating} />

                <Divider />
                {props.volumeInfo.imageLinks ? (
                    props.volumeInfo.imageLinks.thumbnail ? (
                        <picture>
                            <img
                                src={props.volumeInfo.imageLinks.thumbnail.replace("http:", "")}
                                className={styles.bookimage}
                                alt={
                                    props.volumeInfo.authors ? (
                                        `${props.volumeInfo.title} by ${props.volumeInfo.authors.join(", ")}`
                                    ) : (
                                        props.volumeInfo.title
                                    )
                                }
                            />
                        </picture>
                    ) : null
                ) : null}


                <Accordion
                    elevation={0}
                    disableGutters
                    sx={{borderTop: 1, borderColor: 'grey.500'}}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${props.id}-content`}
                        id={`panel${props.id}-header`}
                    >
                        <Typography sx={{ fontWeight: "bold" }}>
                            Description
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography sx={{ textAlign: "justify" }}>
                            {props.volumeInfo.description ? (
                                props.volumeInfo.description
                            ) : (
                                `No description available.`
                            )
                            }
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Paper>
        ) : null
    )
}
            

export default BookItem;