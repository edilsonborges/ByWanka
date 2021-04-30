import { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../../utils/database'

interface SuccessResponseType {
  _id: string
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

interface ErrorResponseType {
  error: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponseType>
): Promise<void> => {
  const { fullName, email, password, confirmPassword } = req.body

  if (!fullName || !email || !password || !confirmPassword) {
    res.status(400).json({ error: 'Missing Values' })
    return
  }

  const { db } = await connect()

  if (req.method === 'POST') {
    const response = await db.collection('users').insertOne({
      fullName,
      email,
      password,
      confirmPassword
    })
    res.status(200).json(response.ops[0])
  }
}
