// import material UI components
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import styles from './bookdetails.module.css';

import Container from '@mui/material/Container';

import Layout from './Layout';
import Ratings from './Ratings';

import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const GOOGLE_BOOKS_BASE_URL = "https://www.googleapis.com/books/v1/volumes"
    const API_KEY = "AIzaSyAKbgA01Ljc6tBu_YjrhTly0hLu0OtgQh8"

    if (context.params) {
        const res = await fetch(`${GOOGLE_BOOKS_BASE_URL}/${context.params.id}?key=${API_KEY}`)
        const data = await res.json()
        if (!data) {
            return {
                notFound: true,
            }
        }
    
        return {
            props: { data }
        }

    } else {
        return {
            notFound: true
        }
    }

}

export default function Page({ data }: any) {
    function choose_image(image_links: any) {
        return (
            image_links.extraLarge ? (
                image_links.extraLarge
            ) : image_links.large ? (
                image_links.large
            ) : image_links.medium ? (
                image_links.medium
            ) : image_links.small ? (
                image_links.small
            ) : image_links.thumbnail ? (
                image_links.thumbnail
            ) : image_links.smallThumbnail ? (
                image_links.smallThumbnail
            ) : undefined
        )
    }
    return (
        <Layout>
            {data && data.volumeInfo ? (
                <Container maxWidth="sm" sx={{py: 10}}>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        {data.volumeInfo.title}
                    </Typography>

                    {data.volumeInfo.authors ? (
                        <Typography variant="h6">
                            Author: {data.volumeInfo.authors.join(", ")}
                        </Typography>
                    ) : null}
                    
                    <Ratings
                        ratingsCount={data.volumeInfo.ratingsCount}
                        averageRating={data.volumeInfo.averageRating}
                    />

                    <Divider />

                    {data.volumeInfo.imageLinks && choose_image(data.volumeInfo.imageLinks) ? (
                        <picture>
                            <img
                                src={choose_image(data.volumeInfo.imageLinks).replace("http:", "")}
                                alt={
                                    data.volumeInfo.authors ? (
                                        `${data.volumeInfo.title} by ${data.volumeInfo.authors.join(", ")}`
                                    ) : (
                                        data.volumeInfo.title
                                    )
                                }
                                className={styles.bookimage}
                            />
                        </picture>
                    ) : null}

                    <Typography sx={{ textAlign: "justify" }}>
                        {
                            data.volumeInfo.description ? (
                                <div dangerouslySetInnerHTML={{__html: data.volumeInfo.description}} />
                            ) : (
                                `No description available.`
                            )
                        }
                    </Typography>
                    <a href='../'>
                        <Typography sx={{color: 'blue'}}>Back to home</Typography>
                    </a>
                </Container>
            ) : null }
        </Layout>
    )
}