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

export default async (
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
    const query = {
      email
    }
console.log(query);

    const response = await db.collection('users').find(query)
    console.log(response)
    res.status(200).json(response)
  }
}



// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// /*
//  * Requires the MongoDB Node.js Driver
//  * https://mongodb.github.io/node-mongodb-native
//  */

// const filter = {
//   'email': 'teste@teste.com'
// };

// MongoClient.connect(
//   '',
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   function(connectErr, client) {
//     assert.equal(null, connectErr);
//     const coll = client.db('bywanka').collection('users');
//     coll.find(filter, (cmdErr, result) => {
//       assert.equal(null, cmdErr);
//     });
//     client.close();
//   });
