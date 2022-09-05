// import material UI components
import Stack from "@mui/material/Stack";

// import components
import BookItem from "./BookItem";

// import fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import interfaces
import { Book, BookListProps } from '../interfaces';

function BookList(props: BookListProps) {
    return (
        <Stack
        spacing={5}
        sx={{py: 5}}
    >
        {props.books.map((book: Book) => (
            <div key={book.id}>
                <BookItem {...book} />
            </div>
        ))}
    </Stack>
    )
}

export default BookList;