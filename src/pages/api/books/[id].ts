import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    const response = await fetch(`${process.env.GOOGLE_BOOKS_BASE_URL}/volumes/${id}?key=${process.env.API_KEY}`)
    const data = await response.json()

    return data.volumeInfo
        ? res.status(200).json({
            id: data.id,
            title: data.volumeInfo.title,
            authors: data.volumeInfo.authors,
            description: data.volumeInfo.description
        })
        : res.status(404).json({ message: `Book with volume id: ${id} not found.` })
  }