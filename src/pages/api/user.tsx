import { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../../utils/database'
import bcrypt from 'bcrypt'

interface SuccessResponseType {
  _id: string
  fullName: string
  email: string
  password: string
}

interface ErrorResponseType {
  error: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponseType>
): Promise<void> => {
  const { fullName, email, password, confirmPassword } = req.body

  if (password !== confirmPassword) {
    res.status(400).json({ error: "Passowrd doesn't mach" })
    return
  }

  if (!fullName || !email || !password || !confirmPassword) {
    res.status(400).json({ error: 'Missing Values' })
    return
  }

  const { db } = await connect()

  const saltPassword = await bcrypt.genSalt(10)
  const securePassword = await bcrypt.hash(password, saltPassword)

  if (req.method === 'POST') {
    const response = await db.collection('users').insertOne({
      fullName,
      email,
      securePassword
    })
    res.status(200).json(response.ops[0])
  }
}
