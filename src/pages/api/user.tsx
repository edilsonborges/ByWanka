import { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../../utils/database'

interface SuccessResponseType {
  _id: string
  name: string
  email: string
}
interface ErrorResponseType {
  error: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponseType>
): Promise<void> => {
  const { name, email } = req.body

  if (!name || !email) {
    res.status(400).json({ error: 'Missing Values' })
    return
  }

  const { db } = await connect()

  if (req.method === 'POST') {
    const response = await db.collection('users').insertOne({
      name: 'Edilson',
      age: 31
    })
    res.status(200).json(response.ops[0])
  }
}
