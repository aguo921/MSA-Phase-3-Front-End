export type Book = {
    kind?: string,
    id?: string,
    etag?: string,
    selfLink?: string,
    volumeInfo?: {
        title?: string,
        authors?: string[],
        publisher?: string,
        publisherDate?: string,
        description?: string,
        industryIdentifiers?: IndustryIdentifier[],
        pageCount?: number,
        dimensions?: {
            height?: string,
            width?: string,
            thickness?: string
        },
        printType?: string,
        mainCategory?: string,
        categories?: string[],
        averageRating?: number,
        ratingsCount?: number,
        contentVersion?: string,
        imageLinks?: {
            smallThumbnail?: string,
            thumbnail?: string,
            small?: string,
            medium?: string,
            large?: string,
            extraLarge?: string
        },
        language?: string,
        infoLink?: string,
        canonicalVolumeLink?: string
    }
    salesInfo?: {
        country?: string,
        saleability?: string,
        isEbook?: boolean,
        listPrice?: {
            amount?: number,
            currencyCode?: string
        },
        retailPrice?: {
            amount?: number,
            currencyCode?: string
        },
        buyLink?: string,
    },
    accessInfo?: {
        country?: string,
        viewability?: string,
        embeddable?: boolean,
        publicDomain?: boolean,
        textToSpeechPermission?: string,
        epub?: {
            isAvailable?: boolean,
            acsTokenLink?: string
        },
        pdf?: {
            isAvailable?: boolean
        },
        accessViewStatus?: string
    },
    searchInfo?: {
        textSnippet?: string
    }
}

export type BookListProps = {
    books: Book[]
}

export type IndustryIdentifier = {
    type?: string,
    identifier?: string
}

export type SearchResults = {
    kind?: string,
    items: Book[],
    totalItems?: 3
} | undefined

export type SearchBy = "any" | "intitle" | "inauthor"

export type FilterProps = {
    searchBy: SearchBy,
    setSearchBy: (a: SearchBy) => void
}

export type SearchBarProps = {
    value: string,
    setValue: (a: string) => void
}

export type SearchButtonProps = {
    onClick: (a: void) => void
}

export type RatingsProps = {
    ratingsCount: number | undefined,
    averageRating: number | undefined
}

export type HeaderProps = {
    // setQuery: (a: string) => void,
    // onSearch: (a: void) => void
    setSearchInfo: (a: SearchResults) => void
}