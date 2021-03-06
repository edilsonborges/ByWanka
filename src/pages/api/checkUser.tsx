import { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../../utils/database'

interface SuccessResponseType {
  _id: string
  fullName: string
  email: string
  password: string
}

interface ErrorResponseType {
  error: string
}

const checkUser = async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponseType>
): Promise<void> => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(400).json({ error: 'Digite o email e a senha' })
    return
  }

  const { db } = await connect()

  if (req.method === 'POST') {
    const users = await db
      .collection('users')
      .find({
        email
      })
      .forEach((response) => {
        res.status(200).json(response)
      })
  }
}

export default checkUser
