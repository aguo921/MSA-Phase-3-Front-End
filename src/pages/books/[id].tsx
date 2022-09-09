// import material UI components
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

//  import styles
import styles from './../../components/book_item.module.css';

// import components
import Header from './../../components/Header';
import Layout from './../../components/Layout';
import Ratings from './../../components/Ratings';

// import server side generation props
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

import useMediaQuery from '@mui/material/useMediaQuery';

import { useTheme } from '@mui/material/styles';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    if (context.params) {
        const res = await fetch(`${process.env.GOOGLE_BOOKS_BASE_URL}/volumes/${context.params.id}?key=${process.env.API_KEY}`)
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

    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Layout>
            <Header />
            <Paper
                elevation={2}
                sx={{ p: small ? 2 : 5 }}
            >
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
                </Container>
            ) : null }
            </Paper>
        </Layout>
    )
}