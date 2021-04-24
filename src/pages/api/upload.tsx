const fs = require('fs')

export default async (req, res): Promise<void> => {
  fs.mkdir('./public/teste/', { resursive: true }, (err) => {
    return res.status(400).json({ message: `nao foi ${err}` })
  })
  console.log('foi')
}
